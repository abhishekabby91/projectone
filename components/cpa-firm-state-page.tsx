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
    description: data.focus,
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
        description="Defined accounting, bookkeeping and tax-preparation support that fits your firm's existing systems and review workflow. Your firm retains client relationships, professional judgment and agreed approval responsibilities."
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
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">A defined preparation workflow</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Outsourcing that fits the way your firm reviews work</h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Accounstone provides outsourced accounting and bookkeeping support to CPA and accounting firms that need help with defined recurring work or a specific production backlog. The engagement starts with the work itself: which client files are in scope, what the source records look like, which systems and templates are used, what evidence must accompany each schedule, and who resolves questions before a reviewer receives the file. The purpose is to make preparation more consistent, not to take control of the client relationship or replace your firm’s professional judgment.
          </p>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {data.focus} The examples on this page are intended to help a firm assess fit; they are not a claim that all practices in {data.name} have the same client mix or that Accounstone maintains an office in the state.
          </p>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Client portfolio context</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Match the support to the work your clients actually need</h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">{data.portfolioContext}</p>
          <p className="text-base leading-relaxed text-muted md:text-lg">{data.workflowContext}</p>
          <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
            {[
              ['Recurring bookkeeping', 'Transaction coding, account maintenance, bank and credit-card reconciliations, and follow-up lists for items that need client clarification.'],
              ['Month-end preparation', 'Agreed close schedules, balance-sheet reconciliations, proposed entries where in scope, and supporting documents organized for review.'],
              ['Tax preparation support', 'Workpaper and return-preparation tasks only where the software, scope, data-access requirements and review responsibilities have been confirmed.'],
              ['Reviewer handoff', 'A clear list of completed work, open questions, missing records, unusual items and decisions that remain with the firm.'],
            ].map(([title, description]) => (
              <article key={title} className="rounded-xl border border-border bg-white p-5">
                <h3 className="mb-2 font-semibold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">How an engagement is scoped</p>
          <h2 className="mb-6 mt-2 font-serif text-2xl font-bold text-primary md:text-3xl">A practical path from one workflow to recurring support</h2>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ['1. Define the work', 'Select the client, entity, period and tasks. Separate recurring work from historical cleanup, complex exceptions and judgment-based decisions.'],
              ['2. Agree the method', 'Confirm software access, source documents, chart-of-accounts mapping, templates, deadlines, naming conventions and escalation contacts.'],
              ['3. Prepare and document', 'Complete the agreed work and attach the schedules or evidence needed for the firm to review it without reconstructing the file.'],
              ['4. Review and refine', 'Your firm reviews the output, resolves professional questions and gives feedback. The workflow is adjusted before it is repeated at scale.'],
            ].map(([title, description]) => (
              <li key={title} className="rounded-xl border border-border p-5">
                <h3 className="mb-2 font-semibold text-primary">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 leading-relaxed text-muted">
            Accounstone can work in supported platforms already used by the firm, including QuickBooks Online, Xero, Drake Tax and CCH Axcess where the specific workflow has been confirmed. Software availability does not imply certification, a vendor partnership, implementation services or expertise in every feature. The firm should confirm the exact system, version, permissions and workpaper format during scoping.
          </p>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Confidentiality and responsibility</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Agree the data and review rules before work begins</h2>
          <p className="leading-relaxed text-muted">
            CPA firms should assess confidentiality, access controls, client permissions, contractual terms and applicable professional requirements before sharing client information with any external provider. Tax return information may be subject to specific federal disclosure and consent rules; requirements can depend on the service and facts. Review the current IRS guidance, including <a className="underline underline-offset-4 hover:text-primary" href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" target="_blank" rel="noreferrer">Publication 4557, Safeguarding Taxpayer Data</a>, and obtain advice from the firm’s qualified professional advisers where needed. This page is general service information, not legal or tax advice.
          </p>
          <p className="leading-relaxed text-muted">
            The engagement should state who may access the records, which tasks are prepared externally, how questions are escalated, who reviews the output, who communicates with the client and who approves or files the final work. Accounstone does not assume the CPA firm’s licensing, signing authority or professional obligations.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-xl font-bold text-primary">Related CPA-firm resources</h2>
          <p className="mb-5 leading-relaxed text-muted">Explore the main CPA-firm support page and service details before deciding which workflow to discuss.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/industries/cpa-firms" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">CPA firm outsourcing overview</Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">Bookkeeping support</Link>
            <Link href="/services/accounting/united-states" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">Accounting support</Link>
            <Link href="/services/tax-preparation/united-states" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">Tax preparation support</Link>
            <Link href="/resources/guides/client-accounting-services-cas-guide" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">Client accounting services guide</Link>
            <Link href="/resources/guides/how-to-outsource-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">How to outsource accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection title={`Questions from ${data.name} CPA firms`} subtitle="Before you scope the work" items={data.faqs} columns={2} />
      <InquirySection region="united-states" source={path} title={`Discuss accounting support for your ${data.name} practice`} lead="Tell us which client workflow is creating the backlog, what software you use and what the reviewer needs to receive. We can discuss whether a defined pilot is a fit." />
      <CTABanner title={`Discuss CPA firm outsourcing in ${data.name}`} description="Start with a defined workflow, clear review points and a scope that fits your existing process." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
