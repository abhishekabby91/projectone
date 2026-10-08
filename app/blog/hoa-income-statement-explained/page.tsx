import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Income Statement Explained: What Should Boards Review?',
  description: 'A practical explanation of HOA income statements, assessment income, expenses, budget variances and what board members should review each month.',
  path: '/blog/hoa-income-statement-explained',
});

export default function HoaIncomeStatementExplained() {
  return (
    <ArticleLayout
      title="HOA Income Statement Explained: What Should Board Members Review?"
      category="HOA Financial Reporting"
      description="An HOA income statement shows income and expenses over a period. The most useful board review compares actual results with the approved budget and investigates meaningful differences."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-income-statement-explained"
      inquiryTitle="Need Help With HOA Financial Reporting?"
      inquiryLead="Tell us which report or accounting workflow you are working with. We can discuss how the records, reconciliations and monthly reporting fit together."
    >
      <p>An HOA income statement summarizes revenue and expenses for a defined period. For a board, it is useful because it shows whether the association's operating activity is tracking reasonably against its budget.</p>

      <h2>What Is Included?</h2>
      <p>Depending on the association and accounting structure, income may include regular assessments, special assessments, late charges and other association income. Expenses may include management, maintenance, utilities, insurance, administrative costs and other operating expenses.</p>

      <h2>Actual vs. Budget Is the Important Comparison</h2>
      <p>A single expense number rarely tells the board whether something is wrong. A better review compares the actual amount with the approved budget and asks why a meaningful variance occurred.</p>

      <table>
        <thead><tr><th>Review</th><th>Question</th></tr></thead>
        <tbody>
          <tr><td>Assessment income</td><td>Is income tracking the budget and expected billing?</td></tr>
          <tr><td>Maintenance</td><td>Is spending higher because of a known repair or recurring issue?</td></tr>
          <tr><td>Utilities</td><td>Is the variance seasonal, usage-related or unexpected?</td></tr>
          <tr><td>Insurance</td><td>Does the timing or renewal explain the difference?</td></tr>
          <tr><td>Administrative costs</td><td>Are recurring expenses coded consistently?</td></tr>
        </tbody>
      </table>

      <h2>Look at Trends, Not Only One Month</h2>
      <p>Some HOA expenses are seasonal or irregular. A large repair in one month may not indicate a recurring problem. Reviewing several months together can make the pattern easier to understand.</p>

      <h2>Separate Operating Activity From Reserve Activity</h2>
      <p>Boards should understand whether an expense belongs to normal operations or reserve-related activity. The exact accounting treatment depends on the association's governing documents, accounting policy and applicable requirements, but the reporting should make the distinction understandable.</p>

      <h2>Investigate Large Variances</h2>
      <p>A useful monthly package does not need an explanation for every small difference. It should, however, identify material or unusual variances and provide enough detail for the board to understand what caused them.</p>

      <h2>Common Questions</h2>
      <h3>Is an HOA income statement the same as a profit and loss statement?</h3>
      <p>The terms are often used similarly for an income-and-expense report. HOA reporting may use fund-based terminology or a different presentation depending on the association's accounting structure.</p>
      <h3>Should an HOA income statement include reserves?</h3>
      <p>Reserve activity should be presented according to the association's accounting structure and reporting policy. The key is that operating and reserve activity should be understandable and supported by the underlying records.</p>
      <h3>What should a board do when an expense is over budget?</h3>
      <p>First determine whether the difference is timing, a known one-time item, a coding issue or a genuine overspend. The board can then decide whether management action, a budget revision or simply continued monitoring is appropriate.</p>

      <h2>Related HOA Accounting Resources</h2>
      <p>See <a href="/blog/hoa-balance-sheet-explained">HOA balance sheet explained</a>, <a href="/blog/hoa-budget-to-actual-reports">budget-to-actual reporting</a> and <a href="/blog/hoa-financial-statements-board-review">HOA financial statements for board review</a>.</p>
    </ArticleLayout>
  );
}
