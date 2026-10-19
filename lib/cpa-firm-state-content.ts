export type CpaFirmStateKey = 'california' | 'texas' | 'florida' | 'new-york' | 'illinois';

export interface CpaFirmStateContent {
  name: string;
  slug: string;
  illustrationService: 'accounting' | 'bookkeeping' | 'tax-preparation';
  heroDescription: string;
  opening: string;
  sections: { heading: string; paragraphs: string[]; examples: { title: string; description: string }[] }[];
  pilotChecklist: string[];
  responsibility: string;
  researchNote: string;
  faqs: { question: string; answer: string }[];
}

export const cpaFirmStateContent: Record<CpaFirmStateKey, CpaFirmStateContent> = {
  california: {
    name: 'California',
    slug: 'california',
    illustrationService: 'accounting',
    heroDescription: 'Preparation support for California CPA practices whose client files span recurring bookkeeping, reconciliations, month-end reporting and agreed tax workpapers. Scope the workflow to your systems and review standards.',
    opening: 'For a California CPA firm, the useful question is not whether to outsource every engagement. It is which repeatable preparation tasks can be separated from the judgment and client advice your licensed professionals must retain. A portfolio may contain software businesses, consultants, property entities, retailers or other clients; each has its own source records and accounting rhythm. Accounstone’s role is to prepare a defined portion of that work inside the process your firm already uses, with the evidence and open questions your reviewer needs to see.',
    sections: [
      {
        heading: 'When subscription and service-business records need a clearer close',
        paragraphs: [
          'If your client list includes software or subscription businesses, the recurring work may arrive from several systems: bank feeds, payment processors, billing platforms, payroll reports and the general ledger. The outsourcing brief should identify which system is the source for each balance, how fees and refunds are represented, which accounts need monthly reconciliation and which differences must be escalated rather than coded away.',
          'For professional-services clients, the challenge may instead be contractor costs, reimbursable expenses, customer deposits or revenue records that do not line up neatly with cash receipts. The point is not to force every file into one template. It is to document the client-specific rules that your firm has already approved and have preparation follow them consistently.'
        ],
        examples: [
          { title: 'Subscription receipts', description: 'Reconcile payout reports to bank deposits, separate platform fees and refunds, and list timing differences for reviewer attention.' },
          { title: 'Professional-services books', description: 'Organize expense support, reconcile cash and cards, and flag unclassified or unusual transactions instead of assuming their treatment.' },
          { title: 'Property-owning entities', description: 'Keep entity records distinct and prepare agreed balance-sheet schedules so the reviewer can trace activity to supporting records.' }
        ]
      },
      {
        heading: 'Keep multi-state activity visible without making the tax decision',
        paragraphs: [
          'A client can sell, employ people or hold property in more than one jurisdiction. When the underlying books do not retain the available transaction or location detail, the firm may have to reconstruct it during year-end work. A preparation workflow can instead preserve the data the client supplies, maintain the agreed account mapping and attach the source report used for each schedule.',
          'Accounstone can organize and prepare records within the engagement scope; it does not independently determine nexus, taxability, apportionment, tax positions or filing obligations. Those decisions belong with the firm and the appropriately qualified professional. State-specific questions should be escalated with the relevant facts attached, not answered by a bookkeeper guessing at the rule.'
        ],
        examples: [
          { title: 'Jurisdiction detail', description: 'Retain location fields and source exports where they are available and relevant to the firm’s later review.' },
          { title: 'Open-item trail', description: 'Record missing documents and questions so the reviewer can distinguish a known exception from an unreconciled balance.' }
        ]
      },
      {
        heading: 'Design workpapers around the way your reviewers actually review',
        paragraphs: [
          'A finished ledger is not always a finished handoff. Reviewers may still need a reconciliation that agrees to the trial balance, a schedule that ties to source evidence, an explanation of an unusual movement and a short list of unresolved questions. Before delegating a recurring task, share a completed example of acceptable work and identify which review notes must be carried forward into the next cycle.',
          'For a new client or a cleanup file, separate historical correction from ongoing monthly production. A backlog can contain missing statements, duplicate entries, unreconciled clearing accounts or undocumented journal entries. Those exceptions need a scoped resolution plan; they should not be silently blended into a routine close that is meant to repeat every month.'
        ],
        examples: [
          { title: 'Balance-sheet reconciliation', description: 'Show the ending ledger balance, the supporting statement or schedule, reconciling items and who is expected to resolve each item.' },
          { title: 'Reviewer-ready package', description: 'Return completed schedules alongside exceptions, source references and decisions that remain with the CPA.' }
        ]
      },
      {
        heading: 'Choose a first workflow that can be evaluated objectively',
        paragraphs: [
          'A practical pilot starts with one client, one period or one well-defined process. Agree the file set, deadlines, permissions, sample output, reviewer and acceptance criteria before work begins. A useful evaluation asks whether the schedules tie, whether supporting records are easy to find, whether exceptions were escalated and how much rework remained after review.',
          'If the first cycle works, the firm can decide whether to repeat the same scope or add a different workflow. If it does not, document whether the gap came from incomplete source records, unclear instructions, software access, timing or the work itself. This produces a better decision than expanding the arrangement before the first deliverable has been assessed.'
        ],
        examples: [
          { title: 'Good pilot boundary', description: 'One monthly close with a defined list of accounts and a reviewer-approved output checklist.' },
          { title: 'Poor pilot boundary', description: 'An open-ended request to “take over accounting” without identifying entities, records, authority or completion criteria.' }
        ]
      }
    ],
    pilotChecklist: ['Choose a client file with representative recurring activity, not the firm’s most unusual exception.', 'Provide the current chart of accounts, approved procedures and a sample of a completed reconciliation.', 'Name the reviewer and define how questions, missing records and proposed adjustments should be returned.', 'Evaluate the first output for tie-outs, evidence quality, exception handling and review effort before adding scope.'],
    responsibility: 'California firms should review applicable federal tax-information rules and California professional and confidentiality requirements with their own qualified advisers before authorizing any external access. The page does not interpret California law or claim that a particular consent form fits every engagement.',
    researchNote: 'California is an initial market-test state because of its broad business-establishment scale and visible competitor precedent for a state-qualified CPA outsourcing page. This is not a search-volume ranking.',
    faqs: [
      { question: 'What work can a California CPA firm start by outsourcing?', answer: 'A California CPA firm can discuss a defined portion of bookkeeping, reconciliations, month-end schedules or tax-preparation workpapers where the software, source records and review process are confirmed. The firm retains professional judgment and assigned filing responsibilities.' },
      { question: 'Can Accounstone decide California tax treatment for a client?', answer: 'No. Accounstone can prepare agreed records and supporting schedules, but the CPA firm and its qualified advisers retain decisions about tax treatment, nexus, apportionment, advice and filing positions.' },
      { question: 'How should a firm test the quality of the first engagement?', answer: 'The firm should agree the sample output and reviewer checklist in advance, then assess whether balances tie, evidence is traceable, exceptions are visible and the file needs less or more review than expected.' }
    ]
  },
  texas: {
    name: 'Texas',
    slug: 'texas',
    illustrationService: 'bookkeeping',
    heroDescription: 'Defined accounting production support for Texas CPA practices, from recurring client books to multi-location schedules and agreed tax workpapers, with review and decisions kept with your firm.',
    opening: 'A Texas CPA practice may serve owner-managed businesses, contractors, distributors, service companies or clients operating across several locations. Those client types are not interchangeable, so an outsourcing engagement should begin with the exact records and decisions involved rather than a generic promise to handle everything. Accounstone can prepare agreed recurring work and supporting schedules; your firm defines the accounting method, reviews exceptions and retains client advice and professional sign-off.',
    sections: [
      {
        heading: 'Separate routine contractor bookkeeping from project judgment',
        paragraphs: [
          'For contractor and project-based clients, transaction records may include supplier bills, subcontractor costs, equipment purchases, customer deposits and project-coded expenses. A useful preparation workflow specifies how source documents are named, which project or cost code is required, what happens when a bill has no approval or project reference, and which items need a CPA or client decision.',
          'The outsourced preparation role is not to decide whether a cost should be capitalized, whether a contract meets a particular accounting treatment or how a tax rule applies. Instead, it can maintain the records, reconcile the accounts and surface the missing evidence or classification question early enough for the responsible professional to resolve it.'
        ],
        examples: [
          { title: 'Supplier and subcontractor bills', description: 'Organize source documents, apply the firm-approved coding rules and flag invoices missing required project or approval information.' },
          { title: 'Equipment and project costs', description: 'Maintain supporting schedules and mark items requiring the firm’s capitalization or tax judgment.' },
          { title: 'Customer deposits', description: 'Reconcile receipt records to the ledger and list balances that need client confirmation or accounting review.' }
        ]
      },
      {
        heading: 'Make multi-location books easier to consolidate',
        paragraphs: [
          'A client with several branches or operating locations can accumulate inconsistencies when each location sends information in a different format. Before assigning the work, the firm should establish the entity structure, approved account mapping, naming conventions, intercompany process if applicable and the report that must agree to the general ledger.',
          'Preparation support can maintain the agreed monthly schedules and identify mismatches between location reports, bank activity and ledger balances. It should not invent a consolidation policy or resolve disputed intercompany balances without direction. Clear exception ownership is especially important when the client’s local records arrive late or do not agree.'
        ],
        examples: [
          { title: 'Location-level close', description: 'Use a common checklist while preserving the entity or location detail needed by the firm’s reporting process.' },
          { title: 'Intercompany differences', description: 'List the accounts, periods and amounts that do not match, with source reports attached for review.' }
        ]
      },
      {
        heading: 'Keep sales and tax-related records prepared for CPA review',
        paragraphs: [
          'Books can preserve useful detail for a later tax review when the original records include transaction dates, customer or location information, revenue classifications and supporting reports. A workflow should identify which data fields the client’s system can supply and how the firm wants those records summarized. Missing detail should be called out rather than inferred.',
          'Accounstone does not determine Texas franchise-tax treatment, sales-tax obligations or the client’s filing position. The responsible CPA or tax professional evaluates the client’s facts, current rules and applicable deadlines. Preparation support should make that review easier by producing agreed schedules and maintaining a traceable path back to the source records.'
        ],
        examples: [
          { title: 'Revenue support', description: 'Prepare a report using agreed classifications and show where source data is missing or inconsistent.' },
          { title: 'Year-end handoff', description: 'Organize schedules and unresolved questions so the CPA can focus on analysis and decisions rather than rebuilding the books.' }
        ]
      },
      {
        heading: 'Use a pilot to establish instructions before peak workload',
        paragraphs: [
          'A firm considering support during tax season or a busy close should test the handoff before the deadline period. Select a completed prior-period file or a contained current workflow, share the firm’s approved examples and evaluate the result against the same checklist used internally. This reveals whether instructions are complete enough for someone outside the firm to follow.',
          'After the first cycle, refine the exception list, naming convention, reviewer comments and expected output. If the work involves a new software platform or an unfamiliar process, confirm access and capability before committing a client deadline. Seasonal support is useful only when the work can be scoped and reviewed within the firm’s actual timetable.'
        ],
        examples: [
          { title: 'Pilot measure', description: 'Track the number of missing-record questions, reviewer corrections and schedules accepted on the first review.' },
          { title: 'Scale decision', description: 'Add similar clients only after the firm confirms the workflow is repeatable and the delivery capacity is available.' }
        ]
      }
    ],
    pilotChecklist: ['Select one project, location or recurring close task with complete source records.', 'Supply the account mapping, project coding rules and examples of approved prior-period work.', 'Agree how missing approvals, unusual costs and proposed adjustments are escalated.', 'Review the output before expanding the arrangement to additional clients or locations.'],
    responsibility: 'Texas-specific tax determinations and filing positions remain with the firm and its qualified professionals. Before sharing taxpayer information with an external provider, confirm the applicable federal requirements, client permissions and engagement terms.',
    researchNote: 'Texas is part of the initial test cohort because it is among the leading states for employer-establishment activity and a competitor has a Texas CPA-outsourcing page. Neither signal verifies state-level search volume.',
    faqs: [
      { question: 'Can Accounstone prepare books for Texas contractors?', answer: 'Accounstone can discuss transaction processing, reconciliations and agreed supporting schedules for contractor clients. Project coding, missing approvals and classification questions should follow the CPA firm’s instructions, and professional accounting judgments remain with the firm.' },
      { question: 'Will Accounstone calculate or file Texas franchise tax?', answer: 'The service page does not offer a tax determination or filing promise. Accounstone may prepare agreed accounting records and support schedules; the responsible CPA or tax professional determines treatment and filing obligations.' },
      { question: 'What should be included in a first pilot?', answer: 'Define the client, period, accounts or location, software, source documents, reviewer, due date and acceptance checklist. Evaluate the first output before adding more clients or a broader workload.' }
    ]
  },
  florida: {
    name: 'Florida',
    slug: 'florida',
    illustrationService: 'accounting',
    heroDescription: 'Accounting outsourcing support for Florida CPA practices with recurring client books, property-related entities, seasonal businesses or other portfolios that need a defined preparation and review handoff.',
    opening: 'For a Florida accounting practice, the best starting point may be a recurring monthly workflow rather than a broad transfer of client accounting. A property entity, a seasonal operator and a professional-services company can all need reliable books, but their transaction cycles and supporting reports differ. Accounstone’s work should be scoped to the records your firm receives, the tasks it wants prepared and the evidence required before the file returns to the reviewer.',
    sections: [
      {
        heading: 'Build a dependable rhythm for property-related client records',
        paragraphs: [
          'Where a firm serves property owners or property-related businesses, the recurring records may include rent or fee receipts, vendor invoices, property-level expenses, deposits, loan transactions and separate entity bank accounts. The preparation brief should say which ledger is authoritative, how property or entity coding works, which accounts are reconciled monthly and how unsupported items are reported.',
          'A bookkeeper should not infer the accounting treatment of a transaction simply because it appears familiar. If a cost may require a capital-versus-expense decision, if an owner transaction is unclear or if a balance cannot be tied to support, the file should carry a specific question for the CPA or client rather than an unapproved assumption.'
        ],
        examples: [
          { title: 'Property-level expenses', description: 'Code transactions using approved property and account references and flag missing property details.' },
          { title: 'Separate entity cash', description: 'Reconcile each account to its statement and preserve the relationship between entity records and source documents.' },
          { title: 'Vendor activity', description: 'Organize invoices and payments while leaving approval and payment authority with the client.' }
        ]
      },
      {
        heading: 'Plan for businesses whose activity changes by season',
        paragraphs: [
          'Seasonal businesses can experience sharp changes in receipts, payroll activity, vendor spending and cash balances. A useful workflow identifies which reports arrive daily or weekly, which tasks remain monthly, and which unusual movements need attention before the next reporting cycle. The firm should also decide how to handle periods with limited activity so that quiet months do not leave reconciliations incomplete.',
          'Payment processors, booking platforms and point-of-sale systems may report gross activity, fees, refunds and net deposits separately. Reconciliation work should connect those sources to bank receipts and ledger balances. When the platform export is missing or the settlement does not agree, the difference belongs on an exception list until the underlying reason is known.'
        ],
        examples: [
          { title: 'Settlement reconciliation', description: 'Match gross receipts, fees, refunds and net deposits using the client’s available settlement reports.' },
          { title: 'Variable monthly volume', description: 'Keep the checklist consistent while flagging unusually high or low activity for reviewer attention.' }
        ]
      },
      {
        heading: 'Make the handoff useful for owner and management reporting',
        paragraphs: [
          'The purpose of month-end work is not merely to close the ledger. It is to return a file the CPA can review and use to prepare the reports the engagement requires. Depending on scope, that can mean reconciled accounts, a list of unresolved transactions, supporting schedules for material balances and a concise explanation of changes that need a decision.',
          'The firm should tell the preparer which reporting dimensions matter—entity, property, department, location or another client-approved category—and which reports are authoritative. If those fields are not present in the source system, the limitation should be recorded. Outsourcing cannot create reliable detail that the client’s records do not contain.'
        ],
        examples: [
          { title: 'Monthly reporting package', description: 'Prepare the agreed trial-balance support and account schedules before the firm completes its review.' },
          { title: 'Unresolved balances', description: 'Identify what does not reconcile, what evidence is missing and who needs to answer the question.' }
        ]
      },
      {
        heading: 'Test the recurring process before assigning the full portfolio',
        paragraphs: [
          'A pilot should include enough ordinary activity to show how the work behaves in practice. Choose one client or one close cycle, provide the source reports and coding instructions, and agree what a reviewer-ready output looks like. Evaluate the time spent clarifying instructions as well as the accuracy and completeness of the schedules.',
          'If the client’s books require catch-up or cleanup, scope that work separately from recurring maintenance. The transition plan should identify opening balances, unreconciled periods, known control-account differences and any client decisions that remain outstanding. This avoids treating an inherited backlog as though it were normal monthly production.'
        ],
        examples: [
          { title: 'Recurring scope', description: 'A defined set of monthly accounts and reports with agreed due dates and reviewer ownership.' },
          { title: 'Cleanup scope', description: 'A separate list of historical periods, discrepancies, source records and decisions needed before steady-state work begins.' }
        ]
      }
    ],
    pilotChecklist: ['Choose a recurring client process that represents the work the firm expects to delegate.', 'List each source system and report used for cash, fees, expenses and ledger balances.', 'Agree how seasonal changes, missing statements and unsupported items will be escalated.', 'Keep cleanup, tax decisions, payment approvals and client advice outside the preparation scope unless separately agreed and authorized.'],
    responsibility: 'Florida firms should confirm applicable taxpayer-data, confidentiality and professional requirements with their own qualified advisers before external access is authorized. Accounstone prepares agreed records; the firm retains professional judgment, client advice and the approvals allocated to it.',
    researchNote: 'Florida is included in the first cohort as one of the leading states by employer-establishment activity in the 2022 Economic Census. That broad business-market signal is not a proxy for CPA outsourcing search volume.',
    faqs: [
      { question: 'Can Accounstone help a Florida firm with property-related books?', answer: 'The scope can include agreed bookkeeping, account reconciliations and property- or entity-level schedules where the source records and software are confirmed. Accounting judgments, owner decisions and approvals remain with the responsible professionals and client.' },
      { question: 'How do you handle seasonal changes in transaction volume?', answer: 'The firm and Accounstone should agree which tasks recur, which reports arrive at different intervals and how exceptions are escalated. A pilot can test whether the checklist works during a representative period.' },
      { question: 'Can cleanup be included in monthly bookkeeping?', answer: 'Historical cleanup should be identified and scoped separately when it involves unreconciled periods, opening-balance differences or missing records. The recurring process should start from an agreed baseline.' }
    ]
  },
  'new-york': {
    name: 'New York',
    slug: 'new-york',
    illustrationService: 'tax-preparation',
    heroDescription: 'Defined accounting preparation for New York CPA firms managing professional-services, property, closely held or multi-entity client work, with clear schedules and reviewer-owned decisions.',
    opening: 'New York CPA firms vary widely in size and client focus, so the outsourcing question should be answered at the workflow level. If a reviewer spends hours tracing balances across several entities, finding support for unusual transactions or rebuilding schedules from source exports, that process may be a better first candidate than a whole engagement. Accounstone can prepare agreed workpapers and accounting records; the firm continues to direct the work and make the decisions that require professional judgment.',
    sections: [
      {
        heading: 'Reduce reconstruction in multi-entity accounting files',
        paragraphs: [
          'When clients operate through several legal entities, the close can depend on consistent naming, a clear chart-of-accounts mapping, documented intercompany activity and a defined treatment for balances that do not agree. The preparation brief should identify which entity owns each source record, how due-to and due-from balances are presented, which schedules are required and who can approve a correcting entry.',
          'An external preparer should not force a difference to zero just to make a reconciliation appear complete. The correct output may be an open item with the amount, period, related entity, source report and question for the reviewer. That makes the exception actionable without transferring accounting-policy decisions to the preparation layer.'
        ],
        examples: [
          { title: 'Intercompany schedules', description: 'Compare agreed reciprocal balances and return a list of mismatches for the CPA to investigate.' },
          { title: 'Entity-level close', description: 'Keep bank and balance-sheet reconciliations traceable to the entity and statement they support.' },
          { title: 'Consolidation support', description: 'Prepare the agreed supporting schedules while leaving consolidation policy and eliminations approval with the firm.' }
        ]
      },
      {
        heading: 'Keep professional-services revenue and expenses traceable',
        paragraphs: [
          'For consulting, legal, creative or other professional-services clients, accounting questions may involve client deposits, reimbursable costs, contractor expenses, payroll, project-level reporting or multiple operating accounts. The useful preparation work is to maintain the records and source evidence in line with the firm’s approved coding rules, not to decide when revenue should be recognized or how a contract should be interpreted.',
          'Where the source system offers project, department or location fields, the workflow should state which are required and how missing values are reported. Where those fields are not captured, the limitation should be made visible instead of filling it with an assumption. The CPA can then decide whether more information or a separate analysis is required.'
        ],
        examples: [
          { title: 'Client deposits and reimbursements', description: 'Reconcile available records and flag transactions whose underlying purpose or status is unclear.' },
          { title: 'Contractor and payroll costs', description: 'Maintain approved expense classifications and assemble the supporting reports requested by the firm.' }
        ]
      },
      {
        heading: 'Prepare files so review effort is spent on decisions',
        paragraphs: [
          'A reviewer-ready package should make the trail from trial balance to support easy to follow. The firm can specify the order of schedules, naming convention, cross-references, materiality or escalation rules it uses, and whether proposed adjustments must include a written explanation. The preparation process should preserve these conventions from one period to the next.',
          'The workpaper standard should also identify what counts as complete. A bank reconciliation without a statement, a schedule with no tie to the ledger or a journal entry without its support may look finished in a checklist while still leaving the reviewer to rebuild the file. Agreeing the evidence requirement before the work begins prevents that ambiguity.'
        ],
        examples: [
          { title: 'Traceable schedule', description: 'Tie each supporting schedule to the relevant account and period and retain the source used to prepare it.' },
          { title: 'Adjustment proposal', description: 'Document the proposed entry and reason, but leave approval and posting authority with the firm or client as agreed.' }
        ]
      },
      {
        heading: 'Separate preparation tasks from professional analysis',
        paragraphs: [
          'Some engagements include decisions that cannot be delegated as routine data processing: accounting-policy choices, tax positions, client advice, interpretation of unusual transactions or approval of a filing. Before assigning the work, the firm should mark these boundaries in the instructions and define who receives questions that cross them.',
          'A small pilot can test whether the boundaries work. Select one entity or one recurring schedule, provide an approved example, and ask the reviewer to grade completeness, traceability, exception quality and the amount of rework. If the result is useful, expand only to similar tasks that have clear instructions and an available reviewer.'
        ],
        examples: [
          { title: 'Preparation boundary', description: 'Records and schedules are prepared according to the agreed method; judgment calls are returned as explicit questions.' },
          { title: 'Review boundary', description: 'The CPA firm controls advice, approval, client communication and any filing or signing responsibility assigned to it.' }
        ]
      }
    ],
    pilotChecklist: ['Start with one entity or one recurring schedule where the source records are available.', 'Provide approved examples of reconciliations, intercompany schedules or workpaper formats.', 'Define how exceptions and proposed adjustments are documented and who approves them.', 'Assess whether the reviewer can trace each balance to evidence without rebuilding the preparation file.'],
    responsibility: 'New York-specific legal, tax and professional obligations should be confirmed by the firm’s qualified advisers. Before sharing taxpayer information externally, the firm should review applicable federal disclosure rules, client permissions and the terms of the engagement.',
    researchNote: 'New York is in the initial cohort because it ranks among the leading states for employer-establishment activity in the 2022 Economic Census. No comparable state-level keyword export has established its CPA-outsourcing search rank.',
    faqs: [
      { question: 'Can Accounstone support a New York firm with multi-entity bookkeeping?', answer: 'Accounstone can discuss entity-level reconciliations and agreed supporting schedules when the source records, software and review process are defined. Intercompany policy, consolidation judgments and approval of adjustments remain with the responsible professionals.' },
      { question: 'Who decides how an unusual transaction should be treated?', answer: 'The CPA firm or other appropriately qualified professional retains accounting-policy decisions, client advice and tax positions. Preparation support should document the transaction and return the question with its supporting evidence.' },
      { question: 'What makes a workpaper ready for review?', answer: 'The firm should define required source evidence, account and period references, reconciliation tie-outs, explanations for proposed adjustments and the process for open items before recurring work begins.' }
    ]
  },
  illinois: {
    name: 'Illinois',
    slug: 'illinois',
    illustrationService: 'bookkeeping',
    heroDescription: 'Accounting production support for Illinois CPA firms whose client work may include distribution, manufacturing, retail or service businesses, scoped to the firm’s records and review checklist.',
    opening: 'For an Illinois CPA firm, the right outsourcing scope depends on the type of work waiting in the review queue. A distributor’s close may depend on sales and purchase records; a manufacturer may have inventory and cost schedules; a professional-services client may have payroll, contractor costs and multiple operating accounts. Accounstone can prepare defined bookkeeping and supporting schedules where the source data and process are agreed. The firm retains the decisions that require professional judgment.',
    sections: [
      {
        heading: 'Make inventory-related records useful without assuming valuation responsibility',
        paragraphs: [
          'Manufacturing and distribution files can include purchases, freight, inventory adjustments, returns, vendor credits and cost-of-sales records. The preparer needs a clear map between the client’s source system and the accounts the firm expects to reconcile. Instructions should identify which reports are authoritative, how differences are recorded and which items require a CPA or inventory specialist to investigate.',
          'Bookkeeping support is not a substitute for physical observation, inventory valuation judgment or an approved costing policy. If quantities do not agree, a cost report changes unexpectedly or a write-off lacks documentation, the workpaper should identify the difference and preserve the source report. The responsible professional determines the treatment after reviewing the facts.'
        ],
        examples: [
          { title: 'Purchases and vendor credits', description: 'Reconcile agreed purchase records to the ledger and identify credits or invoices not reflected in the expected period.' },
          { title: 'Inventory control balances', description: 'Compare client-provided reports to the relevant ledger balance and list differences without inventing an adjustment.' },
          { title: 'Cost-of-sales schedules', description: 'Prepare the schedule from the approved source data and highlight missing or inconsistent inputs for review.' }
        ]
      },
      {
        heading: 'Support multi-location and distribution workflows',
        paragraphs: [
          'A client with warehouses, branches or separate operating entities may provide exports from different systems or use different naming conventions across locations. The firm should define the account mapping, required dimensions, treatment of intercompany activity and the report that must tie to the ledger. Consistent preparation makes it easier to compare periods and locate the source of a mismatch.',
          'The preparation layer can organize records and reconcile balances, but it should not independently determine transfer-pricing treatment, inventory policy or other specialized accounting decisions. Those questions need to be referred to the CPA and any relevant specialist. A clear escalation rule prevents an unresolved issue from being hidden inside a general ledger code.'
        ],
        examples: [
          { title: 'Branch cash and expenses', description: 'Reconcile accounts by location and flag transactions that lack the required branch or entity detail.' },
          { title: 'Supplier balances', description: 'Compare vendor statements and ledger records where provided, then list disputed or unmatched items.' }
        ]
      },
      {
        heading: 'Keep ordinary commercial bookkeeping from becoming a cleanup project',
        paragraphs: [
          'Recurring bookkeeping is easier to delegate when opening balances are understood and prior periods are reconciled. If the firm receives a client with a backlog, first identify which periods are incomplete, which statements are missing, which control accounts do not tie and which adjustments require approval. Treating this as a separate cleanup scope creates a realistic starting point for the monthly process.',
          'Once the baseline is agreed, recurring work can follow a repeatable checklist: record transactions, reconcile bank and balance-sheet accounts, assemble supporting schedules, note unusual movements and return an exception list. The firm can then spend review time on the issues that need professional attention rather than searching for missing documents.'
        ],
        examples: [
          { title: 'Opening-balance review', description: 'List unreconciled periods and differences before routine monthly work is priced or scheduled.' },
          { title: 'Steady-state close', description: 'Repeat the agreed accounts and schedules each cycle and track unresolved items until they are cleared.' }
        ]
      },
      {
        heading: 'Agree how the firm will measure the first cycle',
        paragraphs: [
          'A pilot should test both the work and the instructions. Give the preparer a defined client file, approved prior-period examples, required reports and a named reviewer. Evaluate whether the work ties to the source records, whether supporting evidence is present, whether questions arrive early enough and whether the final package fits the firm’s review habits.',
          'If the file includes inventory or other specialist questions, decide in advance which records may be organized and reconciled and which conclusions must be supplied by the client or a qualified adviser. A pilot that makes these boundaries explicit is easier to evaluate and less likely to create an expectation that the outsourcing provider is assuming a specialist role.'
        ],
        examples: [
          { title: 'Quality measures', description: 'Track reconciliation differences, missing-document requests, review corrections and completeness of the handoff.' },
          { title: 'Scope expansion', description: 'Add another client only when the first process is repeatable and the next file has comparable records and requirements.' }
        ]
      }
    ],
    pilotChecklist: ['Choose one client or close process and identify any inventory or costing tasks that require separate judgment.', 'Provide the account map, source reports, prior-period examples and the required reconciliation format.', 'Define which discrepancies are prepared as schedules and which require a specialist or CPA decision.', 'Review the first cycle for traceability, completeness, exception quality and remaining rework before adding volume.'],
    responsibility: 'The firm should confirm applicable federal tax-information rules, confidentiality terms and client permissions before granting external access. Accounstone prepares agreed records and schedules; inventory valuation, specialized accounting policy, tax advice and final professional approval remain with the responsible professionals.',
    researchNote: 'Illinois completes the initial five-state test cohort. Census establishment scale supports investigating it as a prospect market, but no verified state-level search-volume comparison establishes its CPA-outsourcing intent.',
    faqs: [
      { question: 'Can Accounstone help with manufacturing or distribution books?', answer: 'Accounstone can discuss bookkeeping, reconciliations and agreed schedules based on client-provided records. Inventory valuation, physical observation, costing policy and specialized accounting judgments must remain with the responsible professionals or specialists.' },
      { question: 'How should inventory differences be handled?', answer: 'The preparation file should preserve the source report, quantify the difference and identify missing evidence. The CPA or qualified specialist decides the accounting treatment rather than having the preparer create an unsupported adjustment.' },
      { question: 'Should a backlog be included in monthly bookkeeping?', answer: 'If prior periods are incomplete or control accounts do not reconcile, scope the historical cleanup separately. Establish the opening baseline and then define the recurring checklist for subsequent periods.' }
    ]
  }
};
