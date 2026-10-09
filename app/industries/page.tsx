import { Metadata } from 'next';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { industries } from '@/lib/data';

export const metadata: Metadata = genMeta({
  title: 'Industry Accounting & Bookkeeping Support',
  description:
    'Accounting, bookkeeping and tax support for CPA firms, real estate, property management, e-commerce, healthcare and technology businesses.',
  path: '/industries',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
]);

export default function IndustriesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
            Industries
          </span>
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-primary text-balance">
            Industry-Focused Accounting, Bookkeeping, Tax and Outsourcing Support
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Every sector breaks in its own place. A property portfolio breaks on structure, an
            online retailer on settlements, a practice on the review queue. Pick the one you work
            in and the page describes the accounting rather than the industry.
          </p>
        </div>
      </section>

      <SectionGrid
        subtitle="Explore by Industry"
        title="Specialized Support for Your Sector"
        description="Each page explains the accounting work involved, the responsibilities that remain with the client, and common issues in that sector's books."
        items={industries}
        baseUrl="/industries"
        columns={3}
        variant="default"
      />

      <InquirySection source="/industries" title="Tell Us About Your Accounting Workflow" lead="Share your industry and the recurring work you need help with. We can discuss whether our accounting support fits your systems and processes." />

      <CTABanner
        title="Don't See Your Industry?"
        description="Accounting support can be structured for businesses across multiple sectors around their systems, transactions and reporting requirements."
        cta={{ text: 'Contact Us', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
