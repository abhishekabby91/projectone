import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Month-End Close Checklist',
  description: 'A practical property management month-end close checklist for bank reconciliations, tenant ledgers, payables, deposits, owner statements and review controls.',
  path: '/blog/property-management-month-end-close-checklist',
});

const faqs = [
  { question: 'What should be included in a property management month-end close?', answer: 'The close commonly includes transaction cutoff, bank reconciliations, tenant and owner ledger reviews, accounts payable, deposit liability checks, property-level reports, open-item resolution and documented review before statements are issued.' },
  { question: 'Should each property be reconciled separately?', answer: 'Records should preserve the property, owner and entity detail needed by the management agreement and reporting structure. The exact reconciliation design depends on how accounts and funds are held and how the accounting system is configured.' },
  { question: 'When should owner statements be prepared?', answer: 'Prepare owner statements after relevant transactions and reconciliations have been reviewed, and after exceptions affecting the statement are resolved or clearly disclosed under the agreed process.' },
  { question: 'Does this checklist replace trust-accounting or tax advice?', answer: 'No. Trust, escrow and security-deposit rules vary by jurisdiction, and tax treatment depends on the facts. Use this as an accounting workflow guide and confirm legal, regulatory and tax questions with the appropriate licensed professional.' },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementMonthEndCloseChecklist() {
  return (
    <ArticleLayout
      title="Property Management Month-End Close Checklist: From Transactions to Owner Reports"
      category="Property Management Accounting"
      description="A repeatable close turns property-level transactions into reconciled records, reviewed exceptions and owner-ready reporting."
      publishedDate="2026-10-10"
      section="blog"
      slug="property-management-month-end-close-checklist"
      inquiryTitle="Need Support With Property Month-End Close?"
      inquiryLead="Tell us which property systems you use, how many separate property or owner ledgers are involved, and which close tasks are taking the most time."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p>A property management month-end close should do more than produce a profit-and-loss report. It should connect the period's transactions to bank activity, tenant balances, owner and property records, vendor obligations, deposit liabilities and the reports sent to owners.</p>
      <p>The exact sequence varies by portfolio and software. The goal is consistent: identify the period being closed, reconcile the records, resolve material exceptions, document review and issue reports only when their underlying figures are ready.</p>

      <h2>At a glance: the monthly close sequence</h2>
      <ol>
        <li>Confirm the accounting period and transaction cutoff.</li>
        <li>Post and code rent, fees, invoices, credits and other activity to the correct property or entity.</li>
        <li>Reconcile bank accounts and investigate unmatched items.</li>
        <li>Review tenant receivables, unapplied cash and owner balances.</li>
        <li>Reconcile deposit and other liability records to supporting schedules.</li>
        <li>Review payables, recurring expenses, accruals and property allocations.</li>
        <li>Prepare property-level reports and owner statements from reconciled records.</li>
        <li>Record reviewer questions, corrections and final close approval.</li>
      </ol>

      <h2>1. Set the cutoff before reviewing balances</h2>
      <p>Agree which transactions belong in the month and identify late invoices, deposits received near period-end, credits and transactions waiting for coding. Keep an exception list with an owner, next action and status. Without a defined cutoff, two reports prepared on different days may disagree simply because they include different activity.</p>

      <h2>2. Reconcile every relevant bank account</h2>
      <p>Compare the statement period and ending balance with the accounting records. Match cleared deposits and payments, then investigate outstanding checks, deposits in transit, bank charges, transfers and duplicate or missing entries. Review the age of reconciling items rather than carrying them forward without explanation.</p>
      <p>Where an account holds funds for owners or tenants, follow the client's approved controls and the rules that apply to that account. This checklist is not a substitute for jurisdiction-specific trust or escrow guidance.</p>
      <p>For a deeper walkthrough, see the <Link href="/blog/property-management-bank-reconciliation" className="text-primary underline underline-offset-4">property management bank reconciliation guide</Link>.</p>

      <h2>3. Review tenant ledgers and rent-roll exceptions</h2>
      <p>Compare charges, receipts, credits and open balances with source records and approved lease information. Look for unapplied payments, duplicated charges, unexplained credits, balances that do not agree with the rent roll and move-in or move-out activity that has not been reflected correctly.</p>
      <p>A rent roll is a useful operational cross-check, but it is not a replacement for the general ledger or bank reconciliation. Investigate differences and document the reason for any remaining timing item. Related reading: <Link href="/blog/rent-roll-accounting" className="text-primary underline underline-offset-4">rent roll accounting</Link>.</p>

      <h2>4. Check deposits and other liabilities</h2>
      <p>Compare the deposit ledger and other relevant liability schedules with the corresponding accounting balances. Investigate tenant-level differences, refunds in progress, transfers and transactions posted to the wrong account. Keep the accounting trail clear enough for a reviewer to trace a balance back to its supporting record.</p>
      <p>Rules for holding, applying or returning security deposits differ by jurisdiction and situation. The accounting process should record approved activity accurately; legal decisions and required handling should be confirmed with the responsible professional.</p>

      <h2>5. Review accounts payable and property coding</h2>
      <p>Check open invoices, payments, recurring bills and expenses received after the cutoff. Confirm each item is assigned to the correct property, entity and account, and that supporting documentation is available. Separate routine repairs from items that need additional accounting review rather than making assumptions based only on a vendor description.</p>
      <p>For shared costs, retain the basis used to allocate the amount across properties. For commercial portfolios, make sure recoverable-cost schedules can be traced to expense detail and the client's approved lease or recovery rules.</p>

      <h2>6. Tie owner balances and statements to the books</h2>
      <p>Before preparing owner reports, compare the relevant owner ledger, property income and expense activity, management fees, approved reserves or holds, and proposed distributions with the underlying records. Investigate unexplained differences instead of forcing a statement to match a target amount.</p>
      <p>Owner statements should clearly identify the reporting period and distinguish recorded activity from amounts that are pending or require explanation. Payment release and distribution approval remain with the client under its established controls.</p>

      <h2>7. Review property-level financial reports</h2>
      <p>Prepare the agreed reports from the reconciled ledger. Depending on the engagement, these may include an income statement, balance sheet, cash summary, rent roll, aged receivables, open payables and owner statement. Compare material changes with the prior period or budget when that information is available, and investigate unexpected balances before circulation.</p>
      <p>The IRS explains that good rental records help owners monitor activity, prepare financial statements, identify receipts and expenses, and support tax reporting. See the official <a href="https://www.irs.gov/businesses/small-businesses-self-employed/tips-on-rental-real-estate-income-deductions-and-recordkeeping" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">IRS guidance on rental real estate records</a>. Tax treatment should be confirmed with the owner's tax professional.</p>

      <h2>8. Keep a short, reviewable close record</h2>
      <p>A completed close should leave evidence of what was reviewed and what remains open. A simple log can include:</p>
      <ul>
        <li>Property or entity and reporting period.</li>
        <li>Preparer and reviewer.</li>
        <li>Reconciliations completed and unresolved items.</li>
        <li>Corrections posted and supporting records retained.</li>
        <li>Reports prepared, reviewed and issued.</li>
        <li>Open questions, responsible person and next action.</li>
      </ul>
      <p>Use the record to make the next close more consistent. Repeated exceptions may indicate a coding, handoff or source-data problem that should be addressed upstream.</p>

      <h2>How software fits into the process</h2>
      <p>Platforms such as AppFolio, Buildium and Yardi can organise property and owner records, transactions and reports, but the review process still needs clear responsibilities and exception handling. Available reports and workflows depend on the platform, product and configuration; verify steps against the system actually used by the client.</p>
      <p>Start with the existing accounting setup rather than assuming a software change is necessary. Our <Link href="/industries/property-management" className="text-primary underline underline-offset-4">property management accounting page</Link> explains recurring accounting support around a client's existing workflow.</p>

      <h2>Common reasons a close gets stuck</h2>
      <ul>
        <li>Bank accounts are reconciled late or old differences are never investigated.</li>
        <li>Tenant payments remain unapplied or are posted to the wrong ledger.</li>
        <li>Invoices arrive after reports are prepared and the cutoff is unclear.</li>
        <li>Owner statements are assembled before key reconciliations are complete.</li>
        <li>Shared expenses lack a consistent allocation trail.</li>
        <li>Review comments are handled in email but not recorded against the close.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <h2>Related property management accounting resources</h2>
      <ul>
        <li><Link href="/blog/property-management-accounting" className="text-primary underline underline-offset-4">Property management accounting: what should be tracked?</Link></li>
        <li><Link href="/blog/property-management-bookkeeping-vs-accounting" className="text-primary underline underline-offset-4">Property management bookkeeping vs. accounting</Link></li>
        <li><Link href="/blog/property-management-chart-of-accounts" className="text-primary underline underline-offset-4">Property management chart of accounts</Link></li>
        <li><Link href="/blog/property-management-bank-reconciliation" className="text-primary underline underline-offset-4">Property management bank reconciliation</Link></li>
        <li><Link href="/services/property-management-accounting" className="text-primary underline underline-offset-4">Property management accounting services</Link></li>
      </ul>
    </ArticleLayout>
  );
}
