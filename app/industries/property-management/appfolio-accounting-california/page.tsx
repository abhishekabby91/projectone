import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/appfolio-accounting-california';

export const metadata: Metadata = genMeta({
  title: 'AppFolio Accounting Services in California',
  description: 'AppFolio accounting outsourcing for California property managers: reconciliations, tenant ledgers, payables, owner statements and month-end reporting.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'AppFolio Accounting and Bookkeeping Support in California',
  description: 'Outsourced accounting workflows for California property managers using AppFolio, including reconciliations, tenant and owner ledger reviews, payables, deposit schedules and month-end reporting.',
  slug: 'appfolio-accounting-california',
  basePath: '/industries/property-management/',
  areaServed: ['California, United States'],
});
const faqs = [
  { question: 'What AppFolio accounting work can you support?', answer: 'Depending on the engagement and system access, work may include transaction review and coding, bank reconciliations, tenant ledger checks, accounts payable support, deposit schedule checks, owner statement preparation and month-end reporting.' },
  { question: 'Can you help reconcile bank accounts in AppFolio?', answer: 'The agreed workflow can include matching bank activity to recorded transactions, documenting unmatched items and preparing reconciliation support for client review. The exact process depends on the existing account setup and available records.' },
  { question: 'Can you review tenant ledgers and unpaid balances?', answer: 'Support may include reviewing tenant balances, unapplied receipts and open items against available records, then preparing an exception list for the property manager to investigate and resolve.' },
  { question: 'Can you prepare owner statements using AppFolio?', answer: 'The scope can include checking property-level income and expenses, tying relevant balances to supporting records and preparing agreed statement outputs. Final review and any distribution approvals remain with the client.' },
  { question: 'Do you replace our existing AppFolio setup?', answer: 'The starting point is your existing system, chart of accounts, property structure and reporting process. We do not assume a software migration or configuration change is needed.' },
  { question: 'Can you help with California trust-fund records?', answer: 'We can discuss accounting record preparation and reconciliation workflows within an agreed scope and the client’s controls. California-specific legal and regulatory obligations, account access and approvals must be confirmed by the responsible broker and qualified local professionals.' },
  { question: 'Can you support accounts payable and vendor invoices?', answer: 'Defined tasks may include invoice coding preparation, property allocation checks, tracking open bills and preparing payable schedules. Invoice approval and payment release follow the client’s authorization process.' },
  { question: 'Can you help if our AppFolio books are behind?', answer: 'A catch-up project can be scoped after reviewing the period, source records, outstanding reconciliations, tenant and owner balances and expected reports. Historical cleanup should be defined separately from ongoing monthly support.' },
  { question: 'Do you provide only outsourced accounting?', answer: 'The scope is defined around the accounting work required, the volume of transactions and the reporting calendar. Outsourcing is one way to add capacity; the focus is on the agreed deliverables and review process.' },
  { question: 'What should we prepare before starting AppFolio accounting support?', answer: 'Prepare the property and entity list, current reporting calendar, accounting records, reconciliation status, required owner reports, access requirements and internal review contacts. These details help define realistic tasks and handoffs.' },
];
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'AppFolio Accounting in California', url: `${baseUrl}${PATH}` },
]);

export default function AppFolioAccountingCaliforniaPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For California property management companies"
        title="AppFolio Accounting & Bookkeeping Support"
        description="Keep property records, reconciliations and owner reporting moving in AppFolio. Accounting support is built around your current portfolio, reporting calendar and review controls—not a change in how you run the business."
        cta={{ text: 'Discuss Your AppFolio Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">AppFolio Accounting in California</li>
        </ol>
      </nav>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Start with the work</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Accounting records that are ready for review</h2>
            <p className="leading-relaxed text-muted md:text-lg">AppFolio can bring property operations and accounting information together, but reliable reporting still depends on accurate transaction coding, reconciled balances and clear handling of exceptions. We focus on the recurring accounting tasks behind the reports your managers and owners rely on.</p>
            <p className="leading-relaxed text-muted md:text-lg">The scope can be set around an existing portfolio and the tasks that take the most time: month-end reconciliations, open payables, tenant ledger differences, deposit schedules or owner statement preparation. We agree the handoffs and review responsibilities before work begins.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-6">
            <h3 className="font-serif text-xl font-bold text-primary">Typical work areas</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>Bank and balance-sheet reconciliations</li>
              <li>Tenant ledger and unapplied-cash review</li>
              <li>Accounts payable coding and open-item schedules</li>
              <li>Deposit and other liability schedule checks</li>
              <li>Property-level reports and owner statement preparation</li>
              <li>Month-end close checklist and exception tracking</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">AppFolio workflow</p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Where accounting support fits into the monthly cycle</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">1. Transactions and coding</h3><p className="mt-2 text-sm leading-relaxed text-muted">Review available source records, coding and property allocation. Flag missing support, unusual entries or transactions that need client direction instead of guessing.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">2. Reconciliations and exceptions</h3><p className="mt-2 text-sm leading-relaxed text-muted">Compare bank and ledger balances, track outstanding items and document differences that require follow-up before reports are finalized.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">3. Tenant, owner and liability records</h3><p className="mt-2 text-sm leading-relaxed text-muted">Check relevant tenant balances, owner activity and deposit or other liability schedules against the available supporting records and agreed procedures.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">4. Reports and close handoff</h3><p className="mt-2 text-sm leading-relaxed text-muted">Prepare the agreed month-end outputs, maintain an open-item list and route questions or approvals to the designated client reviewer.</p></article>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">Exact report names and workflow steps depend on the AppFolio product, configuration, permissions and your internal process. We work from the environment and access the client authorizes; we do not assume every account or portfolio uses the same setup.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">California context</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Keep the accounting trail clear where client funds are involved</h2>
          <p className="leading-relaxed text-muted md:text-lg">For California brokers and property managers handling trust funds, recordkeeping and reconciliation deserve particular attention. The California Department of Real Estate describes control records, separate beneficiary or transaction records, and trust-account reconciliations as important parts of the record trail. A software report alone does not remove the need to check that records agree and exceptions are resolved.</p>
          <p className="leading-relaxed text-muted">A practical review should tie the adjusted bank balance to the trust-fund control record and then reconcile that control record to the total of the separate beneficiary, transaction or property records required for the account. Use the same cutoff date, retain the reconciliation evidence and investigate differences rather than carrying unexplained amounts in suspense or clearing ledgers. The precise records depend on the broker’s setup and applicable rules.</p>
          <p className="leading-relaxed text-muted">Our role, where included in the engagement, is limited to agreed accounting preparation, reconciliation and exception reporting. Accounstone provides remote accounting support, not an on-site California service or local-office representation. The responsible broker retains their obligations and control of funds; account permissions, signatory authority, legal interpretation and regulatory compliance decisions stay with the appropriate authorized people.</p>
          <p><a href="https://www.dre.ca.gov/Newsroom/DRE_Updates/2026_10_06_Trust_Fund_Records.html" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">California DRE: trust-fund recordkeeping and reconciliation guidance</a> · <a href="https://www.dre.ca.gov/files/pdf/re13.pdf" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">DRE guide to trust funds</a></p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">What we agree before work starts</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Properties, entities and reporting periods in scope', 'AppFolio access permissions and source documents', 'Reconciliation and reporting deadlines', 'Who reviews exceptions and approves transactions', 'Owner statement format and delivery handoff', 'How unresolved items are tracked and escalated'].map((item) => <li key={item} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-foreground">{item}</li>)}
          </ul>
          <p className="mt-5 text-muted leading-relaxed">Outsourcing is simply one way to assign recurring work when internal capacity is tight. The useful question is which tasks need to be completed, by when, and what review evidence the business needs—not where the person doing the work sits.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Related property management resources</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
            <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Yardi accounting in Texas</Link>
            <Link href="/blog/property-management-bank-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Bank reconciliation guide</Link>
            <Link href="/blog/property-management-month-end-close-checklist" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Month-end close checklist</Link>
            <Link href="/industries/property-management" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="AppFolio accounting questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Tell Us Which Accounting Tasks Need Attention" lead="Share the AppFolio workflow, portfolio size, reporting deadlines and the tasks you need completed. We can discuss a defined scope around your existing process." />
      <CTABanner title="Keep month-end moving" description="Discuss AppFolio accounting support around the records, reports and review controls your property management business already uses." cta={{ text: 'Discuss Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'Property Management Accounting', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
