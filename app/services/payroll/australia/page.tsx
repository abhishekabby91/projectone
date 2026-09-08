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

const PATH = '/services/payroll/australia';

export const metadata: Metadata = genMeta({
  title: 'Payroll Support for Australian Firms',
  description: 'Client payroll for Australian firms — STP Phase 2 data, superannuation guarantee and PAYG withholding, prepared and checked before your firm submits.',
  path: PATH,
});

const overview = "Single Touch Payroll removed the quiet correction. Every pay event reports to the ATO on or before pay day, so an error is visible to the ATO and to the client’s employee the same afternoon — and superannuation runs on its own quarterly schedule, unrelated to the pay cycle, where a late payment is treated differently from every other late payment. For a firm running payroll across many clients that is a lot of small deadlines with no catch-up window. We prepare the gross-to-net calculation, the STP data and the superannuation tracking inside your existing software; your firm confirms and submits.";

const auElements = [
  'Single Touch Payroll (STP) Phase 2 reporting data prepared each pay run',
  'Superannuation guarantee calculations at the current rate',
  'PAYG withholding calculations',
  'Award and penalty rate application for award-covered employees',
  'Leave balance tracking (annual, personal/sick)',
  'Payroll journal entries into Xero or MYOB',
];

const delegated = [
  'Gross-to-net pay calculations',
  'STP Phase 2 data preparation',
  'PAYG withholding calculations',
  'Superannuation guarantee tracking',
  'Payslip preparation and payroll record-keeping',
  'Payroll GL reconciliation against the register',
];

const retained = [
  'Final review and approval of every payroll run',
  'STP lodgment to the ATO through your software or registered agent',
  'Superannuation payment to each fund',
  'Award classification decisions for new roles',
  'Bank access and payment authorisation',
];

const faqs = [
  { question: 'Do you lodge STP with the ATO?', answer: 'STP data preparation is what we handle — calculating and formatting the report for each pay run. Lodging it stays with your firm, through your payroll software or a registered agent.' },
  { question: 'Do you pay superannuation to the fund?', answer: "We track and calculate the superannuation guarantee liability each pay run. Remitting the payment to each employee's nominated fund is a banking transaction that stays with you." },
  { question: 'How do you handle award rates?', answer: 'Where employees are covered by a modern award, we apply the pay and penalty rates for the classification you provide. Determining the correct award classification for a role is an employment-law question for your advisor.' },
  { question: 'What payroll software do you work in?', answer: 'We work inside your existing system — Xero Payroll, MYOB, or similar. We do not require a platform change.' },
  { question: 'Does superannuation apply to casual and part-time staff?', answer: 'Superannuation guarantee calculations follow the employee classification and hours as you record them, in line with current ATO thresholds.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Payroll Processing for Australian Businesses', description: overview, slug: 'payroll/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Payroll Processing — Australia', url: `${baseUrl}${PATH}` },
]);

export default function PayrollAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="australia"

        service="Payroll Processing"

        source={PATH}

        title="Talk About Your Payroll Run"

      />


      <PremiumHero
        region="australia" subtitle="For Australian accounting firms" title="Payroll Support for Australian Firms" description="Client payroll prepared and checked — STP Phase 2 data, superannuation guarantee and PAYG withholding — before your firm submits." cta={{ text: 'Talk Through Your Payroll Setup', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Payroll Processing</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Payroll Reviewed Before Every STP Report</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="payroll" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">AU compliance layer</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to Australian Payroll</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{auElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/payroll/australia" service="Payroll Processing" region="australia"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Lodgment and payment authority</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="payroll" regionSlug="australia" />

      <ServiceDepth serviceSlug="payroll" regionSlug="australia" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/payroll/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link><Link href="/services/payroll/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link>
          <Link href="/services/payroll/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australia Market Overview</Link><Link href="/services/bookkeeping/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Bookkeeping</Link><Link href="/resources/guides/outsourced-payroll-processing-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Payroll Guide</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">MYOB</Link></div>
      </div></section>

      <FurtherReading

        topics={['Payroll']}

        exclude="/services/payroll/australia"

        background="input"

      />

      <InquirySection region="australia" service="Payroll Processing" source="/services/payroll/australia" />

      <CTABanner title="Where Is Payroll Creating Friction?" description="Tell us your pay schedule, headcount, and which part of the payroll workflow is taking the most time." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
