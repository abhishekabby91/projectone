import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Trust Accounting Guide',
  description:
    'A practical property management trust-account reconciliation workflow covering bank-to-ledger checks, owner and tenant balances, exception tracking and review controls.',
  path: '/blog/property-management-trust-accounting-reconciliation',
});

const faqs = [
  {
    question: 'What is trust accounting in property management?',
    answer:
      'Trust accounting is the process of recording and safeguarding money a property manager holds or handles for owners or tenants, separately from the management company’s own operating funds. The exact legal structure and required controls depend on the jurisdiction and engagement.',
  },
  {
    question: 'What is a three-way trust-account reconciliation?',
    answer:
      'Where applicable, it compares the bank balance, the accounting control-account balance, and the combined balances in the supporting owner, tenant or property ledgers. The reconciliation should explain differences rather than force the totals to match with an unsupported adjustment.',
  },
  {
    question: 'How often should property-management trust accounts be reconciled?',
    answer:
      'A monthly reconciliation is a common operational control, but legal frequency, format and review requirements vary by state, license type and account arrangement. Confirm the specific rule with the responsible compliance professional.',
  },
  {
    question: 'Can an external bookkeeping provider prepare the reconciliation?',
    answer:
      'A provider can prepare defined schedules and reconciliations when access, documentation, review and escalation responsibilities are agreed. The client should clearly assign independent review and retain authority for approvals and fund movement according to its controls.',
  },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementTrustAccountingReconciliation() {
  return (
    <ArticleLayout
      title="Property Management Trust Accounting: A Reconciliation Workflow"
      category="Property Management Accounting"
      description="A control-focused guide to reconciling bank activity, accounting control accounts and the owner, tenant or property ledgers that support them."
      publishedDate="2026-10-13"
      section="blog"
      slug="property-management-trust-accounting-reconciliation"
      inquiryTitle="Review Your Property Trust-Accounting Workflow"
      inquiryLead="Tell us which property-management system you use, which ledgers are reconciled today, and how differences are reviewed and resolved."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p>Property-management trust accounting needs more than a bank balance that agrees with the general ledger. Where a manager holds or handles money for property owners or tenants, the supporting records must also show whose funds are represented, which property they relate to, and how each receipt or payment was recorded.</p>
      <p>This guide focuses on the accounting workflow and evidence trail. Trust, escrow, tenant-deposit and licensing requirements differ by jurisdiction and account arrangement, so confirm the rules that apply to the specific portfolio rather than treating one process as universal legal advice.</p>

      <h2>What the reconciliation is intended to prove</h2>
      <p>A reliable reconciliation makes the movement of funds traceable from the bank statement to the accounting records and the relevant owner, tenant or property detail. Depending on the setup, the control may include:</p>
      <ul>
        <li><strong>Bank balance:</strong> the statement balance adjusted for valid deposits in transit and outstanding payments.</li>
        <li><strong>General-ledger control account:</strong> the book balance for the relevant trust, escrow or other liability account.</li>
        <li><strong>Supporting ledgers:</strong> the individual owner, tenant, deposit or property balances that make up the total being controlled.</li>
        <li><strong>Transaction support:</strong> receipts, invoices, approved disbursements, transfers and adjustment records for material activity.</li>
      </ul>
      <p>Where the applicable rules require a three-way reconciliation, the bank, control-account and supporting-ledger totals must be reconciled under that rule. In other setups, the precise reconciliation format may differ. Document the required control for the account rather than assuming that every property-management account has the same legal treatment.</p>

      <h2>1. Confirm the account scope and cutoff</h2>
      <p>Identify the legal entity, bank account, account purpose, reporting period and the properties or owners represented. Confirm that the bank statement covers the intended period and that all relevant books use a consistent cutoff. If the property platform and accounting system keep separate records, identify the source report for each balance before comparing totals.</p>
      <p>Do not combine owner funds, tenant deposits and the management company’s operating cash merely because they appear in the same software. Their accounting and legal treatment may differ. Follow the written account structure and applicable requirements.</p>

      <h2>2. Reconcile bank activity to the books</h2>
      <p>Match deposits, withdrawals, checks, electronic payments, bank charges and transfers to recorded transactions. For each unmatched item, record the date, amount, description, likely cause, evidence needed and person responsible for resolution. Common timing items can be valid, but old or recurring differences need investigation.</p>
      <ul>
        <li>Check whether receipts were posted to the correct account and property.</li>
        <li>Identify duplicate payments, reversed transactions and returned payments.</li>
        <li>Confirm transfers between accounts are recorded on both sides and in the correct period.</li>
        <li>Review stale outstanding checks and deposits in transit instead of carrying them forward without explanation.</li>
        <li>Keep bank fees and interest separate from owner or tenant activity where appropriate to the account structure.</li>
      </ul>

      <h2>3. Tie the control account to the owner and tenant detail</h2>
      <p>A bank reconciliation alone may not show whether the balance belongs to the right owners or tenants. Compare the control-account balance with the total of the supporting subledgers required by the client's process or applicable rule. Investigate differences such as a receipt posted to the wrong owner, a deposit recorded as income, a disbursement missing from a subledger, or a journal entry that changed the control account without updating the detail.</p>
      <p>Keep the reconciliation report and the underlying ledger summary together. The reviewer should be able to reproduce the total and see which owner, tenant or property balances contribute to it. If the platform's standard report does not expose the needed detail, document the supplemental report or schedule used.</p>

      <h2>4. Treat tenant security deposits as their own control area</h2>
      <p>Refundable security deposits are commonly tracked as liabilities rather than earned rental income, but the required custody, accounting and return rules depend on local law and the agreement. Maintain detail by tenant, lease and property where needed, and reconcile that schedule to the relevant accounting and bank records. Move-out deductions, refunds and transfers should have source documentation and the appropriate authorization.</p>
      <p>For the focused workflow, see the <Link href="/blog/property-management-security-deposit-accounting">property management security-deposit accounting guide</Link>. For owner-facing reporting, use the separate <Link href="/blog/property-management-owner-statements">owner statement reconciliation workflow</Link>.</p>

      <h2>5. Investigate differences—do not plug them</h2>
      <p>A reconciliation should explain the balance, not simply make it agree. Avoid unsupported journal entries or reclassifications whose only purpose is to clear a difference. Categorize each exception, identify the evidence required, assign an owner and target date, and record the resolution and reviewer decision.</p>
      <table>
        <thead>
          <tr><th>Exception</th><th>Checks to perform</th><th>Evidence to retain</th></tr>
        </thead>
        <tbody>
          <tr><td>Bank item has no ledger match</td><td>Search the receipt or payment batch, date range and account; check for a reversal or duplicate.</td><td>Bank line, transaction reference and resolution note.</td></tr>
          <tr><td>Control account differs from owner detail</td><td>Review journal entries, posting failures, owner transfers and subledger mappings.</td><td>Control-account detail, ledger summary and correcting-entry approval if needed.</td></tr>
          <tr><td>Deposit balance differs from tenant schedule</td><td>Check move-in/move-out activity, refunds, deductions and transfers between accounts.</td><td>Lease or move-out support, tenant ledger and authorized refund record.</td></tr>
          <tr><td>Old outstanding payment</td><td>Confirm whether it cleared, was voided, reissued or remains payable.</td><td>Payment history, bank evidence and documented next action.</td></tr>
          <tr><td>Unexplained owner balance</td><td>Trace opening balance, receipts, expenses, fees, reserves and distributions.</td><td>Owner ledger, statement bridge and reviewer sign-off.</td></tr>
        </tbody>
      </table>

      <h2>6. Separate preparation, approval and movement of funds</h2>
      <p>Define who prepares the reconciliation, who independently reviews it, who can approve adjustments, and who can initiate or release payments. Access permissions should match those responsibilities. Changes to vendor bank details and owner payout instructions deserve a documented verification step, not an informal message alone.</p>
      <p>An outsourced accounting provider may prepare transaction coding, reconciliation schedules, exception logs and supporting reports within an agreed scope. The engagement should specify who owns final review, legal or tax decisions, and payment authorization. Do not imply that a payment was made merely because it appears as approved or due in a report.</p>

      <h2>7. Use a repeatable monthly review checklist</h2>
      <ol>
        <li>Confirm the correct account, entity, properties and period.</li>
        <li>Obtain the complete bank statement and relevant system reports.</li>
        <li>Match receipts, payments, transfers and adjustments to the books.</li>
        <li>Reconcile the control account to required owner, tenant or property detail.</li>
        <li>Review deposits and other liabilities using the applicable supporting schedules.</li>
        <li>List unresolved differences with an owner, age, amount and next action.</li>
        <li>Have an authorized reviewer inspect the reconciliation and material exceptions.</li>
        <li>Retain the statement, reconciliation, support and review evidence in the agreed location.</li>
      </ol>

      <h2>How this connects to the wider accounting cycle</h2>
      <p>Trust-account reconciliation is one control within the wider property accounting process. Pair it with the <Link href="/blog/property-management-bank-reconciliation">property management bank reconciliation guide</Link>, the <Link href="/blog/property-management-accounts-payable">accounts payable workflow</Link> and the <Link href="/blog/property-management-accounting">complete property management accounting guide</Link>. The service scope is outlined on the <Link href="/industries/property-management">property management accounting and bookkeeping page</Link>.</p>
      <p>Platforms such as AppFolio, Buildium and Yardi may hold operational and accounting detail in different modules or reports. Confirm the configuration, permissions and source of truth for each account before designing the reconciliation; do not assume identical menu paths or reporting behavior across systems.</p>

      <h2>Important scope note</h2>
      <p>This article describes general accounting controls, not legal, tax or regulatory advice. Trust-account, escrow, tenant-deposit and record-retention requirements vary by jurisdiction, license and account arrangement. Confirm the applicable requirements with the responsible qualified professional and follow the client's written procedures.</p>
    </ArticleLayout>
  );
}
