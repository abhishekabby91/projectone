import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Fee Reconciliation: Owner Ledger to Company Books',
  description:
    'Reconcile property management fees from agreement-based calculations and owner ledgers through bank transfers, company revenue and operating-bank receipts.',
  path: '/blog/property-management-management-fee-reconciliation',
});

const faqs = [
  {
    question: 'What is a property management fee reconciliation?',
    answer:
      'It traces a fee from the management agreement and property-level calculation through the owner or property ledger, authorized transfer, management-company accounting entry and operating-bank receipt, with timing differences documented.',
  },
  {
    question: 'Should the management fee be recorded twice when it moves between accounts?',
    answer:
      'No. The accounting should distinguish the fee being charged or earned from the later movement of cash. Record the fee according to the entity’s policy and reconcile the bank transfer without recording the same revenue a second time.',
  },
  {
    question: 'Why can the fee report and bank deposit differ?',
    answer:
      'Possible causes include different cutoff dates, batched transfers, withheld fees, refunds, reversals, other items in a net deposit, or a fee that was recorded but not yet transferred. Match the fee detail and each cash movement before deciding the difference is an error.',
  },
  {
    question: 'Can a bookkeeping provider approve management-fee transfers?',
    answer:
      'Preparation, calculation and reconciliation should be distinguished from authorization and release of funds. The client should define access, approval limits, reviewer responsibilities and payment authority in the engagement procedures.',
  },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementFeeReconciliation() {
  return (
    <ArticleLayout
      title="Property Management Fee Reconciliation: From Owner Ledger to Company Books"
      category="Property Management Accounting"
      description="A traceable workflow for checking management-fee calculations, owner-ledger entries, bank transfers and company revenue without double counting."
      publishedDate="2026-10-15"
      section="blog"
      slug="property-management-management-fee-reconciliation"
      inquiryTitle="Need a Clearer Fee Reconciliation Process?"
      inquiryLead="Tell us how management fees are calculated, transferred and recorded across your property platform and company accounting system."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <p>Property managers may maintain property and owner records in a property-management platform while the management company keeps its own operating books in an accounting system. The fee is the bridge between those records. A statement can show a fee charged to an owner while the company’s bank receipt is still pending, or a bank transfer can appear without the corresponding ledger entries.</p>
      <p>The purpose of this workflow is to trace each fee and explain differences—not to prescribe one universal journal entry. The agreement, entity structure, accounting policy, software configuration and applicable rules determine the exact treatment. The client or authorized manager retains approval and payment authority.</p>

      <h2>What needs to agree?</h2>
      <p>For each period, connect these records with a common batch or transaction reference:</p>
      <ol>
        <li>The management agreement and approved fee basis.</li>
        <li>The property-level fee calculation or fee batch report.</li>
        <li>The related owner/property ledger entry or statement detail.</li>
        <li>The transfer or payment record, including its bank date and amount.</li>
        <li>The management company’s revenue record and operating-bank receipt.</li>
      </ol>
      <p>A matching transfer total proves only that a cash movement agrees to another record. It does not independently prove that the fee was calculated under the agreement, assigned to the correct owner, recorded in the right period or approved.</p>

      <h2>1. Recalculate the fee from the approved basis</h2>
      <p>Confirm the fee basis specified in the management agreement. Depending on the agreement, it may use collected rent, scheduled rent, a fixed amount, or another defined basis. Check the applicable rate, minimum, cap, excluded items, effective dates and any approved changes. Do not assume the same formula applies to every property or owner.</p>
      <ul>
        <li>Use the correct property, owner and fee period.</li>
        <li>Confirm the basis and calculation inputs against source records.</li>
        <li>Review new agreements, amendments, concessions or fee changes.</li>
        <li>Flag manual overrides and unexplained differences for authorized review.</li>
      </ul>

      <h2>2. Match the fee to owner and property records</h2>
      <p>Compare the approved calculation with the fee shown in the owner statement or property ledger. Verify that the fee is assigned to the correct property and period, and that any reversal or correction is visible. If a statement includes multiple properties, retain detail by property rather than relying only on the consolidated total.</p>
      <p>Where the fee is withheld from collections, there may not be a separate outgoing payment from the owner account. The statement and ledger trail still need to show the fee and how it affects funds held or the amount payable to the owner.</p>

      <h2>3. Trace the transfer to the management company</h2>
      <p>When the fee is moved to the company’s operating account, match the outgoing cash movement to the corresponding incoming bank transaction. Batch transfers can combine fees from several properties, so keep a batch breakdown showing which fee amounts make up the transfer.</p>
      <ul>
        <li>Match the total transfer and its individual fee components.</li>
        <li>Compare bank dates and posting dates; do not force a timing difference into the wrong month.</li>
        <li>Identify transfers that include refunds, reimbursements or other items.</li>
        <li>Track recorded fees that have not yet transferred and transfers without a complete fee detail.</li>
      </ul>

      <h2>4. Reconcile the company-side revenue record</h2>
      <p>Confirm that the management company’s books reflect the fee according to its accounting policy and that the operating-bank receipt is matched to the appropriate recorded item. The cash transfer itself should not create a second copy of the same fee revenue. If a fee was already recognized and the cash is received later, reconcile the receipt to the existing record instead of automatically crediting revenue again.</p>
      <p>Property-level owner reporting and the management company’s profit-and-loss statement are different views. Keep the fee bridge clear so the company can explain both the amount charged to owners and the amount recognized and received by the company.</p>

      <h2>5. Investigate common differences</h2>
      <ul>
        <li><strong>Fee report exceeds bank receipt:</strong> some fees may remain in the property account, be held back, or be scheduled for a later transfer.</li>
        <li><strong>Bank receipt exceeds fee report:</strong> the transfer may include multiple periods, multiple properties, a reimbursement or another approved item.</li>
        <li><strong>Owner statement and fee report disagree:</strong> check the fee basis, effective dates, adjustments, reversals and report filters.</li>
        <li><strong>Company revenue and bank receipt disagree:</strong> check cutoff timing, open receivables, duplicate postings and whether the transfer was matched to an existing revenue entry.</li>
        <li><strong>One property is missing from a batch:</strong> compare the batch detail to the individual property records and record the correction with a clear reference.</li>
      </ul>
      <p>Do not plug a difference to a generic expense or income account simply to make the reconciliation balance. Document the cause, assign an owner and obtain the required approval for any correction.</p>

      <h2>6. Keep responsibilities and access separate</h2>
      <p>A practical procedure distinguishes who prepares the fee calculation, who reviews exceptions, who approves the transfer, who releases funds and who reconciles the bank activity. One person may prepare several workpapers, but the process should not silently give a preparer payment authority that the client has not approved.</p>
      <ul>
        <li>Define access and approval permissions before the workflow starts.</li>
        <li>Retain source calculations, reviewer notes and transfer references.</li>
        <li>Use a consistent cutoff and exception log each month.</li>
        <li>Escalate disputed fee calculations or agreement questions to the authorized client contact.</li>
      </ul>

      <h2>Monthly management-fee reconciliation checklist</h2>
      <ul>
        <li>☐ Fee basis and effective agreement terms verified.</li>
        <li>☐ Calculation tied to property and owner records.</li>
        <li>☐ Owner statement and fee batch detail agree, or differences are explained.</li>
        <li>☐ Transfers traced to bank activity, including batched amounts and cutoff differences.</li>
        <li>☐ Company revenue record reconciled without double counting.</li>
        <li>☐ Exceptions assigned, corrections approved and evidence retained.</li>
      </ul>

      <h2>Related property accounting guides</h2>
      <ul>
        <li><Link href="/blog/property-management-owner-statements" className="text-primary underline underline-offset-4">Owner statement reconciliation</Link></li>
        <li><Link href="/blog/property-management-owner-distributions" className="text-primary underline underline-offset-4">Owner distribution accounting workflow</Link></li>
        <li><Link href="/blog/property-management-trust-accounting-reconciliation" className="text-primary underline underline-offset-4">Trust account reconciliation</Link></li>
        <li><Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">Month-end close checklist</Link></li>
      </ul>
    </ArticleLayout>
  );
}
