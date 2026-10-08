import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';
import FAQSection from '@/components/faq-section';

export const metadata: Metadata = genMeta({
  title: 'HOA Assessment Receivables Reconciliation',
  description: 'How to reconcile HOA assessment receivables, homeowner ledgers, payments, credits, unapplied cash and the accounts receivable control account.',
  path: '/blog/hoa-assessment-receivables-reconciliation',
});

const faqs = [
  { question: "How often should HOA receivables be reconciled?", answer: "Monthly is a practical minimum for a recurring close process. More frequent review can make sense when an association has high transaction volume or frequent payment-application issues." },
  { question: "Should unapplied cash be included in receivables?", answer: "The accounting treatment depends on the association's circumstances and system setup. Operationally, unapplied cash should be identified and investigated rather than hidden inside an unexplained homeowner balance." },
  { question: "What if the homeowner report and general ledger differ by a small amount?", answer: "Even a small difference should have an explanation. A documented timing item may be acceptable; an unexplained difference should not simply be written off to make the reconciliation balance." },
  { question: "Can an outsourced accounting team perform this reconciliation?", answer: "Yes. An outsourced team can prepare the reconciliation, investigate routine differences and maintain supporting schedules while the association or management team retains approval and decision-making responsibility." },
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaAssessmentReceivablesReconciliation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
      title="HOA Assessment Receivables Reconciliation: What Should Be Checked?"
      category="HOA Accounting"
      description="A practical reconciliation process for comparing homeowner assessment detail with the association's accounts receivable control balance."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-assessment-receivables-reconciliation"
      inquiryTitle="Do Your HOA Receivables Need a Reconciliation?"
      inquiryLead="If the homeowner detail, bank activity and general ledger do not agree cleanly, tell us where the difference appears. We can review the reconciliation workflow around your existing system."
    >
      <p>HOA assessment receivables reconciliation is the process of making sure the detailed homeowner balances agree with the association's accounts receivable records in the general ledger.</p>
      <p>The goal is not to force two numbers to match. It is to understand why they differ and document the items that explain the difference.</p>

      <h2>What Is Being Reconciled?</h2>
      <p>There are usually three related records to consider:</p>
      <ul>
        <li>The homeowner or unit-level ledger.</li>
        <li>The accounts receivable control account in the general ledger.</li>
        <li>Payment and bank records supporting cash received.</li>
      </ul>
      <p>Some associations also have a separate property-management or association platform that produces assessment and delinquency reports. That report becomes another important source for the reconciliation.</p>

      <h2>Start With the Homeowner Ledger Total</h2>
      <p>Run the homeowner balance report for the same cutoff date used for the general ledger. Comparing different dates is one of the simplest ways to create a reconciliation difference that is not actually an accounting error.</p>

      <h2>Check Assessment Charges</h2>
      <p>Confirm that recurring assessment charges were posted according to the approved schedule. Look for missing charges, duplicate postings, incorrect effective dates and unusual manual entries.</p>

      <h2>Check Payment Applications</h2>
      <p>Next, compare payments received with the amounts applied to homeowner accounts. A bank receipt can be correct while the homeowner ledger remains wrong if the payment was applied to the wrong unit or left unapplied.</p>

      <h2>Review Credits and Adjustments</h2>
      <p>Old credits and manual adjustments can create unexplained differences. Review the transaction history and supporting documentation rather than simply clearing the balance with another adjustment.</p>

      <h2>Investigate Unapplied Cash</h2>
      <p>Unapplied cash should be listed separately during the reconciliation. The accounting team should identify the oldest items and determine whether they can be matched to a homeowner, corrected or escalated for clarification.</p>

      <h2>Common Reasons the Numbers Do Not Agree</h2>
      <table>
        <thead><tr><th>Difference</th><th>Possible cause to investigate</th></tr></thead>
        <tbody>
          <tr><td>Ledger higher than GL</td><td>Posting timing, missing GL entry or incorrect subsidiary transaction.</td></tr>
          <tr><td>GL higher than ledger</td><td>Manual journal, prior-period correction or missing homeowner detail.</td></tr>
          <tr><td>Old credits</td><td>Duplicate payment, overpayment or adjustment not fully reviewed.</td></tr>
          <tr><td>Unapplied cash</td><td>Payment received without enough information for application.</td></tr>
          <tr><td>Unexpected assessment balance</td><td>Incorrect schedule, unit change or manual posting.</td></tr>
        </tbody>
      </table>

      <h2>Software Reports Can Help, but They Still Need Review</h2>
      <p>QuickBooks Online may hold the general ledger while AppFolio, Yardi or another association platform holds detailed homeowner activity. In that setup, the reconciliation depends on clean exports and a consistent cutoff date. Software does not remove the need to understand the underlying transactions.</p>

      <h2>What About State-Specific HOA Requirements?</h2>
      <p>The reconciliation method is generally the same for an HOA in California, Texas, Florida, Nevada or another U.S. state. What changes is the legal, governance and collection environment around the accounting records. Those state-specific requirements should be handled by the association's authorized professionals rather than assumed from an accounting report.</p>

      <FAQSection subtitle="Common HOA accounting questions" items={faqs} />

      <h2>Related HOA Accounting Resources</h2>
      <p>For the wider workflow, see <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>, <a href="/blog/hoa-bank-reconciliation">HOA bank reconciliation</a> and <a href="/blog/hoa-homeowner-ledgers">HOA homeowner ledgers</a>.</p>
      </ArticleLayout>
    </>
  );
}
