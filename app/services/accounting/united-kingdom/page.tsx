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

const PATH = '/services/accounting/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'Accounting Services for UK Practices',
  description: 'UK accounting operations — reconciliations, month-end close, journal entries and year-end accounts prepared for review by your practitioner.',
  path: PATH,
});

const overview = 'UK accounting work runs on two clocks: the recurring VAT cycle and the year-end accounts deadline at Companies House. The month-end close is what keeps both manageable. We handle the recurring layer between clean books and usable reporting — reconciliations, journal entries, close tasks, account maintenance, and management reports prepared under FRS 102 conventions — so your registered practitioner reviews a finished set of numbers rather than assembling one.';

const ukElements = [
  'Reconciliations across bank, credit card, and balance sheet accounts',
  'Journal entries prepared under FRS 102 conventions',
  'Month-end close aligned to the VAT quarter and the year-end date',
  'Year-end accounts preparation packaged for practitioner review',
  'Management reports formatted for UK internal reporting',
  'Nominal ledger maintenance consistent with year-end filing needs',
];

const delegated = [
  'Account reconciliations and journal entries',
  'Month-end and period-end close preparation',
  'Year-end accounts preparation and supporting workpapers',
  'Management reports for internal review or your practitioner',
];

const retained = [
  'Final review and approval of the close',
  'Accounting policy decisions and judgement-based adjustments',
  'Companies House and HMRC submission',
  'Sign-off responsibility for statutory accounts',
];

const faqs = [
  { question: 'Do you prepare year-end accounts?', answer: 'We prepare the underlying close and the supporting workpapers that year-end accounts are built from, structured so your registered practitioner can review and finalise them. The statutory filing itself stays with the practitioner responsible for it.' },
  { question: 'Which reporting standard do you work to?', answer: 'Reconciliations, journal entries, and reporting are structured around FRS 102 conventions, which apply to most UK entities. Where a business reports under IFRS, we work to the treatment its practitioner has set. Accounting policy decisions stay with your practitioner or finance lead.' },
  { question: 'How does this fit the VAT cycle?', answer: 'The close calendar can be set around your VAT quarters so the ledger is reconciled and current when the return is prepared. VAT return preparation and submission to HMRC stay with your registered practitioner.' },
  { question: 'Do you work inside our existing software?', answer: 'Yes — Xero, QuickBooks Online, or Sage, whichever the client already uses. We work inside the existing setup rather than changing it.' },
  { question: 'Do you hold HMRC or Companies House credentials?', answer: 'No. Portal access and submission stay with your registered practitioner. Our work is the preparation and documentation behind what they review and file.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounting Services for UK Businesses', description: overview, slug: 'accounting/united-kingdom', basePath: '/services/', areaServed: ['GB'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounting Services — United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function AccountingUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-kingdom"

        service="Accounting Services"

        source={PATH}

        title="Talk About Your Close"

      />


      <PremiumHero
        region="united-kingdom" subtitle="Accounting Services for UK Businesses" title="Outsourced Accounting Services for UK Businesses" description="Reconciliations, month-end close, and year-end accounts preparation structured for your registered practitioner to review." cta={{ text: 'Talk Through Your Close Process', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounting Services</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">A Close That Holds Up to the VAT Quarter and the Year End</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">UK specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to UK Accounting Operations</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{ukElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounting/united-kingdom" service="Accounting Services" region="united-kingdom"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring close work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Stays with your practitioner</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Review and submission</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="accounting" regionSlug="united-kingdom" />

      <ServiceDepth serviceSlug="accounting" regionSlug="united-kingdom" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Accounting in other regions:</span>
          <Link href="/services/accounting/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link>
          <Link href="/services/accounting/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Market Overview</Link><Link href="/services/bookkeeping/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Bookkeeping</Link><Link href="/services/tax-preparation/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Tax Preparation</Link><Link href="/services/payroll/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Payroll</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero Support</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounting']}

        exclude="/services/accounting/united-kingdom"

        background="input"

      />

      <InquirySection region="united-kingdom" service="Accounting Services" source="/services/accounting/united-kingdom" />

      <CTABanner title="Where Is Your UK Close Getting Stuck?" description="Tell us what's falling behind—reconciliations, the VAT-quarter close, or year-end preparation—and we can talk through what a practical support model looks like." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
