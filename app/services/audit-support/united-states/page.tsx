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

const PATH = '/services/audit-support/united-states';

export const metadata: Metadata = genMeta({
  title: 'Audit Support Services for CPA Firms',
  description: 'PBC schedules, reconciliations, rollforwards and tie-outs prepared before fieldwork. Preparation only — the opinion, planning and sampling stay yours.',
  path: PATH,
});

const overview = 'Audit work can slow down long before fieldwork begins. Schedules need updating, reconciliations need support, client documents need to be organized and open questions need someone to keep moving. We support that preparation work so the engaged CPA firm or auditor can spend less time hunting for evidence and more time exercising professional judgment.';

const support = [
  'Working-paper and supporting-schedule preparation',
  'Reconciliation and documentation of account balances',
  'Organization of evidence and client-provided documentation',
  'Testing support based on the audit team’s procedures',
  'Open-item tracking and follow-up documentation',
  'Capacity support before and during audit fieldwork',
];

const retained = [
  'Audit planning and professional judgment',
  'Final conclusions and audit opinion',
  'Approval of audit procedures and evidence sufficiency',
  'Direct responsibility for the engagement and client relationship',
];

const faqs = [
  { question: 'Do you issue the audit opinion?', answer: 'No. The audit opinion is issued by the engaged CPA firm or auditor. We support preparation, documentation and defined testing work.' },
  { question: 'What if the audit team is spending too much time chasing support?', answer: 'That is exactly the type of preparation work that can be separated from the professional review itself. Schedules, reconciliations, evidence and open-item tracking can be organized so the reviewer can see what is complete and what still needs attention.' },
  { question: 'Can you organize working papers before fieldwork?', answer: 'Yes. Getting schedules, reconciliations and supporting evidence into a consistent structure before fieldwork can reduce the amount of basic follow-up that competes with the actual audit work.' },
  { question: 'Can you work from the auditor’s PBC list?', answer: 'Yes. We can help organize requested documentation, reconcile supporting schedules and track outstanding items according to the engagement workflow.' },
  { question: 'Do you support internal-control documentation?', answer: 'We can support documentation and evidence gathering where it is within the agreed scope and follows the procedures established by your audit or compliance team.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Audit Support Services for U.S. Businesses', description: overview, slug: 'audit-support/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Audit Support — United States', url: `${baseUrl}${PATH}` },
]);

export default function AuditSupportUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InquiryRail
        region="united-states"
        service="Audit Support"
        source={PATH}
        title="Talk About Audit Preparation"
      />

      <PremiumHero
        region="united-states" subtitle="Audit Support for U.S. Businesses" title="U.S. Audit Support Services" description="Documentation, schedules and preparation support that helps your audit team spend less time chasing open items." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5 hover:text-primary">Services</Link></li><li aria-hidden="true">/</li><li>Audit Support</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United States</li></ol></nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Make the Evidence Easier to Work Through</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="audit-support" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">The Preparation Work Around the Audit</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{support.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/audit-support/united-states" service="Audit Support" region="united-states"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Support team</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Preparation and organization</h2><p className="text-white/85 leading-7">The delivery team can organize schedules, reconciliations, evidence and open-item documentation around the procedures and file structure established by the engagement team.</p></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Auditor / CPA retains</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Judgment and final conclusions</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-6">Connect audit support to the work around the engagement</h2>
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/audit-support/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
          <Link href="/services/audit-support/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="australia" decorative />Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/services/bookkeeping/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Bookkeeping</Link><Link href="/solutions/staff-augmentation" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Staff Augmentation</Link></div></div></section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The term itself</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What &ldquo;Audit Support&rdquo; Actually Means
            </h2>
          </></Reveal>
          <Reveal className="space-y-4">
            <>
              <p className="text-base md:text-lg text-muted leading-relaxed">Two different people search this phrase and mean opposite things by it, which is why most pages answering it are vague. Worth separating them.</p>
              <h3 className="font-bold text-primary text-lg pt-2">If you are the company being audited</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">Audit support is the work of getting your own file ready before the auditor opens it: a trial balance that ties, supporting schedules that agree to it, reconciliations that explain the differences, rollforwards for the balances that move, and the underlying documents filed where they can be found. Most of the time lost in an audit is not lost to testing. It is lost to a request list that keeps coming back because the first answer did not reconcile.</p>
              <h3 className="font-bold text-primary text-lg pt-2">If you are the audit firm</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">The same work, but the distinction matters more. This is preparation performed for the entity being audited, not audit work performed for you. Independence rules exist precisely so that the people preparing a file are not the people concluding on it, and the boundary is the same in substance under U.S. GAAS and PCAOB standards, UK ISAs, and the Australian ASAs.</p>
              <div className="overflow-hidden rounded-xl border border-border bg-input">
                <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">The line that does not move</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">Audit support does not include forming an opinion, planning the audit, assessing risk, choosing samples, evaluating management&rsquo;s representations, or concluding on an account balance. Those are auditor judgment, and no amount of preparation capacity changes who holds them.</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">What can move is everything in front of that: schedules, tie-outs, reconciliations, evidence gathering, PBC list maintenance and formatting the file so the review is about the numbers rather than about finding them.</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">&ldquo;Offshore audit support&rdquo; is the same scope with the delivery team in another time zone, which mostly changes the rhythm rather than the work: requests raised at the end of your day are usually answered by the start of the next one, and the tradeoff is that ambiguous requests cost a full cycle instead of a conversation across a desk.</p>
            </>
          </Reveal>
        </div>
      </section>

      <RegionalContext serviceSlug="audit-support" regionSlug="united-states" />

      <ServiceDepth serviceSlug="audit-support" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <FurtherReading
        topics={['Audit']}
        exclude="/services/audit-support/united-states"
        background="input"
      />
      <InquirySection region="united-states" service="Audit Support" source="/services/audit-support/united-states" />

      <CTABanner title="What Is Holding Up the Audit?" description="Tell us whether the pressure is coming from schedules, documentation, PBC follow-up or preparation capacity." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
