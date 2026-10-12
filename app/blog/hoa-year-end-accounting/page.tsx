import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Year-End Accounting: Preparing Books for the CPA',
  description: 'Prepare HOA books for year-end with a checklist for bank reconciliations, homeowner balances, payables, reserves, statements and CPA schedules.',
  path: '/blog/hoa-year-end-accounting',
});

export default function HoaYearEndAccounting() {
  return (
    <ArticleLayout title="HOA Year-End Accounting: How to Prepare the Books for the CPA" category="HOA Accounting"
      description="Good HOA year-end preparation starts with clean monthly records: reconciled cash, accurate homeowner balances, reviewed payables, clear reserve activity and supporting schedules."
      publishedDate="2026-10-08" section="blog" slug="hoa-year-end-accounting"
      inquiryTitle="Getting the HOA Books Ready for the CPA?"
      inquiryLead="Tell us what remains open at year-end and what the CPA typically requests. We can review the cleanup and recurring accounting workflow.">
      <p>Preparing HOA books for the CPA should not be a once-a-year reconstruction exercise. The strongest year-end process starts with monthly reconciliations and leaves the CPA with organized records, supporting schedules and clear explanations for unusual items.</p>
      <h2>How Year-End Fits Into the HOA Accounting Cycle</h2>
<p>Year-end accounting is the final review of the same records maintained throughout the year. Bank accounts, homeowner balances, vendor balances, reserve activity and financial statements should already be supported by the monthly close.</p>
<p>When the monthly records are kept clean, the year-end package for the CPA is usually easier to prepare and review.</p>

<h2>Start With Bank Reconciliations</h2>
      <p>Complete operating and reserve reconciliations through year-end. Investigate old outstanding checks, deposits and unexplained differences before final reports are delivered.</p>
      <h2>Reconcile Homeowner Receivables</h2>
      <p>Review the assessment schedule, homeowner ledgers, unapplied cash, credits and aged balances. The receivable control account should agree with the supporting homeowner records.</p>
      <h2>Review Accounts Payable</h2>
      <p>Look for unpaid vendor invoices, duplicate entries and expenses that belong to the year being closed. Keep supporting invoices available for the CPA and authorized reviewers.</p>
      <h2>Review Reserve Activity</h2>
      <p>Provide reconciled reserve cash, contributions, transfers and reserve-funded project activity. Significant projects should have enough supporting detail to explain the payments.</p>
      <h2>Review Financial Statements</h2>
      <p>Compare the year-end balance sheet and income statement with the prior period and budget where applicable. Investigate unusual balances before treating the package as complete.</p>
      <h2>Prepare a CPA Support Package</h2>
      <table><thead><tr><th>Area</th><th>Useful support</th></tr></thead><tbody>
      <tr><td>Cash</td><td>Bank statements and reconciliations</td></tr>
      <tr><td>Receivables</td><td>Assessment aging and homeowner schedules</td></tr>
      <tr><td>Payables</td><td>Open AP and material invoices</td></tr>
      <tr><td>Reserves</td><td>Reserve activity and project schedules</td></tr>
      <tr><td>Ledger</td><td>General-ledger detail and adjustments</td></tr>
      </tbody></table>
      <h2>Year-End Review Checklist</h2>
      <p>Before the records are sent for CPA review or finalized for the board, use this checklist to confirm the main schedules are complete.</p>
      <table><thead><tr><th>Area</th><th>Final check</th></tr></thead><tbody>
      <tr><td>Bank accounts</td><td>Operating and reserve reconciliations are complete and old items have explanations.</td></tr>
      <tr><td>Assessments</td><td>Charges, payments and credits are posted to the correct homeowner accounts.</td></tr>
      <tr><td>Receivables</td><td>The aging report agrees with the general-ledger control balance.</td></tr>
      <tr><td>Payables</td><td>Open invoices and material expenses are reviewed for the correct period.</td></tr>
      <tr><td>Reserves</td><td>Contributions, transfers and project costs have supporting records.</td></tr>
      <tr><td>Financial statements</td><td>Unusual balances and material changes have been reviewed.</td></tr>
      <tr><td>Supporting files</td><td>Statements, invoices, ledger detail and schedules are organized.</td></tr>
      <tr><td>Open questions</td><td>Missing documents and unresolved items are listed with a responsible contact.</td></tr>
      </tbody></table>
      <h2>Accounting vs. CPA Responsibilities</h2>
      <p>Accounting support can organize records, reconciliations and schedules. The CPA determines the professional reporting, tax and assurance work that applies to the engagement. The accounting workflow should make that review easier, not replace it.</p>
      <h2>Software and Year-End</h2>
      <p>QuickBooks Online, AppFolio and other systems can provide transaction detail and reports, but the CPA support package should be organized around the requested schedules rather than simply exporting everything from the software.</p>
      <h2>Related HOA Resources</h2>
      <p>See the <a href="/blog/hoa-accounting-month-end-checklist">month-end checklist</a>, <a href="/blog/hoa-reserve-reconciliation">reserve reconciliation</a>, <a href="/blog/hoa-financial-statements-board-review">board financial statements</a> and <a href="/industries/hoa-accounting">HOA accounting outsourcing</a>.</p>
    </ArticleLayout>
  );
}
