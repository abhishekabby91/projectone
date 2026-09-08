import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { companyInfo, regions, serviceRegions, technologies, industries } from '@/lib/data';
import SocialIcon from '@/components/social-icon';
import CookieSettingsButton from '@/components/cookie-settings-button';
import { registrationStates } from '@/lib/company-registration';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // The footer is the site's real crawl skeleton. The navbar renders its
  // dropdown links only when open, so they never appear in server HTML - every
  // crawlable internal link below the hero comes from here. Three consequences
  // are deliberate:
  //   1. The 21 Service x Region pages are listed directly. They are the
  //      primary commercial pages and were previously reachable only through
  //      in-content links.
  //   2. Section hubs (/services, /markets, /technology, /resources, /blog)
  //      are listed explicitly. /technology and /blog had zero inbound links
  //      in rendered HTML before this and were effectively orphaned.
  //   3. The 21 links are laid out as one service per row with three region
  //      links on it, rather than three columns of seven. Same 21 hrefs in the
  //      server HTML - none may be dropped - in a third of the vertical space.
  //      Do NOT "shorten" this block by removing regions: that orphans the
  //      primary commercial pages, which is the exact failure fixed on
  //      2026-08-27. Shorten the presentation, never the link set.
  const footerColumns: Array<{ blocks: Array<{ title: string; links: Array<{ name: string; href: string }> }> }> = [
    {
      blocks: [
        { title: 'Solutions', links: [
          { name: 'Offshore Accounting Support', href: '/solutions/offshore-accounting-support' },
          { name: 'Staff Augmentation', href: '/solutions/staff-augmentation' },
          { name: 'Dedicated Accounting Teams', href: '/solutions/dedicated-accounting-teams' },
          { name: 'Back Office Support', href: '/solutions/back-office-support' },
        ]},
        { title: 'Markets', links: [
          ...regions.map((r) => ({ name: r.name, href: `/markets/${r.slug}` })),
          { name: 'All Markets', href: '/markets' },
        ]},
        // The navbar emits no links into server HTML, so a cluster that is not
        // in the footer is not discoverable by link. See CLAUDE.md.
        { title: 'Company Registration', links: [
          { name: 'Register a US company', href: '/company-registration' },
          ...registrationStates.map((st) => ({ name: st.name, href: `/company-registration/${st.slug}` })),
        ]},
      ],
    },
    {
      blocks: [
        { title: 'Technology', links: [
          ...technologies.map((t) => ({ name: t.name, href: `/technology/${t.slug}` })),
          { name: 'All Platforms', href: '/technology' },
        ]},
      ],
    },
    {
      blocks: [
        { title: 'Industries', links: industries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })) },
        { title: 'Resources', links: [
          { name: 'Guides', href: '/resources/guides' },
          { name: 'Insights', href: '/resources/insights' },
          { name: 'Case Studies', href: '/resources/case-studies' },
          { name: 'Blog', href: '/blog' },
        ]},
      ],
    },
    {
      blocks: [
        { title: 'Company', links: [
          { name: 'About', href: '/about' },
          { name: 'Contact', href: '/contact' },
          { name: 'Compliance', href: '/compliance' },
          { name: 'Onboarding', href: '/delivery-framework/onboarding' },
          { name: 'Communication', href: '/delivery-framework/communication' },
          { name: 'Quality Assurance', href: '/delivery-framework/quality-assurance' },
        ]},
      ],
    },
  ];
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Data Security', href: '/data-security' },
    { name: 'Compliance', href: '/compliance' },
  ];
  const socials = [
    { href: 'https://www.linkedin.com/company/accounstone/', label: 'LinkedIn' },
    { href: 'https://www.facebook.com/profile.php?id=61591501869187', label: 'Facebook' },
    { href: 'https://www.instagram.com/accounstone', label: 'Instagram' },
    { href: 'https://www.youtube.com/@accounstone', label: 'YouTube' },
  ];
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-10 md:pt-12 pb-8 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          <div className="space-y-5 max-w-sm">
            <Link href="/" className="inline-flex items-center hover:opacity-90 transition-opacity">
              <Image src="/accounstone-logo-horizontal.png" alt="Accounstone" width={240} height={56} className="w-auto" style={{ height: '40px' }} />
            </Link>
            <p className="text-white/70 text-sm leading-7">{companyInfo.tagline}</p>
            <div className="flex items-center gap-2.5">
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
          <ul className="space-y-3 text-sm text-white/70 md:text-right">
            <li className="flex items-center gap-3 md:flex-row-reverse">
              <a href={`mailto:${companyInfo.contact.email}`} aria-label="Email Accounstone" title="Email Accounstone" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/65 hover:text-white hover:border-white/35 hover:bg-white/10 transition-all" rel="nofollow">
                <Mail size={17} aria-hidden="true" />
              </a>
              <span className="sr-only">Email Accounstone</span>
            </li>
            <li className="flex items-center gap-3 md:flex-row-reverse">
              <MapPin size={16} className="shrink-0 text-white/45" aria-hidden="true" />
              <span className="leading-6">{companyInfo.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8"><div className="border-t border-white/10" /></div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-10">
        {/* Single column below 375px: the 2-column grid needs ~155px per
            column to fit "TECHNOLOGY", which only holds from 375px up.
            Measured, not guessed — 360px clipped it, 375px does not. */}
        {/* Services: one row per service, three region links on it. This is
            the whole 7 x 3 matrix - 21 crawlable hrefs - in seven lines
            instead of three seven-item columns. The service name is plain
            text, not a link: the generic /services/{slug} URLs are 301s and
            must never be linked from anywhere. Each region link carries an
            aria-label with the full name, because "US" alone is not an
            accessible name. */}
        <div className="mb-10 min-[375px]:mb-12">
          <h3 className="mb-4 text-[11px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-[0.14em] text-white">Services</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">
            {serviceRegions.map((service) => (
              <li key={service.slug} className="flex flex-wrap items-baseline justify-between gap-x-3 border-b border-white/10 py-1">
                <span className="text-sm leading-5 text-white/80">{service.navLabel}</span>
                <span className="flex items-center gap-x-2 shrink-0">
                  {regions.map((region) => (
                    <Link
                      key={region.slug}
                      href={`/services/${service.slug}/${region.slug}`}
                      aria-label={`${service.navLabel} in the ${region.name}`}
                      className="inline-block py-1 text-xs font-semibold tracking-wide text-white/55 hover:text-white transition-colors"
                    >
                      {region.short}
                    </Link>
                  ))}
                </span>
              </li>
            ))}
            <li className="flex items-baseline py-1 border-b border-transparent">
              <Link href="/services" className="inline-block py-1 text-sm leading-5 text-white/65 hover:text-white transition-colors">All Services</Link>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 min-[375px]:gap-y-10">
          {footerColumns.map((column, ci) => (
            <div key={ci} className="min-w-0 space-y-8">
              {column.blocks.map((section) => (
                <div key={section.title} className="min-w-0">
                  {/* The wide uppercase tracking overflowed a 2-column mobile grid
                      ("TECHNOLOGY" needed 180px in a 152px column and was clipped
                      at the viewport edge). Tracking and size are tightened on
                      mobile only, leaving real margin rather than a 1px squeak;
                      the original treatment returns from sm: up. */}
                  <h3 className="mb-4 text-[11px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-[0.14em] text-white">{section.title}</h3>
                  {/* py-1 lifts each link's hit area from 20px to 28px, above the
                      24px WCAG 2.5.8 minimum. The row gap is reduced to match so
                      the footer's overall height barely changes. */}
                  <ul className="space-y-0.5">
                    {section.links.map((link) => (
                      <li key={link.href}><Link href={link.href} className="inline-block py-1 text-sm leading-5 text-white/65 hover:text-white transition-colors">{link.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="bg-primary-dark/50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-white/50 text-xs md:text-sm">© {currentYear} Accounstone. All rights reserved.</p>
            <ul className="flex flex-wrap items-center gap-x-5">
              {legalLinks.map((link) => (<li key={link.name}><Link href={link.href} className="inline-block py-1.5 text-white/50 hover:text-white transition-colors text-xs md:text-sm leading-5">{link.name}</Link></li>))}
              <li><CookieSettingsButton /></li>
            </ul>
          </div>
          <p className="text-white/40 text-xs mt-3 max-w-3xl leading-5">Security-focused with NDA-backed engagements. Actively pursuing SOC 2 certification.</p>
        </div>
      </div>
    </footer>
  );
}
