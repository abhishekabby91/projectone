import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Reserve Reconciliation',
  description: 'A practical HOA reserve reconciliation process covering bank balances, contributions, transfers, reserve expenses and supporting schedules.',
  path: '/blog/hoa-reserve-reconciliation',
});

export default function HoaReserveReconciliation() {
  return (
    <ArticleLayout title="HOA Reserve Reconciliation: What Should Be Reviewed?" category="HOA Accounting"
      description="A reserve reconciliation should connect the bank balance, accounting records, contributions, transfers and reserve-funded spending so the board can understand the activity."
      publishedDate="2026-10-08" section="blog" slug="hoa-reserve-reconciliation"
      inquiryTitle="Need Help Reconciling HOA Reserve Accounts?"
      inquiryLead="Tell us how many reserve accounts you have and what remains difficult to reconcile. We can review the monthly process around your existing system.">
      <p>HOA reserve reconciliation is more than confirming that a reserve bank account has the expected ending balance. The accounting records should explain contributions, transfers, reserve-funded payments and outstanding items so the reported reserve position can be reviewed.</p>
      <h2>Start With the Correct Bank Account</h2>
      <p>Reconcile each reserve bank account separately using the correct statement period. Confirm the beginning and ending balances before reviewing individual transactions.</p>
      <h2>Match Contributions and Transfers</h2>
      <p>Review reserve contributions recorded during the period and any transfers between operating and reserve accounts. A transfer should have a clear trail in both the source and destination records.</p>
      <h2>Review Reserve-Funded Payments</h2>
      <p>Match cleared payments to the accounting records and supporting invoices. For larger projects, a separate project schedule can make the activity easier to understand than adding numerous general-ledger accounts.</p>
      <h2>Investigate Old Reconciling Items</h2>
      <p>Outstanding checks, deposits and other reconciling items should be reviewed for age and validity. An old item should not simply roll forward because it appeared on the previous reconciliation.</p>
      <h2>Compare With the Reserve Schedule</h2>
      <p>If the association maintains a reserve schedule or project list, compare the accounting activity with it. Accounting should reflect authorized activity; it should not independently decide which projects the association should fund.</p>
      <h2>What Should the Reviewer Check?</h2>
      <table><thead><tr><th>Area</th><th>Review question</th></tr></thead><tbody>
      <tr><td>Cash</td><td>Does the bank balance reconcile to the accounting records?</td></tr>
      <tr><td>Contributions</td><td>Were expected contributions recorded?</td></tr>
      <tr><td>Transfers</td><td>Are transfers recorded on both sides?</td></tr>
      <tr><td>Projects</td><td>Can reserve-funded payments be traced to support?</td></tr>
      <tr><td>Outstanding items</td><td>Are old reconciling items explained?</td></tr>
      </tbody></table>
      <h2>Why Monthly Review Helps</h2>
      <p>Monthly reconciliation makes reserve reporting easier at board meetings and reduces the amount of cleanup needed at year-end. It also makes unusual transactions easier to investigate while the details are still available.</p>
      <h2>Interest and Investment Activity Belong to the Fund That Earned It</h2>
      <p>Interest credited inside a reserve account is reserve activity. It should be recorded in the reserve fund rather than swept into operating income, and it should appear in the reconciliation as its own line so the ending balance can be explained without reference to the bank statement. Whether interest may be moved out of reserves at all is governed by the association's documents and by the board's decisions, not by the convenience of the posting.</p>
      <h2>When Reserve Cash Sits in More Than One Instrument</h2>
      <p>Reserve funds are often held across several accounts or certificates rather than one balance. Each needs reconciling against its own statement and its own period, and a maturity or rollover should be recorded as a movement between instruments rather than as a receipt. A rollover posted as income overstates the period and leaves a reserve balance that cannot be traced to the sum of the instruments it is actually held in.</p>
      <h2>Carry the Reconciliation Into the Board Package</h2>
      <p>A reconciliation that lives only in a working file does not help the people reading the reports. The reserve position shown in the monthly package should tie to the reconciled figure, and the package should carry the open items alongside it — an outstanding payment, an unexplained difference, a transfer awaiting authorization — so the board is reviewing the same statement the accounting work produced.</p>
      <h2>Common Questions</h2>
      <h3>Does a reserve reconciliation say whether the association has saved enough?</h3>
      <p>No, and it is important that it does not. Whether a reserve balance is adequate for the association's future obligations is a question for a reserve specialist and for the board acting on that study. A reconciliation establishes something narrower and still necessary: that the reported reserve balance is supported, that contributions and transfers are recorded on both sides, and that reserve-funded payments can be traced to authorized work.</p>
      <h3>What should happen to an old outstanding item that keeps rolling forward?</h3>
      <p>It should be investigated and resolved, with the reason recorded, rather than carried because it appeared on the previous reconciliation. An item that survives several reconciliations unexplained has stopped being a reconciling difference and become an unreviewed balance, and it is usually the first thing a year-end reviewer asks about.</p>
      <h2>Related HOA Resources</h2>
      <p>See <a href="/blog/hoa-reserve-accounting">HOA reserve accounting</a>, <a href="/blog/hoa-operating-vs-reserve-funds">operating vs. reserve funds</a>, the <a href="/blog/hoa-accounting-month-end-checklist">month-end checklist</a> and <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>.</p>
    </ArticleLayout>
  );
}
