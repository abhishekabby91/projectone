# Indexing diagnosis — 2026-10-19

## Scope and source

This note records the current Google Search Console URL Inspection and sitemap responses for the `sc-domain:accounstone.com` property. It separates observed status from hypotheses; it does not claim that any single change guarantees indexing.

## Current observations

| URL | GSC coverage state | Last crawl | Interpretation |
|---|---|---|---|
| `/services/tax-preparation/united-states/1065-partnership` | Discovered — currently not indexed | Never | Google knows the URL but has not crawled it yet. This is not evidence of a rendering failure because no crawl is recorded. The route is already in the sitemap and is linked from the U.S. tax-preparation hub, tax-outsourcing guide, and CPA-firm hub. |
| `/services/tax-preparation/united-states/1120-corporation` | URL is unknown to Google | Never | This route is part of the unpublished working branch. Do not diagnose it as a production indexing failure before the branch is deployed. |
| `/services/tax-preparation/united-states/1120-s-corporation` | URL is unknown to Google | Never | This route is part of the unpublished working branch. Do not diagnose it as a production indexing failure before the branch is deployed. |
| `/technology/yardi` | Page with redirect | 2026-10-12 | Expected for a retired URL with a permanent redirect. Google should consolidate signals to the destination; the redirect source must not appear as a sitemap URL. |
| `/industries/cpa-firms` | Submitted and indexed | 2026-10-15 | The existing CPA-firm hub is indexed. |

The sitemap response on 2026-10-19 reported `https://www.accounstone.com/sitemap.xml` as **Valid**, with **205 indexed URLs**, **0 errors**, and **0 warnings**; Google last downloaded it on 2026-10-16.

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
