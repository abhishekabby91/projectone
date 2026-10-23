import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import Reveal from '@/components/reveal';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/hoa-accounting/texas';
export const metadata: Metadata = genMeta({
  title: 'Texas HOA Accounting Outsourcing',
  description: 'Accounting outsourcing for Texas HOAs, covering assessment ledgers, financial-record organization, reserve reconciliations, board reporting and CPA handover.',
  path: PATH,
});

const faqs = [
  { question: 'What accounting support can Accounstone provide to a Texas HOA or condo association?', answer: 'The agreed scope can include transaction posting, assessment and homeowner ledgers, accounts payable records, bank reconciliations, operating and reserve schedules, budget-to-actual reporting, monthly board packages and year-end support files. The association and its authorized professionals retain approvals, governance decisions and legal interpretation.' },
  { question: 'Does Texas HOA accounting require records to be organized for owner requests?', answer: 'Texas law addresses association records and owner access in provisions including Property Code Chapter 209 for covered property owners’ associations and Chapter 82 for condominiums governed by that chapter. Accounting support can help keep financial ledgers, reconciliations and source documents organized, but the association’s Texas counsel or CPA should determine which rules apply and how to respond to a particular request.' },
  { question: 'Can you keep records ready for a board meeting or CPA handover?', answer: 'Yes, within the agreed workflow we can reconcile accounts, maintain assessment and fund schedules, prepare a consistent monthly reporting package and organize supporting documents for review. The board remains responsible for its decisions, and an independent CPA retains responsibility for any audit, review, tax advice or sign-off.' },
  { question: 'Can you support multiple Texas communities managed by one company?', answer: 'Where the records and software support it, the workflow can standardize close steps, account mappings and review checklists across communities while keeping each association’s ledger, bank accounts, fund balances and board reports separate.' },
  { question: 'Does Accounstone provide on-site Texas community management or legal compliance advice?', answer: 'No. This is remote accounting and bookkeeping support, not an on-site community management service. We do not interpret governing documents or provide legal advice, determine which statutes apply, control association funds, or replace the association’s Texas attorney or CPA.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Texas HOA Accounting Outsourcing',
  description: 'Accounting outsourcing for Texas homeowners associations, property owners’ associations and condominium communities, including assessment ledgers, reconciliations, board reporting and organized year-end records.',
  slug: 'hoa-accounting/texas', basePath: '/industries/', areaServed: ['Texas'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl }, { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'Texas HOA Accounting', url: `${baseUrl}${PATH}` },
]);

const workstreams = [
  { title: 'Assessment and homeowner ledgers', body: 'Keep scheduled assessments, payments, credits, unapplied receipts and aged balances traceable to source transactions so account questions can be researched without rebuilding the ledger.' },
  { title: 'Operating and reserve reconciliations', body: 'Reconcile each association bank account to the books, preserve the detail behind transfers and reserve activity, and list unresolved differences for client review.' },
  { title: 'Financial-record organization', body: 'Maintain consistent digital files for transaction support, bank reconciliations, board-approved entries and period-end schedules so authorized client reviewers can locate the accounting evidence they need.' },
  { title: 'Board reporting and budget comparison', body: 'Prepare the agreed monthly package with balance sheet, income and expense reporting, budget-to-actual results, fund schedules, reconciliations and an open-items list.' },
  { title: 'Payables and approval evidence', body: 'Record vendor bills and supporting documents, track approval status and prepare payment information for the client’s authorized approver. Payment release and banking access remain with the association or its manager.' },
  { title: 'Multi-association close consistency', body: 'For management companies, use agreed close steps, account mappings and review records across communities while preserving each association’s separate books and fund balances.' },
];

export default function TexasHoaAccountingPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <PremiumHero subtitle="Texas homeowners associations, property owners’ associations and condo communities" title="Texas HOA Accounting & Bookkeeping Support" description="Remote support for assessment ledgers, operating and reserve reconciliations, organized financial records, monthly board packages and year-end CPA handover — built around your existing approvals and accounting systems." cta={{ text: 'Discuss HOA Accounting', href: '/contact' }} ctaSecondary={{ text: 'Explore HOA Accounting', href: '/industries/hoa-accounting' }} background="primary-gradient" />
    <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white"><ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
      <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li><li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li><li><Link href="/industries/hoa-accounting" className="py-1.5 hover:text-primary">HOA Accounting</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="text-primary font-medium">Texas</li>
    </ol></nav>
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white"><div className="max-w-4xl mx-auto space-y-5">
      <Reveal className="space-y-4"><>
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Texas-specific accounting context</p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Keep Association Records Traceable and Ready for Review</h2>
        <p className="text-base md:text-lg text-muted leading-relaxed">Texas communities may operate as property owners’ associations or condominium associations, and the governing framework can differ by association type and documents. The accounting process should make it straightforward to trace assessments, receipts, payables, bank balances and reserve activity from the board report back to the underlying records, without mixing one community’s transactions with another’s.</p>
        <p className="text-base md:text-lg text-muted leading-relaxed">Texas Property Code Chapter 209 includes provisions addressing records of covered property owners’ associations. Chapter 82 includes records provisions for condominiums governed by the Uniform Condominium Act. These references help identify why orderly ledgers and supporting records matter; they do not determine which rules apply to a particular association or replace advice from its Texas attorney or CPA.</p>
      </></Reveal>
      <div className="rounded-xl border border-border bg-input p-5 md:p-6"><h3 className="font-serif text-lg font-bold text-primary">Reference points for your professional advisers</h3>
        <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-muted">
          <li><a className="font-medium text-primary underline underline-offset-4" href="https://tcss.legis.texas.gov/resources/PR/htm/PR.209.htm" target="_blank" rel="noreferrer">Texas Property Code, Chapter 209</a> — residential property owners’ association provisions, including association-record topics.</li>
          <li><a className="font-medium text-primary underline underline-offset-4" href="https://statutes.capitol.texas.gov/?artSec=82.156&chapter=PR.82&code=PR&tab=1" target="_blank" rel="noreferrer">Texas Property Code, Chapter 82</a> — condominium provisions, including financial-record and access-to-records sections for associations governed by the chapter.</li>
        </ul><p className="mt-3 text-xs leading-relaxed text-muted">These links are general reference material, not legal advice. Confirm current law, applicability and deadlines with qualified Texas professionals.</p>
      </div>
    </div></section>
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input"><div className="max-w-5xl mx-auto">
      <div className="max-w-3xl mb-8"><p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Practical scope</p><h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">Texas HOA Accounting Workflows We Can Support</h2><p className="mt-3 text-base md:text-lg text-muted leading-relaxed">The exact engagement depends on the association’s records, software, review structure and the work retained by its management company, board and CPA.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{workstreams.map((item) => <Reveal key={item.title}><article className="h-full rounded-xl border border-border bg-white p-5 md:p-6"><h3 className="font-serif text-lg font-bold text-primary">{item.title}</h3><p className="mt-3 text-sm md:text-base leading-relaxed text-muted">{item.body}</p></article></Reveal>)}</div>
    </div></section>
    <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white"><div className="max-w-4xl mx-auto">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Remote accounting support, not local management</h2>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">Accounstone provides remote accounting and bookkeeping support for Texas associations and management companies. The service is not an on-site community-management arrangement. Board approvals, bank authority, collections decisions, legal interpretation and CPA sign-off remain with the people authorized for those responsibilities.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/industries/hoa-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA accounting overview</Link>
        <Link href="/blog/hoa-accounting-month-end-checklist" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA month-end checklist</Link>
        <Link href="/blog/hoa-year-end-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA year-end accounting</Link>
        <Link href="/blog/hoa-accounting-transition-checklist" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA accounting transition checklist</Link>
        <Link href="/industries/hoa-accounting/california" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">California HOA accounting</Link>
      </div>
    </div></section>
    <FAQSection subtitle="Texas HOA accounting questions" items={faqs} columns={2} />
    <InquirySection region="united-states" source={PATH} title="Discuss Your Texas HOA Accounting Workflow" lead="Tell us how assessment records, reconciliations, board reports and year-end schedules are handled today. We can scope remote accounting support around your existing systems and approval process." />
    <CTABanner title="Start With One Association or One Close Cycle" description="Review the current workflow, agree the accounting scope and define the records and review steps before expanding the engagement." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
  </main>;
}
