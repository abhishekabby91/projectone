import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';
import FAQSection from '@/components/faq-section';

export const metadata: Metadata = genMeta({
  title: 'HOA Accounting with Yardi: A Practical Monthly Workflow',
  description: 'A practical HOA accounting workflow for Yardi users, covering homeowner activity, reconciliations, AP, reserves and board reporting.',
  path: '/blog/hoa-accounting-yardi',
});

const faqs = [
  {
    "question": "Can Yardi support HOA accounting workflows?",
    "answer": "Yardi can support accounting and property or community management workflows, but the exact setup varies by product, configuration and the responsibilities of the management team. Review the actual reports and integrations used by the association."
  },
  {
    "question": "What should be checked in a monthly Yardi HOA close?",
    "answer": "Check assessment and receivable activity, bank reconciliations, payables, operating and reserve transactions, transfers and board reporting. The review should also identify old reconciling items and unusual balances."
  },
  {
    "question": "How should reserve activity be reviewed in Yardi?",
    "answer": "Make sure reserve contributions, transfers and project spending are identifiable in the accounting and reporting structure. The board should be able to trace significant activity without rebuilding it from raw transactions."
  },
  {
    "question": "Does using Yardi remove the need for reconciliations?",
    "answer": "No. A management platform can streamline the workflow, but bank, receivable and other control reconciliations are still necessary to confirm that the reported balances are reliable."
  }
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaAccountingYardi() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
      title="HOA Accounting with Yardi: What Should Be Reviewed Each Month?"
      category="HOA Accounting"
      description="For HOAs using Yardi or a related property-management workflow, the monthly accounting review should connect resident or homeowner activity, cash, payables, reserves and board reporting."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-accounting-yardi"
      inquiryTitle="Need Help Reviewing HOA Accounting in Yardi?"
      inquiryLead="Tell us which Yardi workflows your team uses and where the monthly close gets difficult. We can review the accounting handoffs and reporting process."
    >
      <p>Yardi is often part of a broader property-management technology stack. When an HOA uses Yardi, accounting review should focus on whether the detailed activity, general ledger, bank accounts and board reports remain consistent.</p>

      <h2>Review Assessment and Homeowner Activity</h2>
      <p>Start with recurring assessments, payment applications, credits, adjustments and outstanding balances. The detailed ledger should support the receivables balance reported in the general ledger.</p>

      <h2>Reconcile Operating and Reserve Accounts</h2>
      <p>Each bank account should be reconciled using a consistent cutoff date. Transfers between operating and reserve accounts should be visible and supported by the underlying transaction records.</p>

      <h2>Review Vendor and AP Activity</h2>
      <p>Review open payables, invoice coding, approvals and payments. Where a vendor performs both maintenance and reserve work, the accounting records should make the classification clear.</p>

      <h2>Build the Board Package From Reconciled Data</h2>
      <p>The monthly package should normally draw from reconciled records and include the financial statements, budget-to-actual results, receivables or delinquency information and reserve reporting relevant to the association.</p>

      <h2>Yardi Does Not Replace Accounting Review</h2>
      <p>A software system can automate posting and reporting, but it cannot decide whether an unexpected balance makes sense. Someone still needs to investigate unusual transactions, old reconciling items and inconsistencies between reports.</p>

      <FAQSection subtitle="Common HOA accounting questions" items={faqs} columns={2} />

      <h2>Related HOA Accounting Resources</h2>
      <p>Continue with <a href="/blog/hoa-accounting-appfolio">HOA accounting with AppFolio</a>, <a href="/blog/hoa-reserve-accounting">HOA reserve accounting</a> and <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a>.</p>
      </ArticleLayout>
    </>
  );
}
