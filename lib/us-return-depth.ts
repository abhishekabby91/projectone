/**
 * Depth content for the US return-type pages under
 * `/services/tax-preparation/united-states/`.
 *
 * **Why these are children rather than a parallel `/us-tax/` tree.** The parent
 * page is already strong — 2,114 words, and it owns "US tax preparation
 * outsourcing" along with the §7216 consent explanation and the Circular 230
 * boundary. A second hierarchy would give Google two candidates for the same
 * query, which is the failure already playing out between that page and
 * `/blog/tax-preparation-outsourcing`. Nesting concentrates the signal instead
 * of splitting it again.
 *
 * **So these pages must not restate the parent.** §7216, Circular 230, the
 * software boundary and the general "what moves and what cannot" argument all
 * live on the parent and are linked, not repeated. What belongs here is the
 * part that is genuinely different per return type: what the preparation work
 * actually consists of, and where it goes wrong.
 *
 * That is also what keeps the siblings apart. A 1040 is **document-driven** —
 * it is assembled from forms the taxpayer receives, and the hard part is what
 * has not arrived. A 1065 is **ledger-driven** — it starts from a trial balance,
 * and the hard part is the K-1s coming out the other end. Write to that
 * distinction and the pages separate themselves; write generically about "tax
 * preparation" and they collapse into each other, which is how the registration
 * trio first measured 53% against itself.
 *
 * **No rate, threshold, filing deadline, dollar figure or turnaround time
 * appears in this file, and none may be added.** Same constraint as
 * `lib/us-states.ts` and `lib/market-depth.ts`: they change annually, and one
 * that is right today is wrong within a year with nobody watching.
 *
 * **The boundary is per return type and it is not decoration.**
 * `knowledge/company/scope-boundaries.md` §2 is the highest-risk line on this
 * site. On a 1040 the positions are the taxpayer's facts — filing status,
 * residency, dependency. On a 1065 the allocations are a reading of the
 * partnership agreement, which is a professional judgement about a legal
 * document and emphatically not a preparer's to make.
 */

export interface ReturnDepth {
  slug: string;
  /** Used in the ledger-section heading. */
  name: string;
  boundaryHeading: string;
  misconception: { claim: string; reality: string };
  /** What preparing this return actually consists of. */
  ledger: { h: string; p: string }[];
  faqs: { question: string; answer: string }[];
  boundary: string;
}

export const returnDepth: Record<string, ReturnDepth> = {
  '1040': {
    slug: '1040',
    name: 'The 1040 File',
    boundaryHeading: 'What stays with your CPA or EA',
    misconception: {
      claim: '"A 1040 is the simple one, so it should be the quickest to outsource."',
      reality:
        'A 1040 is not difficult, it is incomplete. The return is assembled from documents somebody else has to send — and in February a meaningful share of them have not arrived, arrived twice, or arrived for the wrong year. The preparation time is not in the entry. It is in establishing what is missing, asking for it in a form the client can act on, and keeping the file in a state where the answer can be dropped in when it comes rather than triggering a rebuild.',
    },
    ledger: [
      {
        h: 'The open-items list is the deliverable before the return is',
        p: 'A return that is 90% entered and silent about the other 10% is worse than one that is half entered and explicit. Every absent document goes on a list naming what it is, which line it feeds and who was asked — so your reviewer is deciding whether to wait or to proceed, rather than discovering the gap at signature. That list is what makes a file resumable by somebody who was not there when it was opened.',
      },
      {
        h: 'Brokerage basis is where the quiet reconstruction happens',
        p: 'Covered securities carry their basis onto the 1099-B. Non-covered ones do not, and neither do many transfers between custodians, inherited positions or shares from an employer plan. Somebody has to reconstruct it from statements, and that is preparation work rather than judgement — provided the reconstruction is shown rather than asserted. Where the record genuinely will not support a figure, that goes to you as an open item, not into the return as an estimate.',
      },
      {
        h: 'A Schedule C turns a tax return into a bookkeeping job first',
        p: 'The return cannot be prepared ahead of books that agree, and for a sole proprietor those books are often a spreadsheet and a bank feed. Where the underlying records need work before the schedule can be built, that is a different piece of work on a different timetable, and saying so in November is considerably cheaper than discovering it in March.',
      },
      {
        h: 'Carryforwards are the thing a new preparer loses',
        p: 'Capital loss carryovers, suspended passive losses, prior-year state credits, basis in a pass-through — none of it is on this year’s documents. It comes off last year’s return, and a file prepared without the prior year in front of it will look complete and be wrong. Prior-year returns are part of the handoff, not an optional extra.',
      },
      {
        h: 'K-1s received arrive late and change the return',
        p: 'A 1040 that depends on a K-1 from a partnership on extension is not finishable until that K-1 exists, however complete the rest is. Those returns are better identified at intake and sequenced separately, so they are not sitting in the same queue as returns that could have gone out in February.',
      },
    ],
    faqs: [
      {
        question: 'Who signs the return?',
        answer:
          'The engagement defines the review, filing and authorization workflow for the return. Required consents and professional responsibilities are established before client information is shared or the return moves forward.',
      },
      {
        question: 'Do you decide filing status, residency or who counts as a dependent?',
        answer:
          'No. Those turn on the taxpayer’s facts and they are positions, not data entry. Where the documents point more than one way, it comes to you with what we established and what we could not, and we apply the answer your firm gives.',
      },
      {
        question: 'What do you need from us before the first return?',
        answer:
          'The prior-year return, the source documents as they arrive, and your own checklist and naming conventions. The checklist matters more than people expect — the best workflow is usually the one your reviewers already read without thinking about it.',
      },
      {
        question: 'How do you handle a return where documents are still missing?',
        answer:
          'It stays open with a named list rather than being finished around the gap. Nothing gets a plausible figure to make the file look complete; an estimate that reaches a signature is the failure this process exists to prevent.',
      },
      {
        question: 'Can we start with part of the book rather than all of it?',
        answer:
          'That is what we would suggest — one partner’s client list, one return type, or the returns that ran late last season. Both sides see real output on real returns before the volume arrives, and a workflow that already works is a smaller problem to scale than one being fixed in March.',
      },
    ],
    boundary:
      'Review, filing and authorization requirements. Filing status, residency and dependency determinations. Whether a deduction or credit is supportable on the facts. Any position that requires professional judgement rather than mechanical preparation. We prepare the return and show the working so the applicable review and approval process is clear.',
  },

  '1065': {
    slug: '1065',
    name: 'The 1065 and Its K-1s',
    boundaryHeading: 'What stays with your CPA',
    misconception: {
      claim: '"The return is the deliverable, so the K-1s are just the last step."',
      reality:
        'It is the other way round. The 1065 lands with the IRS; the K-1s land with the partners, who read them, act on them, and notice when they are wrong — often in the middle of their own return. An error in an allocation or a capital account is visible to a third party in a way an error inside the return is not, and it arrives back through the partner rather than quietly. The K-1s are the part of this job with an audience, so they are the part the preparation has to be built around.',
    },
    ledger: [
      {
        h: 'It starts from a trial balance, not from a stack of documents',
        p: 'Where a 1040 waits on what the client receives, a 1065 waits on whether the books close. If the trial balance is still moving, preparation is re-work rather than work. The useful sequence is to agree the balance first and prepare from a fixed set — and where the books are not ours, to say early what state they would need to be in, rather than absorbing it silently and losing the time in March.',
      },
      {
        h: 'Guaranteed payments and distributions get coded as each other',
        p: 'They behave differently on the return and on the partner’s K-1, and in a bookkeeping system they often look like the same outgoing payment to the same person. Separating them afterwards means reading the partnership agreement and the payment history together. Keeping them distinguishable as they post costs nothing and removes that reconciliation permanently.',
      },
      {
        h: 'Tax basis capital accounts have to be maintained, not derived at year end',
        p: 'Reconstructing a partner’s tax basis capital from a book capital account, several years after the fact, is one of the more expensive things this work contains — and it is usually discovered in the year it finally matters. Maintained as contributions, allocations and distributions occur, it is a running record. Rebuilt afterwards, it is a project with its own scoping conversation.',
      },
      {
        h: 'Book-to-tax differences belong in a schedule, not in someone’s head',
        p: 'The M-1 reconciliation is only as reviewable as the detail behind it. Depreciation differences, non-deductible items, accruals that do not follow for tax — each needs to tie to something a reviewer can follow, because the question at review is never whether the total reconciles but why a particular line does.',
      },
      {
        h: 'Partners changing mid-year changes the arithmetic for everyone',
        p: 'An admission, a withdrawal or a transfer means the year is no longer a single allocation period, and the method used to split it is a decision with consequences for every partner’s K-1. We prepare to the method your firm determines and show the periods it produces. We do not select it.',
      },
    ],
    faqs: [
      {
        question: 'Do you decide how income is allocated between partners?',
        answer:
          'No, and this is the clearest boundary on this page. Allocations follow the partnership agreement, and reading that agreement is a professional judgement about a legal document. Your firm determines the allocation, including any special or targeted allocation and the method for a year with partner changes; we prepare to that determination and show the resulting schedules.',
      },
      {
        question: 'Can you prepare the K-1s as well as the return?',
        answer:
          'Yes — the K-1s and the supporting detail behind each one, prepared for your review before anything reaches a partner. They are the output partners actually read, so they get the same review treatment as the return rather than being treated as a print step.',
      },
      {
        question: 'Our books are not closed when the return is due. Is that workable?',
        answer:
          'It is common and it is worth naming rather than absorbing. Preparing against a moving trial balance means preparing twice. Where the close is the constraint, the honest conversation is about the close — which may be a different scope of work — rather than about the return.',
      },
      {
        question: 'What about state filings for non-resident partners?',
        answer:
          'Composite returns and non-resident withholding are preparation work and we do them, from the apportionment data the books support. Where that data does not exist, it comes back to you as an open item rather than as an assumption, because the alternative is a figure nobody can trace.',
      },
      {
        question: 'How would a first engagement usually run?',
        answer:
          'One partnership, ideally one that ran late or reconstructed badly last year. That is the case where the difference shows, and if the output is not what you wanted you have spent one return finding out rather than a season.',
      },
    ],
    boundary:
      'Reading the partnership agreement and determining the allocations, including special and targeted allocations and the method for a year in which partners changed. Review, filing and authorization requirements for the return and K-1s. Any position on a book-to-tax difference that requires professional judgement rather than mechanical preparation. Whether a payment is a guaranteed payment or a distribution where the agreement is not explicit. We prepare and show the working so the applicable review and approval process is clear.',
  },
  '1120': {
    slug: '1120',
    name: 'The 1120 Corporate Return',
    boundaryHeading: 'What stays with your CPA or tax reviewer',
    misconception: {
      claim: '"A corporation return is just the financial statements moved into tax software."',
      reality: 'The financial statements are a starting point, not the return itself. The book result may need to be reconciled to tax reporting, supported by fixed-asset detail, prior-year carryforward schedules and explanations for items that receive different treatment. Preparation is much more reviewable when each book-to-tax adjustment connects to a source schedule and the position behind it is supplied by the responsible professional.',
    },
    ledger: [
      {
        h: 'Start from a settled trial balance and statements',
        p: 'A corporate return prepared against a moving ledger creates duplicated work and obscures which figures are final. The handoff should identify the accounting period, approved trial balance, financial statements and reconciliations that support the numbers. If a balance is unresolved, list the difference and owner rather than quietly replacing it with an assumed figure.',
      },
      {
        h: 'Make book-to-tax differences traceable',
        p: 'The bridge between book income and taxable income needs supporting detail that a reviewer can follow. The preparation package can organize the supplied schedules and prior-year workpapers, map each proposed adjustment to its source and flag missing facts. The preparer should not decide whether a transaction is deductible, whether a reserve is supportable or which tax treatment applies when that determination requires professional judgment.',
      },
      {
        h: 'Fixed assets need a consistent rollforward',
        p: 'The return preparation file should connect the client’s fixed-asset records to the book depreciation schedule and the tax depreciation information supplied or approved by the firm. Additions, disposals, placed-in-service information and prior-year balances should remain traceable. Where a record is missing or an asset’s treatment is unclear, the question should return to the firm rather than becoming an unsupported assumption in the schedule.',
      },
      {
        h: 'Preserve the support behind shareholder and related-party items',
        p: 'Corporate books can include officer compensation, loans, distributions, dividends, related-party balances and payments that need careful classification. The preparation workflow can reconcile the ledger to the supporting records and identify items requiring direction. Decisions about compensation treatment, related-party tax consequences and other legal or tax positions remain with the corporation and its qualified advisers.',
      },
      {
        h: 'Do not let the return hide a bookkeeping backlog',
        p: 'If the trial balance is not reconciled or key accounts are missing support, establish whether cleanup is a separate engagement before the return-preparation clock starts. A return workpaper should distinguish a complete source schedule from a placeholder, identify what remains open and show which questions prevent review from proceeding.',
      },
    ],
    faqs: [
      {
        question: 'Can Accounstone prepare Form 1120 workpapers from our existing trial balance?',
        answer: 'The scope can include agreed Form 1120 preparation tasks and supporting schedules when the trial balance, source records, software and review checklist are confirmed. The firm supplies or approves tax positions and retains the professional review and filing responsibilities assigned to it.',
      },
      {
        question: 'Who determines the corporate tax treatment of an expense or transaction?',
        answer: 'The responsible CPA or tax professional determines tax treatment and any position that requires professional judgment. Accounstone can organize the records, prepare agreed supporting schedules and return unresolved questions with their source documentation.',
      },
      {
        question: 'Can you prepare book-to-tax and depreciation schedules?',
        answer: 'Accounstone can prepare agreed supporting schedules from client records and the firm’s approved treatment. Missing asset details, unclear transactions and proposed adjustments are surfaced for review; the page does not promise independent tax elections or accounting-policy decisions.',
      },
      {
        question: 'What should we provide before a Form 1120 pilot?',
        answer: 'Provide the approved trial balance, financial statements, prior-year return and workpapers, fixed-asset information, the firm’s checklist and the supported software workflow. Agree who handles missing records, proposed adjustments and final review before work begins.',
      },
      {
        question: 'How is Form 1120 different from Form 1120-S preparation?',
        answer: 'Form 1120 is used for a domestic corporation’s income tax return, while Form 1120-S reports income and other items for a corporation with an effective S corporation election. The supporting schedules, shareholder outputs and review questions differ, so the work should be scoped to the form and entity facts.',
      },
    ],
    boundary: 'The firm or qualified tax professional determines tax treatment, elections, deductibility, compensation positions and other issues that require professional judgment. Accounstone prepares agreed records and schedules from the source information and treatment supplied, flags unresolved questions, and returns the work for review. Signing, filing and client advice remain with the responsible professionals.',
  },
  '1120S': {
    slug: '1120s',
    name: 'The 1120-S and Its Shareholder Schedules',
    boundaryHeading: 'What stays with your CPA or tax reviewer',
    misconception: {
      claim: '"Once the S corporation books are closed, the K-1s are just a printout."',
      reality: 'The shareholder schedules are tied to the facts and approved tax treatment for each owner. The return preparation package needs a reconciled trial balance, traceable book-to-tax adjustments, relevant shareholder and loan records, prior-year schedules and a clear list of missing inputs. A preparer can organize and prepare the agreed schedules, but must not guess at basis, compensation treatment or other positions that belong with the responsible professional.',
    },
    ledger: [
      {
        h: 'Keep the corporation-level close stable before preparation',
        p: 'An S corporation return should start from an agreed trial balance and supporting financial records. Bank, credit-card, payroll, loan and balance-sheet accounts should be reconciled or explicitly listed as open items. Preparing the return while the books continue to change leads to rework and makes it harder for a reviewer to tell whether the shareholder schedules reflect the final ledger.',
      },
      {
        h: 'Treat each shareholder schedule as a supported output',
        p: 'The shareholder information and allocation details reported from the return need to tie back to the corporation’s records and the tax treatment the firm has determined. The preparation package should show how the source amounts were mapped, preserve the supporting schedules and identify missing shareholder or transaction information before a reviewer has to chase it.',
      },
      {
        h: 'Separate loan records from equity and distributions',
        p: 'Shareholder loans, contributions, distributions and other balance-sheet activity may look similar in a ledger but do not necessarily have the same tax consequences. The preparer can reconcile the records, organize loan activity and list transactions that need clarification. The firm determines the treatment and any basis conclusions after assessing the relevant records and applicable rules.',
      },
      {
        h: 'Do not make the compensation determination inside the workpaper',
        p: 'Officer or shareholder-employee compensation can affect both the return and the records supporting payroll and distributions. Preparation support should reconcile the payroll information and document the recorded transactions, while leaving the appropriate compensation analysis and tax position with the CPA or qualified adviser. A coding choice is not a substitute for that decision.',
      },
      {
        h: 'Keep book-to-tax items attached to their source',
        p: 'Depreciation, nondeductible expenses, credits, shareholder-related items and other differences need schedules that reconcile to the return. When supporting records are missing, the package should identify the problem and who needs to resolve it. The goal is a reviewable file, not a complete-looking return built around guesses.',
      },
    ],
    faqs: [
      {
        question: 'Can Accounstone prepare Form 1120-S and shareholder K-1 workpapers?',
        answer: 'The engagement can include agreed Form 1120-S preparation tasks and supporting shareholder schedules where the software, source records and review workflow are confirmed. The CPA or responsible tax professional retains decisions on tax treatment and shareholder-specific issues, along with final review and filing responsibilities.',
      },
      {
        question: 'Will you determine shareholder stock basis or debt basis?',
        answer: 'Accounstone can organize the records and prepare agreed supporting schedules using the facts and treatment supplied or approved by the responsible professional. Basis determinations and positions requiring professional judgment remain with the CPA or qualified tax adviser.',
      },
      {
        question: 'Can you decide reasonable compensation for a shareholder-employee?',
        answer: 'No. The responsible professional and corporation must resolve the compensation treatment based on the facts. Preparation support can reconcile payroll records, organize supporting information and flag discrepancies for review without independently selecting a tax position.',
      },
      {
        question: 'What records help a Form 1120-S preparation workflow?',
        answer: 'The initial file should include the agreed trial balance, financial statements, prior-year return and workpapers, shareholder and loan information, payroll records, fixed-asset schedules and the firm’s checklist. The exact file list depends on the entity and scope.',
      },
      {
        question: 'When should Form 1120-S work be separated from bookkeeping cleanup?',
        answer: 'If the books contain unreconciled periods, unexplained shareholder transactions or missing source records, scope that cleanup and the outstanding decisions before treating the return as ready for routine preparation. The firm should approve the baseline and decide how exceptions are resolved.',
      },
    ],
    boundary: 'The CPA or qualified tax professional determines shareholder basis, compensation treatment, tax elections and other issues requiring professional judgment. Accounstone can reconcile records and prepare agreed workpapers using supplied or approved treatment, while flagging incomplete facts and unresolved items. Client advice, final review, signing and filing stay with the responsible professionals.',
  },
};
