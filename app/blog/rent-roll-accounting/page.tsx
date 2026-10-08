import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Rent Roll Accounting: What Property Managers Need to Know',
  description: 'How property managers can use rent roll data with the general ledger to review rental income, vacancies, tenant balances and property reporting.',
  path: '/blog/rent-roll-accounting',
});

export default function Page() {
  return (
    <ArticleLayout
      title="Rent Roll Accounting: What Property Managers Need to Know"
      category="Property Management"
      description="The rent roll is an operational record, but it also needs to agree with the accounting records behind rental income and tenant balances."
      publishedDate="2026-10-08"
      section="blog"
      slug="rent-roll-accounting"
    >
      <p>A rent roll normally shows units, tenants, lease information and scheduled rent. For accounting purposes, it is also an important reconciliation point: the rent activity shown in the rent roll should make sense alongside the tenant ledger, cash receipts and general ledger.</p>

      <h2>What should a rent roll tell you?</h2>
      <p>Depending on the system, a rent roll can show occupied and vacant units, scheduled rent, lease dates, tenant names and other property information. The exact fields vary, so the accounting team should first understand what the report actually represents before using it as an accounting control.</p>

      <h2>Rent roll versus general ledger</h2>
      <p>These reports answer different questions. The rent roll is generally property and lease oriented. The general ledger is accounting oriented. They should not be expected to match line for line, but the rental income and related tenant activity should have a reasonable relationship that can be explained.</p>

      <h2>What should be reconciled?</h2>
      <ul>
        <li>Scheduled rent versus actual charges</li>
        <li>Tenant payments versus bank receipts</li>
        <li>Tenant balances versus the receivables control account</li>
        <li>Credits and unapplied payments</li>
        <li>Vacancies and units with unusual activity</li>
        <li>Rent income posted to the correct property</li>
      </ul>

      <h2>Watch for timing differences</h2>
      <p>A rent roll and accounting report may differ because of timing, adjustments, concessions, move-ins, move-outs or other transactions. A difference is not automatically an error. The important part is being able to explain it and determine whether it requires correction.</p>

      <h2>How software affects the workflow</h2>
      <p>Property-management platforms can produce rent-roll and tenant reports directly, while accounting systems may hold the general ledger separately. If two systems are involved, define which report is authoritative for each piece of information and reconcile the handoff rather than comparing totals manually without context.</p>

      <h2>Monthly review</h2>
      <p>A practical monthly review starts with unusual changes: large rent variances, new vacancies, old tenant balances, unusual credits and significant adjustments. Those items are usually more useful than simply checking whether the total rent number changed.</p>

      <h2>Related guides</h2>
      <p>See <a href="/blog/property-management-accounting">property management accounting</a>, <a href="/blog/property-management-chart-of-accounts">the chart of accounts guide</a> and <a href="/blog/property-management-bank-reconciliation">bank reconciliation for property managers</a>.</p>
    </ArticleLayout>
  );
}
