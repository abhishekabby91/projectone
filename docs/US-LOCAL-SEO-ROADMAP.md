# U.S. Local SEO Roadmap — HOA and Property Management

Updated: 2026-10-14

## Objective

Expand Accounstone's U.S. organic search coverage from the existing industry and state pages into useful state, metro, county and city pages where each URL answers a distinct commercial search need. Accounstone is an India-based remote accounting and bookkeeping provider; local pages must not imply a U.S. office, local staff, on-site community management or professional licences that have not been verified.

## Current baseline

- Core commercial pillars: `/industries/hoa-accounting` and `/industries/property-management`.
- General U.S. market pages exist for California, Texas and Florida.
- Published HOA location pages: `/industries/hoa-accounting/california`, `/industries/hoa-accounting/san-diego-county` and `/industries/hoa-accounting/orange-county`. The county pages have distinct local context and do not claim local offices.
- Existing workflow articles already cover HOA month-end close, bank reconciliation, year-end preparation, property-management close, owner statements and security deposits.
- The Texas Yardi commercial page must remain unchanged.

## Page hierarchy

1. **Industry pillar** — broad service intent (HOA accounting outsourcing; property-management accounting outsourcing).
2. **State service page** — distinct service + state intent, with genuinely relevant state accounting context, current references and links to the industry pillar and supporting workflows.
3. **Metro/county page** — create only where research confirms meaningful local intent and we can add useful regional context, relevant property/association mix, realistic examples, service fit and a clear remote-delivery explanation.
4. **City page** — create only when it serves a distinct intent not already satisfied by a metro/county page. Do not create every city automatically.
5. **Workflow/software pages** — keep their existing intent owners; do not clone them into locations without a meaningful reason.

## Candidate research order (not an approved page-count quota)

### HOA
- California state service page (first pilot).
- Research demand and competitive coverage for Southern California / San Diego County, Orange County, Los Angeles County, Bay Area, Sacramento region and Riverside/San Bernardino/Inland Empire.
- Competitor and market evidence (not search-volume proof): APS Management publishes HOA accounting/financial-service pages for San Diego County and Southern California; HOA Accounting Services references a San Diego client. CAI-OC says its 34-city region includes more than 5,000 community associations, its directory lists association-management firms and accounting providers, and local results include HOA accounting/financial-reporting pages. These signals support distinct local intent but do not guarantee rankings.
- Select no more than the strongest initial county/metro opportunities after checking search results, association-management market context, local competitor pages and whether each page can be materially different.

### Property management
- Research state and metro demand separately from HOA intent.
- The existing property-management commercial pillar now links directly to month-end close, owner statements, security-deposit accounting, bank reconciliation and Yardi workflow resources. Use this cluster before creating a property-management location page so the state/county page has strong, relevant supporting links.
- Test California, Texas and Florida first because the existing site already has market context for those states; do not assume that their generic market pages satisfy property-management-specific intent.
- Research county/metro clusters only after confirming a distinct property-management accounting need, relevant software/workflow detail and a useful local angle.

## Required evidence before a local URL is approved

For each proposed page, record:
- Primary keyword and intent (commercial, evaluation or informational).
- Search-result/competitor examples and how their page is genuinely local.
- Relevant association/property-management characteristics supported by sources.
- State/county-specific accounting context and dated authoritative references where applicable.
- What content is unique versus the parent state and industry pages.
- Internal links to the correct commercial pillar and workflow resources.
- A review date for legal/regulatory references.
- Whether the URL should be indexed; no thin or doorway pages.

## Content boundaries

- Never invent local offices, local employees, clients, reviews, credentials, service history, or market-share claims.
- Do not promise legal compliance or imply that bookkeeping replaces legal counsel, a CPA, community management, collections or reserve-study work.
- Explain remote delivery clearly without making it the only substantive difference between location pages.
- Do not repeat the same state paragraph with a city name swapped.
- No fixed target such as 50, 100 or 500 pages. Scale only when each new page earns its place.
- Keep SEO and AEO workstreams separately documented.
- No GSC work until explicitly requested. No merge to main or production deployment unless explicitly authorized.

## Definition of done for every location page

1. Unique search intent and differentiated content.
2. Verified metadata, canonical, indexability and schema.
3. Inbound links from the relevant pillar and state/market hub.
4. Links to useful workflows, not a wall of city-name anchors.
5. Sitemap and route/content/search-intent registries updated.
6. Generated sitemap dates refreshed through `scripts/generate-sitemap-dates.mjs`; never hand-edit `lib/sitemap-dates.ts`.
7. Preview build and rendered metadata/internal links validated before merge.
