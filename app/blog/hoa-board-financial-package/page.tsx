import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';
import FAQSection from '@/components/faq-section';

export const metadata: Metadata = genMeta({
  title: 'HOA Board Financial Package: What Should Be Included?',
  description: 'What an HOA board financial package should include, from the balance sheet and income statement to budget-to-actual, delinquency and reserve reports.',
  path: '/blog/hoa-board-financial-package',
});

const faqs = [
  { question: "Who prepares the HOA board financial package?", answer: "It may be prepared by an internal bookkeeper, community manager, accounting firm or outsourced accounting team. The important part is that the reports are based on reconciled records and reviewed by the appropriate responsible person." },
  { question: "How often should the board receive financial reports?", answer: "Monthly reporting is common because it gives the board timely visibility into cash, assessments, expenses and budget performance." },
  { question: "Should an HOA board receive bank statements?", answer: "Bank statements and reconciliations are useful supporting records, although the exact board package varies. A reconciliation summary can provide a concise view while the underlying statements remain available for review." },
  { question: "Does a California HOA need a different financial package from a Texas HOA?", answer: "The core accounting reports can be similar, but state law, governing documents and management practices can affect what the association needs to disclose or review. State-specific legal requirements should be confirmed with the association's qualified professionals." },
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaBoardFinancialPackage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
      title="HOA Board Financial Package: What Should Be Included Each Month?"
      category="HOA Accounting"
      description="A useful HOA board package brings the core financial statements together with the supporting schedules needed to understand cash, assessments, expenses, reserves and open items."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-board-financial-package"
      inquiryTitle="Need a Cleaner HOA Board Financial Package?"
      inquiryLead="If your monthly reports are difficult to review or require manual cleanup before the board meeting, tell us what you currently receive. We can look at the reporting workflow."
    >
      <p>An HOA board financial package should help volunteer board members understand the association's financial position without making them search through several unrelated reports.</p>
      <p>The exact package varies by association, but a practical monthly set normally combines financial statements with supporting schedules for assessments, cash, budget variances, payables and reserves.</p>

      <h2>How the Board Package Brings HOA Accounting Together</h2>
<p>The monthly board package is where several parts of HOA accounting come together. Financial statements, budget results, homeowner receivables, payables, bank reconciliations and reserve information should tell a consistent story.</p>
<p>The purpose is not to give the board more reports. It is to give the board the right information to understand the association's financial position.</p>

<h2>The Core Financial Statements</h2>
      <p>The package commonly starts with the balance sheet and income statement. These show the association's financial position and activity for the period.</p>
      <p>The statements are more useful when the accounts are reconciled and the classifications are consistent from month to month.</p>

      <h2>Budget-to-Actual Reporting</h2>
      <p>A budget-to-actual report helps the board identify meaningful differences between the approved plan and actual results. The report should make it easy to see both current-period and year-to-date variances.</p>

      <h2>Assessment and Delinquency Information</h2>
      <p>Because assessments are a major source of association revenue, the package may include an accounts receivable or delinquency report. This helps the board understand the amount outstanding without turning the financial package into a collection decision.</p>

      <h2>Reserve Reporting</h2>
      <p>Reserve balances and reserve-funded spending should be presented clearly enough for the board to understand available cash, contributions, transfers and project-related expenses.</p>
      <p>Operating and reserve information should not be blended in a way that makes the source or purpose of cash unclear.</p>

      <h2>Accounts Payable and Open Items</h2>
      <p>A vendor payable report or open-items list can help the board understand unpaid bills and unusual items. The accounting record should show what is due without implying that accounting itself is approving a vendor or project.</p>

      <h2>A Practical Monthly Package</h2>
      <table>
        <thead><tr><th>Report</th><th>Purpose</th></tr></thead>
        <tbody>
          <tr><td>Balance sheet</td><td>Shows assets, liabilities and fund balances.</td></tr>
          <tr><td>Income statement</td><td>Shows current and year-to-date activity.</td></tr>
          <tr><td>Budget-to-actual</td><td>Highlights differences from the approved budget.</td></tr>
          <tr><td>Receivables / delinquency</td><td>Shows outstanding homeowner balances.</td></tr>
          <tr><td>Reserve report</td><td>Shows reserve cash and project-related activity.</td></tr>
          <tr><td>AP / open items</td><td>Shows unpaid or unresolved transactions.</td></tr>
          <tr><td>Bank reconciliation summary</td><td>Confirms cash balances have been reviewed.</td></tr>
        </tbody>
      </table>

      <h2>Software and Reporting</h2>
      <p>The package may be built from QuickBooks Online, AppFolio, Yardi or another accounting and association-management system. Reports can look different across platforms, so consistency in account mapping and reporting dates matters more than the software name.</p>

      <h2>What Should Not Be Hidden in the Package?</h2>
      <p>Unusual adjustments, old unreconciled items, large unapplied receipts or significant unexplained variances should not disappear simply because the headline financial statements look reasonable. A short open-items schedule can make those issues easier to discuss.</p>

      <FAQSection subtitle="Common HOA accounting questions" items={faqs} />

      <h2>Related HOA Accounting Resources</h2>
      <p>Continue with <a href="/blog/hoa-budget-to-actual-reports">HOA budget-to-actual reports</a>, <a href="/blog/hoa-reserve-financial-reporting">HOA reserve financial reporting</a> or our <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a> page.</p>
      </ArticleLayout>
    </>
  );
}
