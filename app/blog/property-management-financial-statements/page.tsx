import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Financial Statements Guide',
  description: 'Learn which financial reports property managers prepare, how to reconcile them to source records, and what to review before owner reporting.',
  path: '/blog/property-management-financial-statements',
});

const faqs = [
  { question: 'What financial statements should a property manager prepare?', answer: 'The reporting package depends on the portfolio and owner agreement, but commonly includes a property income statement, balance sheet, cash flow view, owner statement, rent roll and general ledger detail. Not every owner needs every report.' },
  { question: 'Should each property have its own profit and loss statement?', answer: 'Property-level reporting is useful when the accounting system and ownership structure support it. Shared costs, intercompany balances and multi-property ownership should be allocated consistently and documented rather than assigned arbitrarily.' },
  { question: 'How often should property management financial reports be prepared?', answer: 'Many property managers prepare reports monthly, after bank accounts and relevant subsidiary ledgers have been reconciled. The reporting frequency and cutoff should match the management agreement and the needs of the owner.' },
  { question: 'Can accounting software guarantee that owner reports are correct?', answer: 'No. Software can produce reports from recorded data, but coding, cutoff, account mapping, allocations and source reconciliations still need review. The report should be traceable to the underlying records.' },
  { question: 'What is the difference between an owner statement and an income statement?', answer: 'An income statement summarizes income and expenses for a period under the selected accounting basis. An owner statement usually presents property activity and the amount payable, retained or carried forward for a specific owner, based on the management agreement and the records available.' },
];

export default function PropertyManagementFinancialStatements() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Property Management Financial Statements: What to Prepare and Review"
      category="Property Management Accounting"
      description="A practical reporting framework for property-level results, balances, cash movement and owner reporting."
      publishedDate="2026-10-13"
      section="blog"
      slug="property-management-financial-statements"
      inquiryTitle="Need Support With Property-Level Reporting?"
      inquiryLead="Tell us which reports you prepare, which property-management or accounting system you use, and where reconciliation or reporting capacity is needed."
    >

      <p>Property management financial statements should answer two related questions: how did each property perform during the period, and what balances or funds remain at the reporting date? A report pack is only useful when its totals can be traced to reconciled ledgers and its figures are presented consistently from month to month.</p>

      <p>The exact package depends on the management agreement, ownership structure, accounting basis, property type and software configuration. This guide describes common accounting and review practices; it does not determine legal, tax, trust-account or owner-distribution requirements for a particular jurisdiction.</p>

      <h2>1. Decide who the reports are for and what they must answer</h2>
      <p>Start with the reader and the decision. An owner may want to understand rental performance, cash available, upcoming costs and the balance held on their behalf. A property manager may also need portfolio-level comparisons, unpaid tenant balances, vendor liabilities and exceptions that need action. The management company’s own financial statements answer a different question from the property-level reports it prepares for clients.</p>
      <ul>
        <li>Confirm the reporting period, cutoff date and accounting basis.</li>
        <li>Identify the property, unit, owner and legal entity dimensions required.</li>
        <li>Confirm which reports are required by the management agreement.</li>
        <li>Use consistent account mapping and explain any changes to the reporting structure.</li>
      </ul>

      <h2>2. Understand the core report set</h2>
      <h3>Property income statement or profit and loss</h3>
      <p>Shows rental income and other properly classified revenue alongside operating expenses for the period. Review unusual movements, vacant-unit costs, repairs, utilities, management fees and any material one-off items. Check that expenses are assigned to the correct property and period.</p>
      <h3>Balance sheet</h3>
      <p>Shows assets, liabilities and equity or owner balances at a point in time. Depending on the structure, this may include cash, receivables, payables, deposits and other amounts held or owed. Reconcile material balance-sheet accounts; a plausible income statement does not prove that the balance sheet is correct.</p>
      <h3>Cash flow view</h3>
      <p>Explains cash receipts and payments over the period. It can help distinguish accounting performance from timing effects such as late rent, a large repair payment, a delayed owner contribution or an uncleared transaction. Make clear whether the report is a formal statement of cash flows or a management cash summary.</p>
      <h3>Owner statement</h3>
      <p>Summarizes activity attributable to a particular owner and usually shows the calculation of funds payable, retained or carried forward. Fees, reserves, approved costs and prior balances should follow the agreement and be supported by the books. See the separate <Link href="/blog/property-management-owner-statements" className="text-primary underline underline-offset-4">owner statement reconciliation guide</Link>.</p>
      <p>For the related payment-control step, see the <Link href="/blog/property-management-owner-distributions" className="text-primary underline underline-offset-4">owner distribution accounting workflow</Link>, which covers available-cash checks, authorized deductions, approvals and payment evidence.</p>
      <h3>Rent roll and tenant ledger detail</h3>
      <p>The rent roll provides a view of units, lease terms and rent-related data; tenant ledgers show posted charges, receipts, credits and balances. They are related but not interchangeable. Reconcile relevant totals and investigate differences before using either report to explain receivables.</p>
      <h3>General ledger and supporting schedules</h3>
      <p>The general ledger provides transaction-level detail behind the summary reports. Supporting schedules explain balances such as accounts receivable, accounts payable, deposits, prepaid costs, fixed assets or owner balances where applicable. Retain the source report and reconciliation for material schedules.</p>

      <h2>3. Reconcile the source records before producing the pack</h2>
      <p>Reports should be assembled after the underlying close steps are complete, not used as a substitute for them. At a minimum, establish the period cutoff, reconcile bank activity, review receivable and payable ledgers, confirm tenant and owner subledgers where applicable, and investigate unusual journal entries or balances.</p>
      <ol>
        <li>Reconcile each relevant bank account and document outstanding items.</li>
        <li>Compare tenant-ledger and rent-roll data with the receivable control account.</li>
        <li>Review vendor bills, payment status and property coding.</li>
        <li>Reconcile applicable deposit, trust or client-fund records under the required process.</li>
        <li>Check owner balances, fees, reserves and transfers against supporting schedules.</li>
        <li>Review the trial balance and confirm that material balance-sheet accounts are explained.</li>
      </ol>
      <p>Use the <Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">property management month-end close checklist</Link> for the recurring sequence, and the <Link href="/blog/property-management-trust-accounting-reconciliation" className="text-primary underline underline-offset-4">trust-accounting reconciliation guide</Link> for additional checks when funds are held on behalf of others.</p>

      <h2>4. Keep property, owner and management-company views distinct</h2>
      <p>One portfolio can contain several reporting layers. The management company’s own revenue may include earned management fees, while rent collected for an owner is not automatically the management company’s revenue. Owner funds, tenant deposits and amounts due to vendors should be classified according to the relevant arrangement and accounting policy.</p>
      <p>Where properties sit in different legal entities, preserve entity boundaries in the books and reports. A portfolio summary can be useful, but it should not hide balances between entities or imply that cash held by one entity is available to another. Confirm the required accounting and legal treatment with qualified professionals.</p>

      <h2>5. Explain variances instead of sending unexplained totals</h2>
      <p>Use a consistent comparison when it helps the reader: current period versus prior period, actual versus budget, or current year versus prior year. Record the cause of material differences, whether it is a timing issue, occupancy change, repair, rate change, billing correction or coding adjustment. A variance threshold can help focus review, but it should not replace judgment for unusual or sensitive items.</p>
      <p>For a more detailed comparison process, use the <Link href="/blog/property-management-budget-vs-actual" className="text-primary underline underline-offset-4">budget-versus-actual reporting guide</Link>. For forward-looking receipts, payments and liquidity scenarios, see the <Link href="/blog/property-management-cash-flow-forecasting" className="text-primary underline underline-offset-4">cash flow forecasting workflow</Link>.</p>
      <p>For comparisons across multiple properties, see the <Link href="/blog/property-management-portfolio-performance-reporting" className="text-primary underline underline-offset-4">portfolio performance reporting guide</Link>, which focuses on consistent KPI definitions, normalized metrics and documented exception review.</p>

      <h2>6. Use a review checklist before reports go out</h2>
      <ul>
        <li>The reporting period, cutoff and property/entity scope are correct.</li>
        <li>Bank accounts and relevant subsidiary ledgers are reconciled.</li>
        <li>Income and expenses are assigned to the correct property and period.</li>
        <li>Receivables, payables, deposits and owner balances have supporting schedules.</li>
        <li>Transfers, fees and reserve movements are supported and appropriately approved.</li>
        <li>Material variances and unresolved exceptions are explained.</li>
        <li>Report totals tie to the trial balance or the identified source report.</li>
        <li>The reviewer and reporting date are recorded, and delivery follows the agreed process.</li>
      </ul>

      <h2>7. Confirm the reports match the software workflow</h2>
      <p>Buildium, AppFolio, Yardi and general accounting platforms can present similar labels while relying on different configuration, ledger structure or report filters. Confirm the source report for each figure, the date range, cash or accrual basis, property/entity filters and whether the report includes posted or unposted transactions. Keep a repeatable export and review process so a software change does not silently alter the reporting basis.</p>

      <h2>Common reporting errors to avoid</h2>
      <ul>
        <li>Sending owner reports before reconciliations are complete.</li>
        <li>Confusing the management company’s profit with property-level performance.</li>
        <li>Using a rent roll as if it were a reconciled receivables ledger.</li>
        <li>Showing an unexplained cash balance without accounting for deposits, payables or owner funds.</li>
        <li>Changing account mappings without explaining how the change affects comparisons.</li>
        <li>Making a balancing journal entry without identifying the underlying cause.</li>
      </ul>

      <p>Reliable reporting is the result of a controlled close: consistent source records, reconciled balances, property-level coding, clear review evidence and reports that answer the owner’s actual questions. If a reporting package repeatedly needs manual fixes, review the upstream ledger and close process rather than just changing the presentation.</p>
    </ArticleLayout>
  );
}
