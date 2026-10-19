export type CpaStateSupportKey =
  | 'california-tax-workpapers'
  | 'texas-bookkeeping-cleanup'
  | 'florida-property-entities'
  | 'new-york-multi-entity'
  | 'illinois-inventory-close';

export interface CpaStateSupportContent {
  state: string;
  slug: string;
  title: string;
  description: string;
  queryIntent: string;
  illustrationService: 'accounting' | 'bookkeeping' | 'tax-preparation';
  heroDescription: string;
  introHeading: string;
  intro: string[];
  sections: { heading: string; paragraphs: string[]; examples: { title: string; description: string }[] }[];
  pilotChecklist: string[];
  responsibility: string;
  reference: { title: string; url: string; note: string };
  faqs: { question: string; answer: string }[];
}

export const cpaStateSupportContent: Record<CpaStateSupportKey, CpaStateSupportContent> = {
  'california-tax-workpapers': {
    state: 'California',
    slug: 'california-tax-workpaper-support',
    title: 'Tax Workpaper Support for California CPA Firms',
    description: 'Tax workpaper preparation support for California CPA firms, with organized source records, reconciliations, exception lists and reviewer handoff.',
    queryIntent: 'California CPA firm tax workpaper preparation support',
    illustrationService: 'tax-preparation',
    heroDescription: 'Defined tax-workpaper preparation support for California CPA firms. Organize client records, reconciliations and supporting schedules around the firm’s own tax software, checklists and reviewer process.',
    introHeading: 'Make tax workpapers easier to review',
    intro: [
      'Tax preparation often slows down before a return is ready to be prepared: source records arrive in different formats, the books do not agree to statements, fixed-asset information is incomplete, or a reviewer has to reconstruct the reasoning behind a balance. A defined workpaper handoff can separate repeatable preparation from the tax judgments that must remain with the responsible CPA or tax professional.',
      'California practices may have clients with activity in more than one state, pass-through entities, subscription businesses, property-owning entities or professional-service operations. The workflow should preserve the facts and source evidence the firm needs, rather than assume that one checklist fits every engagement. Accounstone prepares agreed records and schedules using instructions supplied by the firm; it does not determine California tax positions, make elections or replace the firm’s review.'
    ],
    sections: [
      {
        heading: 'Organize the source records before return preparation',
        paragraphs: [
          'Start by agreeing which documents are required for the engagement: trial balance, general ledger, bank and credit-card reconciliations, fixed-asset detail, loan statements, prior-year workpapers and client-provided tax documents. The firm should identify its approved naming convention, file structure, tax software export requirements and the reviewer who will resolve questions. That turns a broad request to “get the return ready” into a task list that can be checked.',
          'When source records disagree, the preparation workflow should show the difference and attach the supporting report. It should not plug a balance, infer a tax treatment or post an adjustment without approval. This matters when a book balance needs cleanup, when a client’s records contain multi-state activity, or when the current-year schedule must tie back to a prior-year workpaper.'
        ],
        examples: [
          { title: 'Book-to-tax handoff', description: 'Prepare the agreed trial-balance mapping and supporting schedules, then flag differences that need the CPA’s decision.' },
          { title: 'Fixed-asset support', description: 'Organize client-supplied additions, disposals and prior schedules for review; the firm determines tax classification and treatment.' }
        ]
      },
      {
        heading: 'Keep California-specific questions visible',
        paragraphs: [
          'For some pass-through entities, California’s Franchise Tax Board describes an elective pass-through entity tax and related credit. Eligibility, election timing, payment status and the effect on an individual owner’s return are professional tax questions, not bookkeeping assumptions. The support file can preserve entity details, payment evidence and prior-year references so the responsible professional can assess whether the topic applies.',
          'The same principle applies to apportionment, residency, nexus, credits and other state questions: retain available source data and make missing facts explicit. A workpaper should help the reviewer see what is known, what is missing and which decision remains open. It should not present a prepared schedule as confirmation that a particular election or tax treatment is appropriate.'
        ],
        examples: [
          { title: 'PTE-related source pack', description: 'Organize entity-level information and payment records the firm requests; the authorized professional evaluates eligibility and election requirements.' },
          { title: 'Multi-state detail', description: 'Preserve location, revenue or payroll reports when provided and relevant to the firm’s review, with missing data listed as an exception.' }
        ]
      },
      {
        heading: 'Design the handoff around reviewer time',
        paragraphs: [
          'A usable workpaper package includes the completed schedule, a traceable source reference, the reconciliation to the ledger where relevant, and a short exception list. The reviewer should not need to search across email threads to discover why a number differs or whether a document is still missing. Agree the expected output before the first file is assigned.',
          'Keep cleanup work separate from recurring tax preparation support. Historical errors, missing bank statements and unexplained balance-sheet accounts need their own scope and acceptance criteria. Once the first cycle has been reviewed, the firm can decide whether to repeat the workflow, change the instructions or add another task.'
        ],
        examples: [
          { title: 'Reviewer-ready file', description: 'Schedules tie to the agreed source records, open items are visible and no unsupported tax conclusion is inserted.' },
          { title: 'Contained pilot', description: 'Test one client or one return type with a named reviewer and a checklist before expanding the workload.' }
        ]
      }
    ],
    pilotChecklist: ['Name the return types, client files and period in scope.', 'Provide the firm’s checklist, software requirements and a sample of an accepted workpaper.', 'Agree how missing records, potential adjustments and tax questions are escalated.', 'Review traceability, completeness and rework before extending the arrangement.'],
    responsibility: 'The CPA firm retains tax positions, election decisions, client advice, review and sign-off, and any filing responsibilities assigned to it. Before sharing taxpayer information, confirm applicable federal requirements, client permissions and engagement terms with qualified advisers.',
    reference: { title: 'California FTB: Pass-through entity elective tax', url: 'https://www.ftb.ca.gov/file/business/credits/pass-through-entity-elective-tax/', note: 'Official state reference for context only. It does not mean the service includes eligibility analysis, election advice or filing.' },
    faqs: [
      { question: 'What tax preparation work can be delegated?', answer: 'A firm can define repeatable record organization, reconciliation and supporting-schedule preparation for review. Tax treatment, elections, client advice and sign-off remain with the responsible professional.' },
      { question: 'Does Accounstone decide California PTE eligibility?', answer: 'No. The service can organize the source records and payment evidence requested by the firm. The firm and its qualified advisers determine eligibility, election timing and tax treatment.' },
      { question: 'How should we start?', answer: 'Choose a contained client file or return workflow, provide the checklist and an accepted example, name the reviewer, and evaluate the first package before adding scope.' }
    ]
  },
  'texas-bookkeeping-cleanup': {
    state: 'Texas',
    slug: 'texas-bookkeeping-cleanup-support',
    title: 'Bookkeeping Cleanup Support for Texas CPA Firms',
    description: 'Bookkeeping cleanup support for Texas CPA firms before tax preparation, with account reconciliations, open-item schedules and documented review handoffs.',
    queryIntent: 'Texas CPA firm bookkeeping cleanup before tax preparation',
    illustrationService: 'bookkeeping',
    heroDescription: 'Bookkeeping cleanup support for Texas CPA firms preparing client books for year-end and tax work. Scope reconciliations, ledger review and open-item tracking around your approved process.',
    introHeading: 'Separate cleanup from the tax return workflow',
    intro: [
      'A tax engagement can turn into a bookkeeping project when bank accounts do not reconcile, clearing accounts carry unexplained balances, transactions are uncategorized or prior-period entries cannot be traced. If cleanup is not scoped separately, the firm may not know what records will be ready for tax preparation or which questions still require client input.',
      'For Texas practices serving contractors, distributors, service businesses and multi-location clients, the cleanup checklist should follow the actual source records and chart-of-accounts conventions. Accounstone can prepare agreed reconciliations and supporting schedules, record exceptions and return questions to the reviewer. The firm decides accounting treatment, tax classification, adjustments and filing obligations.'
    ],
    sections: [
      {
        heading: 'Establish the starting balance before changing the books',
        paragraphs: [
          'Begin with the period, entities and accounts in scope. Collect the general ledger, trial balance, bank and card statements, loan statements, accounts payable and receivable detail, prior reconciliations and the firm’s approved chart of accounts. Agree whether the task is to investigate differences, post approved corrections or simply prepare a list of proposed adjustments for the CPA.',
          'Do not silently write off an old balance or move transactions to make a reconciliation appear complete. Each unexplained difference should have an amount, account, period, source reference and next action. If the client has not provided a document or the accounting treatment is unclear, list the exception rather than guessing.'
        ],
        examples: [
          { title: 'Bank and card accounts', description: 'Match statement activity to the ledger, document timing items and identify transactions without support.' },
          { title: 'Balance-sheet review', description: 'Prepare account schedules and open questions for clearing, loan, deposit and suspense balances.' }
        ]
      },
      {
        heading: 'Keep project and location detail intact',
        paragraphs: [
          'Contractor and multi-location books can contain supplier bills, subcontractor costs, equipment purchases, customer deposits and expenses assigned to jobs or branches. The cleanup instructions should say which project or location fields are required, which source report controls, and who decides how an item is classified when the records conflict.',
          'For tax-related records, preserve the information the client’s systems provide and the firm asks for. The Texas Comptroller publishes franchise-tax reporting instructions and information-report requirements for applicable entities. Those requirements can make complete entity and period records important, but Accounstone does not determine whether a client is taxable, choose a reporting method or calculate the client’s liability.'
        ],
        examples: [
          { title: 'Project-coded expenses', description: 'Identify bills missing project references and prepare them for review under the firm’s approved coding rules.' },
          { title: 'Entity and period details', description: 'Keep the legal entity, accounting period and supporting reports clear for the CPA’s later tax review.' }
        ]
      },
      {
        heading: 'Turn the cleanup into a repeatable monthly close',
        paragraphs: [
          'Once historical differences have been resolved or assigned, document the recurring tasks that will prevent the same backlog from returning. That may include monthly bank reconciliations, accounts payable and receivable tie-outs, review of uncategorized transactions and a consistent close checklist. Keep one-time cleanup work separate from ongoing monthly fees and responsibilities.',
          'A good pilot uses a contained period and a reviewer-approved output. Measure whether balances tie, source documents are easy to find, exceptions are complete and the reviewer can tell which decisions remain open. Use those findings to refine the instructions before adding more entities or clients.'
        ],
        examples: [
          { title: 'Cleanup register', description: 'Track each exception by account, period, supporting document, owner and next action.' },
          { title: 'Monthly handoff', description: 'Return reconciliations, key schedules and unresolved questions in the format the firm has agreed to review.' }
        ]
      }
    ],
    pilotChecklist: ['Choose one entity and a defined period; avoid an unlimited “fix the books” scope.', 'Provide the chart of accounts, statements, prior reconciliations and approved examples.', 'Agree whether corrections may be posted or must be proposed for approval.', 'Set acceptance criteria and a separate process for missing records and tax questions.'],
    responsibility: 'The firm retains accounting judgments, approval of adjusting entries, tax determinations, client advice and final review. Texas franchise-tax requirements vary by entity and facts; the page is not a tax determination or filing offer.',
    reference: { title: 'Texas Comptroller: Franchise tax annual report instructions', url: 'https://comptroller.texas.gov/help/franchise/information-report.php', note: 'Official reference showing why entity and period records matter; consult current instructions for the specific client.' },
    faqs: [
      { question: 'Can cleanup be done before a tax return is prepared?', answer: 'Yes, a firm can scope reconciliations, ledger review and support schedules as a separate preparation workflow. The CPA decides which corrections are appropriate and when the books are ready for tax work.' },
      { question: 'Will Accounstone post adjustments without approval?', answer: 'Posting authority should be explicitly agreed. Where the firm requires approval, proposed adjustments and their supporting evidence are returned for review rather than posted without authorization.' },
      { question: 'Can this become monthly bookkeeping support?', answer: 'After the cleanup is assessed, recurring tasks can be scoped separately with a monthly checklist, reviewer, close timetable and exception process.' }
    ]
  },
  'florida-property-entities': {
    state: 'Florida',
    slug: 'florida-property-entity-accounting-support',
    title: 'Property-Entity Accounting Support for Florida CPA Firms',
    description: 'Property-entity accounting support for Florida CPA firms, including reconciliations, entity-level schedules and organized year-end workpapers for review.',
    queryIntent: 'Florida CPA firm property entity accounting outsourcing',
    illustrationService: 'accounting',
    heroDescription: 'Accounting preparation support for Florida CPA firms with property-owning entities and related business clients. Keep entity books, reconciliations and review schedules organized without moving professional decisions out of the firm.',
    introHeading: 'Keep each property entity’s records distinct',
    intro: [
      'Property-owning clients may have separate legal entities, dedicated bank accounts, intercompany balances, loan activity, insurance and maintenance expenses, tenant or management reports, and year-end schedules. When records are combined or prepared differently from one entity to another, the CPA can spend review time reconstructing balances rather than assessing the client’s position.',
      'Accounstone can prepare defined bookkeeping and accounting workflows within the firm’s existing systems: transaction posting under approved rules, bank and balance-sheet reconciliations, expense schedules, intercompany listings and year-end workpapers. The firm retains decisions about accounting treatment, tax classification, depreciation, allocations and filings. The state context is a reason to preserve the right source records—not a claim that the provider makes Florida tax decisions.'
    ],
    sections: [
      {
        heading: 'Build a separate close file for each entity',
        paragraphs: [
          'Start with the entity list, accounting period, chart of accounts, bank and loan accounts, property or management reports and the firm’s prior-period schedules. Establish how the team names files, records intercompany transactions and reports missing documents. A portfolio-level summary can be useful, but it should not replace entity-level reconciliations or hide differences between properties.',
          'For recurring work, the close package can include bank reconciliations, balance-sheet schedules, expense detail, accounts payable and receivable status where relevant, and a short list of open items. Any allocation, capitalization or unusual transaction should follow the firm’s approved instruction or be escalated for a decision.'
        ],
        examples: [
          { title: 'Property expense support', description: 'Organize source invoices, ledger coding and account schedules so the CPA can trace balances to records.' },
          { title: 'Intercompany balances', description: 'List the due-to and due-from accounts by entity and period, with mismatches visible for review.' }
        ]
      },
      {
        heading: 'Preserve the information needed for Florida tax review',
        paragraphs: [
          'Florida’s Department of Revenue describes a corporate income/franchise tax that applies to corporations meeting the state’s stated criteria, with tax computations and apportionment depending on the taxpayer’s facts. Not every property-owning entity has the same filing profile. The CPA must determine the entity’s status and obligations, while the preparation workflow preserves the financial statements and source detail the firm requests.',
          'Where property, payroll, sales or entity-level reports are relevant to the engagement, maintain the available source reports and document missing data. Do not infer taxability, calculate an apportionment result or make a filing decision from a property ledger alone. A well-organized file lets the reviewer identify the right questions without suggesting the answer has already been determined.'
        ],
        examples: [
          { title: 'Source-data package', description: 'Retain the entity trial balance, ledger detail and reports the firm identifies as relevant to its tax review.' },
          { title: 'Open-item tracking', description: 'Record missing entity documents or location detail and route the question to the responsible reviewer.' }
        ]
      },
      {
        heading: 'Connect monthly accounting with year-end handoff',
        paragraphs: [
          'A recurring close reduces the amount of historical reconstruction required at year-end. Keep reconciliations, loan schedules, fixed-asset information supplied by the client, intercompany balances and reviewer notes together in a consistent folder structure. If a prior-period item remains unresolved, carry it forward visibly instead of allowing it to disappear in the next close.',
          'A first engagement should be small enough to evaluate: one entity, one period or one defined schedule. The firm should assess whether the work ties to source records, whether exceptions are understandable and whether the reviewer had to redo preparation. Add entities only when the first workflow and available capacity have been confirmed.'
        ],
        examples: [
          { title: 'Monthly-to-year-end continuity', description: 'Keep a consistent reconciliation and schedule format so year-end work starts from reviewed monthly records.' },
          { title: 'Measured expansion', description: 'Use the first reviewed file to improve instructions before adding another entity or service.' }
        ]
      }
    ],
    pilotChecklist: ['Identify the entity, property, period and accounting systems in scope.', 'Provide the firm-approved account mapping and examples of prior schedules.', 'Define the treatment of intercompany items, missing invoices and proposed adjustments.', 'Confirm which reports the reviewer expects for month-end and year-end handoff.'],
    responsibility: 'The CPA firm retains tax determinations, apportionment and allocation decisions, accounting judgments, client advice and filing responsibility. Accounstone prepares only the agreed records and schedules.',
    reference: { title: 'Florida Department of Revenue: Corporate income tax', url: 'https://floridarevenue.com/taxes/taxesfees/Pages/corporate.aspx', note: 'Official overview for context. Applicability and tax computations must be assessed by the responsible professional using current guidance.' },
    faqs: [
      { question: 'Can Accounstone support multiple property-owning entities?', answer: 'The scope can include entity-by-entity bookkeeping, reconciliations and agreed schedules, subject to software, source records and available capacity being confirmed before the engagement.' },
      { question: 'Does this include Florida corporate tax advice?', answer: 'No. Accounstone can prepare records and reports the CPA requests. The firm determines filing obligations, apportionment, tax treatment and any related advice.' },
      { question: 'What is a good first engagement?', answer: 'A single entity or one recurring close workflow with a named reviewer, defined output checklist and clear handling for missing records and intercompany differences.' }
    ]
  },
  'new-york-multi-entity': {
    state: 'New York',
    slug: 'new-york-multi-entity-accounting-support',
    title: 'Multi-Entity Accounting Support for New York CPA Firms',
    description: 'Multi-entity accounting support for New York CPA firms, with intercompany schedules, reconciliations and source records prepared for professional review.',
    queryIntent: 'New York CPA firm multi-entity accounting outsourcing',
    illustrationService: 'accounting',
    heroDescription: 'Defined multi-entity accounting production support for New York CPA firms. Prepare reconciliations, intercompany schedules and supporting records within the firm’s existing review process.',
    introHeading: 'Make multi-entity work easier to trace',
    intro: [
      'A client group with several entities can generate duplicate vendors, inconsistent account mappings, intercompany balances that do not agree and schedules stored in different places. Before a reviewer can evaluate the group, the firm may have to establish which entity owns each transaction and which source report supports each balance. A repeatable preparation process can reduce that reconstruction by keeping entity and period details visible.',
      'Accounstone can prepare agreed recurring bookkeeping, account reconciliations, intercompany listings and supporting schedules using the firm’s chart of accounts, naming conventions and review notes. The firm retains consolidation policy, tax positions, allocation decisions, client advice and final sign-off. New York-specific elections and local filing issues must be evaluated by the responsible professional; they should not be inferred from accounting records alone.'
    ],
    sections: [
      {
        heading: 'Establish entity-level records before group reporting',
        paragraphs: [
          'The initial scope should identify every entity and accounting period, the systems used, bank and credit-card accounts, intercompany accounts, approved account mapping and the reports expected at close. Confirm whether the task is entity-level bookkeeping, a supporting schedule or a defined part of the group close. These are related workflows, but they are not interchangeable and should have separate acceptance criteria.',
          'When intercompany balances do not match, document both sides, the period, the source records and the next action. Do not create a balancing entry merely to make the schedule agree. The firm or client must resolve the underlying transaction or approve the adjustment through its normal control process.'
        ],
        examples: [
          { title: 'Intercompany reconciliation', description: 'Compare the agreed entity-level reports and return a list of mismatches with the supporting transaction detail.' },
          { title: 'Consistent close schedules', description: 'Use a shared format while preserving entity-specific account detail and reviewer comments.' }
        ]
      },
      {
        heading: 'Keep New York tax-related records ready for review',
        paragraphs: [
          'New York State provides a pass-through entity tax election process, and New York City has a separate optional PTET for eligible entities. Whether an entity is eligible, whether an election has been authorized and how a payment or credit affects a return are tax decisions. A preparation workflow can retain the entity information, payment records and prior-year schedules the CPA requests, but must not make or attest to an election.',
          'For clients with operations in New York City or more than one jurisdiction, the firm may need source data that is not obvious from a single general ledger. Preserve the reports and location detail supplied by the client, label their period and source, and record missing information. The reviewer should be able to distinguish a complete supporting schedule from a question that still needs professional analysis.'
        ],
        examples: [
          { title: 'Election evidence', description: 'Organize documents and payment confirmations supplied by the firm; only an authorized person makes or attests to an election.' },
          { title: 'Entity and location detail', description: 'Keep source reports linked to the relevant entity and period so the firm can assess what is applicable.' }
        ]
      },
      {
        heading: 'Agree the reviewer handoff before expanding the scope',
        paragraphs: [
          'A useful group close package identifies what is complete, what is unreconciled, what source record is missing and who must resolve each item. Keep the trial balance, reconciliations, intercompany schedules and open-item list together so the reviewer can trace the work without searching email. If the firm has a standard workpaper template, use that rather than introducing a competing format.',
          'Start with one entity pair or one reporting cycle and evaluate the output. Review whether the balances tie, whether supporting documents are accessible, whether exceptions were escalated and how much rework remained. Expand only when the workflow is repeatable and the responsible firm reviewer is satisfied with the handoff.'
        ],
        examples: [
          { title: 'Defined first scope', description: 'One month of intercompany and bank reconciliations for a selected entity group.' },
          { title: 'Review control', description: 'The CPA firm approves proposed adjustments and retains all consolidation, tax and reporting judgments.' }
        ]
      }
    ],
    pilotChecklist: ['List the entities, systems, periods and intercompany accounts in scope.', 'Provide the approved mapping, close checklist and accepted sample schedule.', 'Agree how mismatches, proposed entries and missing reports are escalated.', 'Review traceability and rework before adding more entities or consolidation tasks.'],
    responsibility: 'Accounstone does not make New York State or New York City tax elections, determine tax eligibility, or provide legal or tax advice. The responsible firm and authorized client personnel retain those decisions and filing responsibilities.',
    reference: { title: 'New York State Department of Taxation and Finance: PTET', url: 'https://www.tax.ny.gov/bus/ptet/', note: 'Official overview of the state election process; see the separate NYC PTET guidance where relevant.' },
    faqs: [
      { question: 'Can Accounstone prepare intercompany schedules?', answer: 'Yes, when the entities, systems, account mapping and expected schedule are defined. Differences should be documented and returned for review rather than balanced through unsupported entries.' },
      { question: 'Will Accounstone make a New York PTET election?', answer: 'No. The service can organize records and payment evidence requested by the firm. Election eligibility and authorization remain with the responsible professional and authorized client personnel.' },
      { question: 'How should a firm test multi-entity support?', answer: 'Start with a selected entity group and one reporting cycle, then assess tie-outs, source traceability, exception handling and reviewer rework before expanding.' }
    ]
  },
  'illinois-inventory-close': {
    state: 'Illinois',
    slug: 'illinois-inventory-accounting-support',
    title: 'Inventory Accounting Support for Illinois CPA Firms',
    description: 'Inventory and distribution accounting support for Illinois CPA firms, with reconciliations, movement schedules and documented exceptions for review.',
    queryIntent: 'Illinois CPA firm inventory and distribution accounting support',
    illustrationService: 'bookkeeping',
    heroDescription: 'Accounting production support for Illinois CPA firms serving inventory-based, manufacturing and distribution clients. Prepare agreed close schedules and reconciliations while valuation and tax decisions stay with the firm.',
    introHeading: 'Make inventory-related books easier to review',
    intro: [
      'Inventory and distribution clients can create a difficult close when purchases, freight, supplier credits, inventory movements, cost-of-goods-sold accounts and general-ledger balances are maintained in different systems. The first task is to identify which reports are authoritative, how the client’s system maps to the chart of accounts, and which differences must be investigated before the CPA reviews the result.',
      'Accounstone can prepare agreed transaction records, reconciliations, movement schedules and supporting files from client-provided systems and firm-approved instructions. It does not determine inventory valuation, recognize complex accounting adjustments, decide tax treatment or provide assurance. Those decisions remain with the CPA and client personnel responsible for the accounting policy.'
    ],
    sections: [
      {
        heading: 'Connect inventory reports to the general ledger',
        paragraphs: [
          'Agree the reporting period, inventory locations, source system exports, general-ledger accounts and the reports the firm expects. Depending on the client’s process, the handoff may include inventory movement reports, purchase and receiving records, supplier credits, freight detail and the trial balance. The exact scope must follow the system and procedures the client actually uses.',
          'Where inventory subledger totals do not match the general ledger, return the variance with the period, source report and account detail. Do not invent a shrinkage entry, adjust valuation or treat an unexplained difference as immaterial. The firm decides which accounting analysis is needed and who can approve any correction.'
        ],
        examples: [
          { title: 'Subledger tie-out', description: 'Compare the client-provided inventory report with the mapped ledger balance and document differences for review.' },
          { title: 'Purchase and freight support', description: 'Organize supporting transactions and flag missing references or inconsistent coding under the firm’s rules.' }
        ]
      },
      {
        heading: 'Prepare records that support Illinois business-tax review',
        paragraphs: [
          'Illinois publishes separate business income and replacement-tax information for corporations, partnerships and S corporations, including entity-specific return types. The entity’s classification, taxable income, elections and filing requirements are not determined from inventory records alone. The CPA needs complete, period-matched books and supporting schedules to perform that review.',
          'For inventory-based and distribution clients, keep the supporting reports connected to the trial balance and maintain a visible list of unresolved inventory, purchasing or cut-off questions. Where the firm requests entity-level or pass-through records, preserve those details in the agreed format. Do not calculate replacement tax or make a pass-through election unless the engagement is explicitly authorized and the responsible professional retains the required decision and review.'
        ],
        examples: [
          { title: 'Year-end support', description: 'Provide the agreed inventory, purchase and ledger schedules with source references and open items.' },
          { title: 'Entity-specific records', description: 'Keep the legal entity and accounting period visible so the CPA can match records to the relevant return workflow.' }
        ]
      },
      {
        heading: 'Make the close repeatable rather than a year-end rescue',
        paragraphs: [
          'A monthly checklist can identify the reports needed, the accounts to reconcile, the expected cutoff information and the person who resolves each exception. Keep one-time cleanup distinct from ongoing close support. If the client changes its inventory system, account mapping or report format, update the agreed instructions rather than assuming that the old process still applies.',
          'For a first pilot, choose one reporting period or one defined set of accounts. Assess whether the reports tie, whether the source trail is clear and whether the reviewer had to redo preparation. The results should determine whether the scope is ready to expand—not an arbitrary promise about speed or savings.'
        ],
        examples: [
          { title: 'Monthly close checklist', description: 'Track the inventory report, relevant ledger accounts, reconciliations, cutoff questions and reviewer sign-off.' },
          { title: 'Exception log', description: 'Assign each discrepancy a source, amount, owner and next action so it is not hidden by a plug entry.' }
        ]
      }
    ],
    pilotChecklist: ['Identify the inventory system, locations, ledger accounts and reporting period.', 'Provide the approved account mapping and accepted prior-period reports.', 'Agree which differences must be escalated and who can approve adjustments.', 'Evaluate tie-outs, evidence quality and reviewer rework before expanding the scope.'],
    responsibility: 'The CPA firm and client retain inventory valuation policy, accounting judgments, tax positions, elections, client advice and final sign-off. Accounstone prepares only the records and schedules included in the agreed scope.',
    reference: { title: 'Illinois Department of Revenue: Business income tax forms', url: 'https://tax.illinois.gov/forms/incometax/businesses.html', note: 'Official directory of entity-specific Illinois business income and replacement-tax forms; consult current instructions for the client.' },
    faqs: [
      { question: 'Can Accounstone reconcile inventory reports to the ledger?', answer: 'Accounstone can prepare the agreed comparison and document differences using client-provided reports. Valuation, cutoff and adjustment decisions remain with the firm and client personnel responsible for the accounting policy.' },
      { question: 'Does the service calculate Illinois replacement tax?', answer: 'No. The service is accounting preparation support. The responsible CPA determines the applicable entity return, tax treatment and filing obligations.' },
      { question: 'What should be included in the first pilot?', answer: 'Define the reporting period, inventory system, accounts, source reports, reviewer and acceptance checklist. Evaluate tie-outs and exceptions before adding more locations or accounts.' }
    ]
  }
};
