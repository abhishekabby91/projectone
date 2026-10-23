import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/general-ledger-reconciliation';

export const metadata: Metadata = genMeta({
  title: 'Property Management GL Reconciliation Outsourcing',
  description: 'Reconcile property-management platform reports to the general ledger, investigate posting differences and prepare a repeatable monthly review.',
  path: PATH,
});

const faqs = [
  { question: 'What does property management platform-to-GL reconciliation involve?', answer: 'It compares agreed reports from your property-management system with the relevant general-ledger accounts and supporting schedules. The exact comparison depends on your platform, chart of accounts, property/entity structure and reporting process.' },
  { question: 'Can you reconcile AppFolio, Buildium or Yardi to QuickBooks?', answer: 'We can review your current platform, accounting file, available exports and access permissions to determine a suitable reconciliation workflow. We do not assume that a direct integration exists or that you need to change software.' },
  { question: 'What happens when the totals do not agree?', answer: 'Differences are listed by type and period, with the reports and evidence reviewed. Possible causes may include timing, duplicate or missing postings, unapplied receipts, coding differences or account mapping. Proposed corrections are documented for your authorized reviewer rather than silently forcing totals to match.' },
  { question: 'Is this the same as accounting cleanup?', answer: 'Not necessarily. Cleanup and catch-up work is designed to address a historical backlog. Platform-to-general-ledger reconciliation can instead be scoped as a recurring monthly control, with cleanup of old exceptions added only when agreed.' },
  { question: 'Do you approve owner distributions or release payments?', answer: 'No. Your business retains banking control, payment release, owner-distribution approval and decisions about accounting treatment. We prepare agreed accounting records and reconciliation schedules for review.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Property Management Platform-to-General-Ledger Reconciliation Outsourcing',
  description: 'Outsourced accounting work to compare property-management system reports with general-ledger records, investigate posting differences, document exceptions and support a repeatable monthly reconciliation process.',
  slug: 'property-management/general-ledger-reconciliation',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'General Ledger Reconciliation', url: `${baseUrl}${PATH}` },
]);

const reviewAreas = [
  ['Property-management reports', 'Agree on the relevant rent, receipt, payable, deposit, owner or property reports and the period each report covers. Keep the report source and date visible.'],
  ['General-ledger accounts', 'Identify the accounts and dimensions that should reflect the platform activity, including property, entity, class or department where used.'],
  ['Differences and timing items', 'Separate explainable timing differences from missing, duplicated, misclassified or unapplied transactions. Record the period, amount, likely cause and evidence still needed.'],
  ['Exception log and review', 'Prepare an exception list with source references, questions and proposed next steps. Corrections remain subject to the client’s supporting evidence and approval process.'],
  ['Monthly control schedule', 'Set a recurring close date, report owner, reviewer, materiality or escalation rules and a clear record of items carried into the next period.'],
  ['Owner and management reporting', 'Use reconciled records as the basis for reporting preparation, while clearly flagging unresolved items that could affect a statement or management decision.'],
];

export default function PropertyManagementGeneralLedgerReconciliationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="For property management companies"
        title="Property Management Platform-to-General-Ledger Reconciliation"
        description="Compare property-system activity with your accounting records, investigate differences and create a repeatable monthly review—without assuming a software migration is needed."
        cta={{ text: 'Discuss Your Reconciliation Workflow', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">General Ledger Reconciliation</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">The software report and the books need to tell the same story</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">Property managers may use one system for rent, tenant activity, payables or owner reporting and another for the management company’s general ledger. Even when each system produces a report, totals can diverge because of timing, account mapping, duplicate entries, unapplied cash or transactions assigned to the wrong property or entity.</p>
            <p className="text-base leading-relaxed text-muted">A useful reconciliation does more than compare two totals. It identifies which reports were used, explains known differences, lists exceptions that still need evidence and gives the reviewer a clear route to approve corrections. The process should fit your current systems and controls.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Common warning signs</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Property-system totals do not agree with the GL</li>
              <li>• Owner statements need manual spreadsheet adjustments</li>
              <li>• Rent receipts or vendor bills remain unapplied</li>
              <li>• One property or entity carries unexplained balances</li>
              <li>• The same exceptions reappear every month</li>
              <li>• Staff cannot trace a reported figure to its source</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the reconciliation review can cover</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">The exact reports and accounts depend on your systems, portfolio and agreed scope. Work is performed against available source records; unresolved items are documented rather than guessed away.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviewAreas.map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A repeatable four-step monthly process</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['1. Agree on the source reports', 'Confirm the period, report date, properties, entities, accounts and export or access method for each system.'],
              ['2. Compare and classify differences', 'Tie the relevant balances and transaction populations together, then separate timing items from exceptions that require investigation.'],
              ['3. Document evidence and questions', 'Maintain source references, amounts, periods, potential causes and outstanding questions so the reviewer can see what is known and what remains unresolved.'],
              ['4. Review, approve and carry forward', 'The client’s authorized reviewer decides on accounting treatment and approves corrections. Track open items into the next close until they are resolved.'],
            ].map(([heading, body]) => <li key={heading} className="rounded-xl border border-border bg-input p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></li>)}
          </ol>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Related property accounting workflows</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Property management accounting</Link>
            <Link href="/industries/property-management/accounting-cleanup" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Accounting cleanup and catch-up</Link>
            <Link href="/industries/property-management/appfolio-accounting-california" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">AppFolio accounting support</Link>
            <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Yardi accounting support</Link>
            <Link href="/blog/property-management-accounting" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Property management accounting guide</Link>
            <Link href="/blog/property-management-bank-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Bank reconciliation workflow</Link>
            <Link href="/blog/real-estate-accounting-month-end-close" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Month-end close checklist</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Clear responsibilities and review controls</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">Accounstone provides outsourced accounting preparation and reconciliation within an agreed scope. Your business retains banking control, payment release, owner-distribution approval and decisions about accounting treatment. This work does not replace legal advice, a CPA’s tax or assurance work, software-vendor support or the responsible property manager’s compliance review.</p>
        </div>
      </section>
      <FAQSection subtitle="General ledger reconciliation questions" items={faqs} columns={2} />
      <InquirySection region="united-states" service="Property Management Accounting" source={PATH} title="Discuss Your Platform-to-GL Differences" lead="Tell us which property-management system and accounting ledger you use, what does not tie out, and how often you need the reconciliation completed. We can define the source reports, exception log and review handoff." />
      <CTABanner title="Make monthly differences easier to trace" description="Set up a practical reconciliation workflow around your current property records, general ledger and review controls." cta={{ text: 'Start an Inquiry', href: '#inquiry' }} ctaSecondary={{ text: 'Property Management Services', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
