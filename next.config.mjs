/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      // HOA guides consolidated in October 2026 after reviewing topic overlap.
      {
        source: "/blog/hoa-monthly-close-process",
        destination: "/blog/hoa-accounting-month-end-checklist",
        permanent: true,
      },
      {
        source: "/blog/hoa-year-end-checklist",
        destination: "/blog/hoa-year-end-accounting",
        permanent: true,
      },
      {
        source: "/blog/hoa-vendor-invoice-processing",
        destination: "/blog/hoa-accounts-payable",
        permanent: true,
      },
      {
        source: "/blog/hoa-delinquency-accounting",
        destination: "/blog/hoa-accounts-receivable-aging",
        permanent: true,
      },
      // Correct older canonical slugs to match their actual article routes.
      {
        source: "/blog/workflow",
        destination: "/blog/hoa-accounting-workflow",
        permanent: true,
      },
      {
        source: "/blog/cash-vs-accrual",
        destination: "/blog/hoa-cash-vs-accrual-accounting",
        permanent: true,
      },
      {
        source: "/blog/unapplied-payments",
        destination: "/blog/hoa-unapplied-payments",
        permanent: true,
      },
      // Merged into the guide 2026-08-21 - the two pages had near-identical
      // content (see docs/CONTENT-REGISTRY.md). The guide's cost coverage
      // was extended with the blog's unique "Cost Ranges" section before
      // this redirect was added, so no informational content was lost.
      {
        source: "/blog/outsourced-accounting-services",
        destination: "/resources/guides/outsourced-accounting-services-guide",
        permanent: true,
      },

      // The generic service layer was retired 2026-08-27. Those 7 pages held
      // the deepest content on the site (600-1301 words) but had zero
      // editorial inbound links - their only inbound links were the sitewide
      // footer - while the Service x Region pages carried the commercial
      // intent at 484-758 words. Authority pointed at one layer and intent at
      // the other.
      //
      // Their unique depth was merged into the 21 regional pages first (see
      // lib/service-depth.ts), so no content was lost before these redirects
      // were added.
      //
      // Target was originally the United States page for all seven, because it
      // is the deepest and best differentiated of each regional set, and every
      // regional page carries a region switcher so UK and Australia are one
      // click away. That was chosen without traffic data, on the note that each
      // line here is independently reversible once Search Console showed where
      // the demand actually was.
      //
      // 2026-09-03: it did. Country-segmented GSC over 28 days, per retired URL:
      //
      //   /services/tax-preparation      usa 59  ind 2  idn 1   -> US confirmed
      //   /services/accounts-receivable  usa 40  gbr 2  ind 2   -> US confirmed
      //   /services/audit-support        gbr 40  ind 3  usa 1   -> UK, retargeted
      //   /services/accounts-payable     ind 3                  -> no signal
      //   /services/payroll              ind 2   cze 1          -> no signal
      //   /services/bookkeeping          (none)                 -> no signal
      //   /services/accounting           (none)                 -> no signal
      //
      // Only audit-support was pointed at the wrong market, and it was pointed
      // there hard: 40 of its 46 country-resolved impressions are British, and
      // the US page they landed on frames the work around US GAAS/PCAOB and
      // calls the reader a CPA firm — the exact vocabulary leak CLAUDE.md says
      // must never reach a UK reader. `/services/audit-support/united-kingdom`
      // independently draws gbr 53, so the demand and the page agree.
      //
      // India is the delivery centre, not a market, so `ind` impressions are
      // not a signal for any of these. The four URLs with no market signal stay
      // on the United States page; there is nothing yet to justify moving them.
      {
        source: "/services/bookkeeping",
        destination: "/services/bookkeeping/united-states",
        permanent: true,
      },
      {
        source: "/services/accounting",
        destination: "/services/accounting/united-states",
        permanent: true,
      },
      {
        source: "/services/tax-preparation",
        destination: "/services/tax-preparation/united-states",
        permanent: true,
      },
      {
        source: "/services/payroll",
        destination: "/services/payroll/united-states",
        permanent: true,
      },
      {
        source: "/services/accounts-payable",
        destination: "/services/accounts-payable/united-states",
        permanent: true,
      },
      {
        source: "/services/accounts-receivable",
        destination: "/services/accounts-receivable/united-states",
        permanent: true,
      },
      {
        source: "/services/audit-support",
        destination: "/services/audit-support/united-kingdom",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;