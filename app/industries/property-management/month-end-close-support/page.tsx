import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/property-management/month-end-close-support';

export const metadata: Metadata = genMeta({
  title: 'Property Management Month-End Close Support',
  description:
    'Property-level month-end close support: reconciliations, tenant and owner ledgers, AP/AR review, accruals, deposit liabilities and owner reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What does property management month-end close support include?',
    answer:
      'The agreed workflow may include transaction cutoff checks, bank and applicable trust-account reconciliations, tenant and owner ledger review, AP/AR checks, accrual and prepayment schedules, deposit liability support, open-item tracking and preparation of owner reporting.',
  },
  {
    question: 'How is this different from general-ledger reconciliation?',
    answer:
      'General-ledger reconciliation focuses on tying property-management platform reports to the ledger and investigating differences. Month-end close support coordinates the wider recurring cycle, including cutoff, balance-sheet support, exception review and reporting handoff.',
  },
  {
    question: 'Can you help with owner statements and distribution schedules?',
    answer:
      'Within the agreed scope, we can prepare owner-reporting schedules from reconciled property records and client-approved rules, and flag unresolved balances before the package is reviewed. The client retains approval of statements, owner payments and transfers.',
  },
  {
    question: 'What is a property management month-end close checklist?',
    answer:
      'It is a repeatable list of period-end tasks, such as confirming cutoff, reconciling bank and balance-sheet accounts, reviewing tenant and owner ledgers, checking payables and deposits, resolving or logging exceptions, and completing review before reports are issued.',
  },
  {
    question: 'When should property management reconciliations be completed?',
    answer:
      'Set deadlines so bank, ledger and supporting-schedule reconciliations are reviewed before owner statements or financial reports are finalized. The calendar should allow time to resolve material exceptions and identify items that need client decisions.',
  },
  {
    question: 'Do you close or lock the accounting period?',
    answer:
      'We can prepare the close checklist, supporting reconciliations and open-item summary. Period locking, late-entry decisions and final sign-off follow the client’s accounting policy and remain under authorized client control.',
  },
  {
    question: 'Can month-end close support include accruals and prepayments?',
    answer:
      'The scope may include organizing source support, maintaining agreed schedules and preparing proposed period-end entries for review. Recognition decisions and approval follow the client’s accounting policies and authorized review process.',
  },
  {
    question: 'Can this include CAM recoveries?',
    answer:
      'Where source records and lease-approved calculations are provided, the close workflow can include CAM and recoverable-expense schedules, accrual support and documented exceptions. Lease interpretation and final approval of charges remain with the client and its advisers.',
  },
  {
    question: 'What happens to unresolved items at close?',
    answer:
      'Record the amount, account or property, reporting period, available evidence, likely cause if known, owner and next action. Material items should be escalated under the client’s process rather than cleared through unsupported adjustments.',
  },
  {
    question: 'What information is needed to start month-end close support?',
    answer:
      'Confirm the property and entity list, accounting systems, close calendar, reporting package, prior reconciliations, open-item logs, access permissions and the people responsible for review and approval. Scope historical cleanup separately from recurring close work.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Property Management Month-End Close Support',
  description:
    'Recurring property-level close preparation support covering cutoff checks, reconciliations, AP/AR and ledger review, accrual schedules, deposit liabilities, exception tracking and owner-reporting handoff.',
  slug: 'property-management/month-end-close-support',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: baseUrl + '/industries' },
  { name: 'Property Management', url: baseUrl + '/industries/property-management' },
  { name: 'Month-End Close Support', url: baseUrl + PATH },
]);

const closeSteps = [
  {
    title: '1. Confirm cutoff and source reports',
    body: 'Confirm the reporting period, property and entity scope, posting cutoff, outstanding bank activity and required platform reports. Missing reports or late source records are logged rather than assumed complete.',
  },
  {
    title: '2. Reconcile cash and control accounts',
    body: 'Prepare bank and applicable trust-account reconciliations, review clearing and undeposited-funds balances, and identify unmatched or stale items. Client-controlled funds remain separate from company operating cash.',
  },
  {
    title: '3. Review tenant, owner and vendor balances',
    body: 'Check rent receipts and tenant ledgers, owner payable or receivable balances, open vendor invoices, unapplied cash and deposit liabilities. Document the source and owner of each unresolved exception.',
  },
  {
    title: '4. Prepare period-end schedules',
    body: 'Prepare supporting schedules for agreed accruals, prepayments, management fees, CAM recoveries and other period-end items using client-approved policies. Proposed entries are sent for review and approval.',
  },
  {
    title: '5. Assemble the reporting handoff',
    body: 'Organize property-level financials, reconciliations, exception logs and owner-reporting schedules. The client reviews material differences, approves reporting and decides when the period is ready to lock.',
  },
];

export default function PropertyManagementMonthEndCloseSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="Recurring property-level close support"
        title="Property Management Month-End Close Support"
        description="Bring the recurring close into a documented sequence—from cutoff and reconciliations to tenant and owner ledger review, period-end schedules and the reporting handoff. Work follows your accounting policies and approval controls."
        cta={{ text: 'Discuss Your Month-End Close', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Month-End Close Support</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A close is a sequence, not a single report</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Property managers coordinate bank activity, rent batches, tenant ledgers, vendor invoices, deposits, owner balances and property-level expenses. If cutoff is unclear or exceptions are not tracked, the owner reporting package may need repeated corrections after it has been prepared.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              This service focuses on the recurring property-level close cycle. We prepare agreed reconciliations and schedules, track open questions and organize the reporting handoff. Historical backlog cleanup and individual platform-to-ledger tie-outs remain separate scopes when needed.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Typical close deliverables</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Close checklist and source-report status</li>
              <li>• Bank and applicable trust-account reconciliations</li>
              <li>• Tenant, owner, AP and AR exception review</li>
              <li>• Accrual, prepayment and deposit schedules</li>
              <li>• CAM/recovery support where applicable</li>
              <li>• Owner-reporting package and unresolved-item log</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">The recurring close workflow</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            Deliverables and timing depend on portfolio size, available source records, accounting software and the client’s review calendar. The process is defined before recurring work begins.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {closeSteps.map((step) => (
              <li key={step.title} className="rounded-xl border border-border bg-white p-5">
                <h3 className="font-bold text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Clear boundaries between preparation and approval</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary">Preparation support</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Reconciliations, supporting schedules, ledger review, documented exceptions and reporting-package preparation within the agreed scope.</p>
            </article>
            <article className="rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary">Client-controlled decisions</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Payment and distribution authorization, accounting-policy choices, late-entry decisions, final statements, period lock and final sign-off stay with authorized client personnel.</p>
            </article>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            For recurring platform-to-ledger differences, see <Link href="/industries/property-management/general-ledger-reconciliation" className="font-medium text-primary underline underline-offset-4">property management general-ledger reconciliation</Link>. For overdue books and historical backlogs, see <Link href="/industries/property-management/accounting-cleanup" className="font-medium text-primary underline underline-offset-4">accounting cleanup and catch-up support</Link>. For the practical checklist, see the <Link href="/blog/property-management-month-end-close-checklist" className="font-medium text-primary underline underline-offset-4">property management month-end close guide</Link>. Company-level books are covered separately in <Link href="/industries/property-management/management-company-accounting" className="font-medium text-primary underline underline-offset-4">management-company accounting support</Link>.
          </p>
        </div>
      </section>
      <FAQSection items={faqs} />
      <InquirySection
        compact
        background="input"
        source={PATH}
        title="Discuss Your Property Management Close"
        lead="Tell us about the portfolio, accounting system, close calendar and recurring exceptions. We can define the preparation and review handoff around your process."
      />
      <CTABanner
        title="Make the monthly close more repeatable"
        description="Discuss the reconciliations, schedules and owner-reporting handoff that need support."
        cta={{ text: 'Contact Accounstone', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
