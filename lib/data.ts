// Core service offerings
export const services = [
  {
    id: 'bookkeeping', slug: 'bookkeeping', name: 'Bookkeeping', icon: '📖',
    description: 'Bookkeeping support for teams that need their records kept current, reconciled, and ready for review. The work can include transaction posting, bank and credit-card reconciliations, account maintenance, cleanup, and recurring month-end tasks.', shortDesc: 'Current books, reconciliations & month-end support',
  },
  {
    id: 'accounting', slug: 'accounting', name: 'Accounting Services', icon: '📊',
    description: 'Day-to-day accounting support for the work that sits between bookkeeping and reporting, including reconciliations, close tasks, journal entries, account maintenance, and management reporting.', shortDesc: 'Reconciliations, close & accounting operations',
  },
  {
    id: 'tax-preparation', slug: 'tax-preparation', name: 'Tax Preparation', icon: '📝',
    description: 'Tax preparation support built around organized workpapers, source documents, return preparation, review notes, and a clear handoff to the tax professional responsible for the final return.', shortDesc: 'Return preparation, workpapers & review support',
  },
  {
    id: 'payroll', slug: 'payroll', name: 'Payroll Processing', icon: '💰',
    description: 'Payroll processing support for recurring calculations, employee records, payroll reports, and coordination of the accounting work around payroll. The workflow can be defined around your existing provider and approvals.', shortDesc: 'Recurring payroll processing & support',
  },
  {
    id: 'accounts-payable', slug: 'accounts-payable', name: 'Accounts Payable', icon: '💳',
    description: 'Accounts payable support from invoice intake through coding, approval tracking, payment preparation, vendor records, and reconciliation. The goal is a clean queue and a process your team can review without chasing every item.', shortDesc: 'Invoice processing, approvals & vendor records',
  },
  {
    id: 'accounts-receivable', slug: 'accounts-receivable', name: 'Accounts Receivable', icon: '📥',
    description: 'Accounts receivable support covering invoicing, payment application, account reconciliation, aging review, and follow-up. Work can be structured around your billing cycle and collection process.', shortDesc: 'Invoicing, cash application & aging support',
  },
  {
    id: 'audit-support', slug: 'audit-support', name: 'Audit Support', icon: '✓',
    description: 'Audit support that helps organize schedules, reconciliations, supporting documents, evidence requests, and open items so the audit team can spend less time waiting for information.', shortDesc: 'Schedules, evidence & audit-request support',
  },
];

export const solutions = [
  {
    id: 'offshore-accounting-support', slug: 'offshore-accounting-support', name: 'Offshore Accounting Support', icon: '🌍',
    description: 'Add accounting capacity without asking your existing team to absorb every recurring task. Defined workflows can be handled by an offshore team while your managers retain review, approval, and process control.',
    services: ['Bookkeeping', 'Accounting Services', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable'],
  },
  {
    id: 'staff-augmentation', slug: 'staff-augmentation', name: 'Staff Augmentation', icon: '👥',
    description: 'Bring in additional accounting capacity when the workload changes, a hiring gap opens up, or a particular workflow needs more hands. The added resource works within your existing systems and review structure.',
    services: ['Accounting Services', 'Tax Preparation', 'Audit Support'],
  },
  {
    id: 'dedicated-accounting-teams', slug: 'dedicated-accounting-teams', name: 'Dedicated Accounting Teams', icon: '👨‍💼',
    description: 'Build a team around the way your accounting work is actually done: your systems, close calendar, documentation, approvals, and review process. The team can grow or narrow with the workload rather than forcing a fixed scope.',
    services: ['Accounting Services', 'Tax Preparation', 'Audit Support'],
  },
  {
    id: 'back-office-support', slug: 'back-office-support', name: 'Back Office Support', icon: '🏢',
    description: 'Take recurring accounting administration off your core team’s plate, including bookkeeping, payables, receivables, payroll processing, and account maintenance. Each workflow can be defined around who prepares, who reviews, and who approves.',
    services: ['Bookkeeping', 'Payroll Processing', 'Accounts Payable', 'Accounts Receivable', 'Accounting Services'],
  },
];

export const markets = [
  { id: 'united-states', slug: 'united-states', name: 'United States', icon: '🇺🇸', description: 'Accounting support for U.S. CPA firms, with workflows built around bookkeeping, tax preparation, payroll, reconciliations, close, and audit support.' },
  { id: 'united-kingdom', slug: 'united-kingdom', name: 'United Kingdom', icon: '🇬🇧', description: 'Accounting support for UK accountancy practices, with recurring bookkeeping, accounting operations, tax preparation, payroll, and reporting workflows.' },
  { id: 'australia', slug: 'australia', name: 'Australia', icon: '🇦🇺', description: 'Accounting support for Australian accounting firms, including bookkeeping, reconciliations, reporting, payroll, tax preparation, and recurring back-office work.' },
];

export const industries = [
  { id: 'cpa-firms', slug: 'cpa-firms', name: 'CPA Firms', icon: '📊', description: 'Support for CPA and accounting firms when recurring bookkeeping, cleanup, tax-season preparation, or audit work starts competing with review and client-facing time.' },
  { id: 'technology', slug: 'technology', name: 'Technology', icon: '💻', description: 'Accounting operations support for SaaS, software, and technology businesses where transaction volume, subscriptions, integrations, and reporting can make the close harder to keep consistent.' },
  { id: 'healthcare', slug: 'healthcare', name: 'Healthcare', icon: '🏥', description: 'Accounting and back-office support for medical practices and healthcare providers, with attention to reconciliations, payables, receivables, payroll, and recurring reporting.' },
  { id: 'ecommerce', slug: 'ecommerce', name: 'E-Commerce', icon: '🛒', description: 'Accounting support for online retailers and marketplace businesses dealing with sales channels, payment processors, refunds, fees, inventory-related activity, payables, and reconciliations.' },
  { id: 'real-estate', slug: 'real-estate', name: 'Real Estate', icon: '🏠', description: 'Real estate accounting support for property-level books, owner reporting, AP/AR, reconciliations, month-end close, and multi-entity workflows.' },
  { id: 'professional-services', slug: 'professional-services', name: 'Professional Services', icon: '⚖️', description: 'Accounting and back-office support for consulting, legal, agency, and other professional service businesses where billing, payroll, expenses, and month-end reporting need to stay organized.' },
];

export const technologies = [
  { id: 'quickbooks', slug: 'quickbooks', name: 'QuickBooks', icon: '📱', description: 'QuickBooks support around the accounting work that happens inside the system: cleanup, transaction workflows, reconciliations, recurring close tasks, reporting, and process organization.' },
  { id: 'xero', slug: 'xero', name: 'Xero', icon: '☁️', description: 'Xero support for teams that need help keeping transactions, reconciliations, integrations, reporting, and recurring accounting workflows under control.' },
  { id: 'sage', slug: 'sage', name: 'Sage', icon: '📈', description: 'Sage accounting support for recurring workflows, reconciliations, account maintenance, reporting, and the operational work around month-end close.' },
  { id: 'netsuite', slug: 'netsuite', name: 'NetSuite', icon: '🔧', description: 'NetSuite support for multi-entity accounting, reconciliations, close activities, account maintenance, and reporting workflows that require more structured controls.' },
  { id: 'drake-tax', slug: 'drake-tax', name: 'Drake Tax', icon: '📝', description: 'Drake Tax support for organized return-preparation workflows, source-document handling, workpapers, review notes, and recurring tax-season processes.' },
  { id: 'cch', slug: 'cch', name: 'CCH Axcess', icon: '🎯', description: 'CCH Axcess support around tax-practice workflows, document organization, preparation tasks, review queues, and recurring practice operations.' },
  { id: 'myob', slug: 'myob', name: 'MYOB', icon: '💼', description: 'MYOB accounting support for Australian and New Zealand accounting firms and practices, including recurring bookkeeping, reconciliations, and reporting workflows.' },
];

export const expertise = [
  { title: 'Accounting Standards', items: ['GAAP', 'IFRS', 'SOX Compliance', 'ASC 606 Revenue Recognition'] },
  { title: 'Industry Knowledge', items: ['SaaS & Technology', 'E-Commerce & Retail', 'Healthcare', 'Real Estate & Hospitality'] },
  { title: 'Practice Support', items: ['Bookkeeping Operations', 'Tax Preparation Support', 'Audit Support', 'Workflow Management'] },
];

// These are illustrative engagement themes, not client testimonials or endorsements.
export const testimonials = [
  {
    name: 'Seasonal capacity',
    title: 'Common engagement theme',
    company: 'CPA firm workflows',
    text: 'A firm may have strong internal reviewers but still need more capacity for transaction-level bookkeeping, cleanup, workpaper preparation, or recurring client work when deadlines start to stack up.',
  },
  {
    name: 'Recurring workflow support',
    title: 'Common engagement theme',
    company: 'Accounting operations',
    text: 'A defined outside team can take ownership of AP, AR, bookkeeping, reconciliations, or close tasks while the client team keeps the review and approval points that matter to them.',
  },
  {
    name: 'Growing workload',
    title: 'Common engagement theme',
    company: 'Firm and practice operations',
    text: 'A growing firm or accounting practice may need additional capacity without immediately changing its accounting system or asking managers to rebuild the workflow from scratch.',
  },
];

// Trust statements that describe practices rather than unverified credentials.
export const trustBadges = [
  { name: 'NDA-Backed Engagements', icon: '🔒' },
  { name: 'Security-First Data Handling', icon: '✓' },
  { name: 'Documented Workflows & Review', icon: '▣' },
];

export const companyInfo = {
  name: 'Accounstone',
  tagline: 'Outsourced Accounting | Tax | Audit | Bookkeeping',
  description: 'Accounstone provides outsourced accounting, bookkeeping, tax preparation, payroll, audit support, and back-office services to accounting firms, practices and the businesses they support across the US, UK, and Australia. The focus is practical: defined workflows, clear handoffs, documented work, quality review, and communication that keeps the client team informed.',
  website: 'https://www.accounstone.com',
  contact: {
    email: 'partner@accounstone.com',
    // Raw E.164 for `tel:` links.
    phone: '+919990597192',
    // Grouped for reading. "+919990597192" is technically correct and visually
    // unparseable, and it was rendering that way on every page that shows it.
    phoneDisplay: '+91 99905 97192',
    address: 'Global Delivery Center - New Delhi, India',
  },
};

// ---------------------------------------------------------------------------
// Region-first services architecture.
//
// One source of truth for the Service x Region layer. The navbar, footer,
// /services hub and app/sitemap.ts all derive from `serviceRegions` so a new
// combination cannot be added to one surface and forgotten on the others.
//
// IMPORTANT: an entry here does NOT create a page. Every combination listed
// must have a matching app/services/{service}/{region}/page.tsx. See CLAUDE.md
// "Adding a route" - a missing page.tsx previously produced 15 dead links.
//
// CFO Support and HR services are intentionally absent. See
// knowledge/company/scope-boundaries.md - they are not offered today. They are
// planned for the future, at which point adding them here plus the matching
// page files is the whole change.
// ---------------------------------------------------------------------------

export const regions = [
  {
    slug: 'united-states',
    short: 'US',
    name: 'United States',
    adjective: 'U.S.',
    flag: '🇺🇸',
    heroAnchors: ['IRS', 'U.S. GAAP', 'Federal + state', 'W-2 / 1099', 'Sales tax nexus'],
    intro:
      'U.S. engagements are built around the month-end close and the recurring compliance work that surrounds it. Records are kept to U.S. GAAP conventions, payroll accounting accommodates federal and state withholding, and tax work stops at prepared returns and workpapers - the filing decision stays with your CPA or EA.',
  },
  {
    slug: 'united-kingdom',
    short: 'UK',
    name: 'United Kingdom',
    adjective: 'UK',
    flag: '🇬🇧',
    heroAnchors: ['HMRC', 'VAT & MTD', 'PAYE / RTI', 'Corporation Tax', 'Companies House', 'FRS 102'],
    intro:
      'UK engagements run on two clocks: the recurring VAT cycle and the year-end accounts deadline. Records are prepared under FRS 102 conventions and kept in a state that supports both. HMRC and Companies House submission stays with your registered practitioner - we do not hold portal credentials.',
  },
  {
    slug: 'australia',
    short: 'AU',
    name: 'Australia',
    adjective: 'Australian',
    flag: '🇦🇺',
    heroAnchors: ['ATO', 'GST & BAS', 'PAYG', 'Single Touch Payroll', 'Super guarantee', 'AASB'],
    intro:
      'Australian engagements are paced by the BAS cycle and the 30 June year end. GST coding is checked as part of the close rather than reconstructed at lodgment, and payroll accounting accounts for PAYG and superannuation guarantee. Lodgment stays with your registered BAS or tax agent.',
  },
] as const;

export type RegionSlug = (typeof regions)[number]['slug'];

type ServiceRegionCopy = Record<RegionSlug, string>;

interface ServiceRegionEntry {
  slug: string;
  name: string;
  navLabel: string;
  copy: ServiceRegionCopy;
}

export const serviceRegions: ServiceRegionEntry[] = [
  {
    slug: 'bookkeeping',
    name: 'Bookkeeping',
    navLabel: 'Bookkeeping',
    copy: {
      'united-states': 'Transaction posting, reconciliations and month-end tasks kept current so the close starts from a clean ledger.',
      'united-kingdom': 'Records maintained across the VAT quarter, with digital links kept intact for Making Tax Digital.',
      'australia': 'Books kept BAS-ready, with GST coding checked as transactions are posted rather than at lodgment.',
    },
  },
  {
    slug: 'accounting',
    name: 'Accounting Services',
    navLabel: 'Accounting',
    copy: {
      'united-states': 'Reconciliations, journal entries and month-end close prepared to U.S. GAAP conventions for CPA review.',
      'united-kingdom': 'Close, journals and year-end accounts preparation under FRS 102, packaged for your practitioner.',
      'australia': 'Close and reporting under AASB conventions, timed to your BAS periods rather than run separately from them.',
    },
  },
  {
    slug: 'tax-preparation',
    name: 'Tax Preparation',
    navLabel: 'Tax Preparation',
    copy: {
      'united-states': 'Workpapers and return preparation for 1120, 1065 and 1040 filings, handed off to your CPA or EA.',
      'united-kingdom': 'Corporation Tax and Self Assessment workpapers prepared for your registered practitioner to review and submit.',
      'australia': 'Company and trust return workpapers prepared for lodgment by your registered tax agent.',
    },
  },
  {
    slug: 'payroll',
    name: 'Payroll Processing',
    navLabel: 'Payroll',
    copy: {
      'united-states': 'Recurring payroll runs, W-2 and 1099 records, and federal plus multi-state withholding accounting.',
      'united-kingdom': 'PAYE processing, RTI submission support and the accounting around pension auto-enrolment.',
      'australia': 'Pay runs with PAYG withholding, Single Touch Payroll reporting support and superannuation guarantee accounting.',
    },
  },
  {
    slug: 'accounts-payable',
    name: 'Accounts Payable',
    navLabel: 'Accounts Payable',
    copy: {
      'united-states': 'Invoice intake through approval and payment preparation, with 1099 vendor data kept current.',
      'united-kingdom': 'Purchase ledger run with VAT coding checked at entry, and CIS handling where it applies.',
      'australia': 'Purchase ledger with GST coding and ABN validation applied as invoices are processed.',
    },
  },
  {
    slug: 'accounts-receivable',
    name: 'Accounts Receivable',
    navLabel: 'Accounts Receivable',
    copy: {
      'united-states': 'Invoicing, cash application and aging follow-up structured around your collections cadence and DSO targets.',
      'united-kingdom': 'Sales ledger and credit control with VAT invoicing requirements applied correctly at source.',
      'australia': 'Sales ledger and collections follow-up with GST invoicing requirements applied at source.',
    },
  },
  {
    slug: 'audit-support',
    name: 'Audit Support',
    navLabel: 'Audit Support',
    copy: {
      'united-states': 'PBC lists, lead schedules and indexed evidence prepared ahead of fieldwork for your engaged auditor.',
      'united-kingdom': 'FRS 102 lead schedules and year-end reconciliations prepared against your statutory auditor’s request list.',
      'australia': 'AASB schedules, GST control reconciliation and evidence prepared before the 30 June crunch.',
    },
  },
];

/** Every Service x Region path. Must stay in step with the page.tsx files on disk. */
export const serviceRegionPaths: string[] = serviceRegions.flatMap((s) =>
  regions.map((r) => `/services/${s.slug}/${r.slug}`),
);
