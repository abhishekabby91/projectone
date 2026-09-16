import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ShieldOff } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import ProcessFlow from '@/components/process-flow';
import TrustIcon from '@/components/trust-icon';
import Reveal from '@/components/reveal';
import IndustryIllustration from '@/components/industry-illustration';
import { trustBadges } from '@/lib/data';
import {
  segments,
  reviewBurden,
  handoff,
  boundaries,
  faqs,
} from '@/lib/cpa-firms-industry';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/cpa-firms';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounting Support for CPA Firms',
  description:
    'Preparation capacity for CPA firms: busy-season overflow, client cleanup, CAS production, PBC and workpapers. Review, signature and judgement stay with you.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'Outsourced Preparation Capacity for CPA Firms',
  description:
    'Busy-season overflow, client bookkeeping cleanup, CAS production, audit and PBC support, and staff augmentation for CPA firms — prepared to the firm’s own checklists, with review, signature and professional judgement retained by the firm.',
  slug: 'cpa-firms',
  basePath: '/industries/',
  areaServed: ['US'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'CPA Firms', url: `${baseUrl}${PATH}` },
]);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-secondary" />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{children}</span>
    </div>
  );
}

export default function CPAFirmsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For US CPA firms"
        title="Preparation Capacity for CPA Firms, Without Giving Up Review"
        description="Busy-season overflow, client cleanup, CAS production, workpapers and PBC — prepared to your checklists, inside your systems. Every signature and every judgement stays with your firm."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
        ctaSecondary={{ text: 'Book a Consultation', href: '#inquiry' }}
        background="primary-gradient"
      />

      <section className="w-full py-7 md:py-8 px-6 md:px-8 bg-white border-b border-border ledger-lines">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
          {trustBadges.map((badge) => (
            <div key={badge.name} className="flex items-center gap-2.5 px-4 md:px-5 py-2.5 bg-input rounded-full border border-border">
              <TrustIcon name={badge.icon} />
              <span className="font-medium text-sm text-foreground">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-4xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="inline-block py-1.5 hover:text-primary transition-colors">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">CPA Firms</li>
        </ol>
      </nav>

      {/* The argument. Written about the firm as a business — capacity
          economics and realization — because every service page on this site
          already describes the work itself. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-4"><>
            <Eyebrow>What is actually short</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Firms Rarely Run Out of People. They Run Out of a Week.
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              A firm that is stretched in March is usually fine in July. What is missing is not headcount
              across the year &mdash; it is capacity for one workflow inside one window, and hiring for that
              peak means carrying the cost through the other forty-two weeks. That is why the arithmetic
              of a firm rarely supports staffing to the busiest fortnight, and why the work instead lands
              on whoever is available, which is generally whoever is most expensive.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              The second constraint is sharper and less visible. The number of people in the firm who can
              sign is fixed, and no amount of preparation capacity changes it. So a firm that simply speeds
              up preparation makes the review queue longer, not shorter &mdash; unless what arrives is in a
              state a reviewer can work with rather than rebuild.{' '}
              <strong className="font-semibold text-primary">Preparation is what moves. Review is what you were always going to do.</strong>
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Which makes the useful first conversation a narrow one: not how many returns we can take,
              but what your reviewers currently spend their time fixing.
            </p>
          </></Reveal>
          <Reveal delay={0.16} className="lg:pt-10">
            <IndustryIllustration industry="cpa-firms" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* Six shapes the capacity gap takes. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-6xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Where it goes missing</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Six Shapes of the Same Problem
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Most firms recognise one of these immediately, and the scope is built around whichever it is
              rather than around a standard package.
            </p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {segments.map((seg, i) => (
              <Reveal key={seg.name} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{seg.name}</h3>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{seg.who}</span>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{seg.body}</p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {seg.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        <span className="text-sm leading-6 text-foreground">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The ICP's primary objection, answered mechanically. This band is the
          reason the page exists — see knowledge/icp/cpa-firms.md. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>The first question partners ask</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              {reviewBurden.heading}
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">{reviewBurden.lead}</p>
          </></Reveal>

          <div className="mt-8 space-y-5">
            {reviewBurden.items.map((item, i) => (
              <Reveal key={item.h} delay={Math.min(i * 0.05, 0.25)}>
                <div className="rounded-2xl border border-border bg-input p-5 sm:p-7">
                  <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      <ProcessFlow
        phases={handoff}
        eyebrow="How the handoff works"
        title="Four Steps, and Your Judgement Never Moves"
        lead="The handoff is a documented process rather than a briefing call, because the things that make a file cheap to review are exactly the things nobody writes down."
      />

      {/* Technology, from the ICP's own software list. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Technology</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Your Practice Stack, Not Ours
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              CCH Axcess and Drake Tax on the tax-practice side &mdash; review queues, document management
              and workpaper organisation &mdash; with QuickBooks Online and Xero for the client bookkeeping
              underneath it, and Sage or NetSuite where a client runs them.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We work inside the systems your firm and your clients already use. We do not implement,
              configure or migrate any of them, and we hold no vendor certification.
            </p>
          </></Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { name: 'CCH Axcess', href: '/technology/cch' },
                { name: 'Drake Tax', href: '/technology/drake-tax' },
                { name: 'QuickBooks', href: '/technology/quickbooks' },
                { name: 'Xero', href: '/technology/xero' },
                { name: 'All platforms', href: '/technology' },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="inline-block px-4 py-2 rounded-lg bg-white border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                  {t.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The trust anchor, written from this ICP's own boundary list. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>What we will not do</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              The Lines a Licensed Firm Cannot Delegate
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              You carry the licence and the professional liability, so the limits matter more here than
              anywhere else on this site. These are fixed at any volume and any price.
            </p>
          </></Reveal>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {boundaries.map((b, i) => (
              <Reveal key={b} delay={Math.min(i * 0.04, 0.2)}>
                <li className="flex h-full items-start gap-3 rounded-xl border border-border bg-input p-4 sm:p-5">
                  <ShieldOff className="mt-0.5 h-4 w-4 shrink-0 text-accent sm:h-5 sm:w-5" aria-hidden="true" />
                  <span className="text-sm leading-6 text-foreground sm:text-base">{b}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-muted leading-relaxed">
              The IRC §7216 consent requirement, and the full Circular 230 split between what moves and
              what cannot, are set out on{' '}
              <Link href="/services/tax-preparation/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">the US tax preparation page</Link>.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQSection subtitle="Questions partners ask" items={faqs} columns={2} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-6"><>
            <Eyebrow>Related work</Eyebrow>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-balance">
              The Work Itself, Service by Service
            </h2>
          </></Reveal>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
              { name: 'Tax preparation', href: '/services/tax-preparation/united-states' },
              { name: 'Form 1040 preparation', href: '/services/tax-preparation/united-states/1040-individual' },
              { name: 'Form 1065 and K-1s', href: '/services/tax-preparation/united-states/1065-partnership' },
              { name: 'Audit support', href: '/services/audit-support/united-states' },
              { name: 'Accounting & close', href: '/services/accounting/united-states' },
              { name: 'Staff augmentation', href: '/solutions/staff-augmentation' },
              { name: 'Dedicated teams', href: '/solutions/dedicated-accounting-teams' },
              { name: 'The CAS guide', href: '/resources/guides/client-accounting-services-cas-guide' },
              { name: 'Tax-season augmentation', href: '/resources/guides/staff-augmentation-tax-season-guide' },
              { name: 'US market brief', href: '/markets/united-states' },
              { name: 'All industries', href: '/industries' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg bg-white border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquirySection
        region="united-states"
        source={PATH}
        title="Start With One Partner’s List"
        lead="The consultation and the call are always free. Tell us what your reviewers spend their time fixing, and we will scope a first slice around it."
      />

      <CTABanner
        title="What Do Your Reviewers Spend Their Time Fixing?"
        description="That answer is the scope. Start with one slice of it and measure what review actually costs before anything else moves."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
        ctaSecondary={{ text: 'See All Industries', href: '/industries' }}
        background="primary"
      />
    </main>
  );
}
