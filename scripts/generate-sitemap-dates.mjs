#!/usr/bin/env node
/**
 * Regenerates `lib/sitemap-dates.ts` — the `lastModified` value the sitemap
 * reports for every route.
 *
 * Why this is a script and not a hand-maintained list: `app/sitemap.ts` used to
 * carry a literal date per entry, defaulting to a `LAST_AUDIT` constant. Six
 * content passes later, 60-odd routes that had been substantially rewritten
 * were still declaring 2026-08-14, which tells Google the opposite of the
 * truth. Hand-maintained dates in a 90-route file drift on the first pass that
 * forgets them, and nothing catches it.
 *
 * The rule: a route's date is the date of the last commit that changed the
 * page's rendered body. That means its own `page.tsx`, plus — for routes whose
 * body lives in a shared module — that module. `BODY_MODULES` is the list; add
 * to it if you build another page whose text lives outside its `page.tsx`.
 *
 * Not `lastModified: new Date()`, which is the tempting one-liner and is a lie
 * on every route that has not changed. `AI-WEBSITE-GUIDE.md` bans fabricated
 * `lastModified` dates, and "today, for everything, on every build" is the
 * purest form of that.
 *
 * The corollary is a rule for people, not code: do not touch a page just to
 * refresh its date. The value is only worth anything while it is true.
 *
 *   node scripts/generate-sitemap-dates.mjs
 *
 * Re-run it as the last step of a content pass, before committing.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

/** Shared modules that render a page's body, keyed by the import token to look for. */
const BODY_MODULES = [
  '@/components/registration-state-page',
  '@/lib/company-registration',
  '@/lib/service-depth',
  '@/lib/regional-context',
  '@/components/article-layout',
  '@/lib/us-states',
  '@/lib/market-depth',
  '@/lib/us-return-depth',
  '@/lib/real-estate-industry',
  '@/lib/industry-depth',
  '@/lib/industry-segments',
  '@/lib/cpa-firms-industry',
  '@/lib/property-management-industry',
  '@/lib/hoa-industry',
];

/**
 * Commits that touched a body module but changed nothing a crawler sees.
 *
 * A shared module can be edited without any route's rendered HTML moving — the
 * usual case is adding or removing a client component that returns `null` on
 * the server. Dating 19 article pages from a commit like that publishes
 * "this page changed" to Google about pages whose bytes are identical, which is
 * exactly the fabricated `lastmod` `AI-WEBSITE-GUIDE.md` bans and the reason
 * this file is generated at all.
 *
 * So a commit listed here is skipped when dating a route, and the date falls
 * back to the previous commit that did change something. Add a SHA here only
 * when you have confirmed the rendered output is byte-identical — the safe
 * default is to leave it out and let the date move.
 *
 *   9bcb2c5 — moved <ScrollInquiryPrompt> out of ArticleLayout into the layout
 *             mount. It renders nothing on the server, so the server HTML of
 *             all 19 article routes is unchanged.
 */
const NON_RENDERING_COMMITS = new Set(['9bcb2c5']);

function lastCommitDate(relPath) {
  const log = execFileSync(
    'git',
    ['log', '-20', '--format=%h %ad', '--date=short', '--', relPath],
    { cwd: ROOT, encoding: 'utf8' },
  ).trim();
  for (const line of log.split('\n')) {
    const [sha, date] = line.split(' ');
    if (!sha) continue;
    if (NON_RENDERING_COMMITS.has(sha)) continue;
    return date;
  }
  return null;
}

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

const dates = {};
for (const file of walk(path.join(ROOT, 'app')).sort()) {
  const rel = path.relative(ROOT, file);
  const route = '/' + path.dirname(path.relative(path.join(ROOT, 'app'), file)).replace(/^\.$/, '');
  const source = fs.readFileSync(file, 'utf8');
  const deps = [rel, ...BODY_MODULES.filter((m) => source.includes(m)).map((m) => resolveModule(m))];
  const found = deps.map(lastCommitDate).filter(Boolean);
  if (found.length) dates[route.replace(/\/$/, '') || '/'] = found.sort().pop();
}

function resolveModule(token) {
  const base = token.replace('@/', '');
  for (const ext of ['.tsx', '.ts']) {
    if (fs.existsSync(path.join(ROOT, base + ext))) return base + ext;
  }
  return base;
}

const body = Object.entries(dates)
  .sort(([a], [b]) => (a < b ? -1 : 1))
  .map(([route, date]) => `  '${route === '/' ? '' : route}': '${date}',`)
  .join('\n');

const out = `/**
 * GENERATED — do not edit by hand.
 * Run \`node scripts/generate-sitemap-dates.mjs\` after a content pass.
 *
 * Each value is the date of the last commit that changed that route's rendered
 * body. See the script's header for why this is derived rather than written.
 */
export const routeLastModified: Record<string, string> = {
${body}
};
`;

fs.writeFileSync(path.join(ROOT, 'lib/sitemap-dates.ts'), out);
console.log(`wrote lib/sitemap-dates.ts — ${Object.keys(dates).length} routes`);
