import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';
import FAQSection from '@/components/faq-section';

export const metadata: Metadata = genMeta({
  title: 'QuickBooks Online for HOA Accounting: What to Track',
  description: 'A practical guide to using QuickBooks Online for HOA accounting, including homeowner balances, operating funds, reserves, AP and monthly reporting.',
  path: '/blog/hoa-quickbooks-online',
});

const faqs = [
  {
    "question": "Is QuickBooks Online suitable for an HOA?",
    "answer": "It can support the accounting side of many HOA workflows, but suitability depends on how homeowner detail, reporting and management processes are handled. Some associations pair it with a community-management system rather than using it for every workflow."
  },
  {
    "question": "How should an HOA reconcile QuickBooks Online each month?",
    "answer": "Reconcile each bank account, review assessment and receivable activity, check payables and reserve transactions, and compare the resulting reports with the budget and prior period. Connected bank feeds make data entry easier but do not replace reconciliation."
  },
  {
    "question": "Can QuickBooks Online handle reserve accounting?",
    "answer": "It can record reserve contributions, transfers and expenses when the account and reporting structure is set up appropriately. The association should still be able to distinguish reserve activity clearly in its reports."
  },
  {
    "question": "What if the HOA uses another system for homeowner balances?",
    "answer": "Define which system is the detailed source for homeowner transactions and how totals flow into QuickBooks Online. The key control is a repeatable reconciliation between the detailed records and the general ledger."
  }
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaQuickBooksOnline() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />\n      <ArticleLayout
      title="QuickBooks Online for HOA Accounting: What Should Be Tracked?"
      category="HOA Accounting"
      description="QuickBooks Online can support an HOA accounting workflow when the records are structured around the association's funds, homeowner activity, vendors and monthly reporting needs."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-quickbooks-online"
      inquiryTitle="Is Your HOA QuickBooks File Difficult to Keep Clean?"
      inquiryLead="Tell us what is currently tracked in QuickBooks Online and what is maintained elsewhere. We can review the handoffs and reconciliation points."
    >
      <p>QuickBooks Online can work well for HOA accounting, particularly when the association has a disciplined monthly close. The biggest mistake is treating it like a generic small-business file and adding accounts whenever a new transaction appears.</p>

      <h2>Set Up the Chart of Accounts Around the Association</h2>
      <p>The chart should make assessment income, operating expenses, reserve activity, receivables and payables easy to understand. It should support the reports the board actually reads rather than becoming a long list of highly specific accounts.</p>

      <h2>Track Operating and Reserve Activity Separately</h2>
      <p>Separate bank accounts should be reconciled individually, and reporting should make the operating-versus-reserve distinction obvious. Transfers between funds should be recorded as transfers rather than disappearing into expense categories.</p>

      <h2>Decide Where Homeowner Detail Lives</h2>
      <p>Some HOAs keep detailed owner ledgers in QuickBooks Online; others use AppFolio, Yardi or association software for that detail. If two systems are used, define which system is the source of truth for each record and reconcile them on a consistent schedule.</p>

      <h2>Use Classes, Locations or Projects Carefully</h2>
      <p>QuickBooks Online offers several ways to add tracking detail. More tracking is not automatically better. A board should still be able to read the final reports without decoding a complicated structure.</p>

      <h2>Monthly Review</h2>
      <table>
        <thead><tr><th>Area</th><th>What to check</th></tr></thead>
        <tbody>
          <tr><td>Bank accounts</td><td>Are operating and reserve accounts reconciled?</td></tr>
          <tr><td>Assessments</td><td>Do charges and receipts agree with the homeowner detail?</td></tr>
          <tr><td>AP</td><td>Are bills coded and approved correctly?</td></tr>
          <tr><td>Reserves</td><td>Are contributions, transfers and project costs visible?</td></tr>
          <tr><td>Reports</td><td>Can the board understand current and year-to-date activity?</td></tr>
        </tbody>
      </table>

      <FAQSection subtitle="Common HOA accounting questions" items={faqs} columns={2} />

      <h2>Related HOA Accounting Resources</h2>
      <p>Read <a href="/blog/hoa-accounting-quickbooks">HOA accounting in QuickBooks</a>, <a href="/blog/hoa-accounting-controls">HOA accounting controls</a> and <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>.</p>
      </ArticleLayout>
    </>
  );
}
