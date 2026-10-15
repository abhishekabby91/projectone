import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Accounting Transition Checklist',
  description: 'A practical checklist for changing HOA accounting providers or management companies: opening balances, owner ledgers, bank reconciliations, reserves and board reporting.',
  path: '/blog/hoa-accounting-transition-checklist',
});

const faqs = [
  {
    question: 'What records should an HOA collect before changing accounting providers?',
    answer: 'Collect the current general ledger, trial balance, latest financial statements, bank statements, reconciliations, owner assessment ledger, receivables aging, unpaid invoices, vendor records, approved budget, reserve schedules and prior-year CPA adjustments. The exact handover depends on the association and its software.',
  },
  {
    question: 'Should the new provider start posting transactions immediately?',
    answer: 'Not before the opening balances and unresolved items are understood. Agree on a cutover date, reconcile the starting cash and key subledgers, document missing records and obtain the authorized reviewer’s approval of the opening position.',
  },
  {
    question: 'How do we prevent homeowner balances from changing during a transition?',
    answer: 'Preserve an owner-level ledger export with transaction dates, charges, payments, credits and ending balances. Reconcile the total owner ledger to the general ledger receivable control account and investigate differences before loading or continuing transactions in a new workflow.',
  },
  {
    question: 'Who approves payments during an accounting handover?',
    answer: 'The association’s authorized board members or other designated approvers retain payment authority under the governing documents and established controls. The handover should document who prepares, reviews and approves each step, rather than assuming the accounting provider has authority to release funds.',
  },
  {
    question: 'Can the association change accounting systems at the same time?',
    answer: 'It can, but combining a provider change with a software migration increases the number of variables. Where possible, stabilize the accounting records first or use a documented conversion plan with reconciled opening balances, mapped accounts, retained source records and a parallel review of key reports.',
  },
];

const stages = [
  {
    title: '1. Set the cutover date and responsibilities',
    detail: 'Confirm the final period the outgoing provider will close, the first period the incoming provider will handle, the person responsible for each open task, and the board or manager who signs off. Keep payment authority and accounting preparation/review roles explicit.',
    evidence: 'Written cutover date, responsibility list and approval matrix.',
  },
  {
    title: '2. Collect source records before access changes',
    detail: 'Request the trial balance, general ledger, financial statements, bank statements and reconciliations, owner ledgers, aging reports, open payables, vendor records, approved budget, reserve schedules and year-end CPA adjustments. Retain source files, not only PDFs of summary reports.',
    evidence: 'Dated export folder with a list of received and missing records.',
  },
  {
    title: '3. Reconcile opening balances',
    detail: 'Tie each bank account to the latest statement and reconciliation. Tie homeowner receivables to the owner-level ledger, payables to the open-invoice list, and reserve balances to the accounting records and bank evidence. Do not carry unexplained differences forward as a plug.',
    evidence: 'Opening trial balance plus reconciliation schedules and a documented exception list.',
  },
  {
    title: '4. Preserve each homeowner’s transaction history',
    detail: 'Keep assessment charges, special assessments, payments, credits, reversals and ending balances by owner or unit. Compare the owner-ledger total with the general-ledger control account. Confirm how unapplied cash, disputed balances and payment plans will be represented.',
    evidence: 'Owner ledger export and a tie-out to the receivables control account.',
  },
  {
    title: '5. Confirm operating and reserve fund treatment',
    detail: 'Document the account mapping for operating activity, reserve contributions, reserve expenditures and transfers. Confirm that the reporting structure preserves the association’s fund distinctions and does not combine activity merely to make the conversion easier.',
    evidence: 'Approved account mapping and opening fund balances that tie to the ledger.',
  },
  {
    title: '6. Rebuild the open-items list',
    detail: 'Identify uncleared checks, deposits in transit, unpaid invoices, pending owner credits, stale receivables, unreconciled differences and year-end adjustments still awaiting the CPA. Assign an owner and target date to each exception.',
    evidence: 'Exception register showing amount, age, owner, next action and status.',
  },
  {
    title: '7. Test the first board package before relying on it',
    detail: 'Review the balance sheet, income and expense statement, budget-to-actual report, receivables aging, payables and bank reconciliations. Compare material balances with the prior close and explain changes before the package goes to directors.',
    evidence: 'Reviewed first-period package with material variances and unresolved items explained.',
  },
  {
    title: '8. Close the handover and prevent repeat problems',
    detail: 'Record which historical issues were corrected, which remain open and who will resolve them. Agree on monthly close dates, file naming, report delivery, approval routing and escalation for missing records so the new process does not inherit the same backlog.',
    evidence: 'Signed-off handover summary and a recurring monthly close calendar.',
  },
];

export default function HoaAccountingTransitionChecklist() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="HOA Accounting Transition Checklist: Changing Providers or Management Companies"
      category="HOA Accounting"
      description="A step-by-step handover plan for association books, owner ledgers, bank reconciliations, reserve funds and the first board reporting package."
      publishedDate="2026-10-12"
      section="blog"
      slug="hoa-accounting-transition-checklist"
      inquiryTitle="Planning an HOA Accounting Handover?"
      inquiryLead="Tell us whether the change involves an accounting provider, a management company or an accounting system, and which records are not tying out yet."
    >
      <p>Changing an HOA accounting provider or community management company is not complete when the login details have been transferred. The association still needs a defensible opening position: bank balances that reconcile, homeowner balances that tie to the general ledger, clear operating and reserve activity, and an agreed list of unresolved items.</p>
      <p>This checklist is for boards, treasurers and community managers planning a handover. It focuses on the accounting records and review steps, not on legal advice or a particular software migration. Governing documents, state requirements and the association’s CPA may add steps for a specific community.</p>

      <h2>Before the handover: agree what “complete” means</h2>
      <p>Set a clear cutover date and decide which period the outgoing provider will close. Document who will export records, who will prepare the opening balances, who reviews the work, and who has authority to approve payments. Do not assume that access to an accounting platform automatically transfers ownership of the source records or payment authority.</p>
      <p>Keep the transition scope separate from routine monthly accounting. If historical balances are unreliable, identify the cleanup work and agree how it will be reviewed rather than quietly folding it into the first monthly close.</p>

      <h2>HOA accounting handover checklist</h2>
      <ol>
        {stages.map((stage) => (
          <li key={stage.title}>
            <h3>{stage.title}</h3>
            <p>{stage.detail}</p>
            <p><strong>Evidence to retain:</strong> {stage.evidence}</p>
          </li>
        ))}
      </ol>

      <h2>Three balances that should tie before the first close</h2>
      <ul>
        <li><strong>Cash:</strong> the general-ledger balance should tie to the bank statement through a reviewed reconciliation, including documented outstanding items.</li>
        <li><strong>Homeowner receivables:</strong> the total owner-level ledger should tie to the receivables control account, with unapplied cash and disputed items identified.</li>
        <li><strong>Operating and reserve records:</strong> balances and activity should remain clearly classified in the books and supporting schedules. The accounting presentation should not substitute for the board’s reserve-funding decisions.</li>
      </ul>
      <p>If a balance does not tie, record the difference, evidence reviewed, person responsible and next action. Avoid using a journal entry to force agreement unless the cause and support for that entry are understood and approved through the association’s normal review process.</p>

      <h2>What the first board package should show</h2>
      <p>The first package after the handover should be easy to compare with the previous period. Depending on the association’s reporting needs, it commonly includes the balance sheet, income and expense statement, budget-to-actual results, owner receivables aging, payables or disbursement activity, bank reconciliations and reserve-related schedules. Include a short exception summary so directors can distinguish a real change in the association’s position from a conversion or historical-record issue.</p>
      <p>For a recurring review sequence, use the <Link href="/blog/hoa-accounting-month-end-checklist">HOA month-end checklist</Link>. For the underlying cash-control step, see <Link href="/blog/hoa-bank-reconciliation">HOA bank reconciliation</Link>; for account structure and reporting, see the <Link href="/blog/hoa-chart-of-accounts">HOA chart of accounts guide</Link>.</p>

      <h2>When the handover also includes a software change</h2>
      <p>Keep the accounting cutover, data conversion and new workflow clearly documented. Map old accounts to new accounts, retain the original exports, verify owner balances and fund reporting, and compare key reports before treating the new system as the source of truth. Software features and data fields vary by product, configuration and access level; test the actual records available to the association.</p>
      <p>If possible, avoid changing the provider, accounting method, chart of accounts and software all at once without a conversion plan. If several changes must happen together, add a written reconciliation and approval checkpoint for each one.</p>

      <h2>Questions to ask the outgoing and incoming providers</h2>
      <ul>
        <li>Which period has been fully closed, and which reconciliations remain incomplete?</li>
        <li>Do the owner ledger, receivables control account and bank records tie to the same cutoff date?</li>
        <li>Are reserve transfers, reserve expenditures and operating activity mapped consistently?</li>
        <li>Which unpaid invoices, uncleared checks, unapplied receipts and prior-year adjustments remain open?</li>
        <li>Who retains payment approval, and how are preparation and review separated?</li>
        <li>What reports will the board receive, on what date, and who explains material variances?</li>
      </ul>

      <h2>Related HOA accounting resources</h2>
      <ul>
        <li><Link href="/industries/hoa-accounting">HOA accounting services and workflow</Link></li>
        <li><Link href="/blog/hoa-accounting-mistakes">HOA accounting mistakes to check during a handover</Link></li>
        <li><Link href="/blog/hoa-accounting-controls">HOA accounting controls</Link></li>
        <li><Link href="/blog/hoa-board-financial-package">HOA board financial package</Link></li>
      </ul>

      <h2>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}
    </ArticleLayout>
  );
}
