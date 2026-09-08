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

const PATH = '/services/accounting/united-states';

export const metadata: Metadata = genMeta({
  title: 'Accounting Services for U.S. CPA Firms',
  description: 'U.S. accounting operations — GAAP reconciliations, month-end close, journal entries and management reporting your CPA can review rather than rebuild.',
  path: PATH,
});

const overview = 'Accounting operations sit between clean books and usable reporting. We handle the recurring work in between — account reconciliations, journal entries, month-end close tasks, account maintenance, and management reports structured around U.S. GAAP conventions — so your team or CPA can review a finished close package instead of assembling one.';

const uSElements = [
  'Reconciliations across bank, credit card, and balance sheet accounts',
  'Journal entries following U.S. GAAP treatment',
  'Month-end close aligned to a calendar or fiscal-year close',
  'Management reports (P&L, balance sheet) formatted for CPA review',
  'Chart-of-accounts maintenance consistent with U.S. filing needs',
  'Documented workpapers supporting each close cycle',
];

const delegated = [
  'Account reconciliations and journal entries',
  'Month-end and period-end close preparation',
  'Account maintenance and close-checklist documentation',
  'Management reports for internal review or your CPA',
];

const retained = [
  'Final review and approval of the close',
  'Judgment-based reclassifications and accounting policy decisions',
  'Tax return preparation and filing (a separate, related service)',
  'Sign-off responsibility for financial statements',
];

const faqs = [
  { question: 'Is this the same as bookkeeping?', answer: 'Bookkeeping covers day-to-day transaction recording and reconciliations. Accounting Services covers the layer above it: month-end close, journal entries, account maintenance, and management reporting that turns clean books into a usable close package.' },
  { question: 'Do you follow U.S. GAAP?', answer: 'Yes. Reconciliations, journal entries, and reporting are structured around U.S. GAAP conventions. Judgment-based accounting policy decisions stay with your CPA or controller.' },
  { question: 'Do you work inside our existing software?', answer: 'Yes — QuickBooks Online, Xero, Sage, or NetSuite, whichever the client already uses.' },
  { question: 'How does this connect to tax preparation?', answer: 'A clean, GAAP-consistent close makes tax return preparation faster for your CPA or EA. We do not prepare or file the return as part of this service, but the close package is built to hand off cleanly to whoever does.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounting Services for U.S. Businesses', description: overview, slug: 'accounting/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounting Services — United States', url: `${baseUrl}${PATH}` },
]);

export default function AccountingUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-states"

        service="Accounting Services"

        source={PATH}

        title="Talk About Your Close"

      />


      <PremiumHero
        region="united-states" subtitle="Accounting Services for U.S. Businesses" title="Outsourced Accounting Services for U.S. Businesses" description="GAAP-based reconciliations, month-end close, and management reporting your CPA can review with confidence." cta={{ text: 'Talk Through Your Close Process', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounting Services</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">A Close Package Your CPA Can Review, Not Rebuild</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">U.S. specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Applies to U.S. Accounting Operations</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{uSElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounting/united-states" service="Accounting Services" region="united-states"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Recurring close work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Review and sign-off</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="accounting" regionSlug="united-states" />

      <ServiceDepth serviceSlug="accounting" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/accounting/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link><Link href="/services/accounting/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/services/tax-preparation/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Tax Preparation</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounting']}

        exclude="/services/accounting/united-states"

        background="input"

      />

      <InquirySection region="united-states" service="Accounting Services" source="/services/accounting/united-states" />

      <CTABanner title="Where Is Your Close Process Getting Stuck?" description="Tell us what's falling behind—reconciliations, journal entries, or the reporting package—and we can talk through what a practical support model looks like." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
