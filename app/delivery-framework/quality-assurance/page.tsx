import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquiryTrigger from '@/components/inquiry-trigger';
import SectionHeading from '@/components/section-heading';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Quality Assurance & Controls',
  description: 'The review layers behind a delivered file — documented checklists, reconciliation controls and the checkpoints agreed before work starts.',
  path: '/delivery-framework/quality-assurance',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'How We Work', url: `${baseUrl}/delivery-framework/quality-assurance` },
  { name: 'Quality Assurance', url: `${baseUrl}/delivery-framework/quality-assurance` },
]);

export default function QAPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Delivery Framework"
        title="Quality Assurance & Internal Controls"
        description="Multi-level review, documented checklists, and reconciliation controls behind every close cycle — not a one-time quality claim."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary">QA Framework</h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                {[
                  { title: 'Prepared, then checked', desc: 'Work is checked by someone other than the person who did it before it reaches your review. Two people, not one twice.' },
                  { title: 'Checked against the source', desc: 'Balances agreed to statements and sub-ledgers, not to last period. Agreeing to last period is how an error becomes permanent.' },
                  { title: 'Exceptions raised, not resolved', desc: 'Anything the records cannot settle comes to you as a question. We do not post an assumption to make a period close.' },
                  { title: 'Findings tracked to closure', desc: 'Your recurring review notes are the measure that matters. If the same ones keep coming back after two cycles, the process is wrong.' },
                ].map((item, i) => (
                  <InquiryTrigger key={i} className="p-3 sm:p-4 bg-input rounded-lg border border-border transition-colors hover:border-primary/40" source="/delivery-framework/quality-assurance" title="Talk to Us About Review and Quality">
                    <h3 className="font-bold text-primary text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                  </InquiryTrigger>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary">Quality Standards</h2>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                {[
                  { title: 'Your standard, not a generic one', desc: 'We work to your templates, your review points and your materiality. Onboarding is largely about capturing them.' },
                  { title: 'To your calendar', desc: 'Deliverables land on the dates agreed at onboarding. If one is going to slip you hear it before the date, not after.' },
                  { title: 'Followable a year later', desc: 'The test is whether someone who was not there can see how a number was reached. That is what makes a notice or an audit cheap.' },
                  { title: 'Nothing signed by us', desc: 'Review here means preparation quality. Professional sign-off is a licensed act and stays with your people.' },
                ].map((item, i) => (
                  <div key={i} className="p-3 sm:p-4 bg-accent/10 rounded-lg border border-accent">
                    <h3 className="font-bold text-accent text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionHeading
            eyebrow="The limit"
            title="What Our Review Does Not Replace"
            lead="A preparation provider's review and a professional's review are different acts. Confusing them is the thing that makes an engagement go wrong quietly."
          />
          <div className="space-y-6">
            {[
              {
                h: 'It does not replace professional judgement',
                p: 'Our check answers "is this prepared correctly and supported?" It cannot answer "is this the right treatment for this business?" — that requires knowing the client, the intent behind a transaction and the position the firm is willing to take. Those sit with your licensed people and cannot be delegated to a preparer, ours or anyone\u2019s.',
              },
              {
                h: 'It does not replace your sign-off',
                p: 'Nothing we prepare is signed, filed or submitted by us. Returns go to your CPA, Enrolled Agent, registered practitioner or registered agent to review, sign and file under their own credentials. On audit work, materiality, sampling, testing conclusions and the opinion stay with the audit firm — we prepare schedules, documentation and evidence, and that is the whole of it.',
              },
              {
                h: 'It does not make the underlying records better than they are',
                p: 'If source documents are missing or contradictory, review surfaces that; it does not resolve it. A period built on incomplete records is incomplete after our check too — it is simply visible rather than buried. That is the useful outcome, and it is worth saying plainly because "reviewed" is often read as "fixed".',
              },
              {
                h: 'It is measured by your notes, not by ours',
                p: 'Any provider can describe a multi-level review. The only measure that means anything is whether your reviewers are writing fewer notes each cycle on the same recurring issues. Expect more notes than usual in the first cycle while we learn your standards, and fewer than before after that. If that is not what happens, tell us — that is the signal something in the arrangement is wrong.',
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

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted leading-relaxed">
            Review structure matters most on{' '}
            <Link href="/services/audit-support/united-states" className="text-primary font-medium hover:underline">audit support</Link>{' '}
            and{' '}
            <Link href="/services/tax-preparation/united-states" className="text-primary font-medium hover:underline">tax preparation</Link>{' '}
            work, where final sign-off stays with your CPA, Enrolled Agent, or audit team. See how this fits into{' '}
            <Link href="/delivery-framework/onboarding" className="text-primary font-medium hover:underline">onboarding</Link>{' '}
            and{' '}
            <Link href="/delivery-framework/communication" className="text-primary font-medium hover:underline">ongoing communication</Link>.
          </p>
        </div>
      </section>

      <InquirySection
        compact
        source="/delivery-framework/quality-assurance"
        title="Ask How Review Would Work on Your Files"
        lead="Tell us what a finished file has to look like before your reviewer signs it, and we will describe the checkpoints we would build to get it there."
      />

      <CTABanner
        title="Want to See How Review Works in Practice?"
        description="Talk through what our QA process would look like on your engagement."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
