import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateMetadata, baseUrl } from '@/lib/seo';

const PATH = '/industries/cpa-firms/cas-production-support';

export const metadata: Metadata = generateMetadata({
  title: 'CAS Production Support for CPA Firms',
  description: 'Outsourced CAS production support for CPA firms: monthly bookkeeping, reconciliations, close schedules and reporting packages prepared to your process.',
  path: PATH,
});

const faqs = [
  {
    question: 'What is CAS production support for a CPA firm?',
    answer: 'CAS production support is the preparation layer behind a firm’s client accounting services. It can include recurring bookkeeping, reconciliations, close schedules and agreed reporting packages, while the CPA firm retains client advice, professional judgment, review and approvals assigned to it.',
  },
  {
    question: 'Is this the same as outsourcing the entire CAS client relationship?',
    answer: 'No. Production support is scoped around defined accounting tasks. The CPA firm controls the client relationship, engagement terms, reporting discussion, decisions and professional responsibilities. Client contact and deliverable branding are agreed before work begins.',
  },
  {
    question: 'Which recurring tasks can be included?',
    answer: 'Depending on the client file and agreed scope, tasks may include transaction processing, bank and balance-sheet reconciliations, AP/AR records, month-end schedules, supporting documents and reporting-package preparation. The precise checklist should be confirmed for each workflow.',
  },
  {
    question: 'Can you work inside our existing accounting software?',
    answer: 'The preferred starting point is the firm’s supported client system and existing workflow where permissions and scope allow. Confirm the platform, access level, client records, chart-of-accounts mapping, workpaper format and review checklist before assigning work.',
  },
  {
    question: 'Who handles accounting judgments and client-facing reporting?',
    answer: 'The CPA firm retains professional judgment, client advice, interpretation of unusual transactions and approval of conclusions. Accounstone prepares the agreed records and schedules and returns missing information or judgment questions for the responsible professional.',
  },
  {
    question: 'How should a firm pilot CAS production support?',
    answer: 'Start with one client, one period or a clearly bounded workflow. Agree the source records, deliverables, reviewer, open-item process and acceptance checklist, then assess tie-outs, evidence quality, exceptions and remaining review effort before expanding.',
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'CPA Firms', url: `${baseUrl}/industries/cpa-firms` },
  { name: 'CAS Production Support', url: `${baseUrl}${PATH}` },
]);

const serviceSchema = generateServiceSchema({
  name: 'CAS Production Support for CPA Firms',
  description: 'Defined recurring accounting preparation and reporting-package support for CPA firms delivering client accounting services.',
  slug: 'cpa-firms/cas-production-support',
  basePath: '/industries/',
  areaServed: ['United States'],
});

const faqSchema = generateFAQSchema(faqs);

export default function CasProductionSupportForCpaFirmsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="For CPA firms delivering recurring client accounting"
        title="CAS Production Support for CPA Firms"
        description="Prepare recurring client accounting work through a defined, reviewable workflow. Accounstone can support agreed bookkeeping, reconciliations, close schedules and reporting-package preparation while your firm retains the client relationship and professional decisions."
        cta={{ text: 'Discuss CAS Production Support', href: '/contact' }}
        ctaSecondary={{ text: 'View CPA Firm Services', href: '/industries/cpa-firms' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/cpa-firms" className="py-1.5 hover:text-primary">CPA Firms</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">CAS Production Support</li>
        </ol>
      </nav>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">A delivery layer for your CAS practice</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Separate recurring production from the professional work your firm owns</h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            A CPA firm’s client accounting services (CAS) offering can involve recurring bookkeeping, month-end close, accounts payable and receivable records, account schedules and financial reporting preparation. The production work has to be consistent enough to repeat across clients, while the firm retains the context, review and professional decisions that shape what it tells each client. CAS production support is the defined preparation layer behind that service—not a transfer of the client relationship or an offer of advisory services from the outside provider.
          </p>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Accounstone can discuss scoped preparation work for firms that already deliver CAS or are evaluating how to support a recurring accounting portfolio. Start by identifying the files, systems, checklist, reporting package and review expectations. Confirm what Accounstone can deliver for that workflow before work is assigned; do not assume every task, platform or client type is automatically included.
          </p>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Production tasks</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Build the monthly package from defined, traceable work</h2>
          <p className="leading-relaxed text-muted">
            The exact scope depends on the firm’s service model, the client’s source records and the level of preparation requested. A practical production checklist distinguishes completed tasks from missing information and decisions that still require the CPA or client.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Transaction processing and reconciliations</h3>
              <p className="text-sm leading-relaxed text-muted">Record supported transactions under the firm-approved mapping; reconcile bank, credit-card and agreed balance-sheet accounts; maintain clear schedules for items that do not tie.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Month-end close preparation</h3>
              <p className="text-sm leading-relaxed text-muted">Follow the close checklist, organize supporting records and prepare agreed schedules. Proposed adjustments should be documented and routed for approval according to the firm’s instructions.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">AP/AR and supporting records</h3>
              <p className="text-sm leading-relaxed text-muted">Maintain agreed vendor and receivable records, organize invoices or remittance support, and flag missing approvals or incomplete source information. Payment authority remains with the client.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Reporting-package assembly</h3>
              <p className="text-sm leading-relaxed text-muted">Prepare agreed account schedules and report drafts in the firm’s existing format, with source references and open questions visible for review before anything is presented to the client.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Define the handoff</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">The reporting package is only useful when the reviewer can trace it</h2>
          <p className="leading-relaxed text-muted">
            A report can look complete and still leave the reviewer reconstructing the numbers. Before work begins, define which balances require reconciliation, what supporting evidence must accompany the schedule, how account movements should be explained and which questions must be escalated. If source records are incomplete, the preparation file should say so directly rather than present an unsupported assumption as a completed task.
          </p>
          <p className="leading-relaxed text-muted">
            Establish a consistent close calendar and a single place to record missing documents, open items, proposed adjustments and reviewer comments. The handoff should distinguish a task that is finished from one that is blocked pending client information or professional judgment. This gives the CPA firm a clear basis for review and helps it determine whether a process is ready to repeat for other clients.
          </p>
          <div className="rounded-xl border border-border bg-input p-5">
            <h3 className="mb-3 font-semibold text-primary">Agree on the output standard</h3>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground">
              <li>Which accounts, entities, periods and reports are in scope.</li>
              <li>How each schedule ties to the trial balance or source report.</li>
              <li>What backup and cross-references a reviewer expects.</li>
              <li>How unusual balances, missing records and proposed entries are logged.</li>
              <li>Who reviews, approves, communicates findings and releases the report.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Scope and judgment</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Keep professional decisions with the CPA firm</h2>
          <p className="leading-relaxed text-muted">
            The production checklist should make the boundary between preparation and judgment explicit. Accounstone can prepare agreed records and schedules, but it should not independently decide a revenue-recognition policy, interpret a tax position, advise the client, approve a financial statement or take responsibility for the CPA firm’s filing or signing obligations. Such questions should be returned with the supporting facts so the responsible professional can decide what to do.
          </p>
          <p className="leading-relaxed text-muted">
            For tax-related work, the firm should review applicable taxpayer-information disclosure and consent requirements before external access is granted. IRS Publication 4557 provides general guidance on safeguarding taxpayer data; it does not replace engagement-specific legal or professional advice. Confirm the required permissions, contracts and access controls with qualified advisers for the actual arrangement.
          </p>
          <p className="leading-relaxed text-muted">
            Software choice and access should also be confirmed before onboarding. The intent is to work within an existing supported setup where permitted, not to imply software certification, implementation services or a vendor partnership. If a workflow depends on a feature, report or version that has not been confirmed, verify capability before promising delivery.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-xl font-bold text-primary">Related CPA-firm cluster pages</h2>
          <p className="mb-5 leading-relaxed text-muted">Use the page that matches the decision in front of your firm: overall delivery model, white-label scope, bookkeeping, tax preparation or supplier evaluation.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['/industries/cpa-firms', 'CPA firm outsourcing overview', 'The broad service model and responsibility boundaries.'],
              ['/industries/cpa-firms/white-label-accounting', 'White-label accounting', 'Branding, client contact and workpaper handoff rules.'],
              ['/services/bookkeeping/united-states', 'Bookkeeping support', 'Recurring bookkeeping, reconciliations and month-end preparation.'],
              ['/services/tax-preparation/united-states', 'Tax preparation support', 'Return workpapers and the review process.'],
              ['/resources/guides/client-accounting-services-cas-guide', 'CAS guide for CPA firms', 'How CAS engagements differ from the preparation delivery layer.'],
              ['/blog/us-cpa-firm-outsourcing-readiness-checklist', 'Outsourcing readiness checklist', 'Scope, access, taxpayer-data safeguards and pilot evaluation.'],
            ].map(([href, title, description]) => (
              <Link key={href} href={href} className="rounded-xl border border-border bg-input p-4 transition-colors hover:border-primary/40">
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="CAS production support questions" subtitle="Scope and review" items={faqs} columns={2} />
      <InquirySection region="united-states" source={PATH} title="Discuss a defined CAS workstream" lead="Tell us which recurring client work you want to prepare, which system and reporting format you use, and how your reviewer wants open items returned. We can discuss whether a bounded pilot is a fit." />
      <CTABanner title="Build a reviewable CAS production workflow" description="Start with a defined set of tasks, agreed output standards and a reviewer who can evaluate the first cycle." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
