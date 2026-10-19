import type { Metadata } from 'next';
import CpaFirmStatePage from '@/components/cpa-firm-state-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/new-york';

export const metadata: Metadata = generateMetadata({
  title: 'Accounting Outsourcing for New York CPA Firms',
  description: 'Accounting outsourcing for New York CPA firms covering multi-entity books, intercompany schedules, reconciliations and tax workpapers for CPA review.',
  path: PATH,
});

export default function NewYorkCpaFirmPage() {
  return <CpaFirmStatePage state="new-york" />;
}
