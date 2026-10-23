import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/trust-account-reconciliation';

export const metadata: Metadata = genMeta({
  title: 'Trust Account Reconciliation Support',
  description: 'Prepare trust-account reconciliation schedules, compare bank and ledger balances, investigate exceptions and document review handoffs for property managers.',
  path: PATH,
});

const faqs = [
  { question: 'What is included in trust-account reconciliation support?', answer: 'Within the agreed scope, support can include bank-to-book reconciliation, comparison of relevant tenant or owner ledger totals to control accounts, deposit and disbursement schedules, exception logs and supporting documentation for client review.' },
  { question: 'Do you provide legal or regulatory trust-account compliance advice?', answer: 'No. Requirements depend on the account arrangement, property type and jurisdiction. Accounstone can prepare accounting records and reconciliation workpapers from client-approved instructions; the client and its qualified local advisers determine the applicable legal and regulatory requirements.' },
  { question: 'What does a three-way reconciliation compare?', answer: 'Where the account and applicable process require it, a three-way reconciliation compares the bank balance, the accounting book or control-account balance, and the total of the relevant individual tenant, owner or beneficiary ledgers. The exact comparison should follow the client’s documented process and applicable requirements.' },
  { question: 'How often should a property management trust account be reconciled?', answer: 'The required timing depends on the account arrangement, jurisdiction and applicable rules. The responsible licensee or qualified local adviser should confirm the required frequency; the accounting workflow should document the date, source reports, reviewer and unresolved differences.' },
  { question: 'What if the bank balance and tenant or owner ledgers do not match?', answer: 'Document the difference by date, amount, account and related property or beneficiary, then review source transactions and supporting records. Do not clear a difference with an unsupported adjustment; escalate it through the client’s review process.' },
  { question: 'Can you prepare reconciliation workpapers for our reviewer?', answer: 'Yes, within an agreed scope, we can organize bank-to-book checks, supporting ledger totals, deposit or disbursement schedules and exception logs for the client’s designated reviewer. Final approval remains with the responsible client.' },
  { question: 'Can you make withdrawals, approve owner distributions or release payments?', answer: 'No. The client retains bank credentials, payment approval, withdrawal authority, owner-distribution approval and all cash-release decisions. Support is limited to preparation, reconciliation, documentation and exception reporting.' },
  { question: 'Which systems can the workflow use?', answer: 'Depending on the engagement, source records may come from Yardi Voyager, Buildium, AppFolio or another client-approved property platform, alongside accounting records in QuickBooks Online, Sage Intacct or Xero. Access, reports and responsibilities are confirmed before work begins.' },
  { question: 'How should security deposit balances be included?', answer: 'Where relevant, compare tenant-level deposit records with the related liability and account records, investigate differences and document the review. Rules for holding, interest and returning deposits vary, so the client and its qualified local advisers must confirm the applicable requirements.' },
  { question: 'What should we provide before reconciliation support starts?', answer: 'Provide the account and property scope, relevant bank statements, ledger and control-account reports, tenant or owner schedules, prior reconciliations, reporting dates and the designated reviewer. Confirm permissions and the escalation path before work begins.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Property Management Trust Account Reconciliation Support',
  description: 'Accounting preparation and reconciliation support for property-management trust-account records, bank and book balances, relevant tenant or owner ledgers, deposit schedules and documented exceptions.',
  slug: 'property-management/trust-account-reconciliation',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Trust Account Reconciliation', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  ['Bank-to-book reconciliation', 'Compare the relevant bank statement with the accounting records for the same period. Identify deposits in transit, outstanding payments, bank charges, reversals and timing differences, and retain the supporting detail for review.'],
  ['Relevant ledger and control-account tie-out', 'Where the account structure calls for it, compare the book or control-account balance with the combined tenant, owner or beneficiary ledger detail. Record the exact population and reporting date used in the comparison.'],
  ['Deposits, receipts and disbursement schedules', 'Review posted receipts, unapplied cash, returned payments, voided or reissued items and documented disbursements. Keep deposit liabilities and amounts held for others distinct from management-company revenue.'],
  ['Exception tracking and aging', 'Maintain a dated list of unreconciled items with the amount, source, property or ledger, period, supporting evidence, owner and next action. Bring forward unresolved items until they are explained and reviewed.'],
  ['Review-ready workpapers', 'Organize the statement, ledger exports, reconciliation calculations, adjustment support and reviewer comments into the format agreed with the client. Any proposed accounting correction remains subject to client review and approval.'],
  ['Month-end and owner-report handoff', 'Connect completed reconciliation schedules with the wider close process, including tenant and deposit ledgers, owner statement preparation and property-to-general-ledger reconciliation when those tasks are included in scope.'],
];

export default function TrustAccountReconciliationPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="For property management companies"
        title="Trust Account Reconciliation Support"
        description="Keep bank activity, accounting balances and relevant tenant or owner ledger detail connected through a documented reconciliation and review process."
        cta={{ text: 'Discuss Reconciliation Support', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Trust Account Reconciliation</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Reconciliation needs evidence—not just a zero difference</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">Property managers may need to explain how bank activity, accounting records and individual tenant or owner balances relate to one another. A bank account can reconcile while an individual ledger remains incomplete, or an old timing item can carry forward without a clear owner or explanation.</p>
            <p className="text-base leading-relaxed text-muted">A controlled workflow defines which records are being compared, the date and account population used, how exceptions are documented and who reviews proposed corrections. The exact process depends on the account arrangement, client policy and applicable local requirements.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Common items to investigate</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Bank-to-book timing differences</li>
              <li>• Tenant or owner ledger totals that do not tie</li>
              <li>• Unapplied receipts and returned payments</li>
              <li>• Outstanding, voided or reissued payments</li>
              <li>• Deposit balances and related control accounts</li>
              <li>• Old exceptions without clear ownership or evidence</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Reconciliation work areas</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">Tasks are agreed before work begins. Each schedule should show the period, source records, calculation, unresolved items and reviewer handoff.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workAreas.map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A repeatable review sequence</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['1. Confirm the account and period', 'Agree the account, property or entity population, statement dates, source reports and applicable client procedures before calculating a reconciliation.'],
              ['2. Match bank activity to the books', 'Compare cleared transactions with the accounting records and list timing items, missing entries, duplicates, reversals or unsupported differences.'],
              ['3. Tie supporting ledger detail', 'Where required by the account structure and process, compare the relevant control-account balance with individual tenant, owner or beneficiary balances for the same cutoff date.'],
              ['4. Document and route exceptions', 'Record evidence and proposed next steps for each difference. Route accounting adjustments, disbursement questions and jurisdiction-specific issues to the authorized client reviewer or qualified adviser.'],
            ].map(([heading, body]) => <li key={heading} className="rounded-xl border border-border bg-input p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></li>)}
          </ol>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Work within the systems already in use</h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-muted">Depending on the engagement, source records may come from Yardi Voyager, Buildium or AppFolio, with accounting records in QuickBooks Online, Sage Intacct or Xero. We confirm the reports, access permissions and responsibilities before agreeing the workflow. This page describes accounting preparation and reconciliation support—not a software-vendor partnership, certification, legal opinion or regulatory compliance guarantee.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management/tenant-accounting-operations" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Tenant accounting operations</Link>
            <Link href="/industries/property-management/general-ledger-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Platform-to-GL reconciliation</Link>
            <Link href="/blog/property-management-trust-accounting-reconciliation" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Trust-account reconciliation guide</Link>
            <Link href="/blog/property-management-security-deposit-accounting" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Security deposit accounting</Link>
            <Link href="/blog/property-management-owner-statements" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Owner statement review</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Clear responsibility and cash controls</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">Accounstone can prepare agreed accounting records, reconciliation schedules and exception reports. The client retains bank access, withdrawal and payment authority, approval of owner distributions and proposed accounting corrections. The client and its qualified local advisers determine the legal, regulatory, tax and trust-account requirements that apply to the engagement.</p>
        </div>
      </section>
      <FAQSection subtitle="Trust account reconciliation questions" items={faqs} columns={2} />
      <InquirySection region="united-states" service="Property Management Trust Account Reconciliation" source={PATH} title="Discuss Your Reconciliation Workflow" lead="Tell us which property and accounting systems you use, what account and ledger records need to tie, how often reconciliations are prepared and where unresolved items are accumulating." />
      <CTABanner title="Make account balances easier to explain" description="Set up a documented workflow for bank matching, ledger tie-outs, exception ownership and review handoff." cta={{ text: 'Start an Inquiry', href: '#inquiry' }} ctaSecondary={{ text: 'Property Management Services', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
