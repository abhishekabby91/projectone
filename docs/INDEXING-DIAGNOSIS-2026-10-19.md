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

## Follow-up after deployment

1. Deploy the reviewed branch with the intended sitemap changes.
2. Fetch the live `/sitemap.xml` and confirm that every listed URL returns a canonical, indexable destination; confirm `/technology/yardi` is absent and its redirect target is present.
3. Resubmit the sitemap in Search Console after the production sitemap has changed.
4. Use URL Inspection for Form 1065 and the newly published Form 1120 / 1120-S routes. Request indexing in Search Console where available, then monitor crawl and coverage status.
5. If Form 1065 remains un-crawled after the recrawl window, check its rendered HTML, canonical, robots directives, server response, crawl accessibility, and internal-link prominence before changing the page further.
6. Newly authored state and workflow pages in the draft branch are not expected to appear in production Search Console until deployment. Their absence from GSC today is not proof of a technical defect.

## Important distinction

A valid sitemap confirms that Google can process the sitemap; it does **not** guarantee that each URL will be crawled or indexed. A URL can be discovered through a sitemap and still wait for crawling. Indexing is ultimately Google's decision and should be monitored URL by URL.
