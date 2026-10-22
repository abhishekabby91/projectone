# US-focused website architecture and Markets retirement register

**Date:** 2026-10-22  
**Branch:** `us-focus-remove-markets-2026-10-22`  
**Status:** Staged for review; not merged or deployed.

## Agreed architecture

- Accounstone's active commercial focus is US accounting firms and businesses.
- Do not add a `/us/` URL prefix. Keep established clean URLs.
- Remove the Markets hub/cluster from active navigation, homepage discovery, sitemap and AI-readable discovery files.
- Keep US service pages, US tax-type pages, industry pages, software pages, solutions and useful resources.
- If UK/Australia expansion is reintroduced later, plan a distinct regional cluster then rather than restoring the old mixed Markets architecture.
- Existing UK/Australia source routes are retained temporarily while URL-specific query and backlink checks are pending. They are excluded from active discovery in this branch; final 301 vs 404/410 handling remains a separate release gate.

## GSC evidence available on 2026-10-22

Property: `sc-domain:accounstone.com`.

| Report | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Last 28 days | 45 | 7,791 | 0.58% | 55.6 |

90-day window: 2026-07-24 to 2026-10-22.

| Markets URL | Impressions | Clicks | Decision |
|---|---:|---:|---|
| `/markets` | 2 | 0 | Remove from active architecture; no redirect decided |
| `/markets/united-states` | 493 | 1 | Remove from active architecture; review best replacement |
| `/markets/united-states/texas` | 21 | 0 | Review state-industry links/backlinks before final treatment |
| `/markets/united-states/california` | 3 | 0 | Review state-industry links/backlinks before final treatment |
| `/markets/united-states/florida` | 14 | 0 | Review state-industry links/backlinks before final treatment |
| `/markets/united-kingdom` | 380 | 1 | Remove from active US-focused architecture; no unrelated US redirect |
| `/markets/united-kingdom/vat-returns` | 12 | 0 | UK-specific intent; no equivalent US redirect |
| `/markets/united-kingdom/year-end-accounts` | 10 | 0 | UK-specific intent; no equivalent US redirect |
| `/markets/australia` | 426 | 0 | Remove from active US-focused architecture; no unrelated US redirect |
| `/markets/australia/bas-preparation` | 2 | 0 | Australia-specific intent; no equivalent US redirect |
| **Total** | **1,363** | **2** | |

These page-level data support removing the Markets cluster from active discovery, but do not establish backlink value, all query intent, canonical status or index coverage. The connected GSC tool reached its monthly allowance before query-level analysis and individual URL inspection could be completed.

A prior repository audit recorded separate historical impressions for UK/Australia service pages (different reporting window), including Australia accounts payable (541), Australia bookkeeping (238), Australia accounts receivable (222), UK audit support (188), Australia tax preparation (137) and Australia audit support (111). Do not treat these historical figures as the current 90-day report.

## Markets URL register

| URL | Intended action in active architecture | Final HTTP decision |
|---|---|---|
| `/markets` | Remove from homepage, navigation, sitemap and AI discovery | Pending; assess redirect to `/services` only if judged useful, otherwise retire |
| `/markets/united-states` | Remove from active architecture | Pending; consider relevant US service/industry hub, not a blanket homepage redirect |
| `/markets/united-states/texas` | Remove from active architecture | Pending; check CPA-firm and industry/state destinations |
| `/markets/united-states/california` | Remove from active architecture | Pending; check CPA-firm and industry/state destinations |
| `/markets/united-states/florida` | Remove from active architecture | Pending; check CPA-firm and industry/state destinations |
| `/markets/united-kingdom` | Remove from active US-focused architecture | Pending; no unrelated US redirect |
| `/markets/united-kingdom/vat-returns` | Remove from active US-focused architecture | Pending; no direct US equivalent |
| `/markets/united-kingdom/year-end-accounts` | Remove from active US-focused architecture | Pending; no direct US equivalent |
| `/markets/australia` | Remove from active US-focused architecture | Pending; no unrelated US redirect |
| `/markets/australia/bas-preparation` | Remove from active US-focused architecture | Pending; no direct US equivalent |

## Regional service URL register

All US-qualified service pages remain active and in the sitemap:

- `/services/bookkeeping/united-states`
- `/services/accounting/united-states`
- `/services/tax-preparation/united-states`
- `/services/payroll/united-states`
- `/services/accounts-payable/united-states`
- `/services/accounts-receivable/united-states`
- `/services/audit-support/united-states`

Keep the US tax-type pages:

- `/services/tax-preparation/united-states/1040-individual`
- `/services/tax-preparation/united-states/1065-partnership`
- `/services/tax-preparation/united-states/1120-corporation`
- `/services/tax-preparation/united-states/1120-s-corporation`

The following 14 regional service routes are excluded from active navigation and the sitemap in this branch. Their source files remain while URL-level evidence is checked; final HTTP treatment is pending:

| Service | UK URL | Australia URL |
|---|---|---|
| Bookkeeping | `/services/bookkeeping/united-kingdom` | `/services/bookkeeping/australia` |
| Accounting | `/services/accounting/united-kingdom` | `/services/accounting/australia` |
| Tax preparation | `/services/tax-preparation/united-kingdom` | `/services/tax-preparation/australia` |
| Payroll | `/services/payroll/united-kingdom` | `/services/payroll/australia` |
| Accounts payable | `/services/accounts-payable/united-kingdom` | `/services/accounts-payable/australia` |
| Accounts receivable | `/services/accounts-receivable/united-kingdom` | `/services/accounts-receivable/australia` |
| Audit support | `/services/audit-support/united-kingdom` | `/services/audit-support/australia` |

## Other clusters

Keep relevant existing URLs under:

- `/industries/*` — including CPA firms, HOA accounting, property management, real estate, construction and other supported industries.
- `/technology/*` — only claim software experience that can be supported.
- `/solutions/*` — engagement and delivery models.
- `/resources/*` and `/blog/*` — useful guides and workflow content; update international-comparison resources when they are reviewed.
- Company, compliance, privacy, terms and inquiry pages.

Industry/state routes such as `/industries/cpa-firms/texas` are distinct from `/markets/united-states/texas` and should be evaluated independently.

## Changes staged on this branch

- Removed the Markets section from the homepage.
- Removed the Markets block from the footer and limited service navigation/footer links to US service pages.
- Limited the Services hub to US service pages and removed its market-overview link and country-comparison copy.
- Removed the Markets URLs and UK/Australia service URLs from the sitemap.
- Removed regional service switchers and Market Overview links from US service pages.
- Updated `llms.txt` and `llms-full.txt` to stop presenting Markets as an active cluster.
- Updated `docs/ROUTES.md`, `docs/SEARCH-INTENTS.md`, `docs/SEO-KEYWORD-MAP.md` and `docs/CONTENT-REGISTRY.md`.
- Changed the legacy generic `/services/audit-support` redirect to the US audit-support page. This is a deliberate, reversible tradeoff because historical GSC showed more UK than US demand for the generic source; monitor after release.

## Release gates before merging/deploying

1. Re-run GSC query/page exports and inspect indexing/canonical status for every URL in the retirement register.
2. Check external backlinks and any referral traffic.
3. Choose a relevant 301 only when there is a genuinely equivalent destination. For UK VAT, UK year-end accounts and Australian BAS, do not redirect to unrelated US pages.
4. Decide whether URLs with no equivalent should return 410/404 or remain available for a later regional relaunch.
5. Search the complete codebase for any remaining internal links to `/markets/*` and UK/Australia regional service pages, then remove or update them as appropriate.
6. Run lint, type checks, production build, route/sitemap parity and structured-data checks.
7. Review the branch diff before merging. No production deployment or GSC submission is authorized by this register alone.
