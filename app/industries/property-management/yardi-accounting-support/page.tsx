import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/yardi-accounting-support';

export const metadata: Metadata = genMeta({
  title: 'Yardi Accounting Support for Property Managers',
  description: 'Accounting support for property managers using Yardi Voyager or Breeze: reconciliations, AP/AR review, ledger checks and month-end reporting.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'Yardi Accounting Support for Property Managers',
  description: 'Defined accounting workflow support for property-management companies using Yardi, including transaction review, reconciliations, payable and receivable schedules, ledger checks and month-end reporting preparation.',
  slug: 'property-management/yardi-accounting-support',
  basePath: '/industries/',
});

const faqs = [
  {
    question: 'What Yardi accounting work can Accounstone support for property managers?',
    answer: 'Depending on the portfolio and agreed scope, work can include transaction coding review, bank-reconciliation preparation, payable tracking, tenant and owner ledger checks, property-level schedules, exception logs and month-end reporting files. The work is based on authorized access and the records available in the client’s existing setup.',
  },
  {
    question: 'Can you support both Yardi Voyager and Yardi Breeze?',
    answer: 'We can discuss accounting preparation work for a client’s existing Voyager or Breeze environment. The specific product, licensed modules, portfolio structure, available reports and access permissions need to be confirmed before the scope is agreed; the same workflow should not be assumed for every account.',
  },
  {
    question: 'Do you configure Yardi or provide vendor technical support?',
    answer: 'No. This page describes accounting and bookkeeping workflow support inside an existing client-authorized environment. It does not claim Yardi partnership, certification, implementation, configuration or product help-desk support.',
  },
  {
    question: 'Can you reconcile Yardi reports to a separate general ledger?',
    answer: 'Where the client uses both a property-management platform and a separate general ledger, the agreed work may compare report totals and supporting detail, trace differences, maintain an exception list and prepare tie-out schedules for review. The process depends on source reports, mappings and the client’s accounting policies.',
  },
  {
    question: 'Will Accounstone approve invoices or release payments?',
    answer: 'Accounting support can prepare invoice records, track approval status and organize payment-support schedules. The client’s authorized personnel retain approval decisions, banking credentials and payment-release authority unless a separately documented arrangement says otherwise; this page does not offer payment authorization.',
  },
  {
    question: 'What should we prepare before discussing support?',
    answer: 'Start with the Yardi product and portfolio structure, the properties and entities in scope, the reports used for close, existing reconciliation files, the reporting calendar and the people responsible for review and approval. This helps define the initial workflow and identify missing access or unresolved items.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Yardi Accounting Support', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  {
    title: 'Transaction coding and property allocation',
    body: 'Review transaction details against the available invoice, receipt, property or entity reference and the client’s established chart of accounts. Flag unclear allocations, duplicate-looking items and missing support for review rather than guessing at the correct treatment.',
  },
  {
    title: 'Bank and balance-sheet reconciliations',
    body: 'Prepare reconciliations from authorized bank statements and ledger reports, identify timing items and document differences that need investigation. The reconciliation method and supporting accounts are agreed for the client’s portfolio and reporting process.',
  },
  {
    title: 'Accounts payable and vendor records',
    body: 'Organize invoice coding, property/entity assignment, supporting documents, due dates and approval status. Payment decisions, changes to payee bank details and release of funds remain with the client’s authorized approvers.',
  },
  {
    title: 'Tenant, owner and deposit schedules',
    body: 'Review relevant rent and receipt postings, tenant or owner balances, unapplied amounts and deposit-related schedules where these records form part of the agreed accounting scope. Unexplained differences are documented for the responsible reviewer.',
  },
  {
    title: 'Property and management-company reporting',
    body: 'Prepare agreed property-level or company-level schedules and help keep the distinction between owner-related activity and the management company’s own income and expenses visible. The source of truth for each balance must be confirmed before reporting begins.',
  },
  {
    title: 'Month-end close and exception handoff',
    body: 'Bring together reconciliation status, open payables and receivables, ledger differences and supporting reports for the monthly review. A concise exception list identifies what is resolved, what remains open and which client decision or source document is needed.',
  },
];

export default function YardiPropertyManagementAccountingSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For property-management companies using Yardi"
        title="Yardi Accounting Support for Property Managers"
        description="Keep the accounting work behind your property reports organized with transaction review, reconciliations, payable and receivable schedules, ledger checks and a clearer month-end handoff."
        cta={{ text: 'Discuss Your Yardi Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full bg-white px-6 pt-6 md:px-8">
        <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="inline-block py-1.5 hover:text-primary">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="inline-block py-1.5 hover:text-primary">Property Management</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="py-1.5 font-medium text-primary">Yardi Accounting Support</li>
        </ol>
      </nav>

      <section className="bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Start with the accounting workflow</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Accounting support around the Yardi records your team already uses</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">Yardi lists Voyager and Breeze among its property-management products with accounting and operational capabilities. The exact modules, reports and workflow vary by product and licensed setup. For accounting work to be reviewable, the source records, chart-of-accounts mapping, property or entity allocation and unresolved differences still need a clear process.</p>
            <p className="text-base leading-relaxed text-muted md:text-lg">Accounstone’s role is to prepare agreed accounting work within the access and reporting structure the client authorizes. We do not replace the property-management system, assume every portfolio is configured alike or make the decisions that belong to the property manager, owner or their CPA.</p>
            <p className="text-sm leading-relaxed text-muted">For product details, see <a href="https://www.yardi.com/Products/" target="_blank" rel="noreferrer" className="inline-block py-1.5 font-medium text-primary underline underline-offset-4 hover:text-accent">Yardi’s property-management product overview</a>. Features and reporting availability should be checked against the client’s own licensed environment.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-6">
            <h3 className="font-serif text-xl font-bold text-primary">Work that can be scoped</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>Transaction coding and property allocation review</li>
              <li>Bank and balance-sheet reconciliation preparation</li>
              <li>Vendor invoice and accounts-payable tracking</li>
              <li>Tenant, owner and deposit schedule checks</li>
              <li>Property and management-company reporting schedules</li>
              <li>Month-end close files and unresolved-item tracking</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Common work areas</p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Prepare a consistent accounting trail from source record to report</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-muted">The work should follow the structure that the property manager actually uses. A workflow for a single property is not automatically suitable for a portfolio with many entities, bank accounts, owners or reporting deadlines. Scope the records and review points first, then agree which recurring steps can be prepared externally.</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {workAreas.map((item) => (
              <article key={item.title} className="h-full rounded-xl border border-border bg-white p-5">
                <h3 className="font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Voyager, Breeze and the existing setup</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Confirm the product and reports before defining the handoff</h2>
          <p className="leading-relaxed text-muted md:text-lg">Voyager and Breeze are distinct Yardi products, so a service scope should not assume identical report names, permissions, modules or accounting depth. Start by confirming which product is used, which reports are available, how property and company records are separated, and whether a separate general ledger also needs to be reconciled.</p>
          <p className="leading-relaxed text-muted">Where property-management reports and general-ledger records are held in different places, the agreed workflow can compare totals and supporting detail, trace differences and retain an exception log. The method depends on the records and mappings available; no generic checklist can replace confirmation of the client’s actual configuration.</p>
          <p className="leading-relaxed text-muted">If the portfolio is using Yardi today but month-end still depends on manual exports, spreadsheets or repeated re-checking, the first step is to map where each balance originates and which person reviews it. Accounstone can then discuss a defined preparation scope without proposing an unrequested software migration or configuration project.</p>
        </div>
      </section>

      <section className="bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Responsibility and review</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Keep preparation separate from approval and control</h2>
            <p className="leading-relaxed text-muted">Accurate records rely on more than posting transactions. The workflow should define who provides source documents, who prepares reconciliations, who investigates open items and who reviews proposed corrections. A completed schedule is supporting evidence for the reviewer, not a substitute for approval.</p>
            <p className="leading-relaxed text-muted">The client retains banking credentials, payment-release authority and decisions about expenses, owner distributions and accounting treatment. The client’s CPA or other qualified adviser retains responsibility for tax positions, legal interpretation and assurance. Any required review, access permissions and final reporting approval should be documented before work begins.</p>
          </div>
          <div className="rounded-xl border border-border bg-white p-6">
            <h3 className="font-serif text-xl font-bold text-primary">What to confirm at onboarding</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>Yardi product, modules and authorized user permissions</li>
              <li>Portfolio, property, entity and bank-account list</li>
              <li>Chart of accounts and property/entity coding rules</li>
              <li>Reports and source records used for reconciliation</li>
              <li>Close calendar, required deliverables and reviewer</li>
              <li>Open exceptions, historical backlog and escalation path</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Related property-management accounting resources</h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted">Use the related pages that match the actual issue. The general property-management hub describes the broader service scope; the specialist pages address particular reporting, close and reconciliation tasks.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
            <Link href="/industries/property-management/general-ledger-reconciliation" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Platform-to-general-ledger reconciliation</Link>
            <Link href="/industries/property-management/month-end-close-support" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Month-end close support</Link>
            <Link href="/industries/property-management/buildium-accounting-support" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Buildium accounting support</Link>
            <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Yardi accounting in Texas</Link>
            <Link href="/blog/yardi-accounting-workflow" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Yardi accounting workflow guide</Link>
            <Link href="/industries/property-management" className="inline-block rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Yardi accounting support questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Discuss the Accounting Work Behind Your Yardi Reports" lead="Share the Yardi product, portfolio structure, current reporting process and reconciliations or schedules that need support. We can discuss a defined scope around the records and review controls you already use." />
      <CTABanner title="Build a clearer Yardi month-end handoff" description="Start with the reports, open items and approval boundaries that define your current accounting workflow." cta={{ text: 'Discuss Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
