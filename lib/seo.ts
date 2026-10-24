import type { Metadata } from 'next';
import { companyInfo } from './data';

export const baseUrl = 'https://www.accounstone.com';
const siteName = companyInfo.name;
const US_STATES = new Set([
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]);

function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * hreflang, and the two clusters that genuinely have regional variants.
 *
 * The 21 Service x Region pages and the 3 market pages are the same offer
 * written for a different market in the same language, which is exactly what
 * hreflang is for: it tells Google the three are alternates of one another
 * rather than three pages competing for one query. Every page in a set lists
 * all three plus itself -- a one-way reference is ignored.
 *
 * NOTHING ELSE ON THE SITE GETS THESE, and that is the rule to keep. A market
 * sub-page has no counterpart: /markets/united-kingdom/vat-returns answers a
 * question /markets/australia/bas-preparation does not ask, and declaring them
 * alternates would point Google at a page that answers something else. Same for
 * the US state pages and the registration cluster -- they exist once.
 *
 * x-default is the United States page, because that is where an unmatched
 * visitor is sent everywhere else on the site -- except audit-support, whose
 * retired generic URL resolves to United Kingdom on country-segmented Search
 * Console evidence (40 of its 46 country-resolved impressions are British).
 * Keeping the two consistent means a visitor from an unlisted country and a
 * visitor following the old URL land on the same page. See the comment above
 * the redirects in next.config.mjs.
 */
const REGION_HREFLANG: Record<string, string> = {
  'united-states': 'en-US',
  'united-kingdom': 'en-GB',
  'australia': 'en-AU',
};

/** Services whose x-default is the UK page rather than the US one. */
const UK_DEFAULT_SERVICES = new Set(['audit-support']);

function hreflangAlternates(path: string): Record<string, string> | undefined {
  const clean = path.replace(/\/$/, '');

  const service = clean.match(/^\/services\/([^/]+)\/(?:united-states|united-kingdom|australia)$/);
  if (service) {
    const slug = service[1];
    const languages: Record<string, string> = {};
    for (const [region, lang] of Object.entries(REGION_HREFLANG)) {
      languages[lang] = absoluteUrl(`/services/${slug}/${region}`);
    }
    languages['x-default'] = absoluteUrl(
      `/services/${slug}/${UK_DEFAULT_SERVICES.has(slug) ? 'united-kingdom' : 'united-states'}`,
    );
    return languages;
  }

  if (/^\/markets\/(?:united-states|united-kingdom|australia)$/.test(clean)) {
    const languages: Record<string, string> = {};
    for (const [region, lang] of Object.entries(REGION_HREFLANG)) {
      languages[lang] = absoluteUrl(`/markets/${region}`);
    }
    languages['x-default'] = absoluteUrl('/markets/united-states');
    return languages;
  }

  return undefined;
}

/**
 * `ogTitle`, `ogDescription` and `ogImageAlt` exist because a share card and a
 * SERP result are read in different places by different people. A page title is
 * written to a 46-character budget so it survives truncation in Google; a link
 * preview in WhatsApp or Slack has room for the brand name and benefits from
 * it. Where a page sets none of the three, the card falls back to the page's own
 * title and description, which is right for every page but the homepage.
 *
 * The default image is `/og-image.jpg` — 48KB against 342KB for the same card
 * as a PNG. `/og-image.png` holds the identical card so that any platform or
 * link still pointing at the old URL is not served the previous one, which
 * advertised CFO Support. See `scripts/og-image/card.html`.
 */
export function generateMetadata(config: { title: string; description: string; path: string; ogImage?: string; ogTitle?: string; ogDescription?: string; ogImageAlt?: string; canonical?: string; noindex?: boolean; absoluteTitle?: boolean }): Metadata {
  const canonical = absoluteUrl(config.canonical || config.path);
  const ogImage = absoluteUrl(config.ogImage || '/og-image.jpg');
  const ogTitle = config.ogTitle || config.title;
  const ogDescription = config.ogDescription || config.description;
  const ogImageAlt = config.ogImageAlt || config.title;
  // Keep social metadata aligned with the page's primary market. The site is English-language,
  // but country-specific service pages should not all announce a US social locale.
  const locale = /(?:^|\/)united-kingdom(?:\/|$)/.test(config.path) ? 'en_GB'
    : /(?:^|\/)australia(?:\/|$)/.test(config.path) ? 'en_AU'
    : 'en_US';
  // A noindex page is not an alternate of anything, so it never declares hreflang.
  const languages = config.noindex ? undefined : hreflangAlternates(config.path);
  const robots: Metadata['robots'] = config.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } };

  // absoluteTitle opts out of the "%s | Accounstone" template in app/layout.tsx.
  // Used by the homepage, whose title is a deliberate exact string.
  return {
    title: config.absoluteTitle ? { absolute: config.title } : config.title,
    description: config.description,
    robots,
    alternates: { canonical, ...(languages ? { languages } : {}) },
    openGraph: { title: ogTitle, description: ogDescription, url: canonical, siteName, locale, type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }] },
    twitter: { card: 'summary_large_image', title: ogTitle, description: ogDescription, images: [ogImage] },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${baseUrl}/#organization`,
    name: companyInfo.name, legalName: companyInfo.legalName, description: companyInfo.description, url: baseUrl,
    logo: { '@type': 'ImageObject', url: `${baseUrl}/accounstone-logo-horizontal.png` },
    sameAs: ['https://www.linkedin.com/company/accounstone/', 'https://www.facebook.com/profile.php?id=61591501869187', 'https://www.instagram.com/accounstone', 'https://www.youtube.com/@accounstone'],
    address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressCountry: 'IN' },
    contactPoint: { '@type': 'ContactPoint', contactType: 'Customer Service', email: companyInfo.contact.email, availableLanguage: ['English'] },
    knowsAbout: [
      'Accounting Outsourcing',
      'Bookkeeping',
      'Tax Preparation',
      'Accounts Payable',
      'Accounts Receivable',
      'Payroll Processing',
      'Accounting Operations',
    ],
  };
}

export function generateWebsiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${baseUrl}/#website`, url: `${baseUrl}/`, name: 'Accounstone', publisher: { '@id': `${baseUrl}/#organization` } };
}

export function generateServiceSchema(service: { name: string; description: string; slug: string; areaServed?: string[]; basePath?: string }) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description,
    provider: { '@type': 'Organization', '@id': `${baseUrl}/#organization`, name: companyInfo.name, url: baseUrl },
    ...(service.areaServed?.length
      ? {
          areaServed: service.areaServed.map((area) =>
            US_STATES.has(area)
              ? {
                  '@type': 'AdministrativeArea',
                  name: area,
                  containedInPlace: { '@type': 'Country', name: 'United States' },
                }
              : { '@type': 'Country', name: area },
          ),
        }
      : {}),
    url: absoluteUrl(`${service.basePath ?? '/services/'}${service.slug}`),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.url) })) };
}

export function generateArticleSchema(article: { title: string; description: string; imageUrl: string; publishedDate: string; updatedDate?: string; author?: string; slug: string; basePath?: string }) {
  const url = absoluteUrl(`${article.basePath ?? '/resources/'}${article.slug}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.imageUrl),
    datePublished: article.publishedDate,
    ...(article.updatedDate ? { dateModified: article.updatedDate } : {}),
    author: { '@type': 'Organization', name: article.author || companyInfo.name, '@id': `${baseUrl}/#organization` },
    publisher: { '@id': `${baseUrl}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  };
}
