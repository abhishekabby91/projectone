import { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Owner Statement Reconciliation',
  description: 'Prepare property management owner statements from reconciled ledgers, checked fees, reserve movements and documented exceptions.',
  path: '/blog/property-management-owner-statements',
});

const faqs = [
  { question: 'What should a property management owner statement include?', answer: 'Depending on the management agreement and reporting setup, an owner statement may summarize rental income, fees, property expenses, reserves, owner contributions or distributions, and the resulting amount payable or carried forward. The supporting detail should be traceable to the underlying records.' },
  { question: 'Should owner statements be prepared before bank reconciliation?', answer: 'The safer workflow is to reconcile relevant cash and ledger records first, investigate material exceptions, and then prepare the statement. If a statement must be issued while an item remains open, the exception should be visible and handled under an agreed review policy.' },
  { question: 'How should management fees be checked?', answer: 'Compare the calculation with the applicable management agreement and approved fee rules, confirm the period and base used, and check the posting to the correct property and management-company records. Contract interpretation and disputed fees should be referred to the responsible manager or adviser.' },
  { question: 'Can owner statement preparation be supported by an external accounting provider?', answer: 'Defined preparation tasks can be assigned externally when access, coding rules, approval authority, exception escalation and reviewer responsibilities are documented. The client or authorized manager should retain approvals and payment-release authority unless a different arrangement is explicitly approved and controlled.' },
];

export default function PropertyManagementOwnerStatements() {
  return (
    <ArticleLayout
      faqs={faqs}
      title="Property Management Owner Statements: A Reconciliation and Review Workflow"
      category="Property Management Accounting"
      description="Prepare owner reporting from reconciled records, traceable fee calculations and clearly reviewed exceptions—not just a report exported at month-end."
      publishedDate="2026-10-12"
      updatedDate="2026-10-16"
      section="blog"
      slug="property-management-owner-statements"
      inquiryTitle="Need a More Reliable Owner-Statement Process?"
      inquiryLead="Tell us which property system you use, how statements are reviewed today, and where reconciliation or month-end handoffs slow the process."
    >
      <p>An owner statement is the handoff between property-level accounting records and the information an owner uses to understand a property&apos;s activity. A polished PDF is not enough if its cash, fees, expenses or reserve movements cannot be traced back to the ledger. The management fee should also be traced through the <Link href="/blog/property-management-management-fee-reconciliation" className="text-primary underline underline-offset-4">owner-ledger-to-company reconciliation</Link> so the fee charge, transfer and company receipt are not confused.</p>
      <p>The exact format depends on the management agreement, ownership structure, software and reporting expectations. The workflow below focuses on preparation and review controls; it is not a substitute for legal, tax or jurisdiction-specific trust-accounting advice.</p>

      <h2>What to confirm before preparing the statement</h2>
      <ul>
        <li>Correct reporting period, property and owner/entity.</li>
        <li>Rent, other receipts, credits and adjustments posted to the correct ledgers.</li>
        <li>Vendor invoices and expenses coded to the correct property and period.</li>
        <li>Relevant bank accounts and subsidiary records reconciled, with open items documented.</li>
        <li>Management fees, reserve movements, owner contributions and distributions supported by the agreed rules and approvals.</li>
        <li>Prior-period balances and any carry-forward items explained.</li>
      </ul>

      <h2>1. Start from reconciled source records</h2>
      <p>Confirm the statement period and cut-off. Tie cash activity to bank reconciliations, compare tenant or property ledgers with the accounting records, and review unpaid invoices and other obligations that affect the period. Keep a short exception register rather than silently forcing a balance to match.</p>
      <p>Where the platform keeps operational and general-ledger records separately, document which report is the source for each statement line and how differences are investigated. A report export alone does not establish that the supporting balances agree.</p>

      <h2>2. Check income, expenses and property coding</h2>
      <p>Review rent receipts, fees, credits, refunds and other income for the correct period and property. Check vendor expenses for duplicate entries, missing support, unusual amounts and incorrect allocations. Shared costs should follow the client's approved allocation method, with the basis retained for review.</p>
      <p>Do not net unrelated items simply to make the statement look cleaner. Keep the original transaction trail and document corrections through the normal adjustment process.</p>

      <h2>3. Recalculate management fees and other deductions</h2>
      <p>Compare each fee calculation with the applicable management agreement and the client's approved rules. Confirm the relevant period, calculation base, rate or fixed amount, treatment of credits, and the property or entity receiving the fee. Differences should be referred to the responsible manager rather than resolved through an undocumented assumption.</p>
      <p>Keep the management company's income and receivable records distinct from amounts belonging to the property owner. The correct posting depends on the legal entities and system configuration, so agree the accounting treatment with the client's reviewer.</p>

      <h2>4. Reconcile reserves, liabilities and owner balances</h2>
      <p>Identify reserve transfers, security deposits and other liabilities that should not be presented as ordinary operating income. Compare supporting schedules with the general ledger and applicable bank or control records. If funds are held under a regulated or trust arrangement, follow the rules that apply to the specific activity and jurisdiction.</p>
      <p>Check the opening owner balance against the prior approved statement, then explain material movements during the current period. Keep contributions, distributions and amounts carried forward separately identifiable.</p>

      <h2>5. Review the amount payable or carried forward</h2>
      <p>Before finalizing, trace the ending balance to the statement's supporting records. Check whether invoices are pending approval, whether a transfer is recorded in the right period, and whether an unresolved item could change the amount payable. Do not imply a payment has been released just because a statement shows a distribution due.</p>
      <p>Payment authorization and release should remain with the client or its authorized personnel under the agreed controls. The accounting preparation file should make the calculation and reviewer decision easy to follow.</p>

      <h2>Example: a statement-to-ledger review bridge</h2>
      <p>The review file should let another person trace a statement total to the source records without reconstructing the process from memory. The table below is an illustrative control map; the exact reports and account names depend on the property system and the management agreement.</p>
      <table>
        <thead>
          <tr><th>Statement area</th><th>Source to tie out</th><th>Review question</th></tr>
        </thead>
        <tbody>
          <tr><td>Rental receipts and other income</td><td>Tenant ledger, receipt activity and bank reconciliation</td><td>Are receipts posted to the right property and reporting period, including unapplied or reversed items?</td></tr>
          <tr><td>Operating expenses</td><td>General ledger, invoice support and accounts payable listing</td><td>Are expenses supported, correctly coded and recorded in the intended period?</td></tr>
          <tr><td>Management fees</td><td>Approved fee rule or management agreement and fee posting</td><td>Can the base, period and calculation be reproduced and reviewed?</td></tr>
          <tr><td>Reserves and other liabilities</td><td>Relevant control accounts, supporting schedules and bank records</td><td>Are restricted or owed amounts kept distinct from ordinary operating results?</td></tr>
          <tr><td>Owner balance or distribution due</td><td>Prior approved statement, current-period movements and authorized payment record</td><td>Does the ending figure reconcile, and is a due amount clearly distinguished from a payment actually released?</td></tr>
          <tr><td>Open exceptions</td><td>Exception log with owner, amount, evidence needed and reviewer decision</td><td>Is every material unresolved difference assigned and disclosed under the agreed process?</td></tr>
        </tbody>
      </table>
      <p>If a total does not tie, record the difference and investigate its cause before posting a correcting entry. Timing differences, missing transactions and incorrect coding need different resolutions; a journal entry should not be used merely to make the report agree.</p>

      <h2>6. Use a simple review checklist</h2>
      <ol>
        <li>Property, owner/entity and reporting period are correct.</li>
        <li>Cash and relevant subsidiary ledgers have been reconciled.</li>
        <li>Income, expenses, fee calculations and allocations have support.</li>
        <li>Reserves and other liabilities are presented consistently with the agreed treatment.</li>
        <li>Opening balance agrees with the prior approved statement or has an explained correction.</li>
        <li>Exceptions have an owner, status and documented decision.</li>
        <li>A reviewer has approved the statement before it is issued.</li>
        <li>The final statement and working papers are retained in the agreed location.</li>
      </ol>

      <h2>Common warning signs</h2>
      <ul>
        <li>The statement is prepared before bank and ledger reconciliations are complete.</li>
        <li>Management fees are manually overridden without an explanation or approval.</li>
        <li>Reserve or deposit balances are treated as spendable operating cash without checking their nature.</li>
        <li>Owner balances change between drafts but there is no adjustment trail.</li>
        <li>Statements are issued with unresolved differences that are not disclosed or assigned for resolution.</li>
        <li>The person preparing the records also releases payments without a documented authorization control.</li>
      </ul>

      <h2>How the workflow fits common property-management systems</h2>
      <p>Platforms such as Buildium, AppFolio and Yardi offer different ways to maintain property records and produce owner-facing reports. Menu names, available reports and ledger behavior depend on the product, version, configuration and permissions. Start by mapping each statement line to the relevant source report and accounting record; do not assume that a report generated by one system proves every balance has been reconciled.</p>
      <p>For a repeatable monthly process, connect owner statements to the wider <Link href="/blog/property-management-month-end-close-checklist">property management month-end close checklist</Link>, the <Link href="/blog/property-management-bank-reconciliation">bank reconciliation workflow</Link>, the <Link href="/blog/property-management-tenant-ledger-reconciliation">tenant ledger reconciliation checklist</Link> and the <Link href="/blog/property-management-accounting">complete property management accounting guide</Link>.</p>
      <p>For the broader report pack, see the <Link href="/blog/property-management-financial-statements">property management financial statements guide</Link>. For the calculation, approval and release of funds, use the separate <Link href="/blog/property-management-owner-distributions">owner distribution workflow</Link>.</p>

      <h2>When accounting support is assigned externally</h2>
      <p>Define the work by task: coding and posting, reconciliation preparation, statement preparation, exception documentation or reporting-pack assembly. Agree the access model, review points, escalation path, file retention and who can approve adjustments or release funds. A practical scope statement is more useful than a broad promise to “handle owner accounting.”</p>
      <p>Accounstone can discuss defined bookkeeping and accounting workflows around a client's existing system and approval process. Scope should be confirmed against the actual portfolio, software setup and reporting requirements before work begins.</p>

      <h2>Important scope note</h2>
      <p>This article describes a general accounting workflow. Management agreements, ownership structures, trust-fund rules and tax treatment vary. Confirm jurisdiction-specific obligations with the responsible licensed professional or regulator; do not use this checklist as a legal or tax determination.</p>
    </ArticleLayout>
  );
}
