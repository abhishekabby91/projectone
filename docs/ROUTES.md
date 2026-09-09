# Route Registry

Source of truth for every indexable route on accounstone.com. Generated from a full repository audit on 2026-08-21, restructured 2026-08-27 (see the Growth System Audit delivered that date), re-verified against `app/**/page.tsx` on 2026-09-08. Update this file in the same pass as any change that adds, removes, or re-scopes a route — don't let it drift from `app/**/page.tsx` the way `app/sitemap.ts` did once before (see `AI-WEBSITE-GUIDE.md`, "Known build gotchas").

Type key: **B** commercial SEO page · **C** blog/guide/informational · **E** proof · **Hub** index/directory page · **Corp** non-cluster company page (intentionally outside the SEO cluster architecture).

## Services

Region-first as of 2026-08-27. The generic `/services/{slug}` layer was retired: its
content was merged into the regional pages and the URLs now 301 to the United States
page (see `next.config.mjs`). **Do not recreate a generic service page** — it competes
with its own regional children for the same commercial intent.

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/services` | Hub | Core — region-first | Published |
| `/services/bookkeeping/{united-states,united-kingdom,australia}` | B | Bookkeeping | Published |
| `/services/accounting/{united-states,united-kingdom,australia}` | B | Accounting Services | Published (UK + AU added 2026-08-27) |
| `/services/tax-preparation/{united-states,united-kingdom,australia}` | B | Tax Preparation | Published |
| `/services/payroll/{united-states,united-kingdom,australia}` | B | Payroll | Published |
| `/services/accounts-payable/{united-states,united-kingdom,australia}` | B | Accounts Payable | Published |
| `/services/accounts-receivable/{united-states,united-kingdom,australia}` | B | Accounts Receivable | Published |
| `/services/audit-support/{united-states,united-kingdom,australia}` | B | Audit Support | Published |

21 commercial pages = 7 services x 3 regions. The matrix lives in `lib/data.ts`
(`regions`, `serviceRegions`, `serviceRegionPaths`) and drives the navbar, the footer,
the `/services` hub and `app/sitemap.ts` from one place.

**CFO Support and HR services are not offered** and have no pages. See
`knowledge/company/scope-boundaries.md`. The owner has indicated both may be added in
future; at that point the change is an entry in `serviceRegions` plus the matching
`page.tsx` files, nothing structural.

### Retired — do not recreate

| URL | Action | Target |
|---|---|---|
| `/services/bookkeeping` | 301 | `/services/bookkeeping/united-states` |
| `/services/accounting` | 301 | `/services/accounting/united-states` |
| `/services/tax-preparation` | 301 | `/services/tax-preparation/united-states` |
| `/services/payroll` | 301 | `/services/payroll/united-states` |
| `/services/accounts-payable` | 301 | `/services/accounts-payable/united-states` |
| `/services/accounts-receivable` | 301 | `/services/accounts-receivable/united-states` |
| `/services/audit-support` | 301 | `/services/audit-support/united-states` |

## Solutions (engagement models)

| URL | Type | Status |
|---|---|---|
| `/solutions` | Hub | Published |
| `/solutions/offshore-accounting-support` | B | Published |
| `/solutions/staff-augmentation` | B | Published |
| `/solutions/dedicated-accounting-teams` | B | Published |
| `/solutions/back-office-support` | B | Published |

## Markets

| URL | Type | Spokes | Status |
|---|---|---|---|
| `/markets` | Hub | — | Published |
| `/markets/united-states` | B | `/texas`, `/california`, `/florida` | Published |
| `/markets/united-states/texas` | B | — | Published |
| `/markets/united-states/california` | B | — | Published |
| `/markets/united-states/florida` | B | — | Published |
| `/markets/united-kingdom` | B | `/vat-returns`, `/year-end-accounts` | Published |
| `/markets/united-kingdom/vat-returns` | B | — | Published 2026-09-09 |
| `/markets/united-kingdom/year-end-accounts` | B | — | Published 2026-09-09 |
| `/markets/australia` | B | `/bas-preparation` | Published |
| `/markets/australia/bas-preparation` | B | — | Published 2026-09-09 |

**"Offshore" belongs to `/solutions/offshore-accounting-support`, not to a market
page.** The UK page was titled "Offshore Accounting for UK Practices" until
2026-09-04 and took ~140 of its 144 impressions from the offshore cluster,
competing with the solutions page while neither earned a click. Do not put the
word back in a market page's title, h1 or description.

Canada is not a route. See `knowledge/company/identity.md` — open business decision, not an engineering gap.

## Industries

| URL | Type | Spokes | Status |
|---|---|---|---|
| `/industries` | Hub | — | Published |
| `/industries/cpa-firms` | B | — | Published — site's declared Tier-1 audience |
| `/industries/technology` | B | — | Published |
| `/industries/healthcare` | B | — | Published |
| `/industries/ecommerce` | B | — | Published |
| `/industries/real-estate` | B | `/yardi-accounting-outsourcing-texas` | Published |
| `/industries/real-estate/yardi-accounting-outsourcing-texas` | B | — | Published |
| `/industries/professional-services` | B | — | Published |

## Technology

| URL | Type | Status |
|---|---|---|
| `/technology` | Hub | Published |
| `/technology/quickbooks` | B | Published |
| `/technology/xero` | B | Published |
| `/technology/sage` | B | Published |
| `/technology/netsuite` | B | Published |
| `/technology/drake-tax` | B | Published |
| `/technology/cch` | B | Published |
| `/technology/myob` | B | Published — **`noindex` since 2026-09-04**, and therefore absent from `app/sitemap.ts` and `public/llms.txt`. Live and linked; not in `robots.txt` (a blocked URL cannot be crawled, so the noindex would never be read). See CLAUDE.md. |

## Resources — Blog

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/blog` | Hub | — | Published |
| `/blog/outsourced-bookkeeping-guide` | C | Bookkeeping | Re-scoped 2026-08-21 (see CONTENT-REGISTRY) |
| `/blog/accounts-payable-outsourcing` | C | Accounts Payable | Re-scoped 2026-08-21 |
| `/blog/accounts-receivable-management` | C | Accounts Receivable | Published — no conflict |
| `/blog/outsourced-payroll-services` | C | Payroll | Re-scoped 2026-08-21 |
| `/blog/outsourced-accounting-services` | — | Accounting Services | **Removed 2026-08-21** — 301 redirect to `/resources/guides/outsourced-accounting-services-guide` in `next.config.mjs`, see CONTENT-REGISTRY |
| `/blog/tax-preparation-outsourcing` | C | Tax Preparation | Published — no conflict |
| `/blog/audit-support-services` | C | Audit Support | Published — no conflict |

## Resources — Guides

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/resources/guides` | Hub | — | Published |
| `/resources/guides/outsourced-bookkeeping-cost-guide` | C | Bookkeeping | Published — primary owner of cost intent |
| `/resources/guides/questions-to-ask-before-outsourcing-bookkeeping` | C | Bookkeeping | Published |
| `/resources/guides/quickbooks-vs-xero-comparison` | C | Technology | Published |
| `/resources/guides/staff-augmentation-tax-season-guide` | C | CPA Firms | Published |
| `/resources/guides/outsourced-accounting-services-guide` | C | Accounting Services | Published — sole owner of this intent since 2026-08-21 merge |
| `/resources/guides/outsourced-accounts-payable-guide` | C | Accounts Payable | Published — primary owner of scope intent |
| `/resources/guides/outsourced-accounts-receivable-guide` | C | Accounts Receivable | Published |
| `/resources/guides/outsourced-payroll-processing-guide` | C | Payroll | Published — primary owner of coverage-by-region intent |
| `/resources/guides/how-to-choose-accounting-outsourcing-partner` | C | CPA Firms | Published |
| `/resources/guides/client-accounting-services-cas-guide` | C | CPA Firms | Published |
| `/resources/guides/choosing-an-engagement-model` | C | Solutions | Published 2026-08-21 — fills the comparison gap flagged in the audit |

## Resources — Insights & Case Studies

| URL | Type | Status |
|---|---|---|
| `/resources` | Hub | Published — the top-level resources index above blog, guides and insights |
| `/resources/insights` | Hub | Published |
| `/resources/insights/asc-606-revenue-recognition-saas` | C | Published |
| `/resources/insights/sales-tax-nexus-ecommerce-guide` | C | Published |
| `/resources/case-studies` | E | Published — correctly labeled illustrative scenarios, not real client stories |

## Delivery Framework / Trust

| URL | Type | Status |
|---|---|---|
| `/delivery-framework/onboarding` | Trust | Published |
| `/delivery-framework/communication` | Trust | Published |
| `/delivery-framework/quality-assurance` | Trust | Published |
| `/compliance` | Trust | Published |
| `/data-security` | Trust | Published |

## Company / Corporate

| URL | Type | Status |
|---|---|---|
| `/` | Corp | Published |
| `/about` | Corp | Published |
| `/contact` | Corp | Published — rebuilt 2026-09-03 as a trust page, not a form page |
| `/company-registration` | Hub | Published (added 2026-09-04) — US company registration cluster |
| `/company-registration/delaware` | B | Published (added 2026-09-04) |
| `/company-registration/wyoming` | B | Published (added 2026-09-04) |
| `/company-registration/nevada` | B | Published (added 2026-09-04) |
| `/privacy` | Corp | Published |
| `/cookie-policy` | Corp | Published (added 2026-09-04 with the consent system) |
| `/terms` | Corp | Published |
| `/thank-you` | Corp | Published — **`noindex`**, and therefore absent from `app/sitemap.ts` and `public/llms.txt`. It exists so Google Ads and Meta have a destination URL to count a conversion on; it must stay crawlable, so do not add it to `robots.txt`. |

`app/services/cfo-support/route.ts` returns **410 Gone**. It is a `route.ts`, not a
`page.tsx`, so it appears in no count on this page. CFO support is not offered; if it ever
is, delete that route first.

---

**93 routes on disk, 91 in the sitemap** (verified 2026-09-09). The two differences are
`/thank-you` and `/technology/myob`, both `noindex` — a noindex URL in a sitemap is a
contradiction Search Console reports, so their absence is correct and expected. Anything
else in either direction is drift.

There are **eight** 301 redirects, all single-hop: the seven retired generic
`/services/{slug}` URLs, plus `/blog/outsourced-accounting-services` → the
accounting-services guide. The per-URL evidence for each service target is in the comment
above the redirects in `next.config.mjs`. Six point at United States;
`/services/audit-support` points at United Kingdom.

Before adding a route: check this file, `SEARCH-INTENTS.md`, and `CONTENT-REGISTRY.md` for an existing owner of the intent. Before removing one: search all internal references and add a redirect — see `AI-WEBSITE-GUIDE.md`.

## Re-running the drift check

`app/sitemap.ts` mixes hardcoded `path:` entries with URLs auto-generated from `lib/data.ts`, so grepping the source undercounts. Diff against the **generated** sitemap instead, with the dev server running:

```bash
find app -name "page.tsx" | sed 's|^app||; s|/page.tsx$||; s|^$|/|' | sort > /tmp/disk.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]+</loc>' \
  | sed 's|<loc>https://www.accounstone.com||; s|</loc>||; s|^$|/|' | sort -u > /tmp/sitemap.txt
comm -13 /tmp/disk.txt /tmp/sitemap.txt   # in sitemap, no page  -> would 404
comm -23 /tmp/disk.txt /tmp/sitemap.txt   # page exists, unlisted -> not crawled
```

**The first must print nothing. The second prints exactly two lines** —
`/technology/myob` and `/thank-you`, the two `noindex` routes above. Anything else in
either direction is drift.

This is the check that catches the failure mode recorded in `AI-WEBSITE-GUIDE.md`
("Known build gotchas") — it found four unlisted guides on 2026-08-21, confirmed
84 ↔ 84 parity after the 2026-08-27 restructure, and reads 90 ↔ 88 as of 2026-09-08.

Two related checks belong in the same pass:

```bash
# public/llms.txt holds the same invariant as the sitemap: every indexable
# route, neither noindex one.
grep -oE 'https://www\.accounstone\.com[^ )]*' public/llms.txt \
  | sed 's|https://www.accounstone.com||; s|/$||; s|^$|/|' | sort -u > /tmp/llms.txt
comm -23 /tmp/llms.txt /tmp/disk.txt   # linked but no page -> must be empty
comm -13 /tmp/llms.txt /tmp/disk.txt   # page but unlinked  -> the 2 noindex only

# sitemap lastmod is generated from git, never hand-written
node scripts/generate-sitemap-dates.mjs
```
