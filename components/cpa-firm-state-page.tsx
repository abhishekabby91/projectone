import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, baseUrl } from '@/lib/seo';
import { cpaFirmStateContent, type CpaFirmStateKey } from '@/lib/cpa-firm-state-content';

export default function CpaFirmStatePage({ state }: { state: CpaFirmStateKey }) {
  const data = cpaFirmStateContent[state];
  const path = `/industries/cpa-firms/${data.slug}`;
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Industries', url: `${baseUrl}/industries` },
    { name: 'CPA Firms', url: `${baseUrl}/industries/cpa-firms` },
    { name: data.name, url: `${baseUrl}${path}` },
  ]);
  const serviceSchema = generateServiceSchema({
    name: `Accounting Outsourcing Support for CPA Firms in ${data.name}`,
    description: data.heroDescription,
    slug: `cpa-firms/${data.slug}`,
    basePath: '/industries/',
    areaServed: [data.name, 'United States'],
  });
  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle={`For ${data.name} CPA and accounting firms`}
        title={`Accounting Outsourcing Support for ${data.name} CPA Firms`}
        description={data.heroDescription}
        cta={{ text: 'Discuss CPA Firm Support', href: '/contact' }}
        ctaSecondary={{ text: 'View CPA Firm Services', href: '/industries/cpa-firms' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/cpa-firms" className="py-1.5 hover:text-primary">CPA Firms</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">{data.name}</li>
        </ol>
      </nav>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">{data.name} practice workflows</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Where a defined preparation handoff can help</h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">{data.opening}</p>
        </div>
      </section>

      {data.sections.map((section, index) => (
        <section key={section.heading} className={`w-full px-6 py-10 md:px-8 md:py-14 ${index % 2 === 0 ? 'bg-input' : 'bg-white'}`}>
          <div className="mx-auto max-w-5xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{data.name} workflow {index + 1}</p>
            <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>
            ))}
            <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
              {section.examples.map((example) => (
                <article key={example.title} className="rounded-xl border border-border bg-white p-5">
                  <h3 className="mb-2 font-semibold text-primary">{example.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{example.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Before the first file moves</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">A pilot needs instructions, boundaries and a reviewer</h2>
          <p className="leading-relaxed text-muted">Use this list to define a contained first engagement. The best starting point is a repeatable task with available source records and an internal reviewer who can assess the result.</p>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {data.pilotChecklist.map((item) => (
              <li key={item} className="rounded-lg border border-border bg-input p-4 leading-relaxed text-foreground">{item}</li>
            ))}
          </ul>
          <p className="leading-relaxed text-muted">{data.responsibility}</p>
          <p className="leading-relaxed text-muted">
            Before any tax-return information is shared with an external provider, the firm should review the applicable requirements, client permissions and engagement terms with its qualified advisers. The IRS provides general taxpayer-data guidance in <a className="underline underline-offset-4 hover:text-primary" href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" target="_blank" rel="noreferrer">Publication 4557, Safeguarding Taxpayer Data</a>. This page is service information, not legal or tax advice.
          </p>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-xl font-bold text-primary">Related CPA-firm resources</h2>
          <p className="mb-5 leading-relaxed text-muted">Use the national overview for the overall delivery model and the service pages for the scope of a specific workflow.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/industries/cpa-firms" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-background">CPA firm outsourcing overview</Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-background">Bookkeeping support</Link>
            <Link href="/services/accounting/united-states" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-background">Accounting support</Link>
            <Link href="/services/tax-preparation/united-states" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-background">Tax preparation support</Link>
            <Link href="/resources/guides/client-accounting-services-cas-guide" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-background">Client accounting services guide</Link>
            <Link href="/resources/guides/how-to-outsource-accounting" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-background">How to outsource accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection title={`Questions from ${data.name} CPA firms`} subtitle="Scope and review" items={data.faqs} columns={2} />
      <InquirySection region="united-states" source={path} title={`Discuss a defined workflow for your ${data.name} practice`} lead={data.heroDescription} />
      <CTABanner title={`Discuss CPA firm outsourcing in ${data.name}`} description="Start with a defined workflow, clear review points and a scope that fits your existing process." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
