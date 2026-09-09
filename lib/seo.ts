import type { Metadata } from 'next';
import { companyInfo } from './data';

export const baseUrl = 'https://www.accounstone.com';
const siteName = companyInfo.name;

function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function generateMetadata(config: { title: string; description: string; path: string; ogImage?: string; canonical?: string; noindex?: boolean; absoluteTitle?: boolean }): Metadata {
  const canonical = absoluteUrl(config.canonical || config.path);
  const ogImage = absoluteUrl(config.ogImage || '/og-image.png');
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
    openGraph: { title: config.title, description: config.description, url: canonical, siteName, locale: 'en_US', type: 'website', images: [{ url: ogImage, width: 1200, height: 630, alt: config.title }] },
    twitter: { card: 'summary_large_image', title: config.title, description: config.description, images: [ogImage] },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': `${baseUrl}/#organization`,
    name: companyInfo.name, description: companyInfo.description, url: baseUrl,
    logo: { '@type': 'ImageObject', url: `${baseUrl}/accounstone-logo-horizontal.png` },
    sameAs: ['https://www.linkedin.com/company/accounstone/', 'https://www.facebook.com/profile.php?id=61591501869187', 'https://www.instagram.com/accounstone', 'https://www.youtube.com/@accounstone'],
    contactPoint: { '@type': 'ContactPoint', contactType: 'Customer Service', email: companyInfo.contact.email, areaServed: ['US', 'GB', 'AU'], availableLanguage: ['English'] },
  };
}

export function generateWebsiteSchema() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${baseUrl}/#website`, url: baseUrl, name: siteName, publisher: { '@id': `${baseUrl}/#organization` } };
}

export function generateServiceSchema(service: { name: string; description: string; slug: string; areaServed?: string[]; basePath?: string }) {
  return {
    '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.description,
    provider: { '@type': 'Organization', name: companyInfo.name, url: baseUrl },
    areaServed: (service.areaServed ?? ['US', 'GB', 'AU']).map((code) => ({ '@type': 'Country', name: code })),
    url: absoluteUrl(`${service.basePath ?? '/services/'}${service.slug}`),
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: absoluteUrl(item.url) })) };
}

export function generateArticleSchema(article: { title: string; description: string; imageUrl: string; publishedDate: string; author?: string; slug: string; basePath?: string }) {
  const url = absoluteUrl(`${article.basePath ?? '/resources/'}${article.slug}`);
  return { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, image: absoluteUrl(article.imageUrl), datePublished: article.publishedDate, author: { '@type': article.author ? 'Person' : 'Organization', name: article.author || companyInfo.name }, publisher: { '@id': `${baseUrl}/#organization` }, mainEntityOfPage: url, url };
}
