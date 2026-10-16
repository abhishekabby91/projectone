import { Metadata } from 'next';
import Link from 'next/link';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/hoa-accounting/self-managed-hoa-accounting';

export const metadata: Metadata = genMeta({
  title: 'Accounting Support for Self-Managed HOAs',
  description: 'Accounting support for self-managed HOAs, including homeowner ledgers, reconciliations, payables, reserves and monthly board reports. The board keeps control.',
  path: PATH,
});

const faqs = [
  {
    question: 'Can a self-managed HOA hire outside help only for accounting?',
    answer: 'Yes. A board can keep responsibility for governance, vendors and decisions while engaging an accounting provider for agreed bookkeeping, reconciliations, schedules and monthly reporting. The contract and access permissions should make the boundary clear.',
  },
  {
    question: 'What accounting work can be handled externally?',
    answer: 'Depending on the association and its systems, recurring work can include posting assessments and receipts, maintaining homeowner ledgers, coding approved invoices, reconciling bank accounts, tracking operating and reserve activity, preparing aging schedules and assembling monthly reports.',
  },
  {
    question: 'Should an external bookkeeper approve or release payments?',
    answer: 'Payment authority should remain with the people authorized by the association. A common control is to separate invoice entry and reconciliation from final payment approval and release, and to give the board direct access to statements and accounting reports.',
  },
  {
    question: 'Does this replace the HOA manager or CPA?',
    answer: 'Not necessarily. Accounting-only support is different from full community management, legal advice, tax advice or an independent CPA engagement. The scope should identify what the provider prepares and which decisions, filings and reviews stay with the board or its licensed professionals.',
  },
  {
    question: 'What should a board prepare before changing accounting support?',
    answer: 'Gather the current general ledger, chart of accounts, bank statements, reconciliation history, homeowner balances, unpaid bills, reserve schedules, prior financial packages and open questions. Agree on opening balances, access permissions, reporting deadlines and who signs off before the first close.',
  },
];
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'Self-Managed HOA Accounting', url: `${baseUrl}${PATH}` },
]);

export default function SelfManagedHoaAccountingPage() {
  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-6 pt-6 text-sm text-muted md:px-8">
        <ol className="flex flex-wrap items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/hoa-accounting" className="hover:text-primary">HOA Accounting</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Self-Managed HOA Accounting</li>
        </ol>
      </nav>

      <section className="px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">HOA accounting services</p>
          <h1 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-primary md:text-5xl">Accounting Support for Self-Managed HOAs</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">Keep the board in control of the community while giving recurring accounting work a documented process, clear ownership and a consistent monthly close.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="#inquiry" className="rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:opacity-90">Discuss accounting support</Link>
            <Link href="/industries/hoa-accounting" className="rounded-lg border border-border px-5 py-3 font-semibold text-primary hover:border-primary">All HOA accounting services</Link>
          </div>
        </div>
      </section>

      <section className="bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">A middle option between volunteer-only books and full community management</h2>
          <p className="leading-relaxed text-muted">A self-managed HOA does not have to choose between asking a volunteer treasurer to do every accounting task and hiring a company to manage the whole community. A third option is to keep governance and operating decisions with the board while assigning defined bookkeeping and reporting tasks to an outside provider.</p>
          <p className="leading-relaxed text-muted">The useful question is not whether the board should give up control. It is which recurring tasks need a reliable owner, which controls must stay with the association, and what records the board needs to review each month.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">What accounting-only support can cover</h2>
          <p className="leading-relaxed text-muted">The scope should be agreed before work starts. Depending on the association's platform, records and existing process, it may include:</p>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed text-muted">
            <li>Posting assessment charges and applying homeowner payments to the correct ledgers.</li>
            <li>Maintaining receivables aging and identifying unapplied or unidentified receipts.</li>
            <li>Recording vendor invoices using the association's approved coding and documentation rules.</li>
            <li>Reconciling operating, reserve and other association bank accounts each month.</li>
            <li>Tracking reserve contributions, transfers and spending separately from operating activity.</li>
            <li>Preparing balance-sheet, income-and-expense, budget-to-actual, payables and delinquency schedules.</li>
            <li>Maintaining an open-items list so missing documents and unexplained balances are visible before reports go to the board.</li>
          </ul>
          <p className="leading-relaxed text-muted">Not every association needs every item. The written scope should say what is included, what is excluded, how exceptions are escalated and who reviews the completed work.</p>

          <h2 className="pt-5 font-serif text-2xl font-bold text-primary md:text-3xl">Keep board decisions and payment authority with the association</h2>
          <p className="leading-relaxed text-muted">An accounting provider can prepare records and flag exceptions without deciding how the community is governed. The board or its authorized manager should retain decisions such as approving invoices, authorizing payments, adopting budgets, changing assessment policies, directing collections and approving reserve use.</p>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed text-muted">
            <li>Use named user accounts and permissions suited to each task; avoid shared logins.</li>
            <li>Separate invoice entry and reconciliation from final payment approval where practical.</li>
            <li>Keep bank statements and reports available directly to the association's authorized officers.</li>
            <li>Record who approved unusual transactions, adjustments and transfers.</li>
            <li>Document access removal and records handover when a volunteer or provider changes.</li>
          </ul>
          <p className="leading-relaxed text-muted">These are workflow principles, not a substitute for the association's governing documents, bank requirements or state-specific rules. Appropriate controls depend on the association and its activities.</p>

          <h2 className="pt-5 font-serif text-2xl font-bold text-primary md:text-3xl">A monthly close the board can actually review</h2>
          <ol className="list-decimal space-y-2 pl-6 leading-relaxed text-muted">
            <li>Collect bank statements, payment processor reports, invoices and other source documents.</li>
            <li>Post and review assessment charges, receipts, approved expenses and recurring entries.</li>
            <li>Reconcile each bank account and investigate old or unusual reconciling items.</li>
            <li>Compare homeowner balances to assessment and receipt records; list unapplied cash and exceptions.</li>
            <li>Review operating and reserve activity, transfers and reserve-related spending separately.</li>
            <li>Prepare the agreed reports and compare actual results with budget and prior periods.</li>
            <li>Send the board the reports with unresolved questions, responsible parties and due dates.</li>
          </ol>
          <p className="leading-relaxed text-muted">Use the <Link className="font-medium text-primary underline" href="/blog/hoa-accounting-month-end-checklist">HOA month-end checklist</Link> for a more detailed close sequence, and the <Link className="font-medium text-primary underline" href="/blog/hoa-accounting-controls">HOA accounting controls guide</Link> for review points that help keep records dependable.</p>

          <h2 className="pt-5 font-serif text-2xl font-bold text-primary md:text-3xl">Handling a backlog or changing providers</h2>
          <p className="leading-relaxed text-muted">If records are behind, do not start by posting every old transaction as quickly as possible. First agree on the period to be brought current, obtain source documents, identify the last reliable reconciled date and document opening balances. Then work through bank reconciliations, homeowner ledgers, payables and reserve activity in a controlled sequence.</p>
          <p className="leading-relaxed text-muted">Keep a separate exception log for missing statements, old checks, unexplained transfers, duplicate invoices, unallocated receipts and balances that need board or CPA input. Do not force a balance to match simply to close the month. The board should understand which items are resolved and which remain open. See our guide to <Link className="font-medium text-primary underline" href="/blog/hoa-accounting-cleanup">HOA accounting cleanup</Link> and the <Link className="font-medium text-primary underline" href="/blog/how-to-outsource-hoa-accounting">questions to settle when engaging HOA accounting support</Link>.</p>

          <h2 className="pt-5 font-serif text-2xl font-bold text-primary md:text-3xl">What the board should agree before starting</h2>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed text-muted">
            <li><strong>Scope:</strong> which monthly and year-end tasks are included and excluded.</li>
            <li><strong>System access:</strong> platform, roles, bank access level, multifactor authentication and who owns the subscription.</li>
            <li><strong>Timing:</strong> document due dates, close target and board-package delivery date.</li>
            <li><strong>Review:</strong> who signs off on reports, adjustments, unusual items and reconciliations.</li>
            <li><strong>Escalation:</strong> how missing documents, potential errors and questions requiring board or CPA input are recorded.</li>
            <li><strong>Ownership and exit:</strong> the association retains its records and can obtain a usable handover if the arrangement ends.</li>
          </ul>
          <p className="leading-relaxed text-muted">For the broader service scope, visit <Link className="font-medium text-primary underline" href="/industries/hoa-accounting">HOA and community association accounting</Link>. This page focuses on associations that want accounting support without transferring overall community management.</p>

          <h2 className="pt-5 font-serif text-2xl font-bold text-primary md:text-3xl">Frequently asked questions</h2>
          {faqs.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <h3 className="font-semibold text-primary">{faq.question}</h3>
              <p className="leading-relaxed text-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <InquirySection source={PATH} title="Discuss accounting-only support for your HOA" lead="Tell us how many associations or units are involved, which accounting system you use, and which parts of the monthly close need attention." />
      <CTABanner title="Keep the board in control of the decisions" description="Define the accounting workflow, keep approvals with authorized people and give the board a consistent monthly package to review." cta={{ text: 'Talk to our team', href: '/contact' }} ctaSecondary={{ text: 'HOA accounting services', href: '/industries/hoa-accounting' }} background="primary" />
    </main>
  );
}
