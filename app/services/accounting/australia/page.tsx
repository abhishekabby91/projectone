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

const PATH = '/services/accounting/australia';

export const metadata: Metadata = genMeta({
  title: 'Accounting Services for Australian Firms',
  description: 'Australian accounting operations — reconciliations, month-end close, journal entries and BAS-ready records prepared for your registered agent.',
  path: PATH,
});

const overview = 'In Australia the BAS cycle sets the rhythm, and everything downstream inherits whatever state the ledger is in when it comes around. If GST coding is wrong or the clearing accounts have not been agreed, that error does not stay in one period — it travels into the year-end file and has to be unpicked later at much greater cost. Our work is the disciplined middle layer that stops that happening: the reconciliations, the recurring journals, the GST control account checks, and the reporting packs, all prepared under AASB conventions and timed to your BAS periods. What arrives with your registered agent is a finished period, not a starting point.';

const auElements = [
  'GST coding reviewed and control accounts agreed each period',
  'Bank, debtor, creditor and clearing accounts brought to agreement',
  'Recurring accruals and provisions posted under AASB conventions',
  'Close timed to the BAS period rather than run separately from it',
  'BAS-ready records handed to your registered BAS agent',
  'Reporting packs formatted the way your agent already reviews them',
];

const delegated = [
  'The reconciliation work that has to be finished before anything can be reported',
  'Recurring journals, accruals and provisions posted to a documented checklist',
  'GST coding review and preparation of BAS-ready records',
  'Period reporting packs for your finance lead or registered agent',
];

const retained = [
  'Signing off the period once it has been reviewed',
  'Any treatment that turns on judgement rather than process',
  'BAS lodgment (registered BAS agent) and income tax lodgment (registered tax agent)',
  'Responsibility for the financial statements themselves',
];

const faqs = [
  { question: 'Do you lodge our BAS?', answer: 'No. We prepare BAS-ready records — GST coding reconciled, ledger current, supporting detail organised — so the lodgment itself is straightforward. Lodgment stays with your registered BAS agent, and income tax lodgment stays with your registered tax agent.' },
  { question: 'Which reporting standard do you work to?', answer: 'Reconciliations, journal entries, and reporting are structured around AASB conventions, which follow IFRS in Australia. Accounting policy decisions and judgement-based treatment stay with your registered agent or finance lead.' },
  { question: 'How does the close fit our BAS cycle?', answer: 'The close calendar can be set around your BAS periods, so the ledger is reconciled and GST-coded when the statement is prepared rather than being caught up afterwards.' },
  { question: 'Do you work inside our existing software?', answer: 'Yes — Xero, MYOB, or QuickBooks Online, whichever the client already uses. We work inside the existing setup rather than changing it.' },
  { question: 'Do you hold ATO portal access?', answer: 'No. Portal access and lodgment stay with your registered agent. Our work is the preparation and documentation behind what they review and lodge.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Accounting Services for Australian Businesses', description: overview, slug: 'accounting/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Services', url: `${baseUrl}/services` },
  { name: 'Accounting Services — Australia', url: `${baseUrl}${PATH}` },
]);

export default function AccountingAUPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <InquiryRail

        region="australia"

        service="Accounting Services"

        source={PATH}

        title="Talk About Your Close"

      />


      <PremiumHero
        region="australia" subtitle="Accounting Services for Australian Businesses" title="Outsourced Accounting Services for Australian Businesses" description="Reconciliations, month-end close, and BAS-ready records prepared for your registered agent to review." cta={{ text: 'Talk Through Your Close Process', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li>
          <li>Accounting Services</li><li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">Australia</li>
        </ol>
      </nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><>
          <div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Errors That Start in the Ledger Do Not Stay There</h2></div>
          <p className="text-lg text-muted leading-relaxed">{overview}</p>
        </></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Australian specifics</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">How the Close Is Built Around Your BAS Periods</h2></></Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5">{auElements.map((item, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/accounting/australia" service="Accounting Services" region="australia"><Check className="text-accent shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5" aria-hidden="true" /><span className="text-foreground text-sm sm:text-base leading-5 sm:leading-6">{item}</span></InquiryTrigger></li></Reveal>)}</ul>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Can be delegated</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">What we take on</h2><ul className="space-y-4">{delegated.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /><span className="text-foreground leading-6">{item}</span></li>)}</ul></></Reveal>
        <Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Stays with your registered agent</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">What stays yours</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></></Reveal>
      </div></section>

      <RegionalContext serviceSlug="accounting" regionSlug="australia" />

      <ServiceDepth serviceSlug="accounting" regionSlug="australia" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Accounting in other regions:</span>
          <Link href="/services/accounting/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link>
          <Link href="/services/accounting/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Market Overview</Link><Link href="/services/bookkeeping/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Bookkeeping</Link><Link href="/services/tax-preparation/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Tax Preparation</Link><Link href="/services/payroll/australia" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">Australian Payroll</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-input text-primary font-medium hover:bg-border transition-colors">MYOB Support</Link></div>
      </div></section>

      <FurtherReading

        topics={['Accounting']}

        exclude="/services/accounting/australia"

        background="input"

      />

      <InquirySection region="australia" service="Accounting Services" source="/services/accounting/australia" />

      <CTABanner title="Where Is Your Australian Close Getting Stuck?" description="Tell us what's falling behind—reconciliations, GST coding, or getting BAS-ready records together—and we can talk through what a practical support model looks like." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
