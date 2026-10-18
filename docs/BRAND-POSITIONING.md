# Accounstone brand and website positioning

Last reviewed: 2026-10-18

## Positioning decision

**Accounstone is an accounting outsourcing partner.** Outsourcing is the primary service model and the consistent commercial positioning across the website. Remote delivery is a way the work is performed, not the main product being sold.

## Priority B2B audiences

1. **Property management companies and HOA/community association management firms** — recurring property-level accounting, bookkeeping, reconciliations, AP/AR, owner/association ledgers and monthly financial reporting.
2. **CPA and accounting firms** — recurring bookkeeping, accounting workflows, agreed tax-preparation workpapers and other defined preparation tasks.
3. **Other businesses with recurring accounting needs** — relevant core accounting and tax services, supported by the existing service and industry structure.

The website should make the first two audiences easy to identify without implying that Accounstone serves only one industry.

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
- Keep CPA firms and other business audiences visible; do not pivot the whole brand to HOA alone.

## Website change control

Before adding or rewriting a page:
1. Check `docs/ROUTES.md`, `docs/CONTENT-REGISTRY.md`, and `docs/SEARCH-INTENTS.md`.
2. Confirm the buyer, query intent and existing URL owner.
3. Preserve the page contract in `docs/PAGE-FORMAT.md` and run `scripts/verify-pages.mjs` against a production build.
4. Preserve existing useful SEO content, canonical routes, structured data, contextual links, and AI-readable indexes.
5. Make related changes on a separate branch and review the diff and build before merging or deploying.
6. Do not change the positioning again based on one comment or one short-term ranking fluctuation. Revisit it only when sustained lead, search or customer evidence justifies a documented strategy review.
