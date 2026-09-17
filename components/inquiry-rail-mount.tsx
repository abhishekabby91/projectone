'use client';

import { usePathname } from 'next/navigation';
import InquiryRail from '@/components/inquiry-rail';
import ScrollInquiryPrompt from '@/components/scroll-inquiry-prompt';
import { regions } from '@/lib/data';

/**
 * Mounts the two persistent enquiry affordances once, for the whole site: the
 * right-edge rail at `lg` and up, and the slim bottom bar below it.
 *
 * **They are one system split by width, not two features.** The rail is hidden
 * below 1280px because the content column already fills the viewport there, so
 * until 2026-09-16 a phone had nothing persistent at all — only the band at the
 * very bottom of the page, which only a finisher reaches. The bar covers that
 * width, and the two never appear together.
 *
 * `ScrollInquiryPrompt` used to render a desktop corner card as well, and it
 * had to go: once the rail went sitewide the card overlapped it at **1440px and
 * 1990px**, measured, putting two forms on one screen. At `lg` and up the rail
 * is the affordance; below it, the bar. Do not reintroduce a desktop half.
 *
 * **The bar's trigger rules are a ranking guard and none of them is optional.**
 * Google treats interstitials that obscure content shortly after arrival from
 * search as a negative mobile signal, so the bar needs 8s dwell AND 45% scroll
 * together, never covers the content (it is a slim bar, not a sheet), is
 * trivially dismissible with a 30-day memory, stands down for the `#inquiry`
 * band, and will not fire while the cookie banner is up. It renders nothing on
 * the server, so it cannot touch indexed content or near-duplicate scores.
 *
 * **Why one mount instead of a prop on every page.** The rail shipped on the 21
 * Service x Region pages and nowhere else, because each of those files rendered
 * it by hand. That is 21 files to remember and ~70 pages that silently never
 * got it — and a new page would have shipped without it every time. Mounting it
 * in the layout inverts that: every route has it by default and the exceptions
 * are listed here, in one place, with the reason next to them.
 *
 * **It also moves the rail out of `<main>`, which is where it belongs.** On the
 * 21 pages it was the first child of `main`, so its heading and field labels
 * counted as page content — on 21 pages with identical copy. Rendered from the
 * layout it sits outside `main` as the site chrome it actually is, alongside
 * the header and the cookie banner. That is why putting it on ~70 more pages
 * does not repeat the near-duplicate problem the inquiry band caused in
 * 2026-09-03: the text is no longer inside the measured region at all.
 *
 * **Region and service are derived from the path** rather than passed, so the
 * form still arrives pre-labelled ("Practice name" in the UK) and pre-selected
 * on a service page, with nothing to keep in sync.
 *
 * Everything else about the rail is unchanged and documented in
 * `components/inquiry-rail.tsx`: hidden below 1280px, expanded by default only
 * at >=1960px, and it stands down whenever the `#inquiry` band is on screen.
 */

/** Routes that must not carry the rail, and why. */
const EXCLUDED: Record<string, string> = {
  // The page is a form. A second one beside it is noise, not an offer.
  '/contact': 'the page is the form',
  // A conversion target. GA4 fires `generate_lead` on mount here, so a form on
  // this page lets somebody who has just submitted submit again and count the
  // conversion twice — and the rail's own success path redirects back here,
  // which would make that a loop. See CLAUDE.md, "/thank-you is a conversion
  // target".
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

/** Short, and specific to where the reader is. Keep under ~30 characters. */
function titleFor(segments: string[]): string {
  switch (segments[0]) {
    case 'services':
      return 'Talk Through Your Workload';
    case 'industries':
      return 'Talk Through Your Sector';
    case 'markets':
      return 'Talk Through Your Market';
    case 'solutions':
      return 'Which Model Fits You?';
    case 'technology':
      return 'Work Inside Your System';
    case 'company-registration':
      return 'Talk Through the Setup';
    case 'resources':
    case 'blog':
      return 'Questions on This?';
    default:
      return 'Ask Us About This Work';
  }
}

export default function InquiryRailMount() {
  const pathname = usePathname() ?? '/';
  if (pathname in EXCLUDED) return null;

  const segments = pathname.split('/').filter(Boolean);

  // /services/{service}/{region} — the case the rail was built for.
  const service = segments[0] === 'services' ? SERVICE_NAMES[segments[1]] : undefined;

  // The region is wherever a region slug appears: /services/x/{region} and
  // /markets/{region} both resolve, and anything else falls back to the
  // region-neutral labels.
  const region = segments.find((s) => REGION_SLUGS.has(s)) as RegionSlug | undefined;

  const title = titleFor(segments);

  // Both are keyed on the path so they remount per route: each binds an
  // observer to `#inquiry` on mount, and a client-side navigation replaces that
  // element. Without the key they would keep watching a node that is no longer
  // in the document and would never stand down again.
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
