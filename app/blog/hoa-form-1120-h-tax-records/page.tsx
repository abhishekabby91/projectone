import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import FAQSection from '@/components/faq-section';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'HOA Form 1120-H: Year-End Records Checklist',
  description: 'Prepare HOA books for a Form 1120-H review with reconciled assessments, interest, vendor payments, reserve activity and CPA-ready year-end records.',
  path: '/blog/hoa-form-1120-h-tax-records',
});

const faqs = [
  {
    question: 'Does every homeowners association file Form 1120-H?',
    answer: 'No. Form 1120-H is an election available to qualifying homeowners associations. The association’s tax professional should determine eligibility and compare the applicable return options for that tax year.',
  },
  {
    question: 'Should the HOA bookkeeper choose between Form 1120 and Form 1120-H?',
    answer: 'The bookkeeping workflow should produce complete, reconciled records and clearly identify income and expense categories. The association’s qualified tax preparer should decide which return and tax treatment apply.',
  },
  {
    question: 'What records should an HOA gather before tax preparation?',
    answer: 'Common items include the year-end trial balance, bank and investment statements, reconciliations, assessment and receivable schedules, vendor payment detail, payroll records if applicable, reserve activity, interest income, prior-year return and supporting invoices.',
  },
  {
    question: 'When is Form 1120-H generally due?',
    answer: 'The IRS instructions generally set the due date as the 15th day of the fourth month after the tax year ends, with a different rule for a June 30 year-end. Confirm the current-year instructions and the association’s specific facts with the tax preparer.',
  },
];
const faqSchema = generateFAQSchema(faqs);

export default function HoaForm1120HRecordsGuide() {
  return (
    <ArticleLayout
      title="HOA Form 1120-H: Year-End Records Checklist for the CPA"
      category="HOA Accounting"
      description="A practical handoff checklist for preparing reconciled HOA books and supporting schedules before a tax professional reviews Form 1120-H or another applicable return."
      publishedDate="2026-10-13"
      section="blog"
      slug="hoa-form-1120-h-tax-records"
      inquiryTitle="Need Help Organizing HOA Year-End Records?"
      inquiryLead="Tell us which schedules are prepared today and where the year-end close gets delayed. We can review the recordkeeping workflow around your existing accounting system."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p>Year-end HOA tax preparation starts with reliable books, not with a tax form. Assessment records, bank activity, investment income, vendor payments and reserve transactions need to agree with the general ledger before the association sends its records to a CPA or other qualified tax preparer.</p>
      <p>Form 1120-H is a federal income tax return that qualifying homeowners associations may elect to file under section 528. The election, eligibility tests, taxable income treatment and choice between Form 1120-H and Form 1120 are tax decisions—not bookkeeping decisions. Use the <a href="https://www.irs.gov/instructions/i1120h" target="_blank" rel="noreferrer">current IRS instructions for Form 1120-H</a> and ask the association’s tax professional to determine the appropriate treatment.</p>

      <h2>1. Close and reconcile the books first</h2>
      <p>Before assembling the tax handoff, confirm the fiscal year-end and make sure the trial balance reflects all approved transactions through that date. Reconcile operating and reserve bank accounts separately, and reconcile investment accounts to statements. List outstanding checks, deposits in transit, bank fees and unresolved differences instead of forcing a balance.</p>
      <ul>
        <li>Save the final trial balance and general ledger detail.</li>
        <li>Complete bank and investment reconciliations and retain the statements used.</li>
        <li>Investigate old reconciling items and document any unresolved exceptions.</li>
        <li>Keep operating and reserve activity traceable in the ledger and supporting schedules.</li>
      </ul>

      <h2>2. Reconcile assessments and homeowner balances</h2>
      <p>Prepare an owner-level receivables schedule that agrees with the accounts receivable control account. Separate current assessments, past-due balances, credits, prepayments, late charges and approved special assessments according to the association’s records and accounting policy. Explain material adjustments and keep the assessment roll available to support totals.</p>
      <p>Do not treat a bank deposit total as a substitute for the homeowner ledger. If a payment batch does not match the owner-level postings, document the difference and resolve it before the year-end package is marked complete.</p>
      <p>For the recurring monthly workflow, see the <a href="/blog/hoa-accounting-month-end-checklist">HOA month-end accounting checklist</a> and <a href="/blog/hoa-assessment-receivables-reconciliation">assessment receivables reconciliation guide</a>.</p>

      <h2>3. Identify income items for tax-preparer review</h2>
      <p>Provide the tax preparer with detail that distinguishes regular member assessments from other receipts. Include investment and bank interest, late charges, facility or special-use receipts, payments from nonmembers, and any unusual or one-time income. The tax preparer can then determine the correct tax classification based on the facts and current law.</p>
      <p>Do not assume that every receipt is exempt function income, or that a ledger label by itself establishes tax treatment. Provide source documents and descriptions for items that do not fit the normal assessment cycle.</p>

      <h2>4. Organize vendor payments and expense support</h2>
      <p>Reconcile accounts payable and vendor balances, and make sure the year-end expense detail agrees with the general ledger. Keep invoices, approval evidence, payment records and vendor tax-document status together. Flag duplicate payments, voided checks, credit memos, year-end accruals and unusual capital-project costs for review.</p>
      <ul>
        <li>Vendor name and tax-document status, where applicable.</li>
        <li>Payment totals by vendor and payment date.</li>
        <li>Invoice copies and evidence of the association’s approval process.</li>
        <li>Expense coding and explanation of significant reclassifications.</li>
      </ul>
      <p>Whether an information return is required and how a payment should be reported are tax compliance questions. Route uncertain vendor classifications and filing obligations to the tax preparer rather than guessing from the bookkeeping account.</p>

      <h2>5. Document reserve activity and capital projects</h2>
      <p>Provide a separate schedule of reserve transfers, investment earnings, reserve-funded invoices and material capital projects. The schedule should connect each recorded transaction to the relevant bank or investment activity, invoice, approval and ledger entry. Keep operating and reserve funds distinct in the records even when the association uses one accounting platform.</p>
      <p>Where a project spans multiple periods, include a concise status note and identify any unpaid invoices, deposits or commitments that the CPA should consider. The accounting schedule supports professional review; it does not determine the tax or financial-statement treatment on its own.</p>

      <h2>6. Build a CPA-ready handoff folder</h2>
      <p>A consistent handoff saves time because the reviewer can trace a reported number back to a schedule and source record. A typical folder includes:</p>
      <ul>
        <li>Prior-year filed return and any tax-preparer requests still outstanding.</li>
        <li>Current-year trial balance, general ledger and final financial statements.</li>
        <li>Bank and investment statements with completed reconciliations.</li>
        <li>Assessment roll, aged receivables, prepaid assessments and write-off approvals.</li>
        <li>Accounts payable detail, vendor payment summary and supporting invoices.</li>
        <li>Reserve activity, investment income and capital-project schedules.</li>
        <li>Payroll or contractor records, if applicable, and relevant year-end correspondence.</li>
        <li>A short open-items list that names each unresolved question, its amount and the person responsible for resolving it.</li>
      </ul>

      <h2>7. Keep bookkeeping preparation separate from tax decisions</h2>
      <p>The accounting support process can organize and reconcile the records, prepare schedules, flag inconsistencies and respond to document requests. The tax preparer should determine whether the association qualifies for Form 1120-H, compare it with the applicable alternative, decide tax classifications and elections, and approve the final return.</p>
      <p>The IRS notes that a qualifying association’s Form 1120-H election is made separately for each tax year and generally must be made by the return due date, including extensions. An extension to file does not extend the time to pay tax. Confirm the current deadline and election requirements directly in the <a href="https://www.irs.gov/instructions/i1120h" target="_blank" rel="noreferrer">IRS Form 1120-H instructions</a>.</p>

      <h2>8. Use a simple completion tracker</h2>
      <p>Track the year-end handoff with four statuses: not started, in progress, ready for review and resolved. Each open item should include an owner, due date, amount where relevant, and the supporting record needed to close it. Do not mark the package final while material reconciliations or tax-preparer questions remain unanswered.</p>
      <p>For related HOA workflows, see the <a href="/blog/hoa-year-end-accounting">HOA year-end accounting guide</a>, <a href="/blog/hoa-accounting-controls">HOA accounting controls guide</a> and <a href="/industries/hoa-accounting">HOA accounting services page</a>.</p>

      <h2>Frequently asked questions</h2>
      <FAQSection faqs={faqs} />
      <p><strong>Scope note:</strong> This guide describes bookkeeping preparation and record organization. It is not tax or legal advice, does not determine eligibility for a particular return, and does not replace advice from the association’s qualified tax professional. IRS forms and instructions can change; verify the version for the relevant tax year.</p>
    </ArticleLayout>
  );
}
