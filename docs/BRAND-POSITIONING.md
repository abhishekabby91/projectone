# Accounstone brand and website positioning

Last reviewed: 2026-10-24

## Positioning decision

**Accounstone is an accounting outsourcing partner for CPA and accounting firms.** Outsourcing is the primary service model; remote delivery describes how work is performed, not the main product being sold. Use “CPA and accounting firms” where the intended audience includes both licensed CPA practices and other accounting firms.

## Audience hierarchy

**Primary buyer: CPA and accounting firms.** Company-wide messaging, homepage metadata, the homepage hero, main conversion paths and the CPA-firm page should make this priority clear. Focus on defined bookkeeping, accounting operations, tax-preparation support and related production work within the firm's existing software, checklists, documentation standards and review process. The firm's client relationships, professional judgment, review and required sign-off remain with the firm.

**Supporting search entry points: industry, service and software pages.** Retain useful pages for property management, HOA/community associations, real estate and relevant software/workflows. These pages may answer direct searches for a specific accounting need and can also illustrate workflows relevant to accounting-firm clients. Do not rewrite the HOA or property-management pages solely to insert CPA language or change their existing direct-buyer positioning. They are supporting site entry points, not equal homepage-level audiences.

CPA firms and accounting firms are related but not identical terms: every CPA firm is an accounting firm, but not every accounting firm is a CPA firm. Use “CPA and accounting firms” when both are intended. Do not imply that Accounstone competes with firms for their client relationships.

## Message hierarchy

- **Primary buyer:** CPA and accounting firms.
- **Primary offer:** accounting outsourcing partner for defined production work.
- **Services:** accounting, bookkeeping, tax preparation and agreed related accounting operations.
- **Delivery:** work performed within client systems, workflows, reporting formats and review processes.
- **Supporting pages:** industry, service and software pages that satisfy distinct search intent without changing the company-wide buyer priority.
- **Trust:** specific, verifiable process descriptions; no unsupported certification, security or performance claims.
- **Market pages:** explain jurisdiction-specific scope. Do not force country names into the homepage headline.

## Copy rules

- Use “outsourcing” consistently for the commercial model.
- Lead the homepage with CPA and accounting firms; use audience-specific CTAs such as “Discuss CPA Firm Support.”
- Use “remote” only when explaining delivery or a client workflow.
- Explain what work can be handed off, how it fits the firm's process, what stays under the firm's control, and the next step.
- Keep industry pages natural and useful for the searches they serve. Do not add CPA or outsourcing language where it would make the page less accurate or less helpful.
- Do not lead with discounts, guaranteed savings, “free” offers, vague advisory claims or generic marketing language.
- Do not imply Accounstone replaces a property manager, takes over an HOA board's decisions, approves client payments, provides software-vendor services, or assumes tax/legal duties outside the agreed scope.
- Do not publish client-specific case-study details without explicit approval. Generic capability descriptions must not imply unverified client outcomes.

## Website change control

Before adding or rewriting a page:
1. Check `docs/ROUTES.md`, `docs/CONTENT-REGISTRY.md`, and `docs/SEARCH-INTENTS.md`.
2. Confirm the buyer, query intent and existing URL owner.
3. Preserve the page contract in `docs/PAGE-FORMAT.md` and run `scripts/verify-pages.mjs` against a production build.
4. Preserve existing useful SEO content, canonical routes, structured data, contextual links, and AI-readable indexes.
5. Make related changes on a separate branch and review the diff and build before merging or deploying.
6. Do not change the positioning again based on one comment or one short-term ranking fluctuation. Revisit it only when sustained lead, search or customer evidence justifies a documented strategy review.
