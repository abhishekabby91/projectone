import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import Reveal from '@/components/reveal';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting & Bookkeeping Knowledge Base',
  description:
    'Practical guides on bookkeeping, tax, real estate accounting, property management, QuickBooks, Yardi and outsourced accounting workflows for firms in the US, UK and Australia.',
  path: '/blog',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Blog', url: `${baseUrl}/blog` },
]);

const articles = [
  {
    href: '/blog/hoa-accounting-month-end-checklist',
    title: 'HOA Accounting Month-End Checklist: What Should Be Reviewed?',
    description: 'A practical monthly close checklist covering assessments, bank reconciliations, payables, reserves, delinquency and board reporting.',
    tag: 'HOA Accounting',
    readTime: '8 min read',
  },
  {
    href: '/blog/hoa-financial-statements-board-review',
    title: 'HOA Financial Statements: What Should Board Members Review?',
    description: 'A plain-English guide to the balance sheet, income statement, budget-to-actual, receivables and reserve activity.',
    tag: 'HOA Accounting',
    readTime: '8 min read',
  },
  {
    href: '/blog/hoa-assessment-accounting',
    title: 'HOA Assessment Accounting: How Homeowner Ledgers Should Work',
    description: 'How assessment charges, homeowner payments, credits, unapplied cash and delinquency reporting fit together.',
    tag: 'HOA Accounting',
    readTime: '7 min read',
  },
  {
    href: '/blog/yardi-accounting-workflow',
    title: 'Yardi Accounting Workflow: What Property Managers Actually Need to Get Right',
    description:
      'A practical walkthrough of rent posting, AP, AR, bank reconciliations, month-end close and owner reporting in a Yardi-managed property portfolio.',
    tag: 'Yardi Accounting',
    readTime: '9 min read',
  },
  {
    href: '/blog/real-estate-accounting-month-end-close',
    title: 'Real Estate Accounting Month-End Close: A Practical Checklist',
    description:
      'The recurring checks behind a cleaner property-accounting close: cash, tenant receivables, AP, accruals, property coding and owner reporting.',
    tag: 'Real Estate Accounting',
    readTime: '8 min read',
  },
  {
    href: '/blog/quickbooks-month-end-close-checklist',
    title: 'QuickBooks Month-End Close Checklist: What to Review Before You Call It Closed',
    description:
      'A practical QuickBooks Online review sequence covering reconciliations, AR, AP, adjustments, financial statements and closed-period controls.',
    tag: 'QuickBooks',
    readTime: '8 min read',
  },
  {
    href: '/blog/outsourced-bookkeeping-guide',
    title: 'Outsourced Bookkeeping: What to Expect, Software Workflows, and Red Flags to Watch For',
    description:
      "What outsourced bookkeeping looks like day to day in QuickBooks and Xero, and the warning signs it isn't working. What Reddit gets right (and wrong) about offshore bookkeeping.",
    tag: 'Bookkeeping',
    readTime: '12 min read',
  },
  {
    href: '/blog/accounts-payable-outsourcing',
    title: 'Accounts Payable Outsourcing: Fraud Controls, Software Workflows, and Real Costs',
    description:
      'The fraud controls every outsourced AP setup needs, software workflows (NetSuite, QuickBooks, Xero), and what businesses in the US, UK, and Australia actually pay.',
    tag: 'Accounts Payable',
    readTime: '10 min read',
  },
  {
    href: '/blog/accounts-receivable-management',
    title: 'Outsourcing Accounts Receivable: A Practical Guide for Business Owners',
    description:
      'How AR outsourcing works, what gets collected faster (and why), invoicing software considerations, and real-world questions from small business owners and CPA firms.',
    tag: 'Accounts Receivable',
    readTime: '10 min read',
  },
  {
    href: '/blog/outsourced-payroll-services',
    title: 'Outsourced Payroll: Costs, Bank-Access Red Flags, and What to Watch Out For',
    description:
      'What outsourced payroll costs by employee count in the US, UK, and Australia, the bank-access line that should never move, and what Reddit payroll threads get wrong.',
    tag: 'Payroll',
    readTime: '11 min read',
  },
  {
    href: '/blog/tax-preparation-outsourcing',
    title: 'Outsourcing Tax Return Preparation: What CPA Firms and Businesses Need to Know',
    description:
      'How CPA firms use offshore tax preparation support, what can be prepared vs. what requires a licensed CPA or EA, Drake Tax and CCH Axcess workflow specifics, and season-capacity planning.',
    tag: 'Tax Preparation',
    readTime: '11 min read',
  },
  {
    href: '/blog/audit-support-services',
    title: 'Audit Support Outsourcing: What Preparation Work Can Be Delegated (and What Cannot)',
    description:
      'Working papers, evidence organization, schedule preparation — what audit support firms actually outsource. UK FRC, US GAAS, and Australian AUASB requirements explained.',
    tag: 'Audit Support',
    readTime: '10 min read',
  },
];

export default function BlogPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 bg-primary dot-grid-dark">
        <Reveal className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <>
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-white/70">
              <span className="w-4 h-px bg-white/40" aria-hidden="true" />Knowledge Base
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance leading-tight">
              Accounting & Bookkeeping Guides
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Practical answers to real questions — pricing, software, what to outsource, what to keep in-house, and how it works across the US, UK, and Australia.
            </p>
          </>
        </Reveal>
      </section>

      <section className="w-full py-8 md:py-10 px-6 md:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-primary font-medium">Blog</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {articles.map((article) => (
              <Reveal key={article.href}>
                <Link
                  href={article.href}
                  className="group block h-full p-7 bg-white rounded-2xl border border-border/70 hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide">
                      {article.tag}
                    </span>
                    <span className="text-xs text-muted">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-primary leading-snug mb-3 group-hover:text-primary-light transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted leading-6">{article.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-200">
                    Read article
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <InquirySection
        compact
        source="/blog"
        title="Reading Up Before You Decide?"
        lead="If one of these pieces describes your situation, skip ahead and put it to us directly. The consultation and the call are free."
      />

      <CTABanner
        title="Looking for Region-Specific Services?"
        description="Browse our US, UK, and Australia service pages for country-specific bookkeeping, tax preparation, and audit support."
        cta={{ text: 'View Services', href: '/services' }}
        ctaSecondary={{ text: 'Contact Us', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
