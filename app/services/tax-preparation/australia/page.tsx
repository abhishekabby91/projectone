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

const PATH = '/services/tax-preparation/australia';
export const metadata: Metadata = genMeta({ title: 'Tax Return Preparation, Australia', description: 'Company, trust and individual return preparation for Australian firms — workpapers, reconciliations and BAS-ready records for your agent’s lodgment.', path: PATH });

const overview = "The lodgment program looks like relief and behaves like a permanent queue. The preparation backlog grows while the registered agent in your firm is still the only person who can review the work, resolve the exceptions and take the client call. We prepare the returns and the workpapers underneath them, organised around the Australian financial year and the records the client already has, so the queue stops being the constraint. Advice, judgement and lodgment stay with your registered agent.";
const benefits = ['Source-document organisation and preparation schedules', 'Book-to-tax reconciliations and supporting workpapers', 'Income tax return preparation support', 'BAS preparation support built from organised GST records', 'Review-note and exception tracking before final sign-off', 'Structured handoffs to the registered tax or BAS agent responsible for advice and lodgment'];
const retained = ['Final tax or BAS advice and professional judgement', 'Final review and approval of returns or statements', 'Client-facing tax decisions and explanations', 'Lodgment responsibilities reserved for the appropriate registered agent', 'Decisions on unusual or uncertain tax treatment'];
const faqs = [
  { question: 'Can you support income tax preparation?', answer: 'Yes. We can organise source records, reconciliations, schedules and defined preparation work for income tax returns while the registered tax professional retains final review, advice and lodgment responsibility.' },
  { question: 'Can you support BAS preparation?', answer: 'Yes. We can organise the bookkeeping and GST records that feed BAS preparation, along with reconciliations and exception lists. Your registered BAS or tax agent remains responsible for advice and lodgment.' },
  { question: 'Can you help around EOFY?', answer: 'Yes. EOFY can create a review bottleneck when historic cleanup and current preparation compete for the same people. Separating preparation support from final review can help keep the queue moving.' },
  { question: 'Do you provide tax advice?', answer: 'No. The support is designed around preparation, documentation and workflow. Tax advice, professional judgement and final lodgment remain with the responsible registered professional.' },
];
const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Tax Preparation Support for Australian Businesses', description: overview, slug: 'tax-preparation/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Tax Preparation — Australia', url: `${baseUrl}${PATH}` }]);

export default function TaxPrepAUPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <InquiryRail
      region="australia"
      service="Tax Preparation"
      source={PATH}
      title="Talk Through Your Season"
    />

    <PremiumHero
        region="australia" subtitle="For Australian accounting firms" title="Tax Preparation Support for Australian Firms" description="Company, trust and individual returns prepared to your templates. You review, you advise, your registered agent lodges." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />
    <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5">Services</Link></li><li aria-hidden="true">/</li><li>Tax Preparation</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">Australia</li></ol></nav>
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Move Preparation Forward Before EOFY Review</h2><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="tax-preparation" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-16"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Can Move Before Final Review</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((b, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/tax-preparation/australia" service="Tax Preparation" region="australia"><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p></InquiryTrigger></li></Reveal>)}</ul></div></section>
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Usually retained</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Judgement, advice and final lodgment</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Australian workflow</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Prepare around the agent's review process</h2><p className="text-white/85 leading-7">Start with the existing income tax or BAS checklist, source-document process and review notes. Define what is ready to prepare, what needs clarification and what should be escalated before the file reaches the registered professional. The aim is to make EOFY and recurring preparation easier to review, not to replace professional judgement.</p></></Reveal></div></section>
    <section className="w-full py-16 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><h2 className="font-serif text-3xl font-bold text-primary mb-5">Keep the Australian workflow connected</h2>
        <div className="mb-5 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/tax-preparation/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
          <Link href="/services/tax-preparation/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Australia Market Overview</Link><Link href="/services/bookkeeping/australia" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Australian Bookkeeping</Link><Link href="/services/audit-support/australia" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Australian Audit Support</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Xero</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">MYOB</Link></div></div></section>
    <RegionalContext serviceSlug="tax-preparation" regionSlug="australia" />

    <ServiceDepth serviceSlug="tax-preparation" regionSlug="australia" />

    <FAQSection subtitle="Questions" items={faqs} columns={2} />
    <FurtherReading
      topics={['Tax']}
      exclude="/services/tax-preparation/australia"
      background="input"
    />
    <InquirySection region="australia" service="Tax Preparation" source="/services/tax-preparation/australia" />

    <CTABanner title="Where Is the Australian Tax Queue Getting Stuck?" description="Tell us whether the pressure is source documents, bookkeeping cleanup, BAS preparation or EOFY review capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
  </main>;
}
