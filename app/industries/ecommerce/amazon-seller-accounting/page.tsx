import { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import CTABanner from '@/components/cta-banner';
import {
  generateMetadata as genMeta,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/ecommerce/amazon-seller-accounting';

export const metadata: Metadata = genMeta({
  title: 'Amazon Seller Accounting & Settlement Reconciliation',
  description:
    'Accounting support for Amazon sellers: reconcile settlement reports, fees, refunds, reserves, inventory and COGS to your books and bank activity.',
  path: PATH,
});

const faqs = [
  {
    question: 'Why does an Amazon settlement not match the bank deposit?',
    answer:
      'A settlement can combine sales, refunds, marketplace fees, advertising charges, reimbursements, reserves and other adjustments. The reconciliation needs to account for the settlement period and each relevant component rather than treating the net deposit as total sales.',
  },
  {
    question: 'Can you reconcile Amazon Seller Central reports with QuickBooks or Xero?',
    answer:
      'We can review the reports, exports, accounting file and current workflow to define a suitable reconciliation process. We work within the existing setup and do not assume a direct integration is available or that software changes are required.',
  },
  {
    question: 'Do you support both FBA and seller-fulfilled orders?',
    answer:
      'The scope can be based on the reports and records available for your fulfillment model. Amazon fees, refunds, inventory movements and settlement details should be mapped to the relevant accounting records using an agreed process.',
  },
  {
    question: 'Can you track inventory and cost of goods sold?',
    answer:
      'We can maintain agreed inventory and COGS schedules using the source records supplied and the accounting method approved by your business or CPA. Inventory valuation methods, adjustments and accounting-policy decisions remain with your authorized reviewer.',
  },
  {
    question: 'Do you file Amazon sellers’ sales tax returns or provide tax advice?',
    answer:
      'No. We can organize sales and transaction data for review by your CPA or sales-tax provider. Taxability decisions, nexus conclusions, tax advice and filing remain with the appropriately qualified tax professional or service provider.',
  },
  {
    question: 'What do you need to scope the work?',
    answer:
      'Useful starting points include the accounting software, reporting period, Amazon settlement and transaction reports, bank statements, inventory records, other sales channels, and the current reconciliation or close process. Access should be granted through the client’s approved security process.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Amazon Seller Accounting and Settlement Reconciliation Support',
  description:
    'Accounting preparation support for Amazon sellers, including settlement reconciliation, fee and refund classification, inventory and COGS schedules, bank tie-outs and month-end reporting preparation.',
  slug: 'ecommerce/amazon-seller-accounting',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'E-Commerce', url: `${baseUrl}/industries/ecommerce` },
  { name: 'Amazon Seller Accounting', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  {
    title: 'Settlement-to-bank reconciliation',
    body: 'Tie settlement reports to deposits and the accounting records for the matching period. Keep timing differences, withheld balances and unresolved items visible instead of forcing a net figure to agree.',
  },
  {
    title: 'Fees, refunds and adjustments',
    body: 'Separate relevant selling, fulfillment, storage, advertising, refund, chargeback, reimbursement and other settlement components where the source reports support that breakdown.',
  },
  {
    title: 'Inventory and cost of goods sold',
    body: 'Maintain agreed inventory movement and COGS schedules from available purchase, fulfillment and stock records. Flag missing quantities, valuation assumptions and cut-off questions for client or CPA review.',
  },
  {
    title: 'Other sales channels',
    body: 'Keep Amazon activity distinguishable from Shopify, wholesale or other channels so combined revenue does not hide channel-level differences or duplicate sales.',
  },
  {
    title: 'Month-end close support',
    body: 'Prepare reconciliation schedules, exception notes and agreed reporting inputs that make the close easier to review and repeat in the next period.',
  },
  {
    title: 'CPA and tax-provider handoff',
    body: 'Organize supporting reports and sales data for the client’s CPA or tax provider. Tax positions, inventory accounting policy and return filing remain outside this bookkeeping-support scope.',
  },
];

export default function AmazonSellerAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For Amazon sellers and online retail businesses"
        title="Amazon Seller Accounting and Settlement Reconciliation"
        description="Tie marketplace settlements to bank deposits and accounting records, separate fees and refunds, and keep inventory and month-end schedules ready for review."
        cta={{ text: 'Discuss Your Amazon Accounting Workflow', href: '#inquiry' }}
        ctaSecondary={{ text: 'Explore E-Commerce Accounting', href: '/industries/ecommerce' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 py-4 bg-white border-b border-border">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="hover:text-primary">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries" className="hover:text-primary">Industries</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/industries/ecommerce" className="hover:text-primary">E-Commerce</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Amazon Seller Accounting</li>
        </ol>
      </nav>

      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">The deposit is not the sales report</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Amazon may send a net settlement after deducting fees, refunds, advertising charges, reserves or other adjustments. If the deposit is posted as revenue without reconciling the underlying activity, sales, expenses and margin can become difficult to interpret.
            </p>
            <p className="text-base leading-relaxed text-muted">
              A useful workflow starts with the source settlement report, identifies the accounting period and bank deposit, and records each material component according to the client-approved chart of accounts. Differences that cannot be explained from the available evidence should remain visible for review.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Common warning signs</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• The Amazon deposit is posted as one gross-sales figure</li>
              <li>• Fees and refunds are buried in a net payout</li>
              <li>• Settlement periods do not match bank activity</li>
              <li>• Inventory and COGS schedules are incomplete</li>
              <li>• Reimbursements, reserves or chargebacks remain unexplained</li>
              <li>• The CPA has to rebuild the supporting schedules at year-end</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the accounting workflow can cover</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">The scope depends on the seller’s reporting setup, fulfillment model, other sales channels and existing accounting policies. Work is based on available source records and reviewed through the client’s established process.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {workAreas.map((area) => (
              <article key={area.title} className="rounded-xl border border-border bg-white p-5">
                <h3 className="font-bold text-primary">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A repeatable monthly process</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['1. Collect the source records', 'Agree which settlement, transaction, refund, inventory and bank reports are needed, including their reporting periods and owners.'],
              ['2. Reconcile the settlement', 'Match payout activity to bank deposits and the accounting file. Separate fees, refunds, reserves and other supported components.'],
              ['3. Investigate exceptions', 'Document timing items, missing reports, duplicate entries and unexplained differences with source references and questions for the reviewer.'],
              ['4. Prepare the close handoff', 'Provide agreed reconciliation schedules and reporting inputs. The client or its CPA retains approval of accounting treatment and tax decisions.'],
            ].map(([heading, body]) => (
              <li key={heading} className="rounded-xl border border-border bg-input p-5">
                <h3 className="font-bold text-primary">{heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">Related accounting resources</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/industries/ecommerce" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">E-commerce accounting</Link>
            <Link href="/resources/insights/sales-tax-nexus-ecommerce-guide" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Sales tax nexus guide</Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">U.S. bookkeeping services</Link>
            <Link href="/services/accounts-payable/united-states" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Accounts payable support</Link>
            <Link href="/industries/cpa-firms" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Support for CPA firms</Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-8 py-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">Clear accounting and tax boundaries</h2>
          <p className="mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-muted">
            Accounstone provides defined accounting preparation and bookkeeping support within an agreed scope. The client retains banking control, accounting-policy decisions and approval of proposed adjustments. Sales-tax nexus determinations, tax advice, tax-return filing and software implementation remain with the client’s appropriately qualified adviser or service provider.
          </p>
        </div>
      </section>

      <FAQSection subtitle="Amazon seller accounting questions" items={faqs} columns={2} />
      <InquirySection
        region="united-states"
        service="E-Commerce Accounting"
        source={PATH}
        title="Discuss Your Amazon Settlement Workflow"
        lead="Tell us which reports and accounting software you use, how settlements are reconciled today, and where fees, refunds, inventory or month-end schedules need attention."
      />
      <CTABanner
        title="Make marketplace activity easier to reconcile"
        description="Start with the settlement reports and accounting records you already use, then define a repeatable review process for the next close."
        cta={{ text: 'Start an Inquiry', href: '#inquiry' }}
        ctaSecondary={{ text: 'E-Commerce Accounting', href: '/industries/ecommerce' }}
        background="primary"
      />
    </main>
  );
}
