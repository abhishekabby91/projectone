import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Security Deposit Accounting',
  description: 'A practical workflow for tracking rental security deposits by tenant, lease and property, reconciling balances and reviewing move-out activity.',
  path: '/blog/property-management-security-deposit-accounting',
});

const faqs = [
  {
    question: 'How should rental security deposits be recorded?',
    answer: 'In many property-management accounting setups, a refundable tenant security deposit is tracked as a liability rather than rental income. The exact account structure and handling depend on the lease, entity, jurisdiction and accounting policy.',
  },
  {
    question: 'Should security deposits be tracked separately for each tenant and property?',
    answer: 'The records should make it possible to identify the amount associated with each tenant or lease and reconcile the detail to the relevant control account and bank records. Use the dimensions and subsidiary ledgers supported by the accounting system.',
  },
  {
    question: 'Can a property manager use security deposits to pay operating expenses?',
    answer: 'Do not assume that a deposit is available for operating expenses. Restrictions depend on applicable law, agreements and the account arrangement. The accounting workflow should preserve the deposit balance and route any proposed deduction or release through the authorized review process.',
  },
  {
    question: 'What should be checked when a tenant moves out?',
    answer: 'Confirm the lease and move-out records, inspect and document proposed charges through the responsible process, reconcile the tenant-level deposit balance, verify approvals and refund instructions, and retain the required supporting records. Deadlines and deduction rules vary by jurisdiction.',
  },
  {
    question: 'Does security deposit accounting differ by state?',
    answer: 'Yes. Legal requirements can differ by state and by residential or commercial tenancy. This guide covers accounting controls, not legal advice; verify the current rules that apply to the property and lease.',
  },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementSecurityDepositAccounting() {
  return (
    <ArticleLayout
      title="Property Management Security Deposit Accounting: A Practical Control Workflow"
      category="Property Management Accounting"
      description="Keep tenant deposit records traceable to the lease, property ledger, liability account and relevant bank records—with a documented review at move-out."
      publishedDate="2026-10-12"
      section="blog"
      slug="property-management-security-deposit-accounting"
      inquiryTitle="Need Help Reconciling Tenant Deposit Records?"
      inquiryLead="Tell us which property system you use, how tenant deposits are tracked, and where the reconciliation or move-out process needs support."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p>Security deposit accounting is a recordkeeping workflow as well as a tenant-service process. The books should show what was received, which tenant and property it relates to, how the balance is held or controlled, and what happened when the lease ended. A bank balance alone does not explain each tenant's entitlement or the reason for a deduction.</p>

      <p>The precise treatment depends on the lease, ownership and management agreements, accounting policy, property system and applicable law. The steps below focus on practical accounting controls. They do not determine whether a deduction is legally permitted or replace jurisdiction-specific advice.</p>

      <h2>1. Keep refundable deposits separate from rental income</h2>
      <p>A refundable security deposit is generally recorded as an amount owed or potentially refundable to the tenant, not as earned rental income when received. Set up an appropriate liability account and document how the accounting system links the receipt to the tenant, lease and property. Do not treat a deposit as income simply because cash has reached a bank account.</p>
      <p>Keep other types of receipts—such as rent, fees, non-refundable charges or payments in lieu of a deposit—distinct according to the agreement and accounting policy. If the nature of a payment is unclear, send it for review rather than guessing at the coding.</p>

      <h2>2. Build a tenant-level deposit record</h2>
      <p>For each deposit, retain enough detail to trace the general-ledger balance to the underlying lease and tenant account. Depending on the portfolio and system, the record may include:</p>
      <ul>
        <li>Property, unit, tenant and lease identifier.</li>
        <li>Receipt date, amount, payment reference and posting period.</li>
        <li>Deposit type and the liability account used.</li>
        <li>Any approved transfer, partial refund, deduction or adjustment.</li>
        <li>Move-out status, review notes and unresolved exceptions.</li>
      </ul>
      <p>For portfolios with multiple legal entities, preserve the correct entity and bank-account mapping. A combined portfolio report is useful for review, but it should not obscure which entity is responsible for each balance.</p>

      <h2>3. Reconcile three records, not just the bank</h2>
      <p>At the agreed close frequency, compare the relevant bank activity, the deposit liability control account and the tenant-level deposit listing. The balances should be explainable and the detail should tie to the general ledger. Depending on the account structure and local requirements, additional trust or client-fund records may also need reconciliation.</p>
      <ol>
        <li>Reconcile the bank account and identify uncleared receipts, refunds or transfers.</li>
        <li>Reconcile the liability control account to the tenant-level deposit schedule.</li>
        <li>Investigate missing tenant links, duplicate receipts, stale credits and adjustments posted to income or expense.</li>
        <li>Record each exception, its owner, supporting evidence and resolution date.</li>
        <li>Have an authorized reviewer sign off before the close is treated as complete.</li>
      </ol>
      <p>For related cash-control routines, see the <Link href="/blog/property-management-bank-reconciliation" className="text-primary underline underline-offset-4">property management bank reconciliation guide</Link>.</p>

      <h2>4. Review move-out activity before closing the tenant balance</h2>
      <p>When a tenancy ends, the accounting workflow should not automatically write off or release the deposit. Confirm that the move-out status and supporting records are complete, route proposed charges to the responsible manager, and ensure any refund or retention follows the authorized decision and applicable requirements.</p>
      <ul>
        <li>Match the tenant and lease to the deposit ledger.</li>
        <li>Check that proposed deductions have supporting documentation and approval.</li>
        <li>Verify the refund amount and payment details with the authorized person.</li>
        <li>Post the approved refund or other disposition to the correct liability and cash records.</li>
        <li>Retain the calculation, approvals, payment evidence and correspondence under the record-retention process.</li>
      </ul>
      <p>Accounting staff should not independently decide whether a deduction is legally allowable or whether a statutory deadline has been met. Escalate questions about those decisions to the property manager or qualified adviser.</p>

      <h2>5. Use a clear exception list</h2>
      <p>Common issues include a tenant ledger that does not match the liability account, a deposit receipt coded as rent, a move-out with no recorded disposition, refunds that have cleared the bank but remain open in the tenant ledger, and transfers between properties or entities without a clear trail.</p>
      <p>Keep an exception log with the tenant or property reference, amount, issue, assigned owner, evidence needed, next action and review status. Separate timing differences from genuine errors; do not use an unexplained journal entry simply to force the balances to agree.</p>

      <h2>6. Check how the property-management system represents deposits</h2>
      <p>Systems such as Buildium, AppFolio and Yardi can organize property, tenant and accounting records, but the exact reports and account mappings depend on configuration. Confirm which report is the tenant-level source of truth, how it ties to the general ledger, and whether the relevant bank or trust-account records are included in the close.</p>
      <p>Use the system's reports as evidence, not as a substitute for reconciliation. If a report total changes after a lease edit, transfer or adjustment, retain enough detail to explain the change to the reviewer.</p>

      <h2>7. Make the workflow part of month-end close</h2>
      <p>Include deposit reconciliation in the recurring close calendar rather than waiting until a tenant moves out or an owner asks a question. Assign responsibility for preparing the schedule, resolving exceptions, reviewing adjustments and approving refunds. The close file should show the reporting date, source reports, reconciliations, open items and sign-off.</p>
      <p>Related workflows include the <Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">property management month-end close checklist</Link>, the <Link href="/blog/property-management-owner-statements" className="text-primary underline underline-offset-4">owner statement reconciliation guide</Link> and the broader <Link href="/blog/property-management-accounting" className="text-primary underline underline-offset-4">property management accounting guide</Link>.</p>

      <h2>8. Jurisdiction and trust-account requirements need separate review</h2>
      <p>Rules for holding, accounting for and returning deposits are not uniform. They may differ between residential and commercial tenancies, and between states. For example, Texas statutes address security-deposit records and accounting for residential tenancies, while the Texas Real Estate Commission also explains restrictions on commingling money held for others. These are legal requirements to verify for the specific situation, not rules to generalize across every portfolio.</p>
      <ul>
        <li><a href="https://statutes.capitol.texas.gov/docs/PR/htm/PR.92.htm" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">Texas Property Code, Chapter 92: Residential Tenancies</a></li>
        <li><a href="https://www.trec.texas.gov/node/380" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">Texas Real Estate Commission: handling security deposits for managed property</a></li>
        <li><a href="https://www.dre.ca.gov/files/pdf/relaw/excerpts.pdf" target="_blank" rel="noreferrer" className="text-primary underline underline-offset-4">California Department of Real Estate: real estate law excerpts</a></li>
      </ul>
      <p>Confirm current requirements with the responsible property manager or qualified legal adviser. The accounting process should support compliance, but should not be presented as a legal determination.</p>

      <h2>Security deposit accounting review checklist</h2>
      <ul>
        <li>Every deposit receipt is linked to the correct tenant, lease, property and entity.</li>
        <li>Refundable deposits are distinguished from rent and other income.</li>
        <li>The tenant-level schedule reconciles to the liability control account.</li>
        <li>Bank activity and any applicable trust/client-fund records are reconciled.</li>
        <li>Move-out deductions and refunds have documented authorization.</li>
        <li>Open items have a named owner and a resolution trail.</li>
        <li>The reviewer can trace balances from the report to source records.</li>
      </ul>

      <p>A reliable deposit process makes it easier to explain balances, prepare owner reporting and identify problems before they become month-end exceptions. The key is to preserve the link between the tenant record, the liability ledger, the cash records and the authorized decision.</p>
    </ArticleLayout>
  );
}
