import { Metadata } from 'next';
import IndustryPageTemplate from '@/components/industry-page-template';
import { generateMetadata as genMeta } from '@/lib/seo';

const PATH = '/industries/cpa-firms';

export const metadata: Metadata = genMeta({
  title: 'Outsourced Accounting Support for CPA Firms',
  description: 'Practical bookkeeping, tax preparation, audit support and staff augmentation for CPA firms managing review queues, client deadlines and seasonal workload.',
  path: PATH,
});

const faqs = [
  { question: 'Can you work under our firm name (white-label)?', answer: "Yes. Where a white-label arrangement fits the engagement, the team works within your firm's process, formatting standards and communication rules. Your firm keeps control of the client relationship and final review." },
  { question: 'What if we are already overloaded and do not have time to train another team?', answer: 'That is usually the first concern worth discussing. The initial handoff needs enough detail to understand your process, but it does not need to become a second full-time project. Existing checklists, examples, prior files and review notes can make the knowledge-transfer process much more practical.' },
  { question: 'Will I spend more time reviewing offshore work than doing it myself?', answer: 'That is a reasonable concern. The point is not to move work out of the office if it simply creates another review burden. The better test is whether the delegated work becomes predictable enough that your reviewers can focus on exceptions, judgment and client work rather than rebuilding the file.' },
  { question: 'How do you handle busy-season capacity?', answer: 'We can take ownership of defined preparation, bookkeeping or documentation tasks when volume rises. The scope, review points and escalation rules are agreed before the work starts so your team knows exactly what comes back for review.' },
  { question: 'What tax and accounting software do you support?', answer: 'We work with platforms including QuickBooks Online, Xero, Drake Tax and CCH Axcess, along with client-specific systems and documented workflows.' },
  { question: 'Do you work on PBC documentation?', answer: 'Yes. We can organize client-provided documents, reconcile supporting schedules, maintain request lists and flag missing information before the file reaches your review queue.' },
  { question: 'How do you learn our firm’s processes?', answer: "Through structured discovery and knowledge transfer. We learn the details that affect review: chart-of-accounts conventions, file naming, checklists, deadlines, reviewer preferences, recurring exceptions and handoff points." },
  { question: 'What happens if the first few files need more review than expected?', answer: 'That feedback is part of onboarding. The useful response is to document the issue, clarify the standard and update the workflow so the same question does not have to be solved again on every file.' },
  { question: 'How is client data protected?', answer: 'Engagements are NDA-backed, with system access limited to the people working on the relevant account and defined handling practices. Any formal security certification should be verified separately rather than assumed.' },
  { question: 'Who owns the client systems and workpapers?', answer: 'Your firm and client retain control of their systems and records. The delivery team works within the access and workflow your firm authorizes.' },
  { question: 'Can your team work in our existing software?', answer: 'Yes. The objective is normally to fit the work into the systems your firm and clients already use rather than creating another platform for the sake of the delivery team.' },
  { question: 'How long before a new team becomes productive?', answer: 'It depends on the workflow, documentation, systems and file complexity. We prefer to establish a realistic ramp-up plan from the actual work rather than promise an arbitrary number of days.' },
  { question: 'Will clients notice a difference?', answer: 'The work should follow your firm’s approved standards and communication process. Your team remains responsible for client-facing review and delivery where that is part of your engagement.' },
  { question: 'How do you maintain quality after onboarding?', answer: 'Quality improves when the process is repeatable: documented procedures, clear ownership, review checkpoints, examples of accepted work and feedback that is carried into the next cycle.' },
];

export default function CPAFirmsPage() {
  return (
    <IndustryPageTemplate
      path={PATH}
      industry={{
        name: 'CPA Firms',
        description: 'Practical support for CPA firms that need more capacity without giving up control of review, client relationships or professional judgment.',
      }}
      overview="The pressure on a CPA firm is rarely just a lack of people. More often, experienced staff are pulled into work that someone else could prepare, while the review queue keeps moving closer to the deadline. A file may be technically complete and still take too long to review because supporting schedules are inconsistent, questions are buried or the preparer did not follow the firm's preferred process. Accounstone supports defined parts of that work so your team can spend more of its time where professional judgment matters."
      benefits={[
        'Overflow bookkeeping and preparation support when the review queue starts to build',
        'Work organized around your firm’s checklists, formatting and review standards',
        'PBC document organization and reconciliation before work reaches the reviewer',
        'Support across QuickBooks, Xero, Drake Tax and CCH Axcess workflows',
        'Flexible capacity for tax season, recurring client work or defined projects',
        'Clear ownership, escalation points and communication during the engagement',
      ]}
      relatedLinks={[
        { name: 'U.S. Bookkeeping', href: '/services/bookkeeping/united-states' },
        { name: 'U.S. Tax Preparation', href: '/services/tax-preparation/united-states' },
        { name: 'U.S. Audit Support', href: '/services/audit-support/united-states' },
        { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
      ]}
      faqs={faqs}
    />
  );
}
