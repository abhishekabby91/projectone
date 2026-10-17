# Outsourcing Page Opportunity Research — 17 October 2026

## Scope and method

This is a research note only. It does not create, edit, or redirect any website landing page. The proposed next steps are based on Google Search Console Web data for **18 July–16 October 2026**, a current route/content-registry review, and current competitor service pages. GSC impressions and average positions are observed site performance, not estimated search volume. The same query can appear against more than one URL.

The current branch is `safe-technical-seo-oct17`; do not merge or deploy to production as part of this research.

## Summary decision

1. **First new commercial page candidate:** `/industries/property-management/yardi-accounting-support`.
2. **Second new page candidate, after validating exact scope:** a corporate tax-return preparation outsourcing page under `/services/tax-preparation/united-states`, covering Forms 1120 and 1120-S if the delivery team confirms this is an active service.
3. **Improve existing pages before adding overlapping URLs:** US tax preparation, accounts payable, accounts receivable, staff augmentation, offshore accounting support, and the property-management hub.
4. **Do not add yet:** a separate CPA-firm tax outsourcing page, a generic HOA accounting page, or additional software pages with no clear GSC evidence. First optimize existing pages and confirm a genuinely distinct search intent.

## GSC evidence

### Property management / Yardi

| Query | Impressions | Average position | Interpretation |
|---|---:|---:|---|
| `outsourced accounting for Yardi Voyager` | 11 | 15.4 | Strongest specific Yardi outsourcing signal; already near page 2 |
| `Yardi outsourced support` | 6 | 28.8 | Related operational support intent |
| `Yardi bookkeeping services` | 7 | 64.3 | Service intent exists but is weakly served |
| `Yardi accounting support for property managers` | 3 | 39.7 | Explicit manager audience |

There is no existing `/industries/property-management/yardi-accounting-support` route. Existing Yardi pages target different intents: `/industries/hoa-accounting/yardi-accounting-support` targets HOA/community associations, while `/industries/real-estate/yardi-accounting-outsourcing-texas` is a Texas-specific real-estate page. The property-management hub currently links to the Texas Yardi page and to a general Yardi workflow article. A new software-specific commercial page for property managers would close a real audience/location gap without replacing either existing URL.

Competitor evidence:
- REA has a dedicated [Yardi bookkeeping and accounting service page](https://rea.co/yardi/) focused on property managers/owners and workflows such as reconciliations, AP/AR, owner reporting and operating within the client's Yardi environment.
- WPM Accounting has a separate [Yardi property-management accounting page](https://www.wpmaccounting.com/yardi-property-management-accounting-services) for AP/AR, bank reconciliations, owner statements and reporting.

**Recommendation:** draft this page first. Keep it about accounting preparation within a client's existing Yardi workflow. Do not imply software implementation, configuration, vendor certification, technical help-desk coverage or a Yardi partnership. Keep RentCafe website development scope separate from accounting scope.

### U.S. tax outsourcing / CPA firms

GSC is showing a meaningful cluster for tax outsourcing, but existing pages already serve much of the intent:

| Query | Impressions | Average position |
|---|---:|---:|
| `outsource tax preparation services` | 107 | 72.2 |
| `outsourcing tax preparation` | 80 | 63.5 |
| `outsourcing tax preparation services` | 40 | 67.0 |
| `outsourced tax preparation for CPA firms` | 27 on the U.S. tax page; 69 overall in GSC | 73.6 on the U.S. tax page |
| `tax preparation outsourcing for CPA firms` | 72 overall | 45.6 overall |
| `tax outsourcing for CPA firms` | 59 overall | 32.8 overall |
| `corporate tax outsourcing` | 32 on the U.S. tax page; 68 overall in GSC | 84.2 on the U.S. tax page; 55.4 overall |

Current relevant URLs include:
- `/services/tax-preparation/united-states` — already receives many outsourcing-related impressions (the URL has had 1,597 impressions in the same 90-day window, average position 66.7).
- `/industries/cpa-firms` — the broader CPA-firm capacity/outsource support page.
- `/blog/tax-preparation-outsourcing` — informational buyer guide.
- `/blog/us-cpa-firm-outsourcing-readiness-checklist` — operational checklist.
- `/services/tax-preparation/united-states/1040-individual` and `/services/tax-preparation/united-states/1065-partnership` — existing return-type spokes.

Competitor evidence:
- QX has a dedicated [tax preparation outsourcing page for U.S. CPA firms](https://qxaccounting.com/usa/service/tax-preparation-outsourcing-services/) and a separate [accounting outsourcing service page](https://qxaccounting.com/usa/service/accounting-outsourcing-services/). The tax page differentiates return preparation, supported software, workflow, review and engagement model rather than creating one page per keyword variant.
- TCB positions tax, audit and accounting outsourcing directly for U.S. CPA firms: [TCB Accounting](https://www.tcbacs.com/).

**Recommendation:** do not immediately create another generic “tax outsourcing for CPA firms” URL. First strengthen the existing U.S. tax page for outsourcing language, tax-software workflows, scope boundaries, review handoff and links to 1040/1065. The current page-query mapping shows most of the generic tax-outsourcing terms on the U.S. tax page, so a second CPA-tax page risks overlap unless SERP/query analysis establishes a meaningfully distinct intent.

### Corporate tax returns (Forms 1120 / 1120-S)

There is a separate corporate tax outsourcing query cluster (`corporate tax outsourcing`: 68 impressions overall; `corporate tax outsourcing services`: 5; `corporate tax outsourcing consulting`: 6). Queries specifically containing 1120 and 1120-S are individually smaller, but both forms are already in the site's broad U.S. tax-preparation topic space. This creates a potential return-type gap because the current U.S. tax service has dedicated children for 1040 and 1065 but not a corporate-return child.

**Recommendation:** consider one corporate tax-return outsourcing page under the U.S. tax-preparation cluster, not several near-duplicate form pages. Before drafting, confirm the current service scope for Forms 1120 and 1120-S. Use a proposed slug such as `/services/tax-preparation/united-states/corporate-tax-returns`. Keep it focused on tax-preparation workpapers and preparation workflow for the firm's review; do not claim Accounstone independently provides tax planning, professional sign-off or filing authority.

Competitor reference: QX's [tax-preparation outsourcing page](https://qxaccounting.com/usa/service/tax-preparation-outsourcing-services/) explicitly lists Form 1120 and 1120-S among supported return types. That is evidence of market page structure, not proof of Accounstone's own delivery scope.

## Existing pages to strengthen instead of duplicating

| Priority | Existing URL | GSC signal | Recommended action |
|---|---|---|---|
| High | `/services/accounts-payable/united-states` | `accounts payable outsourcing`: 118 impressions, position 64.1; `accounts payable outsourcing services`: 70 on this URL, position 81.6; `accounts payable outsourcing companies`: 36, position 74.6 | Improve the existing commercial landing page first. Differentiate the blog guide as informational (fraud controls, operational workflow, costs); do not create another generic AP page. |
| High | `/services/accounts-receivable/united-states` | `accounts receivable outsourcing`: 19 impressions on this URL, position 71.8; `accounts receivable outsourcing services`: 26, position 71.3 | Improve the current service page and review its relationship to the existing AR guide before adding new URLs. |
| High | `/solutions/staff-augmentation` | `accounting staff augmentation`: 175 impressions on this URL, position 40.6; `accounting staff augmentation services`: 22, position 26.4; `finance staff augmentation`: 86 overall | Refresh the existing page and improve supporting internal links. A separate CPA-only page should wait until its intent is clearly distinct from both this page and `/industries/cpa-firms`. |
| High | `/services/tax-preparation/united-states` | Many variations of “outsource tax preparation”; 1,597 page impressions in the 90-day window, average position 66.7 | First improve the current page; review query groups, title/description, return-type navigation and links to the 1040/1065 pages. |
| Medium | `/solutions/offshore-accounting-support` | `offshore accounting solutions`: 51 impressions, position 64; `offshore accounting support`: 47, position 59.5 | Improve existing positioning and internal links. Do not create another generic offshore support page. |
| Medium | `/industries/property-management` | `outsourced property management accounting`: 18 impressions on the page, position 62.8; related general terms have mostly low positions | Continue improving the commercial hub and specialist pages; the new Yardi spoke is a distinct software-specific addition. |

## Lower-confidence future candidates

### Community association management company accounting
City Books focuses exclusively on community association management companies and positions its work around timely financial packages, reserve accounting, assessment tracking and audit-ready bookkeeping: [City Books](https://citybooksfinancials.com/). This is a potentially distinct audience compared with an HOA board/self-managed association.

However, Accounstone's existing HOA industry page already names community management companies and the GSC results for HOA accounting are currently small (for example, `hoa accounting`: 6 impressions and `hoa accounting services`: 7). **Do not add this page yet.** Review actual query/SERP demand and determine whether the buyer intent is distinct enough from `/industries/hoa-accounting`.

### Further property-management software pages
The site already has AppFolio-in-California, Buildium, DoorLoop and Texas Yardi routes, as well as the general property-management accounting guide. The current GSC evidence is strongest for Yardi; it does not yet justify creating pages for every property platform. Add another software page only when (a) the platform is genuinely supported, (b) the accounting job differs enough to deserve its own landing page, and (c) query or competitor evidence supports demand.

The current property-management hub also already distinguishes RentCafe website development from accounting support. Keep that scope separate; do not position it as Yardi technical or accounting software support.

## Proposed sequence

1. **Draft the property-management Yardi accounting support page** and register it in the sitemap, route/content/search-intent registries, and AI-readable references in the same branch.
2. **Improve the existing AP/AR, U.S. tax-preparation and staff-augmentation pages** before creating overlapping alternatives.
3. **Validate scope, then draft the corporate tax-return outsourcing page** if Forms 1120 and 1120-S are active delivery offerings.
4. Revisit a distinct CPA-tax page or a community-association-management-company page only after intent mapping shows that an existing canonical URL cannot adequately serve the query.
5. After drafting, run the established route/content checks, validate metadata/canonical/schema/sitemap/linking, and inspect the preview build. Do not merge or deploy to production as part of research.

## Sources reviewed (17 October 2026)

- GSC property: `sc-domain:accounstone.com`; Web search data, 18 July–16 October 2026.
- [QX — Tax Preparation Outsourcing Services for U.S. CPA Firms](https://qxaccounting.com/usa/service/tax-preparation-outsourcing-services/)
- [QX — Accounting Outsourcing Services in the USA](https://qxaccounting.com/usa/service/accounting-outsourcing-services/)
- [REA — Yardi Bookkeeping Services for Property Managers](https://rea.co/yardi/)
- [WPM Accounting — Yardi Property Management Accounting Services](https://www.wpmaccounting.com/yardi-property-management-accounting-services)
- [City Books — Community Association Accounting](https://citybooksfinancials.com/)
- Existing repository route, content and search-intent registries on `main`.
