# Route Registry

Source of truth for every indexable route on accounstone.com. Generated from a full repository audit on 2026-08-21, restructured 2026-08-27 (see the Growth System Audit delivered that date), re-verified against `app/**/page.tsx` on 2026-09-08. Update this file in the same pass as any change that adds, removes, or re-scopes a route — don't let it drift from `app/**/page.tsx` the way `app/sitemap.ts` did once before (see `AI-WEBSITE-GUIDE.md`, "Known build gotchas").

Type key: **B** commercial SEO page · **C** blog/guide/informational · **E** proof · **Hub** index/directory page · **Corp** non-cluster company page (intentionally outside the SEO cluster architecture).

## Services

Region-first as of 2026-08-27. The generic `/services/{slug}` layer was retired: its
content was merged into the regional pages and the URLs now 301 to the United States
page (see `next.config.mjs`). **Do not recreate a generic service page** — it competes
with its own regional children for the same commercial intent.

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/services` | Hub | Core — region-first | Published |
| `/services/bookkeeping/{united-states,united-kingdom,australia}` | B | Bookkeeping | Published |
| `/services/accounting/{united-states,united-kingdom,australia}` | B | Accounting Services | Published (UK + AU added 2026-08-27) |
| `/services/tax-preparation/{united-states,united-kingdom,australia}` | B | Tax Preparation | Published |
| `/services/payroll/{united-states,united-kingdom,australia}` | B | Payroll | Published |
| `/services/accounts-payable/{united-states,united-kingdom,australia}` | B | Accounts Payable | Published |
| `/services/accounts-receivable/{united-states,united-kingdom,australia}` | B | Accounts Receivable | Published |
| `/services/audit-support/{united-states,united-kingdom,australia}` | B | Audit Support | Published |
| `/services/tax-preparation/united-states/1040-individual` | B | Form 1040 | Published 2026-09-16 |
| `/services/tax-preparation/united-states/1065-partnership` | B | Form 1065 / K-1 | Published 2026-09-16 |
| `/services/tax-preparation/united-states/1120-corporation` | B | Form 1120 / C corporation | Added 2026-10-18 — corporate return preparation and book-to-tax workpaper intent |
| `/services/tax-preparation/united-states/1120-s-corporation` | B | Form 1120-S / S corporation | Added 2026-10-18 — S corporation return and shareholder schedule workflow intent |

21 commercial pages = 7 services x 3 regions. The matrix lives in `lib/data.ts`
(`regions`, `serviceRegions`, `serviceRegionPaths`) and drives the navbar, the footer,
the `/services` hub and `app/sitemap.ts` from one place.

**CFO Support and HR services are not offered** and have no pages. See
`knowledge/company/scope-boundaries.md`. The owner has indicated both may be added in
future; at that point the change is an entry in `serviceRegions` plus the matching
`page.tsx` files, nothing structural.

### Retired — do not recreate

| URL | Action | Target |
|---|---|---|
| `/services/bookkeeping` | 301 | `/services/bookkeeping/united-states` |
| `/services/accounting` | 301 | `/services/accounting/united-states` |
| `/services/tax-preparation` | 301 | `/services/tax-preparation/united-states` |
| `/services/payroll` | 301 | `/services/payroll/united-states` |
| `/services/accounts-payable` | 301 | `/services/accounts-payable/united-states` |
| `/services/accounts-receivable` | 301 | `/services/accounts-receivable/united-states` |
| `/services/audit-support` | 301 | `/services/audit-support/united-states` |
| `/services/hoa-accounting` | 301 | `/industries/hoa-accounting` |
| `/services/property-management-accounting` | 301 | `/industries/property-management` |

## Solutions (engagement models)

| URL | Type | Status |
|---|---|---|
| `/solutions` | Hub | Published |
| `/solutions/offshore-accounting-support` | B | Published |
| `/solutions/staff-augmentation` | B | Published |
| `/solutions/dedicated-accounting-teams` | B | Published |
| `/solutions/back-office-support` | B | Published |

## Markets

| URL | Type | Spokes | Status |
|---|---|---|---|
| `/markets` | Hub | — | Published |
| `/markets/united-states` | B | `/texas`, `/california`, `/florida` | Published |
| `/markets/united-states/texas` | B | — | Published |
| `/markets/united-states/california` | B | — | Published |
| `/markets/united-states/florida` | B | — | Published |
| `/markets/united-kingdom` | B | `/vat-returns`, `/year-end-accounts` | Published |
| `/markets/united-kingdom/vat-returns` | B | — | Published 2026-09-09 |
| `/markets/united-kingdom/year-end-accounts` | B | — | Published 2026-09-09 |
| `/markets/australia` | B | `/bas-preparation` | Published |
| `/markets/australia/bas-preparation` | B | — | Published 2026-09-09 |

**"Offshore" belongs to `/solutions/offshore-accounting-support`, not to a market
page.** The UK page was titled "Offshore Accounting for UK Practices" until
2026-09-04 and took ~140 of its 144 impressions from the offshore cluster,
competing with the solutions page while neither earned a click. Do not put the
word back in a market page's title, h1 or description.

Canada is not a route. See `knowledge/company/identity.md` — open business decision, not an engineering gap.

## Industries

| URL | Type | Spokes | Status |
|---|---|---|---|
| `/industries` | Hub | — | Published |
| `/industries/cpa-firms` | B | California, Texas, Florida, New York, Illinois | Refreshed 2026-10-20 — targets outsourced accounting for CPA firms; emphasizes preparation capacity with client relationship, professional judgement, review and sign-off retained by the firm |
| `/industries/cpa-firms/california` | B | CPA Firms / California | Added 2026-10-18 — state-qualified CPA-firm outsourcing intent; distinct from general California business accounting page |
| `/industries/cpa-firms/texas` | B | CPA Firms / Texas | Added 2026-10-18 — state-qualified CPA-firm outsourcing intent; distinct from general Texas business accounting page |
| `/industries/cpa-firms/florida` | B | CPA Firms / Florida | Added 2026-10-18 — state-qualified CPA-firm outsourcing intent; distinct from general Florida business accounting page |
| `/industries/cpa-firms/new-york` | B | CPA Firms / New York | Added 2026-10-18 — state-qualified CPA-firm outsourcing intent |
| `/industries/cpa-firms/illinois` | B | CPA Firms / Illinois | Added 2026-10-18 — state-qualified CPA-firm outsourcing intent |
| `/industries/cpa-firms/white-label-accounting` | B | CPA Firms / White-label delivery | Added 2026-10-18 — brand, communication and reviewer-handoff intent distinct from general outsourcing, bookkeeping service scope and evaluation guides |
| `/industries/cpa-firms/cas-production-support` | B | CPA Firms / CAS production | Added 2026-10-18 — recurring production and reporting handoff for firms delivering client accounting services; distinct from CAS educational guide |
| `/industries/technology` | B | — | Deepened 2026-09-16 — absorbs the SaaS intent; no `/saas-technology` URL |
| `/industries/healthcare` | B | — | Published |
| `/industries/nonprofit-accounting` | B | Nonprofit organizations | Added 2026-10-14 — distinct nonprofit bookkeeping workflow for fund/grant coding, approved functional expense allocations, reconciliations and board-report preparation; grant compliance and interpretation remain with the organization and its advisers |
| `/industries/healthcare/dental-practice-accounting` | B | Healthcare / Dental practice accounting | Added 2026-10-14 — distinct dental-office and dental-group bookkeeping workflow for production/collection reports, deposit tie-outs, lab/supply expense coding and provider/location reporting; excludes billing/claims management and unsupported HIPAA claims |
| `/industries/ecommerce` | B | `/amazon-seller-accounting`, `/shopify-accounting` | Refreshed 2026-10-20 — targets e-commerce accounting services; clarified settlement reconciliation, fees/refunds, inventory/COGS source-data boundaries and tax-adviser responsibilities |
| `/industries/ecommerce/amazon-seller-accounting` | B | E-Commerce / Amazon seller accounting | Added 2026-10-14 — settlement-to-bank reconciliation, fees/refunds, inventory/COGS and close handoff; distinct from the broader multi-channel e-commerce pillar |
| `/industries/ecommerce/shopify-accounting` | B | E-Commerce / Shopify accounting | Added 2026-10-14 — Shopify Payments payout-to-bank reconciliation, gateway differences, refunds, gift-card records and close handoff; distinct from Amazon settlement workflows and broad multi-channel coverage |
| `/industries/real-estate` | B | `/yardi-accounting-outsourcing-texas` | Retargeted 2026-09-17 — owners, investors and developers only; PM and HOA split out |
| `/industries/property-management` | B | — | Added 2026-09-17 — 4,106 words. For companies managing property that belongs to owners |
| `/industries/property-management/california` | B | Property Management / California | Added 2026-10-14 — state-specific remote accounting scope, owner reporting and reconciliations; distinct from AppFolio-specific California page |
| `/industries/property-management/texas` | B | Property Management / Texas | Added 2026-10-14 — state-specific remote accounting scope, multi-property ledgers and close workflow; distinct from Yardi-specific Texas page |
| `/industries/property-management/accounting-cleanup` | B | Property Management / Cleanup | Added 2026-10-14 — commercial support page for overdue books, reconciliation backlog, ledger differences and transition to recurring close; distinct from the informational accounting guide |
| `/industries/property-management/general-ledger-reconciliation` | B | Property Management / Reconciliation | Added 2026-10-14 — commercial support for recurring property-management-system to general-ledger tie-outs, exception investigation and monthly review; distinct from historical cleanup/catch-up |
| `/industries/property-management/tenant-accounting-operations` | B | Property Management / Tenant operations | Added 2026-10-15 — commercial support for rent batches, payment application, tenant ledgers, lease lifecycle changes and documented exception handoff; distinct from the informational tenant-ledger reconciliation guide |
| `/industries/property-management/lender-reporting-noi-support` | B | Property Management / Lender reporting | Added 2026-10-15 — property-level NOI schedules, lender package assembly, client-approved debt-service inputs, reserve schedules and variance support; not covenant interpretation, assurance or lending advice |
| `/industries/property-management/management-company-accounting` | B | Property Management / Management-company books | Added 2026-10-15 — commercial support for company-level management-fee revenue, operating expenses, intercompany balances, accruals and close reporting; distinct from property/owner ledgers |
| `/industries/property-management/month-end-close-support` | B | Property Management / Monthly close | Added 2026-10-15 — commercial recurring close workflow covering cutoff, cash/control reconciliations, tenant/owner/AP/AR review, accruals, deposit schedules, exceptions and reporting handoff; distinct from informational checklist and platform-to-GL reconciliation |
| `/industries/property-management/trust-account-reconciliation` | B | Property Management / Trust reconciliation | Added 2026-10-15 — bank-to-book and relevant tenant/owner ledger tie-outs, exception logs and review handoff; does not claim legal compliance, approve withdrawals or release funds |
| `/industries/property-management/appfolio-accounting-california` | B | Property Management / AppFolio / California | Existing software-and-state commercial page; remote scope and California trust-record boundaries documented |
| `/industries/property-management/yardi-accounting-support` | B | Property Management / Yardi | Added 2026-10-17 — commercial accounting preparation for property managers using an existing Yardi Voyager or Breeze setup; distinct from the HOA Yardi page, Texas-specific Yardi page and informational Yardi workflow guide |
| `/industries/hoa-accounting` | B | — | Added 2026-09-17 — 4,115 words. HOAs, condo associations and community management companies |
| `/industries/hoa-accounting/california` | B | California HOA accounting | Added 2026-10-12 — state-specific remote accounting scope, association records and board-reporting context; not a local-office claim |
| `/industries/hoa-accounting/san-diego-county` | B | California HOA accounting / San Diego County | Published 2026-10-13 — county-specific assessment ledgers, reconciliations, board reporting and CPA handover |
| `/industries/hoa-accounting/orange-county` | B | California HOA accounting / Orange County | Added 2026-10-14 — local association context, California monthly financial-review references and remote accounting scope |
| `/industries/hoa-accounting/los-angeles-county` | B | California HOA accounting / Los Angeles County | Added 2026-10-14 — county-specific remote bookkeeping, reconciliations and board reporting; no local-office or on-site management claim |
| `/industries/hoa-accounting/texas` | B | Texas HOA accounting |
| `/industries/hoa-accounting/yardi-accounting-support` | B | HOA accounting / Yardi Voyager and Breeze | Added 2026-10-14 — software-specific accounting workflow for associations using existing Yardi products; not implementation, configuration, technical support, certification or vendor partnership | Added 2026-10-14 — state-specific remote accounting page for Texas POAs and condo associations, with official Chapter 209/82 references, record organization, reconciliations and board reporting; legal applicability stays with Texas professionals |
| `/industries/real-estate/yardi-accounting-outsourcing-texas` | B | — | Published |
| `/industries/construction` | B | — | Added 2026-10-12 — contractor-focused project-cost records, retainage and month-end reporting support with explicit accounting-policy boundaries |
| `/industries/professional-services` | B | — | Deepened 2026-09-16 — absorbs the law-firm intent; no `/law-firms` URL |

## Technology

| URL | Type | Status |
|---|---|---|
| `/technology` | Hub | Published |
| `/technology/quickbooks` | B | Published |
| `/technology/xero` | B | Refreshed 2026-10-20 — targets Xero accounting services; clarifies existing-organisation workflows, statement-level reconciliation and CPA-firm vs direct-business scope |
| `/technology/sage` | B | Published |
| `/technology/netsuite` | B | Published |
| `/technology/drake-tax` | B | Published |
| `/technology/cch` | B | Published |
| `/technology/myob` | B | Published — **`noindex` since 2026-09-04**, and therefore absent from `app/sitemap.ts` and `public/llms.txt`. Live and linked; not in `robots.txt` (a blocked URL cannot be crawled, so the noindex would never be read). See CLAUDE.md. |

## Resources — Blog

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/blog` | Hub | — | Published |
| `/blog/outsourced-bookkeeping-guide` | C | Bookkeeping | Re-scoped 2026-08-21 (see CONTENT-REGISTRY) |
| `/blog/accounts-payable-outsourcing` | C | Accounts Payable | Re-scoped 2026-08-21 |
| `/blog/accounts-receivable-management` | C | Accounts Receivable | Published — no conflict |
| `/blog/outsourced-payroll-services` | C | Payroll | Re-scoped 2026-08-21 |
| `/blog/outsourced-accounting-services` | — | Accounting Services | **Removed 2026-08-21** — 301 redirect to `/resources/guides/outsourced-accounting-services-guide` in `next.config.mjs`, see CONTENT-REGISTRY |
| `/blog/tax-preparation-outsourcing` | C | Tax Preparation | Published — no conflict |
| `/blog/us-cpa-firm-outsourcing-readiness-checklist` | C | U.S. CPA Firm Outsourcing | New operational checklist — taxpayer-data safeguards, access, workpaper handoff and pilot controls |
| `/blog/audit-support-services` | C | Audit Support | Published — no conflict |
| `/blog/quickbooks-month-end-close-checklist` | C | Technology / QuickBooks | Published — software-specific month-end close workflow |
| `/blog/real-estate-accounting-month-end-close` | C | Real Estate | Published — property-specific month-end close workflow |
| `/blog/yardi-accounting-workflow` | C | Property Management / Yardi | Published — software workflow guide |
| `/blog/property-management-cam-reconciliation` | C | Property Management / Commercial Real Estate | Added 2026-10-12 — expense pools, lease-specific allocations, tenant true-ups and review controls |
| `/blog/hoa-annual-budget-preparation` | C | HOA Accounting | Added 2026-10-13 — annual budget planning from reconciled actuals, contract renewals, reserve information and board review; distinct from budget-to-actual reporting |
| `/blog/hoa-special-assessment-accounting` | C | HOA Accounting | Added 2026-10-13 — approved one-time/installment assessment tracking from owner billing through receipts, receivables reconciliation, project-cost support and board reporting |
| `/blog/upwork-vs-accounstone` | C | Outsourcing Decisions | Added 2026-10-14 — balanced comparison of marketplace freelancer hiring and direct accounting outsourcing, with fit criteria and total-cost questions |

## Resources — Guides

| URL | Type | Cluster | Status |
|---|---|---|---|
| `/resources/guides` | Hub | — | Published |
| `/resources/guides/outsourced-bookkeeping-cost-guide` | C | Bookkeeping | Published — primary owner of cost intent |
| `/resources/guides/questions-to-ask-before-outsourcing-bookkeeping` | C | Bookkeeping | Published |
| `/resources/guides/quickbooks-vs-xero-comparison` | C | Technology | Published |
| `/resources/guides/staff-augmentation-tax-season-guide` | C | CPA Firms | Published |
| `/resources/guides/outsourced-accounting-services-guide` | C | Accounting Services | Published — sole owner of this intent since 2026-08-21 merge |
| `/resources/guides/outsourced-accounts-payable-guide` | C | Accounts Payable | Published — primary owner of scope intent |
| `/resources/guides/outsourced-accounts-receivable-guide` | C | Accounts Receivable | Published |
| `/resources/guides/outsourced-payroll-processing-guide` | C | Payroll | Published — primary owner of coverage-by-region intent |
| `/resources/guides/how-to-choose-accounting-outsourcing-partner` | C | CPA Firms | Published |
| `/resources/guides/client-accounting-services-cas-guide` | C | CPA Firms | Published |
| `/resources/guides/choosing-an-engagement-model` | C | Solutions | Published 2026-08-21 — fills the comparison gap flagged in the audit |
| `/resources/guides/how-to-outsource-accounting` | C | Outsourcing Decisions | Added 2026-10-14 — step-by-step scoping, provider evaluation, secure access, onboarding and 30-day transition plan |

## Resources — Insights & Case Studies

| URL | Type | Status |
|---|---|---|
| `/resources` | Hub | Published — the top-level resources index above blog, guides and insights |
| `/resources/insights` | Hub | Published |
| `/resources/insights/asc-606-revenue-recognition-saas` | C | Published |
| `/resources/insights/sales-tax-nexus-ecommerce-guide` | C | Published |
| `/resources/case-studies` | E | Published — correctly labeled illustrative scenarios, not real client stories |

## Delivery Framework / Trust

| URL | Type | Status |
|---|---|---|
| `/delivery-framework/onboarding` | Trust | Published |
| `/delivery-framework/communication` | Trust | Published |
| `/delivery-framework/quality-assurance` | Trust | Published |
| `/compliance` | Trust | Published |
| `/data-security` | Trust | Published |

## Company / Corporate

| URL | Type | Status |
|---|---|---|
| `/` | Corp | Published |
| `/about` | Corp | Published |
| `/contact` | Corp | Published — rebuilt 2026-09-03 as a trust page, not a form page |
| `/company-registration` | Hub | Published (added 2026-09-04) — US company registration cluster |
| `/company-registration/delaware` | B | Published (added 2026-09-04) |
| `/company-registration/wyoming` | B | Published (added 2026-09-04) |
| `/company-registration/nevada` | B | Published (added 2026-09-04) |
| `/privacy` | Corp | Published |
| `/cookie-policy` | Corp | Published (added 2026-09-04 with the consent system) |
| `/terms` | Corp | Published |
| `/thank-you` | Corp | Published — **`noindex`**, and therefore absent from `app/sitemap.ts` and `public/llms.txt`. It exists so Google Ads and Meta have a destination URL to count a conversion on; it must stay crawlable, so do not add it to `robots.txt`. |

`app/services/cfo-support/route.ts` returns **410 Gone**. It is a `route.ts`, not a
`page.tsx`, so it appears in no count on this page. CFO support is not offered; if it ever
is, delete that route first.

---

**Route-count note is stale after the 2026-10-14 additions.** The last recorded baseline was 160 routes in the generated route-date map and 158 expected sitemap URLs as of 2026-10-13. Re-run `node scripts/generate-sitemap-dates.mjs` from the final release checkout, then compare the built `/sitemap.xml` against the route inventory. The expected exclusions remain `/thank-you` and `/technology/myob` because both are `noindex`. Do not mark sitemap parity verified until the route count and generated sitemap have been checked from the same commit.

There are **eight** 301 redirects, all single-hop: the seven retired generic
`/services/{slug}` URLs, plus `/blog/outsourced-accounting-services` → the
accounting-services guide. The per-URL evidence for each service target is in the comment
above the redirects in `next.config.mjs`. Six point at United States;
`/services/audit-support` points at United Kingdom.

Before adding a route: check this file, `SEARCH-INTENTS.md`, and `CONTENT-REGISTRY.md` for an existing owner of the intent. Before removing one: search all internal references and add a redirect — see `AI-WEBSITE-GUIDE.md`.

## Re-running the drift check

`app/sitemap.ts` mixes hardcoded `path:` entries with URLs auto-generated from `lib/data.ts`, so grepping the source undercounts. Diff against the **generated** sitemap instead, with the dev server running:

```bash
find app -name "page.tsx" | sed 's|^app||; s|/page.tsx$||; s|^$|/|' | sort > /tmp/disk.txt
curl -s http://localhost:3000/sitemap.xml | grep -oE '<loc>[^<]+</loc>' \
  | sed 's|<loc>https://www.accounstone.com||; s|</loc>||; s|^$|/|' | sort -u > /tmp/sitemap.txt
comm -13 /tmp/disk.txt /tmp/sitemap.txt   # in sitemap, no page  -> would 404
comm -23 /tmp/disk.txt /tmp/sitemap.txt   # page exists, unlisted -> not crawled
```

**The first must print nothing. The second prints exactly two lines** —
`/technology/myob` and `/thank-you`, the two `noindex` routes above. Anything else in
either direction is drift.

This is the check that catches the failure mode recorded in `AI-WEBSITE-GUIDE.md`
("Known build gotchas") — it found four unlisted guides on 2026-08-21, confirmed
84 ↔ 84 parity after the 2026-08-27 restructure, and reads 90 ↔ 88 as of 2026-09-08.

Two related checks belong in the same pass:

```bash
# public/llms.txt holds the same invariant as the sitemap: every indexable
# route, neither noindex one.
grep -oE 'https://www\.accounstone\.com[^ )]*' public/llms.txt \
  | sed 's|https://www.accounstone.com||; s|/$||; s|^$|/|' | sort -u > /tmp/llms.txt
comm -23 /tmp/llms.txt /tmp/disk.txt   # linked but no page -> must be empty
comm -13 /tmp/llms.txt /tmp/disk.txt   # page but unlinked  -> the 2 noindex only

# sitemap lastmod is generated from git, never hand-written
node scripts/generate-sitemap-dates.mjs
```


## Reconciled additions — 2026-10-16

| Route | Type | Topic | Notes |
|---|---|---|---|
| `/industries/hoa-accounting/self-managed-hoa-accounting` | B | Self-managed HOA accounting | Commercial accounting-only support page; board retains approvals and control |## CPA workflow additions — release staging 2026-10-20

| Route | Type | Topic | Notes |
|---|---|---|---|
| `/industries/cpa-firms/overflow-work-support` | B | CPA firm overflow work support | Commercial workflow page for defined accounting capacity and reviewer handoff |
| `/industries/cpa-firms/accounts-payable-outsourcing` | B | Accounts payable outsourcing for CPA firms | Preparation and reconciliation support; client retains payment approval |
| `/industries/cpa-firms/california-tax-workpaper-support` | B | California tax workpaper support | State-qualified workflow support; CPA retains professional conclusions |
| `/industries/cpa-firms/texas-bookkeeping-cleanup-support` | B | Texas bookkeeping cleanup support | Historical cleanup and reconciliation support |
| `/industries/cpa-firms/florida-property-entity-accounting-support` | B | Florida property/entity accounting support | Entity-level accounting workflow support |
| `/industries/cpa-firms/new-york-multi-entity-accounting-support` | B | New York multi-entity accounting support | Multi-entity ledger and reconciliation workflow support |
| `/industries/cpa-firms/illinois-inventory-accounting-support` | B | Illinois inventory accounting support | Inventory-related accounting workflow support |
