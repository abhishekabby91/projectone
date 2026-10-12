import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'CAM Reconciliation: A Practical Accounting Guide',
  description: 'A practical CAM reconciliation workflow for commercial property managers: expense pools, lease rules, tenant allocations, true-ups and review controls.',
  path: '/blog/property-management-cam-reconciliation',
});

export default function Page() {
  return (
    <ArticleLayout
      title="CAM Reconciliation: A Practical Guide for Property Managers"
      category="Property Management"
      description="How to organize recoverable operating expenses, check lease-specific rules, reconcile tenant estimates to actuals and document year-end adjustments."
      publishedDate="2026-10-12"
      updatedDate="2026-10-12"
      section="blog"
      slug="property-management-cam-reconciliation"
      inquiryTitle="Tell Us About Your Property Accounting Workflow"
      inquiryLead="Share the property types, systems and accounting tasks involved, including any recurring CAM or operating-expense reconciliation workload."
    >
      <p>Common area maintenance (CAM) reconciliation is a commercial-property accounting process that compares eligible operating expenses for a period with the estimates or recoveries billed to tenants. Depending on the lease, the final calculation may result in an additional charge, a credit or no adjustment. Related costs may be described as operating-expense recoveries, common-area charges or lease recoveries; the lease and the property's accounting policy determine the terminology and treatment.</p>

      <p>The difficult part is not simply dividing a total by occupied square footage. Each lease may define recoverable costs, exclusions, allocation methods, caps, base years, gross-up rules and timing differently. A reliable accounting workflow keeps the calculation traceable to the source records and makes assumptions or unresolved questions visible for review. This guide covers the accounting preparation and control steps; it does not interpret leases or determine legal rights.</p>

      <h2>1. Assemble the source records before calculating</h2>
      <p>Start with a defined property and reconciliation period. Gather the general-ledger detail, vendor invoices, credit notes, relevant budgets, tenant rent roll, area or occupancy schedule, prior-period recovery schedules and the amounts already billed or collected. Also obtain the current lease and amendments for each tenant from the client's approved source.</p>
      <ul>
        <li><strong>Expense detail:</strong> transaction date, vendor, account code, property, amount, invoice reference and any required department or cost pool.</li>
        <li><strong>Tenant and area data:</strong> tenant, premises, eligible area, occupancy dates and the source of the area measurement.</li>
        <li><strong>Lease information:</strong> the approved recovery basis, inclusions and exclusions, caps, base-year or base-stop treatment, gross-up provisions and special tenant terms.</li>
        <li><strong>Billing history:</strong> monthly estimates, posted charges, credits, receipts and any adjustments already recorded.</li>
      </ul>
      <p>Record missing documents and uncertain terms as exceptions. Do not fill gaps by assuming that every tenant follows the same lease rules.</p>

      <h2>2. Reconcile the general ledger before building expense pools</h2>
      <p>Review the property's operating-expense accounts for completeness, cutoff, duplicate postings, credits, reclassifications and costs charged to the wrong property or period. Tie the reconciliation source totals to the final ledger used for the close. If late invoices or adjustments arrive after the first draft, document how they affect the pool and whether a revised statement is needed.</p>
      <p>Separate the task of recording actual costs from deciding which costs are recoverable. An expense may be valid in the ledger but excluded from a particular tenant's recovery under the relevant agreement. Have the client or its authorized lease/accounting reviewer approve classifications where the documentation is unclear.</p>

      <h2>3. Build and document each recoverable expense pool</h2>
      <p>Map general-ledger accounts into the categories required by the approved reconciliation rules. Keep a clear bridge from the source account to the pool total, and record adjustments separately instead of silently overwriting ledger values. Depending on the property and lease terms, a pool may cover shared utilities, cleaning, landscaping, repairs or other operating costs, but no category should be assumed recoverable for every tenant.</p>
      <div className="my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead><tr className="bg-input text-left"><th className="p-3">Control step</th><th className="p-3">Evidence to retain</th><th className="p-3">Exception to flag</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3 font-semibold">Account mapping</td><td className="p-3">GL account and pool mapping</td><td className="p-3">Unmapped or inconsistently coded account</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-semibold">Expense eligibility</td><td className="p-3">Invoice, transaction description and approved classification</td><td className="p-3">Potential exclusion, capital item or unclear treatment</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-semibold">Pool adjustment</td><td className="p-3">Amount, reason, source and reviewer</td><td className="p-3">Unsupported adjustment or duplicate removal</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-semibold">Final tie-out</td><td className="p-3">Pool total tied to ledger detail</td><td className="p-3">Difference between final GL and reconciliation source</td></tr>
          </tbody>
        </table>
      </div>

      <h2>4. Apply tenant-specific allocation rules</h2>
      <p>Once the approved expense pools are complete, apply the allocation basis that applies to each tenant. A simple pro-rata illustration is:</p>
      <p><strong>Illustrative share = eligible pool × tenant's approved allocation percentage.</strong></p>
      <p>That percentage might be based on a tenant's eligible area relative to a defined building area, but the denominator and adjustments must follow the applicable lease and approved schedule. Do not substitute a portfolio-wide percentage where the lease calls for a different basis.</p>
      <p>Some agreements may also contain expense caps, base-year or base-stop provisions, occupancy gross-ups, tenant-specific exclusions or other limits. These are not interchangeable settings. Keep a record of the rule used, the source document, the calculation and any reviewer decision. Where interpretation is needed, refer the question to the client's authorized lease or legal adviser instead of treating a generic accounting rule as a contractual conclusion.</p>

      <h2>5. Compare the tenant share with estimates already billed</h2>
      <p>After the approved calculation is complete, compare each tenant's final share with the estimates or charges already posted for the same period. The difference is the proposed true-up, subject to the lease, billing history and client review. Check that prior credits, corrections, tenant changes and partial-period occupancy have been treated consistently with the approved rules.</p>
      <div className="my-6 overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">
          <thead><tr className="bg-input text-left"><th className="p-3">Illustrative calculation</th><th className="p-3 text-right">Amount</th></tr></thead>
          <tbody>
            <tr className="border-t border-border"><td className="p-3">Tenant's approved share of recoverable expenses</td><td className="p-3 text-right">$12,400</td></tr>
            <tr className="border-t border-border"><td className="p-3">Estimates previously billed for the same period</td><td className="p-3 text-right">$11,700</td></tr>
            <tr className="border-t border-border"><td className="p-3 font-semibold">Proposed additional recovery before review</td><td className="p-3 text-right font-semibold">$700</td></tr>
          </tbody>
        </table>
      </div>
      <p>The figures above are illustrative only. A real calculation must use the lease-specific basis, final approved expense pools and complete billing history. The accounting schedule should make it possible for a reviewer to trace the proposed difference to the source data and identify any assumption that still needs approval.</p>

      <h2>6. Review the output before tenant statements or billing adjustments</h2>
      <p>Use a repeatable review that checks both the total and the individual tenant outcomes. Useful checks include:</p>
      <ul>
        <li>All in-scope general-ledger expenses are included, excluded or adjusted with a documented reason.</li>
        <li>Expense pools tie to the approved final ledger and material adjustments have supporting evidence.</li>
        <li>Tenant allocation percentages and area data tie to the approved source schedule.</li>
        <li>Lease-specific exclusions, caps, base-year rules and other approved calculations have been applied consistently.</li>
        <li>Previously billed estimates, credits and corrections are included once and for the correct period.</li>
        <li>Tenant-level totals reconcile to the overall recovery schedule, with rounding differences explained.</li>
        <li>Open exceptions have an owner, next action and reviewer decision before the output is finalized.</li>
      </ul>
      <p>Keep the working schedule, source reports, adjustments, exception log and approval evidence together according to the client's record-retention process. Accounting support can prepare and reconcile schedules, but the client's authorized personnel should approve interpretations, billing decisions and release of tenant charges.</p>

      <h2>7. Connect CAM work to the normal accounting close</h2>
      <p>CAM reconciliation is easier when it is not treated as an isolated year-end spreadsheet exercise. Consistent property coding, timely invoice posting, monthly account review and a documented close reduce the number of issues that must be reconstructed later. The reconciliation should use a clearly identified final ledger version and feed approved adjustments back into the accounting records.</p>
      <p>Related workflows: <Link href="/blog/property-management-month-end-close-checklist">property management month-end close checklist</Link>, <Link href="/blog/property-management-bank-reconciliation">bank reconciliation</Link>, <Link href="/blog/property-management-owner-statements">owner-statement review</Link> and <Link href="/blog/yardi-accounting-workflow">Yardi accounting workflow</Link>. For the wider service scope, see <Link href="/industries/property-management">property management accounting and bookkeeping support</Link> or the <Link href="/services/property-management-accounting">property management accounting services page</Link>.</p>

      <h2>Questions to ask before finalizing a CAM reconciliation</h2>
      <h3>Is every operating expense recoverable?</h3>
      <p>No universal rule should be assumed. Recoverability depends on the relevant agreement, approved accounting treatment and applicable requirements. Keep ledger recording separate from the lease-specific recovery decision.</p>

      <h3>Can the same allocation percentage be used for every tenant?</h3>
      <p>Not without checking the approved terms. Tenants may have different area bases, exclusions, caps or other calculation rules. Maintain a documented tenant-by-tenant basis where required.</p>

      <h3>What if an invoice arrives after the schedule is prepared?</h3>
      <p>Record the late item through the client's approved accounting process, assess whether it belongs in the period and pool, and document whether the reconciliation or tenant statement needs revision. Do not silently change a finalized schedule.</p>

      <h3>Who approves disputed lease terms or unusual costs?</h3>
      <p>Refer unresolved interpretation and billing decisions to the client's authorized property, accounting or legal reviewer. A preparer should document the issue and follow the approval process rather than independently decide a contractual dispute.</p>

      <h2>Scope note</h2>
      <p>This guide covers general accounting preparation and review controls, not legal advice, lease interpretation, tax advice or a determination that a charge is recoverable. Lease provisions and jurisdictional requirements vary. Confirm the governing terms and obtain appropriate professional review before issuing final tenant charges.</p>
    </ArticleLayout>
  );
}
