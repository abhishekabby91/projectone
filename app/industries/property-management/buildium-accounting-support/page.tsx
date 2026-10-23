import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/buildium-accounting-support';

export const metadata: Metadata = genMeta({
  title: 'Buildium Accounting & Bookkeeping Support',
  description: 'Accounting outsourcing for property managers using Buildium: transaction coding, reconciliations, tenant and owner ledger checks, payables and month-end reporting.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'Buildium Accounting and Bookkeeping Support',
  description: 'Defined outsourced accounting workflows for property management companies using Buildium, including transaction review, reconciliations, accounts payable, tenant and owner ledger checks, reporting preparation and month-end close.',
  slug: 'buildium-accounting-support',
  basePath: '/industries/property-management/',
});
const faqs = [
  { question: 'What Buildium accounting work can Accounstone support?', answer: 'Depending on the engagement and authorized access, support may include transaction coding and review, bank reconciliations, open-item tracking, accounts payable preparation, tenant and owner ledger checks, deposit schedule review and month-end reporting.' },
  { question: 'Will you change our Buildium setup or migrate our records?', answer: 'The starting point is the existing configuration, chart of accounts, property structure and reporting process. A migration or configuration change is not assumed; any change would need to be separately scoped and approved.' },
  { question: 'Can you prepare owner statements in Buildium?', answer: 'Defined preparation and reconciliation tasks can be discussed. The workflow should identify the source records, review steps, exception handling and who authorizes final statements or distributions.' },
  { question: 'Do you handle trust accounting compliance?', answer: 'Accounstone can discuss agreed accounting preparation and reconciliation tasks. Legal, licensing and jurisdiction-specific compliance decisions must be confirmed by the responsible property manager, broker or qualified local professional.' },
  { question: 'Can you work alongside our internal property management staff?', answer: 'Yes, the engagement can be defined around recurring tasks, seasonal volume or a backlog, with clear handoffs, access permissions, deadlines and review responsibilities.' },
];
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Buildium Accounting Support', url: `${baseUrl}${PATH}` },
]);

export default function BuildiumAccountingSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For property management companies using Buildium"
        title="Buildium Accounting & Bookkeeping Support"
        description="Keep the accounting work behind your Buildium reports organized: transaction review, reconciliations, payable tracking, tenant and owner ledger checks, and a clearer month-end handoff."
        cta={{ text: 'Discuss Your Buildium Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Buildium Accounting Support</li>
        </ol>
      </nav>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Start with the workflow</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Accounting support built around your existing Buildium process</h2>
            <p className="leading-relaxed text-muted md:text-lg">Property management software can connect leases, tenant activity, bills, payments and owner reporting, but clean financial output still depends on the underlying records and review process. We focus on the accounting tasks that keep those records consistent and make exceptions visible before reporting is finalized.</p>
            <p className="leading-relaxed text-muted md:text-lg">The work is scoped to your portfolio, access permissions, reporting calendar and internal controls. We do not assume every Buildium account uses the same chart of accounts, approval path, bank connection or report configuration.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-6">
            <h3 className="font-serif text-xl font-bold text-primary">Typical work areas</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>Transaction coding and property allocation review</li>
              <li>Bank reconciliation preparation and exception logs</li>
              <li>Accounts payable tracking and invoice coding</li>
              <li>Tenant balances, unapplied cash and ledger checks</li>
              <li>Owner statement preparation and supporting schedules</li>
              <li>Security-deposit and other liability schedule review</li>
              <li>Month-end reporting and close handoff</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Buildium accounting workflow</p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">A monthly process that leaves a clear review trail</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">1. Review transaction capture</h3><p className="mt-2 text-sm leading-relaxed text-muted">Check the available source records, transaction coding and property allocation. Flag missing invoices, unusual charges, duplicates or unapplied receipts instead of making unsupported assumptions.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">2. Reconcile cash and ledger balances</h3><p className="mt-2 text-sm leading-relaxed text-muted">Compare bank activity to the recorded transactions, track valid timing items and route unexplained differences for investigation. Reconcile the supporting ledgers required by the client's process.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">3. Check payables and owner activity</h3><p className="mt-2 text-sm leading-relaxed text-muted">Review vendor invoices, open payables, owner activity and deposit or other liability schedules against the available support and agreed coding rules.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">4. Prepare reporting and exceptions</h3><p className="mt-2 text-sm leading-relaxed text-muted">Assemble the agreed month-end outputs, explain unusual balances and maintain a concise open-item list for the client reviewer before reports are issued.</p></article>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">Exact report names, available features and workflow steps depend on the Buildium plan, configuration, permissions and current product behavior. We work from the environment and access the client authorizes; we do not assume every account uses the same setup.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Control and review</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Keep owner funds, company records and approvals distinguishable</h2>
          <p className="leading-relaxed text-muted md:text-lg">Property managers may maintain records for money belonging to owners or tenants alongside the management company's own income and expenses. The accounting process should preserve those distinctions, connect control balances to the relevant supporting detail, and make unresolved items visible. Trust, escrow and deposit rules vary by jurisdiction and account arrangement, so the responsible manager or qualified local professional must confirm the requirements that apply.</p>
          <p className="leading-relaxed text-muted">Reconciliation preparation and reporting should also be separated from final approval and movement of funds. Agree who can post adjustments, approve bills, change payout details, release payments and approve owner statements. Access permissions should reflect those responsibilities.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">What we agree before work starts</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Properties, entities and reporting periods in scope', 'Buildium access permissions and source records', 'Reconciliation and reporting deadlines', 'Who reviews exceptions and approves transactions', 'Owner statement format and delivery handoff', 'How unresolved items are tracked and escalated'].map((item) => <li key={item} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-foreground">{item}</li>)}
          </ul>
          <p className="mt-5 text-muted leading-relaxed">The engagement may cover recurring monthly tasks, seasonal capacity or a defined cleanup. The scope should identify deliverables and review responsibilities rather than promise a vague outcome.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Related property management resources</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
            <Link href="/blog/property-management-trust-accounting-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Trust-account reconciliation guide</Link>
            <Link href="/blog/property-management-owner-statements" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Owner statement workflow</Link>
            <Link href="/blog/property-management-accounts-payable" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Accounts payable workflow</Link>
            <Link href="/industries/property-management" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Buildium accounting questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Tell Us Which Buildium Tasks Need Attention" lead="Share the portfolio, reporting deadlines, current process and accounting tasks you need completed. We can discuss a defined scope around your existing setup." />
      <CTABanner title="Keep property accounting moving" description="Discuss Buildium accounting support around the records, reports and review controls your property management business already uses." cta={{ text: 'Discuss Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
