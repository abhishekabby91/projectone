import { Metadata } from 'next';
import ArticleLayout from '@/components/article-layout';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Rent Roll Accounting Explained',
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
      <p>A rent roll and accounting report may differ because of timing, adjustments, concessions, move-ins, move-outs or other transactions. A difference is not automatically an error. The important part is being able to explain it and determine whether it requires correction. For transaction-level charges, receipts and balances, use the <a href="/blog/property-management-tenant-ledger-reconciliation">tenant ledger reconciliation checklist</a>; a rent roll summarizes lease and occupancy details rather than replacing the tenant ledger.</p>
      <p>For unpaid balances grouped by age and the control-account checks behind them, see the <a href="/blog/property-management-receivables-aging">property management receivables aging reconciliation guide</a>. Aging and rent-roll reports answer different questions and should be reviewed together rather than treated as substitutes.</p>

      <h2>How software affects the workflow</h2>
      <p>Property-management platforms can produce rent-roll and tenant reports directly, while accounting systems may hold the general ledger separately. If two systems are involved, define which report is authoritative for each piece of information and reconcile the handoff rather than comparing totals manually without context.</p>

      <h2>Monthly review</h2>
      <p>A practical monthly review starts with unusual changes: large rent variances, new vacancies, old tenant balances, unusual credits and significant adjustments. Those items are usually more useful than simply checking whether the total rent number changed.</p>

      <h2>Common Questions</h2>
      <h3>Should the rent roll total match rental income in the general ledger?</h3>
      <p>Not line for line, and expecting it to is the most common source of wasted time here. A rent roll shows scheduled rent against leases; the general ledger shows what was charged and recognized, after concessions, mid-month move-ins, prorations, credits and adjustments. The useful test is whether the difference between the two can be itemized. A reconciliation that ends in a short list of named differences is complete; one that ends in a single unexplained figure is not.</p>
      <h3>Which report should an owner statement be built from?</h3>
      <p>From the reconciled accounting records, with the rent roll used to explain occupancy and lease detail alongside them. Building the statement from the rent roll means it reports what was expected rather than what happened, and the first vacancy or partial month puts it at odds with the bank. Where two systems are involved, deciding which one owns each figure before the statement is produced avoids reconciling the statement after it has already gone out.</p>
      <h3>How often should a rent roll be reconciled to the ledger?</h3>
      <p>Monthly, as part of the close rather than as a separate exercise. The detail needed to explain a difference — which unit, which lease change, which adjustment and who authorized it — is readily available in the month it arises and progressively harder to recover afterwards, which is why a quarterly or annual review of the same reports takes considerably longer for a worse result.</p>
      <h2>Related guides</h2>
      <p>See <a href="/blog/property-management-accounting">property management accounting</a>, <a href="/blog/property-management-chart-of-accounts">the chart of accounts guide</a> and <a href="/blog/property-management-bank-reconciliation">bank reconciliation for property managers</a>. The broader <a href="/industries/property-management">property management accounting and bookkeeping page</a> explains how these pieces fit into the full portfolio workflow.</p>
    </ArticleLayout>
  );
}
