import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Accruals & Prepaids',
  description:
    'Review property management accruals and prepaid expenses at month-end, with support schedules, examples, reversals and property-level allocation checks.',
  path: '/blog/property-management-accrued-expenses',
});

const faqs = [
  {
    question: 'What are accrued expenses in property management?',
    answer:
      'They are costs attributable to the reporting period that have been incurred but may not yet have a vendor invoice recorded or payment made. Any accrual should be supported by evidence and a reasonable basis for the amount.',
  },
  {
    question: 'What are prepaid expenses for a rental property?',
    answer:
      'A prepaid expense is a payment made before the related benefit is used, such as an eligible insurance premium or service contract covering future months. The unused portion may remain as an asset and be expensed over the coverage period, subject to the entity’s accounting policy.',
  },
  {
    question: 'Should property managers accrue every unpaid invoice?',
    answer:
      'Not automatically. Review whether the cost belongs to the period, whether it is already recorded in accounts payable, whether the amount can be reasonably supported, and how the entity’s accounting policy treats materiality and estimates.',
  },
  {
    question: 'How can a property manager prevent duplicate expenses when an accrual invoice arrives?',
    answer:
      'Use a documented accrual schedule with the property or entity, vendor, period, estimate, source evidence, journal entry reference, reversal or clearing status, and actual invoice amount. Match the invoice to the schedule before posting it through accounts payable.',
  },
];
export default function PropertyManagementAccruedExpenses() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Property Management Accruals and Prepaid Expenses: A Month-End Checklist"
      category="Property Management Accounting"
      description="A practical way to review costs that belong to the current period, payments that cover future periods, and the schedules that support each adjustment."
      publishedDate="2026-10-15"
      section="blog"
      slug="property-management-accrued-expenses"
      inquiryTitle="Need Help With Property-Level Month-End Adjustments?"
      inquiryLead="Tell us how you track invoices, prepaid schedules, accruals and property allocations today, including the accounting or property-management system you use."
    >
      <p>Property management reports can be distorted when the invoice date or payment date is treated as the only signal for when a cost belongs in the books. An expense may relate to a service already received even if the invoice arrives next month. A payment may cover several future months rather than only the month it was paid.</p>
      <p>This checklist helps accounting teams identify those timing differences during close, document the basis for adjustments and keep property-level reporting separate from management-company costs. The right treatment depends on the entity’s accounting method, reporting framework, contract terms and accounting policy; confirm material or unusual items with the responsible accountant or CPA.</p>

      <h2>Accruals vs. prepaid expenses</h2>
      <ul>
        <li><strong>Accrued expense:</strong> a cost has been incurred by the reporting date, but the final invoice or payment may still be outstanding. The books may need an expense and a related liability.</li>
        <li><strong>Prepaid expense:</strong> payment has been made, but some of the benefit relates to future periods. The unexpired portion may need to remain in a prepaid asset account and be expensed over time.</li>
        <li><strong>Accounts payable:</strong> an invoice has generally been recorded as an amount owed. Check the AP ledger before adding an accrual so the same cost is not recorded twice.</li>
      </ul>

      <h2>1. Review likely accruals before closing the period</h2>
      <p>Use recurring vendors, contracts, work orders and activity after period-end to identify services received before the reporting cutoff. Typical review areas can include utilities, maintenance work completed, landscaping, professional services, payroll-related costs, insurance or software services—where the obligation actually belongs to the period and is not already recorded.</p>
      <ul>
        <li>Check open work orders and completed work awaiting an invoice.</li>
        <li>Review recurring contracts and the period of service stated on the invoice or agreement.</li>
        <li>Inspect invoices received after month-end for services delivered before cutoff.</li>
        <li>Compare the AP detail and recent postings to the proposed accrual list.</li>
        <li>Record the source, estimate method, preparer and reviewer for each material item.</li>
      </ul>
      <p>Do not accrue a cost simply because it is expected or because the budget contains it. Establish what service or obligation existed by the reporting date and document a reasonable amount. If evidence is incomplete, log the question for review rather than presenting an unsupported estimate as fact.</p>

      <h2>2. Check property and entity allocation</h2>
      <p>For each item, identify whether it belongs to a specific property, a group of properties, an ownership entity or the property management company itself. A valid expense can still produce misleading owner reports if it is assigned to the wrong property or charged to an owner when it is actually a management-company overhead.</p>
      <ul>
        <li>Use the invoice, service address, work order, contract and approved allocation basis.</li>
        <li>Keep shared costs on a documented allocation schedule instead of dividing them arbitrarily.</li>
        <li>Separate owner/property costs from management-company payroll, office costs and internal software where applicable.</li>
        <li>For multi-entity portfolios, confirm the correct legal entity and intercompany treatment.</li>
      </ul>
      <p>For account structure and property-level tracking, see the <Link href="/blog/property-management-chart-of-accounts" className="text-primary underline underline-offset-4 inline-block py-1.5">property management chart of accounts guide</Link>.</p>

      <h2>3. Maintain a prepaid expense schedule</h2>
      <p>Review larger or recurring payments that cover more than one reporting period. Depending on the contract and accounting policy, examples may include insurance, licenses, software subscriptions, service agreements or other advance payments. A refundable deposit is not automatically a prepaid expense; classify it according to its nature and the underlying agreement.</p>
      <p>A useful schedule includes:</p>
      <ul>
        <li>Vendor, description and original payment or invoice reference.</li>
        <li>Property or entity that receives the benefit.</li>
        <li>Total amount, coverage start and end dates, and allocation method.</li>
        <li>Opening balance, current-period expense, additions and ending balance.</li>
        <li>General-ledger account, preparer and reviewer sign-off.</li>
      </ul>
      <p>At each close, recalculate the portion used during the period and compare the schedule total with the general-ledger balance. Investigate expired contracts, duplicate schedules, cancelled policies, credits and items that no longer provide a future benefit.</p>

      <h2>4. Illustrative examples</h2>
      <p><strong>Unbilled maintenance:</strong> work was completed at a property before month-end, but the vendor invoice has not arrived. If the obligation and amount can be reasonably supported, the accounting reviewer may determine that an expense and related liability should be recognized in the current period. When the invoice arrives, compare it with the accrual and clear or adjust the balance using the established process.</p>
      <p><strong>Annual insurance paid in advance:</strong> a policy covers several months beyond the payment date. If the payment qualifies for prepaid treatment under the entity’s policy, maintain the unexpired balance and recognize the applicable portion as expense over the coverage period. Confirm whether the policy belongs to a property owner or the management company before allocating it.</p>
      <p>These are workflow illustrations, not universal journal-entry instructions. The exact accounts, timing and reversal approach should follow the entity’s accounting policy and the review of the responsible accountant.</p>

      <h2>5. Control the reversal and invoice-clearing process</h2>
      <p>Every accrual needs a clear next step. Some organizations reverse accruals at the start of the next period; others clear them when the invoice is recorded. Follow one approved method consistently and ensure the actual invoice does not leave both the accrual and payable outstanding.</p>
      <ul>
        <li>Assign each accrual a unique reference and link the supporting evidence.</li>
        <li>Track whether it is pending invoice, reversed, cleared or adjusted.</li>
        <li>Compare the actual invoice with the estimate and investigate material differences.</li>
        <li>Carry forward only items that remain valid, with an explanation and owner.</li>
        <li>Review aged prepaid balances and stale accruals rather than rolling them forward without support.</li>
      </ul>
      <p>Use the <Link href="/blog/property-management-accounts-payable" className="text-primary underline underline-offset-4 inline-block py-1.5">accounts payable workflow</Link> to coordinate invoice intake and duplicate checks, and the <Link href="/blog/property-management-month-end-close-checklist" className="text-primary underline underline-offset-4 inline-block py-1.5">month-end close checklist</Link> to place the review in the broader close sequence.</p>

      <h2>6. Reconcile the schedules before reports are issued</h2>
      <p>At close, compare the accrual and prepaid schedules to their general-ledger accounts. Check opening balances, additions, expenses recognized, reversals, invoices cleared and ending balances. Keep the schedule and source documents available for the person reviewing property-level statements.</p>
      <ul>
        <li>Confirm totals agree to the relevant ledger accounts.</li>
        <li>Explain significant month-to-month movements and unusual balances.</li>
        <li>Resolve or clearly document open items before reports are finalized.</li>
        <li>Ensure adjustments appear in the correct property or management-company report.</li>
      </ul>
      <p>These checks support more consistent financial reporting; they do not guarantee a particular audit result or replace professional judgment about accounting treatment.</p>

      <h2>Month-end review checklist</h2>
      <ul>
        <li>☐ Review post-period invoices, contracts and completed work for potential accruals.</li>
        <li>☐ Check that proposed accruals are not already recorded in accounts payable.</li>
        <li>☐ Confirm evidence, amount basis, period and property/entity allocation.</li>
        <li>☐ Update prepaid schedules for additions, amortization and expired benefits.</li>
        <li>☐ Match schedule totals to general-ledger balances.</li>
        <li>☐ Track reversals, invoice clearing and differences from estimates.</li>
        <li>☐ Document review and resolve material exceptions before issuing reports.</li>
      </ul>

      <h2>Further reading</h2>
      <ul>
        <li><a href="https://www.buildium.com/blog/real-estate-accounting-guide-for-property-managers/" target="_blank" rel="noreferrer" className="inline-block py-1.5">Buildium: Real estate accounting guide for property managers</a></li>
        <li><a href="https://www.accountingtools.com/articles/prepaid-expenses-accounting" target="_blank" rel="noreferrer" className="inline-block py-1.5">AccountingTools: Prepaid expenses accounting</a></li>
      </ul>
    </ArticleLayout>
  );
}
