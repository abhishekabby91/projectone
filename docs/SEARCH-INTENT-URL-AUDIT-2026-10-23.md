# Search-Intent URL Audit — First-Pass Dispositions
**Date:** 2026-10-23  
**Branch:** `accounstone-property-faqs-2026-10-23`  
**Scope:** Strategy and URL ownership review only. No public URLs are deleted, redirected, noindexed, or newly published by this audit.

## What the current evidence says

The repository's GSC snapshot (2026-07-21 to 2026-10-19) records:
- HOA terms overlap across the HOA hub, California, San Diego County, Texas and the legacy HOA service URL. The legacy URL was already redirected in source; its old impressions include pre-redirect data.
- “Property management accounting services” previously appeared mostly on the legacy service URL, which duplicated the current property-management hub and is already redirected in source.
- “Outsourced property management accounting” primarily appeared on `/industries/property-management`; the informational in-house-vs-outsourced article also appeared but serves a different comparison intent.
- Tax-preparation terms overlap between the U.S. commercial service page and the informational tax outsourcing guide; the current intent map deliberately separates service/provider intent from workflow/software/control information.
- The October 19 audit lists the main Property Management and HOA hubs as indexed and crawled in its then-current GSC URL Inspection snapshot. Those are historical statuses and must be rechecked after the staged branch is released.

These observations support stronger intent ownership and careful consolidation decisions. They do **not** justify mass-removing pages: the available report does not provide a full current URL-by-URL dataset for every software, county, state and workflow page.

## Priority page dispositions

| URL | First-pass decision | Reason and next action |
|---|---|---|
| `/industries/cpa-firms` | **Improve — priority 1** | Core intermediary buyer. Preserve outsourcing-partner positioning and explicit firm-retained review, judgement, client relationships and sign-off. Add a concise “industries your firm serves” section only if it helps explain workflow coverage; don't create industry pages under CPA just to list verticals. |
| `/industries/property-management` | **Improve — priority 1** | Main commercial owner for companies managing properties for owners. Keep tenant/property ledgers, owner statements, reconciliations, AP/AR, CAM and close central. Link supporting pages by specific job-to-be-done rather than repeating the hub pitch. |
| `/industries/hoa-accounting` | **Improve — priority 1** | Main commercial owner for associations and community managers. Keep assessments, homeowner ledgers, operating/reserve records, reconciliations and board packages distinct from property-manager workflows. Reduce navigational overload and make the most useful guides easy to find. |
| `/services/accounting/united-states` | **Improve after Tier 1** | General accounting service intent; must not copy industry-specific property/HOA detail. |
| `/services/bookkeeping/united-states` | **Improve after Tier 1** | General bookkeeping service intent. Clarify scope and link to relevant industries; don't compete with their workflow-specific pages. |
| `/services/tax-preparation/united-states` | **Keep commercial owner; improve as needed** | GSC snapshot shows 1,724 page impressions and position 66.0 (2026-07-21 to 2026-10-19). Keep provider/service intent here and informational workflow/control intent on `/blog/tax-preparation-outsourcing`. The 2026-10-19 audit already records this split as staged. |
| `/blog/tax-preparation-outsourcing` | **Keep as informational support** | GSC snapshot shows 1,540 impressions and position 27.0. It has stronger average visibility for some tax-outsourcing phrases than the commercial page, so preserve its useful informational role and link clearly to the commercial service page rather than duplicating sales copy. |
| `/industries/real-estate` | **Keep; clarify ownership** | Buyer owns property or investment entities. Do not merge with property management, whose buyer manages properties for third-party owners, or with HOA accounting. |
| `/industries/property-management/accounting-cleanup` | **Keep provisionally as a distinct problem page** | Backlog/catch-up and transition to recurring close is a distinct job-to-be-done if page content is genuinely specific. Compare its query rows and content against the hub before deciding whether it remains separate. |
| `/industries/property-management/general-ledger-reconciliation` | **Keep provisionally; verify overlap** | Retain only if it explains recurring property-platform-to-GL tie-outs and exception handling not covered adequately by the hub or cleanup page. Review query overlap and internal links. |
| `/industries/property-management/tenant-accounting-operations` | **Keep provisionally; verify demand** | Distinct operational intent around rent batches, payment application, tenant ledgers and exception handoff. Check unique content and URL-level query evidence before expanding this pattern. |
| `/industries/property-management/month-end-close-support` | **Keep provisionally; verify overlap** | Potentially distinct recurring close engagement, but must not duplicate the informational month-end checklist or general ledger reconciliation page. |
| `/industries/property-management/trust-account-reconciliation` | **Keep provisionally; high scope review** | Specific reconciliation workflow, but wording must not promise legal compliance, approve withdrawals or release funds. Check if search queries and page content justify a standalone service page. |
| `/industries/property-management/management-company-accounting` | **Hold for evidence review** | Company-level management fee revenue/intercompany books differ from property-owner ledgers, but do not expand until the actual service scope, unique content and query evidence are confirmed. |
| `/industries/property-management/lender-reporting-noi-support` | **Hold for evidence review** | Potentially distinct reporting need, but narrower intent and risk of implying lender/covenant advice. Confirm service capability, unique query evidence and useful deliverables before investing further. |
| `/industries/property-management/appfolio-accounting-california` | **Keep provisionally** | Software + state-qualified page can be distinct if it gives AppFolio-specific workflow support and useful California context. Do not create further state/software combinations by template. |
| `/industries/property-management/yardi-accounting-support` | **Keep provisionally** | Existing Yardi-specific workflow intent differs from the general hub and informational Yardi guide. Verify indexing and query data after release; do not assume the page is ranking. |
| `/industries/property-management/california`, `/industries/property-management/texas` | **Hold; audit before expanding or retiring** | State-qualified pages should remain only if they provide substantive, accurate state/portfolio context and have distinct queries. Do not assume state names alone create distinct intent. |
| HOA state/county pages, including California, Texas and San Diego County | **Hold; audit as a group** | The GSC snapshot showed broad HOA terms distributed across the hub and location pages. Keep only pages with distinct query intent, useful local context and internal-link purpose. Review backlinks and redirect equivalence before any removal. |
| HOA software-specific pages (AppFolio, Buildium, eUnify, Yardi) | **Hold; audit by software and buyer** | Retain where the association/community-management workflow differs meaningfully from property-management software use and content is original. Do not create location × software combinations without evidence. |
| CPA state pages (California, Texas, Florida, New York, Illinois) | **Hold; do not expand the matrix yet** | Some were indexed/crawled in the 2026-10-19 snapshot, while Florida CPA was a discovery gap. Indexing alone does not prove demand. Compare each page's query rows, impressions, unique value and SERP intent; keep the main CPA page as the first priority. |
| CPA white-label accounting and CAS production pages | **Keep provisionally; check distinct intent** | White-label concerns branding/communication boundaries; CAS production concerns recurring delivery workflows. Keep only if each adds distinct buyer value beyond the main CPA outsourcing page and general accounting services. |
| Retired `/services/property-management-accounting` and `/services/hoa-accounting` | **Keep redirects; verify production after release** | Existing audit records show these duplicate service routes were redirected to the canonical industry hubs in source. Don't restore them or create replacements. Confirm live redirects and sitemap removal after release. |
| `/technology/myob` | **Keep noindex as previously approved** | Existing GSC audit identifies implementation/product-research intent outside the service scope. Don't index it merely to chase old impressions. |

## Immediate implementation order

1. Audit and improve `/industries/cpa-firms`, `/industries/property-management`, and `/industries/hoa-accounting` without adding URLs.
2. Review page length, repeated sections, visual balance, mobile usability, CTA placement, internal links, metadata, FAQ/schema and claims on those three pages.
3. Export or retrieve URL-level GSC page/query rows for the current comparison period for all CPA, HOA and Property Management commercial URLs. Capture clicks, impressions, CTR, average position, top queries, canonical/indexing status and backlinks where available.
4. Make a disposition table for every state/county/software/workflow page: **keep / improve / merge / hold / retire after evidence review**.
5. Before any redirect or removal, verify equivalent destination, backlinks, inbound internal links, sitemap membership and current live status.
6. Build and production verification remain separate from content decisions. Do not claim deployment or ranking gains until verified.

## Measurement guardrails

- Competitor page existence is not keyword-volume proof.
- Site-wide GSC averages do not establish the value of an individual URL.
- Historical impressions for a redirected page include pre-redirect activity.
- “Indexed” does not mean the page is useful, distinct or ranking well.
- A page with low impressions may need more time or better internal links; low impressions alone are not a deletion instruction.
- No page count, exact-match keyword count or FAQ count is a success metric by itself. The goal is better intent match, qualified enquiries and less internal competition.
