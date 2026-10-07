import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Year-End Accounting Checklist',
  description: 'A practical HOA year-end checklist covering bank reconciliations, homeowner balances, payables, reserves, financial statements and CPA support.',
  path: '/blog/hoa-year-end-checklist',
});

export default function HoaYearEndChecklist() {
  return (
    <ArticleLayout title="HOA Year-End Accounting Checklist" category="HOA Accounting"
      description="Use a year-end checklist to confirm that HOA cash, receivables, payables, reserves and supporting schedules are ready for review."
      publishedDate="2026-10-08" section="blog" slug="hoa-year-end-checklist"
      inquiryTitle="Need Help With an HOA Year-End Close?"
      inquiryLead="Tell us which year-end items are still open and what your CPA or board normally asks for. We can review the accounting workflow.">
      <p>A practical HOA year-end checklist is mainly a confirmation that the monthly accounting process was completed consistently. The goal is to identify unresolved items before the records are handed to the CPA or finalized for the board.</p>
      <h2>Year-End Checklist</h2>
      <table><thead><tr><th>Area</th><th>Check</th></tr></thead><tbody>
      <tr><td>Bank accounts</td><td>Operating and reserve reconciliations completed</td></tr>
      <tr><td>Assessments</td><td>Charges and payment applications reviewed</td></tr>
      <tr><td>Receivables</td><td>Aging reconciled to the general ledger</td></tr>
      <tr><td>Payables</td><td>Open invoices and material liabilities reviewed</td></tr>
      <tr><td>Reserves</td><td>Contributions, transfers and project spending supported</td></tr>
      <tr><td>Financial statements</td><td>Year-end balances reviewed for unusual items</td></tr>
      <tr><td>Supporting records</td><td>Invoices, statements and schedules organized</td></tr>
      <tr><td>Open questions</td><td>Outstanding items documented for follow-up</td></tr>
      </tbody></table>
      <h2>Do the Reconciliations First</h2>
      <p>It is difficult to review year-end financial statements when the underlying bank or receivable records are unresolved. Finish the reconciliations before spending time formatting the final board package.</p>
      <h2>Review the Homeowner Ledger</h2>
      <p>Look for old credits, unapplied payments, unusual adjustments and balances that do not reconcile to the control account.</p>
      <h2>Review Reserves Separately</h2>
      <p>Reserve cash and project activity should be supported by reconciled records and schedules. Keep authorized association decisions separate from the accounting task of recording them.</p>
      <h2>Prepare the CPA Support Files</h2>
      <p>Organize bank statements, reconciliations, general-ledger detail, receivable aging, AP detail and reserve schedules. The CPA may request additional information depending on the engagement.</p>
      <h2>Related HOA Resources</h2>
      <p>See <a href="/blog/hoa-year-end-accounting">HOA year-end accounting</a>, <a href="/blog/hoa-accounting-month-end-checklist">the monthly close checklist</a> and <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>.</p>
    </ArticleLayout>
  );
}
