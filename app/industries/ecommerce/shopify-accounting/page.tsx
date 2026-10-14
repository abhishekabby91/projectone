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

const PATH = '/industries/ecommerce/shopify-accounting';

export const metadata: Metadata = genMeta({
  title: 'Shopify Accounting & Payout Reconciliation',
  description:
    'Shopify accounting support for payout-to-bank reconciliation, refunds, processing fees, sales-tax records, inventory and month-end reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'Why do Shopify sales differ from the bank payout?',
    answer:
      'Orders and payouts do not represent the same event. A payout can include processing fees, refunds, chargebacks, adjustments and tax-related amounts, and it may arrive after the original sale. The reconciliation should connect the transaction or payout report to the actual bank deposit.',
  },
  {
    question: 'Can you reconcile Shopify Payments with QuickBooks Online or Xero?',
    answer:
      'We can review the exports, accounting file and current process to define a suitable reconciliation workflow. We work within the existing setup and do not assume a direct integration, connector or software change is required.',
  },
  {
    question: 'Can you include PayPal, Stripe or other payment gateways?',
    answer:
      'The agreed scope can cover the payment channels the business actually uses. Each gateway should be reconciled from its transaction or payout reports to the relevant bank activity, with fees, refunds and timing differences recorded separately where supported.',
  },
  {
    question: 'How should gift cards and customer refunds be handled?',
    answer:
      'Gift-card activity, refunds and chargebacks need to follow the client-approved accounting policy and the supporting transaction history. We can prepare records and schedules, while policy decisions and approval of unusual adjustments remain with the client or its CPA.',
  },
  {
    question: 'Do you provide Shopify tax advice or file sales-tax returns?',
    answer:
      'No. We can organize sales and transaction data for review by the client’s CPA or sales-tax provider. Nexus conclusions, taxability decisions, tax advice and filings remain with the appropriately qualified tax professional or service provider.',
  },
  {
    question: 'What is needed to scope Shopify accounting support?',
    answer:
      'Start with the accounting system, Shopify and payment-provider reports, bank statements, reporting periods, inventory or fulfillment records, other sales channels and the current month-end process. Access should follow the client’s approved security and permissions process.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Shopify Accounting and Payout Reconciliation Support',
  description:
    'Accounting preparation support for Shopify businesses, including payout-to-bank reconciliation, fee and refund classification, payment-gateway tie-outs, agreed inventory and COGS schedules, and month-end reporting preparation.',
  slug: 'ecommerce/shopify-accounting',
  basePath: '/industries/',
  areaServed: ['United States'],
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'E-Commerce', url: `${baseUrl}/industries/ecommerce` },
  { name: 'Shopify Accounting', url: `${baseUrl}${PATH}` },
]);

const workAreas = [
  {
    title: 'Shopify Payments payout reconciliation',
    body: 'Match payout reports to bank deposits and the related order activity. Separate gross sales, discounts, refunds, processing fees and supported adjustments rather than treating the net payout as revenue.',
  },
  {
    title: 'Payment gateways and timing differences',
    body: 'Reconcile other agreed payment channels such as PayPal or Stripe from their own transaction and payout records. Track timing differences, unmatched deposits and unresolved items for review.',
  },
  {
    title: 'Refunds, disputes and gift-card records',
    body: 'Keep refunds, chargebacks and gift-card activity traceable to the source records and approved accounting treatment. Flag missing evidence or unusual balances instead of guessing at a correction.',
  },
  {
    title: 'Inventory and cost of goods sold',
    body: 'Prepare agreed inventory and COGS schedules from the purchase, fulfillment and stock records available. Valuation methods, cost assumptions and accounting-policy decisions remain with the client or its CPA.',
  },
  {
    title: 'Multi-channel sales',
    body: 'Keep Shopify distinct from Amazon, wholesale and other sales channels before consolidating results, so channel-level differences and duplicate posting risks remain visible.',
  },
  {
    title: 'Month-end close and CPA handoff',
    body: 'Prepare reconciliation schedules, exception notes and agreed reporting inputs that make the close easier to review. Sales-tax conclusions, tax advice and return filing remain with the client’s qualified adviser or provider.',
  },
];

export default function ShopifyAccountingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="For Shopify and Shopify Plus businesses"
        title="Shopify Accounting and Payout Reconciliation"
        description="Reconcile Shopify Payments and other gateway payouts to the bank, separate fees and refunds, and prepare records for inventory, month-end and CPA review."
        cta={{ text: 'Discuss Your Shopify Accounting Workflow', href: '#inquiry' }}
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
          <li aria-current="page" className="font-medium text-primary">Shopify Accounting</li>
        </ol>
      </nav>

      <section className="px-6 md:px-8 py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">The order report, payout and bank deposit are different records</h2>
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Shopify records store activity, while the payment provider sends payouts according to its settlement process. A single payout may combine multiple orders, refunds, processing fees and adjustments. Posting only the net bank deposit can hide the gross activity and make the month-end figures hard to trace.
            </p>
            <p className="text-base leading-relaxed text-muted">
              A dependable routine identifies the source report for each period, matches payout totals to the bank, and documents timing differences and unresolved items. Other gateways and sales channels should be reconciled separately before results are consolidated.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 md:p-6">
            <h3 className="font-bold text-primary text-lg">Common warning signs</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground">
              <li>• Shopify sales do not match payout totals</li>
              <li>• Deposits are posted as revenue without a payout tie-out</li>
              <li>• Processing fees and refunds are netted together</li>
              <li>• Other gateways have separate, unreconciled balances</li>
              <li>• Gift cards or dispute balances remain unexplained</li>
              <li>• Inventory and COGS schedules are incomplete at close</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-8 py-10 md:py-14 bg-input">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">What the Shopify accounting workflow can cover</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">The exact scope depends on the store’s payment providers, order volume, inventory setup and accounting process. Work is based on available source records and the client-approved accounting policy.</p>
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
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">A repeatable monthly reconciliation</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['1. Agree on the source reports', 'Confirm the Shopify, gateway, bank, inventory and accounting reports needed for each period.'],
              ['2. Match payouts to the bank', 'Tie each payout to the corresponding deposit and related transaction report; separate fees, refunds and supported adjustments.'],
              ['3. Record and document differences', 'List timing items, missing reports, duplicate postings and unexplained balances with source references and questions for the reviewer.'],
              ['4. Prepare the close handoff', 'Provide the agreed reconciliation schedules and reporting inputs. The client or CPA retains approval of accounting treatment and tax decisions.'],
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
            <Link href="/industries/ecommerce/amazon-seller-accounting" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Amazon seller accounting</Link>
            <Link href="/resources/insights/sales-tax-nexus-ecommerce-guide" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">Sales tax nexus guide</Link>
            <Link href="/services/bookkeeping/united-states" className="rounded-lg border border-border bg-white px-4 py-3 font-medium text-primary">U.S. bookkeeping services</Link>
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

      <FAQSection subtitle="Shopify accounting questions" items={faqs} columns={2} />
      <InquirySection
        region="united-states"
        service="E-Commerce Accounting"
        source={PATH}
        title="Discuss Your Shopify Payout Workflow"
        lead="Tell us which Shopify and payment-provider reports you use, how payouts are reconciled today, and where fees, refunds, inventory or month-end schedules need attention."
      />
      <CTABanner
        title="Make Shopify payouts easier to trace"
        description="Build a repeatable reconciliation routine around your existing store, payment providers and accounting records."
        cta={{ text: 'Start an Inquiry', href: '#inquiry' }}
        ctaSecondary={{ text: 'E-Commerce Accounting', href: '/industries/ecommerce' }}
        background="primary"
      />
    </main>
  );
}
