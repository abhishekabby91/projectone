import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Lender Reporting Checklist',
  description: 'Prepare consistent property management lender reporting with reconciled rent rolls, operating statements, debt schedules and supporting records.',
  path: '/blog/property-management-lender-reporting',
});

const faqs = [
  { question: 'What reports may a lender request from a property manager?', answer: 'Requests vary by loan and property, but may include a rent roll, operating statement, balance sheet, bank statements, delinquency detail, occupancy information, capital expenditure schedules and supporting general-ledger detail. Confirm the lender’s exact checklist and reporting period rather than assuming every package is the same.' },
  { question: 'Should the rent roll and financial statements be reconciled before submission?', answer: 'Yes. Reconcile the rent roll to tenant ledgers and relevant general-ledger balances, check reporting dates and investigate material differences before the package is finalized. Explain unresolved items instead of silently adjusting a report to make totals agree.' },
  { question: 'Can an external accounting provider prepare a lender reporting package?', answer: 'A provider can support agreed tasks such as compiling reconciled reports, checking schedules against the ledger, organizing evidence and tracking open questions. The borrower, property manager and authorized reviewer remain responsible for confirming the package is complete and approved for release.' },
  { question: 'Does this checklist determine loan covenant compliance?', answer: 'No. Accounting support can organize figures and calculate metrics using approved definitions, but the loan agreement controls covenant definitions and testing. Have the responsible finance lead, lender or qualified adviser confirm interpretations and any compliance conclusion.' },
];

export default function PropertyManagementLenderReporting() {
  return (
    <ArticleLayout
      title="Property Management Lender Reporting: A Practical Checklist"
      category="Property Management Accounting"
      description="Build a traceable reporting package from reconciled property records, consistent reporting periods and documented review—not disconnected spreadsheets."
      publishedDate="2026-10-15"
      section="blog"
      slug="property-management-lender-reporting"
      faqs={faqs}
      inquiryTitle="Need Help Preparing Property Reporting Packages?"
      inquiryLead="Tell us which reports are requested, which property accounting system you use, and how the figures are reviewed before submission."
    >
      <p>Lender reporting brings several property-level records together for a specific review date. A rent roll, operating statement and bank balance may each be accurate on their own but still fail to tell a consistent story if they use different cutoff dates, property groupings or accounting assumptions.</p>
      <p>A reliable process starts with the lender’s written request, identifies the source for each requested figure, reconciles the underlying records and documents who reviewed the final package. The exact requirements depend on the loan agreement, property type and lender; this checklist is an accounting workflow, not a substitute for the lender’s instructions.</p>

      <h2>1. Confirm the reporting period and requested definitions</h2>
      <p>Record the as-of date, period covered, required properties and legal entities, submission deadline, file formats and named reviewer. Clarify whether the lender wants monthly, quarter-to-date, year-to-date or trailing-period figures. For ratios such as debt-service coverage, use the definition in the loan documents rather than a generic industry formula.</p>

      <h2>2. Reconcile the core property records</h2>
      <ul>
        <li><strong>Rent roll:</strong> compare unit or tenant records with the tenant ledger, contractual rent fields and the reporting date. Identify vacancies, concessions, arrears and other items that affect interpretation.</li>
        <li><strong>Operating statement:</strong> check income and expense coding, property/entity assignment, cutoff and material unusual items against the general ledger.</li>
        <li><strong>Cash and bank activity:</strong> reconcile relevant accounts to statements and explain outstanding items. Keep owner funds, deposits and operating cash distinct according to the account structure and applicable requirements.</li>
        <li><strong>Accounts receivable and payable:</strong> review aging, disputed balances, unpaid invoices and material obligations that may not be obvious from cash activity alone.</li>
        <li><strong>Capital work:</strong> tie material capital expenditure schedules to invoices, approvals and ledger postings; distinguish approved budgets from actual spending.</li>
      </ul>

      <h2>3. Tie schedules back to the general ledger</h2>
      <p>For each schedule, record the source report, run date, filters, reporting period and ledger accounts used. Confirm that totals agree with the relevant control accounts or explain legitimate differences, such as timing, classification or a report that excludes certain entities. Do not force a tie-out with an unsupported journal entry.</p>
      <p>Where the portfolio spans multiple properties or legal entities, preserve those dimensions throughout the package. Consolidated totals should be traceable back to each included property, with intercompany amounts handled consistently and not counted twice.</p>

      <h2>4. Keep supporting evidence and exceptions together</h2>
      <p>Use a simple exception log with the report or account affected, amount, explanation, supporting document, owner of the action and resolution status. Attach or reference bank reconciliations, ledger detail, invoices and other evidence requested by the lender. Mark estimates and unresolved items clearly; never present an unverified number as a reconciled fact.</p>

      <h2>5. Review before release</h2>
      <ul>
        <li>Confirm all requested properties, entities, schedules and periods are included.</li>
        <li>Check that report dates and accounting bases are consistent or clearly labelled.</li>
        <li>Compare significant variances with prior periods and approved budgets where relevant.</li>
        <li>Confirm calculations use the definitions and source figures approved for the package.</li>
        <li>Have the authorized client reviewer approve the final files and retain the submitted version.</li>
      </ul>

      <h2>6. Make recurring reporting easier</h2>
      <p>Save a repeatable checklist, source-report list, account mapping and review log for each lender or portfolio. After submission, record questions and corrections so the next package addresses recurring gaps. A stable process reduces last-minute rebuilding and makes changes in property managers or accounting staff easier to hand over.</p>

      <h2>Where accounting support can help</h2>
      <p>Remote accounting support can help organize source records, reconcile property ledgers, prepare schedules, investigate differences and assemble reviewer-ready workpapers within an agreed scope. The client retains responsibility for confirming lender requirements, approving representations and submitting the final package. Loan interpretation, covenant conclusions and legal or tax questions should go to the responsible qualified adviser.</p>
      <p>For related workflows, see the <Link href="/industries/property-management">property management accounting service overview</Link>, the <Link href="/blog/property-management-month-end-close-checklist">month-end close checklist</Link>, and the guide to <Link href="/blog/property-management-owner-statements">owner statement reconciliation</Link>.</p>
    </ArticleLayout>
  );
}
