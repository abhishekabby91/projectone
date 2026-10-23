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

const PATH = '/industries/hoa-accounting/eunify-accounting-support';

export const metadata: Metadata = genMeta({
  title: 'eUnify HOA Accounting Outsourcing',
  description:
    'HOA accounting outsourcing for teams using eUnify: assessment records, reconciliations, payables, month-end review and board reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What accounting work can Accounstone support for HOAs using eUnify?',
    answer:
      'An agreed remote scope may include reviewing assessment and homeowner-ledger activity, preparing reconciliation schedules, organizing approved payables, checking month-end exceptions and preparing agreed financial reporting files. The actual workflow depends on the association’s eUnify configuration and any connected accounting system.',
  },
  {
    question: 'Does Accounstone provide eUnify implementation or product support?',
    answer:
      'No. The service is accounting and bookkeeping workflow support for teams already using eUnify. This page does not claim an eUnify partnership, certification, software implementation service or vendor technical support.',
  },
  {
    question: 'Can you support an eUnify and QuickBooks workflow?',
    answer:
      'Support can include documenting which system holds each type of record, checking transferred totals, and investigating missing, duplicate or timing-related entries. The system roles and reconciliation steps must be agreed with the client before work begins.',
  },
  {
    question: 'Can you prepare monthly financial information for an HOA board?',
    answer:
      'Accounstone can organize agreed month-end schedules, bank-reconciliation workpapers, assessment receivables, payable status and exception notes for management review and the board package. Final reporting follows the association’s existing controls and approval process.',
  },
  {
    question: 'Does Accounstone have a US office or on-site community managers?',
    answer:
      'No. Accounstone provides remote accounting support, not a local office or on-site community management. The service does not include legal, tax or assurance advice.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'eUnify HOA Accounting Outsourcing',
  description:
    'Accounting outsourcing for homeowners associations and community managers using eUnify, including assessment-ledger review, reconciliation preparation, payable tracking, month-end checks and board-reporting handoffs.',
  slug: 'hoa-accounting/eunify-accounting-support',
  basePath: '/industries/',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'eUnify HOA Accounting Support', url: `${baseUrl}${PATH}` },
]);

const workflows = [
  {
    title: 'Assessment and homeowner-ledger review',
    body: 'Review recorded assessments, receipts, credits and outstanding balances against agreed source records, then document exceptions for the authorized manager to resolve.',
  },
  {
    title: 'Bank and account reconciliations',
    body: 'Organize bank statements, match recorded transactions, track outstanding items and prepare reconciliation workpapers for review before month-end reporting.',
  },
  {
    title: 'Payables and vendor documentation',
    body: 'Organize invoices, coding details, approval evidence, due dates and payment status while leaving payment authorization with the client.',
  },
  {
    title: 'Month-end and board-reporting handoff',
    body: 'Bring together agreed financial schedules, receivable information, reconciliation status and open questions in a repeatable handoff for management and CPA review.',
  },
];

export default function EUnifyHoaAccountingSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PremiumHero
        subtitle="HOA accounting · eUnify workflows"
        title="eUnify HOA Accounting Outsourcing"
        description="Accounting outsourcing for HOA and community management teams using eUnify, covering assessment records, reconciliation preparation, payable tracking, month-end checks and reporting handoffs."
        cta={{ text: 'Discuss your accounting workflow', href: '/contact' }}
        ctaSecondary={{ text: 'Explore HOA accounting support', href: '/industries/hoa-accounting' }}
      />

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Built around the client’s actual setup</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-primary sm:text-3xl">Accounting work behind your eUnify reports</h2>
              <p className="mt-4 leading-relaxed text-muted">
                eUnify supports community association management and financial workflows, but the right accounting handoff depends on how each association has configured its records and connected systems. Accounstone works from the client-approved workflow, source documents and access rules; we do not assume every eUnify environment is configured the same way.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {workflows.map((item) => (
              <Reveal key={item.title}>
                <article className="h-full rounded-xl border border-border bg-background p-5 sm:p-6">
                  <h3 className="font-serif text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-input/40 py-14 sm:py-18">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          
          <Reveal>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-serif text-xl font-bold text-primary">Related HOA accounting resources</h3>
              <div className="mt-4 space-y-3">
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/industries/hoa-accounting">HOA accounting and bookkeeping outsourcing</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/industries/hoa-accounting/appfolio-accounting-support">AppFolio HOA accounting support</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/industries/hoa-accounting/buildium-accounting-support">Buildium HOA accounting support</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/blog/hoa-accounting-eunify">eUnify HOA accounting workflow guide</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/blog/eunify-quickbooks-hoa-accounting">eUnify and QuickBooks reconciliation guide</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/blog/hoa-bank-reconciliation">HOA bank reconciliation workflow</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} title="eUnify HOA accounting support: common questions" />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Remote accounting support for HOA workflows</p>
          <p className="mt-3 leading-relaxed text-muted">
            Accounstone supports accounting and bookkeeping workflows remotely. We do not represent ourselves as eUnify, an eUnify-certified provider, a local US office or an on-site community management company.
          </p>
        </div>
      </section>

      <InquirySection />
      <CTABanner
        title="Need a clearer HOA month-end handoff?"
        description="Tell us how your association uses eUnify, which records and reports need review, and where reconciliations or reporting handoffs need support."
        cta={{ text: 'Discuss your workflow', href: '/contact' }}
      />
    </main>
  );
}
