import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import ServiceIllustration from '@/components/service-illustration';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  generateMetadata,
  baseUrl,
} from '@/lib/seo';

const PATH = '/industries/cpa-firms/white-label-accounting';

export const metadata: Metadata = generateMetadata({
  title: 'White-Label Accounting for CPA Firms',
  description: 'White-label accounting support for CPA firms: agreed branding, client communication boundaries, bookkeeping workflows and review-ready handoffs.',
  path: PATH,
});

const faqs = [
  {
    question: 'What does white-label accounting mean for a CPA firm?',
    answer: 'In a white-label arrangement, an external provider prepares agreed accounting work within the CPA firm’s branding, templates and communication process. The CPA firm retains the client relationship, review, professional judgment and the approvals assigned to it.',
  },
  {
    question: 'Will Accounstone communicate directly with our clients?',
    answer: 'Client communication boundaries are agreed before work begins. The default workflow can route questions and missing-document lists through the CPA firm; any direct contact must be specifically authorized and defined by the firm.',
  },
  {
    question: 'Which accounting work can be included?',
    answer: 'Depending on scope and confirmed capability, work may include bookkeeping, bank and balance-sheet reconciliations, month-end schedules, agreed reporting preparation and tax workpapers. Complex judgments, client advice, final review and filing responsibilities remain with the appropriately authorized professionals.',
  },
  {
    question: 'Can you use our accounting software and workpaper templates?',
    answer: 'The intended model is to work in the firm’s supported client systems and use its approved templates where permissions and scope allow. Confirm the exact platform, version, access level, source records and output standard before starting.',
  },
  {
    question: 'How should a firm assess data-sharing requirements?',
    answer: 'Before any taxpayer information is shared, the firm should confirm applicable federal and state requirements, client permissions, contract terms and safeguards with qualified advisers. IRS Publication 4557 is a starting point for taxpayer-data safeguards, but the right steps depend on the specific arrangement.',
  },
  {
    question: 'Can we begin with a limited workflow?',
    answer: 'Yes. A first engagement can be scoped around one client, one period or a defined recurring process. Agree the source records, deliverables, reviewer, open-item process and acceptance criteria before expanding the scope.',
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'CPA Firms', url: `${baseUrl}/industries/cpa-firms` },
  { name: 'White-Label Accounting', url: `${baseUrl}${PATH}` },
]);

const serviceSchema = generateServiceSchema({
  name: 'White-Label Accounting Support for CPA Firms',
  description: 'Defined bookkeeping and accounting preparation delivered within a CPA firm’s agreed branding, software, documentation and review workflow.',
  slug: 'cpa-firms/white-label-accounting',
  basePath: '/industries/',
  areaServed: ['United States'],
});

const faqSchema = generateFAQSchema(faqs);

export default function WhiteLabelAccountingForCpaFirmsPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="For US CPA and accounting firms"
        title="White-Label Accounting Support for CPA Firms"
        description="Extend your preparation capacity while keeping the client relationship, review process and professional decisions with your firm. Agree the work, branding, software, communication boundaries and reviewer handoff before a file moves."
        cta={{ text: 'Discuss White-Label Support', href: '/contact' }}
        ctaSecondary={{ text: 'View CPA Firm Services', href: '/industries/cpa-firms' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/cpa-firms" className="py-1.5 hover:text-primary">CPA Firms</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">White-Label Accounting</li>
        </ol>
      </nav>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">A delivery model, not a change in ownership</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Your firm keeps the client relationship; the scope defines what gets prepared</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              White-label accounting is a delivery arrangement in which an external provider prepares agreed work within the CPA firm’s systems, templates and client-facing process. It is different from referring a client to a separate accounting business: the engagement is designed around the firm’s own workflow, while responsibilities and communications are defined before work starts. The label itself does not transfer professional responsibility, authorize unrestricted data access or make an external provider a party to the firm’s client engagement.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Accounstone can discuss white-label delivery for defined bookkeeping, accounting and tax-preparation support where the requested work matches available capability. The firm determines which clients and tasks are in scope, what evidence is required, which questions must be escalated and what the reviewer should receive. Final professional judgment, advice, review, client approvals and filing or signing responsibilities stay with the parties assigned those duties.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 sm:p-6">
            <ServiceIllustration service="accounting" className="mx-auto w-full max-w-[260px]" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">White-label workflow</p>
            <p className="mt-2 text-base font-semibold text-primary">Your templates. Your reviewer.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">The agreed process defines branding, permitted contact, file access, exceptions and who approves the final deliverable.</p>
          </aside>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Where the model fits</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Choose tasks with clear inputs and reviewable outputs</h2>
          <p className="leading-relaxed text-muted">
            The right first workstream is usually not the entire client relationship. It is a repeatable preparation task whose source records, output format and escalation points can be described. The firm can keep work that depends on client advice, professional judgment or complex one-off decisions while delegating the agreed preparation layer.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Bookkeeping and reconciliations</h3>
              <p className="text-sm leading-relaxed text-muted">Transaction coding under approved rules, bank and credit-card reconciliations, balance-sheet schedules, exception lists and records prepared for monthly review.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Month-end preparation</h3>
              <p className="text-sm leading-relaxed text-muted">A defined close checklist, supporting schedules, proposed adjustments where authorized, and a visible list of unresolved items or missing documents.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Tax-preparation workpapers</h3>
              <p className="text-sm leading-relaxed text-muted">Agreed return-preparation tasks and supporting schedules in confirmed software, ready for the firm’s required review. Signing, e-filing and tax positions remain with authorized professionals.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Reporting-package assembly</h3>
              <p className="text-sm leading-relaxed text-muted">Financial statement drafts and account schedules assembled to the agreed format, with sources and open questions made traceable for the reviewer.</p>
            </article>
          </div>
          <p className="leading-relaxed text-muted">
            These are examples of possible task groups, not a promise that every engagement or software workflow is automatically in scope. Confirm the entity, period, system, permissions, source records, reviewer standards and capacity before assigning the work.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Brand and communication rules</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Define what “under our brand” means in practice</h2>
          <p className="leading-relaxed text-muted">
            Firms use different engagement models. Some introduce the delivery provider to a client for a specific task; others ask that the external preparation work remain behind the firm’s normal process. Neither arrangement should be assumed. Before assigning a file, agree who may contact the client, which name appears on deliverables, where workpapers are saved, how questions return to the firm, and who approves anything that leaves the preparer’s hands.
          </p>
          <p className="leading-relaxed text-muted">
            A useful white-label instruction set includes the firm’s file-naming convention, client and entity naming, workpaper layout, approved terminology, review-note process and document-sharing method. The firm should identify any disclosure, engagement-letter or consent requirement that applies to the particular service. Brand presentation is not a substitute for required consent or an accurate statement about who performs a task.
          </p>
          <div className="rounded-xl border border-border bg-input p-5">
            <h3 className="mb-3 font-semibold text-primary">Agree these items before starting</h3>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground">
              <li>What tasks, entities and periods are included, and what is expressly excluded.</li>
              <li>Which systems and folders may be accessed, under whose authorization, and how access is changed or revoked.</li>
              <li>Whether client contact is permitted; if so, by whom, for what purpose and using which communication channel.</li>
              <li>What the reviewer expects to receive, including reconciliations, source references, open items and proposed entries.</li>
              <li>Who reviews, approves, signs, files, pays vendors and communicates professional conclusions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">A repeatable handoff</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Make reviewer readiness part of the output</h2>
          <p className="leading-relaxed text-muted">
            White-label preparation only helps when the firm can review the work without rebuilding it. A finished ledger may still leave a reviewer searching for a statement, tracing a schedule to its source or trying to understand an unexplained adjustment. Define quality as the presence of the required evidence and a clear explanation of anything that remains open—not simply a task marked complete.
          </p>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">1. Supply an approved example</h3><p className="text-sm leading-relaxed text-muted">Share the firm’s checklist, account mapping, sample workpaper, naming rules and prior reviewer comments, where permitted.</p></li>
            <li className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">2. Prepare and record exceptions</h3><p className="text-sm leading-relaxed text-muted">Complete the scoped work, attach source support, list missing records and return judgment questions rather than silently making assumptions.</p></li>
            <li className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">3. Review against shared criteria</h3><p className="text-sm leading-relaxed text-muted">The firm evaluates tie-outs, evidence, completeness, exceptions and the amount of correction still required.</p></li>
            <li className="rounded-xl border border-border bg-white p-5"><h3 className="mb-2 font-semibold text-primary">4. Refine before expanding</h3><p className="text-sm leading-relaxed text-muted">Record the review feedback and update the workflow before moving more clients or more complex work into the arrangement.</p></li>
          </ol>
          <p className="leading-relaxed text-muted">
            For tax work, the firm should confirm applicable disclosure and consent requirements before taxpayer information is shared externally. The IRS provides general safeguards guidance in <a href="https://www.irs.gov/pub/irs-pdf/p4557.pdf" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-primary">Publication 4557, Safeguarding Taxpayer Data</a>. Requirements depend on the engagement and facts; firms should obtain qualified advice rather than rely on a generic web page.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-xl font-bold text-primary">Explore the CPA-firm workflow cluster</h2>
          <p className="mb-5 leading-relaxed text-muted">These pages cover different stages of the decision: service scope, client accounting operations, supplier evaluation and onboarding controls.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['/industries/cpa-firms', 'CPA firm outsourcing overview', 'Overall preparation capacity, workflow boundaries and review model.'],
              ['/industries/cpa-firms/cas-production-support', 'CAS production support', 'Recurring client accounting production and reporting-package workflow.'],
              ['/services/bookkeeping/united-states', 'Bookkeeping for CPA firms', 'Recurring client books, reconciliations and close preparation.'],
              ['/services/tax-preparation/united-states', 'Tax preparation support', 'Return-preparation workpapers and reviewer handoff.'],
              ['/resources/guides/client-accounting-services-cas-guide', 'Client Accounting Services guide', 'How production support fits into a CPA firm’s CAS practice.'],
              ['/resources/guides/how-to-choose-accounting-outsourcing-partner', 'Choosing an outsourcing partner', 'Questions to assess service fit, workflow and onboarding.'],
              ['/blog/us-cpa-firm-outsourcing-readiness-checklist', 'Outsourcing readiness checklist', 'Scope, taxpayer-data safeguards, access and pilot evaluation.'],
            ].map(([href, title, description]) => (
              <Link key={href} href={href} className="rounded-xl border border-border bg-input p-4 transition-colors hover:border-primary/40">
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="White-label accounting questions from CPA firms" subtitle="Scope and accountability" items={faqs} columns={2} />
      <InquirySection region="united-states" source={PATH} title="Discuss a white-label workflow" lead="Tell us which client work you want to delegate, which system and workpaper formats you use, and how your reviewers want exceptions returned. We can discuss whether a defined pilot fits." />
      <CTABanner title="Add preparation capacity without changing your client model" description="Start with a defined task, agreed branding and communication rules, and review criteria your firm can evaluate." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
