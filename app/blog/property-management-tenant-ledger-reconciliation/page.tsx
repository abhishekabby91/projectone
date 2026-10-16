import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Tenant Ledger Reconciliation',
  description:
    'Reconcile tenant ledgers by checking charges, receipts, credits, deposits, open balances and lease-level records before property management reports are issued.',
  path: '/blog/property-management-tenant-ledger-reconciliation',
});

const faqs = [
  {
    question: 'What is a tenant ledger reconciliation?',
    answer:
      'It is a review of tenant-level charges, payments, credits and balances against supporting lease records, receipts, deposits and the property accounting ledger. The purpose is to identify missing, duplicated, misapplied or unexplained activity.',
  },
  {
    question: 'Is tenant ledger reconciliation the same as bank reconciliation?',
    answer:
      'No. Bank reconciliation compares recorded cash activity with the bank statement. Tenant ledger reconciliation reviews each tenant account and the application of charges, payments and credits. Both checks can be needed because a bank balance can agree while an individual tenant balance is still wrong.',
  },
  {
    question: 'How often should tenant ledgers be reviewed?',
    answer:
      'Set a recurring cadence that fits transaction volume and reporting deadlines. Many property managers review tenant ledgers during monthly close and investigate exceptions sooner when payments, move-ins, move-outs or disputes require timely action.',
  },
  {
    question: 'Should a tenant security deposit reduce rent due?',
    answer:
      'Do not net a refundable security deposit against rent receivable by default. Track the deposit and its related liability separately and follow the lease, applicable law and the organization’s accounting policy for any permitted application or refund.',
  },
];

export default function PropertyManagementTenantLedgerReconciliation() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Property Management Tenant Ledger Reconciliation: A Practical Checklist"
      category="Property Management Accounting"
      description="Review tenant charges, receipts, credits and balances with a repeatable exception-led workflow."
      publishedDate="2026-10-13"
      section="blog"
      slug="property-management-tenant-ledger-reconciliation"
      inquiryTitle="Need Help Reviewing Tenant Ledger Records?"
      inquiryLead="Share your property software, ledger volume and month-end process to discuss a structured review workflow."
    >
      <p>A tenant ledger is the transaction history for a tenant account: charges, payments, credits, adjustments and the balance that remains. Reconciliation checks whether that history is complete, correctly applied and supported by the lease and source records. It helps property managers resolve discrepancies before they flow into receivables aging, owner reports or tenant communications. For shared utility charges, also reconcile the original invoice and allocation report to the <Link href="/blog/property-management-utility-billback-reconciliation" className="text-primary underline underline-offset-4">tenant utility billback workflow</Link>.</p>
      <p>This is a tenant-account control, not a substitute for bank or trust reconciliation. A bank account can reconcile while a payment is assigned to the wrong tenant, and a tenant ledger can appear reasonable while a cash deposit is missing from the bank records. Use the checks together as part of a consistent close process, supported by the <Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">property management month-end close checklist</Link>.</p>

      <h2>1. Confirm the tenant, lease and period</h2>
      <p>Before reviewing a balance, confirm the correct property, unit, tenant, lease term and date range. Check for transfers between units, lease renewals, changes in rent or concessions, move-ins and move-outs. A report that combines the wrong date range or an inactive lease can create a misleading balance even when individual transactions were entered correctly.</p>
      <ul>
        <li>Confirm the tenant and property identifiers against the active lease record.</li>
        <li>Check lease start and end dates and any approved amendments.</li>
        <li>Confirm the ledger period, opening balance and report filters.</li>
        <li>Identify prior-period corrections and transactions posted after the original close.</li>
      </ul>

      <h2>2. Verify charges against lease terms</h2>
      <p>Compare recurring rent and other charges with the lease schedule and documented changes. Review prorated rent, concessions, late fees, utility charges, parking or other recurring items only where the agreement and applicable rules support them. Confirm the effective date and calculation for each material change.</p>
      <ul>
        <li>Match recurring charges to the agreed amount and due date.</li>
        <li>Check proration calculations for partial periods and lease changes.</li>
        <li>Confirm credits or concessions have approval and the correct effective period.</li>
        <li>Look for duplicate charges, omitted charges or charges posted to the wrong unit.</li>
      </ul>
      <p>Do not add a fee simply because it appears in a standard system template. The lease, local requirements and the property manager’s approved process should support the charge.</p>

      <h2>3. Trace receipts to the correct tenant account</h2>
      <p>Match recorded receipts to payment confirmations, deposit records or other reliable source evidence. Verify the amount, date, tenant and property allocation. For a combined deposit covering multiple tenants or properties, ensure the accounting detail allocates the total to the correct individual accounts without duplicating the cash transaction.</p>
      <ul>
        <li>Find payments in the tenant ledger and the corresponding deposit or receipt record.</li>
        <li>Check unapplied cash and undeposited receipts for items that need resolution.</li>
        <li>Review partial payments and confirm how the remaining balance is presented.</li>
        <li>Investigate duplicate receipts, reversals, returned payments and misapplied amounts.</li>
      </ul>
      <p>Do not assume an amount is settled merely because a payment was entered. Confirm the status using the system’s available evidence and established procedures.</p>

      <h2>4. Review credits, adjustments and reversals</h2>
      <p>Credits may result from approved concessions, corrections, refunds or other account changes. Each material adjustment should have a clear reason, supporting record, date and appropriate approval. When an error is reversed, confirm that the reversal references the original entry and does not leave both the original and corrected amount affecting the balance.</p>
      <ul>
        <li>Review manual journal entries and manual tenant-ledger adjustments.</li>
        <li>Check credit memos, payment reversals and returned-payment fees.</li>
        <li>Confirm that the same correction has not been posted twice.</li>
        <li>Keep a record of the reason, evidence, preparer and approver for material adjustments.</li>
      </ul>

      <h2>5. Keep security deposits separate from rent receivables</h2>
      <p>A refundable tenant security deposit is generally tracked separately from rent income and rent receivable. The exact account setup and permitted handling depend on the lease, entity, jurisdiction and accounting policy. Review the deposit ledger and related liability separately; do not net a deposit against overdue rent without a properly supported and permitted transaction.</p>
      <p>For deposit receipts, balances and move-out activity, use the <Link href="/blog/property-management-security-deposit-accounting" className="text-primary underline underline-offset-4">security deposit accounting workflow</Link>. Where funds are held in trust or another restricted arrangement, include the relevant account and ledger controls in the wider reconciliation process.</p>

      <h2>6. Investigate open balances and unusual activity</h2>
      <p>Review tenant balances by age and transaction type rather than relying on the total alone. A balance may reflect genuine unpaid rent, a payment awaiting application, an unprocessed credit, a timing difference or an incorrect opening balance. Document the explanation and next action rather than making an unsupported adjustment to force the ledger to zero.</p>
      <ul>
        <li>Compare the ledger with receivables aging and relevant payment records.</li>
        <li>Identify credit balances and confirm whether they are valid and correctly assigned.</li>
        <li>Review old unapplied receipts, negative balances and unusual manual entries.</li>
        <li>Assign unresolved items to a responsible person with a due date.</li>
        <li>Escalate disputed or legally sensitive items through the approved process.</li>
      </ul>

      <h2>7. Tie tenant-level detail to property accounting reports</h2>
      <p>After individual accounts have been reviewed, compare the tenant-ledger totals with the relevant receivable control account and property-level reports. The totals should reconcile under the accounting system’s structure and reporting basis. Investigate differences caused by filters, posting dates, inactive accounts, control-account mappings or entries made directly to the general ledger.</p>
      <p>This step is distinct from checking the bank balance. Use the <Link href="/blog/property-management-bank-reconciliation" className="text-primary underline underline-offset-4">bank reconciliation workflow</Link> to validate cash activity, and the <Link href="/blog/property-management-trust-accounting-reconciliation" className="text-primary underline underline-offset-4">trust-account reconciliation guide</Link> when owner or tenant funds are held in trust arrangements.</p>
      <p>After validating individual tenant transactions, review the portfolio-level <Link href="/blog/property-management-receivables-aging" className="text-primary underline underline-offset-4">receivables aging reconciliation guide</Link> to tie outstanding balances to the general ledger and document older exceptions.</p>

      <h2>8. Protect the review trail and tenant information</h2>
      <p>Keep source records and exception notes in approved systems with access limited to people who need them. Tenant ledgers can contain personal and financial information, so avoid sending unnecessary details through unapproved channels. Record the reporting date, reviewer, material exceptions and resolution evidence according to the organization’s retention and security policies.</p>

      <h2>Tenant ledger reconciliation checklist</h2>
      <ul>
        <li>Correct property, tenant, lease and reporting period confirmed.</li>
        <li>Opening balance agrees with the prior reviewed period or documented migration record.</li>
        <li>Rent and other charges agree with lease terms and approved changes.</li>
        <li>Receipts are supported and applied to the correct tenant and property.</li>
        <li>Credits, reversals and adjustments have explanations and required approvals.</li>
        <li>Security deposits are tracked separately from ordinary rent receivables.</li>
        <li>Open, aged and unusual balances have documented next steps.</li>
        <li>Tenant-ledger totals tie to the appropriate receivable and property reports.</li>
        <li>Material exceptions are reviewed before reports or account communications are finalized.</li>
      </ul>

      <h2>Using property management software</h2>
      <p>Buildium, AppFolio and Yardi configurations vary by product, permissions and accounting setup. Use the relevant tenant ledger, lease, receipt, aging and general-ledger reports available in the client’s system. Confirm filters and report dates before comparing totals, and preserve enough source detail to trace material exceptions. A report export is a starting point for review, not evidence that every underlying transaction is correct.</p>

      <h2>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <h2>Related property management accounting resources</h2>
      <ul>
        <li><Link href="/blog/property-management-accounting" className="text-primary underline underline-offset-4">Property management accounting overview</Link></li>
        <li><Link href="/blog/property-management-owner-statements" className="text-primary underline underline-offset-4">Owner statement reconciliation and review</Link></li>
        <li><Link href="/blog/property-management-accounts-payable" className="text-primary underline underline-offset-4">Accounts payable review workflow</Link></li>
        <li><Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">Month-end close checklist</Link></li>
        <li><Link href="/industries/property-management" className="text-primary underline underline-offset-4">Property management accounting support</Link></li>
        <li><Link href="/industries/property-management/general-ledger-reconciliation" className="text-primary underline underline-offset-4">Platform-to-general-ledger reconciliation support</Link></li>
      </ul>
    </ArticleLayout>
  );
}
