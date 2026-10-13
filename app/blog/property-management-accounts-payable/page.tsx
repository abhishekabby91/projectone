import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Accounts Payable Workflow',
  description: 'A property management accounts payable workflow for invoice intake, property and entity coding, owner approvals, payment controls and month-end reconciliation.',
  path: '/blog/property-management-accounts-payable',
});

const faqs = [
  {
    question: 'What makes accounts payable different in property management?',
    answer: 'A bill may need to be assigned to a specific property, unit, ownership entity, project and expense category, then reflected correctly in the property ledger and owner reporting. The management company’s own expenses should remain separate from amounts incurred on an owner’s behalf.',
  },
  {
    question: 'Who should approve vendor invoices?',
    answer: 'Approval should follow the management agreement, owner instructions and documented authority limits. The workflow should record the invoice being approved, the amount, the approver and any exception or condition.',
  },
  {
    question: 'How should shared vendor costs be allocated across properties?',
    answer: 'Use a documented allocation method supported by the service, contract or client-approved policy. Keep the calculation and source records so the allocation can be reviewed; do not split costs arbitrarily just to make property reports balance.',
  },
  {
    question: 'What should be reconciled at month-end?',
    answer: 'Review the AP detail against the general-ledger control balance, open invoices, credits, payment records, cleared bank activity and the property or owner schedules affected by the bills. Track unexplained items to resolution.',
  },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementAccountsPayable() {
  return (
    <ArticleLayout
      title="Property Management Accounts Payable: From Invoice to Owner Reporting"
      category="Property Management"
      description="A repeatable accounts payable process connects each vendor bill to the right property, ownership entity, approval, payment and accounting record."
      publishedDate="2026-10-13"
      section="blog"
      slug="property-management-accounts-payable"
      inquiryTitle="Review Your Property Management Payables Workflow"
      inquiryLead="Tell us how vendor bills are received, assigned to properties, approved and reconciled. We can review the accounting workflow around your current software and approval rules."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p>Property management accounts payable has an extra dimension beyond paying vendors on time: every bill must be attached to the correct property and, where relevant, ownership entity, unit, work order or capital project. The record should then flow through approval, payment, bank reconciliation and the owner or property report without losing that context.</p>
      <p>A management company may process invoices for many owners through one shared inbox. Without consistent intake and coding rules, an invoice can be entered twice, charged to the wrong property, left waiting for an unclear approval or recorded in the management company’s books when it belongs in an owner’s records. This guide sets out a practical workflow and the checks that keep exceptions visible.</p>

      <h2>1. Create one trackable intake record</h2>
      <p>Whether an invoice arrives by email, vendor portal or property-management system, capture it in a common queue. Keep the original invoice and record the vendor, invoice number, invoice date, due date, amount, service period, property, description and supporting work order or contract when applicable.</p>
      <ul>
        <li>Check for a possible duplicate using vendor, invoice number, amount and date.</li>
        <li>Identify the property and ownership entity before coding the bill.</li>
        <li>Flag missing service details, unclear descriptions or an unfamiliar payee.</li>
        <li>Assign an exception owner when the property manager must confirm the work.</li>
      </ul>
      <p>Do not silently overwrite the original invoice when a vendor submits a correction. Retain the original and record the clarification or replacement so a reviewer can understand what changed.</p>

      <h2>2. Code property, entity and expense correctly</h2>
      <p>Use the existing chart of accounts and property dimensions consistently. Depending on the portfolio, a bill may need a property, unit, owner entity, department, project or recoverability tag. Keep the management company’s own operating costs separate from vendor costs recorded on behalf of owners.</p>
      <p>For shared invoices, use a documented allocation method based on the contract, service delivered or client-approved policy. Preserve the calculation and the source details. If a charge may be recoverable from a tenant under a lease or other agreement, accounting can prepare the underlying cost schedule, but lease interpretation and the final recoverability decision should remain with the responsible client or qualified adviser.</p>

      <h2>3. Route the invoice to the right approver</h2>
      <p>Approval rules should be established before the invoice arrives. They may depend on amount, property, expense type, contract or owner instruction. Record who approved the specific invoice, when it was approved and whether conditions or exceptions remain open.</p>
      <ul>
        <li>Return incomplete bills to the person who can confirm the work or scope.</li>
        <li>Escalate invoices outside the approver’s documented authority.</li>
        <li>Keep approval evidence attached to the bill, not only in a separate email thread.</li>
        <li>Separate invoice preparation, approval and payment release where practical.</li>
      </ul>
      <p>Accounting support can prepare the bill, check coding and organize a payment batch within the agreed scope. Payment authorization and decisions reserved to the owner or manager should stay with that authorized party.</p>

      <h2>4. Check duplicates and vendor changes before payment</h2>
      <p>Before payment is released, compare the approved bill with open invoices and recent payments. Review repeated invoice numbers, near-matching amounts, credit notes, partial payments and resubmitted invoices. A duplicate check after payment is too late to prevent the cash leaving the account.</p>
      <p>Verify requests to change vendor bank details using a trusted contact method already on file rather than relying only on contact details in the change request. Document who verified the change and follow the client’s payment-security policy. An unfamiliar or changed payee should be treated as an exception until the required checks are complete.</p>

      <h2>5. Schedule payment and keep the evidence connected</h2>
      <p>Prepare payment from the approved invoice and confirm the payee, amount, due date, property/entity coding and payment method. Record the payment reference and which invoice it settles. If a payment is partial, voided, returned or applied to a credit, preserve that status instead of marking the invoice fully paid without explanation.</p>
      <p>For software such as Yardi, AppFolio, Buildium or QuickBooks, the exact screens and approval features depend on the product, edition, integrations and client configuration. The accounting control should remain the same even when the software steps differ: an approved invoice should post once, to the right records, with a traceable payment.</p>

      <h2>6. Reconcile AP to property and owner records</h2>
      <p>At month-end, compare the AP subledger or open-bill report with the general-ledger control balance. Investigate differences caused by unposted bills, payments recorded in one system but not another, unapplied credits, voids, duplicate entries or cutoff errors. Review whether the expense reached the correct property and owner reporting schedule.</p>
      <p>Where vendor funds are paid from operating or trust accounts, reconcile the bank activity under the client’s applicable procedures. Do not use a journal entry simply to force the AP balance to agree; first identify the transaction or timing issue that explains the difference.</p>

      <h2>7. Maintain an exception list</h2>
      <p>Keep a short log of invoices that cannot move through the normal process: missing approval, unclear property, disputed work, duplicate candidate, vendor-detail change, credit not applied, payment not cleared or disagreement between the AP detail and ledger. Each item should have an owner, next action and status.</p>
      <p>At close, summarize material overdue bills and unresolved items for the manager or owner. This helps the team distinguish a real cash commitment from an invoice that is still awaiting evidence or approval.</p>

      <h2>Workflow review checklist</h2>
      <ul>
        <li>Every bill has a source document and one intake record.</li>
        <li>Property and ownership entity are assigned before posting.</li>
        <li>Shared costs follow a documented allocation method.</li>
        <li>Approval is recorded against the invoice and amount.</li>
        <li>Duplicate and vendor bank-change checks happen before payment.</li>
        <li>Payments tie to invoices, bank activity and property records.</li>
        <li>AP detail reconciles to the general ledger and exceptions are tracked.</li>
      </ul>
      <p>For the broader accounting cycle, read the <Link href="/blog/property-management-accounting">property management accounting guide</Link>, the <Link href="/blog/property-management-bank-reconciliation">bank reconciliation workflow</Link> and the <Link href="/blog/property-management-month-end-close-checklist">month-end close checklist</Link>. If the bill relates to common-area maintenance recovery, see the <Link href="/blog/property-management-cam-reconciliation">CAM reconciliation guide</Link>. For the service overview, visit <Link href="/industries/property-management">property management accounting support</Link>.</p>
    </ArticleLayout>
  );
}
