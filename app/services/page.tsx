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
  title: 'CPA Firm Accounting, Bookkeeping & Tax',
  description:
    'Accounting outsourcing for CPA and accounting firms: bookkeeping, tax preparation, reconciliations, payroll and recurring accounting production.',
  path: '/services',
});

const serviceFAQs = [
  {
    question: 'How are service workflows organized?',
    answer:
      'Each service page explains the recurring work, the information needed, the review boundary and how the workflow fits into an existing accounting operation.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Yes, and most engagements do. Bookkeeping, payables, receivables, payroll and close work are often taken on together because they share the same ledger and review points.',
  },
  {
    question: 'Can you support tax filing and submission workflows?',
    answer:
      'Yes. Tax preparation support can be structured around the agreed scope, review workflow and responsibilities of the tax professional.',
  },
  {
    question: 'How is an engagement scoped?',
    answer:
      'Scope is determined by transaction volume, workflow complexity, systems and turnaround requirements. A written proposal follows review of the actual work rather than a standard package.',
  },
  {
    question: 'What accounting software do you support?',
    answer:
      'QuickBooks Online, Xero, Sage, NetSuite, Drake Tax and CCH Axcess are among the systems used for accounting and tax-preparation workflows, subject to the agreed scope and access. The work runs inside the existing setup rather than requiring implementation or configuration.',
  },
];

const faqSchema = generateFAQSchema(serviceFAQs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
]);

const supportPillars = [
  { h: 'Defined workflows, not ad-hoc requests', p: 'Each process is documented with a preparer, a reviewer and an approval point, so the work is repeatable and you can see where any item sits.' },
  { h: 'Your systems, your chart of accounts', p: 'The accounting work runs inside the system already in use. Third-party platform implementation, configuration and migration are outside this service.' },
  { h: 'Review stays clear', p: 'Preparation work is handled through the agreed workflow, with review points, approvals and professional responsibilities clearly defined.' },
  { h: 'Capacity that follows the workload', p: 'Coverage can widen for a close, a tax season or an audit window and narrow again afterwards, without rebuilding the process each time.' },
];

export default function ServicesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Accounting Outsourcing for CPA & Accounting Firms"
        title="Accounting, Bookkeeping & Tax Services"
        description="Bookkeeping, accounting operations, tax-preparation support and recurring production work, organized around your existing systems and reviewer workflows."
        cta={{ text: 'Discuss CPA Firm Support', href: '/contact' }}
        ctaSecondary={{ text: 'Explore CPA Firm Support', href: '/industries/cpa-firms' }}
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
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Accounting Work That Fits Your Existing Workflow</h2>
          <p className="text-lg text-muted leading-relaxed">
            Accounstone primarily supports CPA and accounting firms with bookkeeping, reconciliations, month-end work, tax-preparation support, payroll, accounts payable and accounts receivable processing.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Work is organized around the firm's existing software, documentation standards, client requirements and review process. The firm retains its client relationships, professional judgment, final review and required filing or sign-off responsibilities. The service and industry pages describe the specific workflows that can fit within that model.
          </p>
        </></Reveal>
      </section>

      {/* Region blocks */}
      {regions.filter((region) => region.slug === 'united-states').map((region, ri) => (
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

          </div>
        </section>
      ))}

      {/* How we support */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="max-w-3xl space-y-3 mb-8"><>
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">How we work</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Accounting Support Structure</h2>
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
              <p className="text-sm text-muted mb-4 leading-relaxed">The work runs inside the platform already in use. Implementation and configuration are outside the service scope.</p>
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

      <InquirySection source="/services" title="Discuss the Workflow You Need Covered" lead="Name the service, market and workflow to be covered. The scope can start with a defined pilot rather than a standard package." />

      <CTABanner
        title="Not Sure Where to Start?"
        description="Identify the processes creating pressure and the relevant market. The work can then be mapped to the appropriate support model."
        cta={{ text: 'Schedule a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
