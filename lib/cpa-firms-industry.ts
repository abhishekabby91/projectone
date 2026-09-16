/**
 * Content for `/industries/cpa-firms` — the site's primary buyer.
 *
 * **This page has the hardest boundary problem on the site, and getting it
 * wrong is the whole risk.** Every commercial page here is already written for
 * CPA firms: the 7 US Service x Region pages address them, `/markets/united-states`
 * addresses them, `/solutions/staff-augmentation` addresses them, and two
 * guides are written for them. A page called "CPA Firms" that describes
 * services is not a new page — it is a summary of the ones that already exist,
 * and it will compete with all of them.
 *
 * So the split, and it is the reason this page can exist at all:
 *
 * - **a Service x Region page** describes one piece of work in one market;
 * - **`/markets/united-states`** describes the US regulatory environment —
 *   IRS, GAAP, state and nexus;
 * - **`/solutions/*`** describes an engagement shape;
 * - **this page describes the firm as a business.** Capacity economics,
 *   realization, what the review queue actually costs, which work to hand over
 *   first, the ramp-up, and the professional-conduct rules a licensed firm is
 *   bound by. Cross-service and cross-market by construction.
 *
 * If a paragraph here could be moved onto a service page without looking odd,
 * it belongs on the service page.
 *
 * **The primary objection is named in `knowledge/icp/cpa-firms.md` and this
 * page must answer it rather than assert around it:** *"If I outsource this,
 * will I spend more time reviewing it than doing it myself?"* That objection
 * gets its own band. Answering it with "our quality is high" is exactly the
 * failure `AI-WEBSITE-GUIDE.md`'s content-psychology principles warn about —
 * the honest answer is mechanical, about what makes a file cheap or expensive
 * to review.
 *
 * **What may not be written into this file.**
 *
 * - **Never imply Accounstone can sign, review, or take final responsibility
 *   for a return or an audit file.** `scope-boundaries.md` §2-3 and this ICP's
 *   own boundary list. This is the highest-risk line on the page.
 * - **Never claim IRS representation** on behalf of a firm's clients, in any
 *   phrasing, and never imply a Form 2848.
 * - **White-label language is fine and is what firms ask for** — working inside
 *   the firm's process, formatting and branding. It must never imply
 *   Accounstone becomes a licensed party to the engagement.
 * - **No audit judgement, no tax positions, no advisory.** The CAS note in the
 *   knowledge file is explicit: production work can be delegated, advisory,
 *   judgement and sign-off stay with the firm's licensed staff.
 * - **No turnaround time, ramp-up duration, headcount, client count, capacity
 *   figure or saving percentage.** The knowledge file says it outright: prefer
 *   a realistic ramp-up plan built from the actual work over an arbitrary
 *   number of days.
 *
 * Vocabulary comes from the knowledge file and should stay in it: review queue,
 * busy season, realization, PBC list, workpapers, sign-off, chart-of-accounts
 * conventions, white-label, ramp-up, handoff, exceptions, cleanup.
 */

export interface FirmSegment {
  name: string;
  who: string;
  body: string;
  points: string[];
}

/** Where the capacity actually goes missing. Six shapes, from the ICP file. */
export const segments: FirmSegment[] = [
  {
    name: 'Busy-season overflow',
    who: 'The sharpest case',
    body:
      'The firm does not lack people in July. It lacks capacity for one workflow in one ten-week window, and hiring for that peak means carrying the cost for the other forty-two.',
    points: [
      'Return preparation and the workpapers behind it',
      'Source-document organisation and open-items lists',
      'Client books brought to a state a return can be prepared from',
      'Work sequenced so returns waiting on a third party do not block the queue',
    ],
  },
  {
    name: 'Cleanup before a return',
    who: 'The work nobody scoped',
    body:
      'A return cannot be prepared ahead of books that agree, and the discovery usually happens in March on a client who was quoted for a return. The cleanup is a different job on a different timetable.',
    points: [
      'Prior-period transactions reviewed and corrected to your conventions',
      'Bank, card and loan accounts reconciled and tied out',
      'Chart of accounts brought to the structure your reviewers expect',
      'What the books will not support raised as an open item, not guessed',
    ],
  },
  {
    name: 'CAS production',
    who: 'Recurring monthly engagements',
    body:
      'Client demand is rarely what limits a CAS practice — production capacity is. The advisory layer the firm sells sits on top of a monthly close somebody has to actually perform.',
    points: [
      'Monthly bookkeeping and close across a book of recurring clients',
      'Reconciliations and supporting schedules on your close calendar',
      'Management reporting prepared to your firm’s template',
      'Exceptions surfaced before the review rather than during it',
    ],
  },
  {
    name: 'Audit and assurance support',
    who: 'PBC lists and evidence',
    body:
      'Fieldwork stalls on documents that have not arrived and schedules that do not tie. That is preparation and chasing, and neither of them needs the licence that the judgement does.',
    points: [
      'PBC request lists maintained and chased to a current status',
      'Client-provided documents organised and indexed to the request',
      'Supporting schedules reconciled and tied to the trial balance',
      'Missing or inadequate evidence flagged before it reaches your reviewer',
    ],
  },
  {
    name: 'An unfilled seat',
    who: 'A role you have been trying to hire',
    body:
      'A vacancy is a capacity problem with a hiring problem attached. Augmentation covers the work while the search runs, without the search becoming the reason the work slips.',
    points: [
      'Defined preparation work inside your existing systems and process',
      'Your review points and escalation rules, not a parallel process',
      'Scope that narrows again when the seat is filled',
      'Documented workflow, so a handover back to a new hire is possible',
    ],
  },
  {
    name: 'Recurring client work',
    who: 'Year-round, not seasonal',
    body:
      'The steady transaction-level work that never justifies a hire but quietly consumes senior time — the payables run, the receivables chase, the monthly reconciliation.',
    points: [
      'Payables captured, coded and routed for your approval',
      'Receivables maintained and aged against the engagement terms',
      'Bank and control accounts reconciled on a monthly cycle',
      'A close file a reviewer can follow rather than re-derive',
    ],
  },
];

/** The objection the ICP file names, answered mechanically rather than asserted. */
export const reviewBurden = {
  heading: 'Will Reviewing It Cost More Than Doing It?',
  lead:
    'This is the first question a partner asks, and it deserves a mechanical answer rather than a claim about quality. A file is expensive to review for reasons that have nothing to do with whether the arithmetic is right: the reviewer cannot tell what was already checked, the open questions are buried in the file rather than listed on it, the schedules are laid out differently from last quarter, and the same correction has to be made again this month because nobody wrote it down. Each of those is a process fault, and each is fixable without anyone becoming a better accountant.',
  items: [
    {
      h: 'The open questions are a list, not a hunt',
      p: 'Every file arrives with what is unresolved named on it — what is missing, which line it affects, who was asked and when. A reviewer opening the file is deciding whether to wait or to proceed, rather than reading the whole thing to work out whether there is a problem in it.',
    },
    {
      h: 'It is laid out the way your reviewers already read',
      p: 'Your checklists, your file naming, your schedule formats, your chart-of-accounts conventions. The best workflow is almost always the one your reviewers stopped having to think about years ago, and adopting it costs us a discovery conversation rather than costing you a new habit.',
    },
    {
      h: 'A correction is made once',
      p: 'The first files in any engagement come back with review notes — that is the point of starting small. What matters is whether the note changes the workflow or just this file. Each one is documented and folded into the process, so the same question is not answered again on every cycle.',
    },
    {
      h: 'Nothing is finished around a gap',
      p: 'A file that is ninety per cent complete and silent about the rest is worse than one that is half complete and explicit. No figure gets a plausible value to make a file look finished; where the record will not support it, it comes back to you as an open item.',
    },
    {
      h: 'You see it on real files before the volume arrives',
      p: 'One partner’s client list, one return type, or the engagements that ran late last season. Both sides find out what review actually costs on work that matters, at a size where the answer is cheap. A workflow that already works is a far smaller problem to scale than one being fixed in March.',
    },
  ],
};

/** The handoff, in the four documented steps from the ICP file. */
export const handoff = [
  {
    n: '01',
    title: 'Structured discovery',
    body: 'Chart-of-accounts conventions, file naming, checklists, deadlines, reviewer preferences and the exceptions that keep recurring.',
  },
  {
    n: '02',
    title: 'Scope and review points',
    body: 'What is prepared, what is escalated, and exactly what a reviewer expects to see before a file moves — agreed before any work starts.',
  },
  {
    n: '03',
    title: 'Work to your standards',
    body: 'Delivered against your own checklists and formatting, white-label where that is part of the arrangement, inside your systems.',
  },
  {
    n: '04',
    title: 'Judgement stays yours',
    body: 'Review, every tax position, audit judgement, sign-off and the client relationship remain the firm’s. Feedback is folded into the workflow.',
    accent: true,
  },
];

/** The trust anchor. Written from this ICP's own boundary list. */
export const boundaries = [
  'We never sign, review or take final responsibility for a return or an audit file. Those belong to your licensed staff under Circular 230, and no volume or price changes that.',
  'We never represent a client before the IRS or any tax authority, and nobody here holds a Form 2848.',
  'We take no tax position and make no audit judgement. Where the documents point more than one way, it comes to you with what we established and what we could not.',
  'White-label means we work inside your process, your formatting and your branding. It does not make us a party to your engagement, and we would never describe it that way to anyone.',
  'We give no advice to your clients and make no client-facing contact unless your firm has specifically asked and defined what that means.',
  'We never hold banking control, filing credentials or an EFIN, in any market.',
];

export const faqs = [
  {
    question: 'Will I spend more time reviewing this than doing it myself?',
    answer:
      'It is the right question, and the honest answer is that it depends on things that are fixable rather than on how good anyone is at accounting. A file is expensive to review when the open questions are buried, the layout changes between cycles, and the same correction has to be made every month. Each of those is a process fault. Start with a defined slice, measure what review actually costs on real files, and decide from that rather than from anything we claim here.',
  },
  {
    question: 'Can you work under our firm name?',
    answer:
      'Yes, where a white-label arrangement fits the engagement — inside your process, your formatting standards and your communication rules. To be exact about what that does not mean: it does not make us a party to your engagement, and we would never present ourselves to your client as one. The client relationship, the review and the signature stay with your firm.',
  },
  {
    question: 'We are already overloaded. Can we afford the handoff?',
    answer:
      'That concern is usually worth naming first, because a handoff that becomes a second full-time project has not helped anyone. The discovery needs enough to understand how you work, but most of it already exists: your checklists, prior files, review notes and a couple of examples of accepted work carry more than a written brief would.',
  },
  {
    question: 'What is safe to outsource from a CPA firm, professionally?',
    answer:
      'Preparation. Transaction processing, cleanup, workpapers, schedules, PBC organisation and documentation can be delegated. What cannot is review, signature, e-filing, any tax position, any audit judgement and any representation before a tax authority — all of which stay with a licensed CPA or EA under Circular 230. Separately, IRC §7216 requires the taxpayer’s written consent before return information is disclosed to another preparer, and the consent must say so where that preparer is outside the United States. The consent language is your firm’s to adopt with your own counsel.',
  },
  {
    question: 'Which work should we hand over first?',
    answer:
      'Usually the work that ran late last season, or one partner’s client list, or a single return type. A narrow first slice gives both sides something real to judge before volume arrives — and if the output is not what you wanted, you have spent one slice finding out rather than a season.',
  },
  {
    question: 'How long until a new team is productive?',
    answer:
      'It depends on the workflow, the documentation, the systems and how complex the files are, so we would rather build a ramp-up plan from your actual work than quote a number of days that means nothing. What we can say is what the plan is built from and when you would see the first output.',
  },
  {
    question: 'Do you support CAS practices?',
    answer:
      'Yes, and it is usually a production question rather than a demand one — the monthly close underneath a CAS engagement is what limits how many clients a firm can carry. We can run that recurring production to your close calendar and your reporting template. The advisory layer the firm sells on top of it stays with the firm’s licensed staff.',
  },
  {
    question: 'What software do you work in?',
    answer:
      'CCH Axcess and Drake Tax on the tax-practice side, QuickBooks Online and Xero for the client bookkeeping underneath it, and Sage and NetSuite where a client runs them. We work inside the systems your firm and clients already use; we do not implement, configure or migrate them.',
  },
  {
    question: 'Who controls the systems and the workpapers?',
    answer:
      'Your firm and your client do. The delivery team works within the access your firm authorises and nothing else, engagements are NDA-backed, and access is limited to the people actually working on the account.',
  },
  {
    question: 'What happens when the first files need more review than expected?',
    answer:
      'That is onboarding working rather than failing. The useful response is to document what the reviewer wanted, clarify the standard and change the workflow, so the same question is not being answered again in week six. A provider who treats early review notes as one-off corrections will generate them forever.',
  },
];
