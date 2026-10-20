import type { Metadata } from 'next';
import CpaStateSupportPage from '@/components/cpa-state-support-page';
import { generateMetadata } from '@/lib/seo';

const PATH = '/industries/cpa-firms/california-tax-workpaper-support';

export const metadata: Metadata = generateMetadata({
  title: 'California Tax Workpaper Support',
  description: 'Tax workpaper preparation support for California CPA firms, with organized source records, reconciliations, exception lists and reviewer handoff.',
  path: PATH,
});

export default function StateSupportPage() {
  return <CpaStateSupportPage page="california-tax-workpapers" />;
}
