import type { Metadata } from 'next';
import CpaStateSupportPage from '@/components/cpa-state-support-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/illinois-inventory-accounting-support';

export const metadata: Metadata = generateMetadata({
  title: 'Illinois Inventory Accounting Support',
  description: 'Inventory and distribution accounting support for Illinois CPA firms, with reconciliations, movement schedules and documented exceptions for review.',
  path: PATH,
});

export default function StateSupportPage() {
  return <CpaStateSupportPage page="illinois-inventory-close" />;
}
