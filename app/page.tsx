import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import HeroBanner from '@/components/hero-banner';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import TestimonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ProcessFlow from '@/components/process-flow';
import AccountingWorkflowIllustration from '@/components/accounting-workflow-illustration';
import IndustryIllustration from '@/components/industry-illustration';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import { services, solutions, testimonials } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Outsourcing for CPA & Accounting Firms | Accounstone',
  description:
    'Accounting, bookkeeping and tax outsourcing for CPA and accounting firms, with work prepared within existing workflows and review processes.',
  path: '/',
  absoluteTitle: true,
  ogTitle: 'Accounting Outsourcing for CPA & Accounting Firms | Accounstone',
  ogDescription:
    'Accounting outsourcing support for CPA and accounting firms, including bookkeeping, tax preparation and recurring client-accounting work within existing workflows.',
  ogImageAlt: 'Accounstone — Accounting, Bookkeeping & Tax Outsourcing',
});

const homePageFAQs = [
  {
    question: 'What services does Accounstone provide?',
    answer:
      'Bookkeeping, accounting operations, tax preparation, payroll, accounts payable, accounts receivable, financial reporting and related accounting support can be scoped around the work that needs to be handed off and the review points that remain in-house.',
  },
  {
    question: 'Who does Accounstone work with?',
    answer:
      'Accounstone primarily supports CPA and accounting firms with recurring bookkeeping, accounting operations, tax-preparation and related production work. Work is structured around the firm’s existing software, client requirements, documentation standards and review workflows. Separate industry pages describe accounting workflows relevant to property management, HOA and real estate-related work.',
  },
  {
    question: 'Can you work with our existing software?',
    answer:
      'Yes. Supported platforms include QuickBooks Online, Xero, Sage, NetSuite, Drake Tax, CCH Axcess and MYOB, along with client-specific systems and workflows. The objective is to fit the existing process rather than force a system change.',
  },
  {
    question: 'How quickly can you get started?',
    answer:
      'Most engagements begin with structured discovery and knowledge transfer. The timeline depends on your workflows, systems, documentation, current books and the scope being handed over.',
  },
  {
    question: 'How is an engagement scoped?',
    answer:
      'Transaction volume, workflow complexity, systems, deadlines, review points and the work to remain in-house determine the scope. A written scope is prepared once those requirements are clear rather than starting with a standard package.',
  },
  {
    question: 'Do you provide offshore accounting support?',
    answer:
      'Remote delivery follows documented workflows, defined responsibilities and agreed review processes, working as an extension of client teams.',
  },
];

const faqSchema = generateFAQSchema(homePageFAQs);

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section data-section="hero">
        <HeroBanner
          image="/hero-accounting-support.jpg"
          alt="Accounting reports, charts and calculator on a desk"
          pageHeading="Accounting Outsourcing for CPA & Accounting Firms"
          title="Your Accounting Outsourcing Partner"
          subtitle="Bookkeeping, tax preparation and recurring accounting support within your firm’s workflows"
          cta={{ text: 'Discuss CPA Firm Support', href: '/contact' }}
          ctaSecondary={{ text: 'Book a Consultation', href: 'https://cal.com/abby-xne7d4/30min' }}
        />
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <Reveal className="space-y-4">
            <>
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                <span className="w-4 h-px bg-accent" aria-hidden="true" />
                Accounting Support for CPA and Accounting Firms
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                What Work Can Your Firm Outsource?
              </h2>
              <p className="text-muted leading-relaxed">
                Accounstone supports CPA and accounting firms with defined bookkeeping, reconciliations, month-end close, accounts payable and receivable, tax-preparation workpapers and related accounting production. Work is prepared within the firm’s existing software, documentation standards and review workflow. The firm retains client relationships, professional judgment, final review and filing or sign-off responsibilities as applicable. Service and industry pages explain specific work types and workflows, helping firms identify the support that fits their practice without changing their core systems.
              </p>
            </>
          </Reveal>
          <Reveal delay={0.12} className="mx-auto w-full max-w-[360px]">
            <AccountingWorkflowIllustration />
          </Reveal>
        </div>

      </section>

      <section data-section="services">
        <SectionGrid
          subtitle="Services"
          title="Accounting Services That Keep Work Moving"
          description="Practical support across bookkeeping, accounting operations, tax preparation, payroll, payables, receivables and financial reporting."
          items={services.map((s) => ({
            ...s,
            // Link service cards directly to the active U.S. service pages.
            // This keeps homepage navigation aligned with the current service architecture.
            slug: `${s.slug}/united-states`,
          }))}
          baseUrl="/services"
          columns={4}
          variant="default"
          tone="brand"
        />
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">
                  Industry Experience
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                Industry Workflows Relevant to Accounting Firms
              </h2>
              <p className="max-w-3xl text-muted leading-relaxed">
                CPA and accounting firms serve clients across different industries. These supporting pages explain selected accounting workflows in real estate, property management and HOA-related work. They remain secondary to Accounstone’s core accounting-firm outsourcing offer and are also available to visitors searching for those specific workflows.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {[
              {
                title: 'Accounting & CPA Firms',
                href: '/industries/cpa-firms',
                industry: 'cpa-firms',
                description: 'Recurring preparation work that fits your review and client workflows.',
              },
              {
                title: 'Real Estate',
                href: '/industries/real-estate',
                industry: 'real-estate',
                description: 'Transaction records, reconciliations and property-related reporting support.',
              },
              {
                title: 'Property Management',
                href: '/industries/property-management',
                industry: 'property-management',
                description: 'Property-level books, tenant and owner ledgers, and monthly reporting.',
              },
              {
                title: 'HOA & Associations',
                href: '/industries/hoa-accounting',
                industry: 'hoa-accounting',
                description: 'Assessment ledgers, operating and reserve records, and board reporting.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.06, 0.18)}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col rounded-xl border border-border bg-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_4px_18px_-8px_rgba(30,58,95,0.22)] sm:p-5"
                >
                  <div className="mb-3 rounded-lg bg-input p-1.5 sm:p-2">
                    <IndustryIllustration industry={item.industry} className="mx-auto w-full max-w-[220px]" />
                  </div>
                  <h3 className="font-serif text-sm font-bold leading-tight text-primary sm:text-lg">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent sm:mt-4 sm:text-sm">
                    Explore industry <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <Reveal className="space-y-6">
              <>
                <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  <span className="w-4 h-px bg-accent" aria-hidden="true" />
                  Why Accounstone
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                  A Delivery Partner, Not Just Extra Hands
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  Defined accounting work can run inside existing processes with documented responsibilities and established review standards.
                </p>
                <div className="space-y-4 pt-4 pl-5 margin-rule">
                  {[
                    'Experienced accounting professionals',
                    'Documented onboarding and knowledge transfer',
                    'Quality review before work reaches your team',
                    'Clear communication and defined ownership',
                    'Support that can scale with workload',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <Check className="text-accent shrink-0 w-5 h-5" aria-hidden="true" />
                      <p className="text-foreground font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </>
            </Reveal>

            <Reveal
              delay={0.15}
              className="relative overflow-hidden bg-linear-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white space-y-7 shadow-xl"
            >
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(to bottom, white 0, white 1px, transparent 1px, transparent 28px)',
                  }}
                />
                <div className="relative space-y-3">
                  <h3 className="font-serif text-3xl font-bold">Built Around Your Process</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    The workflow is mapped, handoffs documented, responsibilities defined and review points established before recurring work begins.
                  </p>
                </div>
                <div className="relative border-t border-white/15 pt-5">
                  <p className="text-white/70">
                    The objective is straightforward: make outsourced work easier to manage, review and continue.
                  </p>
                </div>
              </>
            </Reveal>
          </div>
        </div>
      </section>

      <section data-section="solutions">
        <SectionGrid
          subtitle="Engagement Models"
          title="Support Built Around Your Team"
          description="Choose the delivery model that matches your workload, processes, review structure and growth plans."
          items={solutions}
          baseUrl="/solutions"
          columns={2}
          variant="default"
          tone="brand"
        />
      </section>

      <section data-section="work-model" className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-6xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">How responsibilities are divided</p>
          <h2 className="max-w-3xl font-serif text-2xl font-bold leading-tight text-primary text-balance md:text-3xl">
            What Is the Difference Between In-House and Outsourced Accounting?
          </h2>
          <p className="max-w-4xl text-base leading-relaxed text-muted md:text-lg">
            Outsourcing does not have to replace an in-house accounting team. Accounstone can prepare defined bookkeeping, reconciliation, reporting and tax-preparation work inside the client’s existing systems, while the client or its CPA retains the agreed review, judgment, approval and filing responsibilities. The exact split depends on the engagement and applicable requirements.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <caption className="sr-only">Comparison of in-house accounting responsibilities and outsourced accounting support</caption>
              <thead className="bg-input text-primary">
                <tr>
                  <th scope="col" className="border-b border-border px-4 py-3 font-semibold">Work area</th>
                  <th scope="col" className="border-b border-border px-4 py-3 font-semibold">In-house team or CPA</th>
                  <th scope="col" className="border-b border-border px-4 py-3 font-semibold">Outsourced support from Accounstone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted">
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-primary">Bookkeeping</th>
                  <td className="px-4 py-3">Sets coding rules, resolves exceptions and reviews the records.</td>
                  <td className="px-4 py-3">Records and categorizes transactions within the agreed workflow and accounting system.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-primary">Reconciliations and month-end</th>
                  <td className="px-4 py-3">Reviews exceptions and approves adjustments that require judgment.</td>
                  <td className="px-4 py-3">Prepares reconciliations, supporting schedules and draft month-end reports.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-primary">Tax preparation</th>
                  <td className="px-4 py-3">Retains professional review, tax positions and sign-off where applicable.</td>
                  <td className="px-4 py-3">Prepares defined return data and workpapers based on supplied records and instructions.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-primary">Payments and approvals</th>
                  <td className="px-4 py-3">Keeps payment authority and final approval.</td>
                  <td className="px-4 py-3">Can organize invoices, coding and payment-preparation records within agreed controls.</td>
                </tr>
                <tr>
                  <th scope="row" className="px-4 py-3 font-semibold text-primary">Reporting</th>
                  <td className="px-4 py-3">Defines reporting needs and uses the results to make decisions.</td>
                  <td className="px-4 py-3">Prepares recurring schedules and reports in the agreed format for review.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            This is a general example, not a fixed division of work. Responsibilities, review points and client approvals are agreed before an engagement begins.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      <ProcessFlow />

      <section data-section="testimonials">
        <Reveal>
          <TestimonialsSection testimonials={testimonials} subtitle="Workflow Context" />
        </Reveal>
      </section>

      <section data-section="faq">
        <Reveal>
          <FAQSection subtitle="Common Questions" items={homePageFAQs} columns={2} />
        </Reveal>
      </section>

      <InquirySection
        source="/"
        background="white"
        title="Talk to Us About the Work"
        lead="Share the accounting work requiring support, the systems in use and the current process. The engagement can then be structured around the actual workflow."
      />

      <section data-section="contact">
        <CTABanner
          title="Need Accounting Support?"
          description="Describe the work that needs to be covered. The outsourcing model can be structured around the actual requirements."
          cta={{ text: 'Start a Conversation', href: '/contact' }}
          ctaSecondary={{ text: 'Learn About Accounstone', href: '/about' }}
          background="primary"
        />
      </section>
    </main>
  );
}
