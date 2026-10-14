import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/hoa-accounting/los-angeles-county';
export const metadata: Metadata = genMeta({
  title: 'Los Angeles County HOA Accounting Support',
  description: 'Remote HOA accounting support for Los Angeles County associations and community managers, including reconciliations, board reports and year-end schedules.',
  path: PATH,
});
const faqs = [
  { question: 'What work can Accounstone support?', answer: 'An agreed scope can include homeowner ledgers, AP records, bank reconciliations, operating and reserve schedules, budget comparisons, monthly board packages and year-end support files. The association or authorized manager retains approvals.' },
  { question: 'Does Accounstone have a Los Angeles office?', answer: 'No. Accounstone provides remote accounting and bookkeeping support from India. This page does not represent a local office, local employees or on-site community management.' },
  { question: 'Can you support several associations under one manager?', answer: 'Yes. Work can follow the manager’s existing software, close calendar and reporting templates while keeping each association’s books and balances separately identifiable.' },
  { question: 'Can you provide California legal advice or make reserve decisions?', answer: 'No. The board and its qualified California advisers retain responsibility for legal interpretation, statutory decisions, reserve adequacy and required sign-off.' },
];
const serviceSchema = generateServiceSchema({
  name: 'Los Angeles County HOA Accounting and Bookkeeping Support',
  description: 'Remote accounting support for Los Angeles County homeowners associations and community management companies, including homeowner ledgers, reconciliations, board reporting and year-end schedules.',
  slug: 'hoa-accounting/los-angeles-county',
  basePath: '/industries/',
  areaServed: ['Los Angeles County, California'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'Los Angeles County HOA Accounting', url: `${baseUrl}${PATH}` },
]);
const workflows = [
  ['Homeowner ledgers', 'Trace assessments, receipts, credits, unapplied payments and aging to source records.'],
  ['Operating and reserve accounts', 'Reconcile bank activity to the ledger and keep fund activity distinct.'],
  ['Monthly board reports', 'Prepare agreed financial statements, budget comparisons and an open-items list.'],
  ['Vendor bills and approvals', 'Organize invoices, coding, support and approval status for authorized reviewers.'],
  ['Multi-association close', 'Apply consistent close steps while preserving separate records for each community.'],
  ['Year-end handover', 'Organize reconciliations and supporting schedules for the association’s selected CPA or tax professional.'],
];
export default function LosAngelesCountyHoaAccountingPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <PremiumHero subtitle="Los Angeles County homeowners associations and community managers" title="Los Angeles County HOA Accounting Support" description="Remote support for homeowner ledgers, reconciliations, monthly board reports and year-end schedules—built around your existing software and approval process." cta={{ text: 'Discuss HOA Accounting', href: '/contact' }} ctaSecondary={{ text: 'Explore HOA Accounting', href: '/industries/hoa-accounting' }} background="primary-gradient" />
    <section className="bg-white px-6 py-10 md:px-8 md:py-14"><div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
      <div className="space-y-4"><p className="text-xs font-bold uppercase tracking-widest text-accent">Local workflow context</p><h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Clear records for every community</h2>
        <p className="leading-relaxed text-muted">Los Angeles County includes varied housing structures and community types. The U.S. Census Bureau tracks housing types separately; those figures describe housing, not the number of HOAs. For accounting, the priority is to keep each association’s balances and support clear.</p>
        <p className="leading-relaxed text-muted">The Community Associations Institute’s Greater Los Angeles chapter reports more than 1,100 members. That is a chapter membership figure, not an association count, and provides local industry context for community-management professionals.</p>
        <p className="flex flex-wrap gap-4 text-sm font-semibold"><a href="https://www.cai-glac.org/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">CAI Greater Los Angeles</a><a href="https://data.census.gov/table/ACSDP5Y2024.DP04?g=050XX00US06037" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">U.S. Census housing data</a></p>
      </div>
      <aside className="rounded-xl border border-border bg-input p-5"><h3 className="font-serif text-lg font-bold text-primary">A board pack should show</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted"><li>Operating and reserve balances with reconciliations.</li><li>Actual income and expenses against budget.</li><li>Homeowner receivables tied to the ledger.</li><li>Vendor support and approval status.</li><li>Open questions ready for review.</li></ul></aside>
    </div></section>
    <section className="bg-input px-6 py-10 md:px-8 md:py-14"><div className="mx-auto max-w-5xl"><p className="text-xs font-bold uppercase tracking-widest text-accent">Practical scope</p><h2 className="mt-2 font-serif text-2xl font-bold text-primary md:text-3xl">HOA accounting workflows we can support</h2><p className="mt-3 max-w-3xl leading-relaxed text-muted">Start with the records, software and close calendar already in use. Agree the scope before work begins.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{workflows.map(([title, body]) => <article key={title} className="rounded-xl border border-border bg-white p-5"><h3 className="font-semibold text-primary">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{body}</p></article>)}</div>
    </div></section>
    <section className="bg-white px-6 py-10 md:px-8 md:py-14"><div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"><div><h2 className="font-serif text-2xl font-bold text-primary">A simple monthly handoff</h2><ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted"><li><strong>1. Collect:</strong> organize bank records, invoices and assessment data.</li><li><strong>2. Reconcile:</strong> match balances and list unexplained differences.</li><li><strong>3. Report:</strong> prepare agreed schedules for client and board review.</li></ol></div><aside className="rounded-xl border border-border bg-input p-5"><h2 className="font-serif text-xl font-bold text-primary">Clear responsibility boundaries</h2><p className="mt-3 text-sm leading-relaxed text-muted">Accounstone provides remote accounting support from India, not on-site management in Los Angeles County. The client retains bank authority and payment approval; the board retains governance and reserve decisions. Legal and tax questions go to qualified advisers.</p></aside></div></section>
    <section className="bg-input px-6 py-8 md:px-8"><div className="mx-auto max-w-5xl"><h2 className="font-serif text-xl font-bold text-primary">Related HOA resources</h2><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
      ['/industries/hoa-accounting','HOA accounting overview'],['/industries/hoa-accounting/california','California HOA accounting'],['/industries/hoa-accounting/orange-county','Orange County HOA accounting'],['/industries/hoa-accounting/san-diego-county','San Diego County HOA accounting'],['/blog/hoa-accounting-month-end-checklist','HOA month-end checklist'],['/blog/hoa-bank-reconciliation','HOA bank reconciliation'],['/blog/hoa-board-financial-package','Board financial package'],['/blog/hoa-year-end-accounting','HOA year-end accounting']
    ].map(([href, label]) => <Link key={href} href={href} className="rounded-lg border border-border bg-white p-4 text-sm font-semibold text-primary hover:border-primary">{label}</Link>)}</div></div></section>
    <FAQSection subtitle="Los Angeles County HOA accounting questions" items={faqs} columns={2} />
    <InquirySection region="united-states" source={PATH} title="Discuss Your HOA Accounting Workflow" lead="Tell us how homeowner ledgers, reconciliations and board reports are handled today. We can scope remote accounting support around your existing systems and approval process." />
    <CTABanner title="Start With One Association or One Close Cycle" description="Agree the records, review steps and accounting scope before expanding the workflow." cta={{ text: 'Start a Conversation', href: '/contact' }} background="primary" />
  </main>;
}
