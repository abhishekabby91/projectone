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

const PATH = '/services/tax-preparation/united-kingdom';
export const metadata: Metadata = genMeta({ title: 'Corporation Tax & Self Assessment, UK', description: 'UK tax preparation for Self Assessment and Corporation Tax — organised workpapers, reconciliations and review-ready files for your practitioner.', path: PATH });

const overview = "January is not a resourcing problem a practice can hire its way out of. The volume arrives, it arrives at once, and the people who can review it are the same people who could have prepared it. We prepare — year-end accounts under FRS 102 and FRS 105, CT600 computations, Self Assessment workpapers — so your reviewers only review. Nothing is filed by us, and nothing that needs an opinion is decided by us.";
const benefits = ['Source-document organisation and preparation schedules', 'Book-to-tax reconciliations and supporting workpapers', 'Self Assessment preparation support for individuals and sole traders', 'Corporation Tax preparation support for companies', 'Review-note and exception tracking before final sign-off', 'Structured handoffs to the UK accountant or tax agent responsible for advice and filing'];
const retained = ['Final tax advice and professional judgement', 'Final review and approval of returns', 'Client-facing tax decisions and explanations', 'Statutory filing and sign-off responsibilities', 'Decisions on unusual or uncertain tax treatment'];
const faqs = [
  { question: 'Can you help with Self Assessment preparation?', answer: 'Yes. We can organise source records, supporting schedules and preparation work for Self Assessment while your accountant or authorised tax professional retains final review, advice and filing responsibility.' },
  { question: 'Can you support Corporation Tax work?', answer: 'Yes. We can prepare defined schedules, reconciliations and documentation that feed into Corporation Tax work, with the responsible UK tax professional retaining final judgement and filing responsibility.' },
  { question: 'Can you help before the January Self Assessment deadline?', answer: 'Yes. Deadline pressure often comes from the size of the review queue rather than the preparation of a single return. Defined preparation support can help firms move work forward before final review.' },
  { question: 'Will you give tax advice to our clients?', answer: 'No. The scope can be structured around preparation, documentation and workflow support. Tax advice and professional judgement remain with the responsible UK accountant or tax adviser.' },
];
const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Tax Preparation Support for UK Businesses', description: overview, slug: 'tax-preparation/united-kingdom', basePath: '/services/', areaServed: ['GB'] });
const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Tax Preparation — United Kingdom', url: `${baseUrl}${PATH}` }]);

export default function TaxPrepUKPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <InquiryRail
      region="united-kingdom"
      service="Tax Preparation"
      source={PATH}
      title="Talk Through Your Season"
    />

    <PremiumHero
        region="united-kingdom" subtitle="For UK accountancy practices" title="Accounts &amp; Tax Preparation Support" description="Preparation and workpaper support for Self Assessment and Corporation Tax workflows, built around your firm's review process." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />
    <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5">Services</Link></li><li aria-hidden="true">/</li><li>Tax Preparation</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United Kingdom</li></ol></nav>
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">More Prepared Work. Less Review-Queue Friction.</h2><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="tax-preparation" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-16"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">What Can Move Before Your Final Review</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{benefits.map((b, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/tax-preparation/united-kingdom" service="Tax Preparation" region="united-kingdom"><Check className="shrink-0 text-accent w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-0" aria-hidden="true" /><p className="text-foreground text-sm sm:text-base leading-5 sm:leading-relaxed">{b}</p></InquiryTrigger></li></Reveal>)}</ul></div></section>
    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Usually retained</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Judgement, advice and final approval</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">UK workflow</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Prepare around the way your team reviews</h2><p className="text-white/85 leading-7">Start with your Self Assessment or Corporation Tax checklist, source-document process and review notes. Define what should be prepared, what needs clarification and what should be escalated before the file reaches the responsible accountant or tax adviser. The aim is a cleaner handoff, not a second review layer.</p></></Reveal></div></section>
    <section className="w-full py-16 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><h2 className="font-serif text-3xl font-bold text-primary mb-5">Keep the UK workflow connected</h2>
        <div className="mb-5 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/tax-preparation/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-states" decorative />United States</Link>
          <Link href="/services/tax-preparation/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="australia" decorative />Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">UK Market Overview</Link><Link href="/services/bookkeeping/united-kingdom" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">UK Bookkeeping</Link><Link href="/services/audit-support/united-kingdom" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">UK Audit Support</Link><Link href="/technology/xero" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Xero</Link></div></div></section>
    <RegionalContext serviceSlug="tax-preparation" regionSlug="united-kingdom" />

    <ServiceDepth serviceSlug="tax-preparation" regionSlug="united-kingdom" />

    <FAQSection subtitle="Questions" items={faqs} columns={2} />
    <FurtherReading
      topics={['Tax']}
      exclude="/services/tax-preparation/united-kingdom"
      background="input"
    />
    <InquirySection region="united-kingdom" service="Tax Preparation" source="/services/tax-preparation/united-kingdom" />

    <CTABanner title="Where Is the UK Tax Queue Getting Stuck?" description="Tell us whether the pressure is source documents, bookkeeping cleanup, preparation or review capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
  </main>;
}
