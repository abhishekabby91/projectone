import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/doorloop-accounting-support';

export const metadata: Metadata = genMeta({
  title: 'DoorLoop Accounting Support',
  description: 'Accounting workflow support for property managers using DoorLoop: transaction review, bank reconciliations, owner ledger checks, payables and month-end reporting.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'DoorLoop Accounting Workflow Support',
  description: 'Defined accounting preparation and review support for property management companies using DoorLoop, including transaction coding checks, reconciliation schedules, payables tracking, owner statement support and month-end reporting.',
  slug: 'doorloop-accounting-support',
  basePath: '/industries/property-management/',
});
const faqs = [
  { question: 'What accounting tasks can Accounstone support for a DoorLoop user?', answer: 'Depending on authorized access and the agreed scope, work may include transaction coding review, bank reconciliation preparation, accounts payable tracking, owner and property ledger checks, open-item schedules and month-end reporting support.' },
  { question: 'Do you provide DoorLoop software or represent DoorLoop?', answer: 'No. Accounstone provides accounting outsourcing support around the client’s existing workflow. This page describes workflow support for businesses that use DoorLoop; it does not claim a software partnership or official affiliation.' },
  { question: 'Can you work with DoorLoop and QuickBooks together?', answer: 'Where a client uses DoorLoop alongside QuickBooks, the engagement can include agreed reconciliation of exported or synchronized activity, control totals and exception schedules. The exact workflow depends on the client’s configuration and approved access.' },
  { question: 'Can you approve bills or send owner distributions?', answer: 'Payment release, bank access, final approval and owner distributions remain subject to the client’s authorization controls. The scope can cover preparation, supporting schedules and exception reporting without assuming approval authority.' },
  { question: 'Do you handle trust-account compliance?', answer: 'Accounstone can discuss agreed bookkeeping and reconciliation preparation. The responsible property manager, broker or qualified local professional must confirm applicable legal, licensing and jurisdiction-specific requirements.' },
];
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'DoorLoop Accounting Support', url: `${baseUrl}${PATH}` },
]);

export default function DoorLoopAccountingSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For property management companies using DoorLoop"
        title="DoorLoop Accounting Support"
        description="Keep the accounting work behind your property reports organized with transaction review, bank reconciliation preparation, payable tracking, owner-ledger checks and a clearer month-end handoff."
        cta={{ text: 'Discuss Your DoorLoop Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">DoorLoop Accounting Support</li>
        </ol>
      </nav>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Start with the records</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Accounting support around your existing DoorLoop workflow</h2>
            <p className="leading-relaxed text-muted md:text-lg">Property management platforms bring rent activity, bills, bank transactions and owner reporting into connected workflows. Reliable month-end reporting still depends on complete source records, consistent property allocation, reconciled balances and clear handling of exceptions.</p>
            <p className="leading-relaxed text-muted md:text-lg">We scope the work around your portfolio, reporting calendar, existing configuration and access permissions. We do not assume every client uses the same accounting setup or that every software feature is enabled in their plan.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-6">
            <h3 className="font-serif text-xl font-bold text-primary">Potential work areas</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>Transaction coding and property allocation review</li>
              <li>Bank and credit-card reconciliation preparation</li>
              <li>Vendor invoice tracking and accounts payable schedules</li>
              <li>Property and owner ledger checks</li>
              <li>Unapplied receipts, deposits and open-item schedules</li>
              <li>Owner statement support and report tie-outs</li>
              <li>Month-end close checklist and exception reporting</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">A reviewable monthly workflow</p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Turn platform activity into reconciled accounting records</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">1. Check transaction capture</h3><p className="mt-2 text-sm leading-relaxed text-muted">Review source records, transaction categories and property assignments. Flag missing support, possible duplicates, unusual charges or unapplied receipts rather than filling gaps with assumptions.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">2. Prepare reconciliations</h3><p className="mt-2 text-sm leading-relaxed text-muted">Compare recorded activity with available bank and card statements, identify valid timing items and route unexplained differences for investigation.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">3. Tie out payables and owner activity</h3><p className="mt-2 text-sm leading-relaxed text-muted">Check vendor bills, property-level balances, owner activity and relevant deposit or liability schedules against supporting detail and agreed coding rules.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">4. Prepare close outputs</h3><p className="mt-2 text-sm leading-relaxed text-muted">Assemble the agreed reports and schedules, explain material exceptions and maintain an open-item list for the client reviewer before final reports are issued.</p></article>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">Available reports and workflow steps depend on the client’s DoorLoop plan, configuration, permissions and current product behavior. We work within the access the client authorizes and do not assume that a particular integration or feature is enabled.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Controls and responsibility</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Keep preparation, review and payment approval separate</h2>
          <p className="leading-relaxed text-muted md:text-lg">Property managers may hold or account for funds belonging to property owners or tenants alongside the management company’s own income and expenses. The process should keep those balances distinguishable, tie control totals to supporting detail and make unresolved differences visible. Applicable trust, escrow and deposit rules vary by jurisdiction and account arrangement, so the responsible manager or qualified local professional must confirm the requirements that apply.</p>
          <p className="leading-relaxed text-muted">Agree who can post adjustments, approve bills, edit payout details, release payments and approve owner statements. Reconciliation preparation and reporting support should not imply that Accounstone has authority to move client funds or make final compliance decisions.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Define the scope before work starts</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Properties, entities and reporting periods included', 'Authorized DoorLoop access and source records', 'Reconciliation deadlines and close calendar', 'Who reviews exceptions and approves transactions', 'Owner statement and reporting handoff', 'How open items are tracked and escalated'].map((item) => <li key={item} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-foreground">{item}</li>)}
          </ul>
          <p className="mt-5 text-muted leading-relaxed">Support can be scoped for recurring monthly work, seasonal capacity or a defined cleanup. Deliverables, deadlines and review responsibilities should be agreed rather than relying on a vague promise of cleaner books.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Related property management resources</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
            <Link href="/industries/property-management/buildium-accounting-support" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Buildium accounting support</Link>
            <Link href="/industries/property-management/appfolio-accounting-california" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">AppFolio accounting support</Link>
            <Link href="/blog/property-management-trust-accounting-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Trust-account reconciliation guide</Link>
            <Link href="/blog/property-management-owner-statements" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Owner statement workflow</Link>
            <Link href="/services/property-management-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting services</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="DoorLoop accounting workflow questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Tell Us Which DoorLoop Tasks Need Attention" lead="Share the portfolio, reporting deadlines, current process and accounting tasks you need completed. We can discuss a defined scope around your existing setup." />
      <CTABanner title="Keep property accounting moving" description="Discuss accounting support around the records, reports and review controls your property management business already uses." cta={{ text: 'Discuss Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
