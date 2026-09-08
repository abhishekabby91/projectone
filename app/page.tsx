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
import RegionFlag from '@/components/region-flag';
import GlobalDeliveryDiagram from '@/components/global-delivery-diagram';
import ProcessFlow from '@/components/process-flow';
import { generateMetadata, generateFAQSchema } from '@/lib/seo';
import { services, solutions, testimonials, trustBadges } from '@/lib/data';

export const metadata: Metadata = generateMetadata({
  // Exact strings, set deliberately. The title intentionally carries no
  // "| Accounstone" suffix - the brand name is Accounstone, which is a
  // separate thing from the homepage's SEO title.
  title: 'Accounting, Bookkeeping, Tax & Payroll Outsourcing Services',
  description:
    'Outsourced accounting, bookkeeping, tax, payroll, and audit support for CPA firms and accounting practices. Expand your firm’s capacity with Accounstone.',
  path: '/',
  absoluteTitle: true,
});

const homePageFAQs = [
  { question: 'What services does Accounstone provide?', answer: 'We support bookkeeping, accounting operations, tax preparation, payroll, accounts payable, accounts receivable, audit support, and dedicated accounting teams. The scope is built around the work you need to hand off and the review points you want to keep.' },
  { question: 'How do you approach data security?', answer: 'Engagements are NDA-backed, with access limited to the team members working on the account. We use controlled access, documented workflows, and security-focused handling practices. We are also transparent about the certifications and controls we do and do not hold.' },
  { question: 'Can you work with our existing software?', answer: 'Yes. Our team works with platforms including QuickBooks Online, Xero, Sage, NetSuite, Drake Tax, CCH Axcess, and MYOB, along with client-specific systems and workflows. The goal is to fit into your existing process rather than force a system change.' },
  { question: 'How quickly can you get started?', answer: 'Most engagements begin with structured discovery and knowledge transfer. The timeline depends on your workflows, systems, documentation, current books, and the scope being handed over.' },
  { question: 'How is an engagement scoped?', answer: 'By understanding the work first: transaction volume, workflow complexity, the systems involved, the review points and what you want to keep in-house. We put a written proposal together once that is clear, rather than working from a standard package.' },
  { question: 'Do you provide offshore accounting support?', answer: 'Yes. Our service delivery team operates from our Global Delivery Center in New Delhi, India, supporting accounting firms and practices across the US, UK, and Australia.' },
];

const faqSchema = generateFAQSchema(homePageFAQs);

export default function HomePage() {

  const carouselSlides = [
    {
      id: 'budget-planning',
      image: '/carousel-budget-planning.jpg',
      alt: 'Budget summary, charts, and calculator on a desk',
      title: 'Accounting Support That Fits Your Workflow',
      subtitle: 'Experienced professionals working as an extension of your team',
    },
    {
      id: 'worldwide',
      image: '/carousel-worldwide.jpg',
      alt: 'Globe representing worldwide accounting support',
      title: 'Reliable Support Across Three Markets',
      subtitle: 'US, UK, and Australia support from one delivery team',
    },
    {
      id: 'tax-returns',
      image: '/carousel-tax-returns.jpg',
      alt: 'Organized tax return documents prepared for professional review',
      title: 'Built for Accounting Practices',
      subtitle: 'Bookkeeping, tax preparation, payroll, and audit support',
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section data-section="hero">
        <HeroCarousel slides={carouselSlides} autoPlayInterval={5000} pageHeading="Outsourced Accounting, Bookkeeping, Tax and Payroll for CPA Firms and Accounting Practices" />
      </section>

      <section className="w-full py-7 md:py-8 px-6 md:px-8 bg-white border-b border-border ledger-lines">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 bg-input rounded-full border border-border">
              <TrustIcon name={badge.icon} />
              <span className="font-medium text-sm text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-white">
        <Reveal className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <>
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
              <span className="w-4 h-px bg-accent" aria-hidden="true" />How We Work
            </span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-balance">One Delivery Team. Three Markets.</h2>
            <p className="text-muted leading-relaxed">Our service delivery team operates from our Global Delivery Center in New Delhi, India, supporting accounting firms and practices across the US, UK, and Australia.</p>
          </>
        </Reveal>
        <Reveal delay={0.15}><GlobalDeliveryDiagram /></Reveal>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      <section className="w-full py-7 md:py-10 px-6 md:px-8 bg-linear-to-r from-primary to-primary-light relative overflow-hidden cta-glow dot-grid-dark">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 ledger-lines-dark" />
        <Reveal className="relative max-w-7xl mx-auto text-center space-y-6">
          <>
            <h2 className="text-xl md:text-2xl font-bold text-white text-balance">Need More Accounting Capacity?</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">Add experienced accounting professionals to the work that is slowing your team down—without rebuilding your existing process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition-all">Talk to Our Team</Link>
              <Link href="/solutions" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">Explore Solutions</Link>
            </div>
          </>
        </Reveal>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      <section data-section="solutions"><SectionGrid subtitle="Our Engagement Models" title="Support Built Around Your Team" description="Choose the delivery model that matches your workload, processes, review structure, and growth plans." items={solutions} baseUrl="/solutions" columns={3} variant="default" /></section>
      {/* Each market names its own audience in its own words, so the block
          below carries all three rather than one generic line. The UK version
          shipped first, and leaving the US and Australia out read as though
          the offer only applied to one of them. Placed after the services grid
          so this narrows rather than replaces. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-secondary" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">For accounting firms and practices</span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
                Your Firm&rsquo;s Offshore Preparation Team
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-5 space-y-4 max-w-3xl">
              <p className="text-base md:text-lg text-muted leading-relaxed">
                If your firm is turning work away in its busiest weeks, or your qualified people are spending the day
                posting transactions rather than reviewing them, the constraint is preparation capacity &mdash; not talent.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                We prepare. You review, you advise, you sign &mdash; and you keep the client. We do not hold your client
                relationships, we do not file, and we never take banking control.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                region: 'united-states' as const,
                label: 'United States',
                who: 'CPA firms',
                line: 'Close work, 1040 and entity return preparation, and the workpapers behind them \u2014 built for your review and your signature.',
                href: '/markets/united-states',
              },
              {
                region: 'united-kingdom' as const,
                label: 'United Kingdom',
                who: 'Accountancy practices',
                line: 'Bookkeeping across the VAT quarter, year-end accounts under FRS 102, and CT600 and Self Assessment workpapers.',
                href: '/markets/united-kingdom',
              },
              {
                region: 'australia' as const,
                label: 'Australia',
                who: 'Accounting firms',
                line: 'BAS-ready records through the quarter, year-end workpapers under AASB standards, and company and trust returns.',
                href: '/markets/australia',
              },
            ].map((r, i) => (
              <Reveal key={r.region} delay={Math.min(0.12 + i * 0.06, 0.3)}>
                <Link
                  href={r.href}
                  className="group flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                >
                  <span className="flex items-center gap-2.5">
                    <RegionFlag region={r.region} className="w-7 h-[19px]" decorative />
                    <span className="font-serif text-lg font-bold text-primary">{r.label}</span>
                  </span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{r.who}</span>
                  <span className="mt-3 flex-1 text-sm text-muted leading-relaxed">{r.line}</span>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    How we work with them{' '}
                    <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cards point at the United States pages, which is where the retired
          generic /services/{slug} URLs now redirect - linking to the old slugs
          would send the site's highest-authority page through a 301. The line
          underneath carries UK and Australia visitors to the region-first hub. */}
      <section data-section="services">
        <SectionGrid
          subtitle="What We Do"
          title="Accounting Services That Keep Work Moving"
          description="Practical support across bookkeeping, accounting operations, tax preparation, payroll, payables, receivables, and audit support."
          items={services.map((s) => ({ ...s, slug: `${s.slug}/united-states` }))}
          baseUrl="/services"
          columns={3}
          variant="default"
        />
        <div className="w-full px-6 md:px-8 pb-10 md:pb-14 -mt-4 text-center">
          <p className="text-muted">
            Working in the UK or Australia?{' '}
            <Link href="/services" className="inline-block py-1 text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
              See all services by region
            </Link>.
          </p>
        </div>
      </section>

      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal className="space-y-6">
              <>
                <span className="inline-flex items-center gap-2 text-sm md:text-base font-semibold tracking-wide uppercase text-accent">
                  <span className="w-4 h-px bg-accent" aria-hidden="true" />Why Accounstone
                </span>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-balance">A Delivery Partner, Not Just Extra Hands</h2>
                <p className="text-lg text-muted leading-relaxed">We work inside your processes, follow your review standards, and take ownership of defined accounting work while your team keeps the decisions and approvals that belong with them.</p>
                <div className="space-y-4 pt-4 pl-5 margin-rule">
                  {['Experienced accounting professionals', 'Dedicated support during busy periods', 'Documented onboarding and knowledge transfer', 'Quality review before work reaches your team', 'Clear communication and defined ownership', 'Flexible engagement models as workload changes'].map((item, i) => (
                    <div key={i} className="flex items-start gap-4"><Check className="text-accent shrink-0 w-5 h-5" aria-hidden="true" /><p className="text-foreground font-medium">{item}</p></div>
                  ))}
                </div>
              </>
            </Reveal>

            <Reveal delay={0.15} className="relative overflow-hidden bg-linear-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white space-y-7 shadow-xl">
              <>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'repeating-linear-gradient(to bottom, white 0, white 1px, transparent 1px, transparent 28px)' }} />
                <div className="relative space-y-2"><div className="text-3xl font-bold">Three markets</div><p className="text-white/80 text-lg">US, UK and Australia support from one delivery team.</p></div>
                <div className="relative space-y-2"><div className="text-3xl font-bold">Seven core service lines</div><p className="text-white/80 text-lg">Bookkeeping, accounting, tax, payroll, AP, AR and audit support.</p></div>
                <div className="relative space-y-2"><div className="text-3xl font-bold">Defined review process</div><p className="text-white/80 text-lg">Work is organized around documented workflows, ownership and quality review.</p></div>
              </>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      <ProcessFlow />

      <section data-section="testimonials"><Reveal><TestimonialsSection testimonials={testimonials} subtitle="Workflow Context" /></Reveal></section>
      <section data-section="faq"><Reveal><FAQSection subtitle="Common Questions" items={homePageFAQs} columns={2} /></Reveal></section>
      <InquirySection source="/" background="white" title="Talk to Us Before You Hire for It" lead="The consultation and the call are always free. Tell us what is falling behind — the volume, the systems, the deadlines — and we will talk through what would actually change." />

      <section data-section="contact"><CTABanner title="Ready to Strengthen Your Accounting Operations?" description="Tell us what is slowing your team down. We can help you build a practical support model around the work that needs to get done." cta={{ text: 'Start a Conversation', href: '/contact' }} ctaSecondary={{ text: 'Learn About Accounstone', href: '/about' }} background="primary" /></section>
    </main>
  );
}
