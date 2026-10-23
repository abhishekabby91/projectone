import type { Metadata } from 'next';
import CpaStateSupportPage from '@/components/cpa-state-support-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/florida-property-entity-accounting-support';

export const metadata: Metadata = generateMetadata({
  title: 'Florida Property-Entity Accounting Outsourcing',
  description: 'Property-entity accounting outsourcing for Florida CPA firms, with reconciliations, entity schedules and year-end workpapers prepared for CPA review.',
  path: PATH,
});

export default function StateSupportPage() {
  return <CpaStateSupportPage page="florida-property-entities" />;
}
