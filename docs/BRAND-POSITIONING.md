# Accounstone brand and website positioning

Last reviewed: 2026-10-18

## Positioning decision

**Accounstone is an accounting outsourcing partner.** Outsourcing is the primary service model and the consistent commercial positioning across the website. Remote delivery is a way the work is performed, not the main product being sold.

## B2B audiences

Accounstone serves businesses and professional firms through one consistent accounting-outsourcing model. This includes CPA and accounting firms, property management companies, HOA and community association management firms, and other businesses with recurring accounting needs. These audiences are all important; the homepage must not rank one industry above another or imply that the company is pivoting away from an existing customer segment.

Use industry-specific pages to explain each audience's workflows and service requirements. Keep the homepage and company-wide descriptions neutral and broad.

## Message hierarchy

- **Primary:** accounting outsourcing partner.
- **Services:** accounting, bookkeeping, tax preparation and agreed related accounting operations.
- **Delivery:** remote work performed within client systems, workflows, reporting formats and review processes.
- **Trust:** specific, verifiable process descriptions; no unsupported certification, security or performance claims.
- **Market pages:** explain jurisdiction-specific scope. Do not force country names into the homepage headline.

## Copy rules

- Use “outsourcing” consistently for the commercial model.
- Use “remote” only when explaining delivery or a client workflow.
- Explain who the page serves, what work can be outsourced, how the workflow fits, what stays under client control, and the next step.
- Prefer clear CTAs such as “Discuss Your Accounting Needs” and audience-specific variants.
- Do not lead with discounts, guaranteed savings, “free” offers, vague advisory claims or generic marketing language.
- Do not imply Accounstone replaces a property manager, takes over an HOA board's decisions, approves client payments, provides software-vendor services, or assumes tax/legal duties outside the agreed scope.
- Keep all B2B customer segments represented fairly. Do not make any one industry the default or top-priority audience in company-wide messaging.

## Website change control

Before adding or rewriting a page:
1. Check `docs/ROUTES.md`, `docs/CONTENT-REGISTRY.md`, and `docs/SEARCH-INTENTS.md`.
2. Confirm the buyer, query intent and existing URL owner.
3. Preserve the page contract in `docs/PAGE-FORMAT.md` and run `scripts/verify-pages.mjs` against a production build.
4. Preserve existing useful SEO content, canonical routes, structured data, contextual links, and AI-readable indexes.
5. Make related changes on a separate branch and review the diff and build before merging or deploying.
6. Do not change the positioning again based on one comment or one short-term ranking fluctuation. Revisit it only when sustained lead, search or customer evidence justifies a documented strategy review.
