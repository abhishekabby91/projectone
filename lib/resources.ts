// ---------------------------------------------------------------------------
// Resource inventory: guides, insights and illustrative scenarios.
//
// Single source of truth so the /resources hub can show real topic counts and
// a real "browse by topic" row rather than decorative labels, and so each
// listing renders from the same shape.
//
// `topics` and `regions` are factual classifications of what the piece
// actually covers - they drive filtering and counts, so an inaccurate tag is a
// bug, not a cosmetic choice. `regions` is omitted where a piece is not
// region-specific.
// ---------------------------------------------------------------------------

export type Topic =
  | 'Bookkeeping'
  | 'Accounting'
  | 'Tax'
  | 'Payroll'
  | 'Accounts Payable'
  | 'Accounts Receivable'
  | 'Audit'
  | 'Technology'
  | 'Engagement models'
  | 'Cost'
  | 'CPA firms';

export type RegionTag = 'US' | 'UK' | 'AU';

export interface ResourceItem {
  title: string;
  href: string;
  description: string;
  topics: Topic[];
  regions?: RegionTag[];
  isNew?: boolean;
  featured?: boolean;
}

export const guides: ResourceItem[] = [
  {
    title: 'Outsourced Accounting Services: Month-End Close, Cost, GAAP vs IFRS, and QuickBooks to NetSuite',
    href: '/resources/guides/outsourced-accounting-services-guide',
    description: 'What accounting operations cover beyond bookkeeping and what it costs, how month-end close works in QBO, Xero, Sage, and NetSuite, and how US GAAP, UK FRS 102, and Australian AASB differ.',
    topics: ['Accounting', 'Cost', 'Technology'],
    regions: ['US', 'UK', 'AU'],
    isNew: true,
    featured: true,
  },
  {
    title: 'How to Outsource Accounting: A Step-by-Step Guide',
    href: '/resources/guides/how-to-outsource-accounting',
    description: 'A practical process for scoping tasks, choosing a provider, setting secure access, defining review checkpoints and transitioning into a steady monthly workflow.',
    topics: ['Accounting', 'Engagement models'],
    isNew: true,
  },
  {
    title: 'Staff Augmentation vs. Dedicated Team vs. Offshore Support vs. Back Office: How to Choose',
    href: '/resources/guides/choosing-an-engagement-model',
    description: 'What actually separates the four engagement models, a comparison table, and a decision framework for matching the model to your situation.',
    topics: ['Engagement models'],
    isNew: true,
  },
  {
    title: 'How to Choose an Accounting Outsourcing Partner',
    href: '/resources/guides/how-to-choose-accounting-outsourcing-partner',
    description: 'A decision framework covering scope, review structure, red flags and what a sound onboarding process should look like.',
    topics: ['Engagement models'],
    isNew: true,
  },
  {
    title: 'Client Accounting Services (CAS): A Guide for CPA Firms',
    href: '/resources/guides/client-accounting-services-cas-guide',
    description: 'What CAS actually includes, why production capacity is the usual bottleneck, and where outsourced back-office support fits without touching advisory work.',
    topics: ['CPA firms', 'Accounting'],
    isNew: true,
  },
  {
    title: 'Outsourced Payroll Processing: What It Actually Covers (US, UK & Australia)',
    href: '/resources/guides/outsourced-payroll-processing-guide',
    description: 'Per-jurisdiction payroll compliance, QuickBooks/Xero/Gusto workflows, realistic cost ranges, and the real questions employers ask before handing payroll to an offshore team.',
    topics: ['Payroll', 'Cost'],
    regions: ['US', 'UK', 'AU'],
    isNew: true,
  },
  {
    title: 'Outsourced Accounts Payable: How It Works in QuickBooks, Xero & NetSuite',
    href: '/resources/guides/outsourced-accounts-payable-guide',
    description: 'What the AP team handles vs. what stays with you, how approval workflows and fraud controls work, location-specific VAT/GST nuances, and realistic per-invoice costs.',
    topics: ['Accounts Payable', 'Technology', 'Cost'],
    regions: ['US', 'UK', 'AU'],
    isNew: true,
  },
  {
    title: 'Outsourced Accounts Receivable: DSO, Collections & Software Workflows (US, UK, AU)',
    href: '/resources/guides/outsourced-accounts-receivable-guide',
    description: 'How to measure the cash flow impact of outsourced AR, how collections follow-up works in QuickBooks and Xero, and the questions business owners ask before outsourcing receivables.',
    topics: ['Accounts Receivable', 'Technology'],
    regions: ['US', 'UK', 'AU'],
    isNew: true,
  },
  {
    title: '9 Questions to Ask Before Outsourcing Your Bookkeeping',
    href: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping',
    description: 'The real questions to ask before hiring — answered honestly, including the ones without a flattering answer.',
    topics: ['Bookkeeping', 'Engagement models'],
  },
  {
    title: 'Outsourced Bookkeeping Cost Guide for U.S. Businesses',
    href: '/resources/guides/outsourced-bookkeeping-cost-guide',
    description: 'What actually drives the price up or down, and how it compares to hiring in-house.',
    topics: ['Bookkeeping', 'Cost'],
    regions: ['US'],
  },
  {
    title: 'QuickBooks Online vs. Xero: Which Should Your Business Use?',
    href: '/resources/guides/quickbooks-vs-xero-comparison',
    description: 'A practical comparison of pricing, ease of use, and reporting to help you decide.',
    topics: ['Technology', 'Bookkeeping'],
  },
  {
    title: 'How CPA Firms Can Handle Tax-Season Capacity Without Overhiring',
    href: '/resources/guides/staff-augmentation-tax-season-guide',
    description: 'How firms add preparation capacity for the season without committing to headcount they have to justify keeping in May.',
    topics: ['CPA firms', 'Tax', 'Engagement models'],
    regions: ['US'],
  },
];

export const insights: ResourceItem[] = [
  {
    title: 'Sales Tax Nexus: What E-Commerce Sellers Need to Track',
    href: '/resources/insights/sales-tax-nexus-ecommerce-guide',
    description: 'Why growing into new states can quietly create new sales tax obligations.',
    topics: ['Tax'],
    regions: ['US'],
  },
  {
    title: 'ASC 606 Revenue Recognition for SaaS: A Quick Explainer',
    href: '/resources/insights/asc-606-revenue-recognition-saas',
    description: "Why subscription businesses can't just book cash received as revenue.",
    topics: ['Accounting'],
    regions: ['US'],
  },
];

export const articles: ResourceItem[] = [
  {
    title: 'Outsourced Bookkeeping: What to Expect, Software Workflows, and Red Flags',
    href: '/blog/outsourced-bookkeeping-guide',
    description: 'What day-to-day outsourced bookkeeping actually looks like, and the warning signs worth taking seriously.',
    topics: ['Bookkeeping', 'Technology'],
  },
  {
    title: 'Accounts Payable Outsourcing: Fraud Controls, Software Workflows, and Real Costs',
    href: '/blog/accounts-payable-outsourcing',
    description: 'How approval authority and payment controls should be structured when AP work moves outside.',
    topics: ['Accounts Payable', 'Cost'],
  },
  {
    title: 'Outsourcing Accounts Receivable: A Practical Guide for Business Owners',
    href: '/blog/accounts-receivable-management',
    description: 'Where receivables actually slip, and what a consistent collections routine changes.',
    topics: ['Accounts Receivable'],
  },
  {
    title: 'Outsourced Payroll: Costs, Bank-Access Red Flags, and What to Watch Out For',
    href: '/blog/outsourced-payroll-services',
    description: 'What a payroll provider should never need, and what to check before handing the process over.',
    topics: ['Payroll', 'Cost'],
  },
  {
    title: 'Outsourcing Tax Return Preparation: What CPA Firms and Businesses Need to Know',
    href: '/blog/tax-preparation-outsourcing',
    description: 'Where preparation ends and licensed judgment begins, and how the handoff should be structured.',
    topics: ['Tax', 'CPA firms'],
  },
  {
    title: 'Audit Support Outsourcing: What Preparation Work Can Be Delegated (and What Cannot)',
    href: '/blog/audit-support-services',
    description: 'The line between preparing an audit file and performing audit procedures.',
    topics: ['Audit'],
  },
];

/** Topics that actually have content behind them, with counts, most-covered first. */
export function topicIndex() {
  const all = [...guides, ...insights, ...articles];
  const counts = new Map<Topic, number>();
  for (const item of all) {
    for (const t of item.topics) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count || a.topic.localeCompare(b.topic));
}

/** Where a topic leads next on the commercial side. Only topics with a real destination. */
export const topicDestination: Partial<Record<Topic, string>> = {
  Bookkeeping: '/services/bookkeeping/united-states',
  Accounting: '/services/accounting/united-states',
  Tax: '/services/tax-preparation/united-states',
  Payroll: '/services/payroll/united-states',
  'Accounts Payable': '/services/accounts-payable/united-states',
  'Accounts Receivable': '/services/accounts-receivable/united-states',
  Audit: '/services/audit-support/united-states',
  Technology: '/technology',
  'CPA firms': '/industries/cpa-firms',
  'Engagement models': '/solutions',
};
