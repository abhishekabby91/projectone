# Page format — the contract every new page must meet

**Read this before writing a page. Run the checker before opening a PR.**

```bash
pnpm next build && pnpm next start -p 3100 &   # production build, NOT next dev
node scripts/verify-pages.mjs                   # whole site
node scripts/verify-pages.mjs /blog/my-new-page # one route, while drafting
```

The checker exits non-zero with the number of failing rules. It is the
authority; this file explains *why* each rule exists, because a rule whose
reason is unknown is a rule the next agent deletes.

**Run it against a production build.** `next dev` injects an overlay, streams
metadata differently and emits different HTML. Every number below was measured
on `next start`, and dev output cannot be trusted for any of them.

---

## Why this file exists

The October 2026 audit found, on a site where all of these rules were already
written down somewhere:

| Defect | Count |
|---|---|
| Titles truncating in the SERP | 54 |
| Indexable pages missing from `llms.txt` | 108 |
| Pages emitting FAQ schema no reader could see | 20 |
| Pages with no `<main>` landmark | 3 |
| Articles with `dateModified` | 2 of 86 |
| Homepage links pointing at a 308 redirect | 7 |

None of that was carelessness about *content* — the content was good. It was
that nothing mechanical checked the **shape**. Prose guidance gets skipped by an
agent in a hurry. `scripts/verify-pages.mjs` does not.

---

## 1. Content length

Measured medians across the 192 indexable pages that currently work. The
**floor** is what the checker enforces; the **median** is what good looks like.

| Page type | Floor | Median | Typical h2/h3 |
|---|---|---|---|
| Blog post | **650** | 868 | 14 |
| Guide / insight | **900** | 1,241 | 14 |
| Service × Region | **1,000** | 1,328 | 18 |
| Industry hub (`/industries/x`) | **900** | 1,922 | 17 |
| Industry sub-page (`/industries/x/y`) | **650** | 911 | 13 |
| Market sub-page | **900** | 1,390 | 12 |
| Registration state | **900** | 931 | 12 |
| Homepage | **1,200** | 1,614 | 39 |
| Section hub (`/blog`, `/resources`, …) | — exempt | 571 | 13 |

Site median: **1,040 words.**

**A page under its floor is missing a section, not missing padding.** The fix is
another real question answered, never the same point restated. If you cannot
find a 650th word that earns its place, the page probably should not be its own
URL — fold it into a neighbour and redirect.

**Hubs are exempt and must stay short.** A hub that summarises is doing its job;
lengthening it makes it a worse hub. Do not pad `/blog`, `/resources`,
`/industries`, `/markets`, `/solutions` or `/technology` to clear a number.

---

## 2. Metadata budgets

| Field | Rule |
|---|---|
| `title` | **≤ 46 characters page-side.** The `%s \| Accounstone` template adds 14, and 60 is where Google truncates. |
| `description` | **110–160 characters.** Shorter wastes the snippet; longer is cut mid-sentence. |
| `canonical` | Required on every page. |

Count the **decoded** string. `&` is one character, not five — a title written
with `&amp;` passes a naive check and still truncates.

**The question form belongs in the h1, not the title.** `"HOA Accounts Payable:
How Should Vendor Bills Be Reviewed?"` is 57 characters and truncates. Put the
compact keyword in the title and keep the full question as the h1 and as an FAQ
entry, where length is free and the AEO value actually lands.

---

## 3. Page structure

Every page renders, in this order:

```
<main>
  PremiumHero            h1 lives here
  trust badges           optional
  breadcrumb <nav>       except /, /privacy, /terms, /cookie-policy
  … body sections …      h2/h3, no level skips
  FAQSection             if the page has FAQs — see §4
  InquirySection         id="inquiry", exactly one
  CTABanner              last
</main>
```

Enforced:

- **A `<main>` element is required.** Three pages shipped without one. The skip
  link still worked (it targets a `div` in the layout), so nothing looked
  broken — but content extractors and AI crawlers prefer `<main>`/`<article>` to
  isolate the body, and without it they fall back to heuristics that pull in nav
  and footer boilerplate. A crawler read those pages as 0 words.
- **Exactly one `h1`, inside `<main>`.**
- **No heading-level skips.** No `h2 → h4`.
- **Closing sequence is band then banner**, exactly one `#inquiry` per page.
  `/contact` is the form and `/thank-you` is a conversion target; both are
  exempt and must stay exempt.

---

## 4. FAQs — visible and marked up, never one without the other

This is the highest-value AEO surface on the site and it failed in both
directions at once.

**Never emit FAQPage schema for text the reader cannot see.** 20 pages built a
local `faqs` array, serialised it into a `<script>` tag and rendered nothing.
Google requires FAQPage content to be visible; invisible markup is a
structured-data violation *and* good copy left unpublished.

**Never write a question heading and leave it unmarked.** 62 pages carried 238
headings ending in `?` with the answer right underneath and no schema on any of
them.

Both are solved in one place. On an article:

```tsx
<ArticleLayout faqs={faqs} …>   // renders them AND owns the schema
```

`ArticleLayout` also derives FAQPage from any `h2`/`h3` ending in `?`
(`extractFaqs`). Explicit FAQs win; derived ones only fill gaps. Three guards
keep the derived set honest, and **none is optional**:

- at least 2 pairs — one question is not an FAQ;
- the answer must be real prose — a question answered only by a table is
  skipped, because `getText` flattens a table into
  `"SectionTypical HOA examplesAssetsBank accounts…"`, which is exactly the
  string an assistant then quotes back as Accounstone's own words. A length
  check cannot catch this;
- answers cut at a sentence boundary, never mid-claim — a truncated accounting
  statement can change its meaning.

The checker verifies every marked-up answer **and question** is present as
visible text, in both directions.

### The three rules that closed this out on 2026-10-17

Every one of the 101 article routes now carries FAQPage, from 78 before, and
the schema set is identical on all of them. Three rules make it stay that way,
and `node scripts/verify-pages.mjs` enforces all three:

1. **Exactly one FAQPage block per URL.** Ten blog posts shipped two — a local
   `faqs` array serialised into the page's own `<script>` *plus* the block
   `ArticleLayout` derives from question-form headings. Two FAQPage objects
   with different question sets on one URL is not a richer page; it is a page
   that declares its own FAQ twice and leaves an assistant to pick.
2. **An article carries at least two Q&A pairs.** The floor matches `MIN_FAQS`
   in `components/article-layout.tsx`; keep the two in step. A page fails only
   when it has neither explicit FAQs nor two question-form headings.
3. **One place renders them.** `faqs` goes to `ArticleLayout`. Nineteen pages
   had rolled their own — a `<script>` beside the layout, an inline
   `<FAQSection columns={2}>` halfway down the body, or a hand-written
   `faqs.map()` into `<h3>`/`<p>`. Four shapes of the same thing, and the one
   that mapped into headings also pushed four FAQ entries into the article's
   table of contents.

**Writing the answers: the unit is what an assistant can lift.** An answer is
quoted on its own, with no heading above it and no paragraph before it, so it
has to name its own subject — "An HOA bank reconciliation should explain…",
not "It should explain…". That is also why the schema is worth having at all:
marked-up text is what gets repeated back as Accounstone's own words.

Three content rules follow from that, and they are the same ones that govern
body copy:

- **No figure that ages.** No rate, threshold, turnaround, headcount or price
  in an FAQ answer. A body paragraph carrying a number is at least surrounded
  by its qualifications; an answer quoted alone is not.
- **Route judgment to the licensed party, inside the answer.** Not in a
  disclaimer elsewhere on the page — the reader of a lifted answer never sees
  the rest of the page. The ASC 606 and sales-tax-nexus FAQs each name whose
  call it is in the answer body for exactly this reason.
- **Do not duplicate the page's own Q&A section.** Where a page already had
  one, it was moved into `faqs`, not copied. Measured after: worst pair among
  the 22 pages given FAQs is **7.6%** against the 25% ceiling.

---

## 5. Structured data

| Type | Where |
|---|---|
| `Organization` + `WebSite` | every page (from the layout) |
| `BreadcrumbList` | every page except `/` and the three legal pages |
| `Article` | blog posts, guides, insights |
| `FAQPage` | any page with visible Q&A |
| `Service` | commercial service and industry pages |

**`Article` must carry `dateModified`.** Freshness is weighted by Google *and*
by the AI answer engines when choosing what to cite. `ArticleLayout` resolves it
in three steps: an explicit `updatedDate` prop, else the generated per-route date
in `lib/sitemap-dates.ts` (the last commit that changed the page's rendered body)
when that is newer than publication, else `publishedDate`. **Never `new Date()`**;
that is a fabricated date on every page that has not changed.

**That last fallback was added 2026-10-16 and it matters for every new page.**
Before it, a brand-new article emitted no `dateModified` at all, because it has
no git history yet — so it failed this rule until its route was committed and
`generate-sitemap-dates.mjs` had run. A rule that every new page fails is a rule
people learn to ignore, or work around by hand-writing a date. The fallback is
not a guess: an article published today and not since changed genuinely has
`dateModified == datePublished`, which is what Schema.org expects. **The visible
"Last updated" line is deliberately stricter** and stays hidden when the two are
equal — a page must not tell a reader it was updated on the day it was written.
Found by building a page straight from the template in `docs/NEW-PAGE-BRIEF.md`
and running this checker against it.

---

## 5a. hreflang — only where a page genuinely has a twin

Two clusters on this site are the same offer written for a different market in
the same language, which is exactly what hreflang is for:

| Cluster | Alternates |
|---|---|
| the 21 `/services/{service}/{region}` pages | `en-US`, `en-GB`, `en-AU`, `x-default` |
| the 3 `/markets/{region}` pages | `en-US`, `en-GB`, `en-AU`, `x-default` |

**You do not write these.** `lib/seo.ts` derives them from the page's own path,
so a new page inside either cluster gets them by existing and a page outside
both gets none. The checker enforces both directions.

`x-default` is the United States page — except `audit-support`, whose
`x-default` is United Kingdom, matching where its retired generic URL resolves
on country-segmented Search Console evidence.

**Nothing else gets hreflang, and this is the part to hold.** A market
sub-page has no counterpart: `/markets/united-kingdom/vat-returns` answers a
question `/markets/australia/bas-preparation` does not ask, and declaring them
alternates tells Google two unrelated pages are substitutes. The US state
pages and the registration cluster exist once for the same reason. If you build
a genuinely new regional trio, add it to `hreflangAlternates()` in `lib/seo.ts`
and to `HREFLANG_ROUTES` in the checker — not to the page.

---

## 6. Links

- **Never link `/services/{slug}`.** Those 7 URLs are 308 redirects. Link the
  regional page: `/services/{slug}/united-states`, except `audit-support`, which
  resolves to `united-kingdom`.
- **A new page needs ≥ 2 contextual inbound links** from inside `<main>` on
  other pages. Footer and navbar links do not count — the navbar emits zero
  links into server HTML, so it is not a crawl path. A page arriving with one
  inbound link is the failure the link crawl exists to catch.
- Link lists, breadcrumbs and reference lists are **not** inline links, so WCAG
  2.5.8 does not exempt them. They need `inline-block py-1.5` or they render
  ~17px.

---

## 7. Finish the pass — the four things that are not automatic

A page is not done when it renders. In the **same** commit:

1. `app/sitemap.ts` — add the route.
2. `public/llms.txt` — add the URL with a one-line descriptor. This is what AI
   assistants read and repeat; it drifted to 108 missing pages because nothing
   checked it.
3. `docs/ROUTES.md`, `docs/CONTENT-REGISTRY.md`, `docs/SEARCH-INTENTS.md` — one
   row each. `SEARCH-INTENTS` is the cannibalisation guard: one intent, one URL.
4. `node scripts/generate-sitemap-dates.mjs` — so `lastmod` is true.

Then run the checker.

---

## 8. Before you create a URL at all

- **One search intent → one URL** (`docs/SEARCH-INTENTS.md`). Two pages splitting
  one intent means neither earns a click — that is exactly what happened to the
  offshore cluster and to real estate / property management / HOA.
- **Near-duplicate ceiling is 25%** on 6-gram Jaccard against every existing
  page. The registration trio hit 53% on its first attempt by templating.
  Measure before shipping.
- **Prefer improving an existing page over adding a new one.**
- Every claim traces to `knowledge/`. Never invent clients, statistics,
  certifications, turnaround times or rates — and read
  `knowledge/company/scope-boundaries.md` before writing any capability claim.

---

## 9. Known-good exemptions

Do not "fix" these:

| Route | Why |
|---|---|
| `/thank-you` | `noindex` conversion target; no form (double-counts `generate_lead`) |
| `/technology/myob` | `noindex` by owner decision |
| `/contact` | the page *is* the form — no `#inquiry` band |
| 4 `/blog/hoa-*` alias routes | permanent redirect sources; page files are intentionally unreachable |
| Section hubs | deliberately short |
