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
          'Your CPA or Enrolled Agent. We prepare the return and the workpapers behind it; final review, signature and e-filing stay with the licensed professional, and nobody on our side contacts the IRS on a client’s behalf or holds a Form 2848. That boundary is not negotiable at any volume or price.',
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
      'Final review, signature and e-filing. Any contact with the IRS, and Form 2848 in any circumstance. Filing status, residency and dependency determinations. Whether a deduction or credit is supportable on the facts. Any position that is arguable rather than evident from the documents. We prepare the return and show the working; the professional judgement and the signature are your firm’s.',
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
      'Reading the partnership agreement and determining the allocations, including special and targeted allocations and the method for a year in which partners changed. Final review, signature and e-filing of the return and the K-1s. Any position on a book-to-tax difference that is arguable rather than mechanical. Whether a payment is a guaranteed payment or a distribution, where the agreement is not explicit. Any contact with the IRS, and Form 2848 in any circumstance. We prepare and we show the working; the reading of the agreement and the signature are your firm’s.',
  },
};
