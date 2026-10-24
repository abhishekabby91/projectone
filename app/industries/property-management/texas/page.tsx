import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/texas';

export const metadata: Metadata = genMeta({
  title: 'Texas Property Management Accounting',
  description: 'Accounting outsourcing for Texas property managers: property-level books, rent and tenant ledgers, vendor payables, owner statements and monthly close.',
  path: PATH,
});

const faqs = [
  { question: 'What property management accounting tasks can you handle in Texas?', answer: 'The agreed scope may include transaction coding, property-level bookkeeping, rent and tenant ledger review, bank reconciliations, vendor payable schedules, receivables review, owner statement preparation and month-end reporting.' },
  { question: 'Can you support a portfolio with multiple properties or entities?', answer: 'Yes, the workflow can be scoped around the property and entity structure already used by your business. We first confirm the chart of accounts, reporting dimensions, source records, reconciliation requirements and review process.' },
  { question: 'Do you work inside our existing software?', answer: 'We begin with your current platform and agreed access. For Yardi-related workflows, see the existing Texas Yardi accounting page; software access and exact tasks are confirmed before work begins.' },
  { question: 'Does Accounstone manage properties or approve payments?', answer: 'No. Accounstone provides outsourced accounting preparation and bookkeeping. Your business retains tenant and vendor decisions, payment authorization, banking control, leasing, maintenance and any local legal or licensing responsibilities.' },
];
const serviceSchema = generateServiceSchema({
  name: 'Texas Property Management Accounting Outsourcing',
  description: 'Outsourced bookkeeping and accounting for Texas property managers, including property and entity ledgers, reconciliations, payables, receivables, owner statements and monthly close preparation.',
  slug: 'property-management/texas',
  basePath: '/industries/',
  areaServed: ['Texas, United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'Texas', url: `${baseUrl}${PATH}` },
]);

export default function TexasPropertyManagementAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="Texas property management companies"
        title="Property Management Accounting Outsourcing in Texas"
        description="Organize property-level records, tenant balances, vendor expenses and owner reporting through accounting outsourcing built around your current portfolio and review process."
        cta={{ text: 'Discuss Your Accounting Workflow', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Services', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Texas</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.25fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Make property-level reporting easier to review</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">For a portfolio with several properties, consistent coding and reconciliations help show which balances belong to each property, which items remain unresolved and what needs attention before owner reports are prepared. The workflow should connect source transactions, tenant and vendor records, bank activity and the general ledger.</p>
            <p className="text-base leading-relaxed text-muted">Accounstone can take on defined recurring accounting tasks remotely while your team retains property operations, approvals and owner relationships. The engagement is based on your portfolio structure, software, reporting calendar and internal controls—not a one-size-fits-all checklist.</p>
          </div>
          <div className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Support can include</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Property- and entity-level transaction coding</li>
              <li>• Bank, credit-card and balance-sheet reconciliations</li>
              <li>• Rent receipts, tenant balances and receivables schedules</li>
              <li>• Vendor invoices and accounts payable tracking</li>
              <li>• Owner statement preparation and distribution schedules</li>
              <li>• Month-end close checklists and exception reporting</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A clear close process across the portfolio</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['1. Prepare the records', 'Post or review agreed transactions and map them to the correct property, entity and account.'],
              ['2. Reconcile the balances', 'Match bank and ledger balances, investigate exceptions and keep outstanding questions visible to the reviewer.'],
              ['3. Deliver reporting support', 'Prepare the agreed owner schedules and month-end files for client review and approval.'],
            ].map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Useful Texas property accounting resources</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">Choose the next page based on your software or the accounting task that needs attention.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Property management accounting</Link>
            <Link href="/industries/real-estate/yardi-accounting-outsourcing-texas" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Yardi accounting in Texas</Link>
            <Link href="/industries/property-management/buildium-accounting-support" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Buildium accounting support</Link>
            <Link href="/blog/property-management-owner-statements" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Owner statement workflow</Link>
            <Link href="/blog/property-management-bank-reconciliation" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Bank reconciliation workflow</Link>
            <Link href="/blog/property-management-month-end-close-checklist" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Month-end close checklist</Link>
            <Link href="/blog/property-management-accounts-payable" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Accounts payable workflow</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Scope and approvals stay with your business</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">Accounstone does not provide on-site property management, legal advice or payment authorization. Your business retains banking control, approval authority, tenant and vendor decisions, and responsibility for local licensing or regulatory obligations. We agree system access, review steps, deliverables and escalation procedures before work starts.</p>
          <p className="mt-3 text-sm"><a href="https://www.trec.texas.gov/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">Texas Real Estate Commission</a> is an official reference for Texas real-estate licensing information; confirm obligations for your business with the appropriate qualified professional.</p>
        </div>
      </section>
      <FAQSection subtitle="Texas property management accounting questions" items={faqs} columns={2} />
      <InquirySection region="united-states" service="Property Management Accounting" source={PATH} title="Discuss Your Texas Property Accounting" lead="Tell us which property records, reconciliations or owner reports need the most attention. We can define a practical scope around your existing software, portfolio and review process." />
      <CTABanner title="Need a steadier monthly close?" description="Discuss property-level bookkeeping, reconciliations and owner-reporting preparation around your existing workflow." cta={{ text: 'Start an Inquiry', href: '#inquiry' }} ctaSecondary={{ text: 'Property Management Services', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
