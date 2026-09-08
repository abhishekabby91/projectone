import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import RegionFlag from '@/components/region-flag';
import RegionIllustration from '@/components/region-illustration';
import InquiryTrigger from '@/components/inquiry-trigger';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { serviceRegions } from '@/lib/data';

const PATH = '/markets/united-kingdom';

export const metadata: Metadata = generateMetadata({
  // Retitled 2026-09-04. This page was called "Offshore Accounting for UK
  // Practices" and was therefore ranking for the whole "offshore *" cluster
  // (~140 of its 144 impressions) against
  // /solutions/offshore-accounting-support, which is the page built for that
  // intent. docs/SEARCH-INTENTS.md assigns this URL the UK regulatory brief —
  // HMRC, VAT, MTD, PAYE, Companies House — so the title now says that.
  title: 'Outsourced Accounting for UK Practices',
  description:
    'Bookkeeping, FRS 102 year-end accounts, VAT under MTD and tax preparation for UK accountancy practices — prepared for your review, sign-off and filing.',
  path: PATH,
});

const faqs = [
  {
    question: 'Will our clients know you are involved?',
    answer:
      'That is your call and we follow it. Most practices present us as their offshore delivery team; some do not mention us at all. We are never client-facing unless you ask us to be, and we do not contact your clients directly without your instruction.',
  },
  {
    question: 'Do you file anything with HMRC or Companies House?',
    answer:
      'No. We do not hold credentials for either, and we do not want them. We prepare the work; your practice reviews it, signs it and files it.',
  },
  {
    question: 'Which reporting framework do you work to?',
    answer:
      'FRS 102 for most entities and FRS 105 for micro-entities. Where a client reports under IFRS or FRS 101, we follow the treatment your practice has set. We do not make the framework decision.',
  },
  {
    question: 'What if a client’s records are a mess?',
    answer:
      'Common, and it is scoped separately from the recurring work. Bringing prior periods into agreement is a different job from keeping the current one current, and scoping it as though it were routine would misrepresent both.',
  },
  {
    question: 'Can you work to our templates and file structure?',
    answer:
      'Yes, and we prefer to. Introducing a parallel set of workpapers creates reconciliation work rather than removing it.',
  },
  {
    question: 'How do we start without committing the whole portfolio?',
    answer:
      'A pilot on one client or one VAT quarter. If the output is not what you wanted, you have lost a quarter of one client’s preparation work rather than a season.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United Kingdom', url: `${baseUrl}${PATH}` },
]);

const packages = [
  {
    name: 'Bookkeeping Support',
    href: '/services/bookkeeping/united-kingdom',
    fits: 'A practice whose client bookkeeping volume is crowding out review and advisory time.',
    covers: ['Transaction processing and coding', 'Bank, card and control-account reconciliation', 'VAT-quarter records, MTD-compatible', 'Month-end schedules and an open-items list'],
  },
  {
    name: 'Accounts & Tax Preparation Support',
    href: '/services/tax-preparation/united-kingdom',
    fits: 'A practice where January and the year-end cycle are the constraint.',
    covers: ['Year-end accounts under FRS 102 and FRS 105', 'CT600 computations and capital allowances', 'Self Assessment workpapers and schedules', 'Disclosure inputs gathered through the year'],
  },
  {
    name: 'Dedicated Accounting Team',
    href: '/solutions/dedicated-accounting-teams',
    fits: 'A practice past the point where ad-hoc capacity still helps.',
    covers: ['Named people on your portfolio only', 'Your templates and close calendar', 'One point of contact', 'Capacity that flexes for January'],
  },
];

const calendar = [
  { k: 'VAT quarters', p: 'Records reconciled and coded through the quarter, not reconstructed in the week the return is due.' },
  { k: 'Every pay date', p: 'Real Time Information leaves no catch-up window, so the check happens before submission rather than at year end.' },
  { k: 'Every pay period', p: 'Auto-enrolment assessment runs with the pay run, not once at onboarding.' },
  { k: 'Year end', p: 'Disclosure inputs — related parties, commitments, leases — accumulated during the year rather than reconstructed under deadline.' },
  { k: 'Corporation Tax', p: 'Computations built on an agreed set of accounts rather than a moving one.' },
  { k: '31 January', p: 'The volume is known months in advance, which means the capacity for it can be too.' },
];

const prepared = [
  'Transaction processing and coding across your client portfolio',
  'Bank, card and control-account reconciliations',
  'VAT-quarter records kept in a state the return can be prepared from',
  'Year-end accounts preparation under FRS 102 or FRS 105',
  'Corporation Tax computations and CT600 workpapers',
  'Self Assessment workpapers and supporting schedules',
  'Payroll processing, RTI submission data and auto-enrolment records',
  'Lead schedules and evidence for the engaged auditor',
];

const retained = [
  'The client relationship, and every client-facing conversation',
  'Review, professional judgement and sign-off',
  'Every submission to HMRC and Companies House',
  'Advice of any kind, including anything approaching tax planning',
  'Accounting policy decisions and any genuinely arguable treatment',
];

const trust = [
  { h: 'How an engagement runs', p: 'A scoping call, then a pilot on one client or one VAT quarter so both sides can see the output before anything scales. Then a documented workflow — preparer, reviewer, due dates set relative to your deadlines — and steady state against your calendar.' },
  { h: 'Quality review, before it reaches you', p: 'Every file has a named preparer and a named internal reviewer before it reaches your practice. That review looks at exceptions and judgement items rather than re-performing the posting. What arrives with you is finished work plus an explicit list of open questions.' },
  { h: 'When a client’s records are incomplete', p: 'The item goes to an open-items list with what is missing and who was asked. It does not receive a plausible code and disappear into the ledger, which is the failure that costs you a year-end.' },
  { h: 'Data security and confidentiality', p: 'NDA-backed engagements, access limited to the people working your portfolio, work performed inside your systems under access you grant and can revoke. No banking control and no submission credentials at any point. We are actively working toward SOC 2 — we do not hold it, and we will not describe it as though we do.' },
  { h: 'Turnaround', p: 'Agreed per workflow rather than promised as a headline number, because it depends on volume, platform and how complete a client’s records are. What we commit to is that the agreed turnaround is written down, and that you hear about a slip from us before you notice it.' },
  { h: 'A named point of contact', p: 'One person who knows your practice, your templates and your portfolio. Not a ticket queue, and not a different name each month.' },
];

export default function UKMarketPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        region="united-kingdom"
        subtitle="For UK accountancy practices"
        title="Your Practice’s Outsourced Accounting Team"
        description="Bookkeeping, FRS 102 year-end accounts, VAT returns under Making Tax Digital and tax preparation, prepared to your templates. You review, you advise, you file — and you keep the client."
        cta={{ text: 'Start With One Client', href: '/contact' }}
        ctaSecondary={{ text: 'View UK Services', href: '/services#united-kingdom' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
          <SectionHeading
            eyebrow="The constraint"
            title="Most Practices Do Not Have a Talent Problem"
            lead="They have a capacity problem with a seasonal shape: the VAT quarters keep arriving, January absorbs everything, and the year-end accounts that were supposed to be done in September are still open in February."
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Accounstone exists to take the preparation layer off that curve, so your qualified people spend their
              hours reviewing and advising rather than processing. We work from our delivery centre in New Delhi as an
              extension of your practice — to your templates, your close calendar and your review points.
            </p>
          </Reveal>
          </div>
          <Reveal delay={0.16}>
            <RegionIllustration region="united-kingdom" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The boundary"
            title="We Are Not a Second Practice. We Are Your Delivery Layer."
            lead="This distinction decides whether an arrangement like this is safe to enter."
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              We do not hold your client relationships, we do not sign anything, and we do not file. Your practice
              stays the client’s accountant in every sense that matters — professionally, contractually, and in the
              client’s mind. What moves is the preparation underneath. The whole way we work is built around that
              line: no client-facing contact without your instruction, no credentials that would let us act in your
              name, and every file returned for your review rather than carried forward on our judgement.
            </p>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Reveal>
              <div className="h-full rounded-2xl border border-border bg-white p-7 md:p-8">
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">Prepared by us</span>
                <ul className="mt-5 space-y-3.5">
                  {prepared.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-foreground leading-6 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-2xl bg-primary text-white p-7 md:p-8">
                <span className="text-sm font-semibold uppercase tracking-wide text-white/70">Kept by your practice</span>
                <ul className="mt-5 space-y-3.5">
                  {retained.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-white/85 leading-6 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-white/70 leading-relaxed">
                  We do not hold HMRC or Companies House credentials.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Three ways in"
            title="Packages Built Around Where the Pressure Sits"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  href={pkg.href}
                  className="group flex h-full flex-col rounded-xl border border-border bg-input p-6 transition-all duration-200 hover:border-primary/50 hover:bg-white hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                >
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed italic">{pkg.fits}</p>
                  <ul className="mt-4 space-y-2 flex-1">
                    {pkg.covers.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-foreground leading-6">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 text-sm font-semibold text-accent">Read more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The calendar"
            title="Built Around the UK Compliance Year"
            lead="Your year has a shape, and the work should be organised around it rather than arriving as a flat monthly service."
          />
          <ol className="mt-8 space-y-3.5">
            {calendar.map((c, i) => (
              <Reveal key={c.k} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="rounded-xl border border-border bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 transition-colors hover:border-primary/40 h-full" source="/markets/united-kingdom" region="united-kingdom">
                  <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-accent sm:w-40 sm:pt-1">{c.k}</span>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{c.p}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.1}>
            <p className="mt-7 text-base text-muted leading-relaxed">
              On Making Tax Digital: the rule is a digital link from the underlying record to the submitted figure.
              The break is rarely dramatic — someone exports to a spreadsheet, adjusts a total, and types the result
              in. Keeping the work inside Xero, QuickBooks or Sage rather than around it is most of what compliance
              actually requires, and it is how we work by default. We do not implement or reconfigure those platforms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="How we work" title="What You Are Actually Buying" />
          <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-5">
            {trust.map((t, i) => (
              <Reveal key={t.h} delay={Math.min(i * 0.05, 0.25)}>
                <InquiryTrigger className="h-full p-5 sm:p-6 bg-input rounded-xl border border-border transition-colors hover:border-primary/40" source="/markets/united-kingdom" region="united-kingdom">
                  <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{t.h}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{t.p}</p>
                </InquiryTrigger>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="UK services" title="Every Workflow We Prepare" lead="Each page covers scope, the review boundary, and how the work runs for UK practices." />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceRegions.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <li>
                  <Link href={`/services/${s.slug}/united-kingdom`} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/40 transition-colors">
                    <RegionFlag region="united-kingdom" decorative className="mt-1" />
                    <span>
                      <span className="font-semibold text-primary">{s.name}</span>
                      <span className="block text-sm text-muted mt-1 leading-relaxed">{s.copy['united-kingdom']}</span>
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/solutions/offshore-accounting-support" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Offshore accounting</Link>
              <Link href="/solutions/dedicated-accounting-teams" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Dedicated team</Link>
              <Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Staff augmentation</Link>
              <Link href="/compliance" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Compliance &amp; controls</Link>
              <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
              <Link href="/technology/sage" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Sage</Link>
              <Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Payroll guide</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="United Kingdom" items={faqs} columns={2} />

      <InquirySection region="united-kingdom" source="/markets/united-kingdom" />

      <CTABanner
        title="Start With One Client and One Quarter"
        description="Tell us which segment of your portfolio is costing the most review time, and we will scope a pilot around it."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
