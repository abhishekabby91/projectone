# GSC Query Opportunities and Indexing Review — 2026-10-19

## Data and limits

Source: connected Google Search Console property `sc-domain:accounstone.com`, Search type WEB, trailing 90-day window returned by GenieSeo: **2026-07-21 to 2026-10-19**. Page-level impressions, clicks, CTR and average position are from the page dimension. Query examples below are from page-filtered query reports. Query reports may omit anonymized queries, so their visible impression totals will be lower than page totals. Average position is an average across impressions, not a fixed rank for every query.

## Priority pages

| Page | Clicks | Impressions | CTR | Average position | Decision |
|---|---:|---:|---:|---:|---|
| `/services/tax-preparation/united-states` | 1 | 1,724 | 0.06% | 66.0 | Keep as the broad commercial U.S. tax-preparation page; distinguish it from the guide and keep linking to the return-type pages. |
| `/blog/tax-preparation-outsourcing` | 0 | 1,540 | 0.00% | 27.0 | Keep as the informational workflow/controls/software guide; make its title intent clearer and link prominently to the commercial service page. |
| `/markets/united-states` | 1 | 450 | 0.22% | 79.3 | Keep as a geographic overview that routes readers to service-specific pages, not as another offshore-accounting or tax-service landing page. |
| `/solutions/staff-augmentation` | 2 | 423 | 0.47% | 48.5 | Improve metadata alignment with the recurring query family around accounting staff augmentation services. |
| `/solutions/offshore-accounting-support` | 3 | 409 | 0.73% | 68.9 | Retain as the dedicated offshore accounting support solution; improve later based on its own query and conversion data rather than broad rewrites. |

## Query evidence and interpretation

### 1. Tax preparation: the strongest opportunity, with overlap to resolve

The service page is visible for relevant commercial phrases but ranks poorly for several higher-impression terms: `outsource tax preparation services` (107 impressions, average position 72.2), `corporate tax outsourcing` (32, position 84.2), and `outsourced tax preparation for CPA firms` (30, position 73.9). Some narrow software/preparation queries already perform better, including `cch axcess outsource` (2 impressions, position 7) and `cpa outsource tax prep` (5, position 12.4).

The guide attracts many of the same families at materially better positions: `tax preparation outsourcing` (131 impressions, position 33.5), `tax preparation outsourcing for CPA firms` (28, position 18.0), `tax outsourcing for CPA firms` (39, position 18.1), `outsourced tax preparation for CPA firms` (43, position 20.6), and `outsource tax preparation` (47, position 24.7). It also has useful visibility for `CCH Axcess outsource` (8 impressions, position 9.9).

**Action:** Do not create another broad tax-outsourcing page. The commercial URL remains the owner of service intent; the blog should satisfy informational intent about process, controls, software and capacity, then send readers to the service page. Existing Form 1040, 1065, 1120 and 1120-S pages should remain distinct by return workflow.

### 2. Staff augmentation: improve the exact phrase fit

`accounting staff augmentation` generated 182 impressions at position 40.1, while `accounting staff augmentation services` generated 25 at position 25.8. `finance staff augmentation` generated 86 at position 71.7 and appears less tightly aligned with the accounting service.

**Action:** Include “services” naturally in the metadata while keeping the body focused on defined accounting capacity, existing systems, and review/approval boundaries. Don't turn this into a broad financial staffing page.

### 3. U.S. market page: avoid competing with service-specific pages

Visible query examples are largely offshore-accounting variants: `offshore accounting services` (79 impressions, position 84.3), `offshore accounting` (46, position 80.8), and `offshore accounting company` (16, position 80.5). The page's purpose is to orient U.S. firms and businesses to relevant services and routes, not to own the broad offshore-accounting phrase.

**Action:** Clarify the hero as an accounting, bookkeeping and tax overview for U.S. operations and for both firms and businesses. Keep the metadata and service links consistent with this hub role.

### 4. Offshore accounting support: preserve a distinct solution page

The query group includes `offshore accounting solutions` (53 impressions, position 63.4), `offshore accounting support` (47, position 59.5), `offshore audit support` (56, position 82.6), and `offshore audit support services` (47, position 79.1).

**Action:** Keep this page focused on offshore accounting delivery, responsibilities, systems and workflow handoff. Do not change the U.S. market page to chase these same terms. Revisit audit-support prominence separately against Accounstone's current service scope.

## Indexing checks

The connected GSC URL Inspection results for these five target pages showed **Submitted and indexed**, successful page fetch, robots allowed and the expected canonical:
- `/services/tax-preparation/united-states`
- `/blog/tax-preparation-outsourcing`
- `/markets/united-states`
- `/solutions/staff-augmentation`
- `/solutions/offshore-accounting-support`

Additional sample:
- HOA California and San Diego County pages: submitted and indexed.
- Property-management accounting cleanup and the property-management accounting guide for small companies: submitted and indexed.
- HOA Yardi accounting support: discovered, currently not indexed; never crawled.
- CPA-firm California, Texas and Florida URLs, plus the Form 1120 and 1120-S pages: URL unknown to Google; never crawled according to URL Inspection.

The sitemap endpoint reported **Valid**, 205 indexed URLs, 0 errors and 0 warnings, but its last download was **2026-10-16**. The six URLs above that were unknown/discovered without indexing appear in the repository's main branch and are listed in `app/sitemap.ts`. A stale sitemap fetch is a plausible discovery delay after recent route updates, not a proven cause. The next steps are to resubmit the sitemap, verify each URL returns the intended live page, and ensure meaningful contextual links from relevant parent/service pages. Sitemap submission does not guarantee indexing.

## Changes staged from this review

On branch `accounstone-gsc-query-optimizations-oct19`:
- Clarified the blog's metadata as an informational guide and strengthened its early link to the commercial U.S. tax-preparation page.
- Aligned staff-augmentation metadata with the GSC query phrase.
- Reframed the U.S. market hero to represent both firms and businesses rather than only an offshore tax-preparation team.
- Updated the search-intent registry and changelog to keep page ownership explicit.

No URLs were added, renamed or removed. Do not interpret these on-page edits as ranking gains until Google recrawls and the next 28-day GSC comparison is available.
