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
import { industryDepth } from '@/lib/industry-depth';
import {
  segments,
  services,
  processPhases,
  boundaries,
  faqs,
} from '@/lib/real-estate-industry';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/real-estate';
const depth = industryDepth['real-estate'];

// Retargeted 2026-09-17. This page used to carry real estate, property
// management AND HOA, which meant it ranked for none of them well: the title
// said "real estate" while two of the three head terms were buried as h2s.
// Property management and HOA now have their own URLs, and this page is for the
// reader who OWNS the property — investors, developers, commercial operators —
// whose reader in turn is a lender, a partner or their own CPA.
export const metadata: Metadata = genMeta({
  title: 'Real Estate Accounting & Bookkeeping Services',
  description:
    'Outsourced real estate accounting and bookkeeping for owners, investors and developers: property and entity books, lender reporting, AP/AR and close.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'Accounting, Bookkeeping and Tax Support for Real Estate and Property Management',
  description:
    'Property and entity-level bookkeeping, investor and lender reporting, AP/AR, reconciliations, month-end close and tax preparation support for property owners, real estate investors, developers and commercial operators.',
  slug: 'real-estate',
  basePath: '/industries/',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Real Estate', url: `${baseUrl}${PATH}` },
]);

/** One shared eyebrow treatment, so every band on the page opens the same way. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-secondary" />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{children}</span>
    </div>
  );
}

export default function RealEstateIndustryPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Owners, investors, developers and commercial operators"
        title="Real Estate Accounting, Bookkeeping & Tax Outsourcing"
        description="Property and entity-level books, portfolio reporting, AP/AR, reconciliations and a month-end close that holds up to a lender, a partner or your own CPA. You keep every approval."
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
          <li aria-current="page" className="text-primary font-medium">Real Estate</li>
        </ol>
      </nav>

      {/* The value proposition, written as the specific thing that breaks
          rather than as "accounting is complicated". */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-4"><>
            <Eyebrow>Why this work is different</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              The Books Are Not Yours, and the Reader Is Not You
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Most business bookkeeping produces a report the business itself reads. Real estate accounting
              almost never does. An owner statement goes to somebody who did not see the transactions. A board
              pack goes to volunteers who will compare it with last month. A lender, a partner or a buyer wants
              one property pulled out of a portfolio that was only ever kept at entity level. Each of those is a
              reader with a question, and the answer has to already be in the file.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              That is what makes this work structurally different from ordinary bookkeeping, and it is why the
              expensive problems here are setup problems rather than effort problems. Property tracking, deposits
              held as liabilities, recoverable costs coded as recoverable, operating and reserve funds kept
              apart &mdash; each costs nothing to do correctly as transactions post, and each becomes a
              reconstruction project once a year of history exists in the wrong shape. Volume is rarely what
              breaks a property portfolio&rsquo;s accounting. Structure is.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We take the recurring part &mdash; processing, coding, reconciling, closing and preparing what the
              owner or the board reads &mdash; and leave every approval, every release of money and every
              judgement with your team.
            </p>
          </></Reveal>
          <Reveal delay={0.16} className="lg:pt-10">
            <IndustryIllustration industry="real-estate" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>

        <div className="mt-10 max-w-4xl mx-auto space-y-5">
          {depth.breaks.map((item, i) => (
            <Reveal key={item.h} delay={Math.min(i * 0.06, 0.24)}>
              <div className="rounded-2xl border border-border bg-input p-5 sm:p-7">
                <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* Segments. Same card language as the homepage's three market cards. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-6xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Six Ways This Work Arrives
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              The mechanics overlap and the reporting does not. A property manager answers to owners, a community
              manager answers to a board, a developer answers to a budget. The scope is shaped around which of
              those you are.
            </p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {segments.map((seg, i) => (
              <Reveal key={seg.name} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6">
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

      {/* Services. Homepage card language, industry wording, real hrefs where
          the underlying service has its own page. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-background dot-grid">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10 max-w-3xl mx-auto text-center space-y-3"><>
            <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">What we do</span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary text-balance">
              Accounting Support Across the Portfolio
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
                      className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
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
                      className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6 transition-colors hover:border-primary/40"
                      source={PATH}
                      title="Talk to Us About Real Estate Accounting"
                      lead="Tell us how this part of the work is handled today and we will scope what support would change."
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

      {/* Property management and HOA were full bands here until 2026-09-17.
          They now have their own URLs and their own copy — none of that text
          survives on this page, which is what keeps the three from competing.
          What is left is a router, because a visitor who lands here looking for
          one of them needs one click, not a redirect. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-4 mb-8"><>
            <Eyebrow>Managing rather than owning?</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Two Neighbouring Problems, Each With Its Own Page
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              This page is written for the people who own the property. If the books you are keeping belong to
              somebody else, the mechanics change enough to need their own treatment &mdash; the deliverable
              stops being a financial statement and becomes an owner statement or a board pack, and the
              receivable stops being nothing and becomes rent or an assessment.
            </p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              {
                href: '/industries/property-management',
                name: 'Property Management Accounting',
                who: 'You manage property for owners',
                body: 'Property-level books, owner statements with their supporting detail, tenant and security-deposit ledgers, CAM and recovery, and a close timed to reporting rather than to a scramble.',
              },
              {
                href: '/industries/hoa-accounting',
                name: 'HOA & Association Accounting',
                who: 'You run or manage a community association',
                body: 'Assessment and homeowner ledgers, operating and reserve funds kept apart, aged delinquency schedules, board-approved payables and a board pack that looks the same every month.',
              },
            ].map((c, i) => (
              <Reveal key={c.href} delay={i * 0.08}>
                <Link
                  href={c.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-input p-6 sm:p-7 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{c.who}</span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-primary">{c.name}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{c.body}</p>
                  <span className="mt-5 text-sm font-semibold text-accent">
                    Read that page{' '}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Accounstone. Homepage's two-column pattern, industry wording. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal className="space-y-6"><>
            <Eyebrow>Why Accounstone</Eyebrow>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-balance">
              An Extension of Your Accounting Team, Not a Replacement for It
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We work inside your systems, your coding conventions and your reporting formats, and we take
              ownership of defined recurring work. What stays with you is everything that needs authority:
              approvals, payment release, owner and board relationships, and the decisions that need judgement.
            </p>
            <div className="space-y-4 pt-2 pl-5 margin-rule">
              {[
                'Accounting professionals assigned to your portfolio rather than a shared queue',
                'Capacity that scales through lease-up, acquisition and year-end without a hire',
                'Flexible engagement models — dedicated team, staff augmentation or defined scope',
                'Documented onboarding, so the workflow survives a change of people on either side',
                'Quality review before work reaches your team, in your own formats',
                'Work delivered remotely from our Global Delivery Center in New Delhi, India',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <Check className="text-accent shrink-0 w-5 h-5" aria-hidden="true" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
          </></Reveal>

          <Reveal delay={0.15} className="relative overflow-hidden bg-linear-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white space-y-6 shadow-xl">
            <>
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 1px, transparent 1px, transparent 28px)' }} />
              <p className="relative text-xs font-bold uppercase tracking-[0.14em] text-white/60">What we would put right in month one</p>
              <ul className="relative space-y-4">
                {depth.firstMonth.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden="true" />
                    <span className="text-white/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="relative border-t border-white/15 pt-5 text-sm leading-relaxed text-white/70">
                Most of these are setup decisions. They are cheap to make now and expensive to retrofit once a
                year of history has been recorded the other way.
              </p>
            </>
          </Reveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      <ProcessFlow
        phases={processPhases}
        eyebrow="How it works"
        title="One Property First, Then the Portfolio"
        lead="Nothing transfers on the first call, and nothing moves in bulk. A single property, building or association runs first so both sides can judge the output against something real."
      />

      {/* Technology. Only what we actually work in, and an explicit statement
          that we do not implement or configure it. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Technology</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              We Work Inside the System You Already Run
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Our team has experience with Yardi, including Voyager and Breeze, and with QuickBooks, Xero, Sage
              and NetSuite. Where you run something else, we would confirm at scoping whether we can work in it
              rather than assume &mdash; and if the answer is no, we would say so.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              What we do not do is implement, configure, migrate or administer accounting or property management
              software, and we hold no vendor certification. Those are a different profession, and a provider who
              offers both is asking you to take their word on the setup and on the work done inside it.
            </p>
          </></Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { name: 'QuickBooks', href: '/technology/quickbooks' },
                { name: 'Xero', href: '/technology/xero' },
                { name: 'Sage', href: '/technology/sage' },
                { name: 'NetSuite', href: '/technology/netsuite' },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="inline-block px-4 py-2 rounded-lg bg-white border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                  {t.name}
                </Link>
              ))}
              <Link href="/technology" className="inline-block px-4 py-2 rounded-lg bg-white border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                All platforms
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The trust anchor. No invented proof — the differentiator is naming the
          limits, which is what answers "what am I handing over?". */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>What we will not do</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              The Limits, Named Before You Ask
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              You are considering handing over the books for property that belongs to somebody else. These are the
              things we will not do at any volume or price, and they are the same on day one as they are in
              year three.
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

      <FAQSection subtitle="Real estate questions" items={faqs} columns={2} />

      {/* Internal linking out to the workflows that connect to this one. */}
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
              { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
              { name: 'Accounting & month-end close', href: '/services/accounting/united-states' },
              { name: 'Tax preparation support', href: '/services/tax-preparation/united-states' },
              { name: 'Payroll', href: '/services/payroll/united-states' },
              { name: 'Audit support', href: '/services/audit-support/united-states' },
              { name: 'Dedicated accounting teams', href: '/solutions/dedicated-accounting-teams' },
              { name: 'Staff augmentation', href: '/solutions/staff-augmentation' },
              { name: 'Back office support', href: '/solutions/back-office-support' },
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
        lead="The consultation and the call are always free. Tell us what you own, how the entities are structured, and what your lender, your partners or your CPA ask for that is hard to produce today."
      />

      <CTABanner
        title="Ready to Simplify Your Real Estate Accounting?"
        description="Accounting, bookkeeping and tax support built around your properties, your entities and the people who read the reports."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management', href: '/industries/property-management' }}
        background="primary"
      />
    </main>
  );
}
