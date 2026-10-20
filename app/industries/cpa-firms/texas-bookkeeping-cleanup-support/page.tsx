import type { Metadata } from 'next';
import CpaStateSupportPage from '@/components/cpa-state-support-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/texas-bookkeeping-cleanup-support';

export const metadata: Metadata = generateMetadata({
  title: 'Texas Bookkeeping Cleanup Support',
  description: 'Bookkeeping cleanup support for Texas CPA firms before tax preparation, with account reconciliations, open-item schedules and documented review handoffs.',
  path: PATH,
});

export default function StateSupportPage() {
  return <CpaStateSupportPage page="texas-bookkeeping-cleanup" />;
}
