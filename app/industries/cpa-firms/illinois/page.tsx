import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/illinois';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Outsourcing for Illinois CPA Firms',
  description: 'Accounting outsourcing for Illinois CPA firms covering distribution, manufacturing and service-business books, reconciliations and agreed support schedules.',
  path: PATH,
});

export default function IllinoisCpaFirmPage() {
  return <CpaFirmStatePage state="illinois" />;
}
