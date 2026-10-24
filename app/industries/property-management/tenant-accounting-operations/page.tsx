import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/tenant-accounting-operations';

export const metadata: Metadata = genMeta({
  title: 'Tenant Accounting Operations Support',
  description: 'Outsourced tenant accounting operations: rent-batch posting, payment application, tenant ledgers, lease changes, late-fee records and NSF reversals.',
  path: PATH,
});

const faqs = [
  { question: 'What tenant accounting operations can Accounstone support?', answer: 'Within an agreed scope, work can include rent-batch and rent-roll checks, payment application review, tenant ledger maintenance, move-in and move-out accounting records, renewal and unit-transfer updates, documented charge reviews, NSF reversals and exception tracking.' },
  { question: 'Can you work in our existing property management software?', answer: 'We start with the system and workflow already used by your business. Depending on the engagement, this may include Yardi Voyager, Buildium, AppFolio or other client-approved property systems, alongside accounting tools such as QuickBooks Online, Sage Intacct or Xero. We confirm access and report availability before agreeing on the process; software migration or integration is not assumed.' },
  { question: 'Will you decide whether a late fee or lease charge is legally permitted?', answer: 'No. We can review and record charges against client-approved instructions and documented lease information. The property manager or qualified adviser remains responsible for interpreting lease terms, applicable law and any required approvals.' },
  { question: 'Do you initiate ACH payments or release funds?', answer: 'No. We can help prepare records, reconcile payment activity and document exceptions. Your authorized staff retain bank access, payment release, transfer approval and other cash-control responsibilities.' },
  { question: 'How do you handle an NSF or reversed payment?', answer: 'The source transaction and reason are checked, the related receipt and tenant ledger are reviewed, and any proposed reversal or fee entry is documented for the client’s approved workflow. Unclear items are escalated rather than silently adjusted.' },
  { question: 'Can this work connect with monthly close and owner reporting?', answer: 'Yes. Tenant-level activity can feed into the agreed reconciliation and close process, including rent-roll checks, receivables aging, deposit schedules, property-to-general-ledger tie-outs and owner-report preparation.' },
];
const serviceSchema = generateServiceSchema({
  name: 'Tenant Accounting Operations Support for Property Managers',
  description: 'Remote accounting preparation and workflow support for rent batches, tenant payment applications, lease lifecycle records, tenant ledgers, approved charge records, NSF exceptions and property-level reconciliations.',
  slug: 'property-management/tenant-accounting-operations',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Tenant Accounting Operations', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  ['Rent batches and rent-roll validation', 'Check the period, property, unit and tenant population before a scheduled rent batch is treated as complete. Compare expected charges with posted activity, review exceptions and keep a record of missing, duplicated or unexpected entries.'],
  ['Payment application and receipt records', 'Review receipts from the available bank, payment processor or collection records; check tenant and charge allocation, partial payments, unapplied cash and timing differences. External collection receipts can be reconciled to the supporting remittance details.'],
  ['Move-ins, move-outs, renewals and transfers', 'Maintain the accounting side of approved lease lifecycle changes: opening balances, effective dates, unit or property changes, recurring charges and closing ledger checks. Lease decisions and operational approvals stay with the client.'],
  ['Late fees and other approved charges', 'Check charge records against the client-provided instructions and documented lease information. Flag missing support, inconsistent application or unusual entries for the responsible property manager to review.'],
  ['NSF items, reversals and adjustments', 'Trace a returned or reversed payment to the original receipt, bank activity and tenant account. Prepare the proposed ledger treatment within the agreed workflow and document unresolved items for approval.'],
  ['Tenant deposits and liability schedules', 'Keep refundable deposits distinguishable from rental income, review tenant-level balances and compare schedules with the relevant control accounts and available bank records. Move-out refunds or deductions require client authorization and applicable professional review.'],
  ['CAM and recurring tenant billing', 'For commercial properties, organize the supporting expense pools, tenant allocation schedules and estimate-to-actual differences. Calculations follow client-approved lease interpretations and allocation policies; disputed interpretations are referred to the client and its advisers.'],
  ['Property and management-company close', 'Help connect tenant activity with bank reconciliations, property-level general ledger accounts, management-fee schedules, recurring accruals, payroll-related entries and owner-report preparation when those tasks are included in the engagement.'],
];

export default function TenantAccountingOperationsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="For property management companies"
        title="Tenant Accounting Operations Support"
        description="Keep rent batches, payment applications, tenant ledgers and lease-related accounting records aligned with your property-level books and monthly reporting process."
        cta={{ text: 'Discuss Tenant Accounting Support', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Tenant Accounting Operations</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Tenant-level accuracy starts before month-end</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">Property managers can process a high volume of rent charges, receipts, credits and lease changes across many properties. A payment can reach the bank but remain unapplied to the right tenant; a renewal can change a recurring charge; a unit transfer can leave an old balance behind; or a rent batch can post without the expected population being checked.</p>
            <p className="text-base leading-relaxed text-muted">A repeatable tenant accounting workflow connects the source record, property and unit, tenant account, cash activity and general ledger. It also separates work that can be prepared by an accounting support function from decisions that need the property manager’s authority, lease interpretation or banking approval.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Common items to check</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Rent batch totals and expected tenant population</li>
              <li>• Unapplied, partial or misallocated receipts</li>
              <li>• Lease renewals, transfers and move-out balances</li>
              <li>• Approved fees, credits and reversal records</li>
              <li>• Tenant deposit schedules and control accounts</li>
              <li>• Differences between tenant reports and the general ledger</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Tenant accounting work areas</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">The exact tasks depend on your portfolio, source records, software permissions and engagement scope. Each workflow should leave a traceable record of the source, review, exceptions and handoff.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workAreas.map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A controlled daily-to-monthly workflow</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['1. Confirm the source and population', 'Check the reporting period, properties, units, active tenant list, rent roll and approved lease changes. Record missing source information before posting or review proceeds.'],
              ['2. Review posting and allocation', 'Check batch totals, receipts, credits, reversals and recurring charges against available support. Separate routine items from transactions requiring client direction.'],
              ['3. Reconcile and document exceptions', 'Compare tenant balances, rent-roll totals, cash activity and related ledger accounts. Log the amount, source, period, likely cause and evidence needed for each difference.'],
              ['4. Hand off for review and close', 'Prepare the tenant ledger, receivables aging and related schedules for the designated reviewer. Carry unresolved items forward and link the agreed results to the monthly close and owner reporting.'],
            ].map(([heading, body]) => <li key={heading} className="rounded-xl border border-border bg-input p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></li>)}
          </ol>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Work in the systems your process already uses</h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted">Depending on the engagement, source workflows may involve Yardi Voyager, Buildium, AppFolio or other property-management platforms, with accounting records in QuickBooks Online, Sage Intacct or Xero. We confirm the system version, available reports, access permissions and handoffs before agreeing on the work. This is accounting workflow support—not a claim of software-vendor partnership, certification, implementation or configuration services.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management/appfolio-accounting-california" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">AppFolio accounting support</Link>
            <Link href="/industries/property-management/buildium-accounting-support" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Buildium accounting support</Link>
            <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Yardi accounting support</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Related property accounting workflows</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Property management accounting</Link>
            <Link href="/industries/property-management/general-ledger-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Platform-to-GL reconciliation</Link>
            <Link href="/industries/property-management/accounting-cleanup" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Accounting cleanup and catch-up</Link>
            <Link href="/blog/property-management-tenant-ledger-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Tenant ledger reconciliation checklist</Link>
            <Link href="/blog/rent-roll-accounting" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Rent roll accounting</Link>
            <Link href="/blog/property-management-security-deposit-accounting" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Security deposit accounting</Link>
            <Link href="/blog/property-management-cam-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">CAM reconciliation workflow</Link>
            <Link href="/blog/property-management-owner-statements" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Owner statement review</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Clear responsibilities and cash controls</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">Accounstone provides remote accounting preparation and bookkeeping support within an agreed scope. The client retains banking access, ACH and wire authorization, payment release, lease and legal interpretation, approval of owner distributions and decisions about accounting treatment. Tax, legal and assurance conclusions remain with the client’s qualified advisers and responsible professionals.</p>
        </div>
      </section>
      <FAQSection subtitle="Tenant accounting operations questions" items={faqs} columns={2} />
      <InquirySection region="united-states" service="Property Management Accounting" source={PATH} title="Discuss Your Tenant Accounting Workflow" lead="Tell us which property system you use, the tenant accounting tasks involved, your transaction volume and where the current process needs review. We can define the work, source reports, exception log and approval handoff." />
      <CTABanner title="Make tenant accounting easier to review" description="Build a repeatable process for rent posting, payment application, ledger checks and monthly reporting around your existing controls." cta={{ text: 'Start an Inquiry', href: '#inquiry' }} ctaSecondary={{ text: 'Property Management Services', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
