import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import { generateMetadata as genMeta, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';

const PATH = '/industries/property-management/california';

export const metadata: Metadata = genMeta({
  title: 'California Property Management Accounting',
  description: 'Outsourced accounting support for California property managers: property-level books, tenant ledgers, deposit schedules, reconciliations, owner statements and month-end reporting.',
  path: PATH,
});

const faqs = [
  { question: 'What accounting work can you support for California property managers?', answer: 'Depending on the agreed scope, support can include transaction coding, property-level bookkeeping, bank and balance-sheet reconciliations, tenant ledger review, accounts payable and receivable schedules, deposit records, owner statement preparation and month-end reporting.' },
  { question: 'Can you work with our existing property management software?', answer: 'The engagement starts with the system and process you already use. We confirm access, reporting needs, account structure and review responsibilities before defining the work. A platform change is not assumed.' },
  { question: 'Can you help with trust-account records?', answer: 'We can discuss bookkeeping preparation and reconciliation support within agreed access and client controls. The responsible broker or property manager retains oversight of legal obligations, approvals and any required professional review.' },
  { question: 'Do you provide on-site property management in California?', answer: 'No. Accounstone provides remote accounting and bookkeeping support. Leasing, maintenance, tenant communication, property inspections and local property-management decisions remain with your operating team.' },
];
const serviceSchema = generateServiceSchema({
  name: 'California Property Management Accounting Support',
  description: 'Remote accounting and bookkeeping support for California property management companies, including property-level ledgers, reconciliations, owner reporting, payables, receivables and month-end close.',
  slug: 'property-management/california',
  basePath: '/industries/',
  areaServed: ['California, United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'Property Management', url: `${baseUrl}/industries/property-management` },
  { name: 'California', url: `${baseUrl}${PATH}` },
]);

export default function CaliforniaPropertyManagementAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PremiumHero
        subtitle="California property management companies"
        title="Property Management Accounting Support in California"
        description="Keep property-level books, tenant balances, deposit schedules, vendor costs and owner reporting organized with remote accounting support that fits your existing workflow."
        cta={{ text: 'Discuss Your Accounting Workflow', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore Property Management Services', href: '/industries/property-management' }}
        background="primary-gradient"
      />
      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/property-management" className="hover:text-primary">Property Management</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">California</li>
        </ol>
      </nav>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.25fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Accounting that connects each property to its reporting</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">California property managers may oversee different property types, owner arrangements and reporting calendars. A reliable monthly process should connect source transactions to property and entity ledgers, reconciled balances and owner-facing reports, with unresolved items visible before statements are issued.</p>
            <p className="text-base leading-relaxed text-muted">Accounstone supports defined accounting tasks remotely. We work from the records, software access and review procedures agreed with your business; your operating team retains tenant communication, leasing, maintenance, approvals and property-level decisions.</p>
          </div>
          <div className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Common areas of support</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Property and entity-level bookkeeping</li>
              <li>• Bank, credit-card and balance-sheet reconciliations</li>
              <li>• Tenant ledgers, rent receipts and receivables review</li>
              <li>• Vendor bills, payable schedules and expense coding</li>
              <li>• Deposit records and owner statement preparation</li>
              <li>• Month-end close files and exception lists</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A monthly workflow your reviewers can follow</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['1. Organize transactions', 'Code income and expenses to the agreed property, entity and account structure; flag missing or unclear support.'],
              ['2. Reconcile and investigate', 'Compare bank activity and ledger balances, review unusual items, and maintain a clear list of open questions.'],
              ['3. Prepare owner reporting', 'Prepare agreed schedules and statement support for your team to review, approve and release.'],
            ].map(([heading, body]) => <article key={heading} className="rounded-xl border border-border bg-white p-5"><h3 className="font-bold text-primary">{heading}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{body}</p></article>)}
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Connect the state page to the right workflow</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">Start with the property-management service overview, then review the specific workflow or platform that matches your records.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/property-management" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Property management accounting</Link>
            <Link href="/industries/property-management/appfolio-accounting-california" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">AppFolio accounting in California</Link>
            <Link href="/industries/property-management/buildium-accounting-support" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Buildium accounting support</Link>
            <Link href="/blog/property-management-owner-statements" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Owner statement workflow</Link>
            <Link href="/blog/property-management-trust-accounting-reconciliation" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Trust-account reconciliation workflow</Link>
            <Link href="/blog/property-management-month-end-close-checklist" className="rounded-lg border border-border bg-input px-4 py-3 font-medium text-primary">Month-end close checklist</Link>
          </div>
        </div>
      </section>
      <section className="px-6 md:px-8 py-8 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Keep responsibilities clear</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">Accounstone provides remote accounting preparation and bookkeeping support, not on-site property management, legal advice or a substitute for any review required of the responsible broker or property manager. Engagements define system access, approval authority, reporting deliverables and escalation of exceptions before work begins.</p>
          <p className="mt-3 text-sm"><a href="https://www.dre.ca.gov/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4">California Department of Real Estate</a> is an official reference for California real-estate licensing information; confirm obligations for your business with the appropriate qualified professional.</p>
        </div>
      </section>
      <FAQSection subtitle="California property management accounting questions" items={faqs} columns={2} />
      <InquirySection region="united-states" service="Property Management Accounting" source={PATH} title="Discuss Your California Property Accounting" lead="Tell us which property records, reconciliations or owner reports are taking the most time. We can define a practical scope around your current software, portfolio and review process." />
      <CTABanner title="Need a steadier monthly close?" description="Discuss property-level bookkeeping, reconciliations and owner-reporting preparation around your existing workflow." cta={{ text: 'Start an Inquiry', href: '#inquiry' }} ctaSecondary={{ text: 'Property Management Services', href: '/industries/property-management' }} background="primary" />
    </main>
  );
}
