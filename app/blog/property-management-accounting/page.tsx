import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Accounting: What Should Be Tracked?',
  description: 'A practical guide to property management accounting, including property-level income, expenses, owner reporting, tenant balances, deposits and monthly close.',
  path: '/blog/property-management-accounting',
});

export default function Page() {
  return (
    <ArticleLayout
      title="Property Management Accounting: What Should Be Tracked?"
      category="Property Management"
      description="Property management accounting has to connect the property, tenant, owner and management company views without losing the detail behind any of them."
      publishedDate="2026-10-08"
      section="blog"
      slug="property-management-accounting"
      inquiryTitle="Tell Us About Your Property Accounting Workflow"
      inquiryLead="Share what you manage, the software you use, and where the accounting process becomes difficult to keep up with."
    >
      <p>Property management accounting is not just recording rent and paying bills. The books usually need to show what happened at each property, what is owed by tenants, what belongs to owners, what the management company has earned, and what still needs to be reconciled.</p>

      <h2>What makes property management accounting different?</h2>
      <p>The accounting has several connected levels. A transaction may belong to a property and unit, affect a tenant ledger, change an owner statement, and also flow into the management company's own accounting. If those relationships are not kept clear, the books can look correct at the company level while an owner statement or property report is wrong.</p>

      <h2>What should be tracked?</h2>
      <ul>
        <li><strong>Rental income:</strong> rent, late charges and other tenant-related income should be posted to the correct property or unit.</li>
        <li><strong>Property expenses:</strong> repairs, utilities, maintenance, insurance and other costs should be coded consistently.</li>
        <li><strong>Tenant balances:</strong> charges, payments, credits and unapplied amounts need to agree with the tenant ledger.</li>
        <li><strong>Security deposits:</strong> deposits should remain distinguishable from ordinary operating cash and be recorded according to the applicable arrangement.</li>
        <li><strong>Owner activity:</strong> owner contributions, distributions, reserves and statement activity need supporting records.</li>
        <li><strong>Management fees:</strong> fees charged by the management company should reconcile with the underlying management agreement and owner reporting.</li>
        <li><strong>Bank activity:</strong> property and trust-related accounts need regular reconciliation.</li>
      </ul>

      <h2>Property-level accounting comes first</h2>
      <p>A portfolio report is only as reliable as the property-level records underneath it. Before reviewing a portfolio total, the accounting team should be able to explain the income, major expenses, receivables and cash activity for each property.</p>

      <h2>Owner statements need their own review</h2>
      <p>An owner statement is not simply a copy of a general ledger report. It normally needs to reflect the agreed income and expense presentation, management fees, owner reserves, distributions and any other items relevant to that owner. A reconciliation before statements are released can catch problems that a basic trial balance will not.</p>

      <h2>Where software fits</h2>
      <p>Platforms such as Yardi, AppFolio, QuickBooks and other property-management systems can organize a large amount of the transaction detail. The software does not remove the need for accounting review. The team still needs to know which system is the source of truth for tenant balances, property expenses, owner reporting and the general ledger.</p>

      <h2>A practical monthly close</h2>
      <p>A useful close usually includes bank reconciliations, tenant receivables, outstanding payables, owner balances, management fees, property-level income and expenses, and review of unusual transactions. The final reports should be supported by reconciliations rather than produced first and explained later.</p>

      <h2>Related property management guides</h2>
      <p>Continue with the <a href="/blog/property-management-bookkeeping-vs-accounting">difference between property management bookkeeping and accounting</a>, <a href="/blog/property-management-chart-of-accounts">property management chart of accounts</a> and <a href="/blog/rent-roll-accounting">rent roll accounting</a>. The broader <a href="/industries/property-management">property management accounting and bookkeeping page</a> explains how these pieces fit into the full portfolio workflow.</p>
    </ArticleLayout>
  );
}
