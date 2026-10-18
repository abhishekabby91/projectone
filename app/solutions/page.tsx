import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { solutions } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Outsourcing Models',
  description:
    'Compare accounting outsourcing models, from defined back-office workflows to staff augmentation and dedicated teams, based on your workload.',
  path: '/solutions',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Solutions', url: `${baseUrl}/solutions` },
]);

export default function SolutionsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Accounting Outsourcing"
        title="Accounting Outsourcing Engagement Models"
        description="Choose how to outsource recurring accounting work, from a defined function or back-office workflow to staff augmentation or a dedicated team, with responsibilities and review points agreed in advance."
        cta={{
          text: 'Discuss Your Outsourcing Needs',
          href: '/contact',
        }}
        ctaSecondary={{
          text: 'View Services',
          href: '/services',
        }}
        background="primary-gradient"
      />

      <SectionGrid
        subtitle="Solutions Overview"
        title="Choose Your Engagement Model"
        items={solutions}
        baseUrl="/solutions"
        columns={3}
        variant="default"
      />

      <section className="w-full py-8 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted leading-relaxed">
            Not sure which of these fits? See{' '}
            <Link href="/resources/guides/choosing-an-engagement-model" className="text-primary font-medium hover:underline">
              a side-by-side comparison of all four models
            </Link>{' '}
            and a decision framework for matching one to your situation.
          </p>
        </div>
      </section>

      <InquirySection source="/solutions" title="Discuss Your Accounting Outsourcing Needs" lead="Tell us which accounting function or recurring workload you want to outsource. We can discuss your systems, scope, review process and the engagement model that fits." />

      <CTABanner
        title="Ready to Discuss Your Accounting Work?"
        description="Share the accounting work you want to outsource and how your existing workflow operates. We can discuss a practical scope and delivery model."
        cta={{
          text: 'Discuss Your Needs',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
