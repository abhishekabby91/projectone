import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import ResourceCard from '@/components/resource-card';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { insights } from '@/lib/resources';

const PATH = '/resources/insights';

export const metadata: Metadata = genMeta({
  title: 'Accounting & Tax Explainers',
  description:
    'Short explainers on accounting and tax topics that come up for growing businesses, including sales tax nexus and ASC 606 revenue recognition.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}/resources` },
  { name: 'Insights', url: `${baseUrl}${PATH}` },
]);

export default function InsightsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative w-full overflow-hidden bg-white px-6 md:px-8 py-12 md:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-full max-w-[32rem] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted">
              <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/resources" className="inline-block py-1.5 hover:text-primary transition-colors">Resources</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-primary">Insights</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Insights"
            title="Quick Explainers"
            lead="Shorter reads on a single accounting or tax topic, for when you need the answer rather than the background."
          />
        </div>
      </section>

      <section className="w-full bg-input px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl space-y-4">
          <SectionHeading eyebrow="Explainers" title="Short Answers to Recurring Questions" />
          {insights.map((insight, i) => (
            <Reveal key={insight.href} delay={Math.min(i * 0.08, 0.24)}>
              <ResourceCard item={insight} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Longer reads"
            title="Looking for More Depth?"
            lead="The guides cover the same ground at length, including costs, workflows and how the work is structured across regions."
          />
          <Reveal delay={0.08}>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/resources/guides" className="inline-flex min-h-[44px] items-center rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-light">
                Browse guides
              </Link>
              <Link href="/blog" className="inline-flex min-h-[44px] items-center rounded-lg border border-border bg-input px-5 py-3 font-semibold text-primary transition-colors hover:border-primary/50">
                Read the blog
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <InquirySection
        compact
        source="/resources/insights"
        title="Want This Applied to Your Numbers?"
        lead="Tell us how the reporting is put together today and we will scope the schedule and reconciliation work behind it."
      />


      {/* Closes on the same sequence as the rest of the site: the enquiry
          band, then the CTA banner. 87 of 95 pages already ended this way;
          these five had the band and stopped. Copy is page-specific because
          /resources and /resources/guides already sit at 29.6% on the
          near-duplicate sweep, and one shared banner would push it. */}
      <CTABanner
        title="Explainers End Where Your Ledger Begins"
        description="These set out how the treatment works. Tell us how yours is maintained today and we will scope the schedules and reconciliations behind it."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        ctaSecondary={{ text: 'All Resources', href: '/resources' }}
        background="primary"
      />
    </main>
  );
}
