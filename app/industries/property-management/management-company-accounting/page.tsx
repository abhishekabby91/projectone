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

const PATH = '/industries/property-management/management-company-accounting';

export const metadata: Metadata = genMeta({
  title: 'Property Management Company Accounting Support',
  description:
    'Support management-company books, fee revenue, payroll entries, overhead, intercompany balances and month-end reporting, kept apart from property ledgers.',
  path: PATH,
});

const faqs = [
  {
    question: 'What is management-company accounting?',
    answer:
      'It covers the operating company’s own books—management-fee revenue, payroll-related entries, overhead, payables, cash, receivables and intercompany balances—separately from property or owner records maintained for clients.',
  },
  {
    question: 'How is this different from property-level accounting?',
    answer:
      'Property-level accounting tracks rent, tenant balances, property expenses, deposits and owner reporting. Management-company accounting tracks the management business itself. The two views may need reconciliations and approved allocations, but owner funds and company revenue should not be treated as interchangeable.',
  },
  {
    question: 'Can you help reconcile management fees and intercompany balances?',
    answer:
      'Within the agreed scope, we can prepare fee schedules from client-approved agreements and source activity, reconcile related ledger balances, document differences and prepare supporting entries for review. The client approves accounting policies, allocations and proposed adjustments.',
  },
  {
    question: 'Can you prepare monthly financial statements?',
    answer:
      'We can prepare agreed trial-balance checks, reconciliations and reporting schedules from available records. The reporting basis, assumptions and final review responsibilities are confirmed with the client before work begins.',
  },
  {
    question: 'Do you authorize payroll, bank transfers or vendor payments?',
    answer:
      'No. Accounting support may prepare records and reconciliation schedules, but bank access, payment release, payroll approval and other cash-control decisions remain with the client’s authorized personnel.',
  },
  {
    question: 'Can this work support the company’s CPA at year-end?',
    answer:
      'We can organize reconciled books, schedules and source documents and respond to factual questions within the agreed scope. Tax positions, assurance conclusions, legal interpretations and final sign-off remain with the client and its qualified advisers.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Property Management Company Accounting Support',
  description:
    'Accounting preparation support for management-company books, management-fee revenue, payroll-related entries, operating expenses, intercompany balances, reconciliations and month-end reporting.',
  slug: 'property-management/management-company-accounting',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: baseUrl + '/industries' },
  { name: 'Property Management', url: baseUrl + '/industries/property-management' },
  { name: 'Management-Company Accounting', url: baseUrl + PATH },
]);

const workAreas = [
  {
    title: 'Management-fee revenue and receivables',
    body: 'Prepare schedules from client-approved management agreements and source activity. Tie calculations to recorded revenue and receivables, and flag missing reports, disputed amounts or unclear terms for client review.',
  },
  {
    title: 'Operating-company general ledger',
    body: 'Maintain agreed transaction coding for the management company’s own revenue, payroll-related costs, software, insurance, office expenses and overhead. Keep the reporting entity distinct from the properties it manages.',
  },
  {
    title: 'Intercompany balances and allocations',
    body: 'Reconcile related-entity balances and document the source, period and basis of approved allocations. Differences are listed for review rather than cleared with unsupported entries simply to force a match.',
  },
  {
    title: 'Accruals, prepayments and close schedules',
    body: 'Prepare supporting schedules for period-end items based on available invoices, payroll summaries, contracts and the client’s accounting policy. Proposed entries remain subject to client review and approval.',
  },
  {
    title: 'Cash, payables and payroll-related entries',
    body: 'Reconcile company bank and card activity, track open payables and prepare journal-entry support from approved payroll summaries or reimbursement records. The client retains responsibility for payroll processing and payment approval.',
  },
  {
    title: 'Monthly and year-end reporting handoff',
    body: 'Organize reconciled trial-balance checks, balance-sheet support, income-statement schedules and year-end working papers. Document open questions and provide a clear handoff to management or the client’s CPA.',
  },
];

export default function ManagementCompanyAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="For property management companies"
        title="Management-Company Accounting Support"
        description="Keep the management business’s own books organized alongside—but separate from—the property and owner records it maintains. Support management-fee schedules, company expenses, intercompany balances, reconciliations and month-end reporting."
        cta={{ text: 'Discuss Management-Company Accounting', href: '#inquiry' }}
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
          <li aria-current="page" className="font-medium text-primary">Management-Company Accounting</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Two connected sets of books, with different responsibilities</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              A property management company may maintain records for many owners and properties while also operating its own business. Property rent, tenant deposits and amounts owed to owners are not the same as management-fee revenue, payroll costs or company overhead. If those views become mixed, month-end reports can be difficult to explain even when individual transactions appear complete.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              This service focuses on the management company’s operating books and the schedules that connect them to property activity. Work is prepared from available records and client-approved policies, with differences documented for review instead of being hidden by unsupported adjustments.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Typical review points</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Management-fee calculations tied to approved agreements</li>
              <li>• Company revenue, receivables and operating expenses</li>
              <li>• Intercompany balances and documented allocations</li>
              <li>• Bank, card and payable reconciliations</li>
              <li>• Accruals, prepayments and payroll-related entries</li>
              <li>• Month-end reporting schedules and year-end handoff</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Management-company accounting work areas</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">
            The exact scope depends on the legal entities, accounting system, transaction volume, close calendar and client review process. We agree on the records and deliverables before work begins.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workAreas.map((area) => (
              <article key={area.title} className="rounded-xl border border-border bg-white p-5">
                <h3 className="font-bold text-primary">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A documented close and review handoff</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary">1. Confirm entity and source records</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Identify the management company, related entities, accounting periods, source systems, fee schedules and reports needed for the agreed work.</p>
            </li>
            <li className="rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary">2. Reconcile operating activity</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Review company cash, payables, receivables, management-fee schedules and supporting records. Track unmatched items and timing differences.</p>
            </li>
            <li className="rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary">3. Prepare supporting schedules</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Organize intercompany reconciliations, approved cost allocations, accruals, prepayments and payroll-related journal-entry support for client review.</p>
            </li>
            <li className="rounded-xl border border-border p-5">
              <h3 className="font-bold text-primary">4. Deliver the agreed reporting pack</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Provide reconciled schedules, open-item notes and a clear handoff to management or the client’s qualified adviser. The client retains final approval and payment authority.</p>
            </li>
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            For the property-side accounting workflow, see <Link href="/industries/property-management" className="font-medium text-primary underline underline-offset-4">property management accounting support</Link>. For recurring property-platform-to-ledger differences, see <Link href="/industries/property-management/general-ledger-reconciliation" className="font-medium text-primary underline underline-offset-4">general-ledger reconciliation</Link>. For property-level lender packages, see <Link href="/industries/property-management/lender-reporting-noi-support" className="font-medium text-primary underline underline-offset-4">lender reporting and NOI support</Link>. The <Link href="/blog/property-management-accounting" className="font-medium text-primary underline underline-offset-4">complete property management accounting guide</Link> explains how the property and management-company records fit together.
          </p>
        </div>
      </section>
      <FAQSection items={faqs} />
      <InquirySection
        compact
        background="input"
        source={PATH}
        title="Tell Us About Your Management-Company Books"
        lead="Share the company-level records, accounting system, close schedule and reconciliations involved. We can discuss a defined preparation and review workflow."
      />
      <CTABanner
        title="Need clearer books for the management business itself?"
        description="Discuss the company-level schedules, reconciliations and reporting handoff your team needs."
        cta={{ text: 'Contact Accounstone', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
