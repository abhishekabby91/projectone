import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/texas';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Outsourcing for Texas CPA Firms',
  description: 'Outsourcing support for Texas CPA firms covering bookkeeping, contractor and multi-location records, reconciliations and agreed tax workpapers.',
  path: PATH,
});

export default function TexasCpaFirmPage() {
  return <CpaFirmStatePage state="texas" />;
}
