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

const PATH = '/services/audit-support/australia';
export const metadata: Metadata = genMeta({
  title: 'Audit Support Services in Australia',
  description: 'Audit preparation for Australian entities — AASB schedules, 30 June reconciliations, GST and superannuation support, organised for your auditor.',
  path: PATH,
});

const overview = "Australian audit work concentrates into a narrow window. With most entities reporting to a 30 June year end, the same weeks bring year-end close, the June quarter BAS, and the auditor's request list — usually to the same small finance team. That compression, more than technical difficulty, is what pushes Australian audits late. We prepare the underlying file against AASB conventions so that when fieldwork opens, the reconciliations are done and the evidence is already indexed. The engaged registered company auditor retains every audit procedure and the opinion.";

const phases = [
  { k: 'Before 30 June', h: 'Get ahead of the compression', p: 'Balance sheet reconciliations brought current, recurring accruals reviewed, and known problem accounts cleared while there is still time to fix them — rather than discovering them alongside the June BAS.' },
  { k: 'Year-end close', h: 'Build the file once', p: 'Lead schedules prepared from the general ledger and agreed, GST control accounts reconciled to what was reported across the year, and superannuation guarantee accruals supported with the payroll detail behind them.' },
  { k: 'Fieldwork', h: 'Answer the list, not chase it', p: 'Auditor requests tracked item by item with a visible status, and sample support pulled and indexed to the references the audit team uses so open items shrink instead of accumulating.' },
  { k: 'Finalisation', h: 'Close out cleanly', p: 'Adjustments posted once approved, final schedules reconciled to the adjusted trial balance, and the underlying analysis behind the disclosure notes prepared for your registered agent to review.' },
];

const retained = [
  'The audit opinion and all professional judgement',
  'Design and direction of every audit procedure',
  'Sample selection and evaluation of audit evidence',
  'Statutory responsibilities of the engaged registered company auditor',
];

const faqs = [
  { question: 'Do you issue the audit opinion?', answer: 'No, and we cannot. Only the engaged registered company auditor can perform audit procedures and issue an opinion. Our work is preparation and documentation performed for the entity, on the other side of that line.' },
  { question: 'Why does the 30 June year end matter so much here?', answer: 'Because it stacks. Year-end close, the June quarter BAS, and the start of the audit request list land on the same team within weeks of each other. Preparing the reconciliations and schedules ahead of that window is usually what decides whether an audit runs to timetable.' },
  { question: 'Do you reconcile GST as part of the audit file?', answer: 'Yes. GST control accounts are reconciled to what was reported across the year, and differences are identified and documented. Preparing or lodging the BAS itself stays with your registered BAS agent.' },
  { question: 'Can you support superannuation guarantee testing?', answer: 'We can prepare the payroll detail and accrual support an auditor asks for. Assessment of whether obligations have been met is the auditor’s work, and superannuation fund advice is outside what we offer in any form.' },
  { question: 'Which reporting framework do you work to?', answer: 'AASB standards, which follow IFRS in Australia. Where a specific treatment is in question, we follow what your registered agent or finance lead has set. We do not make framework or policy decisions.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Audit Support Services for Australian Businesses', description: overview, slug: 'audit-support/australia', basePath: '/services/', areaServed: ['AU'] });
const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Audit Support', url: `${baseUrl}${PATH}` }, { name: 'Australia', url: `${baseUrl}${PATH}` }]);

export default function AuditSupportAUPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <InquiryRail
      region="australia"
      service="Audit Support"
      source={PATH}
      title="Talk About Audit Preparation"
    />

    <PremiumHero
        region="australia" subtitle="Audit Support for Australian Businesses" title="Australian Audit Support Services" description="AASB schedules, 30 June reconciliations and indexed evidence, prepared before the year-end crunch arrives." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />
    <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5 hover:text-primary transition-colors">Services</Link></li><li aria-hidden="true">/</li><li>Audit Support</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">Australia</li></ol></nav>

    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The 30 June Squeeze Is the Real Problem</h2><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="audit-support" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-12"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Across the cycle</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Where Preparation Support Fits the Australian Audit Year</h2></></Reveal>
      <ol className="space-y-4">{phases.map((w, i) => <Reveal key={i} delay={Math.min(i * 0.06, 0.25)}><li className="h-full"><InquiryTrigger className="p-5 sm:p-6 bg-white rounded-xl border border-border/70 flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 transition-colors hover:border-primary/40 h-full" source="/services/audit-support/australia" service="Audit Support" region="australia"><span className="shrink-0 text-xs font-bold uppercase tracking-wider text-accent sm:w-36 sm:pt-1">{w.k}</span><div><h3 className="font-bold text-primary mb-1.5 text-base sm:text-lg">{w.h}</h3><p className="text-muted text-sm sm:text-base leading-relaxed">{w.p}</p></div></InquiryTrigger></li></Reveal>)}</ol></div></section>

    <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto rounded-2xl bg-primary text-white p-8 md:p-10"><span className="text-sm font-semibold uppercase tracking-wide text-white/70">The line we do not cross</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Preparation moves. Assurance does not.</h2><p className="text-white/85 leading-7 mb-6">Everything above is preparation and documentation performed for the entity, not audit work performed for the auditor. The engaged registered company auditor directs the audit, evaluates the evidence, and signs the opinion.</p><ul className="grid md:grid-cols-2 gap-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-white shrink-0 mt-0.5" aria-hidden="true" /><span className="text-white/85 leading-6">{item}</span></li>)}</ul></div></section>

    <RegionalContext serviceSlug="audit-support" regionSlug="australia" />

    <FAQSection subtitle="Questions" items={faqs} columns={2} />

    <section className="w-full py-12 md:py-16 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><h2 className="font-serif text-3xl font-bold text-primary mb-5">Keep the Australian service cluster connected</h2>
      <div className="mb-5 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
        <span className="text-xs font-bold uppercase tracking-wide text-muted">Audit support elsewhere:</span>
        <Link href="/services/audit-support/united-states" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United States</Link>
        <Link href="/services/audit-support/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors">United Kingdom</Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/australia" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Australian Market Overview</Link><Link href="/services/accounting/australia" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Australian Accounting</Link><Link href="/services/payroll/australia" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Australian Payroll</Link><Link href="/technology/myob" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">MYOB Support</Link></div></div></section>

    <FurtherReading

      topics={['Audit']}

      exclude="/services/audit-support/australia"

      background="input"

    />

    <InquirySection region="australia" service="Audit Support" source="/services/audit-support/australia" />

    <CTABanner title="Heading Into a 30 June Audit?" description="Tell us whether the pressure sits in year-end reconciliations, GST control accounts, or the auditor's request list — and we can talk through what to prepare before the window closes." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
  </main>;
}
