# GSC Page-Position, Cannibalization and Indexing Audit
**Audit date:** 2026-10-19  
**Search Console property:** sc-domain:accounstone.com  
**Window:** 2026-07-21 to 2026-10-19, WEB  
**Data source:** Connected GenieSeo / Google Search Console page totals and query-page rows captured during this audit.

> Average position is an impression-weighted average, not a fixed rank for every query. Query reports can omit anonymized queries; visible query-row impression counts are not necessarily the page's full impression total. Changes below clarify intent and discoverability; they do not guarantee ranking increases.

## A. Highest-priority page-position opportunities

| Page | Clicks | Page impressions | Average position | Action |
|---|---:|---:|---:|---|
| /services/tax-preparation/united-states | 1 | 1,724 | 66.0 | Keep commercial service intent. Improve the direct answer, return-type paths and link to the workflow guide. |
| /blog/tax-preparation-outsourcing | 0 | 1,540 | 27.0 | Make it a clearly informational workflow/software/controls guide; point commercial users to the service page. |
| /markets/united-states | 1 | 450 | 79.3 | Retain as the U.S. geographic service hub; avoid owning generic offshore-accounting intent. |
| /solutions/staff-augmentation | 2 | 423 | 48.5 | Align commercial metadata to accounting staff augmentation services and link the informational seasonal guide. |
| /solutions/offshore-accounting-support | 3 | 409 | 68.9 | Keep as the engagement/delivery-model page; clarify support scope and review handoffs. |

## B. Confirmed query/page overlap and actions

### Tax-preparation cluster — highest priority
Visible query/page rows from the 90-day report:
- tax preparation outsourcing: 301 visible query-page impressions: U.S. service page 141 (average position 69.8), guide 131 (33.5), Australia service page 15 (69.7), generic legacy service route 13 (90.2), and UK market page 1 (92).
- us tax preparation outsourcing: U.S. service page 80 (position 61.0); guide 71 (19.9).
- outsourced tax preparation for cpa firms: guide 43 (20.6), U.S. service page 30 (73.9), generic legacy service route 16 (80.7).
- tax preparation outsourcing for cpa firms: U.S. service page 43 (60.3), guide 28 (18.0), generic legacy service route 9 (77.1).

**Fix staged:** The commercial owner remains /services/tax-preparation/united-states; /blog/tax-preparation-outsourcing is now positioned as a tax-season workflow, software, permissions and reviewer-controls guide. The U.S. service page keeps return-type links for Forms 1040, 1065, 1120 and 1120-S and links to the guide. No new tax page was created. Country-specific pages remain separate where jurisdictional workflows differ.

### Staff augmentation
- accounting staff augmentation: commercial solution 182 impressions (position 40.1); tax-season guide 33 (19.6).
- accounting staff augmentation services: 25 impressions, average position 25.8 on the query report.
- cpa firm augmentation: commercial solution 14 impressions (77.4); tax-season guide 6 (12.5).

**Fix staged:** Metadata on /solutions/staff-augmentation targets the service intent. /resources/guides/staff-augmentation-tax-season-guide stays informational and links back to the service; no redirect is justified.

### HOA accounting cluster
- hoa accounting services: 42 visible query impressions distributed across /industries/hoa-accounting (15; position 81), the former /services/hoa-accounting route (14; 69.1), California (5; 86.4), San Diego County (4; 36.5) and Texas (4; 90).
- hoa accounting: 33 query impressions across California (11), former service route (8), industry hub (7), San Diego County (4), Texas (2) and the assessment-accounting article (1).

**Fix staged:** The former service URL already had a permanent redirect to /industries/hoa-accounting; its source page and sitemap entry are now removed. Links from HOA bookkeeping/reporting pages and the article layout point directly to the canonical hub. The AI reference files no longer list the obsolete service URL. The California, San Diego County, Texas and software-specific pages remain separate where the location/platform intent is genuinely different. Ninety-day impressions include pre-redirect data and do not prove the redirect is failing.

### Property management accounting
- property management accounting services: legacy /services/property-management-accounting 30 impressions (position 69.6); /industries/real-estate 1.
- outsourced property management accounting: /industries/property-management 19 (position 63.2); the informational in-house-vs-outsourced article 2 (position 22).
- property management bookkeeping: bookkeeping-vs-accounting guide 32 (position 32.6); small-companies guide 2 (73.5).

**Fix staged:** The legacy service page substantially repeated the industry hub's property-level books, tenant/owner ledgers, AP/AR, reconciliations and month-end scope. A permanent redirect now consolidates /services/property-management-accounting into /industries/property-management. The sitemap and AI reference files use the hub; its internal link now directs to the distinct accounting-cleanup page. Informational property bookkeeping and process guides remain in place.

### Offshore support and geographic markets
- offshore accounting: Australia market page 102 impressions (position 71.9), U.S. market page 46 (80.8), UK market page 35 (60.0).
- offshore accounting services: U.S. 79 (84.3), UK 36 (66.2), Australia 35 (80.3).
- offshore accounting solutions: dedicated offshore support solution 53 (63.4), U.S. market page 25 (72.0).

**Fix staged:** The Australian market title/hero now describes accounting outsourcing for Australian practices, complementing the UK practice-specific and U.S. geographic pages. The U.S. market page reads as a geographic hub serving accounting firms and direct businesses, and the offshore support solution is explicit about recurring support scope. No regional pages were merged because their compliance context and target audience differ.

### Accounts payable and accounts receivable
- accounts payable outsourcing services: U.S. AP page 96 impressions (position 82.6), Australia AP page 40 (86.8), AP guide 15 (65.8), UK AP page 3 (66.3).
- accounts payable outsourcing: AP guide 101 (65.4), Australia AP page 33 (60.9), UK AP page 1 (61.0).
- accounts payable services: U.S. AP page 61 (69.1), Australia AP page 46 (87.4), UK AP page 28 (86.3).
- accounts receivable outsourcing services: Australia AR page 41 (59.7), U.S. AR page 38 (72.1), AR guide 4 (73.2), UK AR page 3 (73.3).
- accounts receivable outsourcing: Australia AR page 22 (65.8), U.S. AR page 19 (71.8), UK AR page 5 (57.8), AR guide 4 (79.8).

**Fix staged:** AP and AR regional service pages remain commercial and jurisdiction-aware. The AP guide is framed around controls, fraud prevention, software and cost factors; the AR guide focuses on receivables management, DSO, cash application, aging and follow-up. Both guides contain descriptive links to the U.S. service pages. No regional service pages were consolidated based only on broad queries.

## C. Indexing and technical status

### Confirmed changes in source
- next.config.mjs: permanent redirects to the canonical HOA and property-management industry hubs.
- app/sitemap.ts: no longer lists the two redirect-source URLs.
- lib/sitemap-dates.ts: no stale date entries for the deleted source paths.
- docs/ROUTE-INVENTORY.md: generated inventory now reports 212 indexable routes and excludes the removed route sources.
- public/llms.txt and public/llms-full.txt: canonical HOA and property-management destinations only.
- components/article-layout.tsx: dynamic HOA-related article links now lead directly to the canonical hub.

### Latest GSC URL Inspection snapshot before the branch is deployed
A previous sitemap resubmission reported **Valid**, 214 indexed URLs, 0 errors and 0 warnings; the sitemap was last downloaded on 2026-10-19. This site-level count does not mean every URL is indexed.

Two further batched URL Inspection requests completed on 2026-10-19:
- Core pages **submitted and indexed**: U.S. tax service (last crawled Oct 14), tax guide (Oct 10), staff augmentation (Oct 12), property-management hub (Oct 7), HOA hub (Oct 15), Xero (Oct 10), AP Australia (Oct 15), AP U.S. (Oct 14), AR Australia (Oct 9), AR UK (Oct 17), AR U.S. (Oct 15), audit-support U.S. (Oct 15), audit-support UK (Oct 8), Australian bookkeeping (Oct 9), back-office support (Oct 14), dedicated teams (Oct 18), healthcare hub (Oct 6), and the Form 1040, 1120 and 1120-S tax pages (Form 1120 / 1120-S last crawled Oct 19).
- Newly checked **discovery gaps**: HOA Yardi support = “URL unknown to Google” / never crawled; CPA firms Florida = “URL unknown to Google” / never crawled; Form 1065 partnership = “Discovered — currently not indexed” / never crawled. The CPA California and Texas pages were indexed and crawled Oct 19; HOA California and Texas pages were also indexed.
- `/technology/myob` is **Excluded by ‘noindex’ tag**, last crawled Oct 15. This is intentional per the existing owner-approved decision recorded in the source: much of its traffic was product-implementation research unrelated to Accounstone's service scope. Its 90-day page impressions must not be treated as an indexable ranking opportunity, and its noindex should not be removed to chase impressions.
- The live production URLs for the legacy HOA/property-accounting services were still reported as “Submitted and indexed” in this snapshot. The new redirect/source-removal changes are on this branch and have **not** been deployed; do not claim their production redirect status has changed until the current branch is built and released.

**Actions for indexing gaps:** Yardi HOA is already listed in the sitemap and linked from the HOA hub; a targeted contextual link was added from the Yardi-specific informational articles. Florida CPA is already listed in the sitemap and linked from the CPA-firm hub, so verify its live response and canonical after deployment before changing content. Form 1065 is linked from the U.S. tax service hub and in the sitemap. After this branch is deployed, re-submit the updated sitemap, run URL Inspection again for these three URLs, and inspect the rendered content/canonical. The prior attempt to refresh GenieSeo did not complete, but this subsequent batched URL Inspection did complete, so the statuses above are the latest available snapshot.

### Validation limitation
The Vercel check on previous staged SEO work reported an account build-rate-limit failure. The present audit branch has not been confirmed built or deployed. Re-run the project verification and inspect production URLs after the build limit clears. Measure the next 28-day GSC period against the prior 28 days; do not attribute changes to these edits until that comparison exists.

## D. Implementation summary

- **Legacy duplicate URLs:** 2 permanent redirects; no new URL was created.
- **Metadata/content updates:** U.S. tax hub and informational guide; staff augmentation service and seasonal guide links; offshore support and dedicated-team/back-office solutions; U.S. and Australia market pages; HOA and property-management hubs; AP/AR U.S. and Australia services plus AR UK service; Australian bookkeeping; U.S./UK audit support; Xero platform support; healthcare accounting. MYOB stays deliberately noindex.
- **Canonical/internal-link updates:** sitemap, llms.txt, llms-full.txt, HOA service cross-links and dynamic article related links.
- **Outstanding:** fresh build verification, production HTTP/canonical checks and new GSC URL inspections after deployment.
