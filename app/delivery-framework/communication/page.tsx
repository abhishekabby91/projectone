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
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Working rhythm"
            title="Clear Handoffs and Agreed Response Expectations"
            lead="Communication expectations are set during onboarding and recorded in the engagement workflow."
          />
          <div className="mt-7 space-y-4 text-base md:text-lg text-muted leading-relaxed">
            <p>
              Each engagement defines who owns questions, how exceptions are raised, which decisions stay with your team and how work moves through preparation and review.
            </p>
            <p>
              Reporting cadence, escalation contacts and close-calendar handoffs are agreed before recurring work begins. We document the process rather than relying on assumed availability.{' '}
              <Link href="/solutions/offshore-accounting-support" className="text-primary font-medium hover:underline">
                How the offshore model works
              </Link>{' '}
              covers the wider delivery approach.
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
        lead="Tell us your review points, handoffs and who needs to hear what, and we will describe the reporting rhythm we would set up."
      />

      <CTABanner
        title="Ask Us How This Would Run for You"
        description="Bring your review points, close calendar and escalation needs. We will describe the communication rhythm before you commit."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
