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

const PATH = '/industries/hoa-accounting/san-diego-county';

export const metadata: Metadata = genMeta({
  title: 'San Diego County HOA Accounting Support',
  description: 'Remote HOA accounting for San Diego County associations: assessment ledgers, operating and reserve reconciliations, board reports and year-end schedules.',
  path: PATH,
});

const faqs = [
  {
    question: 'What HOA accounting work can Accounstone support in San Diego County?',
    answer: 'An agreed remote scope can include assessment and homeowner ledgers, accounts payable records, bank reconciliations, operating and reserve schedules, budget-to-actual reports, monthly board packages and year-end support files. The association and its authorized manager retain approvals and governance decisions.',
  },
  {
    question: 'Does Accounstone provide on-site HOA management in San Diego?',
    answer: 'No. Accounstone provides remote accounting and bookkeeping support, not on-site community management. The engagement is limited to the agreed accounting workflow and does not include local property or community management.',
  },
  {
    question: 'Can you support self-managed HOAs as well as community management companies?',
    answer: 'The workflow can be scoped for an association or a management company that needs accounting capacity. The scope depends on the records, software, existing manager and CPA responsibilities, approval controls and reporting timetable.',
  },
  {
    question: 'Can you help with reserve reporting and board financial packages?',
    answer: 'Accounting support can organize reserve transactions, reconcile the relevant accounts and prepare agreed schedules and monthly reports. Reserve adequacy, project decisions and required statutory action remain with the board and its qualified advisers.',
  },
  {
    question: 'Does this page provide California legal or tax advice?',
    answer: 'No. California association requirements depend on current law, governing documents and the circumstances. Confirm legal interpretation, statutory duties and tax filing decisions with the association’s California counsel and qualified tax professional.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'San Diego County HOA Accounting and Bookkeeping Support',
  description: 'Remote accounting support for San Diego County homeowners associations and community management companies, including assessment ledgers, reconciliations, board reporting and year-end schedules.',
  slug: 'hoa-accounting/san-diego-county',
  basePath: '/industries/',
  areaServed: ['San Diego County, California'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'San Diego County HOA Accounting', url: `${baseUrl}${PATH}` },
]);

const workstreams = [
  {
    title: 'Assessment and homeowner ledgers',
    body: 'Keep charges, receipts, credits, unapplied payments and aged balances traceable to the correct association and homeowner account.',
  },
  {
    title: 'Operating and reserve reconciliations',
    body: 'Reconcile bank activity to the ledger, track supported transfers and reserve transactions, and keep unresolved differences visible until explained.',
  },
  {
    title: 'Board-ready monthly reporting',
    body: 'Prepare an agreed financial package with balance sheet, income and expense reporting, budget comparison, reconciliations and an open-items list.',
  },
  {
    title: 'Vendor bills and approvals',
    body: 'Maintain invoice support, property or association coding, approval status and payment records for review by the authorized board or manager.',
  },
  {
    title: 'Year-end and CPA handover',
    body: 'Organize reconciliations, homeowner balances, reserve activity, vendor payment data and supporting schedules for the association’s selected CPA or tax professional.',
  },
  {
    title: 'Consistent multi-association workflows',
    body: 'For management companies, use agreed close steps, account mappings and review records while preserving separate books and balances for each association.',
  },
];

export default function SanDiegoCountyHoaAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="San Diego County homeowners associations and community managers"
        title="San Diego County HOA Accounting Support"
        description="Remote accounting support for assessment ledgers, operating and reserve reconciliations, monthly board packages and year-end schedules—built around your existing software and approval process."
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
          <li aria-current="page" className="text-primary font-medium">San Diego County</li>
        </ol>
      </nav>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-5">
          <Reveal className="space-y-4">
            <>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Local workflow context</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Clear books for board review across the county</h2>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Associations in San Diego County may be self-managed or work with a community management company. In either case, board decisions depend on records that connect homeowner assessments, vendor invoices, bank activity, reserve transactions and monthly financial reports. A consistent close helps the reviewer understand what changed, what remains open and which records support the reported balances.
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                The workflow can be scoped for communities and management portfolios in San Diego, Chula Vista, Carlsbad, Encinitas, Escondido, La Mesa, Oceanside, Poway, San Marcos and nearby county communities. These are service-area references only. The service covers remote accounting workflows, not local on-site community management.
              </p>
            </>
          </Reveal>
          <div className="rounded-xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-serif text-lg font-bold text-primary">What the accounting workflow should make clear</h3>
            <ul className="mt-3 space-y-2 text-sm md:text-base leading-relaxed text-muted">
              <li>Assessment charges, receipts, credits and aged homeowner balances tie to source records.</li>
              <li>Operating and reserve activity is understandable and reconciled without unexplained differences.</li>
              <li>Vendor invoices retain support and the required approval trail before payment release.</li>
              <li>Board reports use a consistent cutoff, account mapping and documented review process.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full py-10 md:py-14 px-6 md:px-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Practical scope</p>
            <h2 className="mt-2 font-serif text-2xl md:text-3xl font-bold text-primary">HOA Accounting Workflows We Can Support</h2>
            <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">The exact engagement depends on the association’s records, accounting software, existing management arrangement and board or CPA review process.</p>
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
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Explore HOA Accounting Resources</h2>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/industries/hoa-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA accounting overview</Link>
            <Link href="/industries/hoa-accounting/california" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">California HOA accounting</Link>
            <Link href="/blog/hoa-accounting-month-end-checklist" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA month-end checklist</Link>
            <Link href="/blog/hoa-bank-reconciliation" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA bank reconciliation</Link>
            <Link href="/blog/hoa-year-end-accounting" className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-primary hover:bg-input">HOA year-end accounting</Link>
          </div>
        </div>
      </section>

      <FAQSection subtitle="San Diego County HOA accounting questions" items={faqs} columns={2} />
      <InquirySection
        region="united-states"
        source={PATH}
        title="Discuss Your San Diego County HOA Accounting Workflow"
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
