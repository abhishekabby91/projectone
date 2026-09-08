import { Metadata } from 'next';
import Link from 'next/link';
import { User, BarChart3, Zap, MessageSquare, TrendingUp, ClipboardList } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquirySection from '@/components/inquiry-section';
import SectionHeading from '@/components/section-heading';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Communication & Support',
  description: 'How reporting, escalation and day-to-day contact are structured on an engagement, including who you speak to and how often updates arrive.',
  path: '/delivery-framework/communication',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'How We Work', url: `${baseUrl}/delivery-framework/communication` },
  { name: 'Communication', url: `${baseUrl}/delivery-framework/communication` },
]);

export default function CommunicationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Delivery Framework"
        title="Transparent Communication & Support"
        description="Who you speak to, what arrives and when, and what happens when something needs a decision — agreed in writing before the work starts."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading eyebrow="Day to day" title="How Contact Actually Works on an Engagement" lead="Who you speak to, how often, and how quickly a question comes back." />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-12">
            {[
              { title: 'A named point of contact', desc: 'One person who knows your engagement, not a queue. Named at onboarding, and you are told if it changes.', icon: User },
              { title: 'An agreed reporting rhythm', desc: 'What arrives, in what form, and on which day. Set to your close calendar rather than ours.', icon: BarChart3 },
              { title: 'Response times in writing', desc: 'Agreed at onboarding and written into the engagement, alongside the working-hours overlap they depend on.', icon: Zap },
              { title: 'Your channels, not new ones', desc: 'We work in the tools your team already uses and your policies already cover. We do not ask you to adopt ours.', icon: MessageSquare },
              { title: 'A standing review of the work', desc: 'A recurring look at what is running, what is slipping and what should change. Operational, not a sales call.', icon: TrendingUp },
              { title: 'Exceptions raised as exceptions', desc: 'Anything we cannot resolve from the records comes to you as a question, not as an assumption posted to the ledger.', icon: ClipboardList },
            ].map((item, i) => (
              <InquiryTrigger key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start p-3.5 sm:p-6 bg-input rounded-lg border border-border transition-colors hover:border-primary/40" source="/delivery-framework/communication" title="Talk to Us About How We Would Work Together">
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent flex-shrink-0" aria-hidden="true" />
                {/* min-w-0: a flex item defaults to min-width:auto and will not
                    shrink below its longest word, which pushed this card past
                    the viewport at 320px in a two-column grid. */}
                <div className="w-full min-w-0 break-words">
                  <h3 className="font-bold text-primary text-sm sm:text-base mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                </div>
              </InquiryTrigger>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="What actually breaks"
            title="Communication Fails in Three Specific Places"
            lead="Not because nobody replied. Because nobody had agreed what happens next."
          />
          <div className="mt-8 space-y-6">
            {[
              {
                h: 'The question that has no owner',
                p: 'A transaction cannot be categorised from the records available. Somebody has to decide, and on most engagements it is unclear who — so it gets posted to a best guess, or it sits. Both are worse than asking. We name at onboarding who holds that decision on your side, and what we do while we wait: the item is flagged, not guessed at, and it appears in the pack as an open question rather than as a number.',
              },
              {
                h: 'The handover nobody documented',
                p: 'People move on — ours and yours. Where the arrangement lives in one person\u2019s head, that departure costs a month. What prevents it is dull: written scope, written review points, written escalation path, and working papers a stranger can follow. We keep those current because they are what makes a change of person survivable, not because they look thorough.',
              },
              {
                h: 'The status nobody can see',
                p: 'Chasing status is expensive on both sides and it is usually a symptom, not a habit. If you have to ask where something is, the reporting rhythm is wrong. The fix is that the pack tells you what closed, what is open and what is waiting on you \u2014 before you ask, and in the same form every period.',
              },
            ].map((item) => (
              <div key={item.h} className="rounded-2xl border border-border bg-white p-5 sm:p-7">
                <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Time zones"
            title="An Offshore Team Is Not a Slower Team, but It Is a Shifted One"
            lead="The overlap is a design decision, and it belongs in the engagement letter rather than in an assumption."
          />
          <div className="mt-7 space-y-4 text-base md:text-lg text-muted leading-relaxed">
            <p>
              We work from New Delhi. Against a US business day that means work prepared while you are closed and
              waiting when you open; against the UK there is a working overlap in your morning; against Australia our
              day starts as yours is ending. None of those is better or worse — they change what a
              &ldquo;same-day&rdquo; answer means, and that is worth agreeing rather than discovering.
            </p>
            <p>
              So the useful questions at onboarding are: which hours do we need to be reachable, what counts as urgent,
              and who is the fallback if the named contact is unavailable. Those get written down.{' '}
              <Link href="/solutions/offshore-accounting-support" className="text-primary font-medium hover:underline">
                How the offshore model works
              </Link>{' '}
              covers the rest of the shape.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted leading-relaxed">
            For{' '}
            <Link href="/industries/cpa-firms" className="text-primary font-medium hover:underline">CPA firms</Link>{' '}
            specifically, communication is usually the difference between delegated work reducing review time and simply moving it elsewhere. See how this connects to{' '}
            <Link href="/delivery-framework/quality-assurance" className="text-primary font-medium hover:underline">review and quality control</Link>{' '}
            and{' '}
            <Link href="/delivery-framework/onboarding" className="text-primary font-medium hover:underline">how onboarding sets communication expectations</Link>{' '}
            from the start.
          </p>
        </div>
      </section>

      <InquirySection
        compact
        source="/delivery-framework/communication"
        title="See How We Would Communicate With Your Team"
        lead="Tell us your review points, your time zones and who needs to hear what, and we will describe the reporting rhythm we would set up."
      />

      <CTABanner
        title="Ask Us How This Would Run for You"
        description="Bring your review points, your time zones and your close calendar. We will describe the rhythm we would set up, before you commit to anything."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
