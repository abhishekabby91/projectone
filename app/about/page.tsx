import { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import Reveal from '@/components/reveal';
import SectionHeading from '@/components/section-heading';
import RegionFlag from '@/components/region-flag';
import InquiryTrigger from '@/components/inquiry-trigger';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata, generateBreadcrumbSchema, generateOrganizationSchema, baseUrl } from '@/lib/seo';
import { regions } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  // The layout template appends ' | Accounstone'; this title already carries the
  // brand, so opt out rather than ship "About Accounstone | Accounstone".
  title: 'About Accounstone: Accounting Outsourcing for CPA Firms',
  absoluteTitle: true,
  description:
    'How Accounstone supports CPA and accounting firms with defined bookkeeping, accounting operations and tax-preparation work within existing review processes.',
  path: '/about',
});

// Support areas. Each links to the page that covers it, so the About page
// contributes to the internal link graph rather than being a dead end.
const supportAreas = [
  { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
  { name: 'Accounting support', href: '/services/accounting/united-states' },
  { name: 'Tax preparation support', href: '/services/tax-preparation/united-states' },
  { name: 'Accounts payable', href: '/services/accounts-payable/united-states' },
  { name: 'Accounts receivable', href: '/services/accounts-receivable/united-states' },
  { name: 'Payroll support', href: '/services/payroll/united-states' },
  { name: 'Back-office accounting activities', href: '/solutions/back-office-support' },
  { name: 'Accounting staff augmentation', href: '/solutions/staff-augmentation' },
];

const platforms = [
  { name: 'QuickBooks', href: '/technology/quickbooks' },
  { name: 'Xero', href: '/technology/xero' },
  { name: 'Sage', href: '/technology/sage' },
  { name: 'Drake Tax', href: '/technology/drake-tax' },
  { name: 'CCH', href: '/technology/cch' },
  { name: 'MYOB', href: '/technology/myob' },
  { name: 'NetSuite', href: '/technology/netsuite' },
];

const engagementModels = [
  { name: 'Hourly Support', p: 'For specific tasks, projects or variable workloads where support may be structured around agreed working hours.' },
  { name: 'Full-Time Equivalent (FTE) Support', p: 'For organizations that may require dedicated, ongoing support from an individual professional or team.' },
  { name: 'Volume-Based Support', p: 'For workflows where the volume of transactions or accounting work may change over time.' },
  { name: 'Seasonal Support', p: 'For periods when additional capacity may be required, such as tax season, month-end, year-end or other high-volume periods.' },
];

const clarityPoints = [
  'Scope of work',
  'Responsibilities',
  'Workflows',
  'Communication',
  'Review processes',
  'Working hours or FTE requirements',
  'Fees',
  'Deliverables',
];

const approach = [
  'Understand the work',
  'Build the right support',
  'Share knowledge',
  'Deliver with clarity',
  'Keep improving',
  'Reach the next milestone',
];

export default function AboutPage() {
  // AboutPage + Organization + Breadcrumb schema. The About page is one of
  // the primary signals an AI system uses to decide whether an organisation
  // is real and citable, so it should carry explicit entity markup.
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'About', url: `${baseUrl}/about` },
  ]);
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${baseUrl}/about#webpage`,
    url: `${baseUrl}/about`,
    name: 'About Accounstone',
    description:
      'Accounstone connects businesses, accounting firms and tax practices with skilled accounting professionals across the US, UK and Australia.',
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: { '@id': `${baseUrl}/#organization` },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="About Accounstone"
        title="An Accounting Outsourcing Partner for CPA and Accounting Firms"
        description="We support defined bookkeeping, accounting operations and tax-preparation workflows within existing firm systems, with responsibilities and review boundaries agreed in advance."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        ctaSecondary={{ text: 'View Services', href: '/services' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">About</li>
        </ol>
      </nav>

      {/* Opening */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              At Accounstone, we believe that every business, firm and professional journey is made up of milestones.
              A completed project. A growing team. A smoother process. A stronger financial foundation. Each step can
              contribute to what comes next.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Accounstone was created with a simple idea: accounting support and knowledge should not be limited by
              geography. Our aim is to connect businesses, accounting firms and tax practices with skilled accounting
              professionals who can support their existing operations while encouraging knowledge sharing, practical
              learning and continuous improvement.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              As Accounstone continues to grow, our focus is on building a flexible accounting support model around
              different workflows, workloads and business requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="What we believe" title="More Milestones. More Possibilities." />
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We see accounting as more than a set of numbers and processes. Behind every financial record is a
                business, a team or an individual working toward the next milestone.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Our role is designed to support that journey — whether an organization needs additional accounting
                capacity, help during a busy period, support for specific processes or an extended team for ongoing work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 font-serif text-xl md:text-2xl font-bold text-primary leading-snug">
              More clarity. More capacity. More milestones. More possibilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What we support */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="What we support"
            title="Areas We May Provide Support Across"
            lead="Depending on the engagement and requirements, Accounstone may provide support across areas such as these."
          />
          <Reveal delay={0.08}>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {supportAreas.map((a) => (
                <li key={a.name}>
                  <Link
                    href={a.href}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-input p-4 transition-colors hover:border-primary/50 hover:bg-white"
                  >
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm sm:text-base font-medium text-primary">{a.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base text-muted leading-relaxed">
              Rather than applying the same model to every engagement, we aim to understand the workload, processes and
              requirements before determining the appropriate support structure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* People */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Our approach to delivery" title="Skilled People. Shared Knowledge. Thoughtful Delivery." />
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Technology plays an important role in modern accounting, but people remain at the center of the work.
                Accounstone works on the principle that skilled professionals, documented processes, knowledge
                sharing and continuous learning produce consistent and thoughtful delivery.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Our approach is intended to help team members understand not only what needs to be done, but also the
                context behind the work and its importance to the client&rsquo;s overall process. Over time, the goal is
                to develop teams that become familiar with a client&rsquo;s workflows, systems and expectations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Technology */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Technology"
            title="Technology We May Work With"
            lead="Depending on client requirements and the scope of work, our teams may work with commonly used accounting, tax and financial software."
          />
          <Reveal delay={0.08}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {platforms.map((p) => (
                <li key={p.name}>
                  <Link
                    href={p.href}
                    className="inline-flex min-h-[40px] items-center rounded-full border border-border bg-input px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-white"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base text-muted leading-relaxed">
              The technology used for an engagement will depend on the client&rsquo;s existing systems, workflow and
              operational requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Engagement models */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Engagement models"
            title="Flexible Engagement Models"
            lead="Accounting requirements are not always the same throughout the year. Some organizations may require ongoing support, while others may need additional capacity during tax season, month-end, year-end or other periods of increased workload."
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {engagementModels.map((m, i) => (
              <Reveal key={m.name} delay={Math.min(i * 0.06, 0.24)}>
                <InquiryTrigger className="h-full rounded-xl border border-border bg-white p-5 sm:p-6 transition-colors hover:border-primary/40" source="/about — engagement models" title="Talk to Us About How to Engage" lead="Tell us which shape of engagement fits your workload and we will talk through what it would look like in practice.">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary">{m.name}</h3>
                  <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">{m.p}</p>
                </InquiryTrigger>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base text-muted leading-relaxed">
              The engagement structure can be discussed and aligned with the nature of the work and the
              client&rsquo;s requirements. See{' '}
              <Link href="/solutions" className="inline-block py-1 font-medium text-primary underline underline-offset-4 hover:text-accent transition-colors">
                our engagement models
              </Link>{' '}
              for how these work in practice.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Transparency */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="How we work"
            title="A Transparent Way of Working"
            lead="Transparency is an important part of how we aim to work. Before an engagement begins, we seek to establish clarity around:"
          />
          <Reveal delay={0.08}>
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {clarityPoints.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-foreground leading-6">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-7 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Our intention is to ensure that the agreed scope and associated fees are communicated clearly. If
                additional work or changes fall outside the agreed scope, they can be discussed separately before
                proceeding.
              </p>
              <p className="font-serif text-lg md:text-xl font-bold text-primary leading-snug">
                The objective is simple: clear expectations, clear communication and fewer surprises.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Data security */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Security" title="Data Security and Working Environments" />
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Accounting work can involve sensitive financial and business information. For this reason, data
                security and controlled access are important considerations in the way we design our delivery processes.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Depending on client requirements and the working environment, Accounstone may use cloud-based virtual
                desktop solutions, including Microsoft Azure-based desktop environments, where appropriate. Access
                arrangements, permissions and working practices may be structured according to the requirements of the
                engagement and the systems being used.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We recognize that every client may have different confidentiality, access and security requirements,
                and these can be discussed as part of the engagement process.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/data-security" className="inline-flex min-h-[44px] items-center rounded-lg border border-border bg-white px-5 py-3 font-semibold text-primary transition-colors hover:border-primary/50">Data security</Link>
              <Link href="/compliance" className="inline-flex min-h-[44px] items-center rounded-lg border border-border bg-white px-5 py-3 font-semibold text-primary transition-colors hover:border-primary/50">Compliance &amp; controls</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Across borders */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Reach" title="Working Across Borders" />
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Accounstone is being developed with an international outlook. Our focus includes supporting
                organizations and professionals across markets such as the United States, United Kingdom and Australia,
                subject to the requirements of each engagement and the capabilities of the delivery team.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                A remote delivery model can make it possible to connect skilled professionals and organizations across
                geographical boundaries while maintaining structured communication and defined workflows.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {regions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/markets/${r.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-input p-4 transition-colors hover:border-primary/50 hover:bg-white"
                  >
                    <RegionFlag region={r.slug} decorative />
                    <span className="font-semibold text-primary">{r.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* The story */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto">
          <SectionHeading eyebrow="Origins" title="The Story Behind Accounstone" />
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Accounstone is also built around a belief in the value of opportunity. The journey behind the company
                is rooted in the idea that an opportunity to learn and grow can eventually create possibilities for
                others.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                This belief continues to influence the direction of Accounstone. Our long-term vision is to create
                opportunities for accounting professionals to develop their skills, share knowledge, work with
                international teams and contribute to meaningful work across borders.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <blockquote className="mt-8 overflow-hidden rounded-xl border border-border bg-white">
              <div className="border-l-4 border-accent p-6">
                <p className="font-serif text-lg md:text-xl font-bold text-primary leading-snug">
                  Every opportunity can become a milestone. And every milestone can create another possibility.
                </p>
              </div>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Building ahead + approach */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Looking ahead" title="Building for the Journey Ahead" />
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Our intention is not simply to provide additional resources. We aim to build working relationships
                where our people can become a useful extension of a client&rsquo;s existing team, based on the scope
                and requirements of each engagement.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Whether the requirement is for a few hours of support, additional seasonal capacity, a dedicated
                professional or an ongoing team structure, the model can be adapted as requirements evolve.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-9">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent mb-5">Our approach</p>
              {/* A real sequence, so it is numbered. Wraps to a column on
                  mobile rather than forcing six items into one row. */}
              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {approach.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 rounded-xl border border-border bg-input p-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-serif text-sm font-bold text-primary tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-foreground">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-base text-muted leading-relaxed">
                That is the direction Accounstone works toward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="w-full py-12 md:py-16 px-6 md:px-8 bg-input">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="font-serif text-2xl md:text-3xl font-bold text-primary leading-snug text-balance">
              More Milestones. More Possibilities.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
              Because progress is not always about one big achievement. Sometimes, it is built through one
              well-managed process, one shared piece of knowledge and one milestone at a time.
            </p>
          </Reveal>
        </div>
      </section>

      <InquirySection
        source="/about"
        title="Talk to Us Before You Shortlist"
        lead="The fastest way to judge whether we fit is a half hour on your actual workload. Tell us what you need covered and we will say plainly whether it is work we do."
      />

      <CTABanner
        title="Tell Us What You Are Working Toward"
        description="Share the workload, the process or the period you need support with, and we can talk through what an appropriate structure looks like."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
