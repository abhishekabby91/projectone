import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/california';

export const metadata: Metadata = generateMetadata({
  title: 'California CPA Firm Outsourcing',
  description: 'Accounting, bookkeeping and tax-preparation support for California CPA firms, scoped to your client files, software and review process.',
  path: PATH,
});

export default function CaliforniaCpaFirmPage() {
  return <CpaFirmStatePage state="california" />;
}
