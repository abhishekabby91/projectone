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
  { href: '/blog/hoa-chart-of-accounts', title: 'HOA Chart of Accounts: How Should It Be Set Up?', description: 'A practical guide to structuring accounts for assessments, operating expenses, reserves, receivables, payables and board reporting.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-bookkeeping-vs-accounting', title: 'HOA Bookkeeping vs. HOA Accounting: What’s the Difference?', description: 'A clear explanation of recurring bookkeeping, reconciliation, review and financial reporting for associations.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-accounting-mistakes', title: 'Common HOA Accounting Mistakes and How to Avoid Them', description: 'Common problems involving bank reconciliations, homeowner balances, reserves, payables and monthly reporting.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-accounting-controls', title: 'HOA Accounting Controls Every Board Should Have', description: 'Practical controls for cash, assessments, vendor payments, reserves, system access and monthly review.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-reserve-accounting', title: 'HOA Reserve Accounting: What Should Boards Track?', description: 'A practical guide to reserve contributions, transfers, reserve-funded expenses, reconciliations and reporting.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-operating-vs-reserve-funds', title: 'HOA Operating Funds vs. Reserve Funds: What’s the Difference?', description: 'Understand how operating and reserve activity differs and how the distinction should appear in monthly reporting.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-bank-reconciliation', title: 'HOA Bank Reconciliation: A Practical Monthly Process', description: 'A step-by-step HOA reconciliation process for operating and reserve accounts, outstanding items and transfers.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-delinquency-accounting', title: 'HOA Delinquency Accounting: How to Track Past-Due Assessments', description: 'How accurate homeowner ledgers, payment application, credits and receivables reconciliation support better delinquency reporting.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-reserve-reconciliation', title: 'HOA Reserve Reconciliation: What Should Be Reviewed?', description: 'A practical process for reconciling reserve cash, contributions, transfers and reserve-funded spending.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-reserve-financial-reporting', title: 'HOA Reserve Financial Reporting: What Should Boards See?', description: 'What useful HOA reserve reports should show about contributions, spending, cash and projects.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-accounts-payable', title: 'HOA Accounts Payable: How Should Vendor Bills Be Reviewed?', description: 'A practical HOA AP process for invoice coding, approvals, duplicate checks and payments.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-vendor-expense-tracking', title: 'How to Track HOA Vendor and Maintenance Expenses', description: 'How to organize vendor and maintenance expenses for clearer HOA monthly reporting.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-year-end-accounting', title: 'HOA Year-End Accounting: How to Prepare the Books for the CPA', description: 'A practical year-end process covering reconciliations, receivables, payables, reserves and CPA support.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-year-end-checklist', title: 'HOA Year-End Accounting Checklist', description: 'A practical checklist for getting HOA cash, receivables, payables, reserves and supporting records ready for review.', tag: 'HOA Accounting', readTime: '6 min read' },
  { href: '/blog/hoa-assessment-accounting', title: 'HOA Assessment Accounting: How Homeowner Ledgers Should Work', description: 'How HOA assessment accounting connects scheduled charges, homeowner payments, credits, unapplied cash and receivables.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-homeowner-ledgers', title: 'HOA Homeowner Ledgers: How Should Assessment Balances Be Kept Accurate?', description: 'How homeowner ledgers connect assessment charges, payments, credits, unapplied cash and the general ledger.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-assessment-receivables-reconciliation', title: 'HOA Assessment Receivables Reconciliation: What Should Be Checked?', description: 'A practical process for reconciling homeowner balances, payment applications, unapplied cash and the receivables control account.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-budget-to-actual-reports', title: 'HOA Budget-to-Actual Reports: What Should Board Members Review?', description: 'How boards can use budget-to-actual reports to understand meaningful income and expense variances.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-board-financial-package', title: 'HOA Board Financial Package: What Should Be Included Each Month?', description: 'A practical monthly package covering financial statements, budget variances, assessments, reserves, AP and open items.', tag: 'HOA Accounting', readTime: '8 min read' },
  { href: '/blog/hoa-reserve-expenses', title: 'HOA Reserve Expenses: How Should Reserve-Funded Costs Be Tracked?', description: 'How to connect reserve projects, vendor invoices, payments and reserve reporting.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-vendor-1099-tracking', title: 'HOA Vendor 1099 Tracking: What Should the Accounting Team Record?', description: 'How to keep vendor records and payment detail organized for year-end tax review.', tag: 'HOA Accounting', readTime: '7 min read' },
  { href: '/blog/hoa-accounting-quickbooks', title: 'HOA Accounting in QuickBooks: What Should Be Set Up and Reviewed?', description: 'How to structure QuickBooks around assessments, homeowner balances, operating funds, reserves, AP and reconciliations.', tag: 'HOA Software', readTime: '7 min read' },
  { href: '/blog/hoa-quickbooks-online', title: 'QuickBooks Online for HOA Accounting: What Should Be Tracked?', description: 'A practical guide to organizing an HOA QuickBooks Online file and deciding what detail belongs elsewhere.', tag: 'HOA Software', readTime: '7 min read' },
  { href: '/blog/hoa-accounting-appfolio', title: 'HOA Accounting with AppFolio: What Should Be Reviewed Each Month?', description: 'How to review homeowner activity, cash, AP, reserves and board reporting in an AppFolio-based workflow.', tag: 'HOA Software', readTime: '7 min read' },
  { href: '/blog/hoa-accounting-yardi', title: 'HOA Accounting with Yardi: What Should Be Reviewed Each Month?', description: 'A practical monthly accounting workflow for HOA teams using Yardi or a related property-management stack.', tag: 'HOA Software', readTime: '7 min read' },
  { href: '/blog/how-to-outsource-hoa-accounting', title: 'How to Outsource HOA Bookkeeping and Accounting: What Should You Set Up First?', description: 'A practical guide to defining scope, software access, controls, monthly close and board reporting before outsourcing HOA accounting.', tag: 'HOA Outsourcing', readTime: '8 min read' },
  { href: '/blog/hoa-accounting-outsourcing-vs-in-house', title: 'HOA Accounting Outsourcing vs. Hiring In-House: What Should an Association Consider?', description: 'Compare in-house and outsourced HOA accounting by workload, controls, software, continuity and reporting.', tag: 'HOA Outsourcing', readTime: '8 min read' },
  { href: '/blog/hoa-accounting-eunify', title: 'HOA Accounting with eUnify: What Should Be Reviewed?', description: 'A practical eUnify accounting workflow covering the general ledger, homeowner balances, AP, banking, reporting and QuickBooks integration.', tag: 'HOA Software', readTime: '8 min read' },
  { href: '/blog/eunify-quickbooks-hoa-accounting', title: 'eUnify and QuickBooks for HOA Accounting: What Should Be Reconciled?', description: 'How to define system ownership and reconcile homeowner, payment and accounting data between eUnify and QuickBooks.', tag: 'HOA Software', readTime: '7 min read' },
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
            <h1 className="text-4xl md:text-6xl font-bold text-white text-balance leading-tight">Accounting & Bookkeeping Guides</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Practical answers to real questions about accounting, bookkeeping, software, outsourcing and day-to-day workflows.
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
                <Link href={article.href} className="group block h-full p-7 bg-white rounded-2xl border border-border/70 hover:border-primary/20 hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wide">{article.tag}</span>
                    <span className="text-xs text-muted">{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-primary leading-snug mb-3 group-hover:text-primary-light transition-colors">{article.title}</h2>
                  <p className="text-sm text-muted leading-6">{article.description}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all duration-200">Read article <span aria-hidden="true">→</span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <InquirySection compact source="/blog" title="Reading Up Before You Decide?" lead="If one of these pieces describes your situation, skip ahead and put it to us directly. The consultation and the call are free." />
      <CTABanner title="Looking for Region-Specific Services?" description="Browse our US, UK, and Australia service pages for country-specific bookkeeping, tax preparation, and audit support." cta={{ text: 'View Services', href: '/services' }} ctaSecondary={{ text: 'Contact Us', href: '/contact' }} background="primary" />
    </main>
  );
}
