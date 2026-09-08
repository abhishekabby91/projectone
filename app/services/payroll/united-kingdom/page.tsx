import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ServiceDepth from '@/components/service-depth';
import RegionalContext from '@/components/regional-context';
import RegionFlag from '@/components/region-flag';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquiryRail from '@/components/inquiry-rail';
import ServiceIllustration from '@/components/service-illustration';
import FurtherReading from '@/components/further-reading';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/payroll/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'Payroll Support for UK Practices',
  description: 'PAYE processing, RTI submission data and auto-enrolment records for UK practices running client payroll — prepared and checked before you submit.',
  path: PATH,
});

const overview = "Payroll is the service most practices offer, least enjoy, and can least afford to get wrong. It runs on a fixed cadence with no catch-up window, and an error is visible to the client in their own net pay. We run the gross-to-net calculation, prepare RTI submission data and keep auto-enrolment assessed each period — checked before you submit. Submission stays with your practice, and so does the payment.";

const ukElements = [
  'PAYE income tax withholding calculations',
  'RTI (Real Time Information) submission data prepared with every pay run',
  'Employee and employer National Insurance contribution calculations',
  'Auto-enrolment workplace pension contribution tracking',
  'Statutory payment calculations (SSP, SMP, SPP)',
  'Payroll journal entries into Xero or Sage Payroll',
];

const delegated = [
  'Gross-to-net pay calculations',
  'PAYE and NI withholding calculations',
  'RTI submission data preparation',
  'Auto-enrolment pension contribution tracking',
  'Payslip preparation and payroll record-keeping',
  'Payroll GL reconciliation against the register',
];

const retained = [
  'Final review and approval of every payroll run',
  'RTI submission to HMRC through your software or authorised agent',
  'Employment classification decisions',
  'Pension scheme selection and benefits design',
  'Bank access and payment authorisation',
];

const faqs = [
  { question: 'Do you submit RTI to HMRC?', answer: 'RTI data preparation is what we handle — calculating and formatting the submission for each pay run. Submitting it to HMRC through your payroll software or agent authorisation stays with your practice, since that requires credentials we neither hold nor want.' },
  { question: 'Do you handle auto-enrolment pension contributions?', answer: "We track and calculate auto-enrolment pension contributions against the scheme and rates already in place. Selecting the pension scheme and its contribution structure is a decision for the client and their adviser." },
  { question: 'What payroll software do you work in?', answer: 'We work inside your existing system — Xero Payroll, Sage Payroll, or similar. We do not require a platform change.' },
  { question: 'Who reviews the payroll run before it goes out?', answer: 'Your authorised internal reviewer confirms headcount, hours, and any changes before the run is submitted. We prepare the run; your team approves and submits it.' },
  { question: 'Do you calculate statutory payments like SSP or SMP?', answer: "Yes, we calculate SSP, SMP, and SPP according to the applicable rules and the information you provide about the employee's circumstances. Determining eligibility in an unusual case is a question for your advisor." },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Payroll Processing for UK Businesses', description: overview, slug: 'payroll/united-kingdom', basePath: '/services/', areaServed: ['GB'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Payroll Processing — United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function PayrollUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-kingdom"

        service="Payroll Processing"

        source={PATH}

        title="Talk About Your Payroll Run"

      />


      <PremiumHero
        region="united-kingdom" subtitle="For UK accountancy practices" title="Payroll Support for UK Practices" description="PAYE, RTI submission data, National Insurance, and auto-enrolment pension tracking inside your existing payroll software." cta={{ text: 'Talk Through Your Payroll Setup', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Payroll Processing</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Payroll Reviewed Before Every RTI Submission</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="payroll" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">UK compliance layer</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to UK Payroll</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{ukElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/payroll/united-kingdom" service="Payroll Processing" region="united-kingdom"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Submission and payment authority</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="payroll" regionSlug="united-kingdom" />

      <ServiceDepth serviceSlug="payroll" regionSlug="united-kingdom" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/payroll/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link><Link href="/services/payroll/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
          <Link href="/services/payroll/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Market Overview</Link><Link href="/services/bookkeeping/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Bookkeeping</Link><Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Payroll Guide</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero Payroll</Link></div>
      </div></section>

      <FurtherReading

        topics={['Payroll']}

        exclude="/services/payroll/united-kingdom"

        background="input"

      />

      <InquirySection region="united-kingdom" service="Payroll Processing" source="/services/payroll/united-kingdom" />

      <CTABanner title="Where Is Payroll Creating Friction?" description="Tell us your pay schedule, headcount, and which part of the payroll workflow is taking the most time." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
