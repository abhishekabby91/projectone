import { Metadata } from 'next';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquirySection from '@/components/inquiry-section';
import SectionHeading from '@/components/section-heading';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Compliance & Regulatory Standards',
  description: 'How Accounstone approaches accounting standards, tax regulations, and industry compliance requirements across the US, UK, and Australia.',
  path: '/compliance',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Compliance', url: `${baseUrl}/compliance` },
]);

export default function CompliancePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Trust & Compliance"
        title="Regulatory Compliance & Standards"
        description="Accounting work structured around GAAP, IFRS, tax regulations, and the compliance requirements relevant to your industry and location."
        background="primary-gradient"
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div>
            <SectionHeading eyebrow="By market" title="What Each Market Actually Requires" lead="The obligations differ enough that a single compliance statement would describe none of them accurately." />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'United States',
                items: ['GAAP Compliance', 'Federal Tax Requirements', 'State Tax Compliance', 'SOX Requirements (large firms)'],
              },
              {
                title: 'United Kingdom',
                items: ['IFRS Compliance', 'Companies House Reporting', 'VAT Regulations', 'Anti-Money Laundering (AML) Requirements'],
              },
              {
                title: 'Australia',
                items: ['IFRS Compliance', 'ATO Requirements', 'GST and BAS Reporting Standards', 'Superannuation Rules'],
              },
            ].map((region, i) => (
              <InquiryTrigger key={i} className="p-6 bg-input rounded-lg border border-border transition-colors hover:border-primary/40" source={`/compliance — ${region.title}`} title="Talk to Us About Your Compliance Cycle">
                <h3 className="text-xl font-bold text-primary mb-4">{region.title}</h3>
                <ul className="space-y-2">
                  {region.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="text-accent w-5 h-5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </InquiryTrigger>
            ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold">Our Approach to Compliance</h2>
            <p>As a growing company, here is where we honestly stand today:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>NDA-backed engagements for every client relationship</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>Records kept to the cycle each market runs on, rather than to one calendar applied to all three</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>Submission, lodgment and sign-off left with your licensed practitioner in every market — we hold no portal credentials anywhere</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5" aria-hidden="true" />
                <span>Actively working toward formal certifications such as SOC 2 — ask us for our current status</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionHeading
            eyebrow="The distinction that matters"
            title="A Preparation Provider Does Not Carry Your Compliance"
            lead="This is the most common misunderstanding about outsourced accounting, and the most expensive one to discover late."
          />
          <div className="space-y-6">
            {[
              {
                h: 'Compliance obligations do not transfer',
                p: 'When you outsource preparation, the obligation to file correctly and on time stays exactly where it was — with you and with your licensed practitioner. Nothing in an engagement with us changes who a tax authority holds responsible. What changes is whether the records behind the filing are ready, current and supportable. Any provider who implies they take on the obligation itself is describing something they cannot do.',
              },
              {
                h: 'Which is why the sign-off line is drawn where it is',
                p: 'We do not hold IRS e-filing credentials, HMRC portal access or ATO portal access, and we do not sign returns. That is not caution for its own sake — submission is a licensed act, and a provider holding those credentials would be performing one. Returns and statements are prepared for your CPA, Enrolled Agent, registered practitioner or registered agent to review, sign and submit under their own credentials.',
              },
              {
                h: 'Regulators that do not apply, named anyway',
                p: 'This page once cited the FCA in the UK and ASIC in Australia. Both are financial-services regulators, not accounting-service ones, and neither governs a bookkeeping provider. They were removed. It is worth naming because it is a common pattern on competitor pages, and a citation that does not apply is a reasonable signal that the rest of the page was not checked either.',
              },
              {
                h: 'What we can be held to',
                p: 'The scope in the engagement letter, the review points agreed at onboarding, and the state the records are in when your practitioner picks them up. Those are real commitments and they are the right ones to hold a preparation provider to. Ask a prospective provider which of the two categories their promises fall into — it separates the ones who have thought about it from the ones who have not.',
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

      <InquirySection
        compact
        source="/compliance"
        title="Ask Us How We Handle Your Requirements"
        lead="Tell us which obligations and reporting cycles govern your work, and we will explain how the engagement would be structured around them."
      />

      <CTABanner
        title="Tell Us Which Obligations Govern Your Work"
        description="We will describe how the engagement would be structured around them, and say plainly where the line is between our preparation and your practitioner's sign-off."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="accent"
      />
    </main>
  );
}
