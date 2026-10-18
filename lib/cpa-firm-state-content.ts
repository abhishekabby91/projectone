export type CpaFirmStateKey = 'california' | 'texas' | 'florida' | 'new-york' | 'illinois';

export interface CpaFirmStateContent {
  name: string;
  adjective: string;
  slug: string;
  focus: string;
  portfolioContext: string;
  workflowContext: string;
  researchNote: string;
  faqs: { question: string; answer: string }[];
}

export const cpaFirmStateContent: Record<CpaFirmStateKey, CpaFirmStateContent> = {
  california: {
    name: 'California',
    adjective: 'California',
    slug: 'california',
    focus: 'A practical preparation layer for firms serving varied business portfolios, including technology, professional services, real estate and e-commerce clients where those sectors match the firm’s actual client base.',
    portfolioContext: 'For a California practice, the relevant question is not whether every client belongs to one industry. It is whether recurring client work can be organized into repeatable preparation steps. A portfolio may include a technology company with subscription receipts, a professional-services business with contractor payments, a property-owning entity, and a retailer with payment-platform settlements. Those files have different transaction patterns, but they still need clear reconciliations, documented open items, consistent workpapers and a reviewer-ready handoff. The page is not a claim that all California firms specialize in these sectors; use these examples to assess whether the support model matches your own portfolio.',
    workflowContext: 'Where clients operate across state lines, the books should preserve the detail the firm needs for its own review: transaction descriptions, account classifications, supporting schedules and relevant location or jurisdiction data supplied by the client. Accounstone can prepare agreed accounting records and schedules inside the firm’s existing process. Determinations about nexus, tax treatment, accounting policy and filing positions remain with the responsible firm and its clients.',
    researchNote: 'California is one of the five states selected for initial market testing based on broad business-establishment scale and the presence of a competitor state page. This does not establish the state’s search volume for CPA outsourcing.',
    faqs: [
      { question: 'What can Accounstone prepare for a California CPA firm?', answer: 'Depending on agreed scope and capability, support may include client bookkeeping, reconciliations, month-end schedules and tax-preparation workpapers. The firm retains review, professional judgment, client advice and filing responsibilities assigned to it.' },
      { question: 'Do you only support technology or real estate clients?', answer: 'No. Those are examples of possible portfolio types, not a restriction. The right scope depends on the firm’s actual clients, systems, checklists and review process.' },
      { question: 'What should a California firm check before sharing tax information offshore?', answer: 'Review applicable federal and California professional, confidentiality and tax-information requirements with qualified counsel or the firm’s professional advisers before transferring client information. The IRS Publication 4557 is a useful starting point for taxpayer-data safeguards.' },
    ],
  },
  texas: {
    name: 'Texas',
    adjective: 'Texas',
    slug: 'texas',
    focus: 'Recurring accounting and preparation support for firms whose client work may include contractors, multi-location businesses, professional services, distribution or other commercial portfolios.',
    portfolioContext: 'Texas practices can have very different client mixes. Some support owner-managed businesses and contractors; others serve distributors, professional practices, real estate entities or businesses with multiple locations. Rather than assume one industry defines the state, Accounstone scopes work around the actual file and the firm’s established process. Typical preparation work can include transaction coding, bank and balance-sheet reconciliations, month-end schedules, supporting-document organization and clearly listed questions for the reviewer.',
    workflowContext: 'For clients with activity across multiple locations or states, the preparation file should preserve the transaction detail and supporting schedules the CPA needs to assess reporting and tax questions. Accounstone can organize records and prepare agreed schedules; it does not independently determine a client’s tax obligations or replace the firm’s professional review. For Texas-specific tax matters, the responsible CPA or tax professional determines applicable treatment and filing positions.',
    researchNote: 'Texas is included because it is among the largest states by employer-establishment activity in the U.S. Census Bureau’s 2022 Economic Census geography release and because a direct competitor has a Texas CPA-outsourcing landing page. Neither fact proves state-level Google search volume.',
    faqs: [
      { question: 'Can the work follow our existing Texas CPA firm workflow?', answer: 'The intended model is to work within the firm’s agreed systems, templates, close calendar and escalation process. The scope and access are confirmed before work starts.' },
      { question: 'Can you determine Texas franchise tax or sales-tax treatment?', answer: 'Accounstone can prepare agreed accounting records and supporting schedules within scope. Tax determinations, advice and filing decisions remain with the responsible licensed professional and client.' },
      { question: 'Can we begin with only one client file?', answer: 'A limited pilot can be discussed where the scope, access, source documents, review criteria and success measures are agreed in advance.' },
    ],
  },
  florida: {
    name: 'Florida',
    adjective: 'Florida',
    slug: 'florida',
    focus: 'Preparation capacity for firms with recurring client accounting work, including portfolios that may contain real estate, hospitality, professional services, e-commerce or other owner-managed businesses.',
    portfolioContext: 'A firm’s Florida client portfolio may mix recurring service businesses, property-related entities, seasonal operators and businesses using payment processors or multiple bank accounts. The relevant accounting challenge is often the consistency of the underlying workflow: posting activity to the right accounts, reconciling cash and control accounts, maintaining support for unusual transactions, and preparing a close package that makes unresolved questions visible. These examples are prompts for scoping, not assumptions about every Florida CPA practice.',
    workflowContext: 'For seasonal businesses, multi-entity clients or operations with changing transaction volume, the workflow should specify which tasks recur monthly, which tasks arise only at quarter- or year-end, and which exceptions require the CPA’s decision. Accounstone can prepare agreed accounting schedules and records within that workflow. The firm remains responsible for interpreting the client’s circumstances, advising on tax treatment and approving or filing deliverables as applicable.',
    researchNote: 'Florida is part of the initial test set because it appears among the largest states by employer-establishment activity in the 2022 Economic Census. This is market-size context, not evidence that Florida has the highest outsourcing keyword demand.',
    faqs: [
      { question: 'Can you support a Florida firm with recurring client books?', answer: 'Yes, where the requested tasks fit the agreed service scope. Common examples include transaction processing, reconciliations, month-end schedules and preparation support.' },
      { question: 'Do you specialize only in property-related accounting?', answer: 'No. Property-related work is one possible client workflow. The engagement should be based on the firm’s actual client mix and the tasks it wants to delegate.' },
      { question: 'Who reviews and approves the completed work?', answer: 'The CPA firm retains the review, professional judgment, client advice and filing responsibilities allocated to it. The handoff and escalation rules should be agreed during onboarding.' },
    ],
  },
  'new-york': {
    name: 'New York',
    adjective: 'New York',
    slug: 'new-york',
    focus: 'Defined preparation support for firms serving professional-services businesses, property-related entities, closely held companies and other clients whose records need a consistent reviewer handoff.',
    portfolioContext: 'A New York practice may serve clients with complex transaction volumes, several entities, professional-services revenue, property activity or operations spanning multiple jurisdictions. The page does not assume that all firms handle financial-services clients or that every engagement is complex. Instead, it focuses on the repeatable preparation layer: maintaining reconciliations, organizing evidence, drafting agreed schedules, tracking open questions and returning work in a format that fits the firm’s review habits.',
    workflowContext: 'When a client has more than one entity, location or reporting requirement, it is especially important to define the source records, the mapping to the chart of accounts, the required supporting schedules and who resolves differences. Accounstone can prepare the agreed records and workpapers using the client’s existing systems where supported. Decisions about accounting treatment, state and local tax positions, client advice and filing remain with the responsible professionals.',
    researchNote: 'New York is included in the first research cohort because it is among the largest states by employer-establishment activity in the 2022 Economic Census. No public state-level keyword dataset reviewed so far establishes its ranking for CPA-firm outsourcing searches.',
    faqs: [
      { question: 'Can you support firms with multi-entity bookkeeping?', answer: 'Potentially, where the work is defined and the relevant software, source records and review steps are confirmed. The scope should specify entity-level and consolidated schedules where required.' },
      { question: 'Will you make tax or accounting policy decisions for our clients?', answer: 'No. Accounstone prepares agreed records and supporting schedules. The firm and its qualified professionals retain professional judgment, advice, approvals and filing responsibilities.' },
      { question: 'Can you work in our current accounting software?', answer: 'The intended approach is to use the firm’s existing supported systems and templates where access and scope permit. Confirm the exact platform and workflow before starting.' },
    ],
  },
  illinois: {
    name: 'Illinois',
    adjective: 'Illinois',
    slug: 'illinois',
    focus: 'Repeatable accounting preparation for firms whose portfolios may include manufacturing, distribution, professional services, retail or other commercial clients.',
    portfolioContext: 'For firms serving manufacturers or distributors, the close may depend on clear account classifications, reconciliations, documentation of unusual balances and schedules that the reviewer can trace to source records. Professional-services and retail clients bring different patterns, but the same preparation principles apply: agree the source of truth, keep reconciliations current, document unresolved differences and provide a concise handoff. These sector examples reflect potential client workflows, not a claim that Accounstone has a specialist industry credential or that every Illinois firm serves these industries.',
    workflowContext: 'Where a client’s accounting depends on inventory records, multiple locations, sales channels or several legal entities, the engagement should clearly distinguish routine bookkeeping from specialized valuation, inventory observation, tax interpretation or other judgment-based work. Accounstone can prepare agreed transaction records and supporting schedules within the confirmed scope. The firm retains review and decisions that require professional judgment and coordinates any specialist work that falls outside the engagement.',
    researchNote: 'Illinois completes the initial five-state cohort alongside California, Texas, Florida and New York. The Census Bureau’s 2022 Economic Census identifies these states among the leaders across employer-establishment measures; that evidence is useful for prospect-market selection but is not a search-intent ranking.',
    faqs: [
      { question: 'Can you support clients with inventory-related accounting records?', answer: 'Accounstone can discuss bookkeeping and agreed supporting schedules based on records provided by the client. Inventory valuation, physical observation and judgment-based accounting decisions must be scoped with the responsible professionals.' },
      { question: 'Can work be organized around our review checklist?', answer: 'Yes, the workflow should be documented around the firm’s templates, required evidence, reviewer notes and escalation points before recurring production begins.' },
      { question: 'Can we use this service only during peak workload?', answer: 'A project-based or seasonal scope can be discussed where it matches available capacity and the work is clearly defined before onboarding.' },
    ],
  },
};
