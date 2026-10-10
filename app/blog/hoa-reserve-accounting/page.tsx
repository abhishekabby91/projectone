import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Reserve Accounting: What Boards Should Track',
  description: 'A practical guide to HOA reserve accounting, including contributions, transfers, reserve expenses, reconciliations and board reporting.',
  path: '/blog/hoa-reserve-accounting',
});

const faqs = [
  {
    "question": "What should HOA reserve accounting track each month?",
    "answer": "At minimum, review reserve contributions, transfers, reserve-funded expenses, reserve cash balances and the related reconciliations. For larger projects, a supporting schedule can make spending easier for the board to follow."
  },
  {
    "question": "How should operating and reserve funds be shown?",
    "answer": "The records should make the two purposes distinguishable, whether through separate accounts, fund tracking or another structure that fits the system. The important point is that a board can see operating activity and reserve activity without reconstructing them from one combined cash figure."
  },
  {
    "question": "Can accounting determine whether an HOA has enough reserves?",
    "answer": "No. Reserve adequacy is a board decision informed by the association's reserve study and qualified advisers. Accounting's role is to make the current contributions, spending, transfers and balances clear."
  },
  {
    "question": "What should the board see in a reserve report?",
    "answer": "A useful report normally shows reserve cash, contributions, reserve-funded spending, budget-to-actual activity where applicable and the reconciliation behind the reported balances."
  }
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaReserveAccounting() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleLayout
      title="HOA Reserve Accounting: What Should Boards Track?"
      category="HOA Accounting"
      description="Reserve accounting should let an HOA see what has been contributed, what has been spent and how reserve activity is reflected in the financial records."
      publishedDate="2026-10-08"
      section="blog"
      slug="hoa-reserve-accounting"
      inquiryTitle="Need Cleaner HOA Reserve Reporting?"
      inquiryLead="Tell us how reserve contributions and spending are tracked today. We can review the monthly accounting workflow and reporting."
    >
      <p>HOA reserve accounting is the part of the books that helps a board understand money set aside for longer-term association needs. The accounting should make contributions, transfers, reserve-funded expenses and related cash balances visible.</p>
      <p>Reserve accounting is not the same thing as deciding how much an association should save or which projects it should fund. Those decisions belong to the association and its qualified advisers. Accounting's role is to record and report the activity accurately.</p>

      <h2>How Reserve Accounting Fits Into the Full HOA Books</h2>
<p>Reserve accounting is part of the wider HOA accounting process. The books need to show reserve contributions and reserve spending clearly while keeping operating activity understandable.</p>
<p>Accounting records can show what was received, spent and transferred. Decisions about reserve funding, projects and long-term planning remain with the association and its advisers.</p>

<h2>What Should Reserve Accounting Track?</h2>
      <ul>
        <li>Reserve contributions.</li>
        <li>Transfers between operating and reserve accounts.</li>
        <li>Reserve-funded invoices and payments.</li>
        <li>Reserve cash balances.</li>
        <li>Supporting schedules for significant projects.</li>
        <li>Reconciliations and month-end reporting.</li>
      </ul>

      <h2>Operating Funds vs. Reserve Funds</h2>
      <p>The distinction should be understandable in both the bank records and the financial reports. An association may have separate bank accounts, separate ledger accounts, fund tracking or another structure depending on its accounting system and reporting requirements.</p>
      <p>The important result is that a board can see which activity relates to normal operations and which relates to reserves.</p>

      <h2>Reserve Contributions</h2>
      <p>Contributions should be recorded according to the association's approved budget, assessment structure and accounting policy. The accounting team should not independently change contribution amounts simply because the bank balance looks different from the expected balance.</p>

      <h2>Reserve Expenses</h2>
      <p>When a reserve-funded project is paid, the invoice and payment should be coded and documented so the board can understand what the money was used for. A project schedule or supporting report can provide more useful detail than creating a new general-ledger account for every individual contractor.</p>

      <h2>Reserve Reconciliation</h2>
      <p>At month-end, reconcile reserve bank accounts and investigate outstanding items. Then compare the accounting activity with the reserve schedules or project information maintained by the association.</p>

      <h2>What Should the Board See?</h2>
      <table>
        <thead><tr><th>Report</th><th>Useful question</th></tr></thead>
        <tbody>
          <tr><td>Reserve cash</td><td>What cash is held in reserve accounts?</td></tr>
          <tr><td>Contributions</td><td>What was contributed during the period?</td></tr>
          <tr><td>Project spending</td><td>What reserve-funded work was paid?</td></tr>
          <tr><td>Budget-to-actual</td><td>Is reserve activity tracking against the plan?</td></tr>
          <tr><td>Reconciliation</td><td>Do the bank and accounting records agree?</td></tr>
        </tbody>
      </table>

      <h2>Reserve Accounting and Year-End</h2>
      <p>Clean monthly reserve records make year-end CPA work easier. The association should be able to provide reconciled bank statements, general-ledger detail and supporting schedules for material reserve activity.</p>

      <h2>Software Considerations</h2>
      <p>QuickBooks Online and association-management platforms can track reserve activity, but the setup needs to match the association's reporting requirements. Before changing software or account structure, document how operating and reserve activity is currently reported and reconciled.</p>

      <h2>Related HOA Resources</h2>
      <p>Continue with <a href="/blog/hoa-operating-vs-reserve-funds">HOA operating funds vs. reserve funds</a>, the <a href="/blog/hoa-accounting-month-end-checklist">month-end checklist</a>, and <a href="/blog/hoa-financial-statements-board-review">financial statements for board review</a>.</p>
      </ArticleLayout>
    </>
  );
}
