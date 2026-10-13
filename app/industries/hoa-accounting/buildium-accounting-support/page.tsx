import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import FAQSection from '@/components/faq-section';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/hoa-accounting/buildium-accounting-support';

export const metadata: Metadata = genMeta({
  title: 'Buildium HOA Accounting & Bookkeeping Support',
  description: 'Accounting support for property managers using Buildium: transaction coding, reconciliations, homeowner assessment ledgers and association fund balances, payables and month-end reporting.',
  path: PATH,
});

const serviceSchema = generateServiceSchema({
  name: 'Buildium HOA Accounting and Bookkeeping Support',
  description: 'Defined accounting workflow support for HOA and community association managers using Buildium, including assessment ledger review, operating and reserve fund reconciliations, accounts payable preparation, board reporting and month-end close.',
  slug: 'buildium-accounting-support',
  basePath: '/industries/hoa-accounting/',
});
const faqs = [
  { question: 'What Buildium accounting work can Accounstone support for HOAs?', answer: 'Depending on the agreed scope and authorized access, support may include assessment ledger checks, vendor invoice coding, bank reconciliation preparation, operating and reserve fund schedules, accounts payable tracking, budget-to-actual schedules and monthly board reporting.' },
  { question: 'Can you work with our existing Buildium configuration?', answer: 'Yes. The starting point is the association structure, chart of accounts, fund setup, reporting package and approval workflow already in use. Migration or configuration changes are not assumed and would need separate approval.' },
  { question: 'Can you help reconcile operating and reserve accounts?', answer: 'The agreed workflow can include reconciling bank activity to recorded transactions, tying supporting schedules to ledger balances, tracking timing items and flagging unexplained differences for the authorized reviewer.' },
  { question: 'Will Accounstone approve vendor payments or make board decisions?', answer: 'No. Work can be defined around preparation, reconciliation and reporting. Payment authorization, fund decisions, governance and final approval remain with the board or other people the association has authorized.' },
  { question: 'Does Accounstone provide on-site HOA management in the United States?', answer: 'No. Accounstone provides remote accounting and bookkeeping support from India. The service does not replace an on-site community manager, the association’s board, or qualified local legal and tax professionals.' },
];
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'Buildium HOA Accounting Support', url: `${baseUrl}${PATH}` },
]);

export default function BuildiumAccountingSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For HOA and community association managers using Buildium"
        title="Buildium HOA Accounting & Bookkeeping Support"
        description="Keep the accounting work behind your Buildium reports organized: homeowner assessment ledgers, operating and reserve fund reconciliations, payable tracking, and a clear monthly board-reporting handoff."
        cta={{ text: 'Discuss Your Buildium Workflow', href: '/contact' }}
        ctaSecondary={{ text: 'HOA Accounting', href: '/industries/hoa-accounting' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/hoa-accounting" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Buildium Accounting Support</li>
        </ol>
      </nav>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Start with the workflow</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Accounting support built around your existing Buildium process</h2>
            <p className="leading-relaxed text-muted md:text-lg">HOA management software can connect homeowner assessments, vendor bills, payments and association reporting, but reliable financial output still depends on reconciled records, fund-level tracking and a consistent review process. We focus on accounting tasks that keep association records consistent and make exceptions visible before board reports are finalized.</p>
            <p className="leading-relaxed text-muted md:text-lg">The work is scoped to the associations and units in your portfolio, Buildium access permissions, board-reporting calendar and internal controls. We do not assume every Buildium account uses the same chart of accounts, approval path, bank connection or report configuration.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-6">
            <h3 className="font-serif text-xl font-bold text-primary">Typical work areas</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>Assessment, vendor and association-level transaction review</li>
              <li>Bank reconciliation preparation and exception logs</li>
              <li>Accounts payable tracking and invoice coding</li>
              <li>Homeowner assessment balances, unapplied receipts and ledger checks</li>
              <li>Monthly board package preparation and supporting schedules</li>
              <li>Operating, reserve and other liability schedule review</li>
              <li>Month-end reporting and close handoff</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Buildium accounting workflow</p>
          <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">A monthly process that leaves a clear review trail</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">1. Review transaction capture</h3><p className="mt-2 text-sm leading-relaxed text-muted">Check available source records, assessment postings, vendor coding and association/fund allocation. Flag missing invoices, unusual charges, duplicates or unapplied receipts instead of making unsupported assumptions.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">2. Reconcile cash and ledger balances</h3><p className="mt-2 text-sm leading-relaxed text-muted">Compare bank activity with recorded transactions, keep operating and reserve accounts distinguishable, track timing items and route unexplained differences for investigation. Reconcile supporting ledgers required by the association's process.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">3. Check payables and owner activity</h3><p className="mt-2 text-sm leading-relaxed text-muted">Review vendor invoices, open payables, assessment activity and reserve or other liability schedules against available support and agreed coding rules.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">4. Prepare reporting and exceptions</h3><p className="mt-2 text-sm leading-relaxed text-muted">Assemble the agreed monthly financial outputs, including board-facing schedules, explain unusual fund balances and maintain a concise open-item list for the authorized reviewer before reports are issued.</p></article>
          </div>
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted">Exact report names, available features and workflow steps depend on the Buildium plan, configuration, permissions and current product behavior. We work from the environment and access the client authorizes; we do not assume every account uses the same setup.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">Control and review</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Keep association funds, management-company records and approvals distinguishable</h2>
          <p className="leading-relaxed text-muted md:text-lg">HOA accounting needs to distinguish association operating funds, reserve funds, and any separate management-company records. The accounting process should preserve those distinctions, connect fund and bank balances to supporting detail, and make unresolved items visible to the board or its authorized reviewer. Association governing documents and state requirements vary. The board and its qualified local advisers remain responsible for confirming applicable legal, reserve-funding and tax obligations.</p>
          <p className="leading-relaxed text-muted">Reconciliation preparation and reporting should be separated from final approval and movement of funds. Agree who can post adjustments, approve vendor bills, release payments and approve board reports. Access permissions should reflect those responsibilities.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-input">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">What we agree before work starts</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Associations, units, funds and reporting periods in scope', 'Buildium access permissions and source records', 'Reconciliation and reporting deadlines', 'Who reviews exceptions and approves transactions', 'Board package format and delivery handoff', 'How unresolved items are tracked and escalated'].map((item) => <li key={item} className="rounded-lg border border-border bg-white p-4 text-sm leading-relaxed text-foreground">{item}</li>)}
          </ul>
          <p className="mt-5 text-muted leading-relaxed">The engagement may cover recurring monthly tasks, seasonal capacity or a defined cleanup across one or more associations. The scope should identify deliverables and review responsibilities rather than promise a vague outcome.</p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-8 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Related HOA accounting resources</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/hoa-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting</Link>
            <Link href="/blog/hoa-bank-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">HOA bank reconciliation</Link>
            <Link href="/blog/hoa-financial-statements-board-review" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">HOA financial statements</Link>
            <Link href="/blog/hoa-accounts-payable" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">HOA accounts payable</Link>
            <Link href="/services/hoa-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:border-primary">Property management accounting services</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Buildium HOA accounting questions" items={faqs} columns={2} />
      <InquirySection source={PATH} title="Tell Us Which Buildium HOA Tasks Need Attention" lead="Share the associations involved, reporting deadlines, current board package and accounting tasks you need completed. We can discuss a defined scope around your existing Buildium setup." />
      <CTABanner title="Keep HOA accounting moving" description="Discuss Buildium HOA accounting support around the association records, fund reconciliations, board reports and review controls you already use." cta={{ text: 'Discuss Your Workflow', href: '/contact' }} ctaSecondary={{ text: 'HOA Accounting', href: '/industries/hoa-accounting' }} background="primary" />
    </main>
  );
}
