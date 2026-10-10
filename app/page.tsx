import { Metadata } from 'next';
import { Check } from 'lucide-react';
import Link from 'next/link';
import HeroCarousel from '@/components/hero-carousel';
import TrustIcon from '@/components/trust-icon';
import SectionGrid from '@/components/section-grid';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import TestimonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import ProcessFlow from '@/components/process-flow';
import AccountingWorkflowIllustration from '@/components/accounting-workflow-illustration';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import { services, solutions, testimonials, trustBadges, markets } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting, Bookkeeping & Tax Outsourcing | Accounstone',
  description:
    'Outsourced accounting, bookkeeping and tax preparation for CPA firms and businesses, delivered from India within existing workflows.',
  path: '/',
  absoluteTitle: true,
  ogTitle: 'Accounting, Bookkeeping & Tax Outsourcing | Accounstone',
  ogDescription:
    'Outsourced accounting, bookkeeping and tax preparation for CPA firms and businesses, delivered from India within existing workflows.',
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
      'Recurring accounting, bookkeeping and tax support can be structured for accounting firms, CPA firms, professional practices and businesses around a specific function, workload or ongoing process.',
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
      'Delivery operates from New Delhi, India as an extension of client teams, following documented workflows, defined responsibilities and agreed review processes.',
  },
];

const faqSchema = generateFAQSchema(homePageFAQs);

export default function HomePage() {
  const carouselSlides = [
    {
      id: 'accounting-support',
      image: '/carousel-budget-planning.jpg',
      alt: 'Accounting reports, charts and calculator on a desk',
      title: 'Accounting Support That Fits Your Workflow',
      subtitle: 'Experienced professionals working within your existing processes and systems',
    },
    {
      id: 'outsourcing',
      image: '/carousel-worldwide.jpg',
      alt: 'Globe representing international accounting support',
      title: 'Outsourcing Built Around the Work',
      subtitle: 'Bookkeeping, accounting and tax support structured around your requirements',
    },
    {
      id: 'tax-support',
      image: '/carousel-tax-returns.jpg',
      alt: 'Organized tax return documents prepared for professional review',
      title: 'Practical Support for Accounting Work',
      subtitle: 'From recurring bookkeeping to tax preparation and accounting operations',
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section data-section="hero">
        <HeroCarousel
          slides={carouselSlides}
          autoPlayInterval={5000}
          pageHeading="Accounting, Bookkeeping & Tax Outsourcing"
        />
      </section>

      <section className="w-full py-7 md:py-8 px-6 md:px-8 bg-white border-b border-border ledger-lines">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 bg-input rounded-full border border-border"
            >
              <TrustIcon name={badge.icon} />
              <span className="font-medium text-sm text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <Reveal className="space-y-4">
            <>
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                <span className="w-4 h-px bg-accent" aria-hidden="true" />
                Accounting and Bookkeeping Scope
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance">
                Accounting Support Without Changing How You Work
              </h2>
              <p className="text-muted leading-relaxed">
                Accounstone provides outsourced accounting, bookkeeping and tax support for accounting firms and businesses. The work fits existing systems, processes and review structures.
              </p>
            </>
          </Reveal>
          <Reveal delay={0.12} className="mx-auto w-full max-w-[360px]">
            <AccountingWorkflowIllustration />
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: 'For Accounting Firms',
              body: 'Extend your team with preparation and recurring accounting support while keeping client relationships, decisions and final review in-house.',
              href: '/solutions',
            },
            {
              title: 'For Businesses',
              body: 'Move recurring accounting work to a structured delivery team while keeping visibility, approvals and control within your organization.',
              href: '/solutions',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link
                href={item.href}
                className="group block h-full rounded-xl border border-border bg-input p-6 md:p-8 transition-all duration-200 hover:border-primary/40 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.14)]"
              >
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.body}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-accent">
                  See how the support model works <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section data-section="services">
        <SectionGrid
          subtitle="Services"
          title="Accounting Services That Keep Work Moving"
          description="Practical support across bookkeeping, accounting operations, tax preparation, payroll, payables, receivables and financial reporting."
          items={services}
          baseUrl="/services"
          columns={3}
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
                Accounting Support for Different Types of Businesses
              </h2>
              <p className="max-w-3xl text-muted leading-relaxed">
                Accounting workflows differ by industry. The industry pages explain how the work can be structured around the systems, transactions and reporting requirements involved.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['Real Estate', '/industries/real-estate'],
              ['Property Management', '/industries/property-management'],
              ['HOA & Associations', '/industries/hoa-accounting'],
              ['Accounting & CPA Firms', '/industries/cpa-firms'],
            ].map(([title, href], i) => (
              <Reveal key={title} delay={Math.min(i * 0.06, 0.18)}>
                <Link
                  href={href}
                  className="group flex h-full items-center justify-between rounded-xl border border-border bg-white p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="font-semibold text-primary">{title}</span>
                  <span className="text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-section="markets" className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">Markets</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">Accounting Support Across Key Markets</h2>
              <p className="max-w-3xl text-muted leading-relaxed">Explore accounting and tax support by market. Each page outlines the relevant service scope and local context, with delivery from India.</p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {markets.map((market, i) => (
              <Reveal key={market.slug} delay={i * 0.06}>
                <Link href={"/markets/" + market.slug} className={market.slug === "united-states" ? "group flex h-full flex-col rounded-xl border border-orange-200 bg-orange-50/60 p-6 transition-all hover:border-orange-300 hover:shadow-sm" : "group flex h-full flex-col rounded-xl border border-border bg-input p-6 transition-all hover:border-primary/40 hover:shadow-sm"}>
                  <span className="text-sm font-semibold text-accent">{market.slug === "united-states" ? "Primary focus" : "Market"}</span>
                  <h3 className="mt-2 font-serif text-xl font-bold text-primary">{market.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{market.description}</p>
                  <span className="mt-5 text-sm font-semibold text-primary">View market details <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-border bg-input px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-muted">Working with QuickBooks, Xero, Sage, NetSuite or tax preparation software?</p>
            <Link href="/technology" className="shrink-0 text-sm font-semibold text-primary hover:text-accent transition-colors">View platform support <span aria-hidden="true">&rarr;</span></Link>
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
