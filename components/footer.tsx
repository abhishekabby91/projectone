import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { companyInfo, serviceRegions, industries } from '@/lib/data';
import SocialIcon from '@/components/social-icon';
import CookieSettingsButton from '@/components/cookie-settings-button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Keep the footer useful without letting it dominate the page.
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
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 md:px-8">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-3">
            <Link href="/" aria-label="Accounstone home" className="inline-flex shrink-0 items-center transition-opacity hover:opacity-90">
              <Image
                src="/accounstone-logo-horizontal.png"
                alt="Accounstone"
                width={200}
                height={44}
                className="h-8 w-auto"
              />
            </Link>
            <p className="max-w-md text-xs leading-5 text-white/65 sm:text-sm">{companyInfo.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:justify-end">
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="inline-flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
              rel="nofollow"
            >
              <Mail size={15} className="shrink-0 text-white/45" aria-hidden="true" />
              <span>{companyInfo.contact.email}</span>
            </a>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <SocialIcon
                  key={social.label}
                  href={social.href}
                  label={social.label}
                  size={15}
                  variant="footer"
                />
              ))}
            </div>
          </div>
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-5 gap-y-5 py-5 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-5 md:gap-x-8"
        >
          {footerColumns.map((column) => (
            <div key={column.title} className="min-w-0">
              <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white/90">
                {column.title}
              </h3>
              <ul className="space-y-0">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block max-w-full py-0.5 text-xs leading-5 text-white/60 transition-colors hover:text-white sm:text-[13px]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col gap-2 border-t border-white/10 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-white/45">© {currentYear} Accounstone. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block py-0.5 text-[11px] text-white/45 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li><CookieSettingsButton /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
