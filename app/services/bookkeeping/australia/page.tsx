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

const PATH = '/services/bookkeeping/australia';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping, Australian Firms',
  description: 'Client bookkeeping for Australian firms — GST coding, reconciliations and BAS-ready records prepared through the quarter, to your templates, for your review.',
  path: PATH,
});

const overview = "Across a client base, bookkeeping is the work that quietly consumes the people who were meant to be reviewing it. We take the recurring layer — posting, GST coding, reconciling the control account rather than plugging it, chasing what the bank feed cannot explain — so your qualified people spend their hours on review and advice. Your firm keeps the client conversation, the treatment decisions, and the lodgment.";

const benefits = [
  'Transaction processing, coding and account maintenance',
  'Bank and card reconciliations with exception follow-up',
  'GST records organised for BAS preparation and review',
  'Payroll-related bookkeeping and account reconciliation',
  'Month-end schedules aligned with the Australian financial year',
  'Xero, MYOB and other supported accounting-platform workflows',
];

const delegated = [
  'Recurring transaction processing and categorisation',
  'Bank and card reconciliations',
  'GST coding and supporting schedules',
  'Payroll-related accounting entries and reconciliations',
  'Month-end preparation and first-level checks',
];

const retained = [
  'Final review and approval of the books',
  'Tax or BAS advice and professional judgement',
  'Decisions about unusual GST or accounting treatment',
  'Final lodgment responsibility where a registered agent is required',
  'Control over access, approvals and business decisions',
];

const process = [
  { title: 'Map the existing Australian workflow', text: 'We look at the accounting system, chart of accounts, GST setup, payroll-related entries, reconciliation status and month-end routine before defining the work.' },
  { title: 'Separate preparation from advice', text: 'Repeatable bookkeeping and reconciliation work can be delegated, while BAS or tax advice, unusual treatment decisions, approvals and lodgment responsibility remain with the appropriate business or registered professional.' },
  { title: 'Follow the agreed routine', text: 'The delivery team works inside the authorised system, follows documented instructions and flags exceptions or missing information instead of guessing at treatment.' },
  { title: 'Prepare the next review point', text: 'Reconciliations, supporting schedules and open items are organised so the accountant or internal reviewer can see what is complete and what still needs attention.' },
];

const faqs = [
  { question: 'Can you support BAS preparation?', answer: 'Yes. We can keep the underlying bookkeeping, GST records, reconciliations and supporting schedules organised for BAS review. Your registered BAS or tax agent remains responsible for advice and lodgment where required.' },
  { question: 'Do you support Xero and MYOB?', answer: 'Yes. Both are supported platforms. We focus on fitting the workflow to your existing chart of accounts, reporting, approvals and month-end routine rather than changing systems without a reason.' },
  { question: 'Can you help if the books are behind before EOFY?', answer: 'Yes. Catch-up work can be scoped separately from the recurring monthly process. That makes it easier to fix historic issues while establishing a routine that keeps the current period moving.' },
  { question: 'Do you handle payroll bookkeeping?', answer: 'We can support the accounting work around payroll, including entries, reconciliations and records. Payroll approvals, employee decisions and statutory responsibilities remain with the appropriate business or payroll professional.' },
  { question: 'Will our accountant still review the work?', answer: 'Yes. The delivery team can prepare defined recurring work while your accountant or internal reviewer retains final review, approval and professional judgement.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Bookkeeping Services for Australian Businesses', description: overview, slug: 'bookkeeping/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping — Australia', url: `${baseUrl}${PATH}` },
]);

export default function BookkeepingAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InquiryRail
        region="australia"
        service="Bookkeeping"
        source={PATH}
        title="Talk About Your Books"
      />

      <PremiumHero
        region="australia" subtitle="For Australian accounting firms" title="Bookkeeping Support for Australian Firms" description="Client bookkeeping and BAS-ready records, prepared to your templates and your quarter — so your people review rather than process." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5">Services</Link></li><li aria-hidden="true">/</li><li>Bookkeeping</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">Australia</li></ol></nav>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Books That Hold Up at BAS Time</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="bookkeeping" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-16"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Work Behind a Well-Kept Set of Australian Books</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/bookkeeping/australia" service="Bookkeeping" region="australia"><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{item}</p></InquiryTrigger></li></Reveal>)}</ul></div></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Repeatable preparation work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Review, judgement and approvals</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal></div></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Workflow</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">A Bookkeeping Process Built Around BAS and Month-End</h2></></Reveal><ol className="grid grid-cols-1 md:grid-cols-2 gap-6">{process.map((step, i) => <Reveal key={step.title}><li className="bg-white rounded-2xl border border-border/70 p-7"><div className="text-sm font-bold text-accent mb-3">0{i + 1}</div><h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3><p className="text-muted leading-7">{step.text}</p></li></Reveal>)}</ol></div></section>
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Useful next steps</h2></></Reveal>
        <div className="mb-6 p-4 bg-input rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
          <Link href="/services/bookkeeping/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australia Market Overview</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">MYOB</Link><Link href="/services/tax-preparation/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Tax Preparation</Link><Link href="/services/audit-support/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Audit Support</Link></div></div></section>
      <RegionalContext serviceSlug="bookkeeping" regionSlug="australia" />

      <ServiceDepth serviceSlug="bookkeeping" regionSlug="australia" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <FurtherReading
        topics={['Bookkeeping']}
        exclude="/services/bookkeeping/australia"
        background="input"
      />
      <InquirySection region="australia" service="Bookkeeping" source="/services/bookkeeping/australia" />

      <CTABanner title="Where Is Your Australian Bookkeeping Process Getting Stuck?" description="Tell us whether the pressure is in reconciliations, GST records, catch-up work, payroll accounting or month-end review." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
