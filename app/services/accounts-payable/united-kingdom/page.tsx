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

const PATH = '/services/accounts-payable/united-kingdom';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounts Payable for UK Businesses',
  description: 'UK AP support — invoice entry, input VAT coding, Making Tax Digital-ready records, payment run preparation and vendor statement reconciliation.',
  path: PATH,
});

const overview = "UK AP has one detail a generic process misses: input VAT has to be coded correctly at entry, because a coding error surfaces later as a VAT return problem, not just a bookkeeping one. We process vendor invoices inside your existing system, code VAT to your registered scheme, and prepare payment runs — while payment execution and vendor approval stay with your team.";

const ukElements = [
  'Invoice entry and input VAT coding in Xero or Sage',
  'Purchase ledger entry with role-based approval routing',
  'Payment run preparation (BACS, Faster Payments)',
  'CIS (Construction Industry Scheme) deduction tracking where applicable',
  'Vendor statement reconciliation against the purchase ledger',
  'Digital record-keeping aligned with Making Tax Digital',
];

const delegated = [
  'Invoice receipt, entry, and VAT coding',
  'Vendor record maintenance',
  'Invoice routing to your approvers',
  'Payment batch preparation',
  'Monthly vendor statement reconciliation',
  'CIS deduction tracking for subcontractor payments',
];

const retained = [
  'Invoice approval authority',
  'Vendor selection and contract terms',
  'Payment execution and bank access',
  'VAT treatment judgement calls',
  'Dispute resolution with vendors',
];

const faqs = [
  { question: 'Do you initiate BACS or Faster Payments?', answer: 'No. We prepare the payment batch — vendor, amount, and due date — but an authorised person inside your organisation initiates the actual payment. We do not hold bank access.' },
  { question: 'How is VAT handled on purchase invoices?', answer: "We code input VAT against your registered VAT scheme as invoices are entered, so the records are ready for your accountant's VAT return preparation. Determining the correct VAT treatment for an unusual transaction stays with your accountant." },
  { question: 'Do you handle CIS deductions?', answer: 'Yes, where a client operates under the Construction Industry Scheme, we track and apply CIS deductions to subcontractor payments according to the verification status you provide. CIS registration and subcontractor verification stay with your practice or the client.' },
  { question: 'Does this support Making Tax Digital?', answer: 'The digital purchase-ledger records we maintain are structured to support MTD requirements where they apply. Your accountant remains responsible for the VAT return submission itself.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounts Payable for UK Businesses', description: overview, slug: 'accounts-payable/united-kingdom', basePath: '/services/', areaServed: ['GB'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Payable — United Kingdom', url: `${baseUrl}${PATH}` },
]);

export default function AccountsPayableUKPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-kingdom"

        service="Accounts Payable"

        source={PATH}

        title="Talk About Your Payables"

      />


      <PremiumHero
        region="united-kingdom" subtitle="Accounts Payable for UK Businesses" title="Outsourced Accounts Payable for UK Businesses" description="Invoice processing, input VAT coding, and payment run preparation inside your existing system." cta={{ text: 'Talk Through Your AP Workflow', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounts Payable</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United Kingdom</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">A Payables Queue Your Team Can Approve, Not Chase</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounts-payable" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">UK specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to UK Accounts Payable</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{ukElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounts-payable/united-kingdom" service="Accounts Payable" region="united-kingdom"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Approval and payment authority</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="accounts-payable" regionSlug="united-kingdom" />

      <ServiceDepth serviceSlug="accounts-payable" regionSlug="united-kingdom" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/accounts-payable/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link><Link href="/services/accounts-payable/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
          <Link href="/services/accounts-payable/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Market Overview</Link><Link href="/services/accounts-receivable/united-kingdom" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">UK Accounts Receivable</Link><Link href="/resources/guides/outsourced-accounts-payable-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AP Guide</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounts Payable']}

        exclude="/services/accounts-payable/united-kingdom"

        background="input"

      />

      <InquirySection region="united-kingdom" service="Accounts Payable" source="/services/accounts-payable/united-kingdom" />

      <CTABanner title="Where Is AP Creating a Backlog?" description="Tell us your invoice volume, current approval workflow, and which part of AP is taking the most manual time." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
