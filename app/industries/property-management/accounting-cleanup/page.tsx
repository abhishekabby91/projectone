import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/accounting-cleanup';

export const metadata: Metadata = genMeta({
  title: 'Property Management Cleanup Outsourcing',
  description: 'Outsourced accounting cleanup for property managers: catch up overdue books, reconcile property and tenant ledgers, and establish a repeatable monthly close.',
  path: PATH,
});

const faqs = [
  { question: 'When should a property management company consider accounting cleanup?', answer: 'Cleanup may help when reconciliations are overdue, tenant or owner ledgers do not agree with the general ledger, deposits have unclear balances, transactions are uncategorized, or monthly reports take too long to prepare. The first step is to identify the affected periods and records.' },
  { question: 'Can you work with our current property management software?', answer: 'The engagement starts with the platform and accounting file you already use. We confirm the reports, access, property and entity structure, and any general-ledger connection before agreeing on the cleanup scope. A software migration is not assumed.' },
  { question: 'Will you change balances or release payments without approval?', answer: 'No. We document discrepancies and prepare proposed corrections or supporting schedules for the client’s designated reviewer. Your business retains approval authority, banking control, payment release and decisions about accounting treatment.' },
  { question: 'Can cleanup continue into monthly bookkeeping?', answer: 'Yes, if useful. After the agreed historical periods are reconciled and open items are documented, the work can transition to a recurring close checklist, reconciliations, exception tracking and owner-reporting preparation.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Property Management Accounting Cleanup and Catch-Up Outsourcing',
  description: 'Outsourced cleanup and catch-up accounting for property management businesses, including backlog assessment, property and tenant ledger reconciliation, owner statement tie-outs, deposit record review and monthly close preparation.',
  slug: 'property-management/accounting-cleanup',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Accounting Cleanup', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  ['Reconciliation backlog', 'List the unreconciled bank, credit-card and balance-sheet accounts by period, then work through differences with supporting records and a visible exception log.'],
  ['Property and tenant ledger differences', 'Compare property-level activity, rent receipts, tenant balances and the general ledger to locate posting gaps, duplicates, unapplied cash or timing differences.'],
  ['Owner statements and distributions', 'Tie income, expenses, management fees and distribution schedules to supporting records; flag items that need the client’s review before statements are finalized.'],
  ['Deposit and liability records', 'Review tenant deposit liabilities and related schedules against available bank and ledger records. Escalate discrepancies rather than assuming that a ledger balance is correct.'],
  ['Vendor bills and expense coding', 'Organize missing invoices, duplicate entries, unclear property/entity coding and payable schedules so the reviewer can see what remains incomplete.'],
  ['A repeatable monthly close', 'Turn the cleanup findings into a close calendar, account reconciliation list, responsibility map and outstanding-items log to reduce repeat backlogs.'],
];

export default function PropertyManagementAccountingCleanupPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="For property management companies"
        title="Property Management Accounting Cleanup and Catch-Up"
        description="Bring overdue books, unreconciled accounts and property-level reporting differences into a clear work plan—then build a monthly process your team can maintain."
        cta={{ text: 'Discuss Your Accounting Backlog', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Accounting Cleanup</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Start with what is missing—not a guess at the answer</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">Accounting backlogs can grow when routine posting, bank reconciliations, tenant-ledger reviews or owner reporting slip behind. The symptoms may look similar, but the causes can differ: missing source documents, transactions posted to the wrong property, timing differences, duplicate entries or a mismatch between the property platform and the general ledger.</p>
            <p className="text-base leading-relaxed text-muted">Accounstone can help organize the backlog, reconcile agreed records and prepare exceptions for your reviewer. The scope begins with the periods, properties, systems and deliverables involved. We do not assume that every difference can be corrected without client evidence or approval.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Signs a cleanup review may help</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Monthly close keeps slipping or depends on one person</li>
              <li>• Bank or balance-sheet reconciliations have old open items</li>
              <li>• Owner statements do not tie to ledger balances</li>
              <li>• Tenant, rent-roll or deposit schedules have unexplained differences</li>
              <li>• Vendor invoices and expense coding are incomplete</li>
              <li>• Management needs a clear backlog list before hiring or outsourcing</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the cleanup can cover</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">The work is prioritized around the records available and the reports the business needs to rely on. These are potential work areas, not a promise that every item is included in every engagement.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workAreas.map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A practical four-step recovery plan</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['1. Define the backlog', 'Agree on the properties, entities, periods, accounts, software and reports in scope. Identify missing source records and access needs.'],
              ['2. Reconcile in priority order', 'Start with the balances and ledgers that block reliable reporting. Record each discrepancy, evidence reviewed and question for the client.'],
              ['3. Prepare corrections for review', 'Organize supporting detail and proposed entries where appropriate. The client’s authorized reviewer decides on accounting treatment and approves adjustments.'],
              ['4. Stabilize the monthly close', 'Set recurring reconciliations, deadlines, ownership, exception tracking and a handoff format so the same backlog does not immediately return.'],
            ].map(([heading, body]) => <li key={heading} className="rounded-xl border border-border bg-input p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></li>)}
          </ol>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Continue with the workflow you need</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Property management accounting</Link>
            <Link href="/blog/real-estate-accounting-month-end-close" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Property accounting month-end close</Link>
            <Link href="/blog/yardi-accounting-workflow" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Yardi accounting workflow</Link>
            <Link href="/blog/property-management-cam-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">CAM reconciliation workflow</Link>
            <Link href="/blog/quickbooks-month-end-close-checklist" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">QuickBooks month-end close checklist</Link>
            <Link href="/industries/property-management/california" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">California accounting support</Link>
            <Link href="/industries/property-management/texas" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Texas accounting support</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Clear responsibilities and evidence</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">Accounstone provides remote accounting preparation and bookkeeping support. Your business retains payment authorization, banking control, property-operation decisions and approval of adjustments. The service does not replace legal advice, a CPA’s tax or assurance work, or any review required of the responsible property manager or broker. Any trust-account work is limited to agreed recordkeeping and reconciliation support using available evidence and client procedures.</p>
        </div>
      </section>
      <FAQSection subtitle="Property management cleanup questions" items={faqs} columns={2} />
      <InquirySection region="united-states" service="Property Management Accounting" source={PATH} title="Discuss Your Property Accounting Backlog" lead="Tell us what is behind, how many properties or entities are involved, which software you use and which reports you need to rely on first. We can define a practical cleanup scope and handoff process." />
      <CTABanner title="Get the books back to a repeatable monthly process" description="Discuss cleanup, reconciliation and recurring close support around your current property records and review process." cta={{ text: 'Start an Inquiry', href: '#inquiry' }} ctaSecondary={{ text: 'Property Management Services', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
