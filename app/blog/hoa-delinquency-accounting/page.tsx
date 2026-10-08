import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Delinquency Accounting: How to Track Past-Due Assessments',
  description: 'How HOA accounting teams can keep delinquency reports accurate by reconciling homeowner ledgers, payments, credits and past-due assessments.',
  path: '/blog/hoa-delinquency-accounting',
});

export default function HoaDelinquencyAccounting() {
  return (
    <ArticleLayout
      title="HOA Delinquency Accounting: How to Track Past-Due Assessments"
      category="HOA Accounting"
      description="A useful HOA delinquency report starts with accurate homeowner ledgers, correctly applied payments, clear credits and a regular receivables review."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-delinquency-accounting"
      inquiryTitle="Need Cleaner HOA Delinquency Reporting?"
      inquiryLead="Tell us how assessments, payments and past-due balances are tracked today. We can review the accounting workflow without changing your collection policy."
    >
      <p>HOA delinquency accounting is the process of keeping past-due assessment records accurate and usable for the association and its management team. The accounting side should show what was charged, what was paid, what remains due and how old the balance is.</p>
      <p>Collection decisions are different. The board, management company, attorney or other authorized professional determines what action is appropriate under the association's rules and applicable law.</p>

      <h2>Start With Accurate Homeowner Ledgers</h2>
      <p>A delinquency report is only as reliable as the homeowner ledger behind it. Regular assessment charges, payments, credits and adjustments should be posted to the correct account.</p>

      <h2>Review the Aging Report</h2>
      <p>Age balances by the periods used by the association's system and reporting process. Look for unusually old balances, large changes from the prior month and accounts with credits that may offset part of the amount shown.</p>

      <h2>Check Unapplied Cash</h2>
      <p>A payment received but not assigned to the correct homeowner can make an account look delinquent when it is not. Unapplied cash should therefore be reviewed as part of the receivables process.</p>

      <h2>Review Credits and Adjustments</h2>
      <p>Credits can arise from corrections, duplicate payments or authorized adjustments. They should be supported so another reviewer can understand why the balance changed.</p>

      <h2>Reconcile Receivables to the General Ledger</h2>
      <p>The total of the homeowner subsidiary balances should agree with the appropriate accounts receivable control balance in the general ledger. If it does not, investigate the difference before relying on the delinquency report.</p>

      <h2>What Should a Delinquency Report Show?</h2>
      <table>
        <thead><tr><th>Field</th><th>Why it matters</th></tr></thead>
        <tbody>
          <tr><td>Homeowner/unit</td><td>Identifies the account</td></tr>
          <tr><td>Current charges</td><td>Shows recent amounts due</td></tr>
          <tr><td>Past-due aging</td><td>Shows how long amounts have remained unpaid</td></tr>
          <tr><td>Credits</td><td>Prevents misleading balances</td></tr>
          <tr><td>Payments</td><td>Shows what has actually been received</td></tr>
          <tr><td>Total balance</td><td>Provides the amount requiring review</td></tr>
        </tbody>
      </table>

      <h2>Don't Turn Accounting Into Collections</h2>
      <p>Accounting should maintain accurate records and reports. It should not independently decide whether an owner receives a demand letter, payment plan, lien action or other collection step unless that responsibility has been formally assigned and the required authority exists.</p>

      <h2>Monthly Delinquency Review</h2>
      <p>A practical monthly review compares the current aging with the prior period, checks unusual movements, investigates unapplied payments and confirms that the receivable control account reconciles.</p>

      <h2>State-Specific Considerations</h2>
      <p>HOA collection rules can vary by state. For that reason, a delinquency accounting workflow should avoid presenting a generic collection procedure as legal advice. Accounstone's <a href="/markets/united-states/california">California</a>, <a href="/markets/united-states/texas">Texas</a> and <a href="/markets/united-states/florida">Florida</a> market pages provide broader state context, while collection decisions should be handled by the association and its appropriate advisers.</p>

      <h2>Related HOA Resources</h2>
      <p>See <a href="/blog/hoa-assessment-accounting">HOA assessment accounting</a>, the <a href="/blog/hoa-accounting-month-end-checklist">month-end checklist</a>, <a href="/blog/hoa-financial-statements-board-review">board financial statements</a> and the <a href="/services/hoa-bookkeeping">HOA bookkeeping service</a>.</p></ArticleLayout>
  );
}
