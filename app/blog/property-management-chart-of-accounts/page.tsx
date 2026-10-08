import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Chart of Accounts: How Should It Be Set Up?',
  description: 'A practical property management chart of accounts guide covering property income, expenses, owner activity, tenant balances, deposits and management fees.',
  path: '/blog/property-management-chart-of-accounts',
});

export default function Page() {
  return (
    <ArticleLayout
      title="Property Management Chart of Accounts: How Should It Be Set Up?"
      category="Property Management"
      description="A useful chart of accounts should make property-level reporting easier without creating hundreds of accounts that nobody maintains consistently."
      publishedDate="2026-10-08"
      section="blog"
      slug="property-management-chart-of-accounts"
    >
      <p>A property management chart of accounts should make it easy to answer three questions: what happened, where did it happen, and who does the activity belong to? The exact account structure depends on the portfolio and software, but the basic logic should remain consistent.</p>

      <h2>Start with the reporting you actually need</h2>
      <p>Before creating accounts, identify the reports that owners, managers and the accounting team need each month. If the owner statement requires property-level income and expense categories, the chart of accounts should support that presentation instead of forcing someone to rebuild it in a spreadsheet later.</p>

      <h2>Common account groups</h2>
      <table><thead><tr><th>Area</th><th>Examples</th></tr></thead><tbody>
        <tr><td>Income</td><td>Rent, late fees, application fees, recoveries and other property income</td></tr>
        <tr><td>Property expenses</td><td>Repairs, maintenance, utilities, insurance, taxes and management fees</td></tr>
        <tr><td>Receivables</td><td>Tenant balances, owner balances and other amounts due</td></tr>
        <tr><td>Liabilities</td><td>Security deposits, accrued items and other amounts owed</td></tr>
        <tr><td>Cash</td><td>Operating, property, trust or other accounts used in the workflow</td></tr>
        <tr><td>Owner activity</td><td>Owner contributions, distributions and reserve-related balances where applicable</td></tr>
      </tbody></table>

      <h2>Do not create an account for every property automatically</h2>
      <p>Many systems can track a property through classes, locations, dimensions or property records. Creating separate general-ledger accounts for every property can make the chart difficult to maintain. The better structure depends on the platform and the reports the business needs.</p>

      <h2>Keep tenant and deposit detail where it belongs</h2>
      <p>Tenant ledgers often need more detail than the general ledger. The accounting structure should let the general ledger reconcile to the detailed tenant records without trying to force every tenant transaction into a separate general-ledger account.</p>

      <h2>Management fees need a clear trail</h2>
      <p>If the management company earns fees from managed properties, the fee calculation and posting should be easy to trace. The amount recorded in the management company's books should agree with the underlying property or owner reporting.</p>

      <h2>Review the chart periodically</h2>
      <p>Old duplicate accounts, inconsistent expense categories and accounts that are no longer used can make reporting harder. A periodic review is useful, especially after acquiring a new portfolio or changing accounting software.</p>

      <h2>Related guides</h2>
      <p>See <a href="/blog/property-management-accounting">property management accounting</a>, <a href="/blog/property-management-bookkeeping-vs-accounting">bookkeeping vs. accounting</a> and <a href="/blog/rent-roll-accounting">rent roll accounting</a>.</p>
    </ArticleLayout>
  );
}
