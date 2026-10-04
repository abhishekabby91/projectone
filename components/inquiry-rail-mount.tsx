'use client';

import { usePathname } from 'next/navigation';
import InquiryRail from '@/components/inquiry-rail';
import ScrollInquiryPrompt from '@/components/scroll-inquiry-prompt';
import { regions } from '@/lib/data';

const EXCLUDED: Record<string, string> = {
  '/contact': 'the page is the form',
  '/thank-you': 'conversion target — a second submission would double-count',
};

const SERVICE_NAMES: Record<string, string> = {
  bookkeeping: 'Bookkeeping',
  accounting: 'Accounting',
  'tax-preparation': 'Tax Preparation',
  payroll: 'Payroll',
  'accounts-payable': 'Accounts Payable',
  'accounts-receivable': 'Accounts Receivable',
  'audit-support': 'Audit Support',
};

type RegionSlug = (typeof regions)[number]['slug'];
const REGION_SLUGS = new Set<string>(regions.map((r) => r.slug));

function titleFor(segments: string[]): string {
  switch (segments[0]) {
    case 'services': return 'Talk Through Your Workload';
    case 'industries': return 'Talk Through Your Sector';
    case 'markets': return 'Talk Through Your Market';
    case 'solutions': return 'Which Model Fits You?';
    case 'technology': return 'Work Inside Your System';
    case 'company-registration': return 'Talk Through the Setup';
    case 'resources':
    case 'blog': return 'Questions on This?';
    default: return 'Ask Us About This Work';
  }
}

export default function InquiryRailMount() {
  const pathname = usePathname() ?? '/';
  if (pathname in EXCLUDED) return null;

  const segments = pathname.split('/').filter(Boolean);
  const service = segments[0] === 'services' ? SERVICE_NAMES[segments[1]] : undefined;
  const region = segments.find((s) => REGION_SLUGS.has(s)) as RegionSlug | undefined;
  const title = titleFor(segments);

  return (
    <>
      <InquiryRail
        key={`rail-${pathname}`}
        region={region}
        service={service}
        source={pathname}
        title={title}
      />
      <ScrollInquiryPrompt
        key={`bar-${pathname}`}
        title={title}
        lead="Tell us what is falling behind — the volume, the systems, the deadlines — and we will talk through what would actually change."
        source={pathname}
      />
    </>
  );
}
