/**
 * Depth content for the three US state pages.
 *
 * Everything here is about **what the books have to support**, not about tax
 * figures. That is deliberate and it is the only safe way to write these:
 * `knowledge/markets/us.md` records exactly one regulatory fact per state
 * (Texas — franchise tax and no state personal income tax; California — CDTFA
 * sales tax and FTB coordination; Florida — no personal income tax), and rates,
 * thresholds and deadlines change every year. Inventing any of them would
 * breach the never-invent-statistics rule, and quoting one correctly today
 * would be wrong within a year with nobody watching.
 *
 * So each state answers the question a business actually arrives with — "what
 * is different about my accounting here?" — in terms of the ledger, and routes
 * every calculation, election and filing decision to the client's own CPA.
 * `knowledge/company/scope-boundaries.md` §2 forbids tax planning and entity
 * selection advice, and a state page is where that line is easiest to cross.
 *
 * The three are written to be genuinely different, not templated. The
 * registration cluster measured 53-55% against itself on the first attempt for
 * exactly that reason — re-measure if you add a fourth state.
 */

export interface StateDepth {
  slug: string;
  name: string;
  /** The one thing a business here gets wrong about its own accounting. */
  misconception: { claim: string; reality: string };
  /** What the state's specifics change about the ledger itself. */
  ledger: { h: string; p: string }[];
  /** Questions this state's businesses actually ask. */
  faqs: { question: string; answer: string }[];
  /** The boundary line, in this state's own terms. */
  boundary: string;
}

export const stateDepth: Record<string, StateDepth> = {
  texas: {
    slug: 'texas',
    name: 'Texas',
    misconception: {
      claim: '"Texas has no income tax, so there is nothing to file."',
      reality:
        'No state personal income tax is not the same as no state filing. Texas levies a franchise tax on most business entities, and it is computed on margin rather than on income — a different calculation, drawing on different lines of your ledger, on its own calendar. A set of books kept only to support a federal return will usually support the franchise computation badly.',
    },
    ledger: [
      {
        h: 'Revenue has to be separable, not just totalled',
        p: 'The margin computation starts from total revenue and works down, and which deduction path produces the better answer depends on the shape of that revenue. If sales, service income and other income all land in one account, the person doing the computation has to unpick it after the fact — every year. Splitting it at the point of posting costs nothing and removes that work permanently.',
      },
      {
        h: 'Cost of goods sold and compensation have to be clean',
        p: 'Those two lines are what the alternative deduction paths draw on, so they cannot be a catch-all. Payroll needs to be distinguishable from contractor spend, and direct costs from overhead, in the ledger rather than in a spreadsheet someone rebuilds each spring. We keep that structure as transactions post.',
      },
      {
        h: 'Sales tax still accrues while you are not watching',
        p: 'Texas businesses selling into other states pick up registration obligations the same way anyone else does — per state, on transaction and revenue triggers rather than one national threshold. We track what is accumulating where and surface it; whether and when to register is your CPA’s call, not ours.',
      },
      {
        h: 'Multi-location does not have to mean multi-ledger',
        p: 'Businesses operating across Houston, Dallas-Fort Worth, Austin and San Antonio usually want a consolidated position and location-level detail underneath it. That is a chart-of-accounts and class or location-tracking decision made once at setup, not a monthly reconciliation exercise.',
      },
    ],
    faqs: [
      {
        question: 'Does Texas really have no business taxes at all?',
        answer:
          'Texas has no state personal income tax, but most business entities are within scope of the Texas franchise tax, which is computed on margin rather than income. We keep the books in a state that supports that computation; your CPA performs it and files.',
      },
      {
        question: 'What does the franchise tax actually need from my bookkeeping?',
        answer:
          'Revenue separated by type rather than pooled, cost of goods sold kept distinct from operating overhead, and compensation identifiable and separated from contractor spend. Those are the lines the computation draws on. If they are clean in the ledger, the calculation is a reading exercise rather than a reconstruction.',
      },
      {
        question: 'Do you calculate or file our Texas franchise tax report?',
        answer:
          'No. We prepare and maintain the underlying records and the supporting schedules a preparer asks for. The computation, any elections within it, and the filing itself stay with your CPA — that is a licensed responsibility and we do not hold it.',
      },
      {
        question: 'We sell online from Texas into other states. Can you track that?',
        answer:
          'Yes, as a bookkeeping matter. We keep sales recorded by destination state so the picture is visible rather than reconstructed at year end, and we flag when a state is accumulating. The registration decision itself is your CPA’s to make.',
      },
      {
        question: 'Do you work with businesses across different Texas cities?',
        answer:
          'Yes. Support is delivered remotely and structured around your entity and your close calendar rather than your address, so Houston, Dallas-Fort Worth, Austin, San Antonio and elsewhere are the same engagement.',
      },
      {
        question: 'Can you handle a Texas business with several locations?',
        answer:
          'Yes. Consolidated books with location-level detail underneath are a setup decision — chart of accounts plus location or class tracking — and we configure that inside your existing file at onboarding rather than reconciling locations by hand every month.',
      },
    ],
    boundary:
      'We do not compute the franchise tax, choose between its deduction paths, decide whether you have triggered registration in another state, or file anything with the Comptroller. Those are your CPA’s calls. What we do is make sure the records they are working from do not need rebuilding first.',
  },

  california: {
    slug: 'california',
    name: 'California',
    misconception: {
      claim: '"State tax is one thing we deal with once a year."',
      reality:
        'In California it is at least two things, run by two different agencies on two different rhythms. Sales and use tax is administered by the CDTFA and reports on its own recurring cycle; the income side sits with the Franchise Tax Board and lands at year end. A ledger organised only around the annual return leaves the recurring one to be assembled under time pressure.',
    },
    ledger: [
      {
        h: 'Sales tax is a recurring cycle, not a year-end task',
        p: 'CDTFA reporting arrives on its own schedule regardless of where your close is. That means taxable and non-taxable sales have to be distinguishable in the ledger as they post, and exemption documentation has to be attached to the transaction rather than sitting in an inbox. We maintain that as part of the routine, so the reporting period is a read rather than a reconstruction.',
      },
      {
        h: 'Rates vary below the state level',
        p: 'California layers district rates on top of the statewide rate, so where a sale is delivered changes what was collected. Books that record only a single blended figure cannot be reconciled back to what was actually charged. Recording sales with their destination detail keeps the reconciliation possible.',
      },
      {
        h: 'Two agencies, one set of books',
        p: 'The FTB position and the CDTFA position draw on the same ledger and have to agree with it and with each other. Keeping one set of records that supports both — rather than a working file per agency — is most of what stops the year-end reconciliation from becoming an investigation.',
      },
      {
        h: 'Entity-level obligations do not follow revenue',
        p: 'California entities carry obligations that exist whether or not the business made money in the period. The practical consequence for bookkeeping is that dormant or loss-making periods still need a maintained ledger and a filed position; letting the books lapse because there was no profit creates work later. Your CPA determines what is owed and when.',
      },
    ],
    faqs: [
      {
        question: 'What is different about bookkeeping for a California business?',
        answer:
          'Mostly that the state side is recurring rather than annual. Sales and use tax reporting through the CDTFA arrives on its own cycle, and it needs taxable versus non-taxable sales, destination detail and exemption documentation to be maintained as transactions post rather than assembled afterwards.',
      },
      {
        question: 'Do you file our California sales tax returns?',
        answer:
          'No. We prepare and maintain the records that support them — sales recorded with the detail the return needs, exemption documentation attached, the position reconciled to the ledger. Filing and the positions taken in it stay with your CPA or your tax preparer.',
      },
      {
        question: 'Why do sales need destination detail if there is one state rate?',
        answer:
          'Because there is not only one. California adds district rates on top of the statewide rate, so what was collected depends on where the sale was delivered. If the ledger records only a blended total, there is nothing to reconcile the collected amount back to.',
      },
      {
        question: 'What about coordination with the Franchise Tax Board side?',
        answer:
          'The FTB position and the sales tax position draw on the same ledger, so our job is to keep one set of records that supports both and agrees with itself. What is owed, and any position taken, is determined by your CPA.',
      },
      {
        question: 'Our business had no revenue last year. Do the books still matter?',
        answer:
          'Yes. California entity-level obligations do not simply switch off in a loss-making or dormant period, and a lapsed ledger is more expensive to restart than to maintain. We keep the records current at a scope matched to the activity level. Your CPA determines what is actually owed.',
      },
      {
        question: 'Can you take over books that are already behind?',
        answer:
          'Yes — cleanup is scoped separately from the recurring work, because they are different jobs. We establish what can be corrected from records that exist, and name what needs a decision from you before it can be. Nothing is guessed at to make a period close.',
      },
    ],
    boundary:
      'We do not file with the CDTFA or the FTB, decide the position taken in any return, hold your state portal credentials, or advise on how the business should be structured for state tax purposes. We keep the records that the filings are read from.',
  },

  florida: {
    slug: 'florida',
    name: 'Florida',
    misconception: {
      claim: '"No state income tax means the accounting is simpler here."',
      reality:
        'It is genuinely simpler in one respect: there is no state personal income tax to reconcile against. What that removes is a filing, not a standard. Federal obligations are unchanged, sales tax is a recurring cycle of its own, and if anything the absence of a state income tax return means the books get one fewer annual review by someone external — which is exactly when drift goes unnoticed.',
    },
    ledger: [
      {
        h: 'One fewer annual check on the books',
        p: 'A state income tax return is, incidentally, an annual occasion where someone outside the business looks hard at the numbers. Without it, categorisation drift, unreconciled balances and stale receivables can run for longer before anything surfaces them. That is an argument for a monthly reconciliation discipline rather than an annual scramble, not for a lighter touch.',
      },
      {
        h: 'Sales tax runs on its own clock',
        p: 'Florida sales and use tax reporting recurs independently of your close, and it needs taxable versus exempt sales distinguishable at the point of posting, with exemption documentation attached to the transaction. Assembling that after a period has closed is the expensive version of the same task.',
      },
      {
        h: 'Owner and entity have to stay properly separated',
        p: 'Where there is no state personal return pulling the two apart, the discipline has to come from the bookkeeping. Personal spend running through business accounts is the single most common thing we clean up, and it is the thing that makes a federal return, a lender review or a sale of the business harder than it needed to be.',
      },
      {
        h: 'Seasonal revenue needs a ledger that shows the shape',
        p: 'Many Florida businesses run on a pronounced season. Books that only produce an annual total hide the working-capital picture that actually matters — when receivables peak, when payables cluster, what a slow quarter does to cash. Recording in a way that keeps that visible is a setup decision, not a reporting one.',
      },
    ],
    faqs: [
      {
        question: 'If Florida has no state income tax, what accounting do we still need?',
        answer:
          'All of it, minus one filing. Federal obligations are unchanged, sales and use tax recurs on its own cycle, payroll still has to be processed and recorded, and the books still have to stand up to a lender, a buyer or an auditor. The absence of a state personal income tax removes a return, not a standard.',
      },
      {
        question: 'Does no state income tax mean fewer bookkeeping requirements?',
        answer:
          'No — and in one respect it argues for more discipline. A state return is an annual occasion where someone external examines the numbers. Without it, drift in categorisation or unreconciled balances can persist longer before anyone notices, which is why we work to a monthly reconciliation rhythm rather than an annual one.',
      },
      {
        question: 'Do you handle Florida sales tax?',
        answer:
          'We handle the bookkeeping behind it: taxable and exempt sales distinguished as they post, exemption documentation attached to the transaction, and the position reconciled to the ledger. The return itself, and the positions taken in it, stay with your CPA or tax preparer.',
      },
      {
        question: 'Our business is highly seasonal. Does that change how you work?',
        answer:
          'It changes what the reporting has to show rather than the process. We keep the ledger structured so the working-capital shape is visible through the year — when receivables peak, when payables cluster — instead of only producing an annual total that hides it.',
      },
      {
        question: 'We have been running personal expenses through the business. Can that be fixed?',
        answer:
          'Usually, and it is the most common cleanup we do. We identify what can be reclassified from the records that exist, and list what needs a decision from you or your CPA before it can be. We do not guess at a categorisation to make a period close.',
      },
      {
        question: 'Do you work with Florida businesses outside the main metros?',
        answer:
          'Yes. The engagement is built around your entity, your platform and your close calendar rather than your location, so Miami, Tampa, Orlando, Jacksonville and everywhere between are the same arrangement.',
      },
    ],
    boundary:
      'We do not file Florida sales and use tax returns, hold your Department of Revenue credentials, prepare federal returns for signature, or advise on how the business should be structured. We keep the records those things are read from, and we say plainly when something needs your CPA.',
  },
};
