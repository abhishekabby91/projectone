import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import ServiceIllustration from '@/components/service-illustration';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  baseUrl,
} from '@/lib/seo';
import {
  cpaStateSupportContent,
  type CpaStateSupportKey,
} from '@/lib/cpa-firm-state-support-content';

export default function CpaStateSupportPage({ page }: { page: CpaStateSupportKey }) {
  const data = cpaStateSupportContent[page];
  const path = `/industries/cpa-firms/${data.slug}`;
  const breadcrumbs = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Industries', url: `${baseUrl}/industries` },
    { name: 'CPA Firms', url: `${baseUrl}/industries/cpa-firms` },
    { name: data.state, url: `${baseUrl}/industries/cpa-firms/${data.state.toLowerCase().replace(/ /g, '-')}` },
    { name: data.title, url: `${baseUrl}${path}` },
  ]);
  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.heroDescription,
    slug: data.slug,
    basePath: '/industries/',
    areaServed: [data.state, 'United States'],
  });
  const faqSchema = generateFAQSchema(data.faqs);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle={`For ${data.state} CPA and accounting firms`}
        title={data.title}
        description={data.heroDescription}
        cta={{ text: 'Discuss This Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'View CPA Firm Services', href: '/industries/cpa-firms' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full bg-white px-6 pt-6 md:px-8">
        <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries/cpa-firms" className="py-1.5 hover:text-primary">CPA Firms</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/industries/cpa-firms/${data.state.toLowerCase().replace(/ /g, '-')}`} className="py-1.5 hover:text-primary">{data.state}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">{data.title}</li>
        </ol>
      </nav>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{data.state} practice workflow</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">{data.introHeading}</h2>
            {data.intro.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-border bg-white p-5 sm:p-6">
            <ServiceIllustration service={data.illustrationService} className="mx-auto w-full max-w-[260px]" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Preparation → review</p>
            <p className="mt-2 text-base font-semibold text-primary">Make the evidence easy to follow</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">Keep source records, reconciliations, open questions and reviewer decisions visible in the agreed handoff.</p>
          </aside>
        </div>
      </section>

      <nav aria-label="On this page" className="w-full border-y border-border bg-white px-6 py-5 md:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-accent">On this page</p>
          <div className="flex flex-wrap gap-2">
            {data.sections.map((section, index) => (
              <a key={section.heading} href={`#workflow-${index + 1}`} className="rounded-full border border-border px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-secondary hover:bg-input">
                {section.heading}
              </a>
            ))}
            <a href="#first-pilot" className="rounded-full border border-border px-3 py-2 text-sm font-medium text-primary transition-colors hover:border-secondary hover:bg-input">First pilot</a>
          </div>
        </div>
      </nav>

      {data.sections.map((section, index) => (
        <section id={`workflow-${index + 1}`} key={section.heading} className={`w-full scroll-mt-6 px-6 py-10 md:px-8 md:py-14 ${index % 2 === 0 ? 'bg-white' : 'bg-input'}`}>
          <div className="mx-auto max-w-5xl space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{data.state} workflow {index + 1}</p>
            <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">{section.heading}</h2>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="max-w-4xl text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>
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

      <section id="first-pilot" className="w-full scroll-mt-6 bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">Before the first file moves</p>
            <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Define the scope and reviewer handoff</h2>
            <p className="leading-relaxed text-muted">A first engagement should be specific enough to evaluate. Agree the files, period, software, expected output, reviewer and exception process before recurring work begins.</p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.pilotChecklist.map((item) => (
                <li key={item} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-foreground">{item}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-2xl border border-border bg-white p-5 sm:p-6">
            <h3 className="font-semibold text-primary">Professional responsibility stays clear</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{data.responsibility}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">Before taxpayer information is shared, the firm should confirm applicable federal requirements, client permissions and engagement terms with qualified advisers.</p>
            <a href={data.reference.url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent">{data.reference.title} ↗</a>
            <p className="mt-2 text-xs leading-relaxed text-muted">{data.reference.note}</p>
          </aside>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-xl font-bold text-primary">Related CPA-firm support</h2>
          <p className="mb-5 leading-relaxed text-muted">This page covers one workflow. Use the state overview for broader accounting support and the national service pages for the general scope of bookkeeping, accounting and tax preparation.</p>
          <div className="flex flex-wrap gap-3">
            <Link href={`/industries/cpa-firms/${data.state.toLowerCase().replace(/ /g, '-')}`} className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">{data.state} CPA firm overview</Link>
            <Link href="/industries/cpa-firms" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">CPA firm outsourcing overview</Link>
            <Link href="/industries/cpa-firms/white-label-accounting" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">White-label accounting</Link>
            <Link href="/industries/cpa-firms/cas-production-support" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">CAS production support</Link>
            <Link href="/services/accounting/united-states" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">Accounting support</Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">Bookkeeping support</Link>
            <Link href="/services/tax-preparation/united-states" className="rounded-lg border border-border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-input">Tax preparation support</Link>
          </div>
        </div>
      </section>

      <FAQSection title={`Questions from ${data.state} CPA firms`} subtitle="Scope and review" items={data.faqs} columns={2} />
      <InquirySection region="united-states" source={path} title={`Discuss a defined workflow for your ${data.state} practice`} lead={data.heroDescription} />
      <CTABanner title={`Discuss ${data.state} CPA-firm support`} description="Start with a defined workflow, clear review points and a scope that fits your existing process." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
