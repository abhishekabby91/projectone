import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Receivables Aging Reconciliation',
  description: 'Reconcile tenant receivables aging to property ledgers by reviewing unapplied receipts, credits, cutoff, disputes and collection exceptions.',
  path: '/blog/property-management-receivables-aging-reconciliation',
});

const faqs = [
  { question: 'What is a property management receivables aging reconciliation?', answer: 'It checks that the tenant or customer aging report agrees with the accounts receivable control balance and that open items are assigned to the correct account, property and period.' },
  { question: 'Why might the aging report not match the general ledger?', answer: 'Common causes include unapplied receipts, duplicate charges, credit memos, write-offs, incorrect property coding, cutoff differences or reports run with different filters and dates.' },
  { question: 'Should every old balance be written off?', answer: 'No. An old balance should be investigated and supported. Write-offs, adjustments and collection decisions need the approval and documentation required by the organization’s policy and applicable agreements.' },
  { question: 'How often should tenant receivables be reviewed?', answer: 'The cadence depends on the portfolio and collection process. A monthly review should normally be part of close, with more frequent monitoring where payment volume, delinquency risk or owner reporting needs warrant it.' },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementReceivablesAgingReconciliation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
        title="Property Management Receivables Aging: Reconciliation and Review"
        category="Property Management Accounting"
        description="A repeatable way to reconcile tenant receivables aging, investigate old balances and keep property-level reporting accurate."
        publishedDate="2026-10-13"
        updatedDate="2026-10-13"
        section="blog"
        slug="property-management-receivables-aging-reconciliation"
        inquiryTitle="Review Your Tenant Receivables Workflow"
        inquiryLead="Tell us how tenant balances, unapplied payments, credits and aging exceptions are reviewed across your properties."
      >
        <p>A tenant receivables aging report groups unpaid charges by age, helping a property management business see which balances are current, overdue or need attention. The report is useful only when its open items agree with the underlying tenant ledgers and the accounts receivable balance in the general ledger. A large overdue total can be misleading if receipts remain unapplied, credits are missing or charges are assigned to the wrong property.</p>

        <h2>1. Confirm the report basis</h2>
        <p>Before reviewing the numbers, confirm the cutoff date, property and entity filters, aging intervals, included charge types and whether the report is based on transaction date or due date. Use the same period and account scope for the aging report, tenant ledgers and general-ledger control balance. Record the report version used for the close.</p>

        <h2>2. Tie the aging total to the control account</h2>
        <ol>
          <li>Export the tenant or customer aging report as of the agreed cutoff.</li>
          <li>Obtain the accounts receivable control-account detail and balance for the same date and scope.</li>
          <li>Compare the report total with the control balance and identify the amount of any difference.</li>
          <li>Trace differences to posting dates, unposted batches, manual journals, property filters, credits or other documented causes.</li>
          <li>Re-run both reports after supported corrections and retain the reconciliation evidence.</li>
        </ol>
        <p>Do not assume the aging report is correct simply because it comes from property-management software. Check how the system handles unapplied receipts, credit balances, reversals, disputed charges and transactions awaiting posting.</p>

        <h2>3. Review unapplied receipts and credits</h2>
        <p>A tenant may have paid, but the receipt could remain unallocated or be assigned to the wrong charge. Review unapplied cash, overpayments, returned payments, credit memos and account transfers separately. Match each item to source evidence and the tenant or lease record before applying or reclassifying it. For deposit-batch timing, see the <Link href="/blog/property-management-undeposited-funds" className="text-primary underline underline-offset-4">undeposited funds reconciliation guide</Link>.</p>

        <h2>4. Investigate aged balances at transaction level</h2>
        <p>For older items, confirm the original charge, lease or agreement reference, due date, receipt history, credits, adjustments and any dispute or collection note. Look for duplicate rent charges, recurring charges that continued after a move-out, payments posted to a former tenant, unapplied concessions and balances carried after a correction. Separate genuine arrears from accounting exceptions so follow-up actions are based on reliable records.</p>

        <h2>5. Keep collection and accounting decisions distinct</h2>
        <p>Accounting can identify and document exceptions, but a write-off, disputed charge, payment arrangement or legal collection action may require approval from the property manager, owner or qualified adviser. Keep the approval trail and do not remove an aged balance merely to improve the report. Where the amount is genuinely uncollectible, follow the authorized accounting policy and preserve the reason and supporting evidence.</p>

        <h2>6. Use an aging review checklist</h2>
        <ul>
          <li>The aging and general-ledger control balance use the same cutoff and property scope.</li>
          <li>Unapplied receipts, credit balances and returned payments are reviewed.</li>
          <li>Older balances have an explanation, responsible owner and next action.</li>
          <li>Property and tenant attribution is correct and supported by source records.</li>
          <li>Adjustments and write-offs have appropriate approval and documentation.</li>
          <li>Final totals tie out, and the preparer and reviewer are recorded.</li>
        </ul>

        <h2>How this fits into property month-end close</h2>
        <p>Use the <Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">property management month-end close checklist</Link> to coordinate the review with bank reconciliation and payables. The <Link href="/blog/property-management-financial-statements" className="text-primary underline underline-offset-4">financial statements guide</Link> explains how reviewed balances feed owner reporting, while the <Link href="/industries/property-management" className="text-primary underline underline-offset-4">property management accounting page</Link> outlines the wider accounting workflow.</p>
      </ArticleLayout>
    </>
  );
}
