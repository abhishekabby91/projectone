import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/california';

export const metadata: Metadata = generateMetadata({
  title: 'California CPA Firm Accounting Outsourcing',
  description: 'Accounting outsourcing for California CPA firms: bookkeeping, reconciliations, month-end schedules and tax workpapers prepared for your review process.',
  path: PATH,
});

export default function CaliforniaCpaFirmPage() {
  return <CpaFirmStatePage state="california" />;
}
