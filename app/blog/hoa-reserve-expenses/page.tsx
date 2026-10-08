import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';
import FAQSection from '@/components/faq-section';

export const metadata: Metadata = genMeta({
  title: 'HOA Reserve Expenses: How Should Reserve-Funded Costs Be Tracked?',
  description: 'A practical guide to tracking HOA reserve expenses, project costs, invoices, payments, transfers and reserve cash reconciliation.',
  path: '/blog/hoa-reserve-expenses',
});

const faqs = [
  { question: "Can an HOA pay a routine repair from reserves?", answer: "That depends on the association's governing documents, reserve plan, accounting policy and the nature of the work. Accounting should record the authorized treatment rather than make the underlying governance decision." },
  { question: "Should reserve expenses be shown separately from operating expenses?", answer: "Yes. They should be clearly identifiable so the board can understand operating performance separately from reserve activity." },
  { question: "How should reserve project costs be reviewed?", answer: "A useful review connects the project, supporting invoice, approval, payment and reserve report. Larger projects may also need additional schedules maintained by management." },
  { question: "Does reserve accounting differ between California and Florida HOAs?", answer: "The accounting concepts are similar, but state requirements and association documents can affect reserve planning, disclosures and governance. The accounting team should not assume that a process used in one state automatically satisfies another state's requirements." },
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaReserveExpenses() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
      title="HOA Reserve Expenses: How Should Reserve-Funded Costs Be Tracked?"
      category="HOA Accounting"
      description="Reserve-funded expenses need a clear connection between the approved project, vendor bill, payment, accounting entry and reserve reporting."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-reserve-expenses"
      inquiryTitle="Are Reserve Expenses Difficult to Track?"
      inquiryLead="Tell us how reserve projects and invoices are recorded today. We can review the accounting trail from invoice through payment and monthly reporting."
    >
      <p>HOA reserve expenses are different from routine operating expenses because they are usually connected to planned replacement, repair or capital work funded from reserves.</p>
      <p>The accounting challenge is keeping the project, invoice, payment and reserve records connected. A reserve balance can look correct while the supporting project detail is difficult to follow.</p>

      <h2>What Is a Reserve Expense?</h2>
      <p>A reserve expense is an association cost paid from reserve funds for work that belongs to the association's reserve plan or approved reserve activity. Whether a particular cost should be paid from reserves is an association and governance decision, not something accounting should decide independently.</p>

      <h2>Start With the Project or Approved Work</h2>
      <p>Accounting should have enough information to identify the project or work category, the applicable reserve account and the approval or supporting documentation required by the association's process.</p>

      <h2>Track the Vendor Invoice</h2>
      <p>The invoice should identify the vendor, work performed, amount and other information needed for coding and approval. If a vendor performs both routine maintenance and reserve-related work, the invoices should make the distinction clear enough for accounting to code them correctly.</p>

      <h2>Follow the Payment Trail</h2>
      <p>After approval, the payment should be traceable from the payable record to the bank transaction. This is particularly important for large project payments where the board may later need to understand how reserve cash was used.</p>

      <h2>Reconcile Reserve Cash</h2>
      <p>Reserve bank accounts should be reconciled just like operating accounts. The reconciliation should account for deposits, transfers, payments and outstanding items rather than relying only on the balance shown by the accounting software.</p>

      <h2>Operating Expense or Reserve Expense?</h2>
      <p>The classification should follow the association's approved accounting policy, governing documents and professional guidance where applicable. Accounting should not move a cost to reserves simply because the operating budget has no remaining room.</p>

      <table>
        <thead><tr><th>Record</th><th>What it should explain</th></tr></thead>
        <tbody>
          <tr><td>Project record</td><td>What reserve work is being tracked?</td></tr>
          <tr><td>Vendor invoice</td><td>What work or goods were billed?</td></tr>
          <tr><td>Approval</td><td>Was the transaction authorized under the association's process?</td></tr>
          <tr><td>Payment</td><td>When and from which account was it paid?</td></tr>
          <tr><td>Reserve report</td><td>How did the transaction affect reserve activity?</td></tr>
        </tbody>
      </table>

      <h2>Software Can Help With Project-Level Detail</h2>
      <p>QuickBooks Online can be structured with classes, locations, projects or other tracking methods depending on the setup. AppFolio and Yardi may provide additional property or project-level reporting. The right setup depends on how the association and manager operate; the accounting requirement is still a clear audit trail.</p>

      <FAQSection subtitle="Common HOA accounting questions" items={faqs} />

      <h2>Related HOA Accounting Resources</h2>
      <p>See <a href="/blog/hoa-reserve-accounting">HOA reserve accounting</a>, <a href="/blog/hoa-reserve-reconciliation">HOA reserve reconciliation</a> and our <a href="/industries/hoa-accounting">HOA accounting and bookkeeping</a> page.</p>
      </ArticleLayout>
    </>
  );
}
