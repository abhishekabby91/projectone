# Accounstone — start here

Marketing site for Accounstone, an outsourced accounting company serving CPA firms and
growing businesses across the **US, UK, and Australia**.

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind v4 · **pnpm** (not npm) ·
deployed on Vercel, auto-deploying every push to `main` → https://www.accounstone.com

---

## Read these before changing anything

In this order. They are the authoritative sources; this file is only the index.

| File | What it governs |
|---|---|
| `AI-WEBSITE-GUIDE.md` | Tone, content rules, architecture, banned phrases, **"Known build gotchas"**. The single most important file. |
| `knowledge/company/scope-boundaries.md` | **What Accounstone does NOT do.** Every section exists because a real overclaim shipped to production. Check before writing any capability claim. |
| `docs/SEARCH-INTENTS.md` | One search intent → one URL. Check before creating a page. |
| `docs/ROUTES.md` | Route inventory + the sitemap drift check (below). |
| `docs/CONTENT-REGISTRY.md` | Blog/guide inventory and status. Check before writing content. |
| `SEO-CHANGELOG.md` | Dated record of every change and why. Append to it — do not rewrite history. |
| `knowledge/` | Per-service, per-market, per-ICP facts. The source of truth for claims. |

`SEO-AUDIT.md` and `ACCounstone-SEO-AGENT.md` are earlier strategy documents — useful
background, superseded on specifics by the files above.

---

## Current state (verified 2026-09-08)

- **90 routes** on disk, all returning 200; 88 in the sitemap (`/thank-you` and
  `/technology/myob` are both `noindex` and deliberately excluded — see the
  drift check below).
- **Services are region-first.** 21 commercial pages = 7 services × 3 regions, at
  `/services/{service}/{region}`. The matrix lives in `lib/data.ts` (`regions`,
  `serviceRegions`, `serviceRegionPaths`) and drives the navbar, footer, `/services`
  hub and `app/sitemap.ts` from one place. **Do not recreate a generic
  `/services/{slug}` page** — those 7 URLs are 301s and a generic page competes with
  its own regional children.
- Eight redirects, all single-hop: the 7 retired generic service URLs → a
  regional page, plus `/blog/outsourced-accounting-services` →
  `/resources/guides/outsourced-accounting-services-guide`. Six target United
  States; **`/services/audit-support` targets United Kingdom** (2026-09-03),
  because 40 of its 46 country-resolved impressions are British. The evidence
  for each of the seven is in the comment above the redirects in
  `next.config.mjs` — read it before changing any of them.
- **Markets are not in the primary navbar** but the pages are live, indexable and
  linked from the footer and contextually. All three are now firm-facing rather
  than educational: `/markets/{united-states,united-kingdom,australia}` each
  address that market's accounting firms, with packages, the local compliance
  calendar, a prepared/retained split and trust sections. They still measure
  1.4-3.6% overlap against their own Service × Region pages, and 6.9-14.2%
  against each other. Keep both boundaries.
- **Each market uses that market's own word for its audience.** CPA firms in the
  US, accountancy practices in the UK, accounting firms in Australia. Using the
  wrong one is the fastest signal that copy was not written for the market — do
  not let "CPA firm" leak into UK or AU copy, or "practice" into US copy.
- Zero duplicate titles/canonicals, zero missing metadata, zero missing or duplicate
  `h1`, zero accidental `noindex`, zero broken internal links, zero orphan pages,
  zero internal links pointing at a redirect.
- **Metadata is length-budgeted (2026-09-03).** Every page title fits inside 60
  characters *including* the `%s | Accounstone` template, so page titles are
  written to a 46-character budget; every description sits between 110 and 160.
  Before this pass 48 titles and 46 descriptions were being truncated in the
  SERP. If you add a page, hold the same budget — `docs/` has no separate copy
  of this rule, so it lives here.
- Heading order is sequential on every page: no `h1 -> h3`, no `h2 -> h4`.
- Worst near-duplicate pair across the 49 commercial routes is 18.3%; none above
  25%. (The higher figure is the `company-registration` trio, which shares a
  subject by construction. Adding depth to the platform and industry pages on
  2026-09-09 pushed their scores **down** — `quickbooks` vs `xero` went 17.4% to
  9.3% — because per-page substance dilutes shared boilerplate.)
- **Median route is 1118 words; 12 routes sit under 650 and 8 of those are hubs.**
  See "Thin pages: measure before writing" below for the list and why the hubs
  stay short.
- No horizontal overflow, and no sub-24px tap target, at 320 / 768 / 1280 / 1440px.
- **Six routes have one or fewer contextual inbound links, and all six are
  correct** — see "Internal links are measured, not assumed" below.
- All 88 sitemap URLs carry a `lastmod`, and every one is the real date of the
  last change to that page — generated, not written. `public/llms.txt` lists the
  same 88 and excludes the same two `noindex` routes.

### The navbar is not a crawl path

Dropdown contents render only when open, and parent items with children render as
`<button>`, not `<a>` — so **the navbar emits zero links into server HTML**. The
footer is the site's actual crawl skeleton. If you add a section, add it to the
footer or it will not be discovered by link. This is how `/technology` and `/blog`
ended up with zero inbound links before 2026-08-27.

**So when the footer is asked to be shorter, shorten the presentation, never the
link set.** On 2026-09-08 the three regional service columns (7 links each) were
replaced by one block of seven rows, each carrying `US · UK · AU` — the same 21
hrefs in the server HTML, in a third of the height. Dropping two of the three
regions would have looked like the same fix and would have orphaned 14 of the
site's 21 primary commercial pages.

The rest of the footer was restructured in the same pass: **four columns, two
blocks each**, because the previous shape put three blocks in one column and one
in another and left a ragged gap at the bottom of the grid. Delivery-framework
pages moved out of "Company" into their own **How We Work** block; Compliance
and Data Security moved into Company and out of the legal bar, where they had
been listed twice; `/solutions` and `/industries` gained the "All …" entry every
other section already had.

| viewport | before | after |
|---|---|---|
| 320px | 3171px | **2575px** |
| 390px | 2307px | 1826px |
| 768px | 1669px | 1120px |
| 1024px | 1392px | 989px |
| 1440px | 1315px | 973px |

Verified by diffing the rendered `<footer>` href set before and after: **no URL
was lost**, and the two additions are the `/solutions` and `/industries` hubs.
Check it that way if you touch this again — counting links in the JSX will not
catch a `.map()` that silently changed shape.

Two details in that block worth keeping: the **service name is plain text, not a
link**, because the generic `/services/{slug}` URLs are 301s and must never be
linked from anywhere; and each region link carries an `aria-label` with the full
name, because "US" on its own is not an accessible name.

## Open items — decisions, not engineering

Do **not** resolve these unilaterally. Each needs the owner.

1. **GA4 is installed (2026-09-03).** Measurement ID `G-D1L72NM0GY`, declared as
   `GA_MEASUREMENT_ID` in `app/layout.tsx` and loaded through `next/script` with
   `strategy="afterInteractive"` so it never competes with LCP. The ID is public
   by construction and belongs in the source, not an env var. `/thank-you` fires
   a `generate_lead` event via `components/conversion-event.tsx`.
   **Resolved 2026-09-04.** GA4 no longer loads until analytics consent
   exists — see "The cookie consent system" below. The privacy policy now has
   a Cookies and Analytics section, and `/cookie-policy` documents every item
   that can be stored. What remains open is legal rather than technical, and is
   listed on that page under `[CLIENT / LEGAL REVIEW REQUIRED]`.
2. **Search Console is connected (2026-09-03).** The `sc-domain:accounstone.com`
   property is readable. First 28-day read: 51 clicks, 2,893 impressions, 1.76%
   CTR, average position 54.6 — and only one query (`accounstone`, 15 clicks)
   has any clicks at all. Two things follow. There are no CTR quick wins: just
   14 queries sit in positions 6-20 and they total ~54 impressions, while every
   high-impression query ranks 36-75, so this is a ranking problem rather than a
   snippet one. The MYOB half of that read is resolved — see
   "/technology/myob is mostly traffic we cannot serve" below; it was noindexed
   on 2026-09-04. Ahrefs still returns `Insufficient plan` and Semrush reports
   insufficient API units, so backlink and competitor evidence remains
   unobtainable. (`robots.txt` also deliberately blocks AhrefsBot and
   SemrushBot.)

   **Access broke between 2026-09-04 and 2026-09-07, and nothing can be read
   until it is fixed.** `list_properties` still returns
   `sc-domain:accounstone.com`, but with `permission_level:
   "siteUnverifiedUser"`, and every analytics call now returns HTTP 403 "User
   does not have sufficient permission". Both connected MCP servers
   (`Geneio-projectone` and `GenieSEO`) are the same Google account and both
   fail identically, so it is the account's access that changed, not one
   connector. Likely causes, in order of probability: the DNS TXT record that
   verified the domain property was changed or removed, or the connected
   account's access was revoked in Search Console. **This is the owner's to
   fix** — re-verify the property, or re-grant that account at least Full user.
   Until then every GSC-driven decision in this file is frozen at its
   2026-09-04 reading. **Re-checked 2026-09-08: unchanged, still 403.** Do not
   spend a pass re-diagnosing it; check `list_properties` once, and if the
   permission level is still `siteUnverifiedUser`, say so and work on something
   that can be measured from inside the repo.
3. **Redirect targets are settled. The generic-tier question is not
   (2026-09-03).** The owner authorised deciding the retired-URL targets, and
   country-segmented GSC decided them: six of the seven stay on United States,
   `/services/audit-support` moved to United Kingdom (40 of 46 country-resolved
   impressions are British, and the US page it had been sending them to frames
   the work around US GAAS/PCAOB and calls the reader a CPA firm). The
   per-URL evidence is in the comment above the redirects in `next.config.mjs`.
   **Correction to the earlier reading recorded here:** the note that four
   retired URLs "rank better than any of their own regional children" was drawn
   from unsegmented positions and does not survive the country split.
   `/services/accounts-payable` at 27.2 resolves to three Indian impressions at
   11.3, and `/services/payroll` at 28.0 to two Indian and one Czech. India is
   the delivery centre, not a market. Only `/services/tax-preparation` (usa 59),
   `/services/accounts-receivable` (usa 40) and `/services/audit-support`
   (gbr 40) carry real market demand, and each now points at the market that
   wants it.
   **Still open, and still the owner's:** `/blog/tax-preparation-outsourcing`
   holds 366 impressions at position 27.8 across ~40 commercial tax-outsourcing
   queries — 320 of them American — while `/services/tax-preparation/united-states`
   holds **zero**. The blog post has 2 internal links to the service page's 14,
   so it is not a link-equity problem: Google is choosing a non-regional page for
   non-regional American queries. That is an argument for a generic tier above
   the regional pages, and it collides head-on with the "do not recreate a
   generic `/services/{slug}` page" rule above. Adding that tier is a
   restructure, not a redirect line. **Do not do it without the owner.**
4. **CFO Support and HR services.** Specified in the 2026-08-27 brief, excluded
   because `scope-boundaries.md` forbids both. The owner has said they may be added
   in future — that is a data change plus page files, not a restructure.
   `/services/cfo-support` never existed but had been indexed anyway (17
   impressions, position 56.9); `app/services/cfo-support/route.ts` now returns
   **410 Gone**. If the service is ever added, delete that route first.
5. **Is Canada a real market?** Paused by the owner. See `knowledge/company/identity.md`.
6. **Should "Financial reporting" be a named service line?** See `scope-boundaries.md`.

## Hard rules

These are the ones that caused real problems before. Full list in `AI-WEBSITE-GUIDE.md`.

- **Never claim IRS representation or power of attorney.** Requires a licensed CPA/EA/attorney under Circular 230.
- **Never claim tax planning, tax strategy, or tax advisory.** Accounstone prepares returns and the underlying books; strategy is the client's CPA or registered agent's role.
- **Never claim CFO, financial-advisory, or HR-compliance services.** Not offered in any form.
- **Never claim software implementation or configuration** for third-party platforms. Accounstone works *inside* an existing setup.
- **No absolutes** — "full compliance", "guaranteed", "we ensure", "Absolutely." Prefer "structured around", "aligned with", "prepared for".
- **Never invent** clients, testimonials, statistics, certifications, or credentials.
- **Verify a regulator actually applies to accounting services before naming it.** FCA and ASIC are financial-services regulators, not accounting-service ones.

---

## Working practice

**Branch, verify, then merge.** Work on `claude/<topic>`, run both checks below, merge to
`main` only when the owner says so — merging deploys to production immediately.

```bash
pnpm eslint .       # must be silent
pnpm next build     # must complete; a single bad prop breaks the whole type check
```

`pnpm`, never `npm` — `pnpm install --frozen-lockfile` mirrors Vercel's build step.

### Check duplication within a page, not just across pages

The restructure measured cross-page similarity throughout and kept it low. What
that missed: adding a second content block to an already-built page can repeat
what the page already said. `accounts-receivable/united-kingdom` ended up
stating statutory interest and VAT bad debt relief twice, in near-identical
wording, and it did not show up in any cross-page metric.

Content for these pages lives in two modules that both render on the same page:

- `lib/service-depth.ts` - the mechanics (workstreams, sequence, what the work is)
- `lib/regional-context.ts` - the situation (who the reader is, what goes wrong,
  what stays their decision)

Before adding to either, check them against each other. A quick 6-gram Jaccard
between the two entries for the same key is enough; anything above roughly 10%
means the page is repeating itself.

### The sitemap drift check

This repo's documented recurring failure mode. `app/sitemap.ts` mixes hardcoded `path:`
entries with URLs generated from `lib/data.ts`, so **grepping the source undercounts by
~30 and looks clean**. Diff against the generated sitemap instead, with `pnpm dev` running:

```bash
find app -name "page.tsx" | sed 's|^app||; s|/page.tsx$||; s|^$|/|' | sort > /tmp/disk.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]+</loc>' \
  | sed 's|<loc>https://www.accounstone.com||; s|</loc>||; s|^$|/|' | sort -u > /tmp/sitemap.txt

comm -13 /tmp/disk.txt /tmp/sitemap.txt   # in sitemap, no page  → would 404
comm -23 /tmp/disk.txt /tmp/sitemap.txt   # page exists, unlisted → never crawled
```

The first command must print nothing. **The second now prints exactly two
lines, `/technology/myob` and `/thank-you`, and both are correct** — each is
`noindex`, and a noindex URL in a sitemap is a contradiction Search Console
reports. Anything else in either direction is drift.

This check found four unlisted guides on 2026-08-21, and confirmed 84 ↔ 84
parity after the 2026-08-27 restructure. **As of 2026-09-07 it is 90 routes on
disk against 88 in the sitemap**, the two differences being the noindex pair
above.

`app/services/cfo-support/route.ts` is a `route.ts` returning 410, not a page,
so it appears in neither count.

### Sitemap `lastmod` is generated, not written

`app/sitemap.ts` no longer carries a date per entry. Every `lastModified` comes
from `lib/sitemap-dates.ts`, which is **generated** by
`scripts/generate-sitemap-dates.mjs` from the last commit that changed each
route's rendered body — its own `page.tsx`, plus the shared module its body
lives in, where there is one (the `BODY_MODULES` list in the script).

```bash
node scripts/generate-sitemap-dates.mjs   # run at the end of a content pass
```

It was hand-written before, defaulting to a `LAST_AUDIT = '2026-08-14'`
constant, and it drifted exactly the way everything hand-maintained in this file
drifts: on 2026-09-08 the sitemap declared 2026-08-14 for 41 URLs and had no
`lastmod` at all on 22 more, with the newest date anywhere in the file being
2026-08-27 — twelve days after four separate content passes had rewritten most
of the site. A stale `lastmod` is worse than none: it tells Google the pages you
just rewrote have not changed.

Two rules that go with it:

- **Never `lastModified: new Date()`.** It is the tempting one-liner and it is a
  fabricated date on every route that has not changed, which
  `AI-WEBSITE-GUIDE.md` bans.
- **Never touch a page just to refresh its date.** The value is worth something
  only while it is true.

`app/sitemap.ts` also used to spell out all 21 Service x Region URLs a second
time by hand, after the `serviceRegionPaths.map()` loop had already generated
them. The dedupe swallowed them silently, so 21 lines were dead and anyone
editing them saw no effect. They are gone; the loop is the only source.

### `public/llms.txt` is a publishing surface, not a scratch file

It is what AI assistants read and repeat, which makes it the one file where an
old claim does the most damage. Two real defects were found in it on 2026-09-08:

- it linked **all seven retired generic `/services/{slug}` URLs**, which have
  been 301s since 2026-08-27 — the sitewide "zero internal links pointing at a
  redirect" check does not read `public/`, so nothing caught it
- it still carried **"QuickBooks Certified ProAdvisor (since 2022)"** and
  **"24+ years of combined accounting experience"**, both of which are open
  owner-verification items in `AI-WEBSITE-GUIDE.md` and had already been removed
  from every page. They were being served to LLMs for weeks after the site
  stopped saying them.

It now holds the same invariant as the sitemap — every indexable route, and
neither `noindex` one. Check it the same way, with `pnpm dev` running:

```bash
grep -oE 'https://www\.accounstone\.com[^ )]*' public/llms.txt \
  | sed 's|https://www.accounstone.com||; s|/$||; s|^$|/|' | sort -u > /tmp/llms.txt
comm -23 /tmp/llms.txt /tmp/disk.txt   # linked but no page  → must be empty
comm -13 /tmp/llms.txt /tmp/disk.txt   # page but unlinked   → the 2 noindex only
```

It also carries a **"What Accounstone does not do"** section, condensed from
`knowledge/company/scope-boundaries.md`. That is the point of the file: an
assistant summarising Accounstone should get the boundaries in the same breath
as the capabilities, not infer them.

### Thin pages: measure before writing

Run this against a dev server rather than guessing which pages are short. Word
count alone is enough to find them, and the answer is rarely the one you expect
— on 2026-09-09 the four thinnest indexable pages on the site were the trust
pages a buyer reads before handing over their books: `/compliance` 259 words,
`/delivery-framework/communication` 274, `/delivery-framework/quality-assurance`
282, `/data-security` 330.

That pass took the site from **29 indexable pages under 650 words to 12**, and
the median route from 998 to 1118. Three content modules hold the new material,
each with a header note stating what may and may not be written into it:

| module | pages | before | after |
|---|---|---|---|
| `lib/us-states.ts` | 3 US state pages | 558-582 | 1128-1141 |
| `lib/platform-depth.ts` | 7 platform pages | 468-610 | 987-1228 |
| `lib/industry-depth.ts` | 5 industry pages | 580-623 | 962-1022 |

**The state pages are written about the books, not about tax figures, and that
is a constraint rather than a style.** `knowledge/markets/us.md` records exactly
one regulatory fact per state. Rates, thresholds and deadlines change every year,
so a figure that is right today is wrong within a year with nobody watching, and
inventing one breaches the never-invent-statistics rule. Each page answers "what
is different about my accounting here" in ledger terms and routes every
computation, election and filing to the client's CPA. Do not add a rate to these
pages.

**The 12 that remain short are mostly hubs and that is correct.**
`/resources/insights`, `/markets`, `/industries`, `/solutions`, `/blog`,
`/resources`, `/resources/case-studies` and `/resources/guides` are index pages;
their job is orientation. The real candidates for a future pass are the two
insights (456, 461 words) and `/delivery-framework/onboarding` (431).

### Interaction claims are commitments, and they were not verified

The site tells readers, on
`/resources/guides/how-to-choose-accounting-outsourcing-partner`, that
*"'full compliance' or 'guaranteed' language"* is a red flag and that *"a
provider that guarantees outcomes rather than describing a process is
overpromising"*. On 2026-09-09 it was failing that test in eight places of its
own — a **"24-Hour Response Time"** and a **"24-hour response commitment"** on
two pages in two wordings, *"ensure you're always informed"* in a hero, a
**"Compliance You Can Trust"** banner on the page that elsewhere says "here is
where we honestly stand today", six unverified operational claims on the quality
page ("All work reviewed by senior accountants", "Monthly KPI reviews", an
"On-Time Delivery Commitment"), plus **"entity-level tax planning"** on the Texas
page, which is a hard-rule breach.

All of it now describes structure: response times and working-hours overlap are
**agreed in writing at onboarding and named in the engagement**. Write it that
way if you touch these pages.

**Open for the owner: is 24 hours the real response commitment?** If it is, it
can go back — it needs confirming once and then stating identically everywhere,
rather than appearing on two pages in two wordings. It was removed rather than
kept because an unverified SLA is exactly the kind of claim a client holds you
to.

The general rule this leaves behind: **a claim about how people will be treated
is a commitment, and it needs a source in `knowledge/` the same way a capability
claim does.** "Dedicated account manager", "weekly updates", "24-hour response",
"monthly business reviews" all read as harmless marketing and all of them are
things a client will expect on day one.

### Adding a route

`lib/data.ts` entries do **not** create pages. `app/sitemap.ts` and the navbar generate URLs
from those arrays, so adding an entry without the matching `page.tsx` produces dead links —
this previously caused 15 of them. Create the page, the sitemap entry, and the `docs/`
registry row **in the same pass**.

Then finish the pass with the two things that are not automatic: add the URL to
`public/llms.txt`, and re-run `node scripts/generate-sitemap-dates.mjs` so the
new route and everything else you touched carry a true `lastmod`.

### The type scale was not being applied at all until 2026-09-08

This is the most consequential thing found in the repo to date, and it is worth
understanding before touching `app/globals.css`.

The element defaults at the bottom of that file — `h1`-`h4` and `p` — sat
**outside any cascade layer**. Tailwind v4 emits its utilities into
`@layer utilities`, and in CSS, unlayered rules beat every layer regardless of
specificity. So a bare `h3 { font-size: 1.25rem }` beat `.text-sm`, `.text-xl`
and `.text-[11px]` alike. Measured before the fix:

| authored | rendered |
|---|---|
| `h1.text-[1.75rem] md:…` | 30px — the element default, on every page |
| `h2.text-3xl` | 24px |
| `h2.text-xl` | 24px |
| `h3.text-sm` | 20px |
| `h3.text-[11px]` (footer) | 20px |
| `p.leading-5` and `p.leading-7` | both 1.65 |

Every heading on the site collapsed to one of four sizes and every paragraph to
one rhythm, no matter what was written on it. The comment sitting above those
rules asserted the opposite — "Tailwind text-* utilities override these" — and
had been wrong for as long as it existed. A note elsewhere in the same file, on
the `img` rule, had already recorded the real mechanism ("globals.css is
cascade-priority above @layer utilities") and worked around it by deleting a
declaration rather than fixing the cause.

The fix is one `@layer base { … }` wrapper. **Keep it.** If you add an element
default, put it inside that block.

Three unlayered element rules are deliberate and stay unlayered, because they
are meant to win: `input, textarea, select { font-size: 16px }` (stops iOS
Safari zooming the page on focus), and the `max-width: 100%` on `img, video`
and `svg`.

After the fix, all 90 routes were re-swept at 320 / 390 / 768 / 1280 / 1440px:
no horizontal overflow and no sub-24px tap target anywhere. Headings now render
at the size they were written at — which is the whole point of having had a
scale.

### Type system

`--font-serif` (Georgia) is the display face: heroes, section headings, resource
card titles. `--font-sans` is body and UI. Both were already brand tokens; the
serif simply went unused until 2026-08-27. Keep new headings on `font-serif` so
the page does not read as two designs stitched together.

Shared pieces worth using instead of rebuilding:
`components/section-heading.tsx` (eyebrow + rule + serif heading + lead),
`components/resource-card.tsx` (guide/insight/article card with topic chips),
`lib/resources.ts` (the resource inventory the Resources hub counts from).

### Tap targets: measure, do not eyeball

WCAG 2.5.8 wants 24px minimum, and it exempts links inline in a sentence.
Breadcrumbs, link lists and contact details are **not** inline links, and they
render ~16-19px tall by default here - which is how 73 of them shipped before
anyone noticed. Anything not inside a sentence needs `inline-block py-1.5`.

The check is a Playwright sweep over `main a, main button` across 320-1440px,
skipping `aria-hidden` elements and links whose parent has meaningfully more
text than the link itself. Run it after any layout change.

### Responsive breakpoints

The desktop nav starts at `lg:`, not `md:` — seven nav items plus logo and CTA need ~963px,
so at `md:` (768px, iPad portrait) the Get Started button fell outside the viewport and
`overflow-x: clip` meant the page could not scroll to reach it. Don't move it back.

Card grids are 2-per-row on mobile via `FeatureCard` / `SectionGrid`. Article listings are
deliberately 1-per-row — their titles run 60–90 characters and wrap badly at half width.

---

## Internal links are measured, not assumed

The site's own crawl is the only reliable read on this, and it has to exclude
the header and footer: site-wide chrome is constant and says nothing about
which pages the site actually recommends. Counting only **contextual** links —
inside `main`, excluding `header` and `footer`, one edge per source page —
found on 2026-09-08 that the highest-impression page on the site,
`/blog/tax-preparation-outsourcing` (435 impressions, position 27.8), had
**one** inbound link. Five of the six blog posts did. That is the mechanical
reason a page with real demand cannot climb, and it is invisible to every
metric that looks at a page in isolation.

`components/further-reading.tsx` is the repair, and it is **topic-driven so it
does not need maintaining**: it matches the `topics` already declared per
resource in `lib/resources.ts`, so a new guide carrying the right topic appears
on the relevant pages without anyone editing 25 files. Three rules if you touch
it:

- **Articles come first, then guides, then insights.** Deliberate — the
  articles are the thin ones, and they are what the ordering is for.
- **It caps at three.** Past that it stops being a reading suggestion and
  starts being a link farm.
- **It is not a substitute for a contextual link in a sentence.** Those still
  carry more; this is the floor, not the ceiling.

It renders on the 21 Service x Region pages (keyed to that page's service) and
the four solutions pages (keyed to `'Engagement models'`).

After that pass and four smaller repairs — the 7 platform pages linking back to
`/technology`, the three registration state pages cross-linking, onboarding
linking to communication, and Texas linking to the Yardi Texas page — routes
with one or fewer contextual inbound links went from **17 to 6**, and total
contextual edges from 777 to 850.

**The six that remain are all correct, so do not "fix" them.** `/thank-you` is
the one at zero and is `noindex`. `/about`, `/privacy`, `/terms`,
`/cookie-policy` and `/resources/case-studies` are reached from the navbar or
footer by design. Re-run the crawl after adding pages; a new page arriving with
one inbound link is the failure this section exists to catch.

---

## Service illustrations

`components/service-illustration.tsx` holds seven original line drawings, one
per service, rendered beside the Overview copy on all 21 Service x Region pages.

They are drawn rather than sourced, and each shows the **actual mechanic** of
the work: a ledger reconciling with one exception flagged, a close sequence
collapsing into a single reviewable report, a return with workpapers fanned
behind it and the signature line left blank, a pay cycle, an approval gate
holding one invoice back, an aging profile with the 90+ bucket picked out, a
schedule tying to a balance. That is `AI-WEBSITE-GUIDE.md` principle 5 -
operational specificity as proof of understanding - applied to pictures. A
generic calculator graphic would say nothing a competitor's could not.

What keeps the seven reading as one family, and what to preserve if you add an
eighth:

- one `200x150` viewBox, one `1.6` stroke weight
- navy line work through `currentColor`, so the parent sets the colour
- the brand gold as a single ground rule along the base of every drawing
- **the burnt-orange accent used exactly once per illustration**, always on the
  thing that needs a human decision: the exception, the unsigned line, the held
  invoice, the overdue bucket. That restraint is the whole system - spend it
  twice and the drawing stops pointing anywhere.

They are decorative and carry `aria-hidden`: each sits beside copy that already
says the same thing, so exposing them would make a screen reader announce it
twice. Inline SVG, so no extra request and nothing to lazy-load - the pages
grew by roughly 120 bytes each.

Text leads on mobile and the art sits right on desktop, which falls out of DOM
order. An earlier version forced the art above the heading on mobile with
`order-first`; do not reintroduce it.

**There is a second set, and it follows the same rules.**
`components/solution-illustration.tsx` (2026-09-08) covers the four engagement
models and the registration hub, which had no artwork at all: staff
augmentation, offshore, dedicated teams, back office, registration. Same
200x150 viewBox, same 1.6 stroke, same gold ground rule, and the accent spent
exactly once on the thing that needs a human decision — the review gate that
stays the client's, the point where judgement starts, the single named contact,
the signature line left blank, and on the registration drawing the **fork**,
because the entity-and-state choice belongs to the client's own attorney and
CPA (`scope-boundaries.md` §2). Nothing in either file is stock or generated.

**And a third: `components/region-illustration.tsx`** (2026-09-09), one drawing
per market, on `/markets/{united-states,united-kingdom,australia}` and — for the
US drawing — the three state pages. Each shows the recurring compliance mechanic
that market runs on, from `knowledge/markets/{us,uk,au}.md`: US, nexus measured
per state with one column over the line and the accent on it, because
registering is the CPA's decision; UK, four VAT quarters joined by an unbroken
digital link with the accent on the submission gate the registered practitioner
holds; AU, GST coded as transactions land and collecting into the BAS block,
accent on the lodgment gate belonging to the registered agent.

**No flags, no maps, no landmarks, and do not add them.** A flag identifies a
country and says nothing about what is different about doing the work there, and
the market pages already carry `components/region-flag.tsx` for identification.
The drawings are for the part a flag cannot carry.

If you add to any of the three files, read the accent rule above before drawing
anything.

## The process flow on the homepage

`components/process-flow.tsx` - four numbered phases on a connected rail,
between the services grid and the testimonials. It answers the question the
homepage otherwise left open: what actually happens if I get in touch
(`AI-WEBSITE-GUIDE.md` principle 1).

**The copy is a compression, not a new claim.** It summarises the seven
documented steps on `/delivery-framework/onboarding` into Scope / Set up / Soft
launch / Steady state, and links there so the full version is one click away. If
the onboarding steps change, change this too.

The structure came from a four-up infographic the owner shared - numbered nodes
hanging off one line. **The four saturated colours in that reference were
deliberately not used.** Four unrelated hues read as a stock template and would
fight a navy-and-gold identity; it is the same failure mode recorded above for
the emoji icons that were removed sitewide. It follows the service-illustration
rule instead: navy line work, a gold rail, and the burnt-orange accent spent
exactly once - here on phase 04, because that is where the boundary sits
(review, judgement and sign-off stay with the client). Colour carries meaning,
not decoration.

The rail is inset `left-[12.5%] right-[12.5%]`, which is node-centre to
node-centre across four columns, so it stops at the first and last node instead
of running off the edge. It renders only at `lg:` - below that the grid is
2-up and there is no single horizontal line to draw.

**2 per row below `lg:`, 4 across above it**, matching the site's existing card
convention. At 320px that leaves each card 128px wide, so the node, padding,
icon and type all step down at that size and back up at `sm:`. Checked at
320/375/390/768: no card overflows its own box and the page does not scroll
horizontally.

## Icons and favicon

Generated from the mark in `public/accounstone-logo-horizontal.png` (the A/S
monogram, cropped and squared) - not from the full lockup. The wordmark is
illegible below about 100px, so it never belongs in a favicon.

**Every size shows the whole mark. Do not crop it tighter at small sizes.**
An earlier set used a tighter 24% inset for 16 and 32 on the theory that the two
outer frames collapse into noise below 32px. What it actually did was clip the S
and the foot of the A, and that clipped version is what Google served in search
results - the owner spotted it there, not in a browser tab. A softer 16px is the
right trade: the mark stays whole and recognisable, and everything above 32px is
sharp. One source square (`MARK` = the ink box x 48-284, y 43-253 of the lockup,
centred at 84% of a white square) renders every PNG and all three ICO entries.

`favicon.ico` is still built by hand with `struct` - Pillow's ICO writer accepts
only a single image and re-derives the other sizes from it, which loses control
over what each entry contains.

Files: `favicon.ico` (16/32/48), `icon-16x16.png`, `icon-32x32.png`,
`icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (180),
`icon-maskable-512.png` (inset so a circular OS mask cannot clip the mark).
Declared in `app/layout.tsx` and `public/manifest.webmanifest`.

All are rendered on a white ground. The mark is navy and blue, which disappears
against a dark browser tab bar on transparency.

## The inquiry form is on 85 pages, and in a dialog

`components/inquiry-form.tsx` is the one form; `components/inquiry-section.tsx`
is the band that wraps it, and sits before the `CTABanner` on every page except
five, counted by rendering all 90 routes on 2026-09-07: `/contact` (which is the
form), `/cookie-policy`, `/privacy`, `/terms` and `/thank-you`. Consultations and calls
are free and are the owner's lead source, so the ask leads with that.

**`ArticleLayout` renders the band** for the 6 blog posts, 11 guides and 2
insights — each page passes its own `inquiryTitle` and `inquiryLead`. Do not
let those default; see the near-duplicate note below.

**`ArticleLayout` also takes `section: 'guides' | 'insights' | 'blog'`**, and
the hub href, the crumb trail, the schema `basePath` and the canonical are all
derived from it. Pass the bare slug. Before 2026-09-03 the blog posts reached
this layout by passing `slug="../../../blog/<slug>"` with `section="guides"`,
which emitted
`https://www.accounstone.com/resources/guides/../../../blog/<slug>` into
BreadcrumbList on all six and showed a **Home > Resources > Guides** trail on a
`/blog/` URL. Never route a section through another section's path.

**There is also a dialog.** `components/inquiry-modal.tsx` is mounted once in
`app/layout.tsx`; `components/inquiry-trigger.tsx` opens it. Around 60 card
render-sites that previously had nowhere to go — service scope cards, workstream
cards, technology situation cards, market compliance and trust cards, industry
benefit cards, solutions step cards, and any `FeatureCard` without an `href` —
now open the form over the page. Three rules if you touch it:

- **It must not scroll.** The whole point is that the reader keeps their place.
  Both the open focus and the focus restore pass `preventScroll`; without it the
  restore jumped the page ~340px on close. The overlay is `items-start` with
  `my-auto` on the panel, because `items-center` pushes a tall form off the top
  of a short viewport.
- **The trigger is an overlay button, not a wrapper.** These cards contain
  headings and lists, which are invalid inside `<button>` and get flattened into
  one accessible name. The card keeps its markup; an `absolute inset-0` button
  carries the click and the label.
- **The dialog must not claim `#inquiry` or `#inquiry-heading`.** The band owns
  both, one per page. The dialog's form is namespaced with `formId="modal"` so
  its field ids cannot collide with the band's.

**It is region-aware because it has to be.** `region` changes the field labels
("Practice name" in the UK, "Firm name" in the US and AU), the email and phone
placeholders, the assurances beside it, and the business hours line. It also
carries the region into the Web3Forms subject and payload, so an enquiry can be
routed without reading it. `service` pre-selects the dropdown; `source` records
which page it came from.

There was a "Which software do you work in?" select. The owner removed it - one
fewer field between a visitor and a submitted enquiry, on a form whose whole
job is lead capture. The platform conversation belongs in the reply.

**Adding it raised near-duplicate scores, and that had to be managed.** The
first pass put identical copy on 45 pages and pushed `/technology/quickbooks`
vs `/technology/xero` from 12.0% to 22.8%, with the six industry pages
clustering around 20%. Two fixes brought the worst new pair to 17.3%: every
non-region page passes its own `title` and `lead`, and thin pages pass
`compact` (drops the assurances and contact block, leaving mostly form labels).
**If you add this band anywhere else, give it page-specific copy and re-measure.**

Every instance ids its fields with a per-instance `uid`, so two forms on one
page cannot collide. There is exactly one `#inquiry` and one
`#inquiry-heading` per page — check that if you ever add a second band.

## The engagement-triggered prompt on content pages

`components/scroll-inquiry-prompt.tsx`, rendered by `ArticleLayout`, so it is on
the 6 blog posts, 11 guides and 2 insights and **nowhere else**. It is the
fourth instance of the form, after the band, the dialog and the rail.

It exists because a reader two-thirds of the way down a 1,500-word guide is the
most qualified visitor the site gets, and nothing asked them for anything until
the band at the very bottom — which only a finisher reaches.

**The reason it is not a plain popup is a ranking one, and it is the whole
design.** Google treats interstitials that obscure content shortly after arrival
from search as a negative mobile signal. A naive "open a modal after 5 seconds"
would fire on arrival, cover the article, and put the rankings of the very pages
it sits on at risk. Three things prevent that, and **none of them is optional**:

1. **Two conditions, both required** — `DWELL_MS` (8s) on the page *and*
   `SCROLL_TRIGGER` (45%) of the article scrolled. Time alone would fire on an
   idle arrival; scroll alone would fire on a fast flick. Verified: it stays
   hidden after 11 seconds without scrolling, and hidden when scrolled to 60%
   under the dwell time.
2. **It never covers the article below `lg`.** On mobile it is a slim bottom bar
   — one line and a button that opens the existing dialog — measured at under
   20% of a 390x844 viewport. The full form only renders as a corner card at
   `lg` and up, where there is room beside the text. **Do not make the mobile
   version show the form inline.**
3. **Trivially dismissible** — close button, Escape, and the dismissal is
   remembered for 30 days in `localStorage`, so it never nags the same reader
   twice or follows them to the next article.

It also stands down while `#inquiry` is on screen (the rail's rule — two
identical forms are never both visible) and will not fire while the cookie
banner is up, so a first-time visitor is never asked two things at once.

**It renders nothing on the server.** No `aria-label="Free consultation"`, no
`scroll-` field ids in the HTML — so it cannot affect indexed content or the
near-duplicate scores, which matters because it repeats the page's own
`inquiryTitle` and `inquiryLead`.

`formId="scroll"`, and it must never claim `#inquiry` or `#inquiry-heading`.
There is a 22-assertion Playwright suite covering the trigger, the mobile
geometry, dismissal persistence across pages, Escape, the stand-down, absence on
service pages, and that four form instances on one page produce no duplicate ids.

## Mobile height: measure before assuming 2-up is shorter

The obvious instinct - make every 1-column card grid 2-up on mobile to shorten
the page - **is wrong more often than it is right here**, and it was measured
rather than argued.

Six 1-column grids were converted to 2-up at 390px and each one's height was
compared against the same grid forced back to one column. Four made pages
**longer**: a card carrying 135+ characters wraps far more in a 170px column,
and the tallest card in a row sets the height for both. Only two shortened
anything:

| Grid | Effect at 390px |
|---|---|
| `grid-cols-2 gap-3 sm:grid-cols-4` (short labels) | **-243px** each, 11 grids |
| `grid-cols-2 gap-3 md:grid-cols-4 md:gap-6` | **-255px** each, 2 grids |
| `md:grid-cols-3 gap-6` (6 cards, ~135 chars) | +222px each - reverted |
| `md:grid-cols-3 gap-4` (3 cards, ~177 chars) | +221px each - reverted |
| `sm:grid-cols-2 gap-2.5` (7 items) | +137px each - reverted |
| `md:grid-cols-2 gap-3` (7 cards, ~117 chars) | +42px each - reverted |

**Rule of thumb from that data: 2-up wins below roughly 60 characters per card
and loses above ~120.** In between, measure. The method is in
`SEO-CHANGELOG.md` 2026-09-03f - force `gridTemplateColumns: '1fr'` in the page
and diff the bounding box.

Two things that must NOT go 2-up on mobile, whatever the height cost:

- **The inquiry form's own fields.** Two-column form fields on a 390px screen
  means smaller targets, more mis-taps and more errors on the one interaction
  the page exists for.
- **FAQ accordions and article listings.** Both are text; a question in a 170px
  column wraps to four lines. (Article listings were already documented as
  1-per-row above.)

Both got tighter mobile padding and rhythm instead, which buys height for free.
Everything steps back up at `sm:`, so desktop is untouched. The inquiry band
went from 1540px to 1370px on a Service x Region page, and mean page height
across all 85 routes from 11.4 to 11.0 screens.

**No copy was cut anywhere.** Every gain came from padding, rhythm, mobile type
size and column count. If a future pass claims to have shortened a page, check
the diff for removed text before believing it.

One trap worth naming: `rows` on a `<textarea>` is an HTML attribute with no
`sm:` variant, so lowering it to shrink the mobile form silently shrinks the
desktop one too. That happened once and was caught. The message box keeps
`rows={4}` and takes its mobile height from `h-[92px] sm:h-auto` instead.

## The US company registration cluster

`/company-registration` plus `/company-registration/{delaware,wyoming,nevada}`,
added 2026-09-04. Four files do the work: `lib/company-registration.ts` (all the
copy and the per-state data), `components/registration-state-page.tsx` (one
render for every state), the hub page, and three thin `page.tsx` files.

**The owner confirmed on 2026-09-04 that registration is arranged and
coordinated rather than performed in-house**, and every line of copy is written
to that split: the filing is coordinated, the accounting that follows is
Accounstone's. Nothing claims Accounstone lodges formation documents, acts as
registered agent, or opens bank accounts. `knowledge/company/identity.md` still
lists seven service lines and does not include this one — that file says only a
human may edit it, so **the owner needs to add it there**.

**`scope-boundaries.md` §2 forbids entity selection advice, and this is the
cluster where it is easiest to cross that line.** Describing what an LLC and a
C-corp *are* is fine and is what the reader is searching for. Saying which to
pick is not, in any phrasing — including softened ones like "most businesses in
your position choose". Every page in the cluster carries a boundaries block for
that reason; do not strip it to save space.

**Two words are banned from this cluster by the owner's instruction:
"partner" and "consultant".** The referral arrangement is described as
coordinated or arranged, never by naming who does it. There is a grep for both
in the verification run.

**No filing fee, franchise tax figure or turnaround time appears anywhere.**
They change per state and per year, and inventing them would breach the
never-invent-statistics rule. The pages say figures are confirmed at scoping,
which is how the rest of the site handles pricing.

Two structural decisions worth keeping:

- **Explicit `page.tsx` files per state, not a `[state]` dynamic segment.** The
  sitemap drift check walks `find app -name "page.tsx"`; a dynamic segment would
  show up there as a literal `[state]` path that can never match a sitemap URL,
  reporting drift on every run forever.
- **The cluster is in the footer.** The navbar emits no links into server HTML,
  so a cluster that is not in the footer is not discoverable by link.

**Watch the near-duplicate score if you add a state.** The first version shared
so much boilerplate across the three pages that they measured **53-55%** against
each other, more than twice the 25% ceiling. Moving the five-step block and the
full boundaries list to the hub, and giving each state its own FAQs, `feesNote`,
`ctaNote` and `whoFormsHere`, brought the worst pair to **18.0%**. A new state
needs all of those written properly, not templated — re-measure before shipping.

## Offshore is one cluster, and it belongs to one page

`/solutions/offshore-accounting-support` owns every "offshore …" query.
`/markets/united-kingdom` owns the UK regulatory brief — HMRC, VAT under MTD,
FRS 102, Companies House — which is what `docs/SEARCH-INTENTS.md` assigns it.

That split had to be repaired on 2026-09-04, and the way it broke is worth
knowing because it is easy to redo. The market page was titled **"Offshore
Accounting for UK Practices"** with an h1 to match, so it ranked for the whole
offshore cluster — ~140 of its 144 impressions — against the solutions page,
and beat it on the shared queries while both sat at positions 55-90. Two pages
split one intent and neither earned a click.

**Do not put "offshore" back in a market page's title, h1 or description.** The
market pages are about a market. Offshore is an engagement model and has its own
URL. One contextual link from each market page to the offshore page is the right
amount; the related-links row on `/markets/united-kingdom` carries it.

After the fix the pair shares 1.7% of its 6-grams, and "offshore" appears twice
on the market page against 25 times on the solutions page. Re-measure if you
touch either.

## /technology/myob is mostly traffic we cannot serve

857 impressions in 28 days, the most of any page on the site, and never a single
click. The query list says why: "myob consultants" (83), "myob consolidation
software" (79), "myob accounting software" (61), "myob certified consultant"
(29). That is product research and a hunt for a certified consultant or
implementer — all three of which `scope-boundaries.md` §5 forbids claiming.
The page has never had a click because it is honest about what it is.

One query in the whole set is a genuine buyer: **"myob bookkeeper offshore"**,
30 impressions. The page is now titled and headlined for that reader.

**Do not try to win the rest.** Ranking for "myob certified consultant" would
require claiming to be one.

**The owner chose to `noindex` it on 2026-09-04.** Three things follow, and all
three are easy to undo by accident:

- It is **removed from `app/sitemap.ts`** by a `.filter()` on the technologies
  array, because a noindex URL in a sitemap is a contradiction. It is the second
  expected line in the drift check, alongside `/thank-you`.
- It is **not** in `robots.txt` and must not be. A blocked URL cannot be
  crawled, so the noindex would never be read — the same trap already documented
  for `/thank-you`.
- The page stays **live and linked** from the technology hub and footer. Noindex
  is not deletion; a visitor who reaches it still gets an honest page.

The cost was flagged before the change and is worth remembering: this also drops
the 30 `"myob bookkeeper offshore"` impressions, the one genuine buyer query on
the page. That intent was moved first — the bookkeeping entry on
`/solutions/offshore-accounting-support` now names MYOB explicitly. If the
noindex is ever reversed, check that the two pages are not then competing for it.

## The cookie consent system

Three files, deliberately separate, because mixing them is how consent banners
end up being decoration that does not actually gate anything:

- `lib/consent.ts` — the state. No React, no UI. Categories, the stored record,
  read/write, and the change event. This is where you add or remove a service
  from a category.
- `components/cookie-consent.tsx` — the interface. The corner card and the
  preferences dialog. Knows nothing about Google.
- `components/analytics.tsx` — the consequence. Loads GA4, and only on consent.

**The gate is that the script is never rendered without consent**, not that it
is loaded and told to behave. Before a choice is made there is no request to
googletagmanager.com and no `_ga` cookie — verified, not assumed. On top of
that, `app/layout.tsx` sets Google Consent Mode v2 defaults to denied in a
plain inline `<head>` script, so any tag added later (through GTM, say)
inherits denied even if it bypasses `analytics.tsx`. That snippet must stay a
plain `<script>`: `next/script` with `beforeInteractive` outside the layout
trips an eslint rule, and `pnpm eslint .` has to stay silent.

Things that will look like bugs but are not:

- **The record lives in `localStorage`, not a cookie.** Nothing server-side
  varies on it, so a cookie would be sent on every request for no benefit.
- **A corrupt, foreign or old-version record is treated as no record.** It
  fails closed — the worst case is asking again, never assuming consent.
  `CONSENT_VERSION` exists for exactly that: bump it when the categories or the
  services inside them change materially.
- **Functional and Marketing have nothing in them.** The toggles are real and
  the choice is stored, but the panel and the policy both say "nothing in this
  category is in use today" rather than implying vendors that do not exist.
  If you add one, add it to that category's `services` array so both surfaces
  update from one place.

**The banner is deliberately small** — a 22rem card, three actions on one row,
162px tall against the 280px first version. It is a question, not a landing
page. The owner asked for it twice as small; do not grow it back. The detail
belongs in the preferences dialog, which keeps the fuller card treatment.

**Accept and Reject are the same size, weight and prominence tier.** Only
colour separates them. Making Reject harder to find is a dark pattern and is
the one change this component must never take. The banner's Reject reads
"Reject" to keep the row compact and carries
`aria-label="Reject non-essential cookies"`, so its accessible name is the full
one — worth knowing, because a Playwright `getByRole` on "Reject" will not
match it.

The preferences dialog is a **flex column capped to the viewport**: header and
actions pinned, only the category list scrolls. The first version was 1042px
tall against a 768px laptop, which put Save below the fold, and on mobile the
bottom sheet pushed its own heading off the top of the screen — the same
failure `inquiry-modal.tsx` already records. Do not remove the `max-h` or the
`flex-1 overflow-y-auto` on the list.

Withdrawal is best-effort and honest about it: a loaded script cannot be
unloaded, so turning analytics off pushes a Consent Mode update, sets Google's
`ga-disable-*` flag and deletes the `_ga` cookies. The next page load renders
no script at all.

`components/cookie-settings-button.tsx` is the footer control and
`components/cookie-settings-inline-button.tsx` the in-sentence one on
`/cookie-policy`; both are client islands so `footer.tsx` can stay a server
component.

## /thank-you is a conversion target, not a page

`app/thank-you/page.tsx` exists so Google Ads and Meta have a URL to count a
conversion on. Both platforms can trigger a conversion from a destination URL,
and an inline "thanks" state inside the form is invisible to them because the
URL never changes.

All three submission paths land there: `components/inquiry-form.tsx` (the band
and the dialog) and `app/contact/page.tsx` both `router.push('/thank-you')` on
success. **The failure path must never redirect** — the visitor keeps what they
typed and is offered the email fallback. There are Playwright checks for both.

- It is **`noindex`** (`genMeta({ noindex: true })`). A thank-you page that ranks
  can be reached straight from search, which inflates the conversion count with
  people who never submitted anything.
- It is deliberately **absent from `app/sitemap.ts`**, which is the one expected
  difference in the drift check above.
- It is crawlable — do **not** add it to `robots.txt`. A blocked URL cannot be
  crawled, so the `noindex` would never be read.
- `components/conversion-event.tsx` fires GA4's recommended `generate_lead`
  event on mount, guarded on `window.gtag` existing. Recommended event names
  import into Google Ads as conversions without extra setup; a custom name does
  not.

## The inquiry rail on Service x Region pages

`components/inquiry-rail.tsx` is a compact enquiry form fixed to the right edge
of all 21 `/services/{service}/{region}` pages. It is the third instance of the
form, after the band and the dialog, and the rules that keep the three apart are
worth knowing before touching any of them.

**Widths are measured, not chosen.** The content column is centred and ~1230px
wide, so its right edge sits at `(viewport + 1230) / 2` and a 320px panel starts
at `viewport - 332`. Those meet near 1914px. Thresholds of 1700 and 1820 were
both tried and both still overlapped the copy.

- **>=1960px**: expanded by default, clear of the text.
- **1280-1959px**: a 40px tab. It was 72px and overlapped at 1280 by 15px.
- **<1280px**: hidden entirely. At 1024 the content column already fills the
  viewport, and the band, dialog and card triggers cover the same job there.
- It expands on click at any width from 1280px up, and floats over the copy when
  it does. That is fine because the reader asked for it and there is a close
  button; opening itself on top of a sentence is not.

**It must fit one screen.** The first version was 752px of content and scrolled
inside itself on a 1366x768 and a 1536x864 laptop. It is now 590px and fits from
1280x720 up. Two things buy that, and both are per-instance, not global:

- `minimal` on `InquiryForm` drops **only** the service select, because a
  Service x Region page has already told the form which service it is about via
  `service`. The value still reaches the payload from the prop - verified
  against a stubbed Web3Forms response. Phone stays: it is real lead data.
- `size="compact"` trims padding and type, shortens the message box to two rows
  and swaps the long assurance line for a single short one.

**The band and the dialog keep every field.** If you change `InquiryForm`, check
all three instances - there is a Playwright check that compares their field
lists.

It also stands down whenever the `#inquiry` band is on screen, so two identical
forms are never visible at once, and it is inset `pt-24` to clear the sticky
header. It uses `formId="rail"` and must never claim `#inquiry` or
`#inquiry-heading`.

## /contact is a trust page, not a contact page

Rebuilt 2026-09-03. It was 153 words: a form, an address block and "Reach Out
Today". It is now ~1,140 words, and every section answers a question a firm
actually has before it sends anything. Structure follows
`AI-WEBSITE-GUIDE.md`'s content-psychology principles, and that file **bans
manufactured urgency, fear framing and exaggerated outcomes** - so there is no
scarcity language here, no countdown, no invented statistic and no testimonial.
Do not add any.

- **What the first call is** sits *above* the form (principle 1, reduce
  uncertainty before selling). Thirty minutes, free, no obligation; the person
  who replies is the person who would scope it; and we will say if the work is
  not ours.
- **"What we will not do, whatever you are paying us"** is the trust anchor and
  the differentiator. Every line traces to
  `knowledge/company/scope-boundaries.md`: no filing credentials, no banking
  control, no tax-authority representation, no tax advice, no audit judgment, no
  software implementation. Naming the limits is what answers "what am I handing
  over?" (principle 3).
- **The situation router** matches a visitor's own words to the right reading
  and links out to eight guides. It sits *after* the form so the form gets first
  claim, and it exists because principle 10 asks that a visitor learn something
  useful even if they never make contact. It also gave `/contact` its first real
  internal links - it had none.
- **Objection FAQs** live in `lib/contact-faqs.ts`, shared so the client page
  renders them and `app/contact/layout.tsx` can emit `FAQPage` schema (the page
  is `'use client'` and cannot).

**The coverage block was factually misleading and is now fixed.** It advertised
"9:00 AM - 6:00 PM EST" and nothing else, on a site that sells to UK practices
and Australian firms - to a UK reader that reads as "not for you". All three
markets now get a line, and no clock time is invented that the rest of the site
does not already claim.

`companyInfo.contact.phone` is raw E.164 for `tel:` links;
`companyInfo.contact.phoneDisplay` is the grouped version for reading. The site
was rendering `+919990597192` on every page that shows a number.

**The submit path is unchanged and must stay that way** - see the section below,
which is the expensive lesson. Success still redirects to `/thank-you`; failure
still keeps what the visitor typed and offers the email fallback. Both branches
have Playwright checks.

## Contact form

**`/contact` submits from the browser, and it has to. Do not move it back to
the server.** Web3Forms sits behind Cloudflare, which serves a JS challenge to
any server-side caller. The first design forwarded through
`app/api/contact/route.ts` to keep the key off the client, and every submission
failed with:

```
Web3Forms rejected submission 403 null
```

which reads as a rejected key and is not one. The body was Cloudflare's
`Just a moment...` interstitial - the request never reached Web3Forms at all. A
browser `User-Agent`, `Origin` and `Referer` did not help and cannot: what is
fingerprinted is the TLS handshake. A real browser clears the challenge; a
serverless function never will.

So the key reaches the browser. That is how Web3Forms is designed to be used -
keys are public by construction and their docs put them in client HTML. What
`app/api/contact/key/route.ts` buys over hardcoding one is that the key still
never enters this public repo or the static bundle: it is read from
`WEB3FORMS_ACCESS_KEY` at request time, so rotating it in Vercel takes effect
without a redeploy. **No `NEXT_PUBLIC_` prefix** - that would bake it into the
bundle and lose that. The defence against a scraped key is domain restriction in
the Web3Forms dashboard, not secrecy.

The key is trimmed, unquoted and UUID-validated before use; a value pasted with
a trailing newline used to fail silently upstream.

`app/api/contact/route.ts` is now diagnosis only, and worth keeping because the
Hobby plan holds runtime logs for **one hour** - after that a failed submission
leaves no trace:

- `GET /api/contact` - `configured` / `keyPresent` / `keyWellFormed`, never the key
- `GET /api/contact?probe=1` - asks Web3Forms how it answers a deliberately
  invalid key, so a WAF block and a bad key are distinguishable. Sends no mail.

Both are readable from a sandboxed session via `web_fetch_vercel_url`, which
reaches `www.accounstone.com` when `curl` cannot.

On failure the form **offers** an email, it does not perform one. It used to
navigate straight to `mailto:` the moment a send failed, which is what made it
read as a mailto link dressed up as a form. Now the visitor keeps what they
typed and chooses.

**Testing from a sandboxed session:** the egress proxy denies CONNECT to
`api.web3forms.com`, so intercept it. `page.route('https://api.web3forms.com/submit', ...)`
in Playwright exercises the real submit path against a stubbed response and
proves both the success and failure states without a live send.

## Environment constraints

Known limits when working from a sandboxed session:

- **`www.accounstone.com` is blocked** by network egress policy. Live-site verification,
  Lighthouse, and real SERP checks are not possible from there. Use the Vercel MCP tools
  for deployment status, and `pnpm dev` + Playwright for rendered checks.
- **Ahrefs and Semrush MCP tools return plan/quota errors** on this account. Do not present
  their output as data.
- Playwright is available; Chromium is pre-installed at `/opt/pw-browsers/chromium`. It is
  not a project devDependency — resolve it via `$(npm root -g)/playwright`.

---

## Principle

Do not optimize one page while damaging the site. Prefer improving an existing page over
adding a new one. Every claim must trace to something in `knowledge/`. When a change is
outward-facing or hard to reverse — a URL change, a deletion, a merge to `main` — confirm
with the owner first.
