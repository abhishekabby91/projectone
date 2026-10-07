import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Accounts Payable: How Vendor Bills Should Be Reviewed',
  description: 'A practical HOA accounts payable process covering invoice coding, approvals, duplicate checks, operating and reserve expenses and vendor records.',
  path: '/blog/hoa-accounts-payable',
});

export default function HoaAccountsPayable() {
  return (
    <ArticleLayout title="HOA Accounts Payable: How Should Vendor Bills Be Reviewed?" category="HOA Accounting"
      description="HOA accounts payable should make vendor invoices easy to trace from receipt through coding, approval, payment and the monthly financial reports."
      publishedDate="2026-10-08" section="blog" slug="hoa-accounts-payable"
      inquiryTitle="Need Help With HOA Accounts Payable?"
      inquiryLead="Tell us how invoices are received, approved and paid today. We can review the AP workflow and recurring accounting tasks.">
      <p>HOA accounts payable covers the process of recording and paying bills for association expenses. A good process should answer four basic questions: what was purchased, which association account or project it relates to, who approved it and whether it has been paid.</p>
      <h2>Start With the Invoice</h2>
      <p>Capture the vendor, invoice date, amount, description and supporting information. Missing documentation is often easier to resolve before the invoice enters the payment queue.</p>
      <h2>Code the Expense Correctly</h2>
      <p>Determine whether the invoice relates to normal operating activity or an authorized reserve-funded project. The chart of accounts should provide useful categories without creating a separate general-ledger account for every vendor.</p>
      <h2>Check Approval</h2>
      <p>Payment approval should follow the association's established authority. Accounting staff can prepare and organize invoices without independently making board or management decisions.</p>
      <h2>Check for Duplicates</h2>
      <p>Compare invoice number, vendor, date and amount with recent bills. Duplicate invoices can occur when a vendor resubmits a bill or when invoices arrive through more than one channel.</p>
      <h2>Review the Aging</h2>
      <p>Accounts payable aging helps identify old unpaid invoices and unusual balances. The board or manager should understand why material invoices remain unpaid.</p>
      <h2>Operating vs. Reserve Invoices</h2>
      <p>Reserve-funded work should be identifiable in the accounting records. If the association uses a separate project schedule, link the invoice and payment to that schedule so the spending can be traced later.</p>
      <h2>Simple AP Review</h2>
      <table><thead><tr><th>Step</th><th>Check</th></tr></thead><tbody>
      <tr><td>Receive</td><td>Invoice and supporting documents are complete</td></tr>
      <tr><td>Code</td><td>Expense or reserve category is appropriate</td></tr>
      <tr><td>Approve</td><td>Authorized person approves the bill</td></tr>
      <tr><td>Pay</td><td>Payment is recorded and matched to the invoice</td></tr>
      <tr><td>Review</td><td>Outstanding balances and unusual items are investigated</td></tr>
      </tbody></table>
      <h2>Software Workflow</h2>
      <p>QuickBooks Online, AppFolio and other systems can help route or record bills, but the exact workflow depends on the association's configuration. Automation should not remove approval controls or invoice review.</p>
      <h2>Related HOA Resources</h2>
      <p>See <a href="/blog/hoa-accounting-controls">HOA accounting controls</a>, <a href="/blog/hoa-accounting-month-end-checklist">the month-end checklist</a>, and <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>.</p>
    </ArticleLayout>
  );
}
