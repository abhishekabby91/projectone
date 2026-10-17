import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/hoa-accounting/california';

export const metadata: Metadata = genMeta({
  title: 'California HOA Accounting & Bookkeeping',
  description:
    'Remote California HOA accounting support for assessment ledgers, reserve reconciliations, board reports and year-end schedules.',
  path: PATH,
});

const faqs = [
  {
    question: 'What accounting work can Accounstone support for a California HOA?',
    answer:
      'The agreed scope can include transaction posting, homeowner assessment ledgers, accounts payable records, bank reconciliations, operating and reserve activity schedules, budget-to-actual reporting, monthly financial packages and year-end support files. The association or its authorized manager retains approvals and governance decisions.',
  },
  {
    question: 'Does Accounstone provide an on-site California office or community manager?',
    answer:
      'Accounstone provides accounting and bookkeeping support remotely. The service covers agreed accounting workflows and does not replace on-site community management, the association board, or its licensed advisers.',
  },
  {
    question: 'Can you help prepare records used in California HOA financial reviews?',
    answer:
      'We can organize and reconcile accounting records and supporting schedules within an agreed workflow. The association should confirm applicable requirements with its California-licensed CPA or attorney; Accounstone does not provide legal advice or independently certify statutory compliance.',
  },
  {
    question: 'Can you work with our existing HOA software and accounting process?',
    answer:
      'We can scope work around the software, access permissions, chart of accounts, approval controls and reporting templates already used by the association or management company. Platform access and payment authority remain controlled by the client.',
  },
  {
    question: 'Do you handle assessment collection or decide how reserves are used?',
    answer:
      'Accounting support can maintain assessment records, payment applications, aging schedules and reserve transaction records. Collection actions, assessment decisions, reserve planning and authorization of payments remain with the association and its appointed professionals.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'California HOA Accounting and Bookkeeping Outsourcing',
  description:
    'Remote accounting support for California homeowners associations and community association managers, including assessment ledgers, operating and reserve reconciliations, monthly board reporting and year-end schedules.',
  slug: 'hoa-accounting/california',
  basePath: '/industries/',
  areaServed: ['California'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'California HOA Accounting', url: `${baseUrl}${PATH}` },
]);

const workstreams = [
  {
    title: 'Assessment and homeowner ledgers',
    body: 'Maintain scheduled charges, payments, credits, unapplied receipts and aged balances so a homeowner account can be traced back to the source transactions.',
  },
  {
    title: 'Operating and reserve reconciliations',
    body: 'Reconcile each bank account to the ledger, retain evidence for transfers and reserve activity, and keep unresolved differences visible until they are explained.',
  },
  {
    title: 'Board reporting and budget comparison',
    body: 'Prepare a consistent monthly package with balance sheet, income and expense reporting, budget-to-actual results, reconciliations and an open-items list.',
  },
  {
    title: 'Payables and supporting records',
    body: 'Record vendor bills and supporting documentation, track approval status, and prepare payment information for the authorized client approver rather than taking payment authority.',
  },
  {
    title: 'Year-end and CPA handover',
    body: 'Organize account reconciliations, homeowner balances, reserve activity, vendor information and supporting schedules for the association’s selected CPA or tax professional.',
  },
  {
    title: 'Multi-association reporting consistency',
    body: 'For community management companies, use agreed account mappings, close steps and review records across associations while preserving each association’s separate books and balances.',
  },
];

export default function CaliforniaHoaAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="California homeowners associations and community managers"
        title="California HOA Accounting & Bookkeeping Support"
        description="Remote accounting support for assessment ledgers, operating and reserve reconciliations, monthly board packages and year-end schedules — built around your existing approvals and accounting systems."
        cta={{ text: 'Discuss HOA Accounting', href: '/contact' }}
        ctaSecondary={{ text: 'Explore HOA Accounting', href: '/industries/hoa-accounting' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries/hoa-accounting" className="py-1.5 hover:text-primary">HOA Accounting</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium">California</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-5">
          <Reveal className="space-y-4">
            <>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">California-specific accounting context</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Keep the Records Ready for Board Review</h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                California associations work within a state-specific framework for financial records, reserve information and annual reporting. That makes a repeatable accounting trail important: transactions should tie to source documents, bank balances should reconcile to the ledger, and board reports should make operating activity and reserve activity understandable without blending them into one unexplained cash figure.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                California Civil Code references commonly used by association professionals address financial records and reporting, including Civil Code sections 5200, 5300 and 5500. The precise duties and deadlines depend on the applicable law, governing documents and circumstances. We use those references to frame the accounting records that may need to be organized; the association’s California counsel and CPA determine legal interpretation, required action and filing responsibility.
              </p>
            </>
          </Reveal>
          <div className="rounded-xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-serif text-lg font-bold text-primary">Reference points for your professional advisers</h3>
            <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-muted">
              <li><a className="font-medium text-primary underline underline-offset-4" href="https://www.davis-stirling.com/HOME/Statutes/Civil-Code-5200" target="_blank" rel="noreferrer">Civil Code § 5200 — association records</a>, including specified financial statements and ledger records.</li>
              <li><a className="font-medium text-primary underline underline-offset-4" href="https://www.davis-stirling.com/HOME/Statutes/Civil-Code-5300" target="_blank" rel="noreferrer">Civil Code § 5300 — annual budget report</a>, including operating budget and reserve-related information.</li>
              <li><a className="font-medium text-primary underline underline-offset-4" href="https://www.davis-stirling.com/HOME/Statutes/Civil-Code-5500" target="_blank" rel="noreferrer">Civil Code § 5500 — financial review</a>, a reference for the board’s review of specified financial information.</li>
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-muted">These links are general reference material, not legal advice. Confirm current requirements with qualified California professionals.</p>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Practical scope</p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">California HOA Accounting Workflows We Can Support</h2>
            <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">The exact engagement depends on the association’s records, software, review structure and the work retained by its management company, board and CPA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workstreams.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-xl border border-border bg-white p-5 md:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A Clear Month-End Review Trail</h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
            Useful HOA reports do more than show a closing balance. They help a board or community manager trace material activity to the ledger, identify unreconciled items, compare actual spending with the approved budget, and see operating and reserve activity separately. A consistent close package can include bank reconciliations, accounts receivable aging, payable status, budget-to-actual schedules, reserve transactions and a short list of items that still need client review.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
            The workflow should also make approval boundaries visible. Invoices and supporting documents can be organised for review, while payment release, bank access, assessment decisions and collection actions remain with the authorised association or management-company personnel. This separation supports traceability without implying that accounting support takes over board authority.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/industries/hoa-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA accounting overview</Link>
            <Link href="/blog/hoa-accounting-month-end-checklist" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA month-end checklist</Link>
            <Link href="/blog/hoa-bank-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA bank reconciliation</Link>
            <Link href="/blog/hoa-year-end-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA year-end accounting</Link>
            <Link href="/industries/hoa-accounting/san-diego-county" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">San Diego County HOA accounting</Link>
            <Link href="/industries/hoa-accounting/yardi-accounting-support" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">Yardi HOA accounting support</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="California HOA accounting questions" items={faqs} columns={2} />
      <InquirySection
        region="united-states"
        source={PATH}
        title="Discuss Your California HOA Accounting Workflow"
        lead="Tell us how assessment records, reconciliations, monthly board reports and year-end schedules are handled today. We can scope remote accounting support around your existing systems and approval process."
      />
      <CTABanner
        title="Start With One Association or One Close Cycle"
        description="Review the current workflow, agree the accounting scope and define the records and review steps before expanding the engagement."
        cta={{ text: 'Start a Conversation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
