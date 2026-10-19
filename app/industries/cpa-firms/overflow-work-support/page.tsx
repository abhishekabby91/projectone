import type { Metadata } from 'next';
import Link from 'next/link';
import PremiumHero from '@/components/premium-hero';
import FAQSection from '@/components/faq-section';
import InquirySection from '@/components/inquiry-section';
import CTABanner from '@/components/cta-banner';
import ServiceIllustration from '@/components/service-illustration';
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema, generateMetadata, baseUrl } from '@/lib/seo';

const PATH = '/industries/cpa-firms/overflow-work-support';

export const metadata: Metadata = generateMetadata({
  title: 'CPA Firm Overflow Accounting Support',
  description: 'Overflow accounting support for CPA firms: defined bookkeeping, reconciliation, cleanup and tax-workpaper queues prepared to your scope and review process.',
  path: PATH,
});

const faqs = [
  {
    question: 'What is overflow accounting support for a CPA firm?',
    answer: 'Overflow support is additional preparation capacity for a defined queue of accounting work when a firm’s available capacity is temporarily stretched. The assignment can be a bounded backlog, a set of reconciliations, recurring bookkeeping tasks or agreed tax workpapers. The firm retains its client relationship, review, professional judgment and approvals.',
  },
  {
    question: 'Is overflow support the same as staff augmentation?',
    answer: 'Not necessarily. Overflow support can be scoped around deliverables, files, periods and due dates. Staff augmentation is usually organized around additional capacity integrated into a team. The right model depends on the work, supervision, systems and level of ongoing coverage required.',
  },
  {
    question: 'Can we start with a small backlog or one client?',
    answer: 'A contained pilot is a practical way to test fit. Define the files and period, available source records, expected output, reviewer, open-item process and acceptance criteria before work begins. Expand only after the firm has evaluated the first handoff.',
  },
  {
    question: 'Which work can be included?',
    answer: 'Depending on the agreed scope and confirmed capability, work may include bookkeeping, account reconciliations, historical cleanup, month-end schedules, AP/AR records and tax-preparation workpapers. Complex accounting or tax judgments, client advice, final review, signing and filing remain with the responsible professionals.',
  },
  {
    question: 'How is client information handled?',
    answer: 'Before access is granted, the firm should confirm engagement terms, permissions, applicable taxpayer-information requirements and safeguards with its qualified advisers. Access should be limited to the agreed work, and missing records or unresolved questions should be returned through the agreed channel.',
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Industries', url: `${baseUrl}/industries` },
  { name: 'CPA Firms', url: `${baseUrl}/industries/cpa-firms` },
  { name: 'Overflow Work Support', url: `${baseUrl}${PATH}` },
]);

const serviceSchema = generateServiceSchema({
  name: 'Overflow Accounting Support for CPA Firms',
  description: 'Scoped preparation support for accounting queues, backlogs and seasonal workload increases, with review and professional decisions retained by the CPA firm.',
  slug: 'cpa-firms/overflow-work-support',
  basePath: '/industries/',
  areaServed: ['United States'],
});

const faqSchema = generateFAQSchema(faqs);

export default function CpaFirmOverflowWorkSupportPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PremiumHero
        subtitle="For US CPA and accounting firms"
        title="Overflow Accounting Support for CPA Firms"
        description="When a queue of bookkeeping, reconciliations, cleanup work or tax-preparation workpapers exceeds current capacity, Accounstone can discuss a defined preparation assignment that fits your systems and review process. Your firm retains the client relationship, professional judgment and approvals."
        cta={{ text: 'Discuss Overflow Work', href: '/contact' }}
        ctaSecondary={{ text: 'View CPA Firm Services', href: '/industries/cpa-firms' }}
        background="primary-gradient"
      />

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="py-1.5 hover:text-primary">Home</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries" className="py-1.5 hover:text-primary">Industries</Link></li><li aria-hidden="true">/</li>
          <li><Link href="/industries/cpa-firms" className="py-1.5 hover:text-primary">CPA Firms</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page" className="font-medium text-primary">Overflow Work Support</li>
        </ol>
      </nav>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">A defined queue, not a generic promise</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary md:text-3xl">Move a specific piece of work without changing the whole practice</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Overflow can appear in different places: reconciliations waiting for source records, client books that need catch-up work, month-end schedules that have slipped, or a batch of tax workpapers that needs preparation before a firm’s own review. These are related capacity problems, but they do not all need the same engagement model. The first step is to define the queue and the output the firm needs back.
            </p>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Accounstone can discuss a scoped assignment around the systems, file structure and checklists the firm already uses. The scope should identify which tasks are included, what source records are available, how questions are escalated and who reviews the completed work. This keeps the engagement focused on deliverables rather than assuming that every client, software workflow or accounting task is automatically in scope.
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-input p-5 sm:p-6">
            <ServiceIllustration service="accounting" className="mx-auto w-full max-w-[260px]" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Queue → preparation → review</p>
            <p className="mt-2 text-base font-semibold text-primary">Make the handoff reviewable</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">Completed tasks, missing records, proposed entries and questions for the reviewer should be clearly separated.</p>
          </aside>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Common overflow queues</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Match the support to the work waiting in the queue</h2>
          <p className="leading-relaxed text-muted">
            A useful scope starts with the work itself rather than a preselected package. The examples below describe possible assignments; actual inclusion depends on the records, systems, deadlines and capability confirmed during scoping.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Bookkeeping and reconciliation backlog</h3>
              <p className="text-sm leading-relaxed text-muted">Organize source transactions, record supported entries, reconcile agreed accounts and list exceptions that need client records or reviewer decisions. Historical catch-up work should have a defined period and opening-balance approach.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Month-end close and reporting schedules</h3>
              <p className="text-sm leading-relaxed text-muted">Prepare assigned account schedules, tie-outs and supporting documents against the firm’s close checklist. Clearly flag incomplete evidence, unreconciled balances and proposed adjustments for review.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Tax workpaper preparation</h3>
              <p className="text-sm leading-relaxed text-muted">Prepare agreed workpapers from the information and instructions supplied through the firm’s process. The responsible tax professional retains tax-position decisions, review, signing and filing responsibilities.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="mb-2 font-semibold text-primary">Temporary workload increase</h3>
              <p className="text-sm leading-relaxed text-muted">Define a batch of files or recurring tasks that needs extra preparation capacity during a busy period. Set the intake rules, priorities, due dates, reviewer and escalation route before the queue starts moving.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Define the assignment</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Agree on inputs, outputs and exceptions before work begins</h2>
          <p className="leading-relaxed text-muted">
            A queue is easier to manage when everyone can see what is ready, what is blocked and what qualifies as complete. Before handing over files, agree the period and entities in scope, source-system access, file naming, expected schedules, evidence standards, reviewer and channel for questions. If records are missing or an item needs professional judgment, it should be returned as an open item rather than silently resolved through an assumption.
          </p>
          <div className="rounded-xl border border-border bg-input p-5">
            <h3 className="mb-3 font-semibold text-primary">A practical intake checklist</h3>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-foreground">
              <li>Identify the client files, entities, periods and tasks included in the assignment.</li>
              <li>Confirm that source records are available and that access is authorized for the agreed work.</li>
              <li>Specify the deliverables, file formats, tie-outs and supporting evidence expected.</li>
              <li>Set due dates, priorities and a process for missing information or scope changes.</li>
              <li>Name the reviewer and clarify who approves entries, client communications and final outputs.</li>
            </ul>
          </div>
          <p className="leading-relaxed text-muted">
            Start with one client, one period or a bounded set of tasks where the firm can assess the handoff. After review, use the exceptions and rework notes to decide whether the scope, instructions or intake process needs adjustment before the next assignment.
          </p>
        </div>
      </section>

      <section className="w-full bg-input px-6 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-5xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Choose the right model</p>
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Overflow work, recurring production and staff augmentation are different choices</h2>
          <p className="leading-relaxed text-muted">
            A bounded backlog or seasonal queue may suit a project or overflow assignment. Work that repeats every month may be better described as recurring production support. If the firm needs an additional person integrated into an ongoing internal role, staff augmentation is a different model and should be scoped accordingly. These options should not be treated as interchangeable labels.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="font-semibold text-primary">Overflow assignment</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">A defined queue, backlog, batch or period with agreed inputs and completion criteria.</p>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="font-semibold text-primary">Recurring CAS production</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Repeatable bookkeeping, reconciliations, close schedules and reporting-package preparation.</p>
              <Link href="/industries/cpa-firms/cas-production-support" className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-4">View CAS production support</Link>
            </article>
            <article className="rounded-xl border border-border bg-white p-5">
              <h3 className="font-semibold text-primary">White-label delivery</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">Work prepared within the firm's agreed branding, communication boundaries and review process.</p>
              <Link href="/industries/cpa-firms/white-label-accounting" className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-4">View white-label accounting</Link>
            </article>
          </div>
          <p className="leading-relaxed text-muted">
            For tax-related assignments, the firm should confirm applicable taxpayer-information rules, client permissions, engagement terms and safeguards with qualified advisers before sharing information. IRS Publication 4557 provides general guidance on safeguarding taxpayer data; it does not replace advice for the specific arrangement.
          </p>
          <p className="leading-relaxed text-muted">
            Useful related workflows include <Link href="/services/bookkeeping/united-states" className="font-medium text-primary underline underline-offset-4">U.S. bookkeeping support</Link>, <Link href="/services/accounting/united-states" className="font-medium text-primary underline underline-offset-4">accounting and month-end support</Link>, <Link href="/services/tax-preparation/united-states" className="font-medium text-primary underline underline-offset-4">tax preparation support</Link> and the <Link href="/resources/guides/staff-augmentation-tax-season-guide" className="font-medium text-primary underline underline-offset-4">tax-season capacity guide</Link>.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-5xl space-y-5">
          <h2 className="font-serif text-2xl font-bold text-primary md:text-3xl">Explore CPA-firm workflows in the five-state test cohort</h2>
          <p className="leading-relaxed text-muted">The state pages describe the relevant preparation and review workflow for CPA firms in each market. They are not a ranking of state-level search demand, and they do not imply that Accounstone has local offices or staff in these states.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['/industries/cpa-firms/california', 'California CPA firms'],
              ['/industries/cpa-firms/texas', 'Texas CPA firms'],
              ['/industries/cpa-firms/florida', 'Florida CPA firms'],
              ['/industries/cpa-firms/new-york', 'New York CPA firms'],
              ['/industries/cpa-firms/illinois', 'Illinois CPA firms'],
            ].map(([href, title]) => (
              <Link key={href} href={href} className="rounded-xl border border-border bg-input p-4 font-medium text-primary hover:border-primary/40">{title}</Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="CPA firm overflow support questions" subtitle="Scope, delivery and review" items={faqs} columns={2} />
      <InquirySection region="united-states" source={PATH} title="Discuss a defined overflow workstream" lead="Tell us which queue is waiting, which systems and records are involved, the output your reviewer expects and the period you need covered. We can discuss whether the assignment fits Accounstone's confirmed capabilities." />
      <CTABanner title="Start with the work waiting in the queue" description="Define the files, outputs and review process first, then decide whether a bounded pilot makes sense." cta={{ text: 'Schedule Consultation', href: '/contact' }} background="primary" />
    </main>
  );
}
