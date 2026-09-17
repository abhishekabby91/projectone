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
    'Outsourced property management accounting and bookkeeping: property-level books, owner statements, tenant and deposit ledgers, CAM recovery and close.',
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
        description="Property-level books, owner statements, tenant and deposit ledgers, CAM recovery, AP/AR and a month-end that reconciles rather than reconstructs. Every approval and every release of money stays with your team."
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
              You Are Keeping Books That Belong to Somebody Else
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              That single fact drives everything else. An owner statement goes to a person who did not see the
              transactions, will compare it against last month, and will ask about the one line that moved. A
              tenant deposit in your account is not your money. A recoverable cost billed without its workings is
              an invitation to a challenge you cannot answer. None of that is true of ordinary business
              bookkeeping, where the business reads its own numbers and already knows what happened.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              So &ldquo;done&rdquo; means something stricter here: a statement is finished when the questions it
              will generate can already be answered from the file. That is a structural standard rather than an
              effort one, which is why the expensive problems in property management accounting are almost always
              setup problems. Property tracking, deposits carried as liabilities, recoverable costs coded as
              recoverable, the portfolio view built upward from properties rather than allocated down into them
              &mdash; each costs nothing to do correctly as transactions post, and each becomes a reconstruction
              project once a year of history exists in the wrong shape.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We take the recurring part &mdash; processing, coding, reconciling, closing and preparing what the
              owner actually receives &mdash; and leave every approval, every release of money and every
              judgement with your team.
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
              Which of These Is Happening to You?
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Nobody goes looking for outsourced accounting. They go looking because one thing is late, wrong or
              unanswerable. Pick the one that sounds like your month and we will start the conversation there
              &mdash; the reading underneath each is what we would expect to find.
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
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Six Kinds of Portfolio, One Underlying Problem
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              A residential manager answers to owners about a rent roll that changes monthly. A commercial
              manager answers to tenants about a recovery calculation. The mechanics overlap and the reporting
              does not, so the scope is shaped around which of these you are.
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
              How Property Management Books Are Kept
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Eight decisions that separate a portfolio whose accounting scales from one that has to be
              reconstructed every year. Almost all of them are made at the point a transaction posts, which is
              why they are cheap now and expensive later.
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
            <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">What we do</span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary text-balance">
              Scope Built Around Your Doors
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
                      title="Property Management Accounting"
                      lead="Tell us how this part of the work is handled today and we will scope what support would change. The consultation and the call are free."
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
              The Rules Are Local. The Ledger Discipline Is Not.
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
        lead="Nothing transfers on the first call and nothing moves in bulk. A single property runs first, in your system and your formats, so both sides can judge the output against something real."
      />

      {/* Technology. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Technology</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              We Work Inside the System You Already Run
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Our team has experience with Yardi, including Voyager and Breeze, and with QuickBooks, Xero, Sage
              and NetSuite. Where you run something else, we would confirm at scoping whether we can genuinely
              work in it rather than assume &mdash; and if the answer is no, we would say so.
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
            <Eyebrow>What we will not do</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              We Never Touch the Money
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              You are considering handing over the books for property, rent and deposits that belong to other
              people. These are the things we will not do at any volume or price, and they are the same on day
              one as they are in year three.
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
        title="Ready to Get Owner Statements Out on Time?"
        description="Property-level bookkeeping, owner reporting and month-end close built around your doors — with every approval and every payment release staying with your team."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
        ctaSecondary={{ text: 'HOA Accounting', href: '/industries/hoa-accounting' }}
        background="primary"
      />
    </main>
  );
}
