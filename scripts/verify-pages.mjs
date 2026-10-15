#!/usr/bin/env node
/**
 * Page-format verifier. The enforceable half of `docs/PAGE-FORMAT.md`.
 *
 * This exists because the October 2026 audit found 54 truncating titles, 108
 * pages missing from llms.txt, 3 pages with no <main> and 20 emitting FAQ
 * schema no reader could see -- every one of them a rule that was already
 * written down somewhere and checked by nobody. A guide that is only prose
 * gets skipped by the next agent in a hurry. This does not.
 *
 *   node scripts/verify-pages.mjs                 # whole site
 *   node scripts/verify-pages.mjs /blog/my-page   # one route, while drafting
 *
 * Requires a server on :3100 (`pnpm next build && pnpm next start -p 3100`).
 * Run it against a PRODUCTION build, never `next dev` -- dev injects an overlay
 * and streams metadata differently, so dev output cannot be trusted for any of
 * these checks.
 *
 * Exit code is the number of failing rules, so CI can gate on it.
 */
import { readFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';

const BASE = process.env.BASE_URL || 'http://localhost:3100';
const SITE = 'https://www.accounstone.com';

/** Page-side title budget. The `%s | Accounstone` template adds 14 characters. */
const TITLE_MAX = 46;
const DESC_MIN = 110;
const DESC_MAX = 160;

/**
 * Minimum body words by page type, from the measured medians of the pages that
 * already work. These are FLOORS, not targets -- a page under its floor is
 * usually missing a section, not missing padding. Hubs are deliberately short
 * and are exempt.
 */
const FLOOR = {
  'blog post': 650,
  'guide/insight': 900,
  'service x region': 1000,
  'industry hub page': 900,
  'industry sub-page': 650,
  'market sub-page': 900,
  'registration state': 900,
  homepage: 1200,
  'section hub': 0,
  other: 0,
};

/** The 7 retired generic service URLs. Linking one is linking a 308. */
const REDIRECT_SOURCES = new Set([
  '/services/bookkeeping', '/services/accounting', '/services/tax-preparation',
  '/services/payroll', '/services/accounts-payable', '/services/accounts-receivable',
  '/services/audit-support',
]);

/**
 * The only routes that carry hreflang. See the comment in lib/seo.ts: these are
 * the same offer written for a different market in the same language. A market
 * SUB-page is not one of them -- /markets/united-kingdom/vat-returns has no
 * Australian counterpart.
 */
const HREFLANG_ROUTES = new Set([
  ...['bookkeeping', 'accounting', 'tax-preparation', 'payroll', 'accounts-payable',
    'accounts-receivable', 'audit-support'].flatMap((s) =>
    ['united-states', 'united-kingdom', 'australia'].map((r) => `/services/${s}/${r}`)),
  '/markets/united-states', '/markets/united-kingdom', '/markets/australia',
]);

function kindOf(p) {
  const s = p.replace(/^\/|\/$/g, '').split('/');
  if (p === '/') return 'homepage';
  if (s[0] === 'blog' && s.length > 1) return 'blog post';
  if (s[0] === 'resources' && s.length > 2) return 'guide/insight';
  if (s[0] === 'services' && s.length >= 3) return 'service x region';
  if (s[0] === 'industries' && s.length === 2) return 'industry hub page';
  if (s[0] === 'industries' && s.length > 2) return 'industry sub-page';
  if (s[0] === 'markets' && s.length > 1) return 'market sub-page';
  if (s[0] === 'company-registration' && s.length > 1) return 'registration state';
  if (s.length === 1 && ['blog','resources','services','industries','markets','solutions','technology'].includes(s[0])) return 'section hub';
  return 'other';
}

const strip = (h) => h.replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();

async function routesOnDisk() {
  const out = [];
  async function walk(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, e.name);
      if (e.isDirectory()) await walk(full);
      else if (e.name === 'page.tsx') {
        const r = '/' + relative('app', dir).split('\\').join('/');
        out.push(r === '/.' || r === '/' ? '/' : r.replace(/\/$/, ''));
      }
    }
  }
  await walk('app');
  return [...new Set(out)].sort();
}

async function check(route) {
  const fails = [];
  const add = (rule, detail) => fails.push({ route, rule, detail });

  const res = await fetch(BASE + route, { redirect: 'manual' });
  if (res.status === 308 || res.status === 301) return { fails, skipped: 'redirect source' };
  if (res.status !== 200) { add('route resolves', `status ${res.status}`); return { fails }; }
  const html = await res.text();
  if (/<meta name="robots"[^>]*noindex/.test(html)) return { fails, skipped: 'noindex' };

  const kind = kindOf(route);

  // --- metadata -----------------------------------------------------------
  const noSvg = html.replace(/<svg[\s\S]*?<\/svg>/g, ' ');
  const title = strip((noSvg.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]);
  const page = title.replace(/\s*\|\s*Accounstone\s*$/, '');
  if (!title) add('has a <title>');
  else if (page.length > TITLE_MAX) add('title within budget', `${page.length} > ${TITLE_MAX} page-side ("${page}")`);

  const desc = strip((html.match(/<meta name="description" content="([\s\S]*?)"/) || [, ''])[1]);
  if (!desc) add('has a meta description');
  else if (desc.length < DESC_MIN || desc.length > DESC_MAX) add('description within budget', `${desc.length} outside ${DESC_MIN}-${DESC_MAX}`);

  if (!/<link rel="canonical"/.test(html)) add('has a canonical');

  // --- structure ----------------------------------------------------------
  if (!/<main[\s>]/.test(html)) add('has a <main> landmark');
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  const body = main.replace(/<(script|style|svg)[\s\S]*?<\/\1>/g, ' ');

  const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => strip(m[1]));
  if (h1s.length !== 1) add('exactly one h1 inside <main>', `found ${h1s.length}`);

  const heads = [...body.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => [+m[1], strip(m[2])]);
  let prev = 0;
  for (const [lv, t] of heads) {
    if (prev && lv > prev + 1) { add('no heading-level skips', `h${prev} -> h${lv} at "${t.slice(0, 40)}"`); break; }
    prev = lv;
  }

  const words = strip(body).split(' ').filter(Boolean).length;
  const floor = FLOOR[kind] ?? 0;
  if (floor && words < floor) add('meets the word floor for its type', `${words} < ${floor} (${kind})`);

  // --- closing sequence ---------------------------------------------------
  const inquiry = (main.match(/id="inquiry"/g) || []).length;
  const cta = (main.match(/cta-glow dot-grid-dark/g) || []).length;
  const EXEMPT = ['/contact', '/thank-you'];
  if (!EXEMPT.includes(route)) {
    if (inquiry !== 1) add('exactly one #inquiry band', `found ${inquiry}`);
    if (cta < 1) add('ends with a CTA banner', `found ${cta}`);
    if (inquiry === 1 && cta >= 1 && main.indexOf('id="inquiry"') > main.lastIndexOf('cta-glow dot-grid-dark'))
      add('closing order is band then banner');
  }

  // --- links --------------------------------------------------------------
  for (const m of body.matchAll(/href="(\/[^"#?]*)"/g)) {
    const h = m[1].replace(/\/$/, '') || '/';
    if (REDIRECT_SOURCES.has(h)) { add('no internal link to a redirect', h); break; }
  }

  // --- structured data ----------------------------------------------------
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const types = new Set();
  const faqAnswers = [];
  for (const b of blocks) {
    let o;
    try { o = JSON.parse(b.replace(/&quot;/g, '"').replace(/&amp;/g, '&')); } catch { continue; }
    for (const x of Array.isArray(o) ? o : [o]) {
      if (!x || typeof x !== 'object') continue;
      if (x['@type']) types.add(String(x['@type']));
      if (x['@type'] === 'FAQPage') for (const q of x.mainEntity || []) faqAnswers.push(q?.acceptedAnswer?.text || '');
    }
  }
  if (!types.has('Organization')) add('emits Organization schema');
  const NO_CRUMB = ['/', '/privacy', '/terms', '/cookie-policy'];
  if (!types.has('BreadcrumbList') && !NO_CRUMB.includes(route)) add('emits BreadcrumbList schema');

  // FAQ answers must be visible text, or the markup is a violation
  // Compare words, not an exact slice. A list answer is joined with '; ' in
  // the schema and rendered as separate <li>s, so the punctuation differs while
  // every word is genuinely on the page. What matters for Google is that the
  // content is visible, not that the separators match.
  const visibleWords = new Set(strip(body).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/));
  for (const a of faqAnswers) {
    const probe = a.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 3).slice(0, 14);
    if (!probe.length) continue;
    const missing = probe.filter((w) => !visibleWords.has(w));
    if (missing.length > probe.length * 0.25) {
      add('FAQ answers are visible on the page', `"${a.slice(0, 55)}…" (${missing.length}/${probe.length} words absent)`);
      break;
    }
  }
  if (types.has('Article') && !/"dateModified"/.test(html)) add('Article carries dateModified');

  // --- hreflang -----------------------------------------------------------
  // Only two clusters on this site have genuine regional variants: the 21
  // Service x Region pages and the 3 market pages. Each must declare all three
  // alternates plus an x-default, and nothing else may declare any -- a page
  // that exists once has no alternate, and inventing one points Google at a
  // page that answers a different question. lib/seo.ts derives these from the
  // path, so a failure here means either a new regional cluster that the
  // helper does not know about, or hreflang hand-written onto a page.
  const alts = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)"/gi)].map((m) => m[1]);
  const wantsHreflang = HREFLANG_ROUTES.has(route);
  if (wantsHreflang) {
    const missing = ['en-US', 'en-GB', 'en-AU', 'x-default'].filter((l) => !alts.includes(l));
    if (missing.length) add('regional variants declare hreflang', `missing ${missing.join(', ')}`);
  } else if (alts.length) {
    add('no hreflang on a page that exists once', alts.join(', '));
  }

  return { fails, info: { kind, words, faq: faqAnswers.length } };
}

const argv = process.argv.slice(2);
const all = await routesOnDisk();
const targets = argv.length ? argv : all;

const results = [];
for (let i = 0; i < targets.length; i += 8) {
  results.push(...await Promise.all(targets.slice(i, i + 8).map(check)));
}

const fails = results.flatMap((r) => r.fails);
const checked = results.filter((r) => !r.skipped).length;

// --- whole-site invariants (only when checking everything) ----------------
if (!argv.length) {
  const sitemap = new Set(
    [...(await (await fetch(BASE + '/sitemap.xml')).text()).matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1].replace(SITE, '').replace(/\/$/, '') || '/')
  );
  const llms = new Set(
    [...readFileSync('public/llms.txt', 'utf8').matchAll(/https:\/\/www\.accounstone\.com([^\s)]*)/g)]
      .map((m) => m[1].replace(/\/$/, '') || '/')
  );
  const live = targets.filter((_, i) => !results[i].skipped);
  for (const route of live) {
    if (!sitemap.has(route)) fails.push({ route, rule: 'listed in app/sitemap.ts', detail: 'missing from the generated sitemap' });
    if (!llms.has(route)) fails.push({ route, rule: 'listed in public/llms.txt', detail: 'missing' });
  }
  for (const u of sitemap) if (!all.includes(u)) fails.push({ route: u, rule: 'sitemap URL has a page', detail: 'in sitemap, no page.tsx' });
  if (!existsSync('lib/sitemap-dates.ts')) fails.push({ route: '-', rule: 'sitemap dates generated', detail: 'lib/sitemap-dates.ts missing' });
}

const byRule = new Map();
for (const f of fails) {
  if (!byRule.has(f.rule)) byRule.set(f.rule, []);
  byRule.get(f.rule).push(f);
}

console.log(`checked ${checked} indexable route(s)\n`);
if (!fails.length) {
  console.log('PASS — every page-format rule holds.');
  process.exit(0);
}
for (const [rule, list] of [...byRule].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`FAIL  ${rule}  (${list.length})`);
  for (const f of list.slice(0, 12)) console.log(`        ${f.route}${f.detail ? '  — ' + f.detail : ''}`);
  if (list.length > 12) console.log(`        …and ${list.length - 12} more`);
  console.log();
}
console.log(`${fails.length} failing check(s) across ${byRule.size} rule(s)`);
process.exit(Math.min(fails.length, 250));
