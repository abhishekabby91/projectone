import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/florida';

export const metadata: Metadata = generateMetadata({
  title: 'Florida CPA Firm Outsourcing',
  description: 'Accounting, bookkeeping and tax-preparation support for Florida CPA firms, scoped to your client files, software and review process.',
  path: PATH,
});

export default function FloridaCpaFirmPage() {
  return <CpaFirmStatePage state="florida" />;
}
