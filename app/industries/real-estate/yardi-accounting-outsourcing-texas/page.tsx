import { Metadata } from 'next';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import InquiryTrigger from '@/components/inquiry-trigger';
import {
  generateMetadata,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/real-estate/yardi-accounting-outsourcing-texas';

export const metadata: Metadata = generateMetadata({
  title: 'Yardi Accounting Outsourcing in Texas',
  description:
    'Yardi accounting and bookkeeping for Texas property managers, including owner statements, CAM reconciliations and month-end reporting.',
  path: PATH,
});

const overview =
  "Property management accounting can involve property-level ledgers, owner statements, CAM (Common Area Maintenance) reconciliations and month-end close across multiple properties. For Texas-based property managers using Yardi Voyager or Yardi Breeze, the engagement can be scoped around the client's existing setup, access permissions and documented accounting workflow.";

const benefits = [
  'Accounting workflow support for portfolios using Yardi Voyager or Yardi Breeze',
  'Trust-account recordkeeping and reconciliation support based on your documented workflow',
  'Owner statement preparation and reconciliation across multi-property portfolios',
  'CAM (Common Area Maintenance) reconciliation support',
  'Multi-entity, multi-property general ledger management',
  'Accounting records organized to support your CPA or tax adviser with business reporting',
  'Bank reconciliation across multiple property accounts',
  'Scalable support during peak leasing season workload spikes',
];

const process = [
  {
    step: 1,
    title: 'Portfolio & Systems Review',
    description:
      'We review your current Yardi setup, chart of accounts structure, and property portfolio to understand your specific workflow before making any changes.',
  },
  {
    step: 2,
    title: 'Trust Accounting Alignment',
    description:
      'We review the documented process for separating and reconciling owner funds and operating funds, then define the accounting tasks and review points for the engagement.',
  },
  {
    step: 3,
    title: 'Onboarding & Reconciliation',
    description:
      'We reconcile existing balances, owner statements, and CAM schedules to establish a clean, accurate starting point in Yardi.',
  },
  {
    step: 4,
    title: 'Ongoing Bookkeeping & Reporting',
    description:
      'We manage day-to-day transaction recording, bank reconciliation, and owner statement preparation across your property portfolio.',
  },
  {
    step: 5,
    title: 'Month-End Close & Reviews',
    description:
      'We close the books each month across all properties and provide reporting your team can use for owner communication and decision-making.',
  },
];

const deliverables = [
  'Monthly owner statements per property',
  'CAM reconciliation reports',
  'Bank reconciliations across property accounts',
  'Trust-account reconciliation schedules based on documented procedures',
  'Consolidated portfolio-level financial reports',
  'Month-end close package',
];

const faqs = [
  {
    question: 'Can the work be performed in Yardi Voyager or Yardi Breeze?',
    answer:
      'The scope depends on your Yardi product, access permissions and existing setup. We can review the workflow and confirm which transaction processing, reconciliation and reporting tasks are suitable before onboarding.'
  },
  {
    question: 'Can you handle CAM reconciliations and owner statements?',
    answer:
      'Yes, CAM reconciliation and accurate owner statement preparation across multi-property portfolios is a core part of what we support for property management clients.',
  },
  {
    question: 'Can you help prepare records for Texas business tax filings?',
    answer:
      "Texas business tax requirements depend on the entity and its circumstances. We can organize the accounting records and coordinate with your CPA or tax adviser for filing-specific questions.",
  },
  {
    question: 'How do you support trust-account recordkeeping?',
    answer:
      'We can prepare reconciliation schedules using the procedures agreed for the engagement. Your team confirms the applicable requirements and reviews the records before relying on them for compliance purposes.',
  },
  {
    question: 'Can you support a multi-property or multi-entity portfolio?',
    answer:
      'Yes, our workflows are built for multi-property and multi-entity structures, including consolidated portfolio-level reporting alongside individual property statements.',
  },
  {
    question: 'How quickly can you onboard our property management company?',
    answer:
      "Onboarding timing depends on portfolio size, data quality, access and the condition of your existing Yardi setup. We can estimate the timeline after an initial review.",
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Yardi Accounting Outsourcing for Property Management Companies',
  description: overview,
  slug: 'yardi-accounting-outsourcing-texas',
  basePath: '/industries/real-estate/',
  areaServed: ['Texas'],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Real Estate', url: `${baseUrl}/industries/real-estate` },
  { name: 'Yardi Accounting Outsourcing (Texas)', url: `${baseUrl}${PATH}` },
]);

export default function YardiTexasPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Property Management Accounting"
        title="Yardi Accounting Outsourcing for Texas Property Management Companies"
        description="Owner statements, CAM reconciliations and property-level accounting support for Texas portfolios using Yardi."
        cta={{ text: 'Discuss Yardi Accounting', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="inline-block py-1.5 hover:text-primary transition-colors">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries/real-estate" className="inline-block py-1.5 hover:text-primary transition-colors">Real Estate</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Yardi Accounting (Texas)</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
              Yardi-Based Accounting for Texas Property Managers
            </h2>
          </div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Benefits</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
              Why Property Managers Choose This Support
            </h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-lg border-2 border-border">
                <Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" />
                <p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Our Process</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
              How We Onboard Your Portfolio
            </h2>
          </div>
          <ol className="space-y-6">
            {process.map((item, i) => (
              <li key={i} className="flex gap-6">
                <div className="shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg" aria-hidden="true">
                    {item.step}
                  </div>
                </div>
                <div className="grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">Deliverables</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What You Get</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, i) => (
              <li key={i} className="h-full"><InquiryTrigger className="h-full p-6 bg-white rounded-lg border-2 border-border hover:border-primary transition-colors" source="/industries/real-estate/yardi-accounting-outsourcing-texas" region="united-states">
                <p className="text-foreground font-medium">{deliverable}</p>
              </InquiryTrigger></li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-xl font-bold text-primary mb-4">Where this sits</h2>

          <div className="flex flex-wrap gap-3">

            <Link href="/markets/united-states/texas" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Accounting in Texas <ArrowRight size={14} aria-hidden="true" /></Link>

            <Link href="/industries/real-estate" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Real estate accounting <ArrowRight size={14} aria-hidden="true" /></Link>

            <Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium hover:bg-border transition-colors">Bookkeeping <ArrowRight size={14} aria-hidden="true" /></Link>

          </div>

        </div>

      </section>


      <InquirySection source="/industries/real-estate/yardi-accounting-outsourcing-texas" title="Talk to Us About Your Yardi Portfolio" lead="A free consultation, and a call that costs nothing. Tell us the property count and how Yardi is configured, and we will scope the recurring work around it." compact />

      <CTABanner
        title="Ready to Streamline Your Property Management Accounting?"
        description="Discuss accounting support for your Texas property portfolio using Yardi."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
