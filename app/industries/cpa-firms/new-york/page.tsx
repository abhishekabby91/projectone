import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/new-york';

export const metadata: Metadata = generateMetadata({
  title: 'New York CPA Firm Outsourcing',
  description: 'Accounting, bookkeeping and tax-preparation support for New York CPA firms, scoped to your client files, software and review process.',
  path: PATH,
});

export default function NewYorkCpaFirmPage() {
  return <CpaFirmStatePage state="new-york" />;
}
