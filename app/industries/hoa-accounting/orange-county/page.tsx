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

const PATH = '/industries/hoa-accounting/orange-county';

export const metadata: Metadata = genMeta({
  title: 'Orange County HOA Accounting Support',
  description:
    'Remote Orange County HOA accounting support for assessment ledgers, operating and reserve reconciliations, monthly board reports and year-end CPA handoffs.',
  path: PATH,
});

const faqs = [
  {
    question: 'What HOA accounting work can Accounstone support in Orange County?',
    answer:
      'An agreed remote scope can include homeowner assessment ledgers, accounts payable records, operating and reserve reconciliations, budget-to-actual schedules, monthly financial packages and year-end support files. The association or its authorized manager retains approvals and governance decisions.',
  },
  {
    question: 'Does Accounstone have an Orange County office or provide on-site HOA management?',
    answer:
      'No. Accounstone provides remote accounting and bookkeeping support from India. This page does not represent a local office, local employees or an on-site community-management service.',
  },
  {
    question: 'Can you support an HOA managed by an association management company?',
    answer:
      'Yes. The workflow can be scoped around the management company’s existing software, chart of accounts, close calendar and board-reporting templates. Each association’s books and balances remain separately identifiable, and the client retains approval authority.',
  },
  {
    question: 'Can you prepare reports for board review under California requirements?',
    answer:
      'We can organize accounting records and prepare agreed reconciliations, schedules and financial packages for review. California Civil Code requirements should be confirmed against the current law and the association’s circumstances with its qualified California adviser; Accounstone does not provide legal advice or certify statutory compliance.',
  },
  {
    question: 'Can you decide how reserve funds are used or approve vendor payments?',
    answer:
      'No. We can maintain records, reconcile activity and prepare supporting schedules within an agreed workflow. Board decisions, bank authority, payment approval, reserve planning and legal interpretation remain with the association and its authorized professionals.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Orange County HOA Accounting and Bookkeeping Support',
  description:
    'Remote accounting support for Orange County homeowners associations and community association management companies, including assessment ledgers, operating and reserve reconciliations, board reporting and year-end schedules.',
  slug: 'hoa-accounting/orange-county',
  basePath: '/industries/',
  areaServed: ['California'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'Orange County HOA Accounting', url: `${baseUrl}${PATH}` },
]);

const workstreams = [
  {
    title: 'Assessment and homeowner ledgers',
    body:
      'Keep scheduled charges, receipts, credits, unapplied payments and aged balances traceable to the source records for each association and homeowner account.',
  },
  {
    title: 'Operating and reserve reconciliations',
    body:
      'Reconcile bank activity to the ledger, document supported transfers and reserve transactions, and keep unexplained differences visible until resolved.',
  },
  {
    title: 'Monthly board reporting',
    body:
      'Prepare an agreed package with balance sheet, income and expense reporting, budget comparison, bank reconciliations and an open-items list for the board or manager to review.',
  },
  {
    title: 'Vendor bills and approval evidence',
    body:
      'Organize invoices, association coding, supporting documents and approval status so authorized client approvers can review payment requests with a clear audit trail.',
  },
  {
    title: 'Shared costs and multi-association records',
    body:
      'Where a management company oversees multiple communities, follow agreed allocation instructions and preserve a traceable record of how shared costs are assigned. The client approves the allocation policy.',
  },
  {
    title: 'Year-end and CPA handover',
    body:
      'Organize reconciliations, homeowner balances, reserve activity, vendor payment information and supporting schedules for the association’s selected CPA or tax professional.',
  },
];

export default function OrangeCountyHoaAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="Orange County homeowners associations and community managers"
        title="Orange County HOA Accounting Support"
        description="Remote accounting support for homeowner ledgers, operating and reserve reconciliations, consistent monthly board packages and year-end schedules—built around your existing software and approval process."
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
          <li aria-current="page" className="text-primary font-medium">Orange County</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-start">
          <Reveal className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Local association context</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Clear financial records across a varied association portfolio</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              The Orange County Regional Chapter of Community Associations Institute says its 34-city region includes more than 5,000 community associations. For boards and management companies working across multiple communities, the practical challenge is keeping each association’s records distinct while making monthly reporting consistent and understandable.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Accounstone can support the recurring accounting work behind that reporting: ledger maintenance, reconciliations, invoice documentation, budget comparisons and year-end schedules. We work to the records and approval workflow agreed with the client; the association and its authorized manager retain decisions and sign-off.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.caioc.org/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent">CAI Orange County chapter</a>
              <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=5500." target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent">California Civil Code §5500</a>
            </div>
          </Reveal>
          <div className="rounded-xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-serif text-lg font-bold text-primary">What a useful monthly package should show</h3>
            <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-muted">
              <li>Operating and reserve accounts reconciled and kept separately visible.</li>
              <li>Actual revenues and expenses compared with the approved budget.</li>
              <li>Homeowner receivables and delinquency schedules tied to the ledger.</li>
              <li>Vendor invoices and payment approvals supported by traceable records.</li>
              <li>Open questions and unreconciled items listed for the responsible reviewer.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Practical scope</p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">HOA accounting workflows we can support</h2>
            <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">The exact scope depends on the association’s records, accounting software, management arrangement, close calendar and board or CPA review process.</p>
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
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Remote support, with approvals kept where they belong</h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted">
            Accounstone provides remote accounting and bookkeeping support from India, not on-site community management in Orange County. Board approvals, bank access, collection actions, reserve planning, legal interpretation and CPA sign-off remain with the people authorized for those responsibilities. California-specific legal or tax questions should be confirmed with the association’s qualified adviser.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/industries/hoa-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA accounting overview</Link>
            <Link href="/industries/hoa-accounting/california" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">California HOA accounting</Link>
            <Link href="/industries/hoa-accounting/san-diego-county" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">San Diego County HOA accounting</Link>
            <Link href="/blog/hoa-accounting-month-end-checklist" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA month-end checklist</Link>
            <Link href="/blog/hoa-bank-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA bank reconciliation</Link>
            <Link href="/blog/hoa-year-end-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA year-end accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="Orange County HOA accounting questions" items={faqs} columns={2} />
      <InquirySection
        region="united-states"
        source={PATH}
        title="Discuss Your Orange County HOA Accounting Workflow"
        lead="Tell us how homeowner ledgers, reconciliations, monthly board reports and year-end schedules are handled today. We can scope remote accounting support around your existing systems and approval process."
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
