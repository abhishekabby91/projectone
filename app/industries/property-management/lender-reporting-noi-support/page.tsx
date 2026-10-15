import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/lender-reporting-noi-support';

export const metadata: Metadata = genMeta({
  title: 'Property Management Lender Reporting Support',
  description: 'Prepare reconciled property-level NOI schedules, lender reporting packages, reserve activity and variance support from approved accounting records.',
  path: PATH,
});

const faqs = [
  { question: 'What lender reporting support can Accounstone provide?', answer: 'Depending on the agreed scope, support can include assembling property-level income and expense schedules, reconciling report totals to the general ledger, organizing debt-service and reserve schedules supplied or approved by the client, and preparing a documented package for management review.' },
  { question: 'Can you calculate net operating income (NOI) or DSCR?', answer: 'We can prepare supporting schedules using the reporting definitions, source records and assumptions approved by the client or lender. The client and its qualified financial or lending advisers remain responsible for confirming definitions, exclusions, covenant interpretation and final conclusions.' },
  { question: 'Can you prepare a lender package directly from Yardi or AppFolio?', answer: 'We can review available reports and records from the property-management and accounting systems used in the engagement, which may include Yardi, AppFolio, Buildium, QuickBooks Online or Sage Intacct. The specific report access, mappings and reconciliation process are confirmed before work begins; software integration is not assumed.' },
  { question: 'How do you handle differences between property reports and the general ledger?', answer: 'We document the reporting period, source reports, account mapping and variance; trace differences to available transactions or supporting schedules; and list unresolved items for client review. Adjustments are not posted simply to make a lender package balance.' },
  { question: 'Can you manage lender payments or reserve transfers?', answer: 'No. Accounting support may organize reserve activity and reconcile recorded transactions, but bank access, payment instructions, reserve transfers and approvals remain with the client’s authorized personnel.' },
  { question: 'Does this replace the CPA or lender review?', answer: 'No. The service prepares and organizes accounting schedules for review. The client’s CPA, lender and other qualified advisers retain responsibility for assurance, tax positions, loan-covenant interpretation and lending decisions.' },
];

const serviceSchema = generateServiceSchema({
  name: 'Property Management Lender Reporting and NOI Support',
  description: 'Accounting preparation support for property-level NOI schedules, lender reporting packages, debt-service and reserve schedules, reconciliations and variance documentation.',
  slug: 'property-management/lender-reporting-noi-support',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Lender Reporting and NOI Support', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  ['Property-level NOI schedules', 'Organize income and operating-expense records by property and reporting period. Reconcile schedule totals to the agreed source reports and general ledger, and identify items requiring the client’s accounting-policy decision.'],
  ['Lender package assembly', 'Bring together the requested financial statements, rent-roll summaries, occupancy or leasing reports supplied by the client, bank reconciliations and supporting schedules in the lender’s specified format. The lender’s checklist and the client’s approval process determine the final package.'],
  ['Debt-service and coverage support', 'Prepare the underlying income, expense and debt-service inputs for client-approved coverage schedules. Record the definition and period used, retain source references, and route assumptions or exclusions to the responsible client adviser for confirmation.'],
  ['Reserve and restricted-cash schedules', 'Compare available lender or bank statements with the relevant ledger accounts and movement schedules. Document deposits, withdrawals, transfers and unexplained differences without initiating transfers or changing client-controlled funds.'],
  ['Variance explanations and source trails', 'Compare current-period results with the agreed comparison period or budget. Trace material differences to source records where possible and separate verified explanations from open questions that require management input.'],
  ['Multi-property and entity reporting', 'Keep each property and legal entity identifiable while preparing agreed portfolio summaries. Intercompany balances, allocations and consolidations follow client-approved mappings and are flagged for review when supporting detail does not agree.'],
];

export default function PropertyManagementLenderReportingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="For property management companies"
        title="Property Management Lender Reporting & NOI Support"
        description="Prepare property-level income and expense schedules, reconcile lender-reporting figures to accounting records, and organize supporting documentation for management and lender review."
        cta={{ text: 'Discuss Lender Reporting Support', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Accounting', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Lender Reporting & NOI Support</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Make each reported figure traceable to its source</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">A lender package may draw on several views of the same property: a rent roll, property-management reports, the general ledger, bank reconciliations, reserve schedules and management-company records. If the periods or account mappings differ, a total can look reasonable while remaining difficult to explain.</p>
            <p className="text-base leading-relaxed text-muted">The accounting support workflow connects each schedule to its source, records the reporting basis and separates reconciled figures from open questions. It is designed to prepare records for the client’s review—not to interpret loan agreements, certify financial statements or make lending decisions.</p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Typical review points</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Reporting period and source-report completeness</li>
              <li>• Property-level income and operating expenses</li>
              <li>• NOI schedule totals tied to the agreed ledger basis</li>
              <li>• Debt-service inputs and client-approved assumptions</li>
              <li>• Lender reserve movements and supporting statements</li>
              <li>• Variances, open items and reviewer sign-off</li>
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Reporting support work areas</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">The requested lender format, accounting basis, source systems and reporting calendar vary by property and financing arrangement. We confirm those requirements with the client before agreeing on deliverables.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workAreas.map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A reviewable workflow, not a spreadsheet handoff</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-border p-5"><h3 className="font-bold text-primary">1. Confirm the reporting request</h3><p className="mt-2 text-sm leading-relaxed text-muted">Record the lender’s checklist, reporting period, property/entity scope, file format and the person who approves the package.</p></li>
            <li className="rounded-xl border border-border p-5"><h3 className="font-bold text-primary">2. Gather source records</h3><p className="mt-2 text-sm leading-relaxed text-muted">Collect the relevant system reports, trial balance or general ledger, bank reconciliations, reserve statements and approved schedules.</p></li>
            <li className="rounded-xl border border-border p-5"><h3 className="font-bold text-primary">3. Reconcile and document</h3><p className="mt-2 text-sm leading-relaxed text-muted">Tie totals to the agreed accounting records, identify period or mapping differences, and maintain a list of exceptions with source references.</p></li>
            <li className="rounded-xl border border-border p-5"><h3 className="font-bold text-primary">4. Prepare the review package</h3><p className="mt-2 text-sm leading-relaxed text-muted">Assemble schedules and variance notes for the client’s review. The client retains final approval and submits the package through its lender process.</p></li>
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-muted">For related recurring accounting work, see <Link href="/industries/property-management/general-ledger-reconciliation" className="font-medium text-primary underline underline-offset-4">platform-to-general-ledger reconciliation</Link>, <Link href="/industries/property-management/accounting-cleanup" className="font-medium text-primary underline underline-offset-4">accounting cleanup and catch-up support</Link>, and the <Link href="/blog/property-management-financial-statements" className="font-medium text-primary underline underline-offset-4">property management financial statements guide</Link>.</p>
        </div>
      </section>
      <FAQSection faqs={faqs} />
      <InquirySection
        compact
        background="input"
        source={PATH}
        title="Tell Us About Your Lender Reporting Workflow"
        lead="Share the property types, reporting package, source systems and reconciliation points involved. We can discuss the preparation and review handoff that fits your existing process."
      />
      <CTABanner
        title="Need a clearer property-level reporting package?"
        description="Discuss the schedules, reconciliations and supporting records your team needs to prepare."
        cta={{ text: 'Contact Accounstone', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
