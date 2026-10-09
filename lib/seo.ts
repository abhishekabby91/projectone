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
  const robots: Metadata['robots'] = config.noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } };

  // absoluteTitle opts out of the "%s | Accounstone" template in app/layout.tsx.
  // Used by the homepage, whose title is a deliberate exact string.
  return {
    title: config.absoluteTitle ? { absolute: config.title } : config.title,
    description: config.description,
    robots,
    alternates: { canonical },
    openGraph: { title: ogTitle, description: ogDescription, url: canonical, siteName, locale, type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }] },
    twitter: { card: 'summary_large_image', title: ogTitle, description: ogDescription, images: [ogImage] },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${baseUrl}/#organization`,
    name: companyInfo.name, description: companyInfo.description, url: baseUrl,
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
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${baseUrl}/#website`, url: baseUrl, name: siteName, publisher: { '@id': `${baseUrl}/#organization` } };
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
