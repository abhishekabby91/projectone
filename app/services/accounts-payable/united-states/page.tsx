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

const PATH = '/services/accounts-payable/united-states';

export const metadata: Metadata = genMeta({
  title: 'Accounts Payable Outsourcing, U.S.',
  description: 'U.S. AP support — invoice entry, PO matching, ACH and check payment run preparation, 1099-NEC vendor tracking and statement reconciliation.',
  path: PATH,
});

const overview = 'AP backlogs in the U.S. usually come down to the same thing: invoices sitting in an inbox nobody has entered, matched, or routed. We process vendor invoices inside your existing system, prepare payment runs for ACH, check, or wire, and track 1099 vendor activity through the year — while payment authorization and bank access stay with your team.';

const uSElements = [
  'Invoice entry and PO matching in QuickBooks Online, Xero, or NetSuite',
  'ACH, check, and wire payment run preparation',
  '1099-NEC vendor activity tracking for year-end reporting',
  'Vendor statement reconciliation against the AP ledger',
  'Sales/use tax coding on vendor invoices where applicable',
  'AP aging report maintenance for cash-flow visibility',
];

const delegated = [
  'Invoice receipt, entry, and PO/three-way matching',
  'Vendor record maintenance',
  'Invoice routing to your approvers',
  'Payment batch preparation (ACH, check, wire)',
  'Monthly vendor statement reconciliation',
  '1099 vendor tracking throughout the year',
];

const retained = [
  'Invoice approval authority',
  'Vendor selection and contract terms',
  'Payment execution and bank access',
  'Dispute resolution with vendors',
  'Write-off decisions',
];

const faqs = [
  { question: 'Do you initiate ACH or wire payments?', answer: 'No. We prepare the payment batch — vendor, amount, and due date — but an authorized person inside your organization initiates the actual ACH, check, or wire payment. We do not hold bank access.' },
  { question: 'How do you track 1099 vendors?', answer: 'We flag vendors that meet the general threshold for 1099-NEC reporting as invoices are entered through the year, so year-end 1099 preparation starts from accurate records rather than a scramble in January. Final determination of reportable payments and filing stays with your CPA.' },
  { question: 'Can this work with three-way matching?', answer: 'Yes. Where purchase orders exist, invoices are matched against PO line items and receiving records before being routed for approval.' },
  { question: 'What about state sales/use tax on vendor invoices?', answer: 'Where applicable, vendor invoices are coded to reflect sales or use tax treatment consistent with your existing chart of accounts. Determining nexus and filing obligations stays with your tax advisor.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounts Payable for U.S. Businesses', description: overview, slug: 'accounts-payable/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Payable — United States', url: `${baseUrl}${PATH}` },
]);

export default function AccountsPayableUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-states"

        service="Accounts Payable"

        source={PATH}

        title="Talk About Your Payables"

      />


      <PremiumHero
        region="united-states" subtitle="Accounts Payable for U.S. Businesses" title="Outsourced Accounts Payable for U.S. Businesses" description="Invoice processing, ACH/check payment preparation, and 1099 vendor tracking inside your existing system." cta={{ text: 'Talk Through Your AP Workflow', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounts Payable</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
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
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">U.S. specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to U.S. Accounts Payable</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{uSElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounts-payable/united-states" service="Accounts Payable" region="united-states"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring processing work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Approval and payment authority</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">What it covers</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What &ldquo;Outsourced Accounts Payable&rdquo; Includes, and Where It Stops
            </h2>
          </></Reveal>
          <Reveal className="space-y-4">
            <>
              <p className="text-base md:text-lg text-muted leading-relaxed">Accounts payable outsourcing is usually sold as a single thing and bought as a very different one, so it is worth naming the pieces. On a typical U.S. engagement the delegated work runs: invoice intake and entry, coding against the chart of accounts, purchase-order and receipt matching where a PO process exists, routing invoices into your approval chain and chasing the ones that stall, preparing the payment run, maintaining vendor records and W-9 data, tracking 1099-NEC amounts through the year, and reconciling vendor statements so disputes surface before they age.</p>
              <div className="overflow-hidden rounded-xl border border-border bg-input">
                <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">Payment release is not part of it</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">We prepare a payment run. We do not hold banking credentials, initiate transfers, or release payments, and we would decline an engagement structured that way. The approval and the release stay inside your own controls, with your own people, on your own bank.</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">That is not a limitation to work around &mdash; it is most of the point. Separating the person who prepares a payment from the person who authorises it is the basic control that makes payables safe to delegate at all.</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">What tends to decide whether this works is not invoice volume. It is whether the approval chain is real. Where approvals already run through the system, an outside team can keep the queue clean and the aging honest. Where approvals happen by hallway conversation and get recorded afterwards, the queue will keep stalling no matter who is entering the invoices, and the first useful piece of work is usually documenting the chain rather than staffing it.</p>
            </>
          </Reveal>
        </div>
      </section>

      <RegionalContext serviceSlug="accounts-payable" regionSlug="united-states" />

      <ServiceDepth serviceSlug="accounts-payable" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/accounts-payable/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link><Link href="/services/accounts-payable/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/services/accounts-receivable/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Accounts Receivable</Link><Link href="/resources/guides/outsourced-accounts-payable-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AP Guide</Link><Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">QuickBooks</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounts Payable']}

        exclude="/services/accounts-payable/united-states"

        background="input"

      />

      <InquirySection region="united-states" service="Accounts Payable" source="/services/accounts-payable/united-states" />

      <CTABanner title="Where Is AP Creating a Backlog?" description="Tell us your invoice volume, current approval workflow, and which part of AP is taking the most manual time." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
