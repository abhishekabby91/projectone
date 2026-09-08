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

const PATH = '/services/accounts-receivable/australia';

export const metadata: Metadata = genMeta({
  title: 'Accounts Receivable Outsourcing, Australia',
  description: 'Australian accounts receivable support — AUD invoicing with GST, payment application, aging review, and follow-up sequences inside Xero or MYOB.',
  path: PATH,
});

const overview = "Australian receivables and the BAS are the same problem seen twice. On a non-cash basis, GST on an invoice falls due whether or not the customer has paid; on a cash basis, an unapplied receipt is revenue you have not yet recognised. We run the recurring sales ledger inside Xero or MYOB so both the cash position and the reported position stay right.";

const auElements = [
  'AUD invoicing with GST applied correctly',
  'Payment application from bank feed and BPAY',
  'Weekly aging review with 30/60/90+ day buckets',
  'Follow-up sequences sent in your company name',
  'Customer account reconciliation against statements',
  'Month-end AR reconciliation to the general ledger',
];

const delegated = [
  'Tax invoice preparation meeting ABN and GST requirements',
  'Receipt matching from the bank feed, including part payments',
  'Aged debtor review timed to the BAS period',
  'Reminder sequences sent in your company name',
  'Customer account reconciliation against remittance advice',
];

const retained = [
  'Credit limits, credit holds and terms decisions',
  'Approval to write off a balance, and any decreasing adjustment position',
  'Whether to refer an account to a collections agency',
  'Resolution of disputed balances and any GST treatment question',
];

const faqs = [
  { question: 'Will your team contact our customers directly?', answer: 'For overdue-invoice follow-up, yes — the AR team can send reminder emails in your company name from a shared or delegated inbox, on a schedule you define. Phone collection calls typically stay with your internal team unless specifically agreed.' },
  { question: 'How does GST work on our sales invoices?', answer: "Invoices are raised with GST applied according to your registration status and the nature of the supply. Judgement calls on unusual GST treatment — exports, GST-free supplies — stay with your accountant or BAS agent." },
  { question: 'What is DSO and does this actually reduce it?', answer: 'Days Sales Outstanding measures how long it takes to collect after invoicing. Consistent aging monitoring and follow-up typically reduces DSO by 5–15 days — the cash freed up is working capital the client already earned but had tied up in receivables.' },
  { question: 'What stays with our team?', answer: 'Credit decisions, write-off authority, and any judgment call about the customer relationship. We handle the process — invoicing, application, follow-up, reconciliation — and flag exceptions for your decision.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounts Receivable for Australian Businesses', description: overview, slug: 'accounts-receivable/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Receivable — Australia', url: `${baseUrl}${PATH}` },
]);

export default function AccountsReceivableAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="australia"

        service="Accounts Receivable"

        source={PATH}

        title="Talk About Your Aging Ledger"

      />


      <PremiumHero
        region="australia" subtitle="Accounts Receivable for Australian Businesses" title="Outsourced Accounts Receivable for Australian Businesses" description="Invoicing with correct GST, payment application, aging review, and follow-up inside Xero or MYOB." cta={{ text: 'Talk Through Your AR Workflow', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounts Receivable</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">A Sales Ledger the BAS Can Be Built From</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounts-receivable" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">AU specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to Australian Accounts Receivable</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{auElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounts-receivable/australia" service="Accounts Receivable" region="australia"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Credit and collections judgment</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="accounts-receivable" regionSlug="australia" />

      <ServiceDepth serviceSlug="accounts-receivable" regionSlug="australia" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/accounts-receivable/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link><Link href="/services/accounts-receivable/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link>
          <Link href="/services/accounts-receivable/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australia Market Overview</Link><Link href="/services/accounts-payable/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AU Accounts Payable</Link><Link href="/resources/guides/outsourced-accounts-receivable-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AR Guide</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">MYOB</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounts Receivable']}

        exclude="/services/accounts-receivable/australia"

        background="input"

      />

      <InquirySection region="australia" service="Accounts Receivable" source="/services/accounts-receivable/australia" />

      <CTABanner title="Are Debtors Building Up Ahead of 30 June?" description="Tell us where receivables are slipping — tax invoice queries, unapplied receipts, or follow-up that stops during the BAS period — and we can talk through a consistent cycle." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
