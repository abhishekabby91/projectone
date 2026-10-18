import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/illinois';

export const metadata: Metadata = generateMetadata({
  title: 'Illinois CPA Firm Outsourcing',
  description: 'Accounting, bookkeeping and tax-preparation support for Illinois CPA firms, scoped to your client files, software and review process.',
  path: PATH,
});

export default function IllinoisCpaFirmPage() {
  return <CpaFirmStatePage state="illinois" />;
}
