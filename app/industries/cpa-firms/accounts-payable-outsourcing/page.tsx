import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import ServiceIllustration from '@/components/service-illustration';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateMetadata, baseUrl } from '@/lib/seo';

const PATH = '/industries/cpa-firms/accounts-payable-outsourcing';

export const metadata: Metadata = generateMetadata({
  title: 'Accounts Payable Outsourcing for CPA Firms',
  description: 'Accounts payable preparation support for CPA firms: invoice entry, coding, vendor statement reconciliation and payment-batch preparation with client approvals retained.',
  path: PATH,
});

const faqs = [
  { question: 'What AP work can a CPA firm outsource?', answer: 'Depending on the agreed scope and records available, preparation work may include invoice entry, coding to the supplied chart of accounts, purchase-order matching where applicable, vendor statement reconciliation, AP aging maintenance and payment-batch preparation. The firm and its client define the workflow and approval boundaries before access is granted.' },
  { question: 'Can Accounstone release payments or access client bank accounts?', answer: 'Payment execution and bank access should remain with the client’s authorized personnel. Accounstone can discuss preparing an AP batch or schedule for review where the workflow and systems support it, but the client retains approval authority and release of funds.' },
  { question: 'Can AP support fit our existing accounting software?', answer: 'The scope can be discussed around software the firm or client already uses, including supported accounting and bill-payment workflows. Confirm the exact platform, permissions, file structure and task boundaries before work begins. This service is not software implementation or vendor technical support.' },
  { question: 'How should exceptions and missing invoices be handled?', answer: 'The handoff should separate completed preparation from missing source records, unmatched purchase orders, duplicate-invoice questions, vendor discrepancies and items needing client approval. The responsible firm or client decides how exceptions are resolved; the preparation process should not silently invent missing information.' },
  { question: 'Is this the same as general accounts payable outsourcing?', answer: 'The underlying AP tasks can overlap, but this page is for CPA and accounting firms arranging support within a client-service workflow. The firm sets instructions, deliverables and review expectations. The general U.S. accounts payable service page describes the broader service scope for businesses.' },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'CPA Firms', url: `${baseUrl}/industries/cpa-firms` },
  { name: 'Accounts Payable Outsourcing', url: `${baseUrl}${PATH}` },
]);
const serviceSchema = generateServiceSchema({
  name: 'Accounts Payable Outsourcing Support for CPA Firms',
  description: 'Scoped accounts payable preparation support for CPA firms, including invoice entry, coding, vendor statement reconciliation and payment-batch preparation, with approval and payment release retained by the client.',
  slug: 'cpa-firms/accounts-payable-outsourcing',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);

export default function CpaFirmAccountsPayableOutsourcingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PremiumHero
        subtitle="For US CPA and accounting firms"
        title="Accounts Payable Outsourcing Support for CPA Firms"
        description="Add defined AP preparation support to a client workflow: invoice entry, coding, vendor statement reconciliation and payment-batch preparation, scoped to the records and systems available. Your firm and its client retain approval authority and control over payment release."
        cta={{ text: 'Discuss AP Workflow Support', href: '/contact' }}
        ctaSecondary={{ text: 'View CPA Firm Services', href: '/industries/cpa-firms' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/cpa-firms" className="py-1.5 hover:text-primary">CPA Firms</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Accounts Payable Outsourcing</li>
        </ol>
      </nav>
      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">A client workflow with clear approval boundaries</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Move invoice preparation forward without moving payment authority</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">Accounts payable can create a separate queue inside a CPA firm’s client work: invoices arrive through different channels, coding needs to follow the client’s chart of accounts, purchase orders or receiving records may need to be matched, and vendor statements must tie back to the ledger. When these tasks are left until month-end, the firm may receive incomplete AP records just as it needs to close the books or prepare reporting.</p>
            <p className="text-base leading-relaxed text-muted md:text-lg">Accounstone can discuss a defined preparation scope for those tasks, based on the client’s systems, available documents and the firm’s instructions. The purpose is not to take over the client’s financial authority. Invoice approvals, vendor decisions, payment release and the resolution of material accounting questions remain with the authorized client and responsible professionals.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 sm:p-6">
            <ServiceIllustration service="accounts-payable" className="mx-auto w-full max-w-[260px]" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Invoice → preparation → approval</p>
            <p className="mt-2 text-base font-semibold text-primary">Keep the control points visible</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">Prepared items, missing evidence, coding questions and items awaiting approval should be clearly distinguished in the handoff.</p>
          </aside>
        </div>
      </section>
      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Defined preparation tasks</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">What an AP support scope may include</h2>
          <p className="leading-relaxed text-muted">The exact task list should be confirmed before work starts. These are possible preparation activities, not a blanket promise that every client system or invoice type is automatically in scope.</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">Invoice entry and coding</h3><p className="text-sm leading-relaxed text-muted">Enter invoices from authorized source records and apply coding instructions supplied by the firm or client. Flag unclear descriptions, missing invoices, duplicate indicators or unsupported coding rather than guessing.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">PO and supporting-record matching</h3><p className="text-sm leading-relaxed text-muted">Where the client uses purchase orders or receiving records, compare available documents and list mismatches for the designated approver. Disputed charges and commercial decisions stay with the client.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">Vendor statement reconciliation</h3><p className="text-sm leading-relaxed text-muted">Compare vendor statements with AP ledger activity, identify missing bills or unmatched credits, and prepare an exception list for follow-up through the client’s approved process.</p></article>
            <article className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">AP aging and payment-batch preparation</h3><p className="text-sm leading-relaxed text-muted">Maintain agreed aging schedules and prepare a proposed payment batch from approved records. An authorized client approver retains the decision to approve and release funds; bank access and payment execution are not part of this preparation description.</p></article>
          </div>
        </div>
      </section>
      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">How the handoff works</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Agree the evidence, reviewer and approval path first</h2>
          <p className="leading-relaxed text-muted">A useful handoff begins with an agreed source of truth. Identify which inbox, document portal or accounting system supplies the invoice; what fields must be captured; which chart-of-accounts rules apply; whether purchase-order matching is required; and how exceptions should be returned. Also agree who may answer vendor questions, approve a bill, authorize a payment and resolve accounting or tax questions. The preparation team should not have to infer those responsibilities from the invoice itself.</p>
          <div className="rounded-xl border border-border bg-input p-5">
            <h3 className="mb-3 font-semibold text-primary">AP intake checklist</h3>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground">
              <li>Confirm the client entity, accounting period, system and records included in the assignment.</li>
              <li>Provide the current chart of accounts, coding instructions and any approved vendor or PO references.</li>
              <li>Define how duplicate indicators, credits, unmatched items and missing documents are recorded.</li>
              <li>Identify the reviewer and the client-side person authorized to approve invoices and payments.</li>
              <li>Agree the expected output, due dates, file naming and process for changing the scope.</li>
            </ul>
          </div>
          <p className="leading-relaxed text-muted">This approach also makes month-end review more useful: reconciliations can be tied to the AP ledger, unresolved items can be isolated, and reporting can identify which balances are supported versus awaiting clarification. If a task requires judgment outside the agreed instructions, it should be escalated to the responsible professional rather than resolved through an undocumented assumption.</p>
        </div>
      </section>
      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Related CPA-firm workflows</h2>
          <p className="leading-relaxed text-muted">AP work may sit alongside recurring bookkeeping, month-end accounting or a defined backlog. Choose the page that best matches the buyer’s immediate need rather than treating every outsourcing model as interchangeable.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Link href="/services/accounts-payable/united-states" className="rounded-xl border border-border bg-white p-4 font-medium text-primary hover:border-primary/40">U.S. accounts payable service scope</Link>
            <Link href="/blog/accounts-payable-outsourcing" className="rounded-xl border border-border bg-white p-4 font-medium text-primary hover:border-primary/40">AP controls and software workflow guide</Link>
            <Link href="/industries/cpa-firms/cas-production-support" className="rounded-xl border border-border bg-white p-4 font-medium text-primary hover:border-primary/40">Recurring CAS production support</Link>
            <Link href="/industries/cpa-firms/overflow-work-support" className="rounded-xl border border-border bg-white p-4 font-medium text-primary hover:border-primary/40">Defined overflow work support</Link>
          </div>
        </div>
      </section>
      <FAQSection title="Accounts payable outsourcing for CPA firms" subtitle="Scope, controls and review" items={faqs} columns={2} />
      <InquirySection region="united-states" source={PATH} title="Discuss AP preparation support" lead="Tell us which AP tasks are in scope, which accounting system is used, what source records are available and who retains invoice and payment approval. We can discuss whether the workflow fits Accounstone’s confirmed capabilities." />
      <CTABanner title="Start with a clearly defined AP workflow" description="Agree the source records, preparation output and approval boundaries before expanding the scope." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
