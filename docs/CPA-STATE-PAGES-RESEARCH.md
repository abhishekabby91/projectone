# CPA-firm SEO cluster and state-page research — 2026-10-18

## Decision and scope

Create five separate, indexable state-qualified commercial pages for US CPA and accounting firms:

- `/industries/cpa-firms/california`
- `/industries/cpa-firms/texas`
- `/industries/cpa-firms/florida`
- `/industries/cpa-firms/new-york`
- `/industries/cpa-firms/illinois`

These are **market-test pages, not a claim that these are the five highest-search-intent states**. No comparable state-level Google Keyword Planner export was available during this pass. The state selection is based on a combination of broad prospect-pool rationale, public competitor precedent and a manageable initial cohort.

## The cluster is not just state-name variants

The state pages are only the location layer. The CPA-firm cluster needs to cover several distinct buyer questions and link them into one navigable hierarchy.

### Primary commercial cluster

| URL | Intent / job to be done | Relationship |
|---|---|---|
| `/industries/cpa-firms` | Broad CPA-firm outsourcing and capacity support | Main pillar; links to the state pages, delivery models, services and guides |
| `/industries/cpa-firms/white-label-accounting` | White-label delivery: brand use, client-contact boundaries, system access and workpaper handoff | Commercial delivery-model spoke; distinct from broad provider selection and the bookkeeping service detail |
| `/industries/cpa-firms/cas-production-support` | Recurring CAS production: reconciliations, month-end schedules and reporting-package preparation | Commercial workflow spoke; distinct from the informational CAS guide |
| `/industries/cpa-firms/{california,texas,florida,new-york,illinois}` | State-qualified CPA-firm outsourcing | Location layer; must link to relevant workflows and not merely replace the state name |
| `/services/bookkeeping/united-states` | Core client-bookkeeping production | Existing service owner |
| `/services/accounting/united-states` | Broader accounting and month-end support | Existing service owner |
| `/services/tax-preparation/united-states` | Tax return and workpaper preparation support | Existing service owner; includes form-specific spokes for 1040 and 1065 |
| `/services/payroll/united-states` | Payroll processing support for CPA firms | Existing service owner |
| `/services/audit-support/united-states` | Defined audit-support tasks | Existing service owner; avoid claiming audit opinions or independent audit judgment |

### Supporting educational and evaluation cluster (existing URLs)

- `/resources/guides/client-accounting-services-cas-guide` — explains the CAS service-line model; links to the commercial CAS production page.
- `/resources/guides/how-to-choose-accounting-outsourcing-partner` — supplier evaluation and decision criteria; links to white-label and CAS production pages.
- `/blog/us-cpa-firm-outsourcing-readiness-checklist` — scope, access, taxpayer-data safeguards and pilot checks; links to the relevant commercial pages.
- `/resources/guides/staff-augmentation-tax-season-guide` — seasonal capacity intent; keep it informational, linking to the national tax-preparation service page.
- `/resources/guides/choosing-an-engagement-model` — comparison of engagement structures; should route visitors to the relevant commercial model, not create another generic outsourcing page.
- `/resources/guides/how-to-outsource-accounting` — general outsourcing process; links to CPA-specific pages when the reader is a firm.
- `/technology/quickbooks`, `/technology/cch`, `/technology/drake-tax`, `/technology/xero` — existing software pages. Do not create near-identical software variants unless evidence demonstrates a distinct CPA-firm workflow and unique SERP intent.

### Competitor research that supports these intent groups

The following public pages explicitly target white-label delivery or CAS production for CPA/accounting firms. They establish that competitors distinguish these service models and workflow audiences; they do **not** prove monthly search volume, ranking potential or that Accounstone should copy competitors' claims.

- Athix Global — accounting and bookkeeping for US CPA firms under the firm's brand: https://athixglobal.com/accounting/
- Finsmart — white-label accounting services for CPA firms: https://finsmartaccounting.com/services/white-label-accounting-services
- Accountrise — CPA outsourcing and white-label bookkeeping: https://www.accountrise.com/services/cpa-outsourcing/
- Offshore Accounting — offshore CAS delivery for CPA firms: https://offshoreaccounting.com/services/offshore-cas/
- Advisory Monks — white-label CAS production for US CPA firms: https://www.advisorymonks.io/
- TCB Accounting — CAS support for CPA firms: https://www.tcbacs.com/accounting/
- Google Search Central — doorway abuse guidance warns against substantially similar pages made for similar queries or regional variants that funnel users to one destination: https://developers.google.com/search/docs/essentials/spam-policies

### Cluster linking rules

1. The CPA-firm pillar links to both commercial spokes (white-label and CAS production), the five state pages, and the existing core service pages.
2. Each state page links back to the pillar, both commercial spokes, and the core service pages only where relevant to that page's examples.
3. The CAS guide, provider-selection guide and readiness checklist link to the commercial page that answers the next buyer question.
4. Bookkeeping, accounting and tax-preparation service pages link back to the CPA-firm pillar and to the CAS/white-label model only where those models help explain the workflow.
5. Software pages are support pages, not a reason to create a new URL for every software + state combination.
6. Each page keeps one primary intent. Use supporting pages for related questions, not duplicate pages targeting the same query in slightly different wording.

## Closest existing routes and cannibalisation check

The route inventory and intent registry were reviewed before creating the pages:

- `/industries/cpa-firms` owns broad CPA-firm outsourcing and preparation-capacity intent. The new pages target state-qualified CPA-firm searches and return links to this hub.
- `/markets/united-states/california`, `/markets/united-states/texas` and `/markets/united-states/florida` target direct businesses seeking accounting services in those states, not CPA firms buying an outsourcing partner.
- `/services/bookkeeping/united-states`, `/services/accounting/united-states` and `/services/tax-preparation/united-states` own national service-specific intent; state pages link to them rather than duplicating their service detail.

The state pages now use distinct portfolio and workflow sections rather than repeating a long shared body template. **A measured 6-gram similarity comparison against every existing route has not yet been run**; it remains a release check. If any page exceeds the repository's under-25% overlap rule, rewrite it further or consolidate it before publication.

## Evidence: what is verified and what is not

### Verified public evidence

1. The U.S. Census Bureau's 2022 Economic Census release says California and Texas were the top states for employer establishments, employees, sales and payroll; Florida, New York and Illinois rounded out the top five across those measures. This is useful as a broad business-market proxy, not as a measure of CPA-firm outsourcing searches.
   - Source: https://www.census.gov/newsroom/press-releases/2024/2022-economic-census-data.html
2. Acculink CPA has state-specific landing pages for California and Texas CPA-firm accounting outsourcing. This verifies that a direct competitor uses state-qualified commercial pages, but it does not establish search volume or ranking performance.
   - California competitor example: https://acculinkcpa.com/accounting-outsourcing-california
   - Texas competitor example: https://acculinkcpa.com/accounting-outsourcing-texas
3. Accounstone already has general-business state pages for California, Texas and Florida under `/markets/united-states/`. These new routes sit under `/industries/cpa-firms/` and address the distinct buyer: CPA/accounting practices seeking an outsourcing partner, rather than direct businesses seeking their own accounting service.
   - Existing California page: https://www.accounstone.com/markets/united-states/california
   - Existing Texas page: https://www.accounstone.com/markets/united-states/texas
   - Existing Florida page: https://www.accounstone.com/markets/united-states/florida
4. IRS Publication 4557 explains taxpayer-data safeguards for tax professionals. State pages link to the official publication and tell firms to review applicable federal and state requirements with qualified advisers; the pages do not give legal advice or make blanket compliance claims.
   - Source: https://www.irs.gov/pub/irs-pdf/p4557.pdf

### Not verified in this pass

- State-by-state Google monthly search volumes for CPA outsourcing terms.
- State-by-state click-through rates, conversion rates, or likely lead volumes.
- Whether any state is the single best market for Accounstone.
- Keyword volume for every long-tail variation used as a page theme.
- Any claim that Accounstone has a local office, local employees, state-specific certifications, state-specific legal expertise or state-specific clients.

## Search Console query research — 2026-10-19

**Source and period:** connected Google Search Console property `sc-domain:accounstone.com`, Web search queries for 2026-07-20 through 2026-10-18 (last 90 days). This is first-party impression data for Accounstone's own pages, not monthly keyword volume. Average positions are volatile when a query has only one or a few impressions; every page in the sample below recorded zero clicks in this period. Query rows are rounded only as displayed by Search Console; this is a diagnostic sample, not a demand forecast.

| Existing page | GSC impressions / clicks | Query signals observed | What to do with the evidence |
|---|---:|---|---|
| `/blog/tax-preparation-outsourcing` | 1,315 / 0 | “tax preparation outsourcing” 131 impressions (avg. position 33.5); “offshore tax preparation services” 71 (33.6); “tax outsourcing for CPA firms” 39 (18.1); “outsourced tax preparation for CPA firms” 43 (20.6); “corporate tax outsourcing” 42 (38.7) | This existing guide is the broad informational tax-outsourcing owner and has the largest impression footprint in the CPA/tax sample. Keep it distinct from the commercial tax-preparation service page. Link its entity-return section to the existing 1040/1065 pages and the new 1120/1120-S pages; do not create another broad tax-outsourcing URL. |
| `/services/tax-preparation/united-states` | 646 / 0 | “outsource tax preparation services” 107 (72.2); “outsourced tax preparation services” 50 (71.8); “corporate tax outsourcing” 32 (84.2); “outsourced tax preparation for CPA firms” 28 (72.9); “1040 preparation outsourcing” 9 (42.7); “1065 tax preparation outsourcing” 9 (66.6); “1120 tax preparation outsourcing” 3 (80.7); “1120s tax preparation outsourcing” 2 (65.5) | Keep this as the broad commercial service page. It is visible for broad service language but positions are generally weak. Route the return-type language to the appropriate children and improve helpful internal links; do not copy the broad-intent content into more sibling hubs. The 1120/1120-S query rows are early signals, not proof of meaningful search volume. |
| `/industries/cpa-firms` | 43 / 0 | “cas outsourcing for cpa firms” 4 (54.8); “bookkeeping for cpa firms” 3 (80.7); “accounting outsourcing for cpa firms” 2 (57); “cpa firm overflow work outsourcing” 1 (11); “outsourced audit support for cpa firms” 1 (2) | The hub needs clear links to the specific needs it serves: recurring bookkeeping, CAS production, tax work, audit support and overflow capacity. Single-impression top positions must not be treated as stable ranking evidence. |
| `/resources/guides/client-accounting-services-cas-guide` | 27 / 0 | “cas services for cpa firms” 5 (66.2); “cas services for tax firms” 5 (61.8); “cas services for accountants” 4 (76); “cas solutions for accounting firms” 4 (67.5) | Keep the guide focused on what CAS is and how a CPA firm runs the service line. The commercial `/industries/cpa-firms/cas-production-support` page owns the specific delivery/preparation layer rather than repeating the educational guide. |
| `/services/audit-support/united-states` | 216 / 0 | “cpa audit support services” 41 (62.9); “audit support services for cpas and accounting firms” 7 (26); “cpa audit back office support usa” 6 (41.3); “audit pbc support” 1 (2) | The existing audit-support page already owns the workflow. Keep its evidence, PBC schedules, reconciliations and review-boundary detail there; do not create a generic audit-outsourcing duplicate. Test a more focused PBC-support page only if the query footprint grows and the current page cannot satisfy that distinct intent. |
| `/technology/cch` | 77 / 0 | “cch outsource” 7 (21.6); “audit support with cch axcess engagement” 5 (17.8); “cch bookkeeping” 5 (24); “cch axcess support” 4 (17) | The existing CCH page already matches several software/workflow queries. Connect it to Form 1040/1065/1120/1120-S, tax preparation, audit support and the CPA-firm hub; do not create CCH × form or CCH × state pages without evidence of a separate workflow. |
| `/services/bookkeeping/united-states` | 17 / 0 | “bookkeeping for cpa firms” 5 (72.2); related outsourcing/bookkeeping terms mostly one impression each | Keep this as the bookkeeping service owner and link it to the CPA hub and CAS production page where context warrants. Improve task-specific examples instead of making a second general CPA bookkeeping page. |
| `/services/tax-preparation/united-states/1040-individual` | 1 / 0 | “1040 preparation outsourcing” 1 (position 16) | Too small a sample for a ranking conclusion. Keep the page distinct by its document-intake, open-item and individual-return workflow. The 1065 child had no query rows in this period. |

### Query-informed priorities

1. **Improve the existing tax-outsourcing guide and its route to conversion.** It receives far more impressions than the commercial tax service page, but neither page recorded clicks in this window. We added a compact existing SVG illustration and visible links from the guide’s entity-return section to the 1040, 1065, 1120 and 1120-S service children. Review Search Console CTR, positions and query-page overlap after future crawl data accumulates.
2. **Separate information, service and workflow intent.** The guide explains outsourcing decisions and responsibilities; the national service page covers the service scope; each form page handles the distinct return workflow. The CAS guide educates, while CAS production support describes the production workflow. This is an intent map, not an excuse to produce many similar pages.
3. **Reuse existing SVGs rather than create new illustrations or visual libraries.** The shared CPA-state renderer, white-label and CAS commercial pages, the existing tax-outsourcing guide and CCH/Drake technology pages now use `components/service-illustration.tsx` (bookkeeping/accounting/tax variants). The component is inline SVG and reuses the current Accounstone visual system. The CPA hub already uses `IndustryIllustration`; tax and audit service pages already use their existing service vectors.
4. **State query volume is still unverified.** The five CPA-firm state pages are new review-branch routes and cannot yet have meaningful page-level GSC history. Query impressions for the current national pages do not tell us which state has the greatest demand. Use the same candidate keyword set, English language, Google Search network, and identical date range in Keyword Planner for each state before expanding the location layer.
5. **A lack of clicks is important.** These pages had zero clicks in the 90-day sample. Better illustrations improve scanability, but cannot replace stronger rank, query fit, snippet copy or a clear buyer next step. Evaluate organic clicks/CTR after the pages are crawled and indexed instead of promising a visual update alone will improve rankings.

## Research limits

- Google Search Console query rows are first-party search impressions, **not** total market search volume. They can be hidden, sparse, anonymized, or volatile at very low counts.
- Google Keyword Planner is the required comparison for average monthly searches across the five states. Its location, language, network and date settings must be held constant for a fair comparison: https://support.google.com/google-ads/answer/7337243?hl=en-419
- Google's spam policies explicitly identify substantially similar regional pages funneling users to one destination as doorway abuse. State pages must offer meaningful workflow distinctions and stay linked in a browseable hierarchy: https://developers.google.com/search/docs/essentials/spam-policies
- Competitor messaging is useful for discovering service models and query language, but competitor claims about pricing, staff counts, certifications, margins, performance or compliance are not adopted as Accounstone claims.

## Competitor observations

The competitor pages reviewed sell similar broad service categories: accounting/bookkeeping, tax preparation and other production support. Their claims about pricing, certifications, staffing counts, guarantees or security status are not adopted as Accounstone claims. The useful strategic observation is only that some competitors create state-qualified pages and explain workflows by audience. Accounstone's pages focus on fit, scope, systems, reviewer handoff and clear responsibility boundaries instead of price-led claims or unverified trust badges.

## Page intent and differentiation

| State | Primary intent | Page-specific workflow angle (examples only, not assumed for every firm) | Estimated rendered body words | Word-count floor |
|---|---|---|---:|
| California | Accounting outsourcing for California CPA firms | Varied client portfolios, technology/professional services/property/e-commerce examples, multi-state records kept reviewable | ~1,150–1,300 | 650 words (industry sub-page floor) |
| Texas | Accounting outsourcing for Texas CPA firms | Contractor, multi-location, distribution and professional-service examples; schedules prepared for CPA review | ~1,100–1,250 | 650 words |
| Florida | Accounting outsourcing for Florida CPA firms | Recurring and seasonal workflows; property, hospitality, professional services and owner-managed business examples | ~900–1,000 | 650 words |
| New York | Accounting outsourcing for New York CPA firms | Defined preparation, multi-entity records, supporting schedules and review handoff | ~900–1,000 | 650 words |
| Illinois | Accounting outsourcing for Illinois CPA firms | Commercial portfolio examples including manufacturing/distribution; clear boundary around specialized inventory judgments | ~900–1,000 | 650 words |

The rendered pages use a shared layout but substantially different state-specific workflow content. Approximate body length is **1,100–1,300 words per page including visible FAQs and workflow examples**; this is an estimate, not a measured verifier result. Shared prose was deliberately reduced to lower overlap risk, but the six-gram similarity check remains outstanding. Before merge, run `node scripts/verify-pages.mjs` against a production build and replace estimates with exact rendered word counts. If a page fails the floor, add a substantive answer or consolidate rather than padding. Before merge, run `node scripts/verify-pages.mjs` against a production build and replace estimates with exact rendered word counts. If a page fails the floor, add a substantive answer or consolidate rather than padding.

## Additional return-type cluster — 2026-10-18

Two more commercial URLs have been added to the CPA-firm acquisition cluster after comparing the existing route inventory with public competitor coverage:

| URL | Specific intent | Why it is separate |
|---|---|---|
| `/services/tax-preparation/united-states/1120-corporation` | Form 1120 C corporation return preparation support | Corporate financial statements, book-to-tax schedules and fixed-asset support form a different preparation workflow from an individual return, a partnership return or an S corporation return. |
| `/services/tax-preparation/united-states/1120-s-corporation` | Form 1120-S S corporation return preparation support | Corporate books and shareholder schedules create a distinct workflow; basis, compensation and other professional tax decisions remain with the responsible CPA or tax professional. |

### Evidence

- The IRS identifies Form 1120 as the U.S. Corporation Income Tax Return used by domestic corporations to report income, gains, losses, deductions and credits: https://www.irs.gov/forms-pubs/about-form-1120
- The IRS identifies Form 1120-S as the return used to report income and related items for a corporation or other entity for a tax year covered by an effective S corporation election: https://www.irs.gov/forms-pubs/about-form-1120-s
- Public providers targeting CPA firms commonly list Forms 1120 and 1120-S among their business-return preparation offerings; examples include [Accesspro Consulting](https://accessproconsulting.com/usa), [EXP Consulting](https://expconsulting.in/) and [Aimfox](https://aimfoxllp.com/services/tax-return-preparation/). This shows that the forms are material to the category; it is not proof of exact-match search volume or ranking likelihood.

### Proposed keyword themes to validate

- Form 1120 outsourcing for CPA firms; outsourced Form 1120 preparation; corporate tax return preparation outsourcing.
- Form 1120-S outsourcing for CPA firms; outsourced S corporation return preparation; Form 1120-S workpaper support.

These are keyword themes, not verified-volume claims. The page pair was added because the existing site already had dedicated Form 1040 and 1065 children and the Form 1120/1120-S workflows are substantively distinct. Do not add pages for individual schedules or software variations unless state/keyword research or Search Console data later supports a separate intent.

### Internal links for the return-type cluster

- The US tax-preparation hub links to 1040, 1065, 1120 and 1120-S, while remaining the broad owner for U.S. tax preparation outsourcing.
- The CPA-firm hub links to the return-type pages in its supporting service navigation.
- Form 1120 links back to the U.S. tax-preparation hub, CPA-firm hub, Form 1065 and Form 1120-S.
- Form 1120-S links back to the U.S. tax-preparation hub, CPA-firm hub, Form 1065 and Form 1120.
- Form 1040 and 1065 pages link into the new corporate-return workflows where relevant.
- Each form-specific page links to official IRS form/instructions pages. It does not give tax advice or suggest that Accounstone independently determines tax positions, elections, shareholder basis or compensation treatment.

## Keyword clusters to validate in Google Keyword Planner

Run the same keyword set with location set to each state, English language and Google Search network. Export the same historical period for every state.

- `accounting outsourcing for CPA firms`
- `CPA firm outsourcing services`
- `outsourced accounting for CPA firms`
- `bookkeeping outsourcing for accounting firms`
- `tax preparation outsourcing for CPA firms`
- `offshore accounting services for CPA firms`
- `accounting outsourcing company`
- `tax outsourcing for accounting firms`

Do not treat the list as proof that each term has measurable volume. Capture average monthly searches, competition and top-of-page bid ranges. Deduplicate close variants where the tool groups them. Compare both the exact CPA-firm intent cluster and a broader supporting cluster. Use Google Trends only as a relative-interest cross-check, not an absolute volume count.

- Google Keyword Planner: https://ads.google.com/home/tools/keyword-planner/
- Google Trends: https://trends.google.com/trends/

## Internal linking plan

- Main hub `/industries/cpa-firms` links to all five state pages.
- The US market page `/markets/united-states` also links to all five as a clearly separated path for CPA firms; it distinguishes CPA-firm buyers from direct businesses seeking accounting support.
- Each state page links back to `/industries/cpa-firms`.
- Each state page links contextually to US bookkeeping, accounting and tax-preparation support pages.
- Each state page links to the Client Accounting Services guide and the How to Outsource Accounting guide where useful.
- State pages do not claim to be local offices and do not imply local staff.
- Existing `/markets/united-states/{california,texas,florida}` pages remain the primary destinations for direct-business state accounting intent; CPA-firm state pages own CPA-outsourcing intent.

## Additional CPA-firm query page — overflow work support (2026-10-19)

### Why this page was added
The state pages cover state-qualified CPA-firm outsourcing and workflow needs. A separate national workflow page covers firms with a defined backlog, batch of files or temporary preparation queue. It is designed to support all five state pages without creating near-identical state × service variants.

### First-party Search Console signal
Property: `sc-domain:accounstone.com`; Web search; 2026-07-20 through 2026-10-18.
- “cpa firm overflow work outsourcing”: 1 impression, 0 clicks, average position 11 on `/industries/cpa-firms`.
- “accounting backlog support”: 4 impressions, 0 clicks, average position 94.2 on `/solutions/back-office-support`.
- “backlog accounting solutions”: 2 impressions, 0 clicks, average position 89.5.
These are tiny samples of impressions on Accounstone's own site, not total Google search volume or proof of market demand. The page is a measured test hypothesis, not a demand forecast.

### Intent boundaries
- `/industries/cpa-firms` remains the broad outsourcing and capacity hub.
- `/industries/cpa-firms/overflow-work-support` owns defined overflow queues and temporary preparation assignments.
- `/industries/cpa-firms/cas-production-support` owns recurring CAS production and reporting handoffs.
- `/industries/cpa-firms/white-label-accounting` owns branding and client-contact boundaries.
- Existing national bookkeeping, accounting and tax-preparation service pages retain their service-specific intent.
- Do not create state × overflow variants unless future evidence demonstrates distinct state-qualified buyer intent and page-specific value.

### Page contract
- Primary keyword themes: CPA firm overflow work outsourcing; overflow accounting support for CPA firms; accounting backlog support for accounting practices. These are keyword themes, not verified-volume claims.
- The page uses existing service illustrations, FAQ, breadcrumb and service schema. Its rendered word count must be checked with the production page verifier; do not pad content just to meet a floor.
- Unsourced claims to avoid: guaranteed turnaround, guaranteed availability, savings, client counts, certifications, local offices/staff and state-level search-volume claims.
- Release gate: production build, `node scripts/verify-pages.mjs`, route/sitemap/AI-index parity, page-similarity review and mobile preview check. Keep this branch unmerged until Vercel preview/build is available and reviewed.

## Unsourced-claims checklist

No state-level search-volume claims are made on the pages. Before publication, verify or remove any future additions claiming:

- State has the highest outsourcing search intent or a specified search volume.
- State CPA firms are more likely to outsource than firms elsewhere.
- Accounstone has customers, staff or an office in a named state.
- State-specific tax, legal, CPA-board or professional-ethics rules beyond carefully linked official source material.
- Specific performance, security, savings, turnaround, certification or client-count metrics.

## Release gate

1. Review rendered copy and mobile layout.
2. Run the route verifier and production build.
3. Check that the parent page links to every state page and that each page links back.
4. Verify sitemap, `llms.txt`, ROUTES, CONTENT-REGISTRY and SEARCH-INTENTS entries.
5. Review canonical URLs, title/description budgets, visible FAQ/schema alignment and noindex/redirect conflicts.
6. Keep the pages on the review branch; do not merge or deploy until the owner authorizes it and the Vercel build limit permits preview validation.
