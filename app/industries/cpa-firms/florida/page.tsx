import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/florida';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Outsourcing for Florida CPA Firms',
  description: 'Accounting outsourcing for Florida CPA firms handling property-related books, seasonal business records, reconciliations and reviewer-ready schedules.',
  path: PATH,
});

export default function FloridaCpaFirmPage() {
  return <CpaFirmStatePage state="florida" />;
}
