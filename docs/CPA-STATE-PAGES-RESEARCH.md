# CPA-firm state-page research — 2026-10-18

## Decision and scope

Create five separate, indexable state-qualified commercial pages for US CPA and accounting firms:

- `/industries/cpa-firms/california`
- `/industries/cpa-firms/texas`
- `/industries/cpa-firms/florida`
- `/industries/cpa-firms/new-york`
- `/industries/cpa-firms/illinois`

These are **market-test pages, not a claim that these are the five highest-search-intent states**. No comparable state-level Google Keyword Planner export was available during this pass. The state selection is based on a combination of broad prospect-pool rationale, public competitor precedent and a manageable initial cohort.

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
