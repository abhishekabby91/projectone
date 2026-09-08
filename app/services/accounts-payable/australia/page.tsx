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

const PATH = '/services/accounts-payable/australia';

export const metadata: Metadata = genMeta({
  title: 'Accounts Payable Outsourcing, Australia',
  description: 'Australian AP support — invoice entry, GST input tax credit coding, payment run preparation and vendor statement reconciliation in Xero or MYOB.',
  path: PATH,
});

const overview = "Australian AP has one detail a generic process misses: GST input tax credits have to be coded against the vendor's ABN and registration status at entry, not fixed up later at BAS time. We process vendor invoices inside your existing system, code GST correctly, and prepare payment runs — while payment execution and vendor approval stay with your team.";

const auElements = [
  'Invoice entry and GST input tax credit coding in Xero or MYOB',
  "ABN and GST registration status verification at vendor setup",
  'Payment run preparation (EFT, BPAY)',
  'RCTI (Recipient Created Tax Invoice) handling where applicable',
  'Vendor statement reconciliation against the purchase ledger',
  'AP aging report maintenance for cash-flow visibility',
];

const delegated = [
  'Invoice receipt, entry, and GST coding',
  'Vendor record maintenance',
  'Invoice routing to your approvers',
  'Payment batch preparation (EFT, BPAY)',
  'Monthly vendor statement reconciliation',
  'RCTI invoice processing where an arrangement exists',
];

const retained = [
  'Invoice approval authority',
  'Vendor selection and contract terms',
  'Payment execution and bank access',
  'GST treatment judgement calls',
  'Dispute resolution with vendors',
];

const faqs = [
  { question: 'Do you initiate EFT or BPAY payments?', answer: 'No. We prepare the payment batch — vendor, amount, and due date — but an authorised person inside your organisation initiates the actual payment. We do not hold bank access.' },
  { question: 'How is GST handled on purchase invoices?', answer: "We code GST input tax credits against the vendor's ABN and GST registration status as invoices are entered. Determining GST treatment for an unusual transaction stays with your accountant or BAS agent." },
  { question: 'Do you handle RCTI arrangements?', answer: 'Where a client operates under a Recipient Created Tax Invoice arrangement, we process the invoices according to the agreement in place. Setting up or verifying an RCTI arrangement stays with your firm.' },
  { question: 'Can this work with three-way matching?', answer: 'Yes. Where purchase orders exist, invoices are matched against PO line items and receiving records before being routed for approval.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounts Payable for Australian Businesses', description: overview, slug: 'accounts-payable/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Payable — Australia', url: `${baseUrl}${PATH}` },
]);

export default function AccountsPayableAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="australia"

        service="Accounts Payable"

        source={PATH}

        title="Talk About Your Payables"

      />


      <PremiumHero
        region="australia" subtitle="Accounts Payable for Australian Businesses" title="Outsourced Accounts Payable for Australian Businesses" description="Invoice processing, GST input tax credit coding, and payment run preparation inside your existing system." cta={{ text: 'Talk Through Your AP Workflow', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounts Payable</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Australia</li>
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
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">AU specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to Australian Accounts Payable</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{auElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounts-payable/australia" service="Accounts Payable" region="australia"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Approval and payment authority</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="accounts-payable" regionSlug="australia" />

      <ServiceDepth serviceSlug="accounts-payable" regionSlug="australia" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/accounts-payable/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link><Link href="/services/accounts-payable/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link>
          <Link href="/services/accounts-payable/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australia Market Overview</Link><Link href="/services/accounts-receivable/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AU Accounts Receivable</Link><Link href="/resources/guides/outsourced-accounts-payable-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AP Guide</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">MYOB</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounts Payable']}

        exclude="/services/accounts-payable/australia"

        background="input"

      />

      <InquirySection region="australia" service="Accounts Payable" source="/services/accounts-payable/australia" />

      <CTABanner title="Where Is AP Creating a Backlog?" description="Tell us your invoice volume, current approval workflow, and which part of AP is taking the most manual time." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
