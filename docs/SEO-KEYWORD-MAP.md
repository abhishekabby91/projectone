# Accounstone SEO keyword and page-targeting map

Status: working editorial map, created 2026-10-09. This is a qualitative intent map, not a claim about search volume or ranking difficulty. Validate demand with keyword research and actual Search Console data when available; do not invent volume estimates.

## Purpose and rules

Competitor service-page patterns are recorded separately in [`COMPETITOR-SEO-BENCHMARK.md`](./COMPETITOR-SEO-BENCHMARK.md). That file is a qualitative review of public pages surfaced in searches, not a verified ranking report or a source for unsubstantiated claims.

- Main commercial market: United States. Keep relevant UK and Australian service/market pages; do not force US language onto them.
- Delivery location: New Delhi, India. Describe this accurately as the delivery base, not as the target market for US services.
- Give each indexable URL one primary search intent and a small set of close supporting terms. A page can rank for related variants; do not create a page for every wording variation.
- Do not make location pages that only swap a city/state name. A location page needs real local context, relevant services, and a reason to exist.
- Do not add a city to every title or paragraph. Use location wording where it matches intent and is supported by the actual page.
- Do not optimize two pages for the same main query unless the intent differs. Link related pages to one another and make the difference clear.
- Never promise rankings. On-page improvements improve clarity and eligibility; rankings depend on many factors, including competition, usefulness, authority, crawl/index status and search intent.
- Do not add a meta-keywords tag. It is not a meaningful Google ranking tactic.
- Keep metadata concise and specific; the title should describe the page rather than repeat every keyword.

## SEO and AEO are separate workstreams

### SEO workstream
1. Confirm URL is canonical, indexable, in sitemap, and not redirected.
2. Assign primary intent and keyword family.
3. Align title, H1, opening copy, useful subheadings, internal links, image alt text where descriptive, and page content.
4. Check overlap/cannibalization and link the page from relevant hubs.
5. Improve content only where it adds useful, accurate detail.
6. Measure impressions, clicks, query fit, conversions and indexing when data is available.

### AEO workstream
1. State the direct answer early when a page is answering a question.
2. Use specific, descriptive headings and define technical terms in plain language.
3. Add FAQs only when they answer genuine questions not already fully answered; keep visible FAQ text aligned with any FAQ structured data.
4. Make business identity, services, markets, software and engagement boundaries consistent across pages.
5. Validate structured data against visible page content; use relevant schema only, not schema as a ranking trick.
6. Keep important information in crawlable page text; do not rely only on images or interactive controls.
7. Maintain `llms.txt` and `llms-full.txt` as optional reference files for systems that use them, not as a Google ranking requirement.

## Commercial page map

| URL / page | Primary intent / keyword family | Supporting terms and page distinction |
|---|---|---|
| `/` | accounting, bookkeeping and tax outsourcing | outsourcing for CPA/accounting firms and businesses; India-based delivery. Broad company page, not a deep page for one industry or state. |
| `/services` | outsourced accounting services | service overview and links to individual service/market pages. |
| `/solutions/offshore-accounting-support` | offshore accounting support | offshore bookkeeping, accounting support team; explain delivery model rather than compete with every service page. |
| `/solutions/staff-augmentation` | accounting staff augmentation | accounting staffing support, temporary accounting capacity; distinct from a managed recurring workflow. |
| `/solutions/dedicated-accounting-teams` | dedicated accounting team outsourcing | dedicated offshore accounting team; only target this phrase if the offer and page accurately describe the model. |
| `/solutions/back-office-support` | accounting back-office support | AP/AR and recurring accounting administration. |
| `/services/bookkeeping/united-states` | US bookkeeping outsourcing | outsourced bookkeeping for US CPA firms/businesses, bank reconciliation, month-end close. |
| `/services/accounting/united-states` | US accounting outsourcing | accounting operations, close, reconciliations, reporting support. |
| `/services/tax-preparation/united-states` | US tax preparation outsourcing | tax return preparation support for accounting/CPA firms; link to 1040 and 1065 pages. Avoid claiming services not actually delivered. |
| `/services/tax-preparation/united-states/1040-individual` | Form 1040 tax preparation support | individual return workpapers, source documents, review workflow. Keep narrower than the parent tax page. |
| `/services/tax-preparation/united-states/1065-partnership` | Form 1065 partnership tax preparation support | partnership return preparation workflow and supporting schedules. |
| `/services/payroll/united-states` | US payroll processing support | payroll accounting, reconciliations, payroll reports. Do not imply HR/legal advice. |
| `/services/accounts-payable/united-states` | US accounts payable outsourcing | invoice processing, coding, approvals tracking, vendor reconciliation. |
| `/services/accounts-receivable/united-states` | US accounts receivable outsourcing | invoicing, cash application, AR aging and reconciliation. |
| `/services/audit-support/united-states` | US audit support services | audit schedules, PBC documentation and evidence preparation; do not imply audit opinions. |
| `/industries/cpa-firms` | accounting outsourcing for CPA firms | CPA firm outsourcing, accounting production support, tax preparation support, busy-season capacity. |
| `/industries/real-estate` | real estate accounting outsourcing | real estate bookkeeping, property/entity-level books, owner/investor reporting, lender reporting. Do not absorb property-management or HOA intent. |
| `/industries/property-management` | property management accounting outsourcing | property manager bookkeeping, owner statements, tenant/deposit ledgers, CAM recovery and close. |
| `/industries/hoa-accounting` | HOA accounting and bookkeeping outsourcing | community association accounting, HOA bookkeeping, board reporting, reserve/operating funds. |
| `/industries/technology` | accounting support for technology/SaaS businesses | SaaS accounting operations, subscription reconciliations and reporting preparation. |
| `/industries/ecommerce` | ecommerce bookkeeping and accounting | marketplace settlements, sales-channel reconciliation, AP/AR. |
| `/industries/healthcare` | healthcare bookkeeping/accounting support | keep claims aligned with the actual page and the client types served. |
| `/industries/professional-services` | professional services bookkeeping/accounting | recurring books, client-related ledgers, WIP and reporting preparation. |
| `/technology/quickbooks-online` and other software pages | accounting support in named software | Target the platform + accounting workflow only where content demonstrates actual experience; do not claim reseller/certification status. |
| `/markets/united-states` | accounting outsourcing for US businesses and CPA firms | national-market overview; link to US services, relevant industries and real state pages. |
| `/markets/united-kingdom` | accounting outsourcing for UK accountancy practices | UK terminology and service scope; do not reuse US tax language. |
| `/markets/australia` | accounting outsourcing for Australian businesses/accounting firms | Australian terminology and local tax/BAS pages; do not reuse US/UK language. |

## Location targeting rules

Existing state pages should have distinct purposes and locally relevant information:

| URL | Recommended keyword family | Required content standard |
|---|---|---|
| `/markets/united-states/texas` | accounting and bookkeeping services for Texas businesses | Useful Texas-specific context, accurate state requirements, named metro references only where serviceable and meaningful. Do not imply a Texas office. |
| `/markets/united-states/california` | accounting/bookkeeping support for California businesses | California-specific content that is accurate and not a copy of Texas. |
| `/markets/united-states/florida` | accounting/bookkeeping support for Florida businesses | Florida-specific content that is accurate and not a copy of Texas or California. |
| `/industries/real-estate/yardi-accounting-outsourcing-texas` | Yardi accounting outsourcing in Texas | A focused software + industry + location page. Avoid copying the general real-estate page. |

The location page is about supporting clients in that market, not claiming a local office. If the page cannot provide useful, verified local context, keep the broader national page instead of publishing thin location pages. Add further state/city pages only after validating demand and writing genuinely distinct content.

## HOA blog keyword map

These articles should attract informational searches and feed relevant readers to the HOA service page and related guides. The target phrase is a topic guide, not a claim that it has a particular volume.

| Article URL slug | Primary topic / query intent | Keep distinct from |
|---|---|---|
| `eunify-quickbooks-hoa-accounting` | eUnify QuickBooks integration/reconciliation for HOA accounting | General eUnify workflow page |
| `hoa-accounting-appfolio` | HOA accounting workflow in AppFolio | Property-management AppFolio accounting |
| `hoa-accounting-cleanup` | when/how to clean up HOA accounting books | Routine month-end close |
| `hoa-accounting-controls` | HOA accounting controls and approvals | General accounting mistakes |
| `hoa-accounting-eunify` | HOA accounting workflow and reviews in eUnify | eUnify–QuickBooks integration |
| `hoa-accounting-mistakes` | common HOA accounting mistakes | Cleanup engagement |
| `hoa-accounting-month-end-checklist` | HOA month-end accounting checklist | General workflow overview |
| `hoa-accounting-outsourcing-vs-in-house` | HOA accounting outsourcing vs in-house | Service landing page; informational comparison |
| `hoa-accounting-quickbooks` | HOA accounting workflow using QuickBooks | QuickBooks Online-specific setup |
| `hoa-accounting-workflow` | HOA accounting workflow from transaction to close | Month-end checklist |
| `hoa-accounting-yardi` | HOA accounting in Yardi | General property management Yardi workflows |
| `hoa-accounts-payable` | HOA accounts payable and vendor invoice workflow | Vendor expense classification |
| `hoa-accounts-receivable-aging` | HOA accounts receivable aging and delinquency schedules | Homeowner ledger and unapplied payments |
| `hoa-assessment-accounting` | HOA assessment accounting and recognition | Assessment receivable reconciliation |
| `hoa-assessment-receivables-reconciliation` | reconciling HOA assessment receivables | Assessment accounting principles |
| `hoa-balance-sheet-explained` | how to read an HOA balance sheet | Income statement and board package |
| `hoa-bank-reconciliation` | HOA bank reconciliation process | Full month-end close checklist |
| `hoa-board-financial-package` | HOA board financial package contents | Financial statement interpretation |
| `hoa-bookkeeping-vs-accounting` | HOA bookkeeping vs accounting | General service page |
| `hoa-budget-to-actual-reports` | HOA budget vs actual reporting | Board package overview |
| `hoa-cash-vs-accrual-accounting` | HOA cash vs accrual accounting | Balance sheet/income statement explainers |
| `hoa-chart-of-accounts` | HOA chart of accounts | Full accounting workflow |
| `hoa-financial-statements-board-review` | HOA financial statement review for boards | Board package contents |
| `hoa-homeowner-ledgers` | HOA homeowner ledger accuracy | AR aging and unapplied payments |
| `hoa-income-statement-explained` | HOA income statement explained | Balance sheet guide |
| `hoa-maintenance-expense-accounting` | HOA maintenance expense accounting/tracking | General vendor expense tracking |
| `hoa-operating-vs-reserve-funds` | HOA operating vs reserve funds | Reserve accounting procedures |
| `hoa-quickbooks-online` | HOA accounting setup/workflow in QuickBooks Online | Broad QuickBooks accounting page |
| `hoa-reserve-accounting` | HOA reserve fund accounting | Reserve expenses, reconciliation and reporting |
| `hoa-reserve-expenses` | tracking HOA reserve-funded expenses | Reserve accounting principles |
| `hoa-reserve-financial-reporting` | HOA reserve financial reporting | Reserve transaction reconciliation |
| `hoa-reserve-reconciliation` | HOA reserve account reconciliation | Reserve reporting |
| `hoa-unapplied-payments` | HOA unapplied homeowner payments | AR aging and homeowner ledger |
| `hoa-vendor-1099-tracking` | HOA vendor 1099 tracking | AP processing; tax specifics must be verified |
| `hoa-vendor-expense-tracking` | HOA vendor expense tracking and coding | Maintenance-specific costs |
| `hoa-year-end-accounting` | HOA year-end accounting checklist | Month-end checklist |
| `how-to-outsource-hoa-accounting` | how to outsource HOA accounting | Commercial HOA service page |

## Internal linking rules

- Homepage -> service, solution, market and key industry hubs using descriptive natural anchor text.
- Industry landing page -> its related service/software guides and a relevant contact path.
- US market page -> US service pages and truly relevant state/industry pages.
- State page -> national US page, relevant service page and local-context page(s); avoid a list of every URL.
- HOA articles -> HOA service landing page when contextually appropriate, plus 1–3 closely related articles. Do not force the commercial CTA into every paragraph.
- Use final canonical URLs, not redirect source URLs.
- Avoid sitewide links that make every page compete for every term.

## Review checklist for every page

- [ ] Unique primary intent and keyword family assigned.
- [ ] Title accurately describes the page and includes the main concept naturally.
- [ ] One clear H1 matching the page purpose.
- [ ] Opening section explains the page's specific value and audience.
- [ ] Main content answers the intent, with accurate examples and no unsupported claims.
- [ ] Description is useful and not keyword-stuffed.
- [ ] Canonical, indexability, sitemap and redirects agree.
- [ ] Internal links use final URLs and descriptive anchors.
- [ ] Schema is valid and matches visible content.
- [ ] Mobile layout and page performance checked.
- [ ] No thin location variants or duplicated sections.
