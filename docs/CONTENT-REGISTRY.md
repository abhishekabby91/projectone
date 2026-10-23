## 2026-10-23 — Tax preparation outsourcing guide refresh

Refined `/blog/tax-preparation-outsourcing` against the Aug 5–Oct 21 Search Console report, which showed 1,347 impressions, zero clicks and average position 27.4. Updated the page title and description to make the CPA workflow intent more explicit, rewrote the opening to answer the outsourcing workflow query directly, and removed the UK/Australia tax section so the guide stays aligned with the U.S. CPA-firm content cluster. Kept the article informational and preserved links to the commercial U.S. tax service page and return-type pages. Search Console report metrics are a baseline, not proof that the changes will improve performance.

## 2026-10-22 — US-focused architecture / Markets cluster retirement staging

- Removed the homepage Markets section and the Markets navigation/footer block.
- The Services hub now surfaces US service pages only and no longer links to market overview pages.
- The sitemap now lists US-qualified service routes and excludes `/markets/*` plus UK/Australia service routes. `llms.txt` and `llms-full.txt` no longer present the Markets cluster as active discovery architecture.
- Existing market and UK/Australia service page source files are intentionally retained on this branch pending URL-specific query and backlink review. Do not delete or redirect them en masse. Choose a 301 only for a genuinely equivalent destination; otherwise assess 404/410 after evidence review.
- No `/us/` prefix is being introduced. US tax-type, industry, software and resource clusters remain in their existing URL structure.
- GSC baseline checked 2026-10-22: last 28 days 45 clicks, 7,791 impressions, 0.58% CTR, average position 55.6. July 24–October 22 Markets pages: 1,363 impressions and 2 clicks combined. Individual query and backlink checks remain outstanding because the connected GSC tool reached its monthly allowance.

## 2026-10-19 — GSC-led duplicate and intent-cluster cleanup

- Retired the duplicate property-accounting service page source `/services/property-management-accounting`; its existing permanent redirect points to `/industries/property-management`, the single commercial owner. The industry hub's link now points to the specific accounting-cleanup page instead of the duplicate.
- Retired the obsolete HOA accounting service page source `/services/hoa-accounting`; the existing permanent redirect points to `/industries/hoa-accounting`. Removed it from the sitemap and updated internal and AI reference links to the canonical hub.
- Repositioned `/blog/tax-preparation-outsourcing` as an informational workflow/software/reviewer-controls guide and retained `/services/tax-preparation/united-states` as the commercial service page.
- Aligned staff augmentation, offshore accounting support, AP/AR article metadata and country-market positioning against observed GSC query/page overlaps. No new URLs were created. See `SEO-CHANGELOG.md` and `docs/GSC-QUERY-OPPORTUNITIES-2026-10-19.md` for evidence and limits.

## 2026-10-18 — U.S. CPA-firm tax return-type cluster

Added two return-specific commercial pages under the existing U.S. tax preparation service rather than creating a parallel tax-outsourcing hierarchy. The official IRS pages identify Form 1120 as the U.S. Corporation Income Tax Return and Form 1120-S as the return for an entity whose S corporation election is effective. Public CPA-outsourcing competitors consistently list both forms among the business returns they support; that demonstrates market relevance, but not monthly search volume for the exact phrases.

| Title | URL | Cluster | Primary intent | Status | Last updated |
|---|---|---|---|---|---|
| Form 1120 Corporate Tax Outsourcing | `/services/tax-preparation/united-states/1120-corporation` | U.S. Tax Preparation / Return Type | C corporation return-preparation workpapers, book-to-tax schedules and fixed-asset support for CPA review | Draft page added; official IRS source linked; exact search volume not verified | 2026-10-18 |
| Form 1120-S Tax Preparation Outsourcing | `/services/tax-preparation/united-states/1120-s-corporation` | U.S. Tax Preparation / Return Type | S corporation return and shareholder schedule preparation; basis and compensation decisions remain with the responsible professional | Draft page added; official IRS source linked; exact search volume not verified | 2026-10-18 |

The existing `/services/tax-preparation/united-states` page remains the broad commercial owner. Form 1040 and 1065 pages retain their own distinct return workflows; the new pages link laterally to those pages and back to the tax hub. Do not create separate pages for every schedule, tax term or software unless search evidence proves a distinct intent.

## 2026-10-14 — Texas HOA accounting page

Added `/industries/hoa-accounting/texas` as a state-specific commercial page under the HOA industry. Competitor research and official Texas Property Code references informed a distinct focus on property owners’ associations and condominium communities, organized financial records, assessment ledgers, reconciliations and board reporting. Statutory links are general references only; the page does not offer legal interpretation, compliance guarantees or on-site community management. The HOA hub links to the page, and the route is included in sitemap/search-intent records and AI-readable indexes.

## 2026-10-14 — Yardi HOA accounting support page

Added `/industries/hoa-accounting/yardi-accounting-support` as a software-specific commercial spoke under the HOA industry. Official Yardi product materials document HOA/condo association workflows in Voyager and Breeze, including accounting, ledgers, charges, reporting and owner access. The page focuses on accounting preparation for clients already using their licensed system; it explicitly excludes implementation, configuration, vendor technical support, certification and partnership claims. The parent HOA hub links to this page; route/search-intent, sitemap and AI-readable indexes include the URL.

## 2026-10-14 — Dental practice accounting page

Added `/industries/healthcare/dental-practice-accounting` as a dental-specific commercial page beneath the existing healthcare hub. Competitor research identified a distinct accounting workflow around production-versus-collection records, insurance adjustments, merchant/bank deposit reconciliation, lab/supply expense coding and provider/location reporting. The page links to the healthcare parent and relevant bookkeeping/AR services; the parent healthcare page links back to the dental page. Scope is limited to bookkeeping using client-provided financial reports; it does not claim claims processing, clinical coding, patient collections, HIPAA certification or unverified compliance status. Competitor pages establish topic coverage only, not search volume or ranking potential.

## Industry audience, query and link-map rule — 2026-10-14

Every new or refreshed industry URL must have a distinct client/buyer, a researched query/workflow intent, a page-specific value statement, and a documented contextual link path from its relevant industry hub. Supporting pages must link back to the hub and to relevant sibling services/resources when useful. Keep HOA associations, third-party property managers, real-estate owners/investors, e-commerce sellers, CPA firms, healthcare practices, technology/SaaS companies and contractors distinct when their workflows and search intent differ. Do not create a page for every keyword variant; record overlap decisions in `docs/SEARCH-INTENTS.md`. Refer to `AI-WEBSITE-GUIDE.md` for the required industry-to-client/query/link contract and pre-release checklist.

# Content Registry

## 2026-10-18 — CPA-firm state landing-page cluster

These are commercial service pages, recorded here because the site page contract requires a content-registry entry as well as a route and search-intent record. The cluster is a test of state-qualified CPA-firm intent, not a claim that state-level search volumes have been verified. Census establishment scale is only market context; competitor state pages demonstrate SERP precedent, not demand.

| Title | URL | Cluster | Primary intent | Status | Last updated |
|---|---|---|---|---|---|
| Accounting Outsourcing for California CPA Firms | `/industries/cpa-firms/california` | CPA Firms / State | State-qualified commercial CPA-firm outsourcing; California portfolio examples and preparation/review workflow | Draft page added; search volume not verified | 2026-10-18 |
| Accounting Outsourcing for Texas CPA Firms | `/industries/cpa-firms/texas` | CPA Firms / State | State-qualified commercial CPA-firm outsourcing; defined recurring preparation and reviewer handoff | Draft page added; search volume not verified | 2026-10-18 |
| Accounting Outsourcing for Florida CPA Firms | `/industries/cpa-firms/florida` | CPA Firms / State | State-qualified commercial CPA-firm outsourcing; client-portfolio and seasonal workflow scoping | Draft page added; search volume not verified | 2026-10-18 |
| Accounting Outsourcing for New York CPA Firms | `/industries/cpa-firms/new-york` | CPA Firms / State | State-qualified commercial CPA-firm outsourcing; defined preparation and multi-entity workflow scoping | Draft page added; search volume not verified | 2026-10-18 |
| Accounting Outsourcing for Illinois CPA Firms | `/industries/cpa-firms/illinois` | CPA Firms / State | State-qualified commercial CPA-firm outsourcing; recurring preparation workflows across varied portfolios | Draft page added; search volume not verified | 2026-10-18 |
| White-Label Accounting Support for CPA Firms | `/industries/cpa-firms/white-label-accounting` | CPA Firms / Delivery Model | Commercial white-label workflow intent: brand use, client-contact boundaries, software access and reviewer handoff | Draft page added; competitor precedent reviewed; demand volume not verified | 2026-10-18 |
| CAS Production Support for CPA Firms | `/industries/cpa-firms/cas-production-support` | CPA Firms / CAS Production | Commercial CAS production intent: monthly bookkeeping, reconciliations, close schedules and reporting-package preparation | Draft page added; competitor precedent reviewed; demand volume not verified | 2026-10-18 |

## 2026-10-18 — CPA-firm white-label service page

Added `/industries/cpa-firms/white-label-accounting` as a commercial service spoke beneath the CPA-firm hub. Competitor research shows providers separately position white-label accounting/bookkeeping for CPA firms, with emphasis on work prepared within the firm's branding and workflow. The page focuses on the operating model: branding, client-contact boundaries, system permissions, workpaper formats, review and responsibility boundaries. It does not promise client concealment, unrestricted data access, certifications, specific turnaround times or pricing. It links to the existing bookkeeping and tax-preparation service pages, CAS guide, outsourcing partner evaluation guide and CPA-firm readiness checklist; those existing pages retain their own service and informational intents.

## 2026-10-18 — CPA-firm CAS production service page

Added `/industries/cpa-firms/cas-production-support` as a commercial spoke under the CPA-firm hub. Competitor research found explicit CAS production offers for CPA practices, typically describing recurring bookkeeping, AP/AR records, month-end close and reporting preparation. This Accounstone page focuses on the preparation layer and reviewer handoff; it does not claim to provide client advisory, CFO services, tax planning, accounting-policy decisions or final approval. The existing `/resources/guides/client-accounting-services-cas-guide` remains the informational guide about the CAS practice model.

Tracks blog/guide/insight content specifically (not every route — see `ROUTES.md` for the full site). Check here before writing new informational content on a topic that might already be covered.

| Title | URL | Cluster | Primary intent | Status | Last updated |

| How to Outsource Accounting: A Step-by-Step Guide | `/resources/guides/how-to-outsource-accounting` | Outsourcing decisions | Buyer-intent process guide for businesses and CPA firms: scope, provider selection, secure access, review workflow, onboarding, 30-day transition and total-cost comparison | New step-by-step guide; distinct from service overview and provider-selection framework | 2026-10-14 |
| Upwork vs. Accounstone: Freelancer Marketplace or Outsourcing Partner? | `/blog/upwork-vs-accounstone` | Outsourcing decisions | Comparison-stage search intent for buyers choosing between a freelance marketplace and a direct accounting outsourcing provider; balanced fit criteria and total-cost checklist | New comparison page with contextual links to the full guide and service/contact routes | 2026-10-14 |

| Property Management Accounting & Bookkeeping Outsourcing | `/industries/property-management` | Property Management | Commercial service page for managers of third-party property portfolios; property-level books, tenant and owner ledgers, AP/AR, reconciliations and month-end reporting | Strengthened contextual links to month-end close, owner-statement, security-deposit, bank-reconciliation and Yardi workflow resources | 2026-10-12 |
| Property Management Accounting Cleanup and Catch-Up Support | `/industries/property-management/accounting-cleanup` | Property Management | Commercial support intent for overdue books, reconciliation backlog, tenant/property ledger mismatches and a controlled transition to recurring close; distinct from the informational complete guide | New buyer-focused service page | 2026-10-14 |
| Property Management Platform-to-General-Ledger Reconciliation | `/industries/property-management/general-ledger-reconciliation` | Property Management | Commercial service intent for recurring platform-to-GL tie-outs, difference investigation, documented exceptions and monthly reviewer handoff; distinct from historical cleanup and existing informational workflows | New buyer-focused service page | 2026-10-14 |
| Tenant Accounting Operations Support for Property Managers | `/industries/property-management/tenant-accounting-operations` | Property Management | Commercial scope for rent batch validation, payment application, tenant ledger maintenance, lease lifecycle changes, documented NSF exceptions and monthly handoff; distinguishes service support from the informational tenant-ledger guide | New buyer-focused service page | 2026-10-15 |
| Property Management Lender Reporting and NOI Support | `/industries/property-management/lender-reporting-noi-support` | Property Management | Commercial support intent for property-level NOI schedules, lender package assembly, client-approved debt-service inputs, reserve schedules and documented variance explanations; distinct from the broader financial statements guide and platform-to-GL reconciliation page | New competitor-researched service page; no covenant interpretation, assurance or lending advice | 2026-10-15 |
| Property Management Company Accounting Support | `/industries/property-management/management-company-accounting` | Property Management | Commercial service intent for the management company’s own books: fee revenue, company overhead, payroll-related entries, intercompany balances, accruals and close reporting; distinct from property/owner ledgers | New competitor-researched service page; no payment authorization, tax conclusions or assurance claims | 2026-10-15 |
| Property Management Month-End Close Support | `/industries/property-management/month-end-close-support` | Property Management | Commercial recurring close preparation workflow: cutoff, cash/control reconciliations, tenant/owner/AP/AR review, accruals, deposit schedules, exceptions and owner-reporting handoff; distinct from the informational close checklist | No payment authority, accounting-policy decisions or final sign-off claims | 2026-10-15 |
| Property Management Trust Account Reconciliation Support | `/industries/property-management/trust-account-reconciliation` | Property Management | Commercial support intent for bank-to-book and applicable ledger tie-outs, exception tracking and review-ready workpapers; distinct from the informational trust-account guide | New competitor-researched service page; no legal compliance guarantee or fund authority | 2026-10-15 |
| Property Management Month-End Close Checklist: From Transactions to Owner Reports | `/blog/property-management-month-end-close-checklist` | Property Management | Transaction cutoff, reconciliations, tenant and owner ledgers, liability checks, reports and documented close review | Improved with exception-tracking workflow and links to owner-statement and security-deposit guides | 2026-10-12 |
| QuickBooks Month-End Close Checklist | `/blog/quickbooks-month-end-close-checklist` | Technology / QuickBooks | QuickBooks-specific bank reconciliations, AR/AP, adjustments, review and reporting sequence | Existing indexable guide added to sitemap and route inventory | 2026-10-12 |
| Real Estate Accounting Month-End Close | `/blog/real-estate-accounting-month-end-close` | Real Estate | Real-estate close sequence covering rent, AP/AR, accruals, reconciliations and owner reporting | Existing indexable guide added to sitemap and route inventory | 2026-10-12 |
| Yardi Accounting Workflow for Property Managers | `/blog/yardi-accounting-workflow` | Property Management / Yardi | Yardi workflow for rent posting, close, reconciliations, owner reporting and transaction review | Existing indexable guide added to sitemap and route inventory; distinct from the Texas Yardi commercial page | 2026-10-12 |
| Yardi Accounting Support for Property Managers | `/industries/property-management/yardi-accounting-support` | Property Management / Yardi | Commercial intent for property-management companies already using Yardi: transaction review, reconciliations, AP/AR schedules, property/entity ledger checks and month-end reporting preparation; distinct from the informational workflow guide, HOA Yardi page and Texas Yardi page | New GSC- and competitor-researched commercial spoke; scope limited to existing authorized setup | 2026-10-17 |
|---|---|---|---|---|---|

| HOA Accounting Transition Checklist: Changing Providers or Management Companies | `/blog/hoa-accounting-transition-checklist` | HOA Accounting | Provider handover, opening balances, owner ledgers, reserve records and first board package | New practical checklist | 2026-10-12 |
| HOA Year-End Accounting: Preparing Books for the CPA | `/blog/hoa-year-end-accounting` | HOA Accounting | Year-end reconciliations, homeowner receivables, payables, reserve activity, financial statements and CPA support files | Removed a duplicated year-end review checklist section and table | 2026-10-12 |
| HOA Annual Budget Preparation: A Practical Workflow | `/blog/hoa-annual-budget-preparation` | HOA Accounting | Prepare next year’s operating budget and reserve-funding draft from reconciled actuals, contracts, renewals, project assumptions and board review | New operational guide; distinct from budget-to-actual reporting | 2026-10-13 |
| HOA Special Assessment Accounting: Billing, Collections and Project Tracking | `/blog/hoa-special-assessment-accounting` | HOA Accounting | Approved one-time/installment assessment tracking from owner-level billing through receipts, receivables reconciliation, project-cost support and board reporting; distinct from routine assessment ledgers and reserve reconciliation | New competitor-researched practical workflow guide | 2026-10-13 |
| Property Management Owner Statements: A Reconciliation and Review Workflow | `/blog/property-management-owner-statements` | Property Management | Owner statement preparation, fee checks, reconciliations, reserve/liability review and documented approval | New practical workflow guide | 2026-10-12 |
| Property Management Accounts Payable: Invoice Coding and Approval Workflow | `/blog/property-management-accounts-payable` | Property Management | Vendor invoice intake, duplicate checks, property/entity coding, approvals, payment tracking and year-end record readiness | New practical workflow guide | 2026-10-13 |
| Property Management Security Deposit Accounting: A Practical Control Workflow | `/blog/property-management-security-deposit-accounting` | Property Management | Tenant-level deposit liability records, reconciliation, move-out review and jurisdiction boundaries | New practical workflow | 2026-10-12 |
| Property Management Accounting: A Practical Complete Guide | `/blog/property-management-accounting` | Property Management | Core accounting workflow, software, close, catch-up triage, owner distributions, vendor W-9 records, payment reconciliation, management-company books, accruals/prepayments, intercompany and lender-reserve schedules, payroll-related entries, CPA handoff and year-end 1099 preparation | Expanded with controlled vendor-record workflow, payment-population reconciliation, exception tracking, tax-review handoff and owner-report pre-issue review matrix; no standalone 1099 page created because the intent is adequately served here pending evidence of distinct demand | 2026-10-18 |
| CAM Reconciliation: A Practical Guide for Property Managers | `/blog/property-management-cam-reconciliation` | Property Management / Commercial Real Estate | Lease-specific recoverable expense pools, tenant allocation, estimate-to-actual true-ups and review controls; accounting preparation only, not lease interpretation | New practical workflow guide | 2026-10-12 |
| Property Management Chart of Accounts: Structure for Multi-Property Portfolios | `/blog/property-management-chart-of-accounts` | Property Management | Account structure, property/entity dimensions, intercompany balances and reporting consistency | GSC-led example table and metadata refresh | 2026-10-18 |
| Property Management Bank Reconciliation: Workflow and Trust-Account Controls | `/blog/property-management-bank-reconciliation` | Property Management | Bank reconciliation, exception review and applicable trust-account recordkeeping | Expanded with sourced three-way reconciliation guidance | 2026-10-12 |
| Outsourced Bookkeeping: What to Expect, Software Workflows, and Red Flags to Watch For | `/blog/outsourced-bookkeeping-guide` | Bookkeeping | Day-to-day workflow, red flags | Re-scoped | 2026-08-21 |
| How Much Does Outsourced Bookkeeping Cost? A Practical Guide | `/resources/guides/outsourced-bookkeeping-cost-guide` | Bookkeeping | Cost/pricing (has `CostEstimator` widget) | Stable | 2026-07-25 |
| 9 Questions to Ask Before Outsourcing Your Bookkeeping | `/resources/guides/questions-to-ask-before-outsourcing-bookkeeping` | Bookkeeping | Evaluation checklist | Stable | — |
| Outsourced Accounting Services: Month-End Close, Cost, GAAP vs IFRS, and QuickBooks to NetSuite | `/resources/guides/outsourced-accounting-services-guide` | Accounting Services | Close mechanics, standards, cost | Merged — see below | 2026-08-21 |
| Outsourced Payroll: Costs, Bank-Access Red Flags, and What to Watch Out For | `/blog/outsourced-payroll-services` | Payroll | Cost, bank-access line, pitfalls | Re-scoped | 2026-08-21 |
| Outsourced Payroll Processing: What It Actually Covers (US, UK & Australia) | `/resources/guides/outsourced-payroll-processing-guide` | Payroll | Coverage by jurisdiction | Stable | 2026-08-14 |
| Accounts Payable Outsourcing: Fraud Controls, Software Workflows, and Real Costs | `/blog/accounts-payable-outsourcing` | Accounts Payable | Fraud controls, operational detail | Re-scoped | 2026-08-21 |
| What Does Outsourced Accounts Payable Actually Include? | `/resources/guides/outsourced-accounts-payable-guide` | Accounts Payable | Control & authority framework | Stable | 2026-08-14 |
| Outsourcing Accounts Receivable: A Practical Guide for Business Owners | `/blog/accounts-receivable-management` | Accounts Receivable | General practical guide | Stable — differentiated from guide below | 2026-08-14 |
| Outsourced Accounts Receivable: DSO, Collections & Software Workflows | `/resources/guides/outsourced-accounts-receivable-guide` | Accounts Receivable | DSO/collections operational detail | Stable | 2026-08-14 |
| Tax Preparation Outsourcing for CPA Firms: Workflow, Software and Review Boundaries | `/blog/tax-preparation-outsourcing` | Tax Preparation | Buyer-journey overview; GSC-led title refinement for CPA-firm tax-preparation intent | GSC impression-page refinement | 2026-10-19 |
| U.S. CPA Firm Outsourcing Readiness Checklist: Tax Data, Access and Review Controls | `/blog/us-cpa-firm-outsourcing-readiness-checklist` | U.S. CPA Firm Outsourcing | Pre-engagement operational checklist for data safeguards, workpaper handoff, reviewer ownership and pilot evaluation; distinct from broad outsourcing overview and partner-selection guide | New practical guide; official IRS references included | 2026-10-13 |
| Audit Support Outsourcing: What Preparation Work Can Be Delegated (and What Cannot) | `/blog/audit-support-services` | Audit Support | Scope boundary | Stable | 2026-08-14 |
| How CPA Firms Can Handle Tax-Season Capacity Without Overhiring | `/resources/guides/staff-augmentation-tax-season-guide` | CPA Firms | Seasonal capacity | Stable | — |
| Client Accounting Services (CAS): A Guide for CPA Firms | `/resources/guides/client-accounting-services-cas-guide` | CPA Firms | Engagement-model education | Stable | — |
| How to Choose an Accounting Outsourcing Partner | `/resources/guides/how-to-choose-accounting-outsourcing-partner` | CPA Firms | Vendor evaluation | Stable | — |
| QuickBooks Online vs. Xero: Which Fits Your Business? | `/resources/guides/quickbooks-vs-xero-comparison` | Technology | Software comparison | Stable | — |
| ASC 606 Revenue Recognition for SaaS: A Quick Explainer | `/resources/insights/asc-606-revenue-recognition-saas` | Insights | Specialist explainer | Stable | — |
| Sales Tax Nexus: What E-Commerce Sellers Need to Track | `/resources/insights/sales-tax-nexus-ecommerce-guide` | Insights | Specialist explainer | Stable | — |
| Staff Augmentation vs. Dedicated Team vs. Offshore Support vs. Back Office: How to Choose | `/resources/guides/choosing-an-engagement-model` | Solutions | Comparison / decision framework | Published | 2026-08-21 |

## Resolved: Accounting Services blog/guide pair — merged

`/blog/outsourced-accounting-services` and `/resources/guides/outsourced-accounting-services-guide` overlapped at the paragraph level, not just the topic level (near-identical "what accounting operations covers" list, month-end close checklist, and GAAP/FRS 102/AASB summary). Flagged in the growth-system audit as needing an owner decision between merging or deepening/differentiating; the owner chose **merge**.

**Executed 2026-08-21:** The guide (`/resources/guides/outsourced-accounting-services-guide`) is the surviving URL — it was already the deeper, more technical page. Before removing the blog, its one genuinely unique section ("Cost Ranges" — the guide had no cost content at all) was ported into the guide as a new "What Does It Cost?" section, so no informational content was lost. `app/blog/outsourced-accounting-services/` was then deleted, and a permanent 301 redirect from `/blog/outsourced-accounting-services` to the guide was added in `next.config.mjs`. All internal links, the `/blog` listing, and `app/sitemap.ts` were updated to stop referencing the retired URL.

## Resolved gap: UK/AU payroll, AP, AR pages

The Growth System Audit (2026-08-21, §06) flagged that payroll, AP, and AR had no dedicated UK/AU pages while bookkeeping, tax preparation, and audit support did. Closed the same day: added `/services/payroll/{united-kingdom,australia}`, `/services/accounts-payable/{united-kingdom,australia}`, and `/services/accounts-receivable/{united-kingdom,australia}` — each with genuine regional detail (RTI/PAYE/NI/auto-enrolment and STP/superannuation/PAYG for payroll; input VAT/MTD/CIS and GST/ABN/RCTI for AP; GBP/VAT and AUD/GST invoicing for AR), not a find-and-replace of the U.S. page. Navbar, sitemap, and both market pages' service grids updated to point at the new pages instead of falling back to the generic overview. `/services/accounting` remains U.S.-only by design — no UK/AU page exists yet, and none was claimed in the navbar or market pages.

## Resolved gap: engagement-model comparison

Closed 2026-08-21: added `/resources/guides/choosing-an-engagement-model`, comparing the four `/solutions/*` pages (offshore accounting support, staff augmentation, dedicated accounting teams, back-office support) side by side — unit of engagement, best fit, typical duration — plus a decision framework and an honest note that the models blur in practice rather than presenting them as four rigid tiers. Cross-linked from all four solutions pages, the solutions index, and the "how to choose a partner" guide (which covers evaluating a provider generally, not choosing between models — kept distinct rather than merged).


## 2026-10-13 — San Diego County HOA accounting

Added `/industries/hoa-accounting/san-diego-county` as a county-specific commercial page beneath the existing California HOA page. It covers assessment and homeowner ledgers, operating/reserve reconciliations, board reporting, vendor approvals, and year-end CPA handover. The copy identifies San Diego County communities as service-area context while clearly stating that Accounstone provides remote support from India, not a local office or on-site management. Linked from the HOA hub and California HOA page; sitemap entry added. Competitor review informs topic coverage only and does not establish search volume or ranking opportunity.


## 2026-10-14 — HOA and property-management software workflow pages

Added three software-specific service pages to address distinct commercial intent without suggesting software implementation, vendor certification, or a formal partnership:

- `/industries/hoa-accounting/appfolio-accounting-support` — accounting workflow support for HOA/community-association teams already using AppFolio; linked from the HOA hub and included in the sitemap.
- `/industries/hoa-accounting/buildium-accounting-support` — accounting workflow support for HOA/community-association teams already using Buildium; linked from the HOA hub and included in the sitemap.
- `/industries/property-management/doorloop-accounting-support` — accounting workflow support for property managers already using DoorLoop; linked from the property-management hub and included in the sitemap.

These pages are not software setup or migration services. They focus on transaction preparation, reconciliations, reporting, owner/board review and documented handoffs inside the client's existing process. The separate San Diego County HOA page remains the geographic-intent page; software pages should not target county-level queries.

## 2026-10-14 — HOA and property-management accounting pages

Added five commercial pages with distinct intent and links from their relevant industry hubs:

- `/industries/hoa-accounting/los-angeles-county` — Los Angeles County HOA bookkeeping, reconciliations, board reporting and year-end handoff; geographic context only, not a local-office claim.
- `/industries/property-management/california` — California property-level books, tenant and deposit ledgers, owner statements and month-end support.
- `/industries/property-management/texas` — Texas property-management bookkeeping, tenant/rent ledgers, vendor payables and monthly close; remains distinct from the existing Texas Yardi-specific page.
- `/industries/property-management/accounting-cleanup` — non-geographic catch-up work for overdue books, unreconciled balances and ledger discrepancies.
- `/industries/property-management/general-ledger-reconciliation` — recurring reconciliation of property-management platform reports to the general ledger, with exceptions documented for client review.

The four property-management pages are linked from the property-management hub; the Los Angeles County page is linked from the HOA hub. Sitemap and AI-readable discovery references are maintained separately and must be validated from the final release checkout. These pages describe remote accounting preparation/bookkeeping support; client approval and payment authority remain with the client. Competitor research informs coverage but does not establish search volume or guarantee rankings.



## Reconciled additions — 2026-10-16

| Page | Canonical route | Intent | Scope |
|---|---|---|---|
| Accounting Support for Self-Managed HOAs | `/industries/hoa-accounting/self-managed-hoa-accounting` | Commercial service | Accounting-only support for self-managed associations; board retains vendor selection, approvals, banking control and legal decisions |

## 2026-10-18 — Los Angeles County HOA page intent refinement and query strategy

Refined `/industries/hoa-accounting/los-angeles-county` to remove low-value generic housing-statistics framing and an unneeded chapter membership statistic, then added a need-led section routing readers by recurring monthly close, catch-up/cleanup, assessment receivables and existing software. Added contextual links to existing HOA guides and AppFolio, Buildium, Yardi and eUnify service pages. No new public URL was created. The companion `docs/HOA-QUERY-TARGETING-STRATEGY.md` maps location × software × need queries, page ownership, internal-link rules and Search Console validation steps. Query examples are hypotheses, not claims of measured search volume.
| HOA Chart of Accounts: Example and Setup Guide | `/blog/hoa-chart-of-accounts` | HOA Accounting | Example account groups for operating/reserve cash, assessments, liabilities, income and expenses; setup guidance for condo associations | GSC-led example table and metadata refresh | 2026-10-18 |
| E-commerce Accounting Services for Online Retailers | `/industries/ecommerce` | E-Commerce | Multi-channel settlement reconciliation, fees/refunds/reserves, inventory/COGS records and channel reporting; tax decisions and filings remain with client's tax professional | Existing URL refined to match commercial search intent and clarify scope | 2026-10-20 |


## 2026-10-18 — Indexing cluster refinement

- Consolidated `/services/hoa-accounting` into the established `/industries/hoa-accounting` hub with a permanent redirect because both pages target substantially overlapping HOA accounting service intent. Replaced the hub's link to the redirected route with the informational HOA chart-of-accounts guide.
- Added a two-way discovery path from the technology hub to the existing HOA-specific and property-management-specific Yardi accounting support pages. Their workflow scopes remain distinct; no new URLs were created.
- Added a contextual link from the tax-preparation outsourcing guide to the existing Form 1065 and Schedule K-1 preparation page. The US tax preparation hub already links to that page.
- GSC inspection on 2026-10-18 showed the two Yardi support pages and Form 1065 page as “Discovered — currently not indexed” with no recorded crawl. These are crawl/discovery states, not confirmed rendering errors; recheck after recrawl. The legacy `/technology/yardi` redirect and HOA vendor-invoice canonical/redirect case should not be counted as independent indexable pages.


## 2026-10-18 — Upwork job-brief pathways and index-cluster links

Refined the existing /blog/upwork-vs-accounstone comparison page with a practical section that helps buyers translate a freelancer/job brief into a defined accounting scope. It routes readers to existing property-management cleanup, platform-to-ledger reconciliation, owner statement, lender reporting, HOA accounts payable and Form 1065 preparation pages. No new URL was created; GSC had no query rows containing “upwork” in the checked period, so public job posts are being used as qualitative task research rather than assumed keyword-volume evidence.

Added contextual links from the indexed /blog/yardi-accounting-workflow and /blog/hoa-accounting-yardi articles to their respective commercial Yardi support pages. Added related-workflow links on the Form 1065 page to the tax preparation guide, U.S. tax hub and CPA-firm hub. URL Inspection still reports the two Yardi support pages and Form 1065 page as not yet crawled; monitor after recrawl rather than claiming they are indexed.

## CPA workflow additions — release staging 2026-10-20

Staged six CPA-firm workflow pages: overflow work support, accounts payable outsourcing, California tax workpaper support, Texas bookkeeping cleanup, Florida property/entity accounting support, New York multi-entity accounting support, and Illinois inventory accounting support. The pages target distinct recurring workflow needs and preserve the CPA firm's client relationship and review responsibility. Sitemap inclusion is staged; full route/content validation and similarity review are still required before production release.
