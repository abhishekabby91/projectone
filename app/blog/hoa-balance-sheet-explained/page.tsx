import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Balance Sheet Explained: What Should Boards Review?',
  description: 'Understand an HOA balance sheet, including cash, receivables, liabilities, operating funds, reserves and common items boards should review.',
  path: '/blog/hoa-balance-sheet-explained',
});

export default function HoaBalanceSheetExplained() {
  return (
    <ArticleLayout
      title="HOA Balance Sheet Explained: What Should Board Members Review?"
      category="HOA Financial Reporting"
      description="An HOA balance sheet shows what the association owns, owes and has available at a specific date. The useful review is not just the ending cash balance—it is whether the balances make sense for the association's operations and reserves."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-balance-sheet-explained"
      inquiryTitle="Need Help Reviewing HOA Financial Records?"
      inquiryLead="Share the reports, accounting system or reconciliation issue you are working with. We can discuss the accounting workflow and what should be reviewed."
    >
      <p>An HOA balance sheet is a point-in-time view of the association's assets, liabilities and equity or fund balances. For a board, it helps answer practical questions: How much cash is available? What is still owed to the association? What liabilities are outstanding? Are operating and reserve balances being presented correctly?</p>

      <h2>What Appears on an HOA Balance Sheet?</h2>
      <table>
        <thead><tr><th>Section</th><th>Typical HOA examples</th></tr></thead>
        <tbody>
          <tr><td>Assets</td><td>Bank accounts, receivables, prepaid expenses and other assets</td></tr>
          <tr><td>Liabilities</td><td>Vendor payables, accrued expenses and other amounts owed</td></tr>
          <tr><td>Fund or equity balances</td><td>Operating and reserve balances, depending on the accounting structure</td></tr>
        </tbody>
      </table>

      <h2>Cash Is Only One Part of the Picture</h2>
      <p>A bank balance does not tell the whole story. An HOA may have cash in more than one account, unpaid assessments, outstanding vendor bills and amounts restricted or designated for reserves. A board should look at the related balances rather than treating total cash as immediately available for any purpose.</p>

      <h2>Review Homeowner Receivables</h2>
      <p>Receivables represent amounts expected from homeowners or other parties. Large or aging receivables can affect the association's ability to fund operations even when the bank balance appears healthy. The balance sheet should be considered alongside an assessment aging or homeowner ledger report.</p>

      <h2>Review Operating and Reserve Balances</h2>
      <p>The association should be able to explain which accounts and balances relate to operating activity and which relate to reserves. The exact presentation depends on the accounting system and the association's accounting policy, but the underlying records should remain traceable.</p>

      <h2>Review Liabilities</h2>
      <p>Outstanding vendor invoices, accrued expenses and other liabilities matter because they represent obligations that may reduce available cash. A board reviewing cash without looking at unpaid obligations can get an incomplete picture.</p>

      <h2>Questions a Board Can Ask</h2>
      <ul>
        <li>Have all bank accounts been reconciled through the reporting date?</li>
        <li>What makes up the homeowner receivable balance?</li>
        <li>Are large receivable or payable balances explained?</li>
        <li>Are operating and reserve balances clearly identified?</li>
        <li>Are there old reconciling items that need cleanup?</li>
        <li>Does the balance sheet agree with the supporting schedules?</li>
      </ul>

      <h2>Common Questions</h2>
      <h3>Should an HOA balance sheet show reserve funds?</h3>
      <p>Reserve activity should be represented according to the association's accounting structure and reporting policy. The important point is that reserve-related balances should be identifiable and supported by the underlying records.</p>
      <h3>Why can an HOA have cash but still show liabilities?</h3>
      <p>Cash and liabilities measure different things. The association can have money in its bank accounts while also owing vendors or having other unpaid obligations.</p>
      <h3>Should the board review the balance sheet every month?</h3>
      <p>Monthly financial review is common because it gives the board a regular view of balances and changes. The balance sheet is most useful when reviewed together with the income statement, budget-to-actual report, bank reconciliations and supporting schedules.</p>

      <h2>Related HOA Accounting Resources</h2>
      <p>See <a href="/blog/hoa-financial-statements-board-review">HOA financial statements</a>, <a href="/blog/hoa-budget-to-actual-reports">HOA budget-to-actual reports</a>, <a href="/blog/hoa-board-financial-package">HOA board financial packages</a> and <a href="/services/hoa-financial-reporting">HOA financial reporting</a>.</p></ArticleLayout>
  );
}
