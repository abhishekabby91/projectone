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

const PATH = '/industries/hoa-accounting/yardi-accounting-support';

export const metadata: Metadata = genMeta({
  title: 'Yardi HOA Accounting Support',
  description:
    'Remote accounting support for HOAs using Yardi Voyager or Breeze: assessment ledgers, reconciliation workpapers, reserve schedules and board reporting.',
  path: PATH,
});

const faqs = [
  {
    question: 'What Yardi accounting work can Accounstone support for HOAs?',
    answer:
      'An agreed remote scope may include reviewing assessment and owner-ledger records, preparing bank-reconciliation workpapers, tracking approved payables, organizing operating and reserve schedules, checking month-end exceptions, and preparing agreed board-reporting files. Final approvals and governance decisions remain with the association and its authorized manager.',
  },
  {
    question: 'Does Accounstone provide Yardi software implementation or technical support?',
    answer:
      'The service is accounting and bookkeeping workflow support for teams already using Yardi. It is not a claim of Yardi partnership, software implementation, product support, or certification.',
  },
  {
    question: 'Can you help reconcile operating and reserve accounts?',
    answer:
      'Yes, the agreed workflow can include organizing statements, matching recorded transactions, documenting outstanding items, and preparing reconciliation schedules for review. Reserve transfers and spending approvals remain with the association’s authorized decision-makers.',
  },
  {
    question: 'Can you prepare monthly financial information for an HOA board?',
    answer:
      'Accounstone can help organize agreed month-end reports, budget-to-actual schedules, assessment receivables, payable status, and reconciliation exceptions for the board package. The exact reporting format follows the association’s existing process and review requirements.',
  },
  {
    question: 'Does Accounstone have an office or on-site staff in the United States?',
    answer:
      'No. Accounstone provides remote accounting support, not on-site community management or a local-office service.',
  },
];

const serviceSchema = generateServiceSchema({
  name: 'Yardi HOA Accounting and Bookkeeping Support',
  description:
    'Remote accounting workflow support for homeowners associations and community management companies using Yardi Voyager or Breeze, including assessment records, reconciliation preparation, payable tracking, reserve schedules and board reporting.',
  slug: 'hoa-accounting/yardi-accounting-support',
  basePath: '/industries/',
});
const faqSchema = generateFAQSchema(faqs);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'HOA Accounting', url: `${baseUrl}/industries/hoa-accounting` },
  { name: 'Yardi HOA Accounting Support', url: `${baseUrl}${PATH}` },
]);

const workflows = [
  {
    title: 'Assessment and owner-ledger review',
    body: 'Review recorded assessments, receipts, credits and open balances; flag items that do not reconcile to the agreed supporting records.',
  },
  {
    title: 'Operating and reserve reconciliations',
    body: 'Prepare reconciliation workpapers, document outstanding transactions and organize separate operating and reserve schedules for review.',
  },
  {
    title: 'Approved payables and coding',
    body: 'Organize vendor invoices, approval evidence, association or property coding, due dates and payment status without taking over client authorization.',
  },
  {
    title: 'Month-end board reporting',
    body: 'Bring together budget-to-actual schedules, account reconciliations, receivables and exception notes into the agreed monthly reporting handoff.',
  },
];

export default function YardiHoaAccountingSupportPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PremiumHero
        subtitle="HOA accounting · Yardi workflows"
        title="Yardi HOA Accounting Support"
        description="Remote accounting support for HOA and community management teams using Yardi—covering reconciliation preparation, assessment records, payable tracking, reserve schedules and a clearer monthly board-reporting handoff."
        cta={{ text: 'Discuss your accounting workflow', href: '/contact' }}
        ctaSecondary={{ text: 'Explore HOA accounting support', href: '/industries/hoa-accounting' }}
      />

      <section className="py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Designed around your current process</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-primary sm:text-3xl">Accounting work behind your Yardi reports</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Yardi products such as Voyager Condo, Co-op & HOA and Breeze Premier support association-management and accounting workflows. The available reports and workflow depend on the client’s licensed product, modules, configuration and user permissions. Accounting support still depends on complete source records, consistent coding, documented approvals and reconciliations that are reviewed before reports are shared. Accounstone works within your existing access rules and reporting calendar rather than replacing your software or management process.
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
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary sm:text-3xl">A defined handoff, not a change in authority</h2>
              <p className="mt-4 leading-relaxed text-muted">
                The scope can be aligned to your existing Yardi Voyager or Breeze workflow, chart of accounts, association structure and board-reporting format, subject to confirming access and the reports available in your licensed setup. Your authorized manager or board retains payment approvals and operational decisions; your CPA or other qualified adviser retains tax, legal and assurance responsibilities.
              </p>
              <ul className="mt-5 space-y-3 text-muted">
                <li>• Documented questions and exception lists for reviewer attention</li>
                <li>• Clear separation between preparation and approval</li>
                <li>• Reconciliation support tied to source statements and records</li>
                <li>• Consistent month-end files for management and CPA handover</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="font-serif text-xl font-bold text-primary">Related HOA accounting resources</h3>
              <div className="mt-4 space-y-3">
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/industries/hoa-accounting">HOA accounting and bookkeeping outsourcing</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/industries/hoa-accounting/buildium-accounting-support">Buildium HOA accounting support</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/blog/hoa-accounting-yardi">Yardi HOA accounting workflow guide</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/blog/hoa-bank-reconciliation">HOA bank reconciliation workflow</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/blog/hoa-reserve-reconciliation">HOA reserve reconciliation</Link>
                <Link className="block font-semibold text-primary underline underline-offset-4 hover:text-accent" href="/industries/hoa-accounting/california">California HOA accounting context</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection items={faqs} title="Yardi HOA accounting support: common questions" />

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Remote accounting support for HOA workflows</p>
          <p className="mt-3 leading-relaxed text-muted">
            Accounstone supports accounting and bookkeeping workflows remotely. We do not represent ourselves as Yardi, a Yardi-certified provider, a local US office, or an on-site community management company.
          </p>
        </div>
      </section>

      <InquirySection />
      <CTABanner
        title="Need a steadier month-end process?"
        description="Tell us how your HOA uses Yardi today, which reports are required, and where reconciliations or reporting handoffs need support."
        cta={{ text: 'Discuss your workflow', href: '/contact' }}
      />
    </main>
  );
}
