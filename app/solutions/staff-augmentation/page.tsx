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
import FurtherReading from '@/components/further-reading';
import SolutionIllustration from '@/components/solution-illustration';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Staff Augmentation',
  description: 'Add accounting capacity for tax season, month-end close, cleanup, AP/AR or a defined project — working inside your systems and your review process.',
  path: '/solutions/staff-augmentation',
});

const faqs = [
  { question: 'What is accounting staff augmentation?', answer: 'Staff augmentation adds accounting professionals to your existing workflow for a defined period or ongoing need. It can be useful when work increases faster than hiring, a specialist is needed for a project, or your team needs temporary capacity without changing who owns review and approvals.' },
  { question: 'What work can augmented accounting staff handle?', answer: 'The scope can include bookkeeping, reconciliations, AP/AR, month-end close support, tax preparation tasks, audit support, reporting preparation, cleanup, and other defined accounting workflows. The exact responsibilities are agreed before onboarding.' },
  { question: 'How quickly can a team member start?', answer: 'The timeline depends on the role, availability, systems, documentation, and knowledge-transfer requirements. Rather than promise a universal start date, we scope the requirement first and confirm a realistic onboarding timeline.' },
  { question: 'Can augmented staff work in our existing systems?', answer: 'Yes. The model is designed to work inside your established accounting software, procedures, communication channels, and approval structure. The objective is to add capacity without forcing a separate operating process.' },
  { question: 'Does staff augmentation mean we lose control of the work?', answer: 'No. Your team can retain responsibility for approvals, accounting judgments, client communication, and final review. The augmented professional handles the defined preparation or operational work and flags exceptions according to the agreed workflow.' },
  { question: 'Is there a minimum commitment?', answer: 'The appropriate engagement length depends on the work. Support can be structured around a project, a busy period, a recurring workflow, or an ongoing capacity requirement. The proposal should match the actual workload rather than force every client into the same term.' },
  { question: 'Can an augmented team member eventually be hired permanently?', answer: 'That depends on the engagement terms and the circumstances of both organizations. If a long-term hiring path is important, it should be discussed before the engagement so the commercial and transition terms are clear.' },
];

const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
  { name: 'Staff Augmentation', url: `${baseUrl}/solutions/staff-augmentation` },
]);

export default function StaffAugmentationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Accounting Staff Augmentation"
        title="Accounting Staff Augmentation, Without Rebuilding Your Team"
        description="Bring defined accounting work into an extended team model for tax season, month-end close, cleanup, AP/AR, audit support, or projects—while your team keeps the review and approval responsibilities that matter."
        cta={{ text: 'Talk Through Your Staffing Need', href: '/contact' }}
        ctaSecondary={{ text: 'View Accounting Services', href: '/services' }}
        background="primary-gradient"
      />

      {/* Drawn for this page — see components/solution-illustration.tsx. */}

      <section className="w-full pt-8 md:pt-12 px-6 md:px-8 bg-white">

        <div className="max-w-5xl mx-auto flex justify-center">

          <div className="w-full max-w-[19rem] text-primary" role="img" aria-label="Accounting staff augmentation">

            <SolutionIllustration name="augmentation" />

          </div>

        </div>

      </section>


      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Reveal><><span className="text-sm font-semibold tracking-wide uppercase text-accent">The model</span><h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Add capacity where the work is actually piling up</h2></></Reveal>
              <p className="text-lg text-muted leading-relaxed">Staff augmentation works best when the work is clear. Instead of adding a person and figuring out the process later, define the recurring tasks, systems, deadlines, reviewer, and handoff points first. The additional professional can then work inside that process.</p>
              <p className="text-lg text-muted leading-relaxed">Your team can keep client relationships, approvals, accounting judgments, and final review while the augmented resource takes responsibility for the preparation and operational work assigned to them.</p>
              <div className="space-y-4 pt-2">
                {['Defined scope and ownership', 'Works in your existing systems', 'Documented onboarding and knowledge transfer', 'Clear review and escalation points', 'Flexible around seasonal or project demand', 'Capacity that can change as the workload changes'].map((item, i) => <div key={i} className="flex items-start gap-3"><Check className="text-accent shrink-0 w-5 h-5" aria-hidden="true" /><span className="text-foreground">{item}</span></div>)}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-white space-y-6">
              <h3 className="text-2xl font-bold">Where augmentation can help</h3>
              {[['Tax season', 'Move defined preparation and documentation work away from reviewers when volume increases.'], ['Month-end close', 'Add capacity for reconciliations, schedules, account support and close checklists.'], ['Cleanup', 'Work through historical unreconciled items, categorization issues and documentation gaps.'], ['Projects', 'Add accounting capacity for a defined system transition, cleanup, audit-support or reporting project.']].map(([title, text]) => <div key={title}><div className="font-bold text-lg mb-1">{title}</div><p className="text-white/80 text-sm leading-6">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto"><Reveal><h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Common use cases</h2></Reveal><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{[
          ['Overflow work', 'Take on client or internal accounting work that your existing team cannot absorb without delaying deadlines.'],
          ['Busy-season capacity', 'Add defined preparation or operational support during tax season, year-end, or other predictable peaks.'],
          ['Skill gaps', 'Bring in experience for a specific accounting workflow without changing the rest of your team.'],
          ['Project work', 'Assign additional capacity to a system transition, cleanup, audit-support project, or reporting initiative.'],
          ['Temporary coverage', 'Maintain defined workflows during leave, turnover, recruitment, or another temporary capacity gap.'],
          ['Growing workload', 'Test a support model around a recurring workload before deciding whether the role should become permanent.'],
        ].map(([title, desc], i) => <Reveal key={title} delay={i * 0.04}><InquiryTrigger className="bg-white rounded-2xl p-6 border border-border/70 h-full transition-colors hover:border-primary/40" source="/solutions/staff-augmentation"><h3 className="font-bold text-lg text-primary mb-2">{title}</h3><p className="text-sm text-muted leading-6">{desc}</p></InquiryTrigger></Reveal>)}</div></div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white"><div className="max-w-5xl mx-auto"><Reveal><><span className="text-sm font-semibold tracking-wide uppercase text-accent">How the handoff works</span><h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mt-2">Four things to define before work starts</h2></></Reveal><div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">{[
        ['01', 'Scope', 'List the exact recurring tasks or project deliverables the augmented professional owns.'],
        ['02', 'Systems', 'Document the accounting software, files, communication channels and access required.'],
        ['03', 'Review', 'Name the reviewer, approval points, deadlines and escalation rules.'],
        ['04', 'Measures', 'Agree what a completed week or month looks like so both teams can see whether the model is working.'],
      ].map(([num, title, text]) => <InquiryTrigger key={num} className="p-6 bg-input rounded-2xl border border-border/70 transition-colors hover:border-primary/40" source="/solutions/staff-augmentation"><div className="text-sm font-bold text-accent mb-3">{num}</div><h3 className="font-bold text-primary mb-2">{title}</h3><p className="text-muted text-sm leading-6">{text}</p></InquiryTrigger>)}</div></div></section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The term, defined</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Accounting Staff Augmentation, Defined Against What It Is Not
            </h2>
          </></Reveal>
          <Reveal className="space-y-4">
            <>
              <p className="text-base md:text-lg text-muted leading-relaxed">Staff augmentation gets used loosely enough that two firms can agree to it and mean different arrangements. The distinction that matters is who directs the work.</p>
              <h3 className="font-bold text-primary text-lg pt-2">Augmentation</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">You direct the work. We supply the capacity. The person works inside your systems, to your checklist, against your review points, and their output arrives in your queue looking like your team&rsquo;s output. You decide what gets done and in what order, day to day.</p>
              <h3 className="font-bold text-primary text-lg pt-2">A managed function</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">The provider directs the work and owns a defined outcome &mdash; a closed month, a clean payables queue &mdash; against an agreed standard. You review the result rather than the sequence. That is a different arrangement, and usually a better one where the process is stable and repetitive.</p>
              <h3 className="font-bold text-primary text-lg pt-2">A dedicated team</h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">A standing group working only your portfolio, with its own rhythm and a single point of contact. Closer to augmentation in who directs it, closer to a managed function in how it is staffed and how the knowledge accumulates.</p>
              <div className="overflow-hidden rounded-xl border border-border bg-white">
                <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent">When augmentation is the wrong answer</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">Augmentation adds hands to an existing process. Where the process is genuinely documented &mdash; checklists, conventions, worked examples, known exceptions &mdash; that is efficient. Where it lives in one senior person&rsquo;s head, adding hands multiplies the number of people asking that person questions, and the bottleneck gets worse rather than better.</p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">In that situation a scoped project, or a cleanup engagement with a defined end, is usually the more honest first step. We would rather say so at the scoping call than three weeks into a season.</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-muted leading-relaxed">One note on terminology: firms searching for &ldquo;finance staff augmentation&rdquo; often want something broader than this. What we add is accounting capacity &mdash; bookkeeping, close work, payables and receivables, payroll preparation, tax preparation and audit preparation. We do not provide CFO, treasury or financial-advisory support in any form.</p>
            </>
          </Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The commercials</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              What Actually Drives the Number
            </h2>
          </></Reveal>
          <Reveal className="space-y-4"><>
            <p className="text-base md:text-lg text-muted leading-relaxed">Accounting staff augmentation is priced three ways, and the structure matters more than the rate, because it decides who carries the risk of a slow week.</p>
            <h3 className="font-bold text-primary text-lg pt-2">By the hour</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">You pay for time recorded against your work. Sensible for genuinely variable demand, and for a first engagement where nobody yet knows how long the work takes. It leaves the volume risk with you and makes a busy month hard to forecast.</p>
            <h3 className="font-bold text-primary text-lg pt-2">By dedicated capacity</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">A defined share of a person&rsquo;s month &mdash; full-time, or a fixed fraction of it &mdash; at a fixed monthly figure. Sensible once the workload is steady and you want both a predictable cost line and someone who accumulates knowledge of your files. Idle time is yours to fill.</p>
            <h3 className="font-bold text-primary text-lg pt-2">By deliverable</h3>
            <p className="text-base md:text-lg text-muted leading-relaxed">A price per return, per reconciliation, per closed entity, per invoice processed. Sensible where the unit is genuinely standard. It moves the efficiency risk to us, which is only fair where we control the method &mdash; and it goes wrong quickly where every file is an exception.</p>
            <div className="overflow-hidden rounded-xl border border-border bg-white">
              <div className="border-l-4 border-accent p-5 sm:p-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent">Four things move the figure inside any of those</p>
                <p className="text-sm sm:text-base leading-relaxed text-foreground"><strong>The seniority the work actually needs</strong> &mdash; preparation and review are not the same rate, and paying review rates for preparation is the most common way this gets expensive. <strong>How documented your process is</strong> &mdash; undocumented conventions are paid for in ramp-up either way, in your time or in ours. <strong>How many systems are involved</strong> &mdash; three platforms and a spreadsheet is not one workflow. <strong>How much of the volume is exception work</strong> rather than the repeatable core.</p>
              </div>
            </div>
            <p className="text-base md:text-lg text-muted leading-relaxed">An hourly rate compared across providers without those four is not a comparison. We would rather scope the work and quote against it than publish a rate that would be wrong for most of the firms reading this.</p>
          </></Reveal>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal className="space-y-4"><>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-secondary" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">The working day</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Where the Overlap Sits, and Why It Changes What to Delegate
            </h2>
          </></Reveal>
          <Reveal className="space-y-4"><>
            <p className="text-base md:text-lg text-muted leading-relaxed">Delivery runs from our centre in New Delhi. India Standard Time is UTC+5:30, and that single fact shapes what this kind of capacity is good at.</p>
            <div className="space-y-4">
              {[
                ['United States', 'IST runs roughly nine and a half hours ahead of US Eastern. Work prepared during the Indian day is waiting when your reviewers start theirs. That suits preparation with a clear brief — reconciliations, workpapers, coding, schedules — and suits ambiguous work badly, because a question asked at 4pm Eastern waits until the following morning.'],
                ['United Kingdom', 'Around four and a half hours ahead. A UK morning and an Indian afternoon overlap directly, so a question asked and answered the same day is normal rather than exceptional.'],
                ['Australia', 'Around four and a half hours behind the eastern states. The overlap falls in your afternoon, which is where most review conversations happen anyway.'],
              ].map(([place, text]) => (
                <div key={place} className="rounded-xl border border-border bg-input p-5">
                  <div className="font-bold text-primary mb-1">{place}</div>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <p className="text-base md:text-lg text-muted leading-relaxed">We cover each market&rsquo;s business hours from that delivery centre rather than running one shift and calling it coverage. The implication for scoping is the same in all three: the more precisely the recurring work is defined, the less the time difference costs you &mdash; and the more the capacity is worth.</p>
          </></Reveal>
        </div>
      </section>

      <FAQSection subtitle="Staff Augmentation Questions" items={faqs} columns={2} />

      <section className="w-full py-12 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto"><h2 className="text-xl font-bold text-primary mb-4">Related Accounstone solutions</h2><div className="flex flex-wrap gap-3"><Link href="/solutions/offshore-accounting-support" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Offshore Accounting Support <ArrowRight size={14} /></Link><Link href="/solutions/dedicated-accounting-teams" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Dedicated Accounting Teams <ArrowRight size={14} /></Link><Link href="/resources/guides/choosing-an-engagement-model" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white border border-primary text-sm font-medium">Compare All 4 Models <ArrowRight size={14} /></Link><Link href="/services/bookkeeping/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Bookkeeping <ArrowRight size={14} /></Link><Link href="/services/tax-preparation/united-states" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border text-primary text-sm font-medium">Tax Preparation <ArrowRight size={14} /></Link></div></div></section>

      <FurtherReading

        topics={['Engagement models', 'CPA firms']}

        exclude="/solutions/staff-augmentation"

        background="white"

      />

      <InquirySection source="/solutions/staff-augmentation" title="Talk to Us About the Capacity You Are Missing" lead="A free consultation, and a call that costs nothing. Tell us how many hands you are short and for how long, and we will scope around your review structure." />

      <CTABanner title="Where Do You Need More Accounting Capacity?" description="Tell us the work that is falling behind, the deadline you are working toward, and the systems involved. We can scope a practical staffing model around it." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
    </main>
  );
}
