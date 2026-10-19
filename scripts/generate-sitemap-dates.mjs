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
 *
 * ---------------------------------------------------------------------------
 * READ THIS BEFORE RUNNING IT WHOLESALE (2026-10-15)
 * ---------------------------------------------------------------------------
 * This script's whole premise is that git history records when a page changed.
 * That premise broke in this repository: `dc823de` (2026-10-10) is the ROOT
 * commit and added 353 files with zero deletions -- the history was re-created,
 * so no file here has any history before that date.
 *
 * The consequence is specific and easy to miss. Running this script now dates
 * every route that has not been edited since the re-import at 2026-10-10,
 * because that is the earliest commit containing the file. On 2026-10-15 that
 * meant 57 routes -- /about, /privacy, /compliance, the registration cluster,
 * the market sub-pages -- would have moved from truthful September dates to the
 * import date. None of those pages changed on 2026-10-10; they were copied.
 * Publishing that to Google is the fabricated `lastmod` this file exists to
 * prevent, just arriving through the tool rather than around it.
 *
 * So: run it, then DIFF `lib/sitemap-dates.ts` before committing, and keep only
 * the routes you actually changed. A route whose date moves to 2026-10-10 is
 * the import showing through, not a content change. The dates already committed
 * for those routes are the more truthful record and should be left alone.
 *
 * This resolves itself naturally -- once a page is genuinely edited after the
 * re-import, its real date is in history again and the script is right about
 * it. 127 routes were already in that position on 2026-10-15.
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
 *   a2dfd16 — made the Article schema's dateModified fall back to
 *     publishedDate. article-layout.tsx is a BODY_MODULE, so a scheduled
 *     regeneration attributed it to all 82 ArticleLayout routes and moved them
 *     to 2026-10-16. Measured before listing it, as the rule below requires:
 *     every one of those 82 ALREADY carried a dateModified, because its
 *     generated date was newer than its publishedDate, so `?? publishedDate`
 *     never fires on them and the value is unchanged. The fallback only ever
 *     affects a page with no git history, i.e. a brand-new one. 82 routes
 *     byte-identical, 0 changed.
 *             mount. It renders nothing on the server, so the server HTML of
 *             all 19 article routes is unchanged.
 */
const NON_RENDERING_COMMITS = new Set(['9bcb2c5', 'a2dfd16']);

/**
 * Commits that changed a body module for SOME of its routes but not others.
 *
 * `NON_RENDERING_COMMITS` is all-or-nothing: a SHA listed there is skipped for
 * every route. That is the wrong tool for the common case, which is a shared
 * module whose change is conditional on the page — `getRelatedLinks` in
 * `article-layout.tsx` branches on the slug, so editing one branch moves the
 * HTML of the routes that match it and leaves every other route byte-identical.
 * Listing such a commit as non-rendering would under-date the pages that really
 * did change; leaving it out over-dates the ~60 that did not. Neither is true.
 *
 * So each entry names the routes the commit DOES affect. A route that does not
 * match skips the commit and falls back to the previous one that changed
 * something; a route that matches is dated from it as normal.
 *
 * The same evidence bar as `NON_RENDERING_COMMITS` applies: read the diff and
 * confirm the predicate matches the condition in the code, and when in doubt
 * leave the commit out so the date moves. Prefer a predicate that restates the
 * condition from the source over a frozen list of today's routes, so it stays
 * correct as articles are added.
 *
 *   705ff4c — added a `hoa-accounting-yardi || yardi-accounting-workflow`
 *     branch at the TOP of getRelatedLinks. Only those two slugs change: one
 *     previously fell through to the `hoa-` branch, the other to the default.
 *     Every other article evaluates exactly as before.
 *   20e8fa4 — rewrote the body of the `hoa-` branch, dropping the link to
 *     `/services/hoa-accounting` (a 301 source). Affects `hoa-` slugs only.
 *
 * Found 2026-10-19: these two commits moved 120 routes to that day's date,
 * when the great majority — 7 blog posts, 11 guides, 2 insights and the whole
 * property-management article set — render identically either way.
 */
const PARTIAL_RENDERING_COMMITS = new Map([
  ['705ff4c', /hoa-accounting-yardi|yardi-accounting-workflow/],
  ['20e8fa4', /hoa-/],
]);

/**
 * Commits that put a file here without changing it — the 2026-10-10 history
 * re-import. `dc823de` is this repository's ROOT commit and added 353 files
 * with zero deletions, so for any page not edited since, it is the newest (and
 * only) commit touching it. Dating a page from it publishes "changed on
 * 2026-10-10" for a page that was merely copied in.
 *
 * These are NOT in NON_RENDERING_COMMITS, because skipping them outright
 * leaves a route with no date at all and it is dropped from the file entirely
 * (see `if (found.length)` below) — 57 routes would silently lose their
 * `lastmod`. Instead, a route whose date resolves to an import commit KEEPS
 * the date already committed in this file, which is the curated, more truthful
 * value. That also makes this script idempotent: re-running it can no longer
 * walk a date backwards to the import date.
 *
 * Found 2026-10-16 after a scheduled run committed exactly that regression on
 * 57 routes, including /about, /privacy, /compliance and the whole
 * registration cluster.
 */
const IMPORT_COMMITS = new Set(['dc823de']);

/**
 * The three sets above are keyed by readable 7-character SHAs, but git's
 * abbreviation length is adaptive — it grows with the repository's object
 * count. A shallow working clone prints 7 characters; a CI checkout using
 * `fetch-depth: 0` prints more. So `%h` is NOT a stable key, and a `Set.has`
 * against it silently misses in exactly one environment: the workflow.
 *
 * That is not hypothetical. It is why `refresh-sitemap-dates.yml` kept
 * reverting dates a local run had just produced correctly, and it means
 * `IMPORT_COMMITS` — added 2026-10-16 after a scheduled run regressed 57
 * routes to the history-re-import date — had never once taken effect in the
 * workflow it was written to defend against.
 *
 * So `lastCommitDate` asks git for `%H` and these match by prefix: the keys
 * stay short and readable, and a full SHA from any clone still resolves.
 */
function listed(set, sha) {
  for (const key of set) if (sha.startsWith(key)) return true;
  return false;
}

function lookup(map, sha) {
  for (const [key, value] of map) if (sha.startsWith(key)) return value;
  return undefined;
}

/** Dates already committed in this file, so a regeneration cannot regress one. */
function previousDates() {
  const file = path.join(ROOT, 'lib/sitemap-dates.ts');
  if (!fs.existsSync(file)) return {};
  const prev = {};
  for (const m of fs.readFileSync(file, 'utf8').matchAll(/^  '([^']*)': '(\d{4}-\d{2}-\d{2})',/gm)) {
    prev[m[1] || '/'] = m[2];
  }
  return prev;
}

function lastCommitDate(relPath, route) {
  const log = execFileSync(
    'git',
    ['log', '-20', '--format=%H %ad', '--date=short', '--', relPath],
    { cwd: ROOT, encoding: 'utf8' },
  ).trim();
  for (const line of log.split('\n')) {
    const [sha, date] = line.split(' ');
    if (!sha) continue;
    if (listed(NON_RENDERING_COMMITS, sha)) continue;
    const affects = lookup(PARTIAL_RENDERING_COMMITS, sha);
    if (affects && !affects.test(route)) continue;
    return { sha, date };
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

const prev = previousDates();
const dates = {};
for (const file of walk(path.join(ROOT, 'app')).sort()) {
  const rel = path.relative(ROOT, file);
  const route = '/' + path.dirname(path.relative(path.join(ROOT, 'app'), file)).replace(/^\.$/, '');
  const source = fs.readFileSync(file, 'utf8');
  const deps = [rel, ...BODY_MODULES.filter((m) => source.includes(m)).map((m) => resolveModule(m))];
  const found = deps.map((dep) => lastCommitDate(dep, route)).filter(Boolean);
  if (!found.length) continue;
  const key = route.replace(/\/$/, '') || '/';
  const newest = found.sort((a, b) => (a.date < b.date ? -1 : 1)).pop();
  // An import commit is not a content change. Keep whatever this file already
  // says for the route, which a human curated; only use the import date when
  // there is nothing to fall back to.
  dates[key] =
    listed(IMPORT_COMMITS, newest.sha) && prev[key] ? prev[key] : newest.date;
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
