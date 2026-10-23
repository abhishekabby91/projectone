import type { Metadata } from 'next';
import CpaStateSupportPage from '@/components/cpa-state-support-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/new-york-multi-entity-accounting-support';

export const metadata: Metadata = generateMetadata({
  title: 'New York Multi-Entity Accounting Outsourcing',
  description: 'Multi-entity accounting outsourcing for New York CPA firms, with intercompany schedules, reconciliations and source records prepared for CPA review.',
  path: PATH,
});

export default function StateSupportPage() {
  return <CpaStateSupportPage page="new-york-multi-entity" />;
}
