import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import Reveal from '@/components/reveal';
import RegionFlag from '@/components/region-flag';
import InquiryTrigger from '@/components/inquiry-trigger';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { regions, serviceRegions, industries, technologies } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Services: US, UK & Australia',
  description:
    'Outsourced bookkeeping, accounting, tax preparation, payroll, AP, AR and audit support, delivered to each region’s rules and reporting cycle.',
  path: '/services',
});

const serviceFAQs = [
  {
    question: 'Why are your service pages split by country?',
    answer:
      'Because the work genuinely differs. A UK bookkeeping engagement is organised around the VAT quarter and Making Tax Digital; the Australian equivalent is organised around the BAS cycle and GST coding; the U.S. equivalent around the month-end close and multi-state activity. Writing one page for all three would describe none of them accurately.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Yes, and most engagements do. Bookkeeping, payables, receivables, payroll and close work are usually taken on together within a single region, because they share the same ledger and the same review points.',
  },
  {
    question: 'Do you file returns or submit to the tax authority?',
    answer:
      'No. We prepare returns, workpapers and supporting records. Submission stays with the licensed professional responsible for it — your CPA or EA in the U.S., your registered practitioner in the UK, your registered tax or BAS agent in Australia. We do not hold portal credentials.',
  },
  {
    question: 'Do you work in more than one region for the same group?',
    answer:
      'Yes. Where a group has entities in more than one of these markets, the work can be run to each entity’s own reporting requirements while keeping one point of contact and a consistent review process.',
  },
  {
    question: 'How is an engagement scoped?',
    answer:
      'By scope, transaction volume, workflow complexity, the systems involved and turnaround requirements. We put a written proposal together once we understand the work, rather than fitting it to a standard package.',
  },
  {
    question: 'What accounting software do you support?',
    answer:
      'QuickBooks Online, Xero, Sage, NetSuite, MYOB, Drake Tax and CCH Axcess, plus client-specific systems where access and documentation are available. We work inside your existing setup rather than implementing or configuring it.',
  },
];

const faqSchema = generateFAQSchema(serviceFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
]);

const supportPillars = [
  { h: 'Defined workflows, not ad-hoc requests', p: 'Each process is documented with a preparer, a reviewer and an approval point, so the work is repeatable and you can see where any item sits.' },
  { h: 'Your systems, your chart of accounts', p: 'We work inside the accounting system you already run. We do not implement, configure or migrate third-party platforms.' },
  { h: 'Review stays where it belongs', p: 'Preparation work moves. Judgement, approval, sign-off and anything requiring a licence stay with your team and your licensed professional.' },
  { h: 'Capacity that follows the workload', p: 'Coverage can widen for a close, a tax season or an audit window and narrow again afterwards, without rebuilding the process each time.' },
];

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="What We Do"
        title="Accounting, Bookkeeping & Tax Services"
        description="Seven service lines, delivered to the reporting rules and compliance cycles of the United States, the United Kingdom and Australia."
        cta={{ text: 'Discuss Your Requirements', href: '/contact' }}
        ctaSecondary={{ text: 'View Solutions', href: '/solutions' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Services</li>
        </ol>
      </nav>

      {/* Overview */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <Reveal className="max-w-4xl mx-auto space-y-5"><>
          <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Same Discipline, Applied to Three Different Rulebooks</h2>
          <p className="text-lg text-muted leading-relaxed">
            Accounstone provides outsourced accounting, bookkeeping, tax preparation, payroll, accounts payable, accounts receivable and audit support to accounting firms and practices in the United States, the United Kingdom and Australia.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            What stays constant is the method: documented workflows, a named preparer and reviewer, evidence retained for every step, and a clear handoff back to whoever holds review and approval. What changes by region is almost everything else — the reporting framework, the compliance calendar, the payroll obligations and the point at which a licensed professional has to take over. That is why the service pages below are region-specific rather than generic.
          </p>
        </></Reveal>
      </section>

      {/* Region blocks */}
      {regions.map((region, ri) => (
        <section key={region.slug} id={region.slug} className={`w-full py-10 md:py-14 px-6 md:px-8 ${ri % 2 === 0 ? 'bg-input' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <Reveal className="max-w-3xl space-y-4 mb-8"><>
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{region.adjective} services</span>
              </div>
              <h2 className="flex flex-wrap items-center gap-3 font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                <RegionFlag region={region.slug} className="w-8 h-[22px]" decorative />
                {region.name} Services
              </h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">{region.intro}</p>
            </></Reveal>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {serviceRegions.map((service, si) => (
                <Reveal key={service.slug} delay={Math.min(si * 0.04, 0.24)}>
                  <li className={`h-full rounded-xl border border-border/70 ${ri % 2 === 0 ? 'bg-white' : 'bg-input'}`}>
                    <Link
                      href={`/services/${service.slug}/${region.slug}`}
                      className="group flex h-full flex-col gap-1.5 p-4 sm:p-5 rounded-xl transition-colors hover:border-primary/40"
                    >
                      <span className="flex items-center gap-2 font-semibold text-primary">
                        {service.name}
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-muted leading-relaxed">{service.copy[region.slug]}</span>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="mt-6 text-sm text-muted">
                For the wider {region.adjective} accounting and compliance environment — tax authorities, reporting standards and payroll obligations — see the{' '}
                <Link href={`/markets/${region.slug}`} className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                  {region.name} market overview
                </Link>.
              </p>
            </Reveal>
          </div>
        </section>
      ))}

      {/* How we support */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-8"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">How we work</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">How We Support Accounting Teams</h2>
          </></Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {supportPillars.map((p, i) => (
              <Reveal key={i} delay={Math.min(i * 0.05, 0.2)}>
                <InquiryTrigger className="h-full p-5 sm:p-6 bg-input rounded-xl border border-border/70 transition-colors hover:border-primary/40" source="/services">
                  <h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{p.h}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{p.p}</p>
                </InquiryTrigger>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + technology + compliance */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <Reveal>
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Industries</h2>
              <p className="text-sm text-muted mb-4 leading-relaxed">Where the accounting work has its own shape, the process is built around it rather than forced into a standard template.</p>
              <ul className="space-y-1.5">
                {industries.map((i) => (
                  <li key={i.slug}><Link href={`/industries/${i.slug}`} className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">{i.name}</Link></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Technology</h2>
              <p className="text-sm text-muted mb-4 leading-relaxed">We work inside the platform you already run. Implementation and configuration are not services we offer.</p>
              <ul className="space-y-1.5">
                {technologies.map((t) => (
                  <li key={t.slug}><Link href={`/technology/${t.slug}`} className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">{t.name}</Link></li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">Compliance &amp; Resources</h2>
              <p className="text-sm text-muted mb-4 leading-relaxed">How engagements are controlled, and the background reading behind the services above.</p>
              <ul className="space-y-1.5">
                <li><Link href="/compliance" className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">Compliance &amp; controls</Link></li>
                <li><Link href="/data-security" className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">Data security</Link></li>
                <li><Link href="/delivery-framework/onboarding" className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">Onboarding</Link></li>
                <li><Link href="/delivery-framework/quality-assurance" className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">Quality assurance</Link></li>
                <li><Link href="/resources/guides" className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">Guides</Link></li>
                <li><Link href="/resources/insights" className="inline-block py-1.5 text-sm text-primary hover:text-accent transition-colors">Insights</Link></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="Services" items={serviceFAQs} columns={2} />

      <InquirySection source="/services" title="Talk to Us About the Workflow You Need Covered" lead="A free consultation, and a call that costs nothing. Name the service and the region, and we will scope a pilot rather than quote a package." />

      <CTABanner
        title="Not Sure Where to Start?"
        description="Tell us which processes are creating pressure and which market they sit in. We will map the work to the right support model."
        cta={{ text: 'Schedule a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
