# HOA content consolidation audit — October 2026

## Scope and limitation

This review covers the 41 HOA-related blog routes currently identified under `app/blog/`, the HOA industry page, and the three HOA service pages. It is a content-overlap audit, not a verified ranking audit: the connected Google Search Console account can list `sc-domain:accounstone.com` but does not currently have permission to retrieve its Search Analytics data. Do not redirect or delete URLs until page-level clicks, impressions, queries, and position have been reviewed.

## Competitor patterns observed

Research reviewed public pages from HOA Accounting Services, Community Financials, HOA Fiscal, RowCal, and other HOA accounting providers. Common useful patterns:
- Lead with the exact accounting task or board question.
- Show what the monthly package contains: balance sheet, income/expense vs budget, bank reconciliations, receivables aging, payables, and reserve activity where relevant.
- Explain the practical review steps, not just why accounting matters.
- Separate bookkeeping/accounting tasks from board decisions, collection/legal actions, CPA work, and jurisdiction-specific obligations.
- Use short headings, checklists, and clear examples. Avoid unsupported universal deadlines, percentages, legal claims, and claims about software capabilities.

Sources consulted:
- https://hoa-accounting.com/about/services/
- https://communityfinancials.com/services/
- https://www.hoafiscal.com/blog/monthly-hoa-financial-reports
- https://www.rowcal.com/news/hoa-management-accounting-monthly-financials/
- https://www.hoafiscal.com/blog/hoa-financial-statements-explained/

These are editorial examples, not proof that a page currently ranks in Google.

## Candidate consolidation groups

### High-overlap candidates — compare GSC before redirecting
1. `/blog/hoa-accounting-month-end-checklist` + `/blog/hoa-monthly-close-process`
   - Both cover reconciliations, assessments, AR, AP, reserves, budget-to-actual, board reporting, and open items.
   - Likely primary intent: practical HOA month-end close checklist.
   - Proposed action: merge into one thorough guide only after identifying which URL has stronger search signals and checking backlinks/internal links.

2. `/blog/hoa-year-end-accounting` + `/blog/hoa-year-end-checklist`
   - Both cover cash reconciliations, owner balances, payables, reserves, statements, and CPA support.
   - Likely primary intent: HOA year-end accounting preparation checklist.
   - Proposed action: keep the more valuable URL; integrate useful unique details from the other page, then redirect only after GSC and backlink checks.

3. `/blog/hoa-accounting-quickbooks` + `/blog/hoa-quickbooks-online`
   - Likely overlap around chart of accounts, fund tracking, homeowner records, reconciliation, and reporting.
   - Proposed action: compare exact copy and query intent. Keep separate only if one clearly addresses HOA accounting workflow and the other provides specific QuickBooks Online setup/use guidance.

4. `/blog/hoa-accounts-payable` + `/blog/hoa-vendor-invoice-processing`
   - Both address invoices, coding, approvals, duplicates, payment status, and vendor balances.
   - Proposed action: consolidate if query data does not show distinct intent; retain invoice-processing details in the merged guide.

5. `/blog/hoa-accounts-receivable-aging` + `/blog/hoa-delinquency-accounting`
   - Both address overdue assessments and aging.
   - Proposed action: consider one receivables-aging guide. Keep accounting records separate from board-approved collection decisions and legal steps.

6. `/blog/hoa-vendor-expense-tracking` + `/blog/hoa-maintenance-expense-accounting`
   - Both concern vendor/maintenance expense classification and reporting.
   - Proposed action: merge only if each lacks a distinct search intent or useful unique content.

### Keep separate pending stronger evidence
- `/blog/hoa-assessment-accounting`: assessment charges and accounting treatment.
- `/blog/hoa-homeowner-ledgers`: homeowner-level balances and ledger maintenance.
- `/blog/hoa-assessment-receivables-reconciliation`: reconciling subsidiary homeowner records to the control account.
- `/blog/hoa-unapplied-payments`: focused troubleshooting query.
- `/blog/hoa-accounting-eunify` and `/blog/eunify-quickbooks-hoa-accounting`: compare before merging; platform-specific integration intent may differ.
- Software-specific pages (AppFolio, Yardi, eUnify, QuickBooks Online): preserve if they answer real product-specific workflows accurately and are not just duplicate general accounting copy.

## Page-level quality checks

- Avoid invented deadlines, state rules, compliance claims, or guaranteed outcomes.
- Describe software behavior conditionally when configuration or integrations vary.
- Use clear distinctions between operating and reserve reporting without implying a universal legal setup for every association.
- Avoid repeating the same generic CTA or company pitch across all articles.
- Add internal links to the relevant HOA service/industry page and 2–3 genuinely related articles.
- Confirm metadata title/description match the specific page intent.
- Check JSX, imports, structured data, headings, and internal links before merging content.

## Next steps when Search Console access is restored

Export the last 3 months and 12 months for dimensions `page` and `query`, filtered to HOA URLs. For each candidate pair, compare clicks, impressions, CTR, average position, query overlap, country/device split, backlinks if available, and internal links. Select the destination based on evidence, preserve unique useful content, add a 301 redirect only for a genuine consolidation, update internal links and sitemap, and monitor results after release.
