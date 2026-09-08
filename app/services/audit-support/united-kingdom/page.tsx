import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import RegionalContext from '@/components/regional-context';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquiryRail from '@/components/inquiry-rail';
import ServiceIllustration from '@/components/service-illustration';
import FurtherReading from '@/components/further-reading';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/services/audit-support/united-kingdom';
export const metadata: Metadata = genMeta({
  title: 'UK Audit Support Services for Accounting Teams',
  description: 'Audit preparation support for UK companies — FRS 102 schedules, year-end reconciliations, and evidence organised around your statutory auditor’s request list.',
  path: PATH,
});

const overview = "Most UK audits do not stall on technical accounting. They stall on the gap between the audit team's request list and the state of the file — a reconciliation that has not been finished, a schedule that does not agree to the nominal ledger, a sample selection waiting on invoices nobody has pulled. We prepare that layer for UK companies, under FRS 102 conventions, so fieldwork starts against a file that already answers most of the list. The engaged statutory auditor retains every audit procedure, all professional judgement, and the opinion.";

const workstreams = [
  { h: 'Lead schedules that agree to the ledger', p: 'Balance sheet lead schedules built from the nominal ledger, cast and agreed, with movements explained rather than left for the audit team to derive.' },
  { h: 'Year-end reconciliations completed first', p: 'Bank, debtor, creditor, accrual, prepayment, and intercompany reconciliations finished and supported before the request list arrives.' },
  { h: 'The PBC list, worked as a checklist', p: 'Prepared-by-client requests tracked item by item, with a visible status for each so open items are known rather than discovered mid-fieldwork.' },
  { h: 'Sample support pulled and indexed', p: 'Invoices, contracts, and supporting documents retrieved against the auditor’s selections and indexed to the reference they asked for.' },
  { h: 'FRS 102 disclosure support', p: 'Underlying analysis for the disclosure notes — related parties, commitments, leases, deferred tax movements — prepared for your accountant to review and finalise.' },
  { h: 'Group and subsidiary consolidation packs', p: 'Where a UK entity reports into a group, the reporting pack and intercompany agreement work prepared to the group timetable.' },
];

const retained = [
  'The audit opinion and all professional judgement',
  'Design and direction of every audit procedure',
  'Sample selection and assessment of audit evidence',
  'Statutory responsibilities of the engaged registered auditor',
];

const faqs = [
  { question: 'Do you issue the audit opinion?', answer: 'No, and we cannot. Only the engaged registered auditor can perform audit procedures and issue an opinion. Our work sits entirely on the preparation side: schedules, reconciliations, and evidence organised before and during fieldwork.' },
  { question: 'How does this differ from your year-end accounts work?', answer: 'Year-end accounts preparation produces the figures. Audit support organises the evidence that stands behind them — lead schedules, reconciliations, and the documents an auditor samples. Many UK clients use both, but they are separate pieces of work.' },
  { question: 'Our company may be below the audit threshold. Is this still relevant?', answer: 'Audit exemption in the UK depends on turnover, balance sheet total, and employee numbers, and on group and sector circumstances. Your accountant should confirm your position. Where an audit is not required, the same preparation work still supports year-end accounts and any independent examination.' },
  { question: 'Can you work to our auditor’s templates?', answer: 'Yes. Schedules follow the formats and references the engaged audit team already uses. Introducing a parallel set of workpapers usually creates more reconciliation work, not less.' },
  { question: 'Which reporting framework do you work to?', answer: 'FRS 102 for most UK entities. Where a company reports under IFRS or FRS 101, we follow the treatment its accountant has set. We do not make the framework decision.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Audit Support Services for UK Businesses', description: overview, slug: 'audit-support/united-kingdom', basePath: '/services/', areaServed: ['GB'] });
const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Audit Support', url: `${baseUrl}${PATH}` }, { name: 'United Kingdom', url: `${baseUrl}${PATH}` }]);

export default function AuditSupportUKPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <InquiryRail
      region="united-kingdom"
      service="Audit Support"
      source={PATH}
      title="Talk About Audit Preparation"
    />

    <PremiumHero
        region="united-kingdom" subtitle="Audit Support for UK Businesses" title="UK Audit Support Services" description="FRS 102 schedules, year-end reconciliations and indexed evidence, prepared against your statutory auditor's request list." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />
    <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li><li>Audit Support</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United Kingdom</li></ol></nav>

    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Where UK Audits Actually Lose Time</h2><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="audit-support" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-12"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Workstreams</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Preparation Work Behind a UK Audit File</h2></></Reveal>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6">{workstreams.map((w, i) => <Reveal key={i} delay={Math.min(i * 0.05, 0.25)}><InquiryTrigger className="h-full p-5 sm:p-6 bg-white rounded-xl border border-border/70 transition-colors hover:border-primary/40" source="/services/audit-support/united-kingdom" service="Audit Support" region="united-kingdom"><h3 className="font-bold text-primary mb-2 text-base sm:text-lg">{w.h}</h3><p className="text-muted text-sm sm:text-base leading-relaxed">{w.p}</p></InquiryTrigger></Reveal>)}</div></div></section>

    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto rounded-2xl bg-primary text-white p-8 md:p-10"><span className="text-sm font-semibold uppercase tracking-wide text-white/70">The line we do not cross</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Preparation moves. Assurance does not.</h2><p className="text-white/85 leading-7 mb-6">Everything above is preparation and documentation work performed for the company, not audit work performed for the auditor. The engaged registered auditor directs the audit, evaluates the evidence, and signs the opinion.</p><ul className="grid md:grid-cols-2 gap-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></div></section>

    <RegionalContext serviceSlug="audit-support" regionSlug="united-kingdom" />

    <FAQSection subtitle="Questions" items={faqs} columns={2} />

    <section className="w-full py-12 md:py-16 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><h2 className="font-serif text-3xl font-bold text-primary mb-5">Keep the UK service cluster connected</h2>
      <div className="mb-5 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wide text-muted">Audit support elsewhere:</span>
        <Link href="/services/audit-support/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link>
        <Link href="/services/audit-support/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">Australia</Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-kingdom" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">UK Market Overview</Link><Link href="/services/accounting/united-kingdom" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">UK Accounting</Link><Link href="/services/bookkeeping/united-kingdom" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">UK Bookkeeping</Link><Link href="/compliance" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Compliance &amp; Controls</Link></div></div></section>

    <FurtherReading

      topics={['Audit']}

      exclude="/services/audit-support/united-kingdom"

      background="input"

    />

    <InquirySection region="united-kingdom" service="Audit Support" source="/services/audit-support/united-kingdom" />

    <CTABanner title="Preparing for UK Audit Fieldwork?" description="Tell us whether the pressure sits in lead schedules, year-end reconciliations, or chasing sample support — and we can talk through where preparation help would actually shorten the audit." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
  </main>;
}
