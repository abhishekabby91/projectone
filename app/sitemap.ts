import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';
import { solutions, markets, technologies, industries, serviceRegionPaths } from '@/lib/data';
import { registrationStates } from '@/lib/company-registration';

/**
 * Sitemap policy:
 * - Include only canonical, indexable content routes.
 * - Keep utility/legal pages out unless there is a clear search purpose.
 * - lastModified uses the date of the most recent content pass that
 *   touched that route. Defaults to 2026-08-14 (the date of the
 *   sitewide content/crawlability/accuracy audit).
 * - Priority is retained only for framework compatibility; it is not
 *   used as a ranking strategy.
 */

const LAST_AUDIT = '2026-08-14';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
    lastModified?: string;
  }> = [
    { path: '', priority: 1.0, changeFrequency: 'weekly', lastModified: LAST_AUDIT },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly', lastModified: LAST_AUDIT },
    { path: '/solutions', priority: 0.9, changeFrequency: 'weekly', lastModified: LAST_AUDIT },
    { path: '/technology', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/markets', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/case-studies', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/resources/guides', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/resources/insights', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/delivery-framework/onboarding', priority: 0.5, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/delivery-framework/communication', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/delivery-framework/quality-assurance', priority: 0.5, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
    { path: '/data-security', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/compliance', priority: 0.5, changeFrequency: 'monthly', lastModified: LAST_AUDIT },
  ];

  const dynamicRoutes = [
    // The 7 generic /services/{slug} URLs are deliberately NOT generated here.
    // They are 301s as of 2026-08-27 (see next.config.mjs) and a redirected URL
    // must not be declared in the sitemap. This is the drift trap CLAUDE.md
    // documents: these URLs came from a services.map() loop, so removing them
    // required changing the loop, not deleting lines.
    ...serviceRegionPaths.map((path) => ({ path, priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-08-27' })),
    ...solutions.map((s) => ({ path: `/solutions/${s.slug}`, priority: 0.85, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    ...markets.map((m) => ({ path: `/markets/${m.slug}`, priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    // MYOB is noindex as of 2026-09-04 (see app/technology/myob/page.tsx), and a
    // noindex URL in a sitemap is a contradiction Search Console reports. It is
    // the second expected difference in the drift check, after /thank-you.
    ...technologies
      .filter((t) => t.slug !== 'myob')
      .map((t) => ({ path: `/technology/${t.slug}`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
    ...industries.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT })),
  ];

  const specializedRoutes = [
    { path: '/industries/real-estate/yardi-accounting-outsourcing-texas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/united-states', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/tax-preparation/united-states', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/audit-support/united-states', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/payroll/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-payable/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-receivable/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounting/united-states', priority: 0.85, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/payroll/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/payroll/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-payable/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-payable/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-receivable/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/services/accounts-receivable/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/resources/guides/outsourced-bookkeeping-cost-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/quickbooks-vs-xero-comparison', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/staff-augmentation-tax-season-guide', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/insights/sales-tax-nexus-ecommerce-guide', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/insights/asc-606-revenue-recognition-saas', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/guides/questions-to-ask-before-outsourcing-bookkeeping', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/resources/guides/how-to-choose-accounting-outsourcing-partner', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/resources/guides/client-accounting-services-cas-guide', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/resources/guides/choosing-an-engagement-model', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    // These four shipped 2026-08-14 but were never added here, so they were
    // internally linked yet never declared for crawling. The accounting-services
    // guide matters most: it is the 301 target for the retired
    // /blog/outsourced-accounting-services URL.
    { path: '/resources/guides/outsourced-accounting-services-guide', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: '2026-08-21' },
    { path: '/resources/guides/outsourced-payroll-processing-guide', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/resources/guides/outsourced-accounts-payable-guide', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/resources/guides/outsourced-accounts-receivable-guide', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    // Indexable and footer-linked, like /compliance and /data-security which
    // were already listed. Low priority, but excluding only these two was an
    // inconsistency rather than a decision.
    { path: '/company-registration', priority: 0.7, changeFrequency: 'monthly' as const },
    ...registrationStates.map((st) => ({
      path: `/company-registration/${st.slug}`,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/markets/united-states/texas', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/california', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/markets/united-states/florida', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/services/bookkeeping/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/tax-preparation/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/audit-support/united-kingdom', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/bookkeeping/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/tax-preparation/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/services/audit-support/australia', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    // Blog articles
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/outsourced-bookkeeping-guide', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/accounts-payable-outsourcing', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/accounts-receivable-management', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/outsourced-payroll-services', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/tax-preparation-outsourcing', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
    { path: '/blog/audit-support-services', priority: 0.75, changeFrequency: 'monthly' as const, lastModified: LAST_AUDIT },
  ];

  const seen = new Set<string>();
  const allRoutes = [...staticRoutes, ...dynamicRoutes, ...specializedRoutes].filter((route) => {
    if (seen.has(route.path)) return false;
    seen.add(route.path);
    return true;
  });

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
  }));
}
