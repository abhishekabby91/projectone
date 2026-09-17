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
} from '@/lib/hoa-industry';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/hoa-accounting';

// 44 characters, inside the 46 the "%s | Accounstone" template allows.
export const metadata: Metadata = genMeta({
  title: 'HOA Accounting & Bookkeeping Outsourcing',
  description:
    'Outsourced HOA and community association accounting: assessment ledgers, operating and reserve funds, delinquency schedules and monthly board packs.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'HOA and Community Association Accounting and Bookkeeping Outsourcing',
  description:
    'Assessment billing and homeowner ledgers, operating and reserve fund accounting, aged delinquency schedules, board-approved payables, budget-versus-actual reporting, monthly board packs and audit support for homeowners associations, condominium associations and community management companies.',
  slug: 'hoa-accounting',
  basePath: '/industries/',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}${PATH}` },
]);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-secondary" />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{children}</span>
    </div>
  );
}

export default function HoaAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="HOAs, condos and community management companies"
        title="HOA & Community Association Accounting Outsourcing"
        description="Assessment and homeowner ledgers, operating and reserve funds kept apart, delinquency schedules a board can act on, and a board pack that looks the same every month. Every decision stays with the board."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
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
          <li aria-current="page" className="text-primary font-medium">HOA Accounting</li>
        </ol>
      </nav>

      {/* The thesis. An association is not a landlord and not an owner — this
          is the paragraph that keeps the page off its two neighbours. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-4"><>
            <Eyebrow>Why this work is different</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              A Small Ledger With a Very Attentive Audience
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              An association has no landlord, no tenant and no rent. It has members who own their own homes, a
              volunteer board that changes by election, a budget approved in public, and a reserve balance that
              everybody checks first. The ledger is usually smaller than a property portfolio&rsquo;s and it is
              read far more closely &mdash; by homeowners querying their own account, by a treasurer who is an
              accountant in another field or in none, and once a year by an independent CPA.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              That sets an unusual standard: the accounting has to be legible to a non-accountant without being
              simplified into something that cannot be audited. Both halves matter. A pack nobody on the board
              can read produces decisions made on instinct; a pack simplified until the fund structure disappears
              produces an audit that starts from scratch. The two failures that cause the most damage are
              netting operating and reserve into one cash figure, and keeping the homeowner ledger from bank
              deposits rather than from the assessment schedule.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We take the recurring accounting &mdash; posting, assessments, reconciliations, the delinquency
              schedule and the pack itself &mdash; and leave every decision with the board: what the assessment
              is, what the reserves should hold, when a collections step is taken, and which invoices get paid.
            </p>
          </></Reveal>
          <Reveal delay={0.16} className="lg:pt-10">
            <IndustryIllustration industry="hoa-accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* The lead-generation router, in the board's own words. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Start where it hurts</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Which of These Came Up at the Last Meeting?
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Nobody goes looking for outsourced accounting. They go looking after a board meeting went badly, or
              a homeowner asked a question nobody could answer. Pick the one that sounds familiar and we will
              start there &mdash; the reading underneath each is what we would expect to find.
            </p>
          </></Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {triggers.map((t, i) => (
              <Reveal key={t.symptom} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full">
                  <InquiryTrigger
                    className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                    source={PATH}
                    title="HOA & Community Association Accounting"
                    lead={`You picked: “${t.symptom}.” Tell us how many units or associations are involved and what the board currently receives — the consultation and the call are free.`}
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
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              From a Twelve-Unit Board to a Managed Portfolio
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              A self-managed board and a management company running forty associations have the same obligations
              and completely different constraints. The scope is shaped around which of these you are.
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
              How Association Books Are Kept
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Eight things that decide whether a board governs from its financials or argues about them. None of
              them is exotic accounting; all of them are structure, and structure is what an association&rsquo;s
              books almost always lack.
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
              If you also manage rental property for owners, the owner-statement and tenant side is on the{' '}
              <Link href="/industries/property-management" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                property management accounting page
              </Link>. The annual audit file is{' '}
              <Link href="/services/audit-support/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                audit support
              </Link>, and the payables cycle is{' '}
              <Link href="/services/accounts-payable/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                accounts payable
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10 max-w-3xl mx-auto text-center space-y-3"><>
            <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">What we do</span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary text-balance">
              Scope Built Around the Meeting Calendar
            </h2>
            <p className="text-base md:text-lg text-muted leading-7 md:leading-8">
              Every line below is work we actually perform. Where a service has its own page, the card links to it.
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
                      title="HOA & Community Association Accounting"
                      lead="Tell us how this part of the work is handled today and we will scope what support would change. The consultation and the call are free."
                      label={`Ask us about ${svc.name.toLowerCase()} for your association`}
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

      {/* Locality. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-4 mb-8"><>
            <Eyebrow>Where you operate</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Governed Locally, Accounted for the Same Way
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
        title="One Association, One Month, One Board Pack"
        lead="Nothing transfers on the first call. A single association and a single closed month run first, so the treasurer can compare our pack against the one they get today before anything else moves."
      />

      {/* The trust anchor — the highest-risk band on this page. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>What we will not do</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Every Decision Stays With the Board
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              A board is answerable to its members for money collected from them, and volunteers carry that
              personally. So the limits matter more here than almost anywhere else on this site, and they are the
              same on day one as they are in year three.
            </p>
          </></Reveal>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {boundaries.map((b, i) => (
              <Reveal key={b} delay={Math.min(i * 0.04, 0.2)}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-input p-4 sm:p-5">
                  <ShieldOff className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" aria-hidden="true" />
                  <span className="text-sm leading-6 text-foreground sm:text-base">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="HOA accounting questions" items={faqs} columns={2} />

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
              { name: 'Property management accounting', href: '/industries/property-management' },
              { name: 'Real estate accounting', href: '/industries/real-estate' },
              { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
              { name: 'Accounting & month-end close', href: '/services/accounting/united-states' },
              { name: 'Accounts payable', href: '/services/accounts-payable/united-states' },
              { name: 'Audit support', href: '/services/audit-support/united-states' },
              { name: 'Tax preparation support', href: '/services/tax-preparation/united-states' },
              { name: 'Dedicated accounting teams', href: '/solutions/dedicated-accounting-teams' },
              { name: 'Back office support', href: '/solutions/back-office-support' },
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
        title="Send Us One Association and One Month"
        lead="The consultation and the call are always free. Tell us how many units or associations are involved, what the board receives today, and what came up at the last meeting."
      />

      <CTABanner
        title="Ready to Give Your Board a Pack It Can Read?"
        description="Assessment ledgers, reserve fund accounting, delinquency schedules and a monthly board pack that looks the same every month — with every decision staying with the board."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management', href: '/industries/property-management' }}
        background="primary"
      />
    </main>
  );
}
