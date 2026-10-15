import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Receivables Aging Review',
  description: 'Reconcile property management receivables aging to tenant ledgers and the general ledger, investigate credits and exceptions, and improve month-end reporting.',
  path: '/blog/property-management-receivables-aging',
});

const faqs = [
  { question: 'What is a property management receivables aging report?', answer: 'It lists outstanding tenant, lease or other property-related charges and groups balances by how long they have remained unpaid. The fields and aging buckets depend on the software and reporting policy.' },
  { question: 'Should the receivables aging report match the general ledger?', answer: 'The detail should reconcile to the corresponding receivables control balance for the same date, entity and accounting scope, or differences should be identified and supported. Timing, filters, credits and posting errors can cause mismatches.' },
  { question: 'Is receivables aging the same as a rent roll?', answer: 'No. A rent roll is primarily a lease and occupancy snapshot, often including scheduled rent. Receivables aging focuses on amounts outstanding and how long they have been unpaid.' },
  { question: 'Should former tenants be included in aging review?', answer: 'Include balances within the reporting scope even when the tenant has moved out, where the system and policy retain those receivables. Review former-tenant balances separately when useful so they are not silently omitted by active-tenant filters.' },
  { question: 'Does an accounting team decide how to collect overdue rent?', answer: 'Accounting should maintain accurate records, identify exceptions and provide reliable aging information. Notices, payment plans, legal escalation and other collection decisions should follow the management agreement, applicable requirements and authorized decision-makers.' },
];
const faqSchema = generateFAQSchema(faqs);

export default function PropertyManagementReceivablesAging() {
  return (
    <ArticleLayout
      title="Property Management Receivables Aging: Reconciliation and Review"
      category="Property Management Accounting"
      description="A practical accounting workflow for validating overdue balances, reconciling control accounts and documenting receivables exceptions."
      publishedDate="2026-10-13"
      section="blog"
      slug="property-management-receivables-aging"
      inquiryTitle="Need Help With Receivables Reconciliation?"
      inquiryLead="Tell us how tenant balances are reviewed today, which property management or accounting system you use, and where aging differences remain unresolved."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <p>A property management receivables aging report shows charges that remain unpaid and how long they have been outstanding. It can support collection visibility, but it is also an accounting control: the detail should be complete, correctly dated, linked to the right tenant or property, and reconcilable to the receivables balance in the general ledger.</p>
      <p>This guide focuses on the accounting review of aging reports—not tenant communication scripts or legal collection advice. Collection policies, lease terms, payment plans and escalation decisions should be handled by authorized personnel under applicable agreements and requirements.</p>

      <h2>1. Set the reporting date and scope</h2>
      <p>Before reviewing the numbers, confirm the report date, legal entity, property portfolio, receivable types, accounting basis and tenant-status filters. Check whether the report includes current and former tenants, non-rent charges, credits and unapplied receipts. Comparing reports with different dates or filters can create an apparent mismatch that is not an accounting error.</p>
      <ul>
        <li>Use the same cutoff date for the aging and general ledger.</li>
        <li>Confirm the property, entity and account filters.</li>
        <li>Check whether former tenants and closed properties remain in scope.</li>
        <li>Retain the report parameters or export with the close workpapers.</li>
      </ul>

      <h2>2. Validate the aging buckets and underlying transactions</h2>
      <p>Aging buckets commonly group balances by days outstanding, but exact labels and date logic vary. Confirm whether age is measured from the charge date, due date or another configured field. Sample material balances back to charge detail, lease terms, approved fees, adjustments and payment history. Investigate duplicate charges, wrong-period entries and charges assigned to the wrong tenant or unit.</p>
      <p>Do not assume an old balance is collectible or uncollectible solely because of its age. The report identifies the accounting position; any provision, write-off or collection decision needs the organization’s documented policy and required approval.</p>

      <h2>3. Reconcile aging detail to the general ledger</h2>
      <p>Compare the total aging balance with the appropriate accounts receivable control account for the same entity and reporting date. The amounts should agree or have a documented reconciliation of differences. If they do not, check report filters, posting dates, manual journal entries, subledger batches, duplicate postings and transactions recorded directly in the general ledger.</p>
      <p>Use a short reconciliation schedule that shows the aging total, general-ledger balance, each reconciling item, the supporting evidence and the person responsible for resolution. Avoid a generic journal entry that merely forces the two totals to match.</p>

      <h2>4. Review receipts, credits and unapplied cash</h2>
      <p>Unapplied payments, credit balances, reversals and refunds can distort the picture of what is overdue. Trace material receipts to the correct tenant or lease and confirm that credits are applied to the appropriate charge. Check whether a receipt has been recorded in the tenant ledger but not cleared through the deposit workflow, or whether the same receipt was entered twice.</p>
      <p>For transaction-level charge and payment history, use the <Link href="/blog/property-management-tenant-ledger-reconciliation" className="text-primary underline underline-offset-4">tenant ledger reconciliation checklist</Link>. For recorded receipts that have not yet matched a bank deposit, see the <Link href="/blog/property-management-undeposited-funds" className="text-primary underline underline-offset-4">undeposited funds reconciliation guide</Link>.</p>

      <h2>5. Investigate former-tenant and disputed balances</h2>
      <p>Former tenants can disappear from a report when the export is filtered to active leases only. Where those balances remain within the accounting scope, review them separately and retain the charge history, receipts, credits and move-out adjustments. Confirm that security deposits are accounted for under the correct liability and settlement workflow rather than casually netted against rent receivables.</p>
      <p>For disputed items, record the amount, reason, evidence requested, responsible person and status. Accounting records should reflect approved adjustments, not informal assumptions about whether a tenant will pay.</p>

      <h2>6. Use the rent roll as a cross-check, not a substitute</h2>
      <p>The rent roll typically describes units, lease terms, occupancy and scheduled rent. Receivables aging describes amounts still outstanding. They answer different questions and will not match line by line. Compare them to identify missing leases, incorrect recurring charges, rent changes not posted, concessions, move-in or move-out timing, and unusual differences between scheduled rent and billed amounts.</p>
      <p>See the <Link href="/blog/rent-roll-accounting" className="text-primary underline underline-offset-4">rent roll accounting guide</Link> for the operational report and its relationship to accounting records. Keep the aging report as the starting point for overdue-balance review.</p>

      <h2>7. Track aging trends and exceptions</h2>
      <p>Compare current aging with prior periods and investigate meaningful changes in total receivables, older balances, credit balances and the number of accounts affected. Use consistent date ranges and buckets when trending results. A larger balance may reflect a portfolio change or billing cycle, so explain the cause rather than relying on the total alone.</p>
      <p>An exception log can record tenant or account reference, property, amount, age, issue, next action, assigned owner, due date and resolution. Restrict access to tenant information and share reports only with authorized recipients.</p>

      <h2>8. Complete the review before owner reporting</h2>
      <p>Resolve material mismatches or document them before issuing the financial reporting package. Confirm that corrections are approved and that the aging, tenant ledger, receivables control account and relevant cash or deposit records tell a consistent story. Include the reconciliation in the <Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4">property management month-end close checklist</Link> and use the <Link href="/blog/property-management-financial-statements" className="text-primary underline underline-offset-4">financial statements guide</Link> to understand how receivables support the wider reporting pack.</p>

      <h2>Receivables aging reconciliation checklist</h2>
      <ul>
        <li>Reporting date, entity, property and tenant filters confirmed.</li>
        <li>Aging buckets and date logic understood.</li>
        <li>Material charges sampled to lease and source records.</li>
        <li>Aging total tied to the corresponding general-ledger control account.</li>
        <li>Unapplied receipts, credits, reversals and duplicate entries reviewed.</li>
        <li>Former-tenant balances and move-out adjustments considered.</li>
        <li>Meaningful changes and older balances explained or assigned for action.</li>
        <li>Adjustments approved and supporting evidence retained.</li>
        <li>Reviewer and completion date recorded before reporting is issued.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      {faqs.map((faq) => (
        <section key={faq.question} className="mb-5">
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <p>A reliable aging report is more than a list of late payments. When it reconciles to the general ledger and is supported by tenant-level detail, it gives property managers a defensible view of outstanding balances and a cleaner foundation for owner reporting.</p>
    </ArticleLayout>
  );
}
