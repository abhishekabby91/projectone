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
- Research demand and competitive coverage for Southern California / San Diego County, Orange County, Los Angeles County, Bay Area, Sacramento region and Riverside/San Bernardino/Inland Empire. Los Angeles County has direct local commercial competitors (HOA Accounting Los Angeles and PMI LA Pacific) and a CAI Greater Los Angeles chapter with 1,100+ members; the membership count is not an HOA count and these signals do not establish search volume. Census housing tables describe housing structure, not association totals. Research reviewed 2026-10-14.
- Competitor and market evidence (not search-volume proof): APS Management publishes HOA accounting/financial-service pages for San Diego County and Southern California; HOA Accounting Services references a San Diego client. CAI-OC says its 34-city region includes more than 5,000 community associations, its directory lists association-management firms and accounting providers, and local results include HOA accounting/financial-reporting pages. These signals support distinct local intent but do not guarantee rankings.
- Select no more than the strongest initial county/metro opportunities after checking search results, association-management market context, local competitor pages and whether each page can be materially different.

### Property management
- State-page research reviewed 2026-10-14: WPM Accounting publishes distinct California and Texas property-management accounting pages covering bookkeeping, trust records, reconciliations and reporting. REA has a San Francisco property-management accounting page and Houston platform-specific pages, including AppFolio; Royale's Florida accounting page focuses on community associations, so it should not be treated as proof of rental-property-management intent. These are live competitor/content examples, not search-volume or ranking evidence.
- Added two first-pass state pages on the active feature branch: `/industries/property-management/california` and `/industries/property-management/texas`. California's page routes readers to the existing AppFolio California page and trust-reconciliation workflow; Texas routes to the existing Yardi Texas page and general workflow guides. Both state pages explicitly describe remote accounting scope and preserve client approval, banking and property-operation responsibilities.
- Next metro research candidates: San Francisco and Houston, because competitor results include distinct property-management accounting pages. Before creating either, verify the local angle and whether it adds enough beyond the state page and existing software pages; do not create city pages just to multiply URLs.
- The existing property-management commercial pillar now links directly to month-end close, owner statements, security-deposit accounting, bank reconciliation and Yardi workflow resources. Use this cluster before creating a property-management location page so the state/county page has strong, relevant supporting links.
- Test California, Texas and Florida first because the existing site already has market context for those states; do not assume that their generic market pages satisfy property-management-specific intent.
- Research county/metro clusters only after confirming a distinct property-management accounting need, relevant software/workflow detail and a useful local angle.

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

## Content length and scanability standard

- Target roughly 700–1,100 useful words for a county-level commercial page when research supports that depth. This is a working editorial range, not a ranking rule; shorter pages are acceptable when the intent is narrow, and no word count should be padded.
- Put the answer and service scope near the top. Use one clear H1, descriptive H2s, and H3s only where they help users scan.
- Prefer 2–4 sentence paragraphs, generally 25–55 words. Split paragraphs when they contain two separate ideas; avoid walls of text and repeated keyword variations.
- Use bullets for deliverables, checks, boundaries and steps. Use 4–6 short workflow cards where the items are genuinely distinct; keep card descriptions to one or two sentences.
- Use a short numbered process for sequences, a compact FAQ for real buyer questions, and descriptive internal-link labels. Do not create a long keyword-only link list.
- Each paragraph should earn its place: answer a buyer question, explain a concrete workflow, ground a local statement in a source, or clarify responsibility. Delete generic filler and unsupported local claims.
- Keep key content in server-rendered HTML, with semantic headings, ordinary links, descriptive link text, and visible FAQ answers. Schema should match visible content rather than introduce hidden claims.
- Make the page useful when skimmed on mobile: short lead, lists/cards in small chunks, adequate spacing, and no repeated introductory copy.

## Definition of done for every location page

1. Unique search intent and differentiated content.
2. Verified metadata, canonical, indexability and schema.
3. Inbound links from the relevant pillar and state/market hub.
4. Links to useful workflows, not a wall of city-name anchors.
5. Sitemap and route/content/search-intent registries updated.
6. Generated sitemap dates refreshed through `scripts/generate-sitemap-dates.mjs`; never hand-edit `lib/sitemap-dates.ts`.
7. Preview build and rendered metadata/internal links validated before merge.

## US-first linking and inquiry conversion rules

- Keep the active growth phase focused on US industries and their relevant US state, county, metro, and software/workflow pages. Non-US regional pages are not required links on US pages and should not be inserted just to create more internal links.
- Link pages when the destination helps the same visitor continue their task: industry pillars to relevant US regions and workflows; state/county pages to their parent industry, genuinely relevant neighboring US pages, and useful supporting guides; software/workflow guides to the service pages they support. Avoid forced cross-region links and generic link blocks that do not match intent.
- Keep the existing inquiry form structure and submission flow unless a separate, approved change is needed. Reuse the shared inquiry component on relevant industry and regional pages, preselect the service and record the page source when supported, and make nearby CTA cards/links lead to the relevant service section or inquiry form rather than adding competing forms.
- Mobile form acceptance checks: compact section padding and vertical rhythm; readable labels and 16px input text; single-column fields on narrow screens; short textarea on mobile while preserving desktop height; full-width, easy-to-tap submit control; no horizontal overflow; and no oversized assurance/copy block pushing the form too far down the page. Keep wider-screen alignment responsive rather than forcing two columns on a phone.
- Before merging page batches, review the rendered page at a narrow mobile viewport and a desktop viewport, including the path from a card/CTA to the inquiry form. A build alone does not prove the form is visually aligned.

