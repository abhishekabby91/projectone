import { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import ResourceCard from '@/components/resource-card';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { guides } from '@/lib/resources';

const PATH = '/resources/guides';

export const metadata: Metadata = genMeta({
  title: 'Accounting & Bookkeeping Guides',
  description:
    'In-depth guides on outsourced bookkeeping costs, QuickBooks vs. Xero, and how CPA firms use staff augmentation during tax season.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}/resources` },
  { name: 'Guides', url: `${baseUrl}${PATH}` },
]);

const featured = guides.find((g) => g.featured);
const rest = guides.filter((g) => !g.featured);

export default function GuidesPage() {
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
              <li aria-current="page" className="font-medium text-primary">Guides</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Guides"
            title="In-Depth Guides"
            lead="Longer-form guides on the accounting decisions that actually come up for growing businesses and CPA firms."
          />
        </div>
      </section>

      {featured && (
        <section className="w-full bg-input px-6 md:px-8 py-10 md:py-12">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Start here" title="The Guide That Covers the Most Ground" />
            <div className="mt-6" />
            <Reveal>
              <ResourceCard item={featured} featured />
            </Reveal>
          </div>
        </section>
      )}

      {/* One per row deliberately: these titles run 60-90 characters and wrap
          badly at half width. See CLAUDE.md "Responsive breakpoints". */}
      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow={`All guides`} title={`Everything Else We Have Written`} />
          <div className="mt-8 space-y-4">
            {rest.map((guide, i) => (
              <Reveal key={guide.href} delay={Math.min(i * 0.05, 0.24)}>
                <ResourceCard item={guide} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InquirySection
        compact
        source="/resources/guides"
        title="Ready to Apply One of These?"
        lead="The guides cover the general case. Tell us your systems, volume and deadlines and we will work through the version that applies to you."
      />


      {/* Closes on the same sequence as the rest of the site: the enquiry
          band, then the CTA banner. 87 of 95 pages already ended this way;
          these five had the band and stopped. Copy is page-specific because
          /resources and /resources/guides already sit at 29.6% on the
          near-duplicate sweep, and one shared banner would push it. */}
      <CTABanner
        title="The Guide Is the General Case"
        description="Your systems, volume and deadlines are not. Walk us through them and we will work through the version that applies to you."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        ctaSecondary={{ text: 'All Resources', href: '/resources' }}
        background="primary"
      />
    </main>
  );
}
