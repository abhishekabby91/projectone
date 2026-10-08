import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';
import FAQSection from '@/components/faq-section';

export const metadata: Metadata = genMeta({
  title: 'HOA Financial Statements: What Boards Should Review',
  description: 'A practical guide to HOA financial statements, including the balance sheet, income statement, budget-to-actual, reserves and delinquency reports.',
  path: '/blog/hoa-financial-statements-board-review',
});

const faqs = [
  {
    "question": "What financial reports should an HOA board review each month?",
    "answer": "A practical package commonly includes the balance sheet, income statement, budget-to-actual report, accounts receivable aging, accounts payable detail and reserve activity. The exact package depends on the association, but the reports should agree with the underlying accounting records."
  },
  {
    "question": "What should an HOA board look for on the balance sheet?",
    "answer": "Start with operating and reserve cash, then look for unusual receivables, old prepaid balances, vendor liabilities and other balances that changed materially from the prior month. The useful question is whether the change can be explained."
  },
  {
    "question": "How should an HOA board review budget-to-actual results?",
    "answer": "Look for material differences from the approved budget and ask what caused them. A variance is not automatically an error; the important part is whether the difference is understandable and supported by the underlying transactions."
  },
  {
    "question": "What should be included with an HOA board financial package?",
    "answer": "The package should contain the recurring financial reports plus the schedules needed to explain important balances, such as delinquency, payables, reserve activity and reconciliations. Consistency matters because it lets board members focus on changes rather than learning a new format each month."
  }
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaFinancialStatements() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
      title="HOA Financial Statements: What Should Board Members Review?"
      category="HOA Accounting"
      description="Board members do not need to be accountants to review an HOA financial package. They do need to know what each report is showing and which questions to ask."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-financial-statements-board-review"
      inquiryTitle="Want a Cleaner HOA Board Package?"
      inquiryLead="Tell us what reports your board receives now and where questions usually arise. We can look at the accounting workflow behind the package."
    >
      <p>A good HOA financial package should help the board answer a few straightforward questions: How much cash do we have? Are homeowners paying their assessments? Are we within budget? What has been spent from reserves? What bills are outstanding?</p>
      <p>The reports do not need to be complicated. They need to agree with the underlying accounting records and present operating and reserve activity clearly enough for the board to make decisions.</p>

      <h2>The Main HOA Financial Statements</h2>
      <p>Most associations rely on a balance sheet and income statement, supported by reports such as budget-to-actual, accounts receivable aging, accounts payable and reserve activity. The exact package varies with the association and its governing requirements.</p>

      <h2>Balance Sheet: What Does the Association Own and Owe?</h2>
      <p>The balance sheet shows assets, liabilities and equity or fund balances at a point in time. For an HOA, cash is usually the first area a board member looks at, but it should not be the only one.</p>
      <p>Check the operating and reserve cash balances separately. Then look for unusual receivables, old prepaid balances, vendor liabilities or other accounts that have changed significantly from the prior month.</p>

      <h2>Income Statement: What Happened During the Month?</h2>
      <p>The income statement shows revenue and expenses over a period. Assessment income is usually the main recurring revenue source, while expenses can include management, insurance, utilities, repairs, maintenance and administrative costs.</p>
      <p>A variance from the budget does not automatically mean something went wrong. A large repair bill may be legitimate. The board's question should be: <strong>Can we explain the difference?</strong></p>

      <h2>Budget-to-Actual: Where Are We Compared With the Plan?</h2>
      <p>Budget-to-actual reporting compares what the association expected to spend or collect with what actually happened. Reviewing the report monthly gives the board time to react rather than discovering a significant variance at year-end.</p>
      <table>
        <thead><tr><th>Question</th><th>What to look for</th></tr></thead>
        <tbody>
          <tr><td>Income</td><td>Are assessment collections tracking reasonably against the budget?</td></tr>
          <tr><td>Maintenance</td><td>Are recurring repairs or contracts running above plan?</td></tr>
          <tr><td>Utilities</td><td>Are seasonal or unusual changes explainable?</td></tr>
          <tr><td>Insurance</td><td>Are premiums and timing consistent with the budget?</td></tr>
          <tr><td>Reserves</td><td>Are planned contributions and spending being recorded separately?</td></tr>
        </tbody>
      </table>

      <h2>Accounts Receivable: Who Still Owes Assessments?</h2>
      <p>The aged receivables report helps the board see unpaid assessments and other homeowner balances. Look beyond the total and ask how much is current, how much is old, and whether credits or unapplied payments are distorting individual balances.</p>
      <p>The board or its designated collection professional decides what action should be taken on delinquent accounts. Accounting's job is to keep the underlying ledger accurate and the aging report current.</p>

      <h2>Reserve Activity Should Be Easy to See</h2>
      <p>Reserve accounting deserves particular attention because reserve funds are intended for longer-term needs. Contributions, transfers and reserve-funded projects should be identifiable in the financial records and reports.</p>
      <p>If a board has to reconstruct reserve activity from a combined bank balance, the reporting structure needs attention.</p>

      <h2>What Should a Board Ask at the Monthly Meeting?</h2>
      <ul>
        <li>Are cash balances consistent with the reconciled bank accounts?</li>
        <li>What changed materially from last month?</li>
        <li>Which income or expense categories are materially different from budget?</li>
        <li>How much is currently delinquent, and how old are the balances?</li>
        <li>Are there significant unpaid vendor invoices?</li>
        <li>What reserve contributions or expenditures occurred?</li>
        <li>Are there unresolved accounting items that could change the reports?</li>
      </ul>

      <h2>What Makes a Financial Package Useful?</h2>
      <p>Consistency matters. If the same reports are provided in the same order every month, board members can focus on changes instead of learning a new format each meeting.</p>
      <p>The package should also be supported by reconciliations and schedules. A clean-looking report is not a substitute for accurate underlying records.</p>

      <FAQSection subtitle="Common HOA accounting questions" items={faqs} />

      <h2>Related HOA Accounting Resources</h2>
      <p>Our <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a> page explains the recurring work behind the board package. For a month-by-month process, see the <a href="/blog/hoa-accounting-month-end-checklist">HOA accounting month-end checklist</a>.</p>
      </ArticleLayout>
    </>
  );
}
