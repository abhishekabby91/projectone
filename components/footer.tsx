import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { companyInfo, serviceRegions, industries } from '@/lib/data';
import SocialIcon from '@/components/social-icon';
import CookieSettingsButton from '@/components/cookie-settings-button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Keep the footer intentionally selective: core service routes, priority
  // industries, established platforms, and the main resource/company pages.
  // Detailed software and location pages should be discovered contextually
  // from their relevant industry hubs rather than through an oversized footer.
  const footerColumns: Array<{ title: string; links: Array<{ name: string; href: string }> }> = [
    {
      title: 'Services',
      links: [
        ...serviceRegions.map((service) => ({
          name: service.navLabel,
          href: `/services/${service.slug}/united-states`,
        })),
        { name: 'All Services', href: '/services' },
        { name: 'Solutions', href: '/solutions' },
      ],
    },
    {
      title: 'Industries',
      links: [
        ...industries
          .filter((industry) => ['real-estate', 'property-management', 'hoa-accounting', 'cpa-firms'].includes(industry.slug))
          .map((industry) => ({ name: industry.name, href: `/industries/${industry.slug}` })),
        { name: 'All Industries', href: '/industries' },
      ],
    },
    {
      title: 'Technology',
      links: [
        { name: 'QuickBooks', href: '/technology/quickbooks' },
        { name: 'Xero', href: '/technology/xero' },
        { name: 'Sage', href: '/technology/sage' },
        { name: 'NetSuite', href: '/technology/netsuite' },
        { name: 'Drake Tax', href: '/technology/drake-tax' },
        { name: 'CCH Axcess', href: '/technology/cch' },
        { name: 'All Platforms', href: '/technology' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Guides', href: '/resources/guides' },
        { name: 'Insights', href: '/resources/insights' },
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Compliance', href: '/compliance' },
        { name: 'Data Security', href: '/data-security' },
        { name: 'US Company Registration', href: '/company-registration' },
      ],
    },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  const socials = [
    { href: 'https://www.linkedin.com/company/accounstone/', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/profile.php?id=61591501869187', label: 'Facebook' },
    { href: 'https://www.instagram.com/accounstone', label: 'Instagram' },
    { href: 'https://www.youtube.com/@accounstone', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-5 md:pt-6 pb-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Link href="/" className="inline-flex w-fit shrink-0 items-center transition-opacity hover:opacity-90">
              <Image
                src="/accounstone-logo-horizontal.png"
                alt="Accounstone"
                width={240}
                height={56}
                className="w-auto"
                style={{ height: '30px' }}
              />
            </Link>
            <p className="max-w-sm text-xs leading-4 text-white/65">{companyInfo.tagline}</p>
            <div className="flex shrink-0 items-center gap-2 sm:ml-1">
              {socials.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  size={17}
                  variant="footer"
                />
              ))}
            </div>
          </div>
          <a
            href={`mailto:${companyInfo.contact.email}`}
            className="inline-flex w-fit shrink-0 items-center gap-2 text-xs text-white/70 transition-colors hover:text-white sm:ml-auto"
            rel="nofollow"
          >
            <Mail size={16} className="shrink-0 text-white/45" aria-hidden="true" />
            <span>{companyInfo.contact.email}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="border-t border-white/10" />
      </div>

      <nav
        aria-label="Footer"
        className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-5 px-6 py-5 sm:grid-cols-3 sm:gap-x-6 md:px-8 md:py-6 xl:grid-cols-5"
      >
        {footerColumns.map((column) => (
          <div key={column.title} className="min-w-0">
            <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
              {column.title}
            </h3>
            <ul className="space-y-0">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block max-w-full py-0.5 text-xs leading-4 text-white/65 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="bg-primary-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-3 md:px-8 md:py-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/50">
              © {currentYear} Accounstone. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-xs leading-4 text-white/50 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li><CookieSettingsButton /></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
