import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Accounts Receivable Aging: What Should Boards Review?',
  description: 'Understand HOA accounts receivable aging, overdue assessments, homeowner balances and the accounting checks that make an aging report useful.',
  path: '/blog/hoa-accounts-receivable-aging',
});

export default function Page() {
  return (
    <ArticleLayout
      title="HOA Accounts Receivable Aging: What Should Board Members Review?"
      category="HOA Accounting"
      description="An HOA receivables aging report groups unpaid balances by age. It helps the board understand how much is outstanding and whether older balances need attention."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-accounts-receivable-aging"
      inquiryTitle="Tell Us About the Work You Need Support With"
      inquiryLead="Share a little about your current workflow, the work you need help with, or the system you use. We can review the requirements and discuss the next step."
    >
      <p>An HOA accounts receivable aging report shows unpaid amounts grouped by how long they have remained outstanding. It can help a board distinguish normal timing differences from balances that require management attention.</p>
<h2>How Receivables Aging Fits Into HOA Accounting</h2>
<p>An aging report is one part of the HOA receivables process. It shows what homeowners owe and how long balances have remained unpaid, while the general ledger shows the total receivable balance in the financial statements.</p>
<p>These records should agree or have a clear reason for any difference. Accounting can keep the records accurate without making the collection decision for the board.</p>

<h2>What Does an Aging Report Show?</h2><p>Depending on the system, balances may be grouped into current, 30-day, 60-day, 90-day and older categories. The exact buckets can vary, but the purpose is the same: make the age of outstanding receivables visible.</p>
<h2>Look Beyond the Total</h2><p>A total receivable balance is less useful without detail. Review the number of accounts involved, large individual balances, credits, unapplied payments and unusually old items.</p>
<h2>Reconcile the Aging to the General Ledger</h2><p>The detailed homeowner aging should be compared with the corresponding receivable balance in the general ledger. A difference needs investigation before the report is relied upon for board reporting.</p>
<h2>Separate Accounting From Collection Decisions</h2><p>The accounting team can maintain accurate records and identify aging balances. Collection notices, payment plans, legal action and other enforcement decisions should follow the association's governing documents and authorized management or professional advice.</p>
<h2>Monthly Review Questions</h2><ul><li>Does the aging agree with the receivable control account?</li><li>Are large balances supported by the homeowner ledger?</li><li>Are old credits or unapplied payments distorting the report?</li><li>Are there unusual changes from the prior month?</li><li>Are management and collection actions being recorded consistently?</li></ul>
<h2>Common Questions</h2><h3>What is a good HOA receivables aging report?</h3><p>It should clearly show outstanding balances by account and age, be supported by the underlying ledger and reconcile to the appropriate general-ledger balance.</p><h3>Does the accounting team decide whether to send an HOA account to collections?</h3><p>Not necessarily. That is an operational, governance or legal decision depending on the circumstances. Accounting should provide accurate records for authorized decision-makers.</p>
<h2>Related HOA Accounting Resources</h2><p>See <a href="/blog/hoa-delinquency-accounting">HOA delinquency accounting</a>, <a href="/blog/hoa-assessment-receivables-reconciliation">assessment receivables reconciliation</a>, <a href="/blog/hoa-unapplied-payments">unapplied HOA payments</a> and the <a href="/services/hoa-accounting">HOA accounting service</a> page.</p></ArticleLayout>
  );
}
