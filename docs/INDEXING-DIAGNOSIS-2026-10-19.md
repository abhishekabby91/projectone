# Indexing diagnosis — 2026-10-19

## Scope and source

This note records the current Google Search Console URL Inspection and sitemap responses for the `sc-domain:accounstone.com` property. It separates observed status from hypotheses; it does not claim that any single change guarantees indexing.

## Current observations

| URL | GSC coverage state | Last crawl | Interpretation |
|---|---|---|---|
| `/services/tax-preparation/united-states/1065-partnership` | Discovered — currently not indexed | Never | Google knows the URL but has not crawled it yet. This is not evidence of a rendering failure because no crawl is recorded. It is in the sitemap; the draft branch strengthens contextual links from the U.S. tax hub, tax-outsourcing guide, and CPA-firm hub. The latest live inspection listed the sitemap and U.S. tax hub as referring URLs. |
| `/services/tax-preparation/united-states/1120-corporation` | URL is unknown to Google | Never | This route is part of the unpublished working branch. Do not diagnose it as a production indexing failure before the branch is deployed. |
| `/services/tax-preparation/united-states/1120-s-corporation` | URL is unknown to Google | Never | This route is part of the unpublished working branch. Do not diagnose it as a production indexing failure before the branch is deployed. |
| `/technology/yardi` | Page with redirect | 2026-10-12 | Expected for a retired URL with a permanent redirect. Google should consolidate signals to the destination; the redirect source must not appear as a sitemap URL. |
| `/industries/cpa-firms` | Submitted and indexed | 2026-10-15 | The existing CPA-firm hub is indexed. |

The sitemap response on 2026-10-19 reported `https://www.accounstone.com/sitemap.xml` as **Valid**, with **205 URLs reported**, **0 errors**, and **0 warnings**; Google last downloaded it on 2026-10-16.

## Changes made in this branch

- Excluded the redirected `/technology/yardi` URL from the generated sitemap. The redirect remains in `next.config.mjs`; the technology data itself is not removed.
- Retained the existing `/technology/myob` sitemap exclusion because that page is marked noindex.
- Kept the Form 1065 route and its existing internal links. Since GSC reports it as discovered but never crawled, avoid making arbitrary copy changes or creating a duplicate page solely to force indexing.

## Query evidence for the next content decisions

Google Search Console web-search data for 2026-07-20 through 2026-10-18 gives these useful signals:

| Query/page observation | Impressions | Average position | Decision |
|---|---:|---:|---|
| CPA-firm hub, all queries in the sampled page report | 59 | 76.2 | The hub needs stronger relevance, authority and useful internal links; a low aggregate position does not justify creating another broad CPA-firm page. |
| `accounting outsourcing for cpa firms` on the CPA-firm hub | 2 | 57 | Early signal only; retain the hub as the primary commercial owner for broad CPA-firm outsourcing intent. |
| `cpa firm overflow work outsourcing` on the CPA-firm hub | 1 | 11 | Very small sample, but it supports testing the dedicated overflow workflow page already in this branch—not claiming meaningful search volume. |
| `cch axcess outsource` across existing pages | Guide: 8; U.S. tax service: 2; CCH technology page: 4 | Guide: 9.9; service: 7; technology: 24 | Existing pages already appear for this modifier. Improve internal links and page-intent clarity before creating another CCH page. |
| `corporate tax outsourcing` on the tax guide vs. U.S. tax service page | Guide: 42; service: 32 | Guide: 38.7; service: 84.2 | Keep the guide informational and the service page commercial; improve the service page and cross-links rather than adding another broad tax-outsourcing URL. |
| `offshore tax preparation services` on the tax guide | 73 | 34.9 | Continue improving the existing tax cluster and monitor after the metadata/intent refinement. |

These are first-party visibility measurements, not market-wide search volumes. Small impression counts can fluctuate, and average position is an aggregate metric rather than a fixed rank. Do not use these samples to claim that a state or keyword has the highest demand.

## Follow-up after deployment

1. Deploy the reviewed branch with the intended sitemap changes.
2. Fetch the live `/sitemap.xml` and confirm that every listed URL returns a canonical, indexable destination; confirm `/technology/yardi` is absent and its redirect target is present.
3. Resubmit the sitemap in Search Console after the production sitemap has changed.
4. Use URL Inspection for Form 1065 and the newly published Form 1120 / 1120-S routes. Request indexing in Search Console where available, then monitor crawl and coverage status.
5. If Form 1065 remains un-crawled after the recrawl window, check its rendered HTML, canonical, robots directives, server response, crawl accessibility, and internal-link prominence before changing the page further.
6. Newly authored state and workflow pages in the draft branch are not expected to appear in production Search Console until deployment. Their absence from GSC today is not proof of a technical defect.

## Important distinction

A valid sitemap confirms that Google can process the sitemap; it does **not** guarantee that each URL will be crawled or indexed. A URL can be discovered through a sitemap and still wait for crawling. Indexing is ultimately Google's decision and should be monitored URL by URL.


## Review of the external crawl audit — 2026-10-19

- **robots.txt:** the application-level policy allows public crawling and disallows only protected paths. Do not block a noindex URL as a substitute for a noindex directive; crawlers must be able to fetch the page to see that directive.
- **MYOB:** `/technology/myob` is intentionally marked `noindex` and remains available for users arriving from the technology hub. It is correctly excluded from the sitemap. Adding it to the sitemap would contradict its index directive; remove or repoint unnecessary internal links only if the owner later decides to retire the page.
- **Yardi:** the retired `/technology/yardi` route redirects and is correctly excluded from the sitemap. The canonical destination, not the redirect source, belongs in the sitemap.
- **Homepage audit-support card:** the card previously pointed to the UK audit-support route while the other homepage service cards pointed to US regional pages. This has been aligned to `/services/audit-support/united-states`, consistent with the homepage's primary US-market entry point. The UK audit-support page remains available from the UK market/service cluster.
- **`lastmod` dates:** do not replace them with the current date across all URLs. `app/sitemap.ts` reads the per-route map in `lib/sitemap-dates.ts`; the generator derives dates from route/body-module history and contains safeguards for the repository history re-import. Dates clustered around a recent date can be legitimate after a broad content pass, but each date should be checked against the affected route rather than bulk-reset.
- **Live verification limitation:** the external audit reports that robots.txt and sitemap.xml loaded successfully, but an independent fetch during this pass did not return a fresh response from the public host. Treat the audit's live status-code findings as reported observations until rechecked after the next deployment.

These checks do not guarantee indexing. After deployment, confirm the rendered sitemap, canonical URL, robots meta, response status and internal links for each important new route; then monitor Google Search Console URL Inspection and coverage states.


## Live GSC recheck — 2026-10-19 afternoon

A fresh connected Search Console inspection was run for the domain property `sc-domain:accounstone.com`. These are current observations, separate from the unpublished branch:

| URL | Current coverage state | Last crawl | Current interpretation |
|---|---|---|---|
| `/industries/hoa-accounting` | Submitted and indexed | 2026-10-15 | Indexed; no indexing blocker reported by URL Inspection. |
| `/industries/cpa-firms` | Submitted and indexed | 2026-10-15 | Indexed; keep this as the broad CPA-firm commercial hub. |
| `/services/tax-preparation/united-states` | Submitted and indexed | 2026-10-14 | Indexed; opportunity is ranking improvement, not discovery. |
| `/blog/tax-preparation-outsourcing` | Submitted and indexed | 2026-10-10 | Indexed; keep its informational-guide intent distinct from the tax service page. |
| `/services/tax-preparation/united-states/1065-partnership` | Discovered — currently not indexed | Never | Google knows the URL but has not crawled it. Current inspection lists the sitemap and U.S. tax hub as referring URLs. Avoid interpreting this as a render failure without a crawl. |
| `/industries/hoa-accounting/yardi-accounting-support` | Discovered — currently not indexed | Never | Current inspection lists only the sitemap as a referring URL. The draft branch adds a contextual link from the HOA hub and the indexed HOA Yardi guide; verify those links on production after deployment. |
| `/industries/cpa-firms/california` | URL is unknown to Google | Never | This route exists on the unpublished state-page branch. Its current GSC status is expected until the route is deployed and discovered. |
| `/industries/property-management/yardi-accounting-support` | URL is unknown to Google | Never | This is a different route from the HOA Yardi page. Do not confuse the two URL families or report the property-management route as an existing live page without verifying its production route. |
| `/industries/hoa-accounting/california` | Submitted and indexed | 2026-10-15 | Indexed; confirms Google can crawl and index at least one existing HOA state page. |

The sitemap list still reports `https://www.accounstone.com/sitemap.xml` as processed, with 205 URLs reported and zero errors or warnings. This confirms sitemap processing, not that every URL is indexed.

### 90-day Search Console performance snapshot

For 2026-07-21 through 2026-10-19, the highest-impression pages in the sampled report included:

| Page | Impressions | Clicks | Average position |
|---|---:|---:|---:|
| `/services/tax-preparation/united-states` | 1,724 | 1 | 66.0 |
| `/markets/united-states` | 450 | 1 | 79.3 |
| `/solutions/staff-augmentation` | 423 | 2 | 48.5 |
| `/solutions/offshore-accounting-support` | 409 | 3 | 68.9 |
| `/markets/united-kingdom` | 379 | 1 | 64.1 |
| `/industries/hoa-accounting/california` | 44 | 1 | 75.4 |

These are Search Console visibility observations, not search-volume estimates or guarantees of demand. They suggest prioritizing improvements to existing national tax-preparation and U.S. market pages alongside the new CPA-firm cluster, rather than creating another broad page that competes for the same intent.

### Post-deployment action order

1. Confirm the deployed sitemap contains only live, canonical, indexable URLs and the redirected `/technology/yardi` source is excluded.
2. Confirm the published HOA Yardi and Form 1065 pages have visible, crawlable internal links from their intended parent pages.
3. Re-inspect the two discovered-but-not-indexed URLs after Google has had time to recrawl; use the live URL test if a technical problem is suspected.
4. Inspect the new CPA-firm state pages after deployment; they are not production-indexing failures while still unpublished.
5. Prioritize content and internal-link improvements to the existing U.S. tax-preparation page, which already receives impressions but has a weak average position. Do not create a second generic tax outsourcing landing page.

Google's Page Indexing report distinguishes "Discovered — currently not indexed" from "Crawled — currently not indexed": the former means a crawl has not yet been recorded, while the latter calls for a closer content/canonical assessment. Neither status alone proves a code defect. See [Google Search Console Page indexing report](https://support.google.com/webmasters/answer/7440203?hl=en-GW).


### CPA-firm hub query sample — 2026-07-21 to 2026-10-19

The 90-day Search Console page/query report for `/industries/cpa-firms` returned 31 total impressions and no clicks across the sampled rows. Relevant examples:

| Query | Impressions | Average position | Interpretation |
|---|---:|---:|---|
| `cas outsourcing for cpa firms` | 4 | 54.8 | Early signal for a distinct CAS-production page; not enough volume to estimate demand. |
| `bookkeeping for cpa firms` | 3 | 80.7 | Supports clearer internal links to the existing U.S. bookkeeping service page. |
| `accounts payable outsourcing for cpa firms` | 2 | 84 | Supports testing the dedicated CPA-firm AP workflow page already drafted. |
| `accounting outsourcing for cpa firms` | 2 | 57 | Keep the CPA-firm hub as the primary broad commercial owner. |
| `cpa firm overflow work outsourcing` | 1 | 11 | Very small sample; useful as a query-to-page relevance clue, not proof of sustained ranking. |

No Search Console query data was returned for the draft branch's `white-label-accounting`, `cas-production-support`, `overflow-work-support`, or CPA-firm AP URLs in the last 90 days. Those pages must be treated as unpublished/new tests, not existing ranking assets. After publication, measure their impressions and queries before deciding whether to expand the cluster.
