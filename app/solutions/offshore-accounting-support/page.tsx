import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import { generateMetadata, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import InquiryTrigger from '@/components/inquiry-trigger';

export const metadata: Metadata = generateMetadata({
  // "offshore accounting services" and "offshore accounting" are the head terms
  // this cluster actually uses (GSC 2026-09-04); the old title carried neither.
  title: 'Offshore Accounting Services for Firms',
  description: 'An offshore accounting team for recurring bookkeeping, audit preparation, payroll and back-office work — working inside your existing systems.',
  path: '/solutions/offshore-accounting-support',
});

const faqs = [
  {
    question: 'What is offshore accounting support?',
    answer: 'Offshore accounting support involves delegating accounting tasks to qualified professionals in other countries. We handle bookkeeping, accounting, payroll, AP/AR, and other financial operations while maintaining strict data security and quality standards.',
  },
  {
    question: 'How is data security maintained with offshore teams?',
    answer: 'Every engagement is NDA-backed, with system access limited to the team members actually working on your account. We are actively working toward formal certification (SOC 2) and will share our exact current status if you ask.',
  },
  {
    question: 'What time zone coverage do you provide?',
    answer: 'Our service delivery team operates from our Global Delivery Center in New Delhi, India, and structures working hours to align with US, UK, and Australian business hours depending on the client.',
  },
  {
    question: 'What is the typical cost savings?',
    answer: 'That depends on your transaction volume, the systems in use and how much of the work you want to keep in-house. We would rather scope the actual workflow with you than answer it in the abstract.',
  },
  {
    question: 'How long does onboarding take?',
    answer: 'It depends on how complex your books and systems are — a straightforward setup with clean records moves faster than one that needs cleanup first. A more useful first step than a fixed timeline is a discovery conversation about your current process, so we can give you a realistic estimate for your specific situation rather than a generic number.',
  },
];

const faqSchema = generateFAQSchema(faqs);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Offshore Accounting Support', url: `${baseUrl}/solutions/offshore-accounting-support` },
]);

export default function OffshoreSolutionPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Offshore Accounting"
        title="Offshore Accounting Services, Inside Your Existing Systems"
        description="Experienced accounting professionals handling the recurring preparation work, under access you grant and can revoke. NDA-backed engagements, and honest communication about our security certification timeline."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Reveal><h2 className="text-4xl font-bold text-primary">Capacity That Does Not Come With a Hiring Cycle</h2></Reveal>
              <p className="text-lg text-muted leading-relaxed">An offshore team absorbs the recurring preparation work without a recruitment process, an onboarding ramp or a desk. The work stays in your systems, to your templates, with your people keeping review and every decision that carries judgement.</p>
              
              <div className="space-y-4 pt-4">
                {[
                  'Experienced accounting professionals',
                  'NDA-backed engagements on every project',
                  '24-hour response commitment',
                  'Works inside your existing accounting system and chart of accounts',
                  'Dedicated account management',
                  'Flexible scaling up or down',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 w-5 h-5" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Key Benefits</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold mb-2">24 hrs</div>
                  <p className="text-white/80">Response Time Commitment</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-white/80">NDA-Backed Engagements</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">Flexible</div>
                  <p className="text-white/80">Scope That Scales With You</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal><h2 className="text-4xl font-bold text-primary text-center mb-12">How It Works</h2></Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            {[
              { step: '1', title: 'Consultation', desc: 'Understand your needs and requirements' },
              { step: '2', title: 'Team Assembly', desc: 'Build a dedicated offshore team for you' },
              { step: '3', title: 'Onboarding', desc: 'Complete training and integration setup' },
              { step: '4', title: 'Operations', desc: 'Begin daily accounting operations' },
            ].map((item, i) => (
              <InquiryTrigger key={i} className="bg-white rounded-lg p-6 text-center space-y-3 border border-transparent transition-colors hover:border-primary/40" source="/solutions/offshore-accounting-support">
                <div className="text-4xl font-bold text-primary">{item.step}</div>
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </InquiryTrigger>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><h2 className="text-xl font-bold text-primary mb-4">Related Accounstone solutions</h2><div className="flex flex-wrap gap-3"><Link href="/solutions/staff-augmentation" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Staff Augmentation <ArrowRight size={14} /></Link><Link href="/solutions/back-office-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Back Office Support <ArrowRight size={14} /></Link><Link href="/resources/guides/choosing-an-engagement-model" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare All 4 Models <ArrowRight size={14} /></Link></div></div></section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The real questions</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Four Things Firms Ask Before They Send Anything Offshore
            </h2>
          </></Reveal>

          <Reveal className="space-y-4"><>
            <h3 className="font-bold text-primary text-lg">1. Where does the data actually go, and who can see it?</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">Ask any offshore provider for four specifics rather than a security page. Which named individuals hold access, and how you revoke it on a day&rsquo;s notice. Whether client data is worked on inside your systems or copied into theirs. What the sub-processor list looks like &mdash; who else touches it. And what happens to files when the engagement ends.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">Our answers: access is per-person and granted inside your platforms, so you can see and remove it yourself; engagements are NDA-backed; and delivery runs from our own centre in New Delhi rather than a chain of subcontractors. On certification, the honest position is that we are <strong>working toward SOC 2 and do not yet hold it</strong>. If a provider tells you they are certified, ask for the report and the scope &mdash; a Type I on a narrow scope is not what most firms assume they are being told.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">For UK practices specifically: sending client personal data outside the UK is a transfer under UK GDPR, and it is your practice that remains the controller. Your data-processing agreement should name the transfer mechanism. That is a real question to put to us in writing, not a formality.</p>

            <h3 className="font-bold text-primary text-lg pt-4">2. What holds the quality up when nobody is in the room?</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">Distance does not degrade accounting work. Undocumented convention does. The failure mode is a file that is technically correct and still wrong for you &mdash; coded to a sensible account rather than the one your reviewer expects, formatted to a general standard rather than your workpaper template.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">What prevents it is unglamorous: discovery that captures your chart-of-accounts conventions, file naming, checklists and known recurring exceptions before work starts; a named reviewer and defined escalation points; and a feedback loop where corrections from the first files are written into the workflow so the same correction is not made every cycle. The measure to watch in month three is not accuracy in the abstract &mdash; it is whether your review time per file is falling.</p>

            <h3 className="font-bold text-primary text-lg pt-4">3. Which work travels well, and which does not?</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">Work with a clear input, a defined method and a checkable output travels well: reconciliations, transaction coding, AP and AR processing, payroll preparation, close schedules, workpaper preparation, PBC organisation. Work that is mostly judgment, or that requires reading a client relationship, does not &mdash; and should not. Anything requiring a licensed signature stays with your licensed staff in every jurisdiction we serve.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">The practical test before you delegate a workflow: could you write down what &ldquo;done&rdquo; looks like for it in ten lines? If yes, it is a good candidate. If the answer is &ldquo;you just know&rdquo;, it is not ready to move yet &mdash; and the useful first project is documenting it, not staffing it.</p>

            <h3 className="font-bold text-primary text-lg pt-4">4. What does offshore audit support actually cover?</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">This is the query we see most often after &ldquo;offshore accounting support&rdquo; itself, and it is the one where the boundary needs stating plainly. Preparation can be delegated: PBC schedules, evidence organisation, reconciliations, rollforwards, tying out workpapers, formatting the file for the auditor&rsquo;s review. Judgment cannot: audit planning, risk assessment, sampling decisions, evaluating management representations, conclusions on balances, and signing the report.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">That distinction holds under US GAAS and PCAOB standards, UK FRC and the ISAs, and the AUASB standards in Australia alike. It is not a limitation we have chosen &mdash; it is the shape of the work. See <Link href="/services/audit-support/united-states" className="text-primary font-medium hover:underline">audit support</Link> for how the preparation side is structured.</p>

            <div className="overflow-hidden rounded-xl border border-border bg-input">
              <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">One term that means two things</p>
                <p className="text-sm sm:text-base leading-relaxed text-foreground">&ldquo;Offshore contractor accounting&rdquo; is searched by two different people. One wants accounting work performed by an offshore team &mdash; that is this page. The other runs a business paying contractors in other countries and wants the bookkeeping for it: vendor records, payment preparation, and the withholding and reporting treatment in their own jurisdiction. We do the second as part of <Link href="/services/accounts-payable/united-states" className="text-primary font-medium hover:underline">accounts payable</Link> and payroll preparation. We do not advise on whether someone is a contractor or an employee &mdash; that classification is a legal question for your employment counsel.</p>
              </div>
            </div>
          </></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">What it covers</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What an Offshore Accounting Company Actually Does
            </h2>
          </></Reveal>
          <Reveal className="space-y-4"><>
            <p className="text-base md:text-lg text-muted leading-relaxed">&ldquo;Offshore accounting&rdquo; covers several different arrangements, and the word on its own tells you almost nothing about scope. In practice a firm engaging us is asking for one or more of five things.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ['Offshore bookkeeping', 'Transaction coding, bank and control-account reconciliations, and the monthly routine that has to happen before anything else can. The largest single block of delegated work, and the one most often asked for by name — an offshore bookkeeper working inside an existing QuickBooks, Xero or MYOB file rather than moving you off it.', '/services/bookkeeping/united-states'],
                ['Offshore audit support', 'PBC schedules, evidence organisation, rollforwards and tying out workpapers. Preparation only — planning, sampling and the opinion stay with your auditor.', '/services/audit-support/united-kingdom'],
                ['Offshore payroll preparation', 'Pay runs prepared, reconciled to the ledger and returned for approval. Filing and the employment decisions stay with you.', '/services/payroll/united-states'],
                ['Offshore AP and AR', 'Invoice intake, coding, approval routing and payment preparation; invoicing, cash application and the aging on the other side. No banking control, ever.', '/services/accounts-payable/united-states'],
                ['Offshore tax preparation', 'Returns and workpapers prepared to e-file-ready and left unsigned, for your licensed reviewer.', '/services/tax-preparation/united-states'],
                ['A dedicated offshore accountant', 'Where the volume is steady, the same named person or small team works only your files and accumulates the knowledge, rather than work being pooled.', '/solutions/dedicated-accounting-teams'],
              ].map(([title, text, href]) => (
                <Link key={title} href={href} className="block rounded-xl border border-border bg-white p-5 transition-colors hover:border-primary/40">
                  <div className="font-bold text-primary mb-1">{title}</div>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </Link>
              ))}
            </div>
            <h3 className="font-bold text-primary text-lg pt-2">How firms usually start</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">Rarely with the whole portfolio. The pattern that works is one client, or one workflow, run for a full cycle end to end &mdash; long enough to see a real month-end rather than a demo. That gives both sides a factual answer to the only question that matters at the start: does the work come back in a state your reviewer can sign without redoing it?</p>
            <p className="text-base md:text-lg text-muted leading-relaxed">If you are a UK practice weighing this up, the market-specific version &mdash; FRS 102, VAT under Making Tax Digital, Companies House deadlines and who holds which credential &mdash; is on the <Link href="/markets/united-kingdom" className="text-primary font-medium hover:underline">UK practices page</Link>. Australian firms have <Link href="/markets/australia" className="text-primary font-medium hover:underline">the same for the ATO and BAS</Link>.</p>
          </></Reveal>
        </div>
      </section>

      <FAQSection subtitle="Offshore Support" items={faqs} columns={2} />

      <InquirySection source="/solutions/offshore-accounting-support" title="Talk to Us About an Offshore Team" lead="A free consultation, and a call that costs nothing. Tell us what the recurring work looks like and which systems it lives in." />

      <CTABanner
        title="Ready to Scale Your Accounting Operations?"
        description="Let our offshore team carry the preparation while your people stay on review and client work."
        cta={{
          text: 'Start Your Offshore Team',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
