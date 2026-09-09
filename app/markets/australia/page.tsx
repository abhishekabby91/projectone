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

const PATH = '/markets/australia';

export const metadata: Metadata = generateMetadata({
  title: 'Offshore Accounting for Australian Firms',
  description:
    'Your firm’s offshore accounting team — bookkeeping, BAS-ready records, year-end workpapers and return preparation, ready for your agent’s lodgment.',
  path: PATH,
});

const faqs = [
  {
    question: 'Will our clients know you are involved?',
    answer:
      'Your call, and we follow it. Some firms introduce us as their offshore team; others never mention us. We are not client-facing unless you ask us to be, and we do not contact your clients directly without your instruction.',
  },
  {
    question: 'Do you lodge anything with the ATO?',
    answer:
      'No. Income tax lodgment stays with a registered tax agent and BAS lodgment with a registered BAS agent. We are neither, we do not hold ATO portal access, and we do not want it. We prepare; your firm reviews and lodges.',
  },
  {
    question: 'Which standards do you prepare to?',
    answer:
      'Australian Accounting Standards as issued by the AASB, and whatever tier and treatment your firm has determined for the client. We follow the framework you have set rather than deciding it.',
  },
  {
    question: 'Can you handle trust structures?',
    answer:
      'Yes — discretionary and unit trusts are ordinary in an Australian client base, and the record-keeping they need is different from a company. We maintain beneficiary entitlements, distribution schedules and trust accounts that reconcile. The resolutions and the distribution decisions are your firm’s.',
  },
  {
    question: 'What if a client’s records are a mess?',
    answer:
      'Common, and it is scoped separately from the recurring work. Bringing prior quarters into agreement is a different job from keeping the current one current, and quoting it as routine would misrepresent both.',
  },
  {
    question: 'How do we start without moving the whole client base?',
    answer:
      'One client, or one BAS quarter. If the output is not what you wanted, you have spent a quarter of one client’s preparation rather than a lodgment season finding out.',
  },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Markets', url: `${baseUrl}/markets` },
  { name: 'Australia', url: `${baseUrl}${PATH}` },
]);

const packages = [
  {
    name: 'Bookkeeping & BAS Support',
    href: '/services/bookkeeping/australia',
    fits: 'A firm whose client bookkeeping and BAS volume is crowding out advisory time.',
    covers: [
      'Transaction processing and GST coding',
      'Bank and control-account reconciliation',
      'BAS-ready records prepared through the quarter',
      'A reconciled GST control account, not a plug',
    ],
  },
  {
    name: 'Accounts & Tax Preparation Support',
    href: '/services/tax-preparation/australia',
    fits: 'A firm where the lodgment program sets the pace of the whole year.',
    covers: [
      'Year-end workpapers under AASB standards',
      'Company, trust and individual return preparation',
      'Division 7A loan schedules maintained, not reconstructed',
      'Depreciation and fixed asset rollforwards',
    ],
  },
  {
    name: 'Dedicated Accounting Team',
    href: '/solutions/dedicated-accounting-teams',
    fits: 'A firm past the point where per-job outsourcing still helps.',
    covers: [
      'Named people on your client base only',
      'Your templates and lodgment calendar',
      'One point of contact',
      'Capacity that flexes across the program',
    ],
  },
];

const calendar = [
  {
    k: 'BAS quarters',
    p: 'Records coded and reconciled through the quarter rather than reconstructed in the fortnight before the statement is due. The GST control account either agrees or it does not, and that is knowable in week three.',
  },
  {
    k: 'Every pay event',
    p: 'Single Touch Payroll reports on or before pay day, so an error is visible to the ATO and to the employee immediately. There is no year-end tidy-up window any more, which moves the value to the check before submission.',
  },
  {
    k: 'Superannuation quarters',
    p: 'The guarantee has to reach the fund by the cut-off, and a late payment is treated differently from other late payments. The accrual and the payment timing both need supporting at the time, not afterwards.',
  },
  {
    k: '31 March',
    p: 'The FBT year ends before the income year does. Benefits recorded as ordinary expenses through the year are the usual reason FBT preparation starts with a reconstruction.',
  },
  {
    k: 'Year end',
    p: 'Division 7A loan balances, trust distribution schedules and beneficiary entitlements accumulate during the year or get rebuilt under deadline. Rebuilding is the expensive option.',
  },
  {
    k: 'The lodgment program',
    p: 'Deadlines staggered across the year look like relief and behave like a permanent queue. The volume is known well ahead, which means the capacity for it can be too.',
  },
];

const prepared = [
  'Transaction processing and GST coding across your client base',
  'Bank, credit card and control-account reconciliations',
  'BAS-ready records, with the GST control account reconciled',
  'Payroll processing, STP submission data and superannuation records',
  'Year-end workpapers prepared under AASB standards',
  'Company, trust, partnership and individual return preparation',
  'Division 7A loan schedules and trust distribution detail',
  'Depreciation schedules and fixed asset rollforwards',
  'Lead schedules and evidence for the engaged auditor',
];

const retained = [
  'The client relationship, and every client-facing conversation',
  'Review, professional judgement and sign-off',
  'Every lodgment with the ATO, income tax and BAS alike',
  'Trust distribution resolutions and beneficiary decisions',
  'Advice of any kind, including anything approaching tax planning',
  'Accounting policy and any genuinely arguable treatment',
];

const trust = [
  {
    h: 'Start small enough to walk away from',
    p: 'One client, or a single BAS quarter. Both sides get to see real output on real records before anything scales, and if it is wrong you have lost a quarter rather than a lodgment season. Only then do we write down the workflow: who prepares, who reviews internally, and what date each file is due relative to your program.',
  },
  {
    h: 'Two sets of eyes before it becomes yours',
    p: 'Nothing leaves us on one person’s say-so. A second preparer checks the exceptions and the judgement items — not the coding, which is either reconciled or it is not — so what lands with your registered agent is finished work and a short list of genuine questions.',
  },
  {
    h: 'Missing paperwork is escalated, never guessed',
    p: 'No tax invoice means no supported credit, whatever the entry looks like. So the item goes on an open-items list naming what is absent and who was asked for it. The alternative is a plausible GST code and a control-account variance that surfaces three quarters later, when nobody remembers the transaction.',
  },
  {
    h: 'What we can and cannot reach',
    p: 'Access is granted by you, limited to the people staffed on your client base, and revocable the day you want it revoked. There is no scenario in which we hold ATO credentials or the ability to move money — not as a policy we could relax, but because the work does not require it. On SOC 2: we are working toward it and do not hold it, and we will not imply otherwise.',
  },
  {
    h: 'Dates you can plan a quarter around',
    p: 'We will not advertise a turnaround number, because the honest answer depends on volume, platform and how complete the client’s records were when they arrived. What is fixed is that the date gets agreed per workflow, written down, and that a slip reaches you from us rather than from your own calendar.',
  },
  {
    h: 'The same person, quarter after quarter',
    p: 'Someone who already knows how your firm codes, which clients are difficult and why last June was hard. Continuity is most of what makes an offshore team faster in year two than in year one; a rotating queue never gets there.',
  },
];

export default function AustraliaMarketPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        region="australia"
        subtitle="For Australian accounting firms"
        title="Your Firm’s Offshore Accounting Team"
        description="Bookkeeping, BAS-ready records and year-end preparation, built to your templates. You review, you advise, your agent lodges — and you keep the client."
        cta={{ text: 'Start With One Client', href: '/contact' }}
        ctaSecondary={{ text: 'View Australian Services', href: '/services#australia' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/markets" className="inline-block py-1.5 hover:text-primary transition-colors">Markets</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
          <SectionHeading
            eyebrow="The constraint"
            title="The Compliance Floor Keeps Rising, and the Fee Does Not"
            lead="Four BAS quarters, a pay event every fortnight, superannuation cut-offs, and a lodgment program that never quite empties. None of it is difficult work. All of it is work that has to happen."
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Accounstone takes that recurring layer so your qualified people spend their hours on review and on the
              advisory conversations clients actually pay for. We work from our delivery centre in New Delhi as an
              extension of your firm — to your templates, your lodgment calendar and your review points.
            </p>
          </Reveal>
          </div>
          <Reveal delay={0.16}>
            <RegionIllustration region="australia" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="The boundary"
            title="Registered Roles Do Not Delegate. Preparation Does."
            lead="For a firm whose principals carry registered tax or BAS agent obligations, that sentence is the whole question."
          />
          <Reveal delay={0.08}>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              Registration sits with a person, not a process. Nothing we do touches it: we hold no ATO portal access,
              we sign nothing, and we lodge nothing. What moves across is the preparation your registered agent would
              otherwise be doing before they can start reviewing. Your firm remains the client’s accountant, and the
              engagement letter still has your name on it. Our operating model is built to keep it that way — no
              client-facing contact without your instruction, and no credential that would let us act in your name.
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
                  Income tax lodgment belongs to a registered tax agent and BAS lodgment to a registered BAS agent. We
                  are neither, and we hold no ATO portal access.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Three ways in" title="Where Australian Firms Usually Start" />
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
            title="Built Around the Australian Compliance Year"
            lead="Your year has a shape, and the work should be organised around it rather than arriving as a flat monthly service."
          />
          <ol className="mt-8 space-y-3.5">
            {calendar.map((c, i) => (
              <Reveal key={c.k} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full"><InquiryTrigger className="rounded-xl border border-border bg-white p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 transition-colors hover:border-primary/40 h-full" source="/markets/australia" region="australia">
                  <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-accent sm:w-40 sm:pt-1">{c.k}</span>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{c.p}</p>
                </InquiryTrigger></li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.1}>
            <p className="mt-7 text-base text-muted leading-relaxed">
              On GST: a single national rate removes the jurisdictional problem that dominates U.S. work, and replaces
              it with coding discipline. GST-free, input-taxed and taxable supplies behave differently, and a mis-coded
              transaction distorts both the BAS and the year-end position quietly, until somebody reconciles the control
              account. We work inside Xero, MYOB or QuickBooks rather than around them, and we do not implement or
              reconfigure those platforms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="How we work" title="The Part That Decides Whether This Works" />
          <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-5">
            {trust.map((t, i) => (
              <Reveal key={t.h} delay={Math.min(i * 0.05, 0.25)}>
                <InquiryTrigger className="h-full p-5 sm:p-6 bg-input rounded-xl border border-border transition-colors hover:border-primary/40" source="/markets/australia" region="australia">
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
          <SectionHeading eyebrow="Australian services" title="The Full Australian Scope" lead="Every workflow, with its scope, its review boundary, and how it runs for a firm." />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {serviceRegions.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.04, 0.2)}>
                <li>
                  <Link href={`/services/${s.slug}/australia`} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/40 transition-colors">
                    <RegionFlag region="australia" decorative className="mt-1" />
                    <span>
                      <span className="font-semibold text-primary">{s.name}</span>
                      <span className="block text-sm text-muted mt-1 leading-relaxed">{s.copy['australia']}</span>
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/markets/australia/bas-preparation" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">BAS preparation</Link>
              <Link href="/solutions/dedicated-accounting-teams" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Dedicated team</Link>
              <Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Staff augmentation</Link>
              <Link href="/compliance" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Compliance &amp; controls</Link>
              <Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Xero</Link>
              <Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">MYOB</Link>
              <Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-white text-primary text-sm font-medium hover:bg-border transition-colors">Payroll guide</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="Australia" items={faqs} columns={2} />

      <InquirySection region="australia" source="/markets/australia" />

      <CTABanner
        title="Pick One Client. Give Us One Quarter."
        description="Tell us which segment of the program is eating the most senior time, and we will scope a pilot around that."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
