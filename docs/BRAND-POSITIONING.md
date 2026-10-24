# Accounstone brand and website positioning

Last reviewed: 2026-10-24

## Positioning decision

**Accounstone is an accounting outsourcing partner.** Outsourcing is the primary service model and the consistent commercial positioning across the website. Remote delivery is a way the work is performed, not the main product being sold.

## B2B audiences

**Primary buyer: CPA and accounting firms.** Company-wide messaging should make clear that Accounstone is an outsourcing partner that helps these firms handle defined bookkeeping, accounting, tax-preparation and related production work within their existing software, documentation standards and review workflows.

**Supporting search entry points: service, industry and software pages.** Retain useful pages for property management, HOA/community associations, real estate and relevant accounting software where they satisfy distinct search intent. These pages may attract visitors searching for specific work; they do not change the primary company-wide positioning. Do not force CPA or outsourcing wording into an industry page when it would make the page less natural or less useful.

CPA firms and accounting firms are related but not identical terms: every CPA firm is an accounting firm, but not every accounting firm is a CPA firm. Use “CPA and accounting firms” when we intend to include both audiences. Do not imply that Accounstone competes with CPA firms for their client relationships.

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
- Make CPA and accounting firms the primary audience in company-wide messaging; keep industry pages as supporting search entry points rather than equal homepage positioning.

## Website change control

Before adding or rewriting a page:
1. Check `docs/ROUTES.md`, `docs/CONTENT-REGISTRY.md`, and `docs/SEARCH-INTENTS.md`.
2. Confirm the buyer, query intent and existing URL owner.
3. Preserve the page contract in `docs/PAGE-FORMAT.md` and run `scripts/verify-pages.mjs` against a production build.
4. Preserve existing useful SEO content, canonical routes, structured data, contextual links, and AI-readable indexes.
5. Make related changes on a separate branch and review the diff and build before merging or deploying.
6. Do not change the positioning again based on one comment or one short-term ranking fluctuation. Revisit it only when sustained lead, search or customer evidence justifies a documented strategy review.
