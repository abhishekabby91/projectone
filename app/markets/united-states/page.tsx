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

const PATH = '/markets/united-states';

export const metadata: Metadata = generateMetadata({
  title: 'Offshore Accounting Support for U.S. CPA Firms',
  description:
    'Your firm’s offshore preparation team — bookkeeping, close support, workpapers and return preparation, built for your review and your signature.',
  path: PATH,
});

const faqs = [
  {
    question: 'Will our clients know you are involved?',
    answer:
      'Your call, and we follow it. Some firms introduce us as their offshore delivery team; others never mention us. We are not client-facing unless you ask us to be, and we do not contact your clients directly without your instruction.',
  },
  {
    question: 'Do you sign or e-file returns?',
    answer:
      'No. We do not hold an EFIN, we do not sign returns, and we do not want either. We prepare the return and the workpapers behind it; the signature, the e-file and the responsibility stay with your firm.',
  },
  {
    question: 'Do you determine sales tax nexus for our clients?',
    answer:
      'No. We keep revenue and transaction activity tracked by state so the picture is visible rather than buried in a single revenue account. Whether a client has established nexus, and what to do about it, is a determination for your firm.',
  },
  {
    question: 'What if a client’s books are a mess when they reach us?',
    answer:
      'Common, and it is scoped separately from the recurring work. Bringing prior periods into agreement is a different engagement from keeping the current one current, and quoting it as routine would misrepresent both jobs.',
  },
  {
    question: 'Can you work in our software and our workpaper templates?',
    answer:
      'Yes, and we would rather. Running a parallel set of workpapers creates reconciliation work instead of removing it. We work inside the QuickBooks, Xero, NetSuite or tax software file you already use, under access you grant and can revoke.',
  },
  {
    question: 'How do we start without moving the whole client base?',
    answer:
      'One client, or one month of close work. If the output is not what you wanted, you have spent a month of one client’s preparation rather than a busy season finding out.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'United States', url: `${baseUrl}${PATH}` },
]);

const packages = [
  {
    name: 'Bookkeeping & Close Support',
    href: '/services/bookkeeping/united-states',
    fits: 'A firm whose client accounting work is growing faster than it can staff.',
    covers: [
      'Transaction processing and coding',
      'Bank, credit card and control-account reconciliation',
      'Revenue and transaction activity tracked by state',
      'A close package with an open-items list attached',
    ],
  },
  {
    name: 'Tax Preparation Support',
    href: '/services/tax-preparation/united-states',
    fits: 'A firm where the window between January and April is the binding constraint.',
    covers: [
      '1040, 1065, 1120 and 1120-S preparation',
      'Trial balance to book-to-tax difference schedules',
      'K-1 supporting detail and capital account roll-forwards',
      'Fixed asset and depreciation schedules',
    ],
  },
  {
    name: 'Dedicated Accounting Team',
    href: '/solutions/dedicated-accounting-teams',
    fits: 'A firm past the point where per-return outsourcing still helps.',
    covers: [
      'Named people on your engagements only',
      'Your workpaper templates and close calendar',
      'One point of contact',
      'Capacity that flexes into busy season',
    ],
  },
];

const calendar = [
  {
    k: 'January 31',
    p: 'W-2 and 1099-NEC recipient deadlines are decided in November. A missing TIN or a stale contractor address is trivial to fix in the fall and expensive to chase in the last week of January.',
  },
  {
    k: 'March 15',
    p: '1065 and 1120-S returns, and the K-1s that depend on them. Capital accounts that have not been maintained through the year become the reason partners get their K-1 late.',
  },
  {
    k: 'April 15',
    p: 'The 1040 wall. The volume is knowable twelve months ahead, which means the capacity for it is plannable twelve months ahead.',
  },
  {
    k: 'Every quarter',
    p: '941s and estimated payments keep arriving through the season, indifferent to whether the season is going well.',
  },
  {
    k: 'September and October',
    p: 'Extension season is where a January shortfall reappears, usually alongside the returns that were hardest in the first place.',
  },
  {
    k: 'State by state',
    p: 'Every jurisdiction a client has activity in runs its own calendar and its own rules on what is taxable. Records built only for the federal picture get rebuilt to answer a state question.',
  },
];

const prepared = [
  'Transaction processing and coding across your client base',
  'Bank, credit card and control-account reconciliations',
  'Month-end close packages and supporting schedules',
  'Proposed adjusting entries, with the reasoning attached',
  'Individual, partnership and corporate return preparation',
  'Book-to-tax difference schedules and depreciation rollforwards',
  'K-1 supporting detail and capital account maintenance',
  '1099 and W-2 data preparation, chased during the year',
  'Lead schedules and evidence for the engaged auditor',
];

const retained = [
  'The client relationship, and every client-facing conversation',
  'Review, professional judgement and sign-off',
  'Signing and e-filing every return',
  'Representation before the IRS or any state authority',
  'Nexus determinations and entity structure decisions',
  'Advice of any kind, including anything approaching tax planning',
];

const trust = [
  {
    h: 'How an engagement starts',
    p: 'A scoping call, then one client or one month of close work so both sides can see real output before anything scales. What follows is a written workflow — preparer, reviewer, due dates set against your deadlines rather than ours — and then steady state.',
  },
  {
    h: 'Reviewed before it reaches your reviewers',
    p: 'Every file has a named preparer and a named internal reviewer before it leaves us. That review targets exceptions and judgement items rather than re-performing the posting. What lands on your desk is finished work with an explicit list of open questions, not a pile to triage.',
  },
  {
    h: 'When a client’s records are incomplete',
    p: 'The item goes on an open-items list with what is missing and who was asked for it. It does not get a plausible account code and disappear into the ledger — that is the failure that surfaces in October and costs a partner a weekend.',
  },
  {
    h: 'Data security and confidentiality',
    p: 'NDA-backed engagements, access restricted to the people staffed on your work, performed inside your systems under credentials you issue and can revoke. No banking control and no e-file credentials at any point. We are actively working toward SOC 2 — we do not hold it, and we will not describe it as though we do.',
  },
  {
    h: 'Turnaround',
    p: 'Agreed per workflow rather than advertised as a headline number, because it depends on volume, platform and how complete a client’s records are. What we commit to is that the agreed turnaround is written down, and that you hear about a slip from us before you notice it yourself.',
  },
  {
    h: 'A named point of contact',
    p: 'One person who knows your firm, your templates and your client base. Not a ticket queue, and not a different name each month.',
  },
];

export default function USMarketPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        region="united-states"
        subtitle="For U.S. CPA firms"
        title="Your Firm’s Offshore Preparation Team"
        description="Bookkeeping, close work and return preparation, built to your workpaper templates. You review, you advise, you sign — and you keep the client."
        cta={{ text: 'Start With One Client', href: '/contact' }}
        ctaSecondary={{ text: 'View U.S. Services', href: '/services#united-states' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
          <SectionHeading
            eyebrow="The constraint"
            title="Hiring Is Not the Bottleneck Most Firms Actually Have"
            lead="The shape of the year is: a wall in April, a second one in October, and eight months in between where the recurring client accounting work quietly consumes the people who were supposed to be reviewing it."
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Accounstone takes the preparation layer off that curve, so your licensed people spend their hours on
              review and client judgement rather than on posting and reconciling. We work from our delivery centre in
              New Delhi as an extension of your firm — to your templates, your close calendar and your review points.
            </p>
          </Reveal>
          </div>
          <Reveal delay={0.16}>
            <RegionIllustration region="united-states" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The boundary"
            title="We Are Not a Second Firm. We Are Your Preparation Layer."
            lead="This distinction is what decides whether an arrangement like this is safe for a licensed firm to enter."
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              We do not hold your client relationships, we do not sign, and we do not file. Your firm remains the
              client’s CPA in every sense that matters — professionally, contractually, and in the client’s mind. What
              moves is the preparation underneath it. We have built the whole operating model around that line: no
              client-facing contact without your instruction, no credentials that would let us act in your name, and
              every file handed back for your review rather than taken forward on our own judgement.
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
                <span className="text-sm font-semibold uppercase tracking-wide text-white/70">Kept by your firm</span>
                <ul className="mt-5 space-y-3.5">
                  {retained.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-white/85 leading-6 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-white/70 leading-relaxed">
                  Representation before the IRS requires a licensed CPA, enrolled agent or attorney under Circular 230.
                  We are none of those things, and we do not act as though we are.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Three ways in" title="Packages Built Around Where the Pressure Sits" />
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
                  <span className="mt-5 text-sm font-semibold text-accent">Read more &rarr;</span>
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
            title="Built Around the U.S. Filing Year"
            lead="Your year has a shape, and the support should be organised around it rather than arriving as a flat monthly service."
          />
          <ol className="mt-8 space-y-3.5">
            {calendar.map((c, i) => (
              <Reveal key={c.k} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="rounded-xl border border-border bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 transition-colors hover:border-primary/40 h-full" source="/markets/united-states" region="united-states">
                  <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-accent sm:w-40 sm:pt-1">{c.k}</span>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{c.p}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.1}>
            <p className="mt-7 text-base text-muted leading-relaxed">
              On multi-state work: since <em>South Dakota v. Wayfair</em> a client can owe a collection obligation in a
              state it has never set foot in, on economic activity alone. Nothing about that is manageable if the year’s
              revenue sits in one undifferentiated account. Tracking activity by state as it posts costs almost nothing
              during the year and is close to impossible to reconstruct afterwards. We keep that detail; your firm makes
              the determination.
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
                <InquiryTrigger className="h-full p-5 sm:p-6 bg-input rounded-xl border border-border transition-colors hover:border-primary/40" source="/markets/united-states" region="united-states">
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
          <SectionHeading eyebrow="U.S. services" title="Every Workflow We Prepare" lead="Each page covers scope, the review boundary, and how the work runs for U.S. firms." />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceRegions.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <li>
                  <Link href={`/services/${s.slug}/united-states`} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/40 transition-colors">
                    <RegionFlag region="united-states" decorative className="mt-1" />
                    <span>
                      <span className="font-semibold text-primary">{s.name}</span>
                      <span className="block text-sm text-muted mt-1 leading-relaxed">{s.copy['united-states']}</span>
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">CPA firms</Link>
              <Link href="/markets/united-states/texas" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Texas</Link>
              <Link href="/markets/united-states/california" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">California</Link>
              <Link href="/markets/united-states/florida" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Florida</Link>
              <Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Staff augmentation</Link>
              <Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">QuickBooks</Link>
              <Link href="/resources/insights/sales-tax-nexus-ecommerce-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Sales tax nexus guide</Link>
              <Link href="/resources/guides/staff-augmentation-tax-season-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Tax-season capacity guide</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="United States" items={faqs} columns={2} />

      <InquirySection region="united-states" source="/markets/united-states" />

      <CTABanner
        title="Start With One Client and One Month"
        description="Tell us which part of your client base is costing the most review time, and we will scope a pilot around it."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
