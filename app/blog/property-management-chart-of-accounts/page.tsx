import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Property Management Chart of Accounts: Example',
  description: 'See a property management chart of accounts example for rental income, property expenses, tenant deposits, receivables, owner activity and separate entities.',
  path: '/blog/property-management-chart-of-accounts',
});

const faqs = [
  {
    question: 'How should a property management chart of accounts be structured?',
    answer:
      'Around the reports that owners, managers and the accounting team actually need each month. If the owner statement needs property-level income and expense categories, the chart should produce that presentation rather than leaving someone to rebuild it in a spreadsheet. The specific structure depends on the portfolio and the software, but it should answer what happened, where it happened and who the activity belongs to.',
  },
  {
    question: 'Should every property get its own general-ledger accounts?',
    answer:
      'Usually not. Most systems can track a property through classes, locations, dimensions or property records, and creating separate accounts per property makes the chart hard to maintain. Which approach is better depends on the platform and the reports the business needs.',
  },
  {
    question: 'How should a chart of accounts handle multiple ownership LLCs?',
    answer:
      'Design the reporting around the legal entity boundaries as well as the property view, usually by keeping consistent account definitions across entities and separating entities and properties through the system\'s own dimensions or ledgers. Intercompany balances, shared costs, management fees, owner contributions, debt and distributions each need documented treatment matching the ownership structure, and balances should not be netted across entities to make a portfolio report look tidier.',
  },
  {
    question: 'Where should tenant and security-deposit detail live?',
    answer:
      'In the tenant records, which normally carry more detail than the general ledger needs. The accounting structure should let the general ledger reconcile to those detailed records rather than forcing every tenant transaction into its own general-ledger account.',
  },
  {
    question: 'How should management fees be recorded?',
    answer:
      'So the calculation and the posting can be traced. Where the management company earns fees from the properties it manages, the amount recorded in the management company\'s books should agree with the underlying property or owner reporting, and the basis of the calculation should be evident from the records rather than reconstructed.',
  },
];

export default function Page() {
  return (
    <ArticleLayout
      faqs={faqs}
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

      <h2>Property Management Chart of Accounts Example</h2>
      <p>These sample ranges show a possible structure, not a universal template. Keep the chart aligned with the reporting required for each property-owning entity and the management company; account numbering and presentation should match the client's accounting policy and software.</p>
      <table><thead><tr><th>Illustrative range</th><th>Account group</th><th>Possible accounts</th><th>What to check</th></tr></thead><tbody>
        <tr><td>1000–1999</td><td>Assets</td><td>Operating cash, property cash where applicable, tenant/owner receivables, prepaid expenses</td><td>Bank and subsidiary ledgers reconcile by entity</td></tr>
        <tr><td>2000–2999</td><td>Liabilities</td><td>Vendor payables, accrued expenses, security deposits payable, prepaid rent where applicable</td><td>Tenant funds and unpaid obligations remain correctly classified</td></tr>
        <tr><td>3000–3999</td><td>Equity / owner balances</td><td>Capital contributions, distributions and retained balances as appropriate to the entity</td><td>Owner activity is traceable and not treated as an operating expense by default</td></tr>
        <tr><td>4000–4999</td><td>Property income</td><td>Rent, late fees, recoveries and other property-level income</td><td>Income ties to rent rolls and collection records</td></tr>
        <tr><td>5000–5999</td><td>Property expenses</td><td>Repairs, maintenance, insurance, taxes, utilities and management fees</td><td>Costs are categorized consistently for owner statements and budget review</td></tr>
        <tr><td>Separate management-company ledger</td><td>Management company activity</td><td>Management fee revenue, payroll and corporate operating costs</td><td>Do not mix the management company's books with property-owner entity books</td></tr>
      </tbody></table>
      <p>For a multi-entity portfolio, use the system's entity, property, class or dimension features where they fit the reporting need. Due-to/due-from balances and shared-cost allocations should be supported and reviewed rather than netted across entities to simplify a report.</p>

      <h2>Do not create an account for every property automatically</h2>
      <p>Many systems can track a property through classes, locations, dimensions or property records. Creating separate general-ledger accounts for every property can make the chart difficult to maintain. The better structure depends on the platform and the reports the business needs.</p>

      <h2>Multi-entity portfolios and separate LLCs</h2>
      <p>When a portfolio includes several ownership LLCs, design the reporting around the legal entity boundaries as well as the property-level view. A common approach is to maintain consistent account definitions across entities while tracking each entity and property through the system's available dimensions or ledgers. This supports comparable reporting without assuming that every property needs a separate general-ledger account.</p>
      <p>Intercompany balances, shared costs, management fees, owner contributions, debt and distributions need documented treatment that matches the ownership structure and accounting policy. Do not net balances across entities simply to make a portfolio report look cleaner. Confirm whether a transaction belongs to the property-owning entity, the management company or another related entity, and retain support for allocations and intercompany entries.</p>
      <p>Before adopting a template, confirm how the software handles entity-level cash, consolidated reporting, due-to/due-from balances and period close. There is no single chart of accounts that fits every multifamily holding company; the chart should follow the reporting requirements and be reviewed with the client's CPA or accounting lead.</p>

      <h2>Keep tenant and deposit detail where it belongs</h2>
      <p>Tenant ledgers often need more detail than the general ledger. The accounting structure should let the general ledger reconcile to the detailed tenant records without trying to force every tenant transaction into a separate general-ledger account.</p>

      <h2>Management fees need a clear trail</h2>
      <p>If the management company earns fees from managed properties, the fee calculation and posting should be easy to trace. The amount recorded in the management company's books should agree with the underlying property or owner reporting.</p>

      <h2>Review the chart periodically</h2>
      <p>Old duplicate accounts, inconsistent expense categories and accounts that are no longer used can make reporting harder. A periodic review is useful, especially after acquiring a new portfolio or changing accounting software.</p>

      <h2>Related guides</h2>
      <p>See <a href="/blog/property-management-accounting">property management accounting</a>, <a href="/blog/property-management-bookkeeping-vs-accounting">bookkeeping vs. accounting</a> and <a href="/blog/rent-roll-accounting">rent roll accounting</a>. The broader <a href="/industries/property-management">property management accounting and bookkeeping page</a> explains how these pieces fit into the full portfolio workflow.</p>
    </ArticleLayout>
  );
}
