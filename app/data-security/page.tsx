import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Data Security & Protection',
  description:
    'How Accounstone approaches client-system access, data handling, responsibilities and the limits of its current security certifications.',
  path: '/data-security',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Data Security', url: `${baseUrl}/data-security` },
]);

export default function DataSecurityPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Trust & Compliance"
        title="How We Handle Your Data"
        description="An overview of access and data-handling practices to discuss before work begins, including certifications Accounstone does and does not hold."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="bg-input border-2 border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Where We Stand Today</h2>
            <p className="text-muted leading-relaxed mb-4">
              We're a growing company, and we'd rather be direct about our current
              security posture than list certifications we don't hold yet. Here's
              where we actually stand:
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Confidentiality terms and data-handling responsibilities are agreed as part of each engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Your financial data stays in your own QuickBooks Online, Xero, or other accounting software — not a separate proprietary system you'd lose access to</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Accounstone does not currently hold SOC 2 or ISO 27001 certification. Confirm any required certifications before beginning procurement</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-accent w-5 h-5" aria-hidden="true" />
                <span>Access to client systems is limited to the team members actually working on your account</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary">What This Means Practically</h2>
              <p className="text-muted leading-relaxed">
                Because we work inside your own accounting platform rather than a
                separate system, your data benefits from that platform's own
                security infrastructure (QuickBooks Online and Xero both invest
                heavily in this) in addition to our access controls and
                confidentiality practices.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-primary">Questions We Expect</h2>
              <p className="text-muted leading-relaxed">
                If you are running a vendor security review, the three questions that matter are our certification
                status, how access is controlled, and what happens if something goes wrong. They are answered below
                rather than left as an invitation to ask.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                The Three Questions a Vendor Review Asks
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                Answered as they actually stand today. Where the answer is &ldquo;not yet&rdquo;, it says so.
              </p>
            </div>

            {[
              {
                h: '1. What certifications do you hold?',
                p: 'Accounstone does not currently hold SOC 2 or ISO 27001 certification. If your procurement process requires a current SOC 2 report, confirm this before an evaluation proceeds.',
              },
              {
                h: '2. How is access controlled?',
                p: 'Access is to your systems, granted by you, at the level you set — we do not take a copy of your data into a platform of ours. It is limited to the people actually assigned to your engagement rather than to a general team pool, it is agreed in writing at onboarding, and it is removed when a person leaves the engagement or the engagement ends. We ask for the least access that lets the work happen, and we would rather be told no and work around it than hold access nobody reviewed.',
              },
              {
                h: '3. What happens if something goes wrong?',
                p: 'You are told, promptly and by a person, with what we know and what we do not yet know rather than a reassurance. Because the work happens in your systems under your credentials, we can tell you what we did and when; your platform\u2019s own audit log is the authoritative record and it is one you control, not one we could edit. We do not have a certified incident response programme and we are not going to describe one we do not run.',
              },
            ].map((item) => (
              <div key={item.h} className="rounded-2xl border border-border bg-input p-6 sm:p-8">
                <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.p}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-l-4 border-accent bg-input p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-primary">What Bounds the Worst Case</h2>
            <p className="mt-3 text-muted leading-relaxed">
              The strongest thing we can tell you about our security is structural rather than procedural: there are
              several things we never hold, so they cannot be lost through us.
            </p>
            <ul className="mt-4 space-y-3 text-muted">
              {[
                'We hold no payment authority. Payments are prepared for your approval and released by you, on your banking, under your credentials.',
                'We hold no tax authority credentials — no IRS e-filing under our number, no HMRC portal access, no ATO portal access. Filing stays with your licensed practitioner.',
                'We hold no copy of your accounting system. The work happens in your file, so revoking our access ends our access — there is no separate database to ask us to delete.',
                'We do not move client data into tools you have not agreed to. If a task would need one, we ask first.',
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              These boundaries do not replace an independent security assessment or certification. They describe access and responsibility limits that should be confirmed for the specific engagement.
            </p>
          </div>
        </div>
      </section>

      <InquirySection
        compact
        source="/data-security"
        title="Ask Us the Hard Security Questions"
        lead="Ask about access, device controls, data handling and any requirements your procurement process needs to verify. We will clarify what we can confirm and where additional documentation may be needed."
      />

      <CTABanner
        title="Have Specific Security Questions?"
        description="Ask us directly — we'd rather answer honestly than guess what you want to hear."
        cta={{
          text: 'Schedule Security Discussion',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
