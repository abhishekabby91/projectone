# Search-Intent Registry

One primary search intent → one primary URL. Check this file before creating any new page. If an intent already has an owner below, improve that page instead of creating a competitor — see `AI-WEBSITE-GUIDE.md` → "Content maturity rule" and the Growth System Audit (2026-08-21) §11 (Cannibalization Control).

| Search intent | Primary URL | Intent class |
|---|---|---|
| Outsourced bookkeeping services | `/services/bookkeeping/{region}` | Commercial |
| Outsourced bookkeeping cost | `/resources/guides/outsourced-bookkeeping-cost-guide` | Commercial investigation |
| What outsourced bookkeeping looks like day to day / red flags | `/blog/outsourced-bookkeeping-guide` | Informational |
| Questions to ask before outsourcing bookkeeping | `/resources/guides/questions-to-ask-before-outsourcing-bookkeeping` | Evaluation |
| Outsourced accounting services | `/services/accounting/{region}` | Commercial |
| Outsourced accounting services — cost / month-end close / what's included / GAAP vs IFRS / QuickBooks→NetSuite | `/resources/guides/outsourced-accounting-services-guide` | Informational (deep) — merged 2026-08-21, see CONTENT-REGISTRY |
| Outsourced payroll processing | `/services/payroll/{region}` | Commercial |
| Outsourced payroll — coverage by jurisdiction (US/UK/AU) | `/resources/guides/outsourced-payroll-processing-guide` | Informational |
| Outsourced payroll — cost, bank-access, watch-outs | `/blog/outsourced-payroll-services` | Commercial investigation |
| Accounts payable outsourcing | `/services/accounts-payable/{region}` | Commercial |
| What outsourced AP includes / control & authority | `/resources/guides/outsourced-accounts-payable-guide` | Informational |
| AP fraud controls, software workflows, real costs | `/blog/accounts-payable-outsourcing` | Informational (operational) |
| Accounts receivable outsourcing — practical guide | `/blog/accounts-receivable-management` | Informational |
| Accounts receivable — DSO, collections, software workflows | `/resources/guides/outsourced-accounts-receivable-guide` | Informational (operational, differentiated — no conflict) |
| Tax preparation outsourcing | `/services/tax-preparation/{region}` | Commercial |
| Outsourcing tax return preparation — what to know | `/blog/tax-preparation-outsourcing` | Informational |
| Audit support outsourcing | `/services/audit-support/{region}` | Commercial |
| What audit prep work can be delegated | `/blog/audit-support-services` | Informational |
| CPA firm outsourcing / capacity support | `/industries/cpa-firms` | Commercial (Tier-1 audience) |
| Staff augmentation during tax season | `/resources/guides/staff-augmentation-tax-season-guide` | Informational |
| Client Accounting Services (CAS) for CPA firms | `/resources/guides/client-accounting-services-cas-guide` | Informational |
| How to choose an accounting outsourcing partner | `/resources/guides/how-to-choose-accounting-outsourcing-partner` | Evaluation |
| Staff augmentation vs. dedicated team vs. offshore vs. back-office | `/resources/guides/choosing-an-engagement-model` | Comparison |
| QuickBooks vs. Xero | `/resources/guides/quickbooks-vs-xero-comparison` | Comparison |
| ASC 606 revenue recognition for SaaS | `/resources/insights/asc-606-revenue-recognition-saas` | Informational (specialist) |
| Sales tax nexus for e-commerce | `/resources/insights/sales-tax-nexus-ecommerce-guide` | Informational (specialist) |

## Rule for adding a row

1. Search this table for the intent first.
2. If a close match exists, ask: does the new page genuinely serve a different intent, or the same one with a different keyword? If the same intent, improve the existing URL instead.
3. Only add a new row (and page) when the intent is genuinely unserved.
4. Two rows should never target the same primary intent without an explicit differentiation note (see the Payroll and AP rows above for the pattern).

## Regional authority vs. commercial intent (added 2026-08-27)

The distinction below is the one the restructure exists to protect. A Market page answers
"how does accounting work in this country"; a Service x Region page answers "who can do
this specific work for me there". Measured overlap between the two is 0.0%.

| Search intent | Primary URL | Intent class |
|---|---|---|
| Registering / forming a company in the US, and what follows it | `/company-registration` | Commercial — cluster hub |
| Registering in a specific state (Delaware, Wyoming, Nevada) | `/company-registration/{state}` | Commercial — state detail |
| How accounting/tax/payroll works in the US (IRS, GAAP, state, nexus) | `/markets/united-states` | Informational — regional authority |
| How accounting/tax/payroll works in the UK (HMRC, VAT, MTD, PAYE, Companies House) | `/markets/united-kingdom` | Informational — regional authority |
| How accounting/tax/payroll works in Australia (ATO, GST, BAS, PAYG, STP, super) | `/markets/australia` | Informational — regional authority |
| Outsourced {service} in {region} | `/services/{service}/{region}` | Commercial |
| VAT return preparation under MTD, for UK practices | `/markets/united-kingdom/vat-returns` | Commercial — cycle detail |
| Year-end accounts preparation (FRS 102/105, Companies House) | `/markets/united-kingdom/year-end-accounts` | Commercial — cycle detail |
| BAS preparation and GST-coded records, for Australian firms | `/markets/australia/bas-preparation` | Commercial — cycle detail |
| All services, choose by region | `/services` | Commercial — navigational |

**Do not** write service scope onto a Market page, and do not write country-environment
explainers onto a Service x Region page. That collapse is what produces doorway pages.

## Cycle-detail pages under a market (added 2026-09-09)

The US had three sub-market pages and the UK and Australia had none, so the two
markets the site sells into hardest carried less surface area than the domestic
one. The three rows above close that, and they are scoped by a rule that keeps
them off the market page's intent:

**A market page covers the whole year across every cycle at one level of detail.
A cycle page covers ONE cycle at the level of the ledger** — what is decided at
the point of posting, and what it costs when it is decided at the deadline
instead. If a second cycle starts appearing on a cycle page, it belongs on the
market page.

The cycle each market runs on is not a choice; both knowledge files name it.
`knowledge/markets/uk.md`: "VAT registration and reporting is the primary
recurring compliance cycle for most SME clients." `knowledge/markets/au.md`:
"GST and BAS (Business Activity Statement) reporting is the primary recurring
compliance cycle." Do not add a cycle page for something neither file calls a
recurring cycle.

**Every one of these pages routes submission to the licensed party, and that
party differs by market** — the registered practitioner in the UK, the
registered BAS or tax agent in Australia. `components/depth-block.tsx` takes
`boundaryHeading` for exactly this reason; "your CPA" is US phrasing and is
wrong in both.
