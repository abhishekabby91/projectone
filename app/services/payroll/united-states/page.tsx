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
import InquiryTrigger from '@/components/inquiry-trigger';
import InquiryRail from '@/components/inquiry-rail';
import ServiceIllustration from '@/components/service-illustration';
import FurtherReading from '@/components/further-reading';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/payroll/united-states';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Payroll Support for U.S. CPA Firms',
  description: 'Client payroll for CPA firms — federal and state withholding, FICA, FUTA/SUTA and W-2 record-keeping, prepared and checked before your firm approves the run.',
  path: PATH,
});

const overview = 'Payroll is the service where a mistake is visible to somebody outside the engagement within a day. A miscalculated withholding does not create rework; it creates your client’s employee, paid wrong, asking your client why. Running it across many clients at once multiplies the exposure without multiplying the fee. We handle the recurring calculation, withholding and record-keeping each cycle inside the payroll software you already use, with a named internal reviewer confirming the run before it reaches your firm.';

const uSElements = [
  'Federal income tax withholding (W-4 based)',
  'State income tax withholding where applicable',
  'FICA: Social Security and Medicare calculations',
  'FUTA/SUTA unemployment tax tracking',
  'W-2 and 1099-NEC preparation support at year-end',
  'Payroll journal entries into QuickBooks Online or Xero',
];

const delegated = [
  'Gross pay calculations (salary, hourly, overtime)',
  'Federal and state withholding calculations',
  'Deduction tracking (benefits, garnishments)',
  'Payslip preparation and payroll record-keeping',
  'Payroll GL reconciliation against the register',
];

const retained = [
  'Final review and approval of every payroll run',
  'Payroll tax return filing (Form 941, 940, state returns)',
  'Employment classification decisions (W-2 vs. 1099)',
  'Benefits design and HR compliance matters',
  'Bank access and payment authorization',
];

const faqs = [
  { question: 'Do you file our payroll tax returns?', answer: 'Payroll processing — the calculations and record-keeping — is what we handle. Filing the actual returns (Form 941, Form 940, state unemployment returns) can be included in scope or stay with your accountant, depending on what you agree during onboarding. We do not hold filing authority by default.' },
  { question: 'What payroll software do you work in?', answer: 'We work inside your existing system — QuickBooks Payroll, Xero Payroll, Gusto, ADP, or similar. We do not require a platform change.' },
  { question: 'Who reviews the payroll run before it goes out?', answer: 'Your authorized internal reviewer confirms headcount, hours, and any changes before the run is submitted. We prepare the run; your team approves and submits it.' },
  { question: 'Can you handle both W-2 employees and 1099 contractors?', answer: 'Yes, though they are processed differently. Whether someone should be classified as an employee or contractor is a legal and tax question that stays with your advisor — we process payroll according to the classification you provide.' },
  { question: 'What happens at year-end?', answer: 'We support W-2 and 1099-NEC preparation from your payroll records — organizing the data, reconciling totals against the payroll register, and preparing the forms for your review and distribution.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Payroll Processing for U.S. Businesses', description: overview, slug: 'payroll/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Payroll Processing — United States', url: `${baseUrl}${PATH}` },
]);

export default function PayrollUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-states"

        service="Payroll Processing"

        source={PATH}

        title="Talk About Your Payroll Run"

      />


      <PremiumHero
        region="united-states" subtitle="For U.S. CPA firms" title="Payroll Support for CPA Firms" description="Client payroll runs prepared and checked — federal and state withholding, FICA and FUTA/SUTA — before your firm approves them." cta={{ text: 'Talk Through Your Payroll Setup', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Payroll Processing</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Payroll That Runs on Your Calendar, Reviewed Before It Goes Out</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="payroll" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">U.S. compliance layer</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to U.S. Payroll</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{uSElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/payroll/united-states" service="Payroll Processing" region="united-states"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Review and filing authority</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="payroll" regionSlug="united-states" />

      <ServiceDepth serviceSlug="payroll" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/payroll/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link><Link href="/services/payroll/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/services/accounting/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Accounting Services</Link><Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Payroll Guide</Link><Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">QuickBooks Payroll</Link></div>
      </div></section>

      <FurtherReading

        topics={['Payroll']}

        exclude="/services/payroll/united-states"

        background="input"

      />

      <InquirySection region="united-states" service="Payroll Processing" source="/services/payroll/united-states" />

      <CTABanner title="Where Is Payroll Creating Friction?" description="Tell us your pay schedule, headcount, and which part of the payroll workflow is taking the most time." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
