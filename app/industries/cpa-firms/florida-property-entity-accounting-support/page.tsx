import type { Metadata } from 'next';
import CpaStateSupportPage from '@/components/cpa-state-support-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/florida-property-entity-accounting-support';

export const metadata: Metadata = generateMetadata({
  title: 'Florida Property-Entity Accounting',
  description: 'Property-entity accounting support for Florida CPA firms, including reconciliations, entity-level schedules and organized year-end workpapers for review.',
  path: PATH,
});

export default function StateSupportPage() {
  return <CpaStateSupportPage page="florida-property-entities" />;
}
