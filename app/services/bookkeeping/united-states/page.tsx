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

const PATH = '/services/bookkeeping/united-states';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Bookkeeping for U.S. CPA Firms',
  description: 'Client bookkeeping and month-end close for CPA firms — transaction processing, reconciliations and state activity tracking, prepared to your templates.',
  path: PATH,
});

const overview = 'Client bookkeeping is the work that expands to fill whatever time a firm has, and it is rarely the work that carries the fee. We take the recurring layer — posting, reconciling, chasing the receipt the bank feed cannot explain, keeping state-level activity visible as it posts — so your licensed people review rather than process. Your firm keeps the client conversation, the judgement calls and the sign-off.';

const benefits = [
  'Transaction recording, categorization and account maintenance',
  'Bank and credit-card reconciliations with exception follow-up',
  'Month-end close preparation and account review schedules',
  'Cleanup of historical transactions and unreconciled balances',
  'Accounts payable and receivable support where included in scope',
  'Reporting packages organized for management or CPA review',
];

const delegated = [
  'Recurring transaction processing and categorization',
  'Bank and credit-card reconciliations',
  'Supporting schedules and account maintenance',
  'AP/AR processing when included in the engagement',
  'Month-end preparation and first-level checks',
];

const retained = [
  'Final review and approval of the books',
  'Policy decisions and unusual accounting judgments',
  'Client-facing decisions and tax advice',
  'Final tax return sign-off or audit opinion',
  'Control over user access, approvals and business decisions',
];

const process = [
  { title: 'Start with the books you actually have', text: 'We look at the accounting system, chart of accounts, reconciliation status, close calendar and existing documentation. The aim is to understand where the work is getting stuck, not assume the books follow a textbook process.' },
  { title: 'Decide what should leave your team', text: 'We separate repeatable preparation work from the approvals, judgment and decisions that stay inside your firm. This keeps delegation from becoming a loss of control.' },
  { title: 'Run the agreed routine', text: 'The delivery team works inside the authorized system, follows the documented process and flags exceptions instead of silently making assumptions.' },
  { title: 'Make review easier', text: 'Completed work is organized for review, with unresolved items and questions visible. The goal is not simply to finish transactions; it is to leave the reviewer with a cleaner next step.' },
];

const faqs = [
  { question: 'Do you work with QuickBooks Online?', answer: 'Yes. QuickBooks Online is one of the platforms we support, along with Xero and other systems listed on our technology pages.' },
  { question: 'Can you clean up old bookkeeping problems?', answer: 'Yes. We start by identifying what is actually wrong: unreconciled accounts, coding inconsistencies, duplicate or missing transactions, unclear opening balances or missing support. Then the cleanup can be given a defined scope rather than becoming an open-ended project.' },
  { question: 'Will our CPA still control the books?', answer: 'Yes. The engagement can be structured so your CPA or internal reviewer keeps approval and review control while the delivery team handles defined preparation work.' },
  { question: 'What if our books are already behind?', answer: 'That is common enough to plan for. We can separate catch-up or cleanup work from the recurring process so the team is not trying to fix old problems and maintain the current month with the same unclear workflow.' },
  { question: 'How often can bookkeeping be performed?', answer: 'Frequency should follow transaction volume and your close calendar. Weekly or monthly processing can both work; the important part is choosing a cadence that keeps reconciliations and review from becoming a last-minute exercise.' },
  { question: 'What happens during month-end close?', answer: 'The workflow typically includes completing transactions, reconciling accounts, reviewing exceptions, preparing supporting schedules and organizing the reporting package for review. The exact checklist should follow your existing close process.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Bookkeeping Services for U.S. Businesses', description: overview, slug: 'bookkeeping/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Bookkeeping — United States', url: `${baseUrl}${PATH}` },
]);

export default function BookkeepingUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="united-states"

        service="Bookkeeping"

        source={PATH}

        title="Talk About Your Books"

      />


      <PremiumHero
        region="united-states" subtitle="For U.S. CPA firms" title="Bookkeeping Support for CPA Firms" description="Client bookkeeping, prepared to your chart of accounts and your close calendar — so your people review rather than process." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Bookkeeping</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">United States</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Bookkeeping That Leaves Less for the Reviewer to Chase</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="bookkeeping" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-16"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Work Behind a Clean Month-End</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-xl border border-border/70 shadow-[0_1px_3px_rgba(15,23,42,0.04)] transition-colors hover:border-primary/40 h-full" source="/services/bookkeeping/united-states" service="Bookkeeping" region="united-states"><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{item}</p></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Repeatable preparation work</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Usually retained</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Review, judgment and approvals</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Workflow</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">A Bookkeeping Process Your Team Can Actually Review</h2></></Reveal><ol className="grid grid-cols-1 md:grid-cols-2 gap-6">{process.map((step, i) => <Reveal key={step.title} delay={Math.min(i * 0.06, 0.2)}><li className="bg-white rounded-2xl border border-border/70 p-7"><div className="text-sm font-bold text-accent mb-3">0{i + 1}</div><h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3><p className="text-muted leading-7">{step.text}</p></li></Reveal>)}</ol></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary">If bookkeeping is the bottleneck, start here</h2></></Reveal>
        <div className="mb-6 p-4 bg-input rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/bookkeeping/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
          <Link href="/services/bookkeeping/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="australia" decorative />Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/technology/quickbooks" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">QuickBooks</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Xero</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/resources/guides/outsourced-bookkeeping-cost-guide" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Bookkeeping Cost Guide</Link></div></div></section>

      <RegionalContext serviceSlug="bookkeeping" regionSlug="united-states" />

      <ServiceDepth serviceSlug="bookkeeping" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <FurtherReading
        topics={['Bookkeeping']}
        exclude="/services/bookkeeping/united-states"
        background="input"
      />
      <InquirySection region="united-states" service="Bookkeeping" source="/services/bookkeeping/united-states" />

      <CTABanner title="Where Is Your Bookkeeping Process Getting Stuck?" description="Tell us what is falling behind—reconciliations, cleanup, AP/AR, month-end or review—and we can start from the actual workflow." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
