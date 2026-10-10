import { Metadata } from 'next';
import Link from 'next/link';
import { Check, ShieldOff } from 'lucide-react';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import InquiryTrigger from '@/components/inquiry-trigger';
import FAQSection from '@/components/faq-section';
import ProcessFlow from '@/components/process-flow';
import TrustIcon from '@/components/trust-icon';
import Reveal from '@/components/reveal';
import IndustryIllustration from '@/components/industry-illustration';
import HoaAccountingCycle from '@/components/hoa-accounting-cycle';
import { trustBadges } from '@/lib/data';
import {
  triggers,
  segments,
  workflow,
  locality,
  boundaries,
  processPhases,
  services,
  faqs,
} from '@/lib/hoa-industry';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/hoa-accounting';

// 44 characters, inside the 46 the "%s | Accounstone" template allows.
export const metadata: Metadata = genMeta({
  title: 'HOA Accounting & Bookkeeping Outsourcing',
  description:
    'Outsourced HOA and community association accounting: assessment ledgers, operating and reserve funds, delinquency schedules and monthly board packs.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'HOA and Community Association Accounting and Bookkeeping Outsourcing',
  description:
    'Assessment billing and homeowner ledgers, operating and reserve fund accounting, aged delinquency schedules, board-approved payables, budget-versus-actual reporting, monthly board packs and audit support for homeowners associations, condominium associations and community management companies.',
  slug: 'hoa-accounting',
  basePath: '/industries/',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}${PATH}` },
]);

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="h-px w-8 bg-secondary" />
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-accent">{children}</span>
    </div>
  );
}

export default function HoaAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="HOAs, condos and community management companies"
        title="HOA & Community Association Accounting Outsourcing"
        description="Assessment and homeowner ledgers, operating and reserve funds kept apart, delinquency schedules a board can act on, and a board pack that looks the same every month. Every decision stays with the board."
        cta={{ text: 'Discuss HOA Accounting', href: '/contact' }}
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
          <li aria-current="page" className="text-primary font-medium">HOA Accounting</li>
        </ol>
      </nav>

      {/* The thesis. An association is not a landlord and not an owner — this
          is the paragraph that keeps the page off its two neighbours. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal className="space-y-4"><>
            <Eyebrow>Why this work is different</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Why HOA Accounting Needs Clear, Reviewable Records
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              An association has no landlord, no tenant and no rent. It has members who own their own homes, a
              volunteer board that changes by election, a budget approved in public, and a reserve balance that
              everybody checks first. The ledger is usually smaller than a property portfolio&rsquo;s and it is
              read far more closely &mdash; by homeowners querying their own account, by a treasurer who is an
              accountant in another field or in none, and once a year by an independent CPA.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              That sets an unusual standard: the accounting has to be legible to a non-accountant without being
              simplified into something that cannot be audited. Both halves matter. A pack nobody on the board
              can read produces decisions made on instinct; a pack simplified until the fund structure disappears
              produces an audit that starts from scratch. The two failures that cause the most damage are
              netting operating and reserve into one cash figure, and keeping the homeowner ledger from bank
              deposits rather than from the assessment schedule.
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              We take the recurring accounting &mdash; posting, assessments, reconciliations, the delinquency
              schedule and the pack itself &mdash; and leave every decision with the board: what the assessment
              is, what the reserves should hold, when a collections step is taken, and which invoices get paid.
            </p>
          </></Reveal>
          <Reveal delay={0.16} className="lg:pt-10">
            <IndustryIllustration industry="hoa-accounting" className="mx-auto w-full max-w-[300px] lg:max-w-none" />
          </Reveal>
        </div>
      </section>

      <HoaAccountingCycle />

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* Broad topic coverage. This section establishes the core HOA accounting topics before the page moves into Accounstone's workflow. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>Understanding HOA accounting</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">What HOA Accounting Covers</h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">HOA accounting is the financial recordkeeping and reporting used by a homeowners association, condominium association, or similar community association. It connects homeowner assessments, vendor bills, bank activity, operating expenses, reserve activity, budgets and year-end records into a set of books the board can review each month.</p>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-4xl">It is more than recording transactions. A useful HOA accounting process keeps owner balances current, reconciles every bank account, separates operating and reserve activity in the records, tracks budget performance and gives the board enough detail to understand what changed during the month.</p>
          </></Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'HOA Accounting Services', href: '/services/hoa-accounting', body: 'Full recurring accounting support from assessments and reconciliations to monthly board reporting.' },
              { name: 'HOA Bookkeeping', href: '/services/hoa-bookkeeping', body: 'Day-to-day posting, reconciliations, payables and supporting schedules for the monthly close.' },
              { name: 'HOA Financial Reporting', href: '/services/hoa-financial-reporting', body: 'Board-ready statements, fund reporting, budget-to-actual results and receivable schedules.' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl border border-border bg-white p-5 hover:border-primary/50 transition-colors">
                <h3 className="font-serif text-lg font-bold text-primary">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              ['Assessment and homeowner accounting','Record regular assessments, special assessments, payments, credits and outstanding balances. Owner-level records should make it possible to explain an account balance without rebuilding the month from bank deposits.'],
              ['Accounts receivable and delinquencies','Maintain an accurate aging schedule, apply payments correctly and give the board a clear view of outstanding assessments. Collection decisions remain with the association and its authorized professionals.'],
              ['Accounts payable and vendor expenses','Record invoices, approvals and payments for utilities, maintenance, insurance, management and other association expenses. Supporting documentation should remain tied to the transaction.'],
              ['Bank and account reconciliations','Reconcile operating, reserve and other association bank accounts regularly so the books agree with the financial institution and unexplained differences are identified promptly.'],
              ['Operating and reserve fund accounting','Track operating activity separately from reserve activity in the accounting records and report transfers, contributions and reserve expenditures clearly. Reserve planning itself remains a board and reserve-study decision.'],
              ['Monthly financial reporting','A board package commonly brings together the balance sheet, income and expense reporting, budget-to-actual results, cash or disbursement activity, receivable information and bank reconciliations.'],
              ['Budgeting and budget-to-actual review','Compare current and year-to-date income and expenses with the approved budget. Variances become more useful when the underlying transactions and account classifications are already clean.'],
              ['Year-end and tax support','Organize the books, supporting schedules and vendor information needed for year-end review, CPA coordination and association tax work. Filing and tax treatment depend on the association and applicable requirements.']
            ].map(([h, p], i) => (
              <Reveal key={h} delay={Math.min(i * 0.04, 0.24)}>
                <div className="h-full rounded-xl border border-border bg-white p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{h}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.16} className="mt-8"><>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">HOA Bookkeeping vs. HOA Accounting</h2>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-4xl">The terms are often used interchangeably, but the scope can be different. Bookkeeping generally refers to the recurring recording, classification, reconciliation and maintenance of the books. HOA accounting can include that work plus financial reporting, budget monitoring, fund reporting, owner receivable schedules and year-end support. The right scope depends on what the board, manager or CPA already handles.</p>
          </></Reveal>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* The lead-generation router, in the board's own words. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Start where it hurts</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Common HOA Accounting Problems Boards Need to Resolve
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              Nobody goes looking for outsourced accounting. They go looking after a board meeting went badly, or
              a homeowner asked a question nobody could answer. Pick the one that sounds familiar and we will
              start there &mdash; the reading underneath each is what we would expect to find.
            </p>
          </></Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {triggers.map((t, i) => (
              <Reveal key={t.symptom} delay={Math.min(i * 0.05, 0.25)}>
                <li className="h-full">
                  <InquiryTrigger
                    className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                    source={PATH}
                    title="HOA & Community Association Accounting"
                    lead={`You picked: “${t.symptom}.” Tell us how many units or associations are involved and what the board currently receives — the consultation and the call are free.`}
                    label={`Talk to us about: ${t.symptom}`}
                  >
                    <h3 className="font-serif text-lg font-bold text-primary leading-snug">{t.symptom}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{t.reading}</p>
                    <span className="mt-4 text-sm font-semibold text-accent">
                      {t.ask}{' '}
                      <span aria-hidden="true">&rarr;</span>
                    </span>
                  </InquiryTrigger>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Segments. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="space-y-3 mb-8"><>
            <Eyebrow>Who we work with</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              HOA Accounting for Self-Managed Boards and Management Companies
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              A self-managed board and a management company running forty associations have the same obligations
              and completely different constraints. The scope is shaped around which of these you are.
            </p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {segments.map((seg, i) => (
              <Reveal key={seg.name} delay={Math.min(i * 0.05, 0.25)}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-input p-5 sm:p-6">
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

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* The core workflow. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-background dot-grid">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>The work itself</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              HOA Accounting Workflow and Monthly Reporting
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              Eight things that decide whether a board governs from its financials or argues about them. None of
              them is exotic accounting; all of them are structure, and structure is what an association&rsquo;s
              books almost always lack.
            </p>
          </></Reveal>

          <div className="mt-8 space-y-5">
            {workflow.map((item, i) => (
              <Reveal key={item.h} delay={Math.min(i * 0.05, 0.25)}>
                <div className="rounded-2xl border border-border bg-white p-5 sm:p-7">
                  <h3 className="text-lg font-bold text-primary">{item.h}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">{item.p}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-muted leading-relaxed">
              If you also manage rental property for owners, the owner-statement and tenant side is on the{' '}
              <Link href="/industries/property-management" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                property management accounting page
              </Link>. The annual audit file is{' '}
              <Link href="/services/audit-support/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                audit support
              </Link>, and the payables cycle is{' '}
              <Link href="/services/accounts-payable/united-states" className="text-primary font-medium underline underline-offset-4 hover:text-accent transition-colors">
                accounts payable
              </Link>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-10 max-w-3xl mx-auto text-center space-y-3"><>
            <span className="inline-flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.16em] uppercase text-accent">Accounting scope</span>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-primary text-balance">
              HOA Accounting Scope Built Around Board Meetings
            </h2>
            <p className="text-base md:text-lg text-muted leading-7 md:leading-8">
              The scope below covers the recurring accounting work. Where a service has its own page, the card links to the detailed service description.
            </p>
          </></Reveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((svc, i) => (
              <Reveal key={svc.name} delay={Math.min(i * 0.04, 0.24)}>
                <li className="h-full">
                  {svc.href ? (
                    <Link
                      href={svc.href}
                      className="group flex h-full flex-col rounded-xl border border-border bg-input p-5 sm:p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                    >
                      <h3 className="font-serif text-lg font-bold text-primary">{svc.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{svc.body}</p>
                      <span className="mt-4 text-sm font-semibold text-accent">
                        How this works{' '}
                        <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                      </span>
                    </Link>
                  ) : (
                    <InquiryTrigger
                      className="flex h-full flex-col rounded-xl border border-border bg-input p-5 sm:p-6 transition-colors hover:border-primary/40"
                      source={PATH}
                      title="HOA & Community Association Accounting"
                      lead="Tell us how this part of the work is handled today and we will scope what support would change. The consultation and the call are free."
                      label={`Ask us about ${svc.name.toLowerCase()} for your association`}
                    >
                      <h3 className="font-serif text-lg font-bold text-primary">{svc.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{svc.body}</p>
                    </InquiryTrigger>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div className="max-w-5xl mx-auto ledger-divider" aria-hidden="true" />

      {/* Locality. */}
      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-4 mb-8"><>
            <Eyebrow>Where you operate</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Governed Locally, Accounted for the Same Way
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">{locality.lead}</p>
          </></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {locality.markets.map((m, i) => (
              <Reveal key={m.region} delay={Math.min(i * 0.06, 0.2)}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-white p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{m.region}</h3>
                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-accent">{m.calls}</span>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{m.body}</p>
                  <Link href={m.href} className="mt-4 inline-block py-1 text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent transition-colors">
                    {m.region} market brief
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessFlow
        phases={processPhases}
        eyebrow="How it works"
        title="One Association, One Month, One Board Pack"
        lead="Nothing transfers on the first call. A single association and a single closed month run first, so the treasurer can compare our pack against the one they get today before anything else moves."
      />

      {/* The trust anchor — the highest-risk band on this page. */}
      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="space-y-4"><>
            <Eyebrow>What we will not do</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Every Decision Stays With the Board
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed">
              A board is answerable to its members for money collected from them, and volunteers carry that
              personally. So the limits matter more here than almost anywhere else on this site, and they are the
              same on day one as they are in year three.
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
        </div>
      </section>

      <FAQSection subtitle="HOA accounting questions" items={faqs} columns={2} />

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-7"><>
            <Eyebrow>HOA accounting guides</Eyebrow>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-balance leading-tight">
              Go Deeper Into the Accounting Workflow
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl">
              These guides answer specific questions that come up during HOA bookkeeping, monthly close and board reporting.
            </p>
          </></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: 'Month-end checklist', href: '/blog/hoa-accounting-month-end-checklist' },
              { name: 'Assessment accounting', href: '/blog/hoa-assessment-accounting' },
              { name: 'Homeowner ledgers', href: '/blog/hoa-homeowner-ledgers' },
              { name: 'Assessment receivables reconciliation', href: '/blog/hoa-assessment-receivables-reconciliation' },
              { name: 'Bank reconciliation', href: '/blog/hoa-bank-reconciliation' },
              { name: 'Accounts receivable aging', href: '/blog/hoa-accounts-receivable-aging' },
              { name: 'Budget-to-actual reports', href: '/blog/hoa-budget-to-actual-reports' },
              { name: 'Board financial package', href: '/blog/hoa-board-financial-package' },
              { name: 'Balance sheet explained', href: '/blog/hoa-balance-sheet-explained' },
              { name: 'Income statement explained', href: '/blog/hoa-income-statement-explained' },
              { name: 'Accounting controls', href: '/blog/hoa-accounting-controls' },
              { name: 'Accounting workflow', href: '/blog/hoa-accounting-workflow' },
              { name: 'Cash vs. accrual accounting', href: '/blog/hoa-cash-vs-accrual-accounting' },
              { name: 'Reserve accounting', href: '/blog/hoa-reserve-accounting' },
              { name: 'Operating vs. reserve funds', href: '/blog/hoa-operating-vs-reserve-funds' },
              { name: 'Reserve reconciliation', href: '/blog/hoa-reserve-reconciliation' },
              { name: 'Reserve expenses', href: '/blog/hoa-reserve-expenses' },
              { name: 'Accounts payable', href: '/blog/hoa-accounts-payable' },
              { name: 'Vendor expense tracking', href: '/blog/hoa-vendor-expense-tracking' },
              { name: 'Maintenance expense accounting', href: '/blog/hoa-maintenance-expense-accounting' },
              { name: 'Vendor 1099 tracking', href: '/blog/hoa-vendor-1099-tracking' },
              { name: 'Unapplied HOA payments', href: '/blog/hoa-unapplied-payments' },
              { name: 'Year-end accounting', href: '/blog/hoa-year-end-accounting' },
              { name: 'Accounting cleanup', href: '/blog/hoa-accounting-cleanup' },
              { name: 'QuickBooks', href: '/blog/hoa-accounting-quickbooks' },
              { name: 'QuickBooks Online', href: '/blog/hoa-quickbooks-online' },
              { name: 'AppFolio', href: '/blog/hoa-accounting-appfolio' },
              { name: 'Yardi', href: '/blog/hoa-accounting-yardi' },
              { name: 'eUnify', href: '/blog/hoa-accounting-eunify' },
              { name: 'eUnify + QuickBooks', href: '/blog/eunify-quickbooks-hoa-accounting' },
              { name: 'How to outsource HOA accounting', href: '/blog/how-to-outsource-hoa-accounting' },
              { name: 'Outsourcing vs. in-house', href: '/blog/hoa-accounting-outsourcing-vs-in-house' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-lg border border-border bg-input px-4 py-3 text-sm font-medium text-primary hover:border-primary/50 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <Reveal className="space-y-3 mb-6"><>
            <Eyebrow>Related work</Eyebrow>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-primary text-balance">
              Related HOA Accounting Services and Resources
            </h2>
          </></Reveal>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Property management accounting', href: '/industries/property-management' },
              { name: 'Real estate accounting', href: '/industries/real-estate' },
              { name: 'Bookkeeping', href: '/services/bookkeeping/united-states' },
              { name: 'Accounting & month-end close', href: '/services/accounting/united-states' },
              { name: 'Accounts payable', href: '/services/accounts-payable/united-states' },
              { name: 'Audit support', href: '/services/audit-support/united-states' },
              { name: 'Tax preparation support', href: '/services/tax-preparation/united-states' },
              { name: 'Dedicated accounting teams', href: '/solutions/dedicated-accounting-teams' },
              { name: 'Back office support', href: '/solutions/back-office-support' },
              { name: 'All industries', href: '/industries' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-lg bg-white border border-border text-primary font-medium hover:border-primary/50 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section data-section="direct-answer" className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">HOA accounting, explained</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">What Does Outsourced HOA Accounting Include?</h2>
          <p className="max-w-4xl text-base leading-relaxed text-muted md:text-lg">Outsourced HOA accounting can cover assessment and homeowner ledgers, accounts payable, bank reconciliations, operating and reserve fund records, delinquency schedules and monthly financial packages for the board. The exact scope depends on the association’s governing process, accounting system and approval controls.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">Monthly records</h3><p className="mt-2 text-sm leading-relaxed text-muted">Keep transactions, bank activity and homeowner balances organized for review.</p></div>
            <div className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">Board reporting</h3><p className="mt-2 text-sm leading-relaxed text-muted">Prepare recurring schedules that help the board review income, expenses and fund balances.</p></div>
            <div className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">Approval controls</h3><p className="mt-2 text-sm leading-relaxed text-muted">Document the agreed workflow while keeping payment approvals and association decisions with authorized people.</p></div>
          </div>
        </div>
      </section>

      <section data-section="authoritative-references" aria-labelledby="reference-heading" className="w-full bg-white px-6 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-5xl space-y-3">
          <h2 id="reference-heading" className="font-serif text-xl font-bold text-primary md:text-2xl">Official and industry references</h2>
          <p className="max-w-4xl text-sm leading-relaxed text-muted md:text-base">Use these references for the specific tax and reserve-planning topics they cover. They do not replace advice for an individual association.</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed md:text-base">
            <li><a href="https://www.irs.gov/forms-pubs/about-form-1120-h" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-accent">IRS guidance on Form 1120-H for homeowners associations</a></li>
            <li><a href="https://www.caionline.org/advocacy/public-policies/reserve-study-and-funding/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-accent">Community Associations Institute reserve study and funding guidance</a></li>
          </ul>
        </div>
      </section>

      <InquirySection
        source={PATH}
        title="Send Us One Association and One Month"
        lead="The consultation and the call are always free. Tell us how many units or associations are involved, what the board receives today, and what came up at the last meeting."
      />

      <CTABanner
        title="A Board Package Built for Monthly Review"
        description="Assessment ledgers, reserve fund accounting, delinquency schedules and a monthly board pack that looks the same every month — with every decision staying with the board."
        cta={{ text: 'Talk to Our Team', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management', href: '/industries/property-management' }}
        background="primary"
      />
    </main>
  );
}
