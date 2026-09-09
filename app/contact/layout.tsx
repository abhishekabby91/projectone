import { Metadata } from 'next';
import { generateMetadata, generateBreadcrumbSchema, generateFAQSchema, baseUrl } from '@/lib/seo';
import { companyInfo } from '@/lib/data';
import { CONTACT_FAQS } from '@/lib/contact-faqs';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us — Free Consultation',
  description:
    'A free half-hour scoping call, no obligation. What the first conversation covers, what we will not do whatever you pay us, and who replies to you.',
  path: '/contact',
});

// ContactPage + ContactPoint + Breadcrumb schema.
// Along with /about, this is a primary signal AI systems use to verify an
// organisation is real and reachable. Schema lives in the layout because
// page.tsx is a client component (it holds form state).
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Contact', url: `${baseUrl}/contact` },
]);

// The objection FAQs render on the page itself; the schema lives here
// because page.tsx is a client component and cannot emit it.
const faqSchema = generateFAQSchema(CONTACT_FAQS);

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${baseUrl}/contact#webpage`,
  url: `${baseUrl}/contact`,
  name: 'Contact Accounstone',
  description:
    'Get in touch with Accounstone about outsourced accounting, bookkeeping, tax preparation, payroll, and audit support.',
  isPartOf: { '@id': `${baseUrl}/#website` },
  about: { '@id': `${baseUrl}/#organization` },
  mainEntity: {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: companyInfo.name,
    email: companyInfo.contact.email,
    url: baseUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: companyInfo.contact.email,
        areaServed: ['US', 'GB', 'AU'],
        availableLanguage: ['English'],
      },
    ],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
