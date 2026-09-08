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
    'Outsourced accounting for Texas property managers on Yardi Voyager and Breeze — trust accounting, owner statements and CAM reconciliations.',
  path: PATH,
});

const overview =
  "Property management accounting has specific demands that general bookkeeping doesn't cover well: trust accounting compliance, owner statement accuracy across dozens or hundreds of units, CAM (Common Area Maintenance) reconciliations, and month-end close across multiple properties simultaneously. Our team brings hands-on working experience with the Yardi platform — including Yardi Voyager and Yardi Breeze — to support Texas-based property management companies with accurate, compliant, and scalable accounting operations.";

const benefits = [
  'Working experience with Yardi Voyager and Yardi Breeze platforms',
  'Trust accounting support aligned with property management compliance requirements',
  'Owner statement preparation and reconciliation across multi-property portfolios',
  'CAM (Common Area Maintenance) reconciliation support',
  'Multi-entity, multi-property general ledger management',
  'Awareness of Texas-specific business tax considerations, including franchise tax reporting (Texas has no state income tax, but the franchise tax return process has its own requirements)',
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
      'We confirm your trust accounting structure and compliance requirements so owner funds and operating funds are handled correctly from day one.',
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
  'Trust account compliance reporting',
  'Consolidated portfolio-level financial reports',
  'Month-end close package',
];

const faqs = [
  {
    question: 'Do you support Yardi Voyager and Yardi Breeze?',
    answer:
      'Yes, our team has working experience with both Yardi Voyager and Yardi Breeze, including chart of accounts setup, transaction processing, and reporting workflows within the platform.',
  },
  {
    question: 'Can you handle CAM reconciliations and owner statements?',
    answer:
      'Yes, CAM reconciliation and accurate owner statement preparation across multi-property portfolios is a core part of what we support for property management clients.',
  },
  {
    question: 'Do you understand Texas-specific requirements for property management companies?',
    answer:
      "We're familiar with the Texas business tax environment, including that Texas has no state income tax but requires franchise tax reporting for most business entities. We work alongside your CPA or tax advisor for filing-specific guidance.",
  },
  {
    question: 'How do you handle trust accounting compliance?',
    answer:
      'We maintain clear separation between owner/trust funds and operating funds, and structure reconciliations to support the trust accounting compliance your property management business requires.',
  },
  {
    question: 'Can you support a multi-property or multi-entity portfolio?',
    answer:
      'Yes, our workflows are built for multi-property and multi-entity structures, including consolidated portfolio-level reporting alongside individual property statements.',
  },
  {
    question: 'How quickly can you onboard our property management company?',
    answer:
      "Onboarding typically takes 2-4 weeks, depending on portfolio size and the state of your existing Yardi setup. We'll assess this specifically during the initial review.",
  },
];

const faqSchema = generateFAQSchema(faqs);

const serviceSchema = generateServiceSchema({
  name: 'Yardi Accounting Outsourcing for Property Management Companies',
  description: overview,
  slug: 'yardi-accounting-outsourcing-texas',
  basePath: '/industries/real-estate/',
  areaServed: ['US'],
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
        description="Trust accounting, owner statements, and CAM reconciliations handled by a team with hands-on Yardi platform experience."
        cta={{ text: 'Get Started', href: '/contact' }}
        ctaSecondary={{ text: 'View Industries', href: '/industries' }}
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
        description="Let our Yardi-experienced team support your Texas property portfolio."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
