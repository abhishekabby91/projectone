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
import ServiceIllustration from '@/components/service-illustration';
import FurtherReading from '@/components/further-reading';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/accounts-receivable/united-states';

export const metadata: Metadata = genMeta({
  title: 'Accounts Receivable Outsourcing for U.S. Businesses',
  description: 'Accounts receivable outsourcing for U.S. businesses: invoicing, cash application, customer reconciliations, aging review and agreed follow-up in QuickBooks Online or Xero.',
  path: PATH,
});

const overview = "Cash collected late is cash the business has earned but cannot use. The recurring receivables cycle covers scheduled invoicing, receipt application, aging review and follow-up on a defined cadence so overdue accounts receive consistent attention.";

const uSElements = [
  'USD invoicing from sales orders, contracts, or time sheets',
  'ACH and check payment application from the bank feed',
  'Weekly aging review with 30/60/90+ day buckets',
  'Follow-up sequences sent in your company name',
  'Customer account reconciliation against statements',
  'Month-end AR reconciliation to the general ledger',
];

const workflowSteps = [
  { title: 'Prepare and issue invoices', description: 'Use approved customer, contract, order or time records and the agreed billing calendar.' },
  { title: 'Apply incoming payments', description: 'Match ACH, checks and processor receipts to open invoices, including partial payments and short pays.' },
  { title: 'Review receivables aging', description: 'Group overdue balances by age and identify missing remittances, disputes or recurring delays.' },
  { title: 'Send agreed reminders', description: 'Run scheduled invoice reminders in the company name using the agreed message and escalation cadence.' },
  { title: 'Reconcile customer balances', description: 'Compare customer ledgers with statements and reconcile the AR subledger to the general ledger at month-end.' },
];

const faqs = [
  { question: 'Will your team contact our customers directly?', answer: 'For overdue-invoice follow-up, reminder emails can be sent in the company name from a shared or delegated inbox on a defined schedule. Phone collection calls typically remain with the internal team unless specifically agreed.' },
  { question: 'How does this work with U.S. payment methods?', answer: 'Payments arriving via ACH, check, or card processor sync are matched against open invoices in QuickBooks Online or Xero. Discrepancies are flagged for your review rather than applied automatically when something does not match cleanly.' },
  { question: 'What is DSO and does this actually reduce it?', answer: 'Days Sales Outstanding measures the average time it takes to collect after invoicing. Consistent aging reviews, timely invoicing, accurate payment application and agreed follow-up can help identify collection delays, but the effect on DSO depends on the business, customer terms and underlying causes of late payment.' },
  { question: 'How are receivables exceptions handled?', answer: 'Unmatched receipts, short payments, disputed invoices and proposed write-offs are listed with supporting detail so the appropriate person can review them before the account is changed or escalated.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounts Receivable for U.S. Businesses', description: overview, slug: 'accounts-receivable/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounts Receivable — United States', url: `${baseUrl}${PATH}` },
]);

export default function AccountsReceivableUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />


      <PremiumHero
        region="united-states" subtitle="Accounts Receivable for U.S. Businesses" title="Accounts Receivable Outsourcing for U.S. Businesses" description="Invoicing, payment application, aging review, and follow-up inside QuickBooks Online or Xero." cta={{ text: 'Talk Through Your AR Workflow', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounts Receivable</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Getting Paid Closer to Terms, Without Damaging the Relationship</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounts-receivable" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">U.S. specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to U.S. Accounts Receivable</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{uSElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounts-receivable/united-states" service="Accounts Receivable" region="united-states"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-sm font-semibold tracking-wide uppercase text-accent">The recurring cycle</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">How Accounts Receivable Support Works</h2>
            <p className="text-muted leading-relaxed">A repeatable process connects billing, incoming cash, overdue balances and month-end reconciliation, with exceptions documented for review.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflowSteps.map((step, i) => <Reveal key={step.title} delay={Math.min(i * 0.04, 0.16)}><article className="h-full rounded-xl border border-border/70 bg-input p-5">
              <div className="flex items-center gap-3 mb-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold">{i + 1}</span><h3 className="font-semibold text-primary leading-snug">{step.title}</h3></div>
              <p className="text-sm text-muted leading-6">{step.description}</p>
            </article></Reveal>)}
          </div>
        </div>
      </section>

      <RegionalContext serviceSlug="accounts-receivable" regionSlug="united-states" />

      <ServiceDepth serviceSlug="accounts-receivable" regionSlug="united-states" />

      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Related industry scope</h2>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/industries/cpa-firms" className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors">CPA Firm Accounting Support</Link>
            <Link href="/industries/real-estate" className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors">Real Estate Accounting</Link>
            <Link href="/industries/property-management" className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors">Property Management Accounting</Link>
            <Link href="/industries/hoa-accounting" className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors">HOA Accounting</Link>
            <Link href="/industries/ecommerce" className="font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors">E-commerce Accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3"><Link href="/services/accounts-payable/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Accounts Payable</Link><Link href="/resources/guides/outsourced-accounts-receivable-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">AR Guide</Link><Link href="/industries/ecommerce" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">E-Commerce</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounts Receivable']}

        exclude="/services/accounts-receivable/united-states"

        background="input"

      />

      <InquirySection region="united-states" service="Accounts Receivable" source="/services/accounts-receivable/united-states" />

      <CTABanner title="Where Is the Receivables Cycle Slowing Down?" description="Identify where receivables are slipping—invoice delays, unapplied cash or inconsistent follow-up—and the support scope can be built around the recurring cycle." cta={{ text: 'Discuss the AR Scope', href: '/contact' }} background="primary" />
    </main>
  );
}
