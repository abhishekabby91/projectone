# Accounstone AEO Changelog

This log tracks work intended to make Accounstone's public information easier for answer engines and AI-assisted search systems to interpret. It is separate from the SEO changelog. These changes do not guarantee inclusion, citations, visibility or rankings in any AI system.

## 2026-10-09 — Connect the AI-readable reference files

- Added a direct link from `public/llms.txt` to `public/llms-full.txt` and a reciprocal link back to the concise index.
- Kept `llms.txt` focused on core positioning and navigation, while `llms-full.txt` provides expanded service, industry, technology, market and scope context.
- No new service claims, certifications, clients or routes were added.
- Validation before deployment: check both public URLs return the latest text, review all claims against canonical site pages, and confirm no outdated service claims remain.

## 2026-10-09 — Add a direct-answer comparison to the homepage

- Added a question-led section explaining how in-house accounting and outsourced support can be divided.
- Added a semantic HTML comparison table for bookkeeping, reconciliations and month-end, tax preparation, payments and approvals, and reporting.
- Kept the description conditional and engagement-specific; it does not promise fixed outcomes, publish invented performance statistics, or claim certifications.
- Existing FAQPage and Service JSON-LD generators were already present on the reviewed homepage/service/industry pages, so no duplicate schema was added.
- Validation before deployment: confirm the section renders on mobile and desktop, test the horizontal table overflow, and review the live HTML after deployment. This content change does not guarantee AI citations or search ranking changes.
## 2026-10-09 — Add direct-answer sections to priority service and industry pages

- Added page-specific explanatory sections to HOA accounting, property management accounting, real estate accounting, CPA firm support, U.S. accounting services, U.S. bookkeeping and U.S. tax preparation.
- Each section answers a distinct, relevant question and summarizes the scope in plain language without adding unsupported statistics or guarantees.
- Kept industry intent separate: HOA associations and board reporting; property managers and tenant/owner records; real estate owners and entity-level reporting; CPA firms and preparation workflows.
- No duplicate FAQ or Service schema was added for these content sections.
- Validation before deployment: run the production build, inspect each page at mobile and desktop widths, check rendered headings and internal links, and validate existing JSON-LD. These changes do not guarantee rankings or AI citations.


## 2026-10-09 — Add authoritative references to priority pages

- Added focused, descriptive links to official or relevant external references on the HOA accounting, real estate accounting, property management, CPA firm support, U.S. accounting, U.S. bookkeeping and U.S. tax preparation pages.
- References are limited to the topics they support: HOA tax forms and reserve planning, rental-property tax records, tax-professional guidance, business recordkeeping, and IRS form information.
- Used descriptive link text and a consistent semantic references section; did not add artificial publication dates, author claims, or new schema.
- These changes respond to the checker’s authority and generic-link-text findings without changing canonical URLs or existing structured data.
- Build, link availability, responsive rendering, and live-page checks remain pending. No deployment performed; changes are on `accounstone-seo-improvements`.
