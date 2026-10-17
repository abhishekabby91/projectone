import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Bank Reconciliation Process',
  description: 'A practical HOA bank reconciliation process covering operating and reserve accounts, outstanding checks, deposits, transfers and unreconciled items.',
  path: '/blog/hoa-bank-reconciliation',
});

const faqs = [
  {
    question: 'What should an HOA bank reconciliation explain?',
    answer:
      'The difference between the association\'s accounting records and the bank statement, not just a matching ending balance. That means accounting for timing differences such as outstanding cheques and deposits in transit, along with bank fees, transfers between accounts, errors and anything else that needs correcting before the month is closed.',
  },
  {
    question: 'Should operating and reserve accounts be reconciled separately?',
    answer:
      'Yes. Each account is reconciled on its own, and transfers between them should appear on both sides of the accounting records. A transfer posted in one account and not the other creates an apparent difference that is really a posting gap. The board should also be able to trace the reconciled cash balances through to the financial package it receives.',
  },
  {
    question: 'What should be done with old outstanding cheques on an HOA reconciliation?',
    answer:
      'They should be investigated rather than rolled forward indefinitely. The question is whether the item is still valid, needs correcting, or needs to be handled under the association\'s own established process for stale items. A clean ending balance carrying several unexplained old items is not a clean reconciliation.',
  },
  {
    question: 'Does automatic bank matching in QuickBooks replace the review?',
    answer:
      'No. QuickBooks Online and similar platforms can automate transaction matching, but matched does not always mean correct. Someone still has to look at the reconciling items and their age, and confirm that transfers, assessment deposits and reserve transactions make sense for the period.',
  },
  {
    question: 'Why are HOA assessment deposits harder to reconcile?',
    answer:
      'A single bank deposit often carries assessment payments from many homeowner accounts, so a cleared deposit may not tie to one ledger entry. Combined or unidentified deposits need to be researched back to the homeowner records rather than cleared on the total alone, which is one of the most common sources of unexplained differences.',
  },
];

export default function HoaBankReconciliation() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="HOA Bank Reconciliation: A Practical Monthly Process"
      category="HOA Accounting"
      description="An HOA bank reconciliation should explain the difference between the bank statement and accounting records, not simply produce a matching ending balance."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-bank-reconciliation"
      inquiryTitle="Behind on HOA Bank Reconciliations?"
      inquiryLead="Tell us how many operating and reserve accounts are involved and how old the unreconciled items are. We can review the monthly process."
    >
      <p>HOA bank reconciliation is the monthly process of comparing the association's accounting records with its bank statements and explaining the difference between them. It should be completed for each relevant bank account, including operating and reserve accounts.</p>

      <h2>Why Bank Reconciliation Matters in HOA Accounting</h2>
<p>Bank reconciliation is a basic part of monthly HOA accounting, but it also supports the rest of the financial reports. Cash balances, assessment deposits, vendor payments and transfers all depend on the bank activity being recorded correctly.</p>
<p>A clean reconciliation helps the board and accounting team start the next month with records they can trust.</p>

<h2>What Does the Reconciliation Need to Explain?</h2>
      <p>The reconciliation should account for timing differences such as outstanding checks and deposits in transit, as well as bank fees, transfers, errors and other items that need correction.</p>

      <h2>Step 1: Start With the Bank Statement</h2>
      <p>Use the correct statement period and account. Confirm the beginning balance, ending balance and transactions before matching them to the accounting records.</p>

      <h2>Step 2: Match Deposits and Payments</h2>
      <p>Match cleared deposits and payments to the ledger. For an HOA, deposits may include assessment payments from many homeowner accounts, so unidentified or combined deposits may need additional research.</p>

      <h2>Step 3: Investigate Outstanding Items</h2>
      <p>Old outstanding checks and deposits in transit should not automatically roll forward forever. Determine whether the item is still valid, needs correction or needs to be handled under the association's established process.</p>

      <h2>Step 4: Review Transfers</h2>
      <p>Transfers between operating and reserve accounts should appear on both sides of the accounting records. A transfer that appears in one account but not the other can create an apparent reconciliation difference.</p>

      <h2>Step 5: Review Bank Fees and Adjustments</h2>
      <p>Bank charges, interest and other items may need to be recorded in the ledger before the reconciliation is complete.</p>

      <h2>Step 6: Review the Reconciliation, Not Just the Number</h2>
      <p>A reviewer should look at the reconciling items and their age. A clean ending balance with several unexplained old items is not a clean reconciliation.</p>

      <h2>Common HOA Reconciliation Problems</h2>
      <ul>
        <li>Old outstanding checks.</li>
        <li>Unidentified homeowner deposits.</li>
        <li>Transfers recorded on only one side.</li>
        <li>Bank fees not posted.</li>
        <li>Duplicate or missing transactions.</li>
        <li>Reconciliations left unfinished until year-end.</li>
      </ul>

      <h2>Operating and Reserve Accounts</h2>
      <p>Operating and reserve accounts should be reconciled separately. The board should also be able to connect the reconciled cash balances to the financial package it receives.</p>

      <h2>Software Workflow</h2>
      <p>QuickBooks Online and other accounting platforms can automate transaction matching, but matched does not always mean correct. The person reviewing the reconciliation still needs to investigate unusual items and confirm that transfers, assessments and reserve transactions make sense.</p>

      <h2>Related HOA Resources</h2>
      <p>Use this process alongside the <a href="/blog/hoa-accounting-month-end-checklist">HOA month-end checklist</a> and <a href="/blog/hoa-accounting-controls">HOA accounting controls</a>. For the broader service, see <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>, or review the <a href="/services/hoa-financial-reporting">HOA financial reporting service</a> to understand how reconciled balances feed into the board package.</p>
    </ArticleLayout>
  );
}
