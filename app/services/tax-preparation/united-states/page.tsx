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

const PATH = '/services/tax-preparation/united-states';

export const metadata: Metadata = genMeta({
  title: 'US Tax Preparation Outsourcing for CPA Firms',
  description: 'Outsource return preparation without moving review: 1040, 1065, 1120 and 1120-S in Drake Tax and CCH Axcess. You review, sign and e-file.',
  path: PATH,
});

const overview = 'Busy season is rarely hard because one return is hard. It is hard because forty are open at once, half are waiting on a client who has not replied, and the number of people who can sign is fixed. We prepare returns and the workpapers behind them so the constraint moves off preparation and back onto review — which is the only part that actually requires your licence.';

const preparation = [
  'Return preparation assistance and supporting schedules',
  'Organization of source documents and missing-information lists',
  'Data entry and reconciliation against the underlying books',
  'Documentation prepared for reviewer follow-up',
  'Support for recurring and peak-season preparation workflows',
  'Drake Tax and CCH Axcess workflow support where applicable',
];

const retained = [
  'Final professional review and sign-off',
  'Tax advice and positions requiring professional judgment',
  'Final filing authority and client approval',
  'Client-specific decisions that require your licensed professional',
];

const faqs = [
  { question: 'Do you file tax returns directly with the IRS?', answer: 'No. We support preparation and documentation. Final review, sign-off and filing remain with the appropriate licensed tax professional.' },
  { question: 'What if our review team is the bottleneck?', answer: 'That is often where additional preparation capacity can help. The goal is to move organized, complete work into review so the reviewer is dealing with tax questions and exceptions rather than basic missing information.' },
  { question: 'Can you help when client documents are incomplete?', answer: 'We can organize the documents received, maintain missing-information lists and prepare the file for follow-up. Your firm still decides what information is required and how the client is contacted.' },
  { question: 'What information should be ready before preparation starts?', answer: 'The exact list depends on the return. Prior-year information, organized source documents, bookkeeping records or trial balances and known client questions generally make the preparation handoff more efficient.' },
  { question: 'Can you work from our existing tax-season checklist?', answer: 'Yes. Your checklist, naming conventions, review notes and escalation rules are useful because the best workflow is usually the one your reviewers already understand.' },
  { question: 'Is outsourcing tax return preparation allowed for a U.S. CPA firm?', answer: 'Preparation work can be delegated. What cannot be delegated is review, signature and e-filing, which stay with a licensed CPA or Enrolled Agent under Circular 230. Separately, IRC §7216 requires the taxpayer\u2019s written consent, in the form Rev. Proc. 2013-14 sets out, before return information is disclosed to another preparer — and the consent must say so where that preparer is outside the United States. The consent language is your firm\u2019s to adopt with your own counsel.' },
  { question: 'Why do firms outsource preparation rather than hire?', answer: 'Usually because the workload is seasonal and a hire is not. A firm that staffs for February carries that cost in July. The trade-off runs the other way too: an in-house preparer learns your conventions once and keeps them, where an outside team has to be taught them and held to them. Which way that balance falls depends on how much of your volume is genuinely seasonal.' },
  { question: 'How does the first season usually run?', answer: 'Narrower than firms expect. A defined slice — one return type, one partner\u2019s client list, or the returns that were late last year — gives both sides something to measure before the volume arrives. Scaling a workflow that already works is a smaller problem than fixing one in March.' },
  { question: 'What turnaround should we plan for?', answer: 'It depends on return complexity, how complete the source documents are and how quickly review questions come back. Rather than quote a number that ignores those, we would rather agree a turnaround against a sample of your actual returns during onboarding, and tell you where it is likely to slip.' },
];

const faqSchema = generateFAQSchema(faqs);
const serviceSchema = generateServiceSchema({ name: 'Tax Preparation Support for U.S. Businesses', description: overview, slug: 'tax-preparation/united-states', basePath: '/services/', areaServed: ['US'] });
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Services', url: `${baseUrl}/services` }, { name: 'Tax Preparation — United States', url: `${baseUrl}${PATH}` },
]);

export default function TaxPrepUSPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <InquiryRail
        region="united-states"
        service="Tax Preparation"
        source={PATH}
        title="Talk Through Your Season"
      />

      <PremiumHero
        region="united-states" subtitle="For U.S. CPA firms" title="Tax Preparation Support for CPA Firms" description="Returns and workpapers prepared to your templates and your review notes. You review, you sign, you e-file." cta={{ text: 'Get Started', href: '/contact' }} ctaSecondary={{ text: 'View All Services', href: '/services' }} background="primary-gradient" />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted"><li><Link href="/" className="inline-block py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/services" className="inline-block py-1.5 hover:text-primary">Services</Link></li><li aria-hidden="true">/</li><li>Tax Preparation</li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">United States</li></ol></nav>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <Reveal className="space-y-6"><><div className="space-y-2"><span className="text-sm font-semibold tracking-wide uppercase text-accent">Overview</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Give Your Reviewer Better Work to Review</h2></div><p className="text-lg text-muted leading-relaxed">{overview}</p></></Reveal>
          <Reveal delay={0.12}>
            <ServiceIllustration service="tax-preparation" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><Reveal className="text-center space-y-4 mb-14"><><span className="text-sm font-semibold tracking-wide uppercase text-accent">Scope</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">Preparation Work That Can Move Out of the Reviewer's Queue</h2></></Reveal><ul className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">{preparation.map((item, i) => <Reveal key={i}><li className="h-full"><InquiryTrigger className="flex items-start gap-2 sm:gap-4 p-3.5 sm:p-6 bg-white rounded-2xl border border-border/70 transition-colors hover:border-primary/40 h-full" source="/services/tax-preparation/united-states" service="Tax Preparation" region="united-states"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" /><span className="text-sm sm:text-base leading-5 sm:leading-7">{item}</span></InquiryTrigger></li></Reveal>)}</ul></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"><Reveal className="rounded-2xl bg-input border border-border/70 p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-accent">Your team retains</span><h2 className="font-serif text-3xl font-bold text-primary mt-3 mb-6">Professional judgment and filing control</h2><ul className="space-y-4">{retained.map((item, i) => <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent shrink-0" aria-hidden="true" /><span className="leading-6">{item}</span></li>)}</ul></></Reveal><Reveal delay={0.1} className="rounded-2xl bg-primary text-white p-8 md:p-10"><><span className="text-sm font-semibold uppercase tracking-wide text-white/70">Workflow</span><h2 className="font-serif text-3xl font-bold mt-3 mb-6">Build around the way your firm already reviews</h2><p className="text-white/85 leading-7">Start with your checklist, source-document process and review notes. Define what is prepared, what gets escalated and what a reviewer expects to see before a file moves forward. That makes the handoff easier to repeat across the season.</p></></Reveal></div></section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto text-center"><span className="text-sm font-semibold uppercase tracking-wide text-accent">Related</span><h2 className="font-serif text-xl md:text-2xl font-bold text-primary mt-3 mb-6">Connect tax preparation to the rest of the workflow</h2>
        <div className="mb-6 p-4 bg-white rounded-xl border border-border/70 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-muted">Same service, other regions:</span>
          <Link href="/services/tax-preparation/united-kingdom" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="united-kingdom" decorative />United Kingdom</Link>
          <Link href="/services/tax-preparation/australia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-input border border-border text-sm text-primary font-medium hover:bg-border transition-colors"><RegionFlag region="australia" decorative />Australia</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3"><Link href="/markets/united-states" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">U.S. Market Overview</Link><Link href="/industries/cpa-firms" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CPA Firms</Link><Link href="/technology/drake-tax" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Drake Tax</Link><Link href="/technology/cch" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">CCH Axcess</Link><Link href="/resources/guides/staff-augmentation-tax-season-guide" className="px-4 py-2 rounded-lg bg-white text-primary font-medium hover:bg-border transition-colors">Tax-Season Staff Augmentation</Link></div></div></section>


      {/* Written against Search Console demand: the U.S. tax-preparation
          outsourcing cluster is the closest thing this site has to a
          breakthrough — around forty query variants sitting at positions 19-35.
          The queries are transactional ("outsource tax return preparation
          services"), but one of them is not: "outsourcing tax return
          preparation and its implications". The implication a U.S. firm
          actually needs is §7216 consent, and almost nobody in this market
          writes it down. See SEO-CHANGELOG.md, 2026-09-03. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The actual model</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What Outsourcing Return Preparation Moves, and What It Cannot
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              &ldquo;Outsourcing tax preparation&rdquo; is a broad phrase for a narrow change. What moves is
              the preparation: source documents get organised, book-to-tax adjustments get worked through,
              the return gets entered, the workpapers get built, and the open questions get written down
              where a reviewer will actually see them.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              What does not move is anything that needs a licence. Under Circular 230 the return is
              reviewed, signed and e-filed by your CPA or Enrolled Agent. No one on our side contacts the
              IRS on a client&rsquo;s behalf, holds a Form 2848, or takes a tax position for your firm.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              That boundary decides where your season&rsquo;s constraint ends up. A firm that outsources
              preparation still has exactly as many people who can sign. If review was already the
              bottleneck, returns arriving faster just makes the queue longer &mdash; unless they arrive in
              a state your reviewer can work with rather than rebuild. Which is why the useful question in a
              first conversation is not how many returns we can take, but what your reviewers currently
              spend their time fixing.
            </p>
          </></Reveal>

          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Before the first return</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              The §7216 Consent Is the Part Firms Find Out About Late
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Before a U.S. return preparer discloses return information to another preparer, Internal
              Revenue Code §7216 and the regulations under it require the taxpayer&rsquo;s written consent,
              in a form that meets the requirements of Rev. Proc. 2013-14. This is not a formality that can
              be tidied up afterwards: §7216 carries criminal penalties, and the consent has to be obtained
              before the disclosure rather than after it.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Two details catch firms out. A consent has to state that the return information may go to a
              preparer located outside the United States, where that is the case &mdash; a generic consent
              does not cover it. And there are specific conditions attached to disclosing a client&rsquo;s
              Social Security number to a preparer outside the U.S.
            </p>
            <div className="overflow-hidden rounded-xl border border-border bg-input">
              <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Where the obligation sits</p>
                <p className="text-sm sm:text-base leading-relaxed text-foreground">
                  The consent wording, and the decision to use it, belongs to your firm and your own
                  counsel. It is your obligation under §7216, not something a preparation provider can hold
                  for you, and we would rather say that plainly than imply otherwise. What we can do is work
                  to whatever process your firm puts in place &mdash; masked identifiers, a defined client
                  list, the folder structure your engagement letters already describe.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-foreground">
                  A provider who tells you this step is unnecessary is worth a second look.
                </p>
              </div>
            </div>
          </></Reveal>

          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Returns and software</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Which Returns, and Which Software
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Form 1040 with the schedules that usually travel with it, 1065 with the K-1 detail behind it,
              1120 and 1120-S, and the state returns that follow from them. Multi-state preparation where the
              apportionment data already exists in the books &mdash; and a clear note back to you where it
              does not, rather than a guess.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              The tax software we work in is <Link href="/technology/drake-tax" className="font-semibold text-primary underline underline-offset-2 hover:text-accent">Drake Tax</Link>{' '}
              and <Link href="/technology/cch" className="font-semibold text-primary underline underline-offset-2 hover:text-accent">CCH Axcess</Link>. If your
              firm runs a different package, say so in the first conversation. Whether we can work in it
              depends on the licence seats and the access your firm is able to provide, and that is much
              better established in November than in February. We work inside a setup your firm already
              runs; we do not implement or configure tax software.
            </p>
          </></Reveal>
        </div>
      </section>

      <RegionalContext serviceSlug="tax-preparation" regionSlug="united-states" />

      <ServiceDepth serviceSlug="tax-preparation" regionSlug="united-states" />

      <FAQSection subtitle="Questions" items={faqs} columns={2} />
      <FurtherReading
        topics={['Tax']}
        exclude="/services/tax-preparation/united-states"
        background="input"
      />
      <InquirySection region="united-states" service="Tax Preparation" source="/services/tax-preparation/united-states" />

      <CTABanner title="Where Is Tax Season Putting Pressure on Your Team?" description="Tell us which preparation tasks are building up and whether the real bottleneck is documents, preparation or review." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
