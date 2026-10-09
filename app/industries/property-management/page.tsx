import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ShieldOff } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import InquiryTrigger from '@/components/inquiry-trigger';
import FAQSection from '@/components/faq-section';
import ProcessFlow from '@/components/process-flow';
import TrustIcon from '@/components/trust-icon';
import Reveal from '@/components/reveal';
import IndustryIllustration from '@/components/industry-illustration';
import { trustBadges } from '@/lib/data';
import {
  triggers,
  segments,
  workflow,
  locality,
  boundaries,
  processPhases,
  services,
  faqs,
} from '@/lib/property-management-industry';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/property-management';

// Title budget is 46 characters before the "%s | Accounstone" template takes
// it to 60. This is 45 and carries both head terms.
export const metadata: Metadata = genMeta({
  title: 'Property Management Accounting Outsourcing',
  description:
    'Property management accounting and bookkeeping: rent-roll and tenant ledgers, owner statements, deposit tracking, CAM recovery, reconciliations and month-end reporting.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'Property Management Accounting and Bookkeeping Outsourcing',
  description:
    'Property-level bookkeeping, owner statement preparation, tenant and security-deposit ledgers, CAM and recovery support, accounts payable and receivable, reconciliations and month-end close for residential, commercial, single-family and short-term rental property managers.',
  slug: 'property-management',
  basePath: '/industries/',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}${PATH}` },
]);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-secondary" />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{children}</span>
    </div>
  );
}

export default function PropertyManagementPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Property management companies"
        title="Property Management Accounting & Bookkeeping Outsourcing"
        description="Accounting support for property managers: property-level books, tenant and deposit ledgers, owner statements, accounts payable and receivable, CAM recovery schedules, reconciliations and month-end reporting."
        cta={{ text: 'Discuss Property Management Accounting', href: '/contact' }}
        ctaSecondary={{ text: 'Book a Consultation', href: '#inquiry' }}
        background="primary-gradient"
      />

      <section className="w-full py-7 md:py-8 px-6 md:px-8 bg-white border-b border-border ledger-lines">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.name} className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 bg-input rounded-full border border-border">
              <TrustIcon name={badge.icon} />
              <span className="font-medium text-sm text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="inline-block py-1.5 hover:text-primary transition-colors">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Property Management</li>
        </ol>
      </nav>

      {/* The thesis. What makes this different from the owner's own books, and
          therefore why this page is not /industries/real-estate. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-4"><>
            <Eyebrow>Why this work is different</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Property accounting has to reconcile at the property level
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Property managers may maintain records for several owners, properties and tenant accounts at once. Each property needs a clear view of income, expenses, balances and open items. Owner statements should agree with the underlying ledger, tenant deposits must be tracked appropriately, and recoverable expenses need supporting detail that can be reviewed when charges are questioned.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              The monthly process should connect transaction coding, tenant and owner ledgers, bank activity and property-level reporting. When records are maintained consistently as transactions are posted, month-end becomes a review and reconciliation process instead of a search through old entries to explain balances.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              The recurring scope can include transaction processing, reconciliations, month-end close and preparation of owner reporting. Payment approvals, transfers and other decisions follow the client’s established controls and the agreed engagement scope.
            </p>
          </></Reveal>
          <Reveal delay={0.16} className="lg:pt-10">
            <IndustryIllustration industry="property-management" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* The lead-generation router. A property manager arrives because one
          specific thing is late or wrong, so match their own words and open
          the dialog already carrying it. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Start where it hurts</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Where property accounting workflows need support
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Common issues include delayed owner statements, unreconciled accounts, unclear tenant balances and month-end reports that need repeated corrections. Select the issue closest to your current workflow to describe the records and support required.
            </p>
          </></Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {triggers.map((t, i) => (
              <Reveal key={t.symptom} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full">
                  <InquiryTrigger
                    className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                    source={PATH}
                    title="Property Management Accounting"
                    lead={`You picked: “${t.symptom}.” Tell us what you manage, what your owners currently receive, and where the month actually goes — the consultation and the call are free.`}
                    label={`Talk to us about: ${t.symptom}`}
                  >
                    <h3 className="font-serif text-lg font-bold text-primary leading-snug">{t.symptom}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t.reading}</p>
                    <span className="mt-4 text-sm font-semibold text-accent">
                      {t.ask}{' '}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </InquiryTrigger>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Segments. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Property Management Accounting Scope</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Accounting requirements vary across property portfolios
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Residential rentals, commercial buildings, mixed-use sites and short-term rentals share core accounting tasks, but their ledgers, lease terms and reporting needs can differ. The work should reflect the property types managed and the information owners expect to receive.
            </p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {segments.map((seg, i) => (
              <Reveal key={seg.name} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-input p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{seg.name}</h3>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{seg.who}</span>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{seg.body}</p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {seg.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span className="text-sm leading-6 text-foreground">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* The core workflow. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-background dot-grid">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>The work itself</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              From transaction posting to month-end reporting
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              A consistent monthly process helps keep property records usable as a portfolio grows. It typically covers transaction coding, tenant and owner ledger updates, payable and receivable tracking, reconciliations, review of unusual balances and preparation of monthly reports.
            </p>
          </></Reveal>

          <div className="mt-8 space-y-5">
            {workflow.map((item, i) => (
              <Reveal key={item.h} delay={Math.min(i * 0.05, 0.25)}>
                <div className="rounded-2xl border border-border bg-white p-5 sm:p-7">
                  <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-muted leading-relaxed">
              Running Yardi in Texas?{' '}
              <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                There is a page for that workflow specifically
              </Link>. If you also manage community associations, the assessment and reserve side is on the{' '}
              <Link href="/industries/hoa-accounting" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                HOA accounting page
              </Link>, and if you own rather than manage, start at{' '}
              <Link href="/industries/real-estate" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                real estate accounting
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10 max-w-3xl mx-auto text-center space-y-3"><>
            <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">Accounting Scope</span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary text-balance">
              Scope Built Around Your Doors
            </h2>
            <p className="text-base md:text-lg text-muted leading-7 md:leading-8">
              Each line represents a defined accounting function. Where a service has its own page, the card links to it.
            </p>
          </></Reveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((svc, i) => (
              <Reveal key={svc.name} delay={Math.min(i * 0.04, 0.24)}>
                <li className="h-full">
                  {svc.href ? (
                    <Link
                      href={svc.href}
                      className="group flex h-full flex-col rounded-xl border border-border bg-input p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                    >
                      <h3 className="font-serif text-lg font-bold text-primary">{svc.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{svc.body}</p>
                      <span className="mt-4 text-sm font-semibold text-accent">
                        How this works{' '}
                        <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </span>
                    </Link>
                  ) : (
                    <InquiryTrigger
                      className="flex h-full flex-col rounded-xl border border-border bg-input p-5 sm:p-6 transition-colors hover:border-primary/40"
                      source={PATH}
                      title="Property Management Accounting"
                      lead="The current workflow determines where accounting support can be added and what the scope should cover."
                      label={`Ask us about ${svc.name.toLowerCase()} for your portfolio`}
                    >
                      <h3 className="font-serif text-lg font-bold text-primary">{svc.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{svc.body}</p>
                    </InquiryTrigger>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* Locality. Names the reader in each market and routes every regulatory
          question to the licensed local party. No statute, no threshold. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-4 mb-8"><>
            <Eyebrow>Where you operate</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Local requirements, consistent accounting records
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">{locality.lead}</p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {locality.markets.map((m, i) => (
              <Reveal key={m.region} delay={Math.min(i * 0.06, 0.2)}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{m.region}</h3>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{m.calls}</span>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{m.body}</p>
                  <Link href={m.href} className="mt-4 inline-block py-1 text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent transition-colors">
                    {m.region} market brief
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessFlow
        phases={processPhases}
        eyebrow="How it works"
        title="One Property First, Then the Portfolio"
        lead="Where practical, onboarding can begin with a defined property or reporting cycle. This gives both sides a chance to review the records, formats, access requirements and expected outputs before expanding the scope."
      />

      {/* Industry × software context without creating a thin keyword page. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Software in the workflow</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Keep property records connected to the accounting ledger
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Property management platforms and general accounting systems each hold part of the monthly picture. The process needs to connect rent and tenant activity, deposits, vendor expenses, owner reporting and reconciled ledger balances. The exact workflow depends on the systems and access available for the engagement.
            </p>
          </></Reveal>
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: 'Yardi accounting', href: '/technology/yardi' },
              { name: 'QuickBooks accounting', href: '/technology/quickbooks' },
              { name: 'Xero accounting', href: '/technology/xero' },
              { name: 'Real estate accounting', href: '/industries/real-estate' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl border border-border bg-white p-4 text-sm font-semibold text-primary hover:border-primary/50 transition-colors">
                {item.name} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technology. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Technology</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Accounting support within your current system
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Systems may include Yardi Voyager or Breeze, QuickBooks, Xero, Sage and NetSuite. Support for a specific product or workflow is confirmed during scoping, based on the accounting tasks involved and the access available.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              The focus is accounting and bookkeeping work within an existing system. Software implementation, migration or specialist configuration should be scoped separately and only where the relevant capability is available.
            </p>
          </></Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { name: 'QuickBooks', href: '/technology/quickbooks' },
                { name: 'Xero', href: '/technology/xero' },
                { name: 'Sage', href: '/technology/sage' },
                { name: 'NetSuite', href: '/technology/netsuite' },
                { name: 'All platforms', href: '/technology' },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="inline-block px-4 py-2 rounded-lg bg-input border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                  {t.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The trust anchor. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Scope Boundaries</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Payment Controls Stay With the Client
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Property accounting can involve owner funds, tenant balances and payment workflows. Responsibilities for approvals, payment release, account access and review should be agreed before work begins and documented in the engagement process.
            </p>
          </></Reveal>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {boundaries.map((b, i) => (
              <Reveal key={b} delay={Math.min(i * 0.04, 0.2)}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-white p-4 sm:p-5">
                  <ShieldOff className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" aria-hidden="true" />
                  <span className="text-sm leading-6 text-foreground sm:text-base">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>


      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-3 mb-7">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Property management guides</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">Start With the Accounting Question in Front of You</h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              The industry page explains the overall workflow. These guides go one step deeper into the records property managers review every month.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Property management accounting', href: '/blog/property-management-accounting' },
              { name: 'Bookkeeping vs. accounting', href: '/blog/property-management-bookkeeping-vs-accounting' },
              { name: 'Property management chart of accounts', href: '/blog/property-management-chart-of-accounts' },
              { name: 'Rent roll accounting', href: '/blog/rent-roll-accounting' },
              { name: 'Property management bank reconciliation', href: '/blog/property-management-bank-reconciliation' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="rounded-xl border border-border bg-white p-5 text-primary font-semibold hover:border-primary/50 transition-colors">
                {guide.name} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Related Accounting Services</h2>
          <p className="mt-3 max-w-3xl text-muted leading-relaxed">For recurring property accounting, the industry scope connects with the underlying accounting and bookkeeping workflows.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/services/property-management-accounting" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">Property Management Accounting</Link>
            <Link href="/services/accounting/united-states" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">U.S. Accounting Services</Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">U.S. Bookkeeping Services</Link>
            <Link href="/services/accounts-payable/united-states" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">Accounts Payable</Link>
            <Link href="/services/accounts-receivable/united-states" className="rounded-lg border border-border bg-white px-4 py-2 font-medium text-primary">Accounts Receivable</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Property management questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-6"><>
            <Eyebrow>Related work</Eyebrow>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-balance">
              Where This Connects to the Rest of the Practice
            </h2>
          </></Reveal>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'HOA & community associations', href: '/industries/hoa-accounting' },
              { name: 'Real estate accounting', href: '/industries/real-estate' },
              { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
              { name: 'Accounting & month-end close', href: '/services/accounting/united-states' },
              { name: 'Accounts payable', href: '/services/accounts-payable/united-states' },
              { name: 'Accounts receivable', href: '/services/accounts-receivable/united-states' },
              { name: 'Tax preparation support', href: '/services/tax-preparation/united-states' },
              { name: 'Dedicated accounting teams', href: '/solutions/dedicated-accounting-teams' },
              { name: 'Staff augmentation', href: '/solutions/staff-augmentation' },
              { name: 'Yardi in Texas', href: '/industries/real-estate/yardi-accounting-outsourcing-texas' },
              { name: 'All industries', href: '/industries' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg bg-white border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquirySection
        source={PATH}
        title="Send Us One Property and One Month"
        lead="The consultation and the call are always free. Tell us how many doors you manage, what your owners currently receive, and which part of the month you would take back first."
      />

      <CTABanner
        title="Need more consistent property-level reporting?"
        description="Discuss property-level bookkeeping, reconciliations and owner reporting based on your portfolio, existing systems and monthly reporting requirements."
        cta={{ text: 'Discuss Property Management Accounting', href: '/contact' }}
        ctaSecondary={{ text: 'HOA Accounting', href: '/industries/hoa-accounting' }}
        background="primary"
      />
    </main>
  );
}
