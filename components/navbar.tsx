'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { solutions, technologies, industries, regions, serviceRegions } from '@/lib/data';
import RegionFlag from '@/components/region-flag';

interface NavChild { label: string; href: string; }
interface NavGroup { label: string; region?: string; items: NavChild[]; }
interface NavItem { label: string; href: string; children?: NavChild[]; groups?: NavGroup[]; }

// Services are region-first: each column is a market, each row a service.
// Every entry resolves to a real /services/{service}/{region} page - the
// matrix lives in lib/data.ts so the navbar, footer, /services hub and
// sitemap cannot drift apart.
//
// CFO Support and HR are deliberately absent. See
// knowledge/company/scope-boundaries.md - not offered today.
//
// Audit Support is hidden from this dropdown only (owner, 2026-09-17). The 3
// pages are live, indexable, in the sitemap, in llms.txt and still linked from
// the footer and contextually - this hides a menu row, nothing else. It is
// also SEO-neutral by construction: dropdown contents render only when open,
// so the navbar emits zero links into server HTML and never was a crawl path.
// See CLAUDE.md, "The navbar is not a crawl path". Remove the slug from this
// set to put the rows back.
const NAV_HIDDEN_SERVICES = new Set(['audit-support']);

const regionServiceGroups: NavGroup[] = regions.map((region) => ({
  label: region.name,
  region: region.slug,
  items: serviceRegions
    .filter((s) => !NAV_HIDDEN_SERVICES.has(s.slug))
    .map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}/${region.slug}`,
    })),
}));

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Markets is deliberately not a primary nav item. The market pages remain
  // indexable and are linked from the footer and contextually from the
  // Service x Region pages - they serve broad regional intent, not the
  // commercial navigation path.
  const menuItems: NavItem[] = [
    { label: 'Services', href: '/services', groups: regionServiceGroups },
    { label: 'Solutions', href: '/solutions', children: solutions.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })) },
    { label: 'Industries', href: '/industries', children: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })) },
    { label: 'Technology', href: '/technology', children: technologies.map((t) => ({ label: t.name, href: `/technology/${t.slug}` })) },
    { label: 'Resources', href: '/resources', children: [
      { label: 'Guides', href: '/resources/guides' },
      { label: 'Insights', href: '/resources/insights' },
      { label: 'Case Studies', href: '/resources/case-studies' },
      { label: 'Blog', href: '/blog' },
    ]},
    { label: 'Compliance', href: '/compliance' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  // Close the mobile menu and any open dropdown whenever the route
  // changes. Without this, clicking a link navigates but the menu
  // state persists — so the menu is still open on the new page.
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    document.addEventListener('keydown', handleKeyDown);
    // NOTE: do NOT set document.body.style.overflow = 'hidden' here.
    // Setting overflow on <body> turns it into a scroll container, which
    // breaks `position: sticky` on the header — the header snaps back to
    // its natural document position (the very top of the page), so it
    // vanishes from view whenever the menu is opened while scrolled down.
    // The menu panel below is a fixed overlay with its own scroll and
    // overscroll-contain, so no body-level scroll lock is needed.
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    };
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenDropdown(null); };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown]);

  const scheduleClose = () => { closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150); };
  const cancelScheduledClose = () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); };
  const closeMobileMenu = () => { setMobileMenuOpen(false); setOpenMobileSection(null); };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b-2 border-border supports-[backdrop-filter]:bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center px-3 sm:px-5 lg:px-2 xl:px-5 shrink-0" aria-label="Accounstone home">
          <Image src="/accounstone-logo-horizontal.png" alt="Accounstone" width={280} height={60} className="w-auto" style={{ height: '48px' }} priority />
        </Link>

        {/* Desktop nav starts at lg:, not md:. At md: (768px, iPad portrait)
            the seven items plus the logo and CTA need ~963px, so "Resources",
            "About" and the Get Started button were pushed off-screen — and
            because html sets overflow-x: clip, the page could not scroll to
            reach them. Tablets get the mobile menu, which carries every link. */}
        <nav ref={navRef} aria-label="Primary" className="hidden lg:flex items-center gap-3 xl:gap-8">
          {menuItems.map((item) => {
            const hasChildren = !!item.children?.length;
            const hasGroups = !!item.groups?.length;
            const isDropdown = hasChildren || hasGroups;
            const isOpen = openDropdown === item.label;
            if (!isDropdown) return (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`transition-colors font-medium text-sm ${isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                {item.label}
              </Link>
            );
            return (
              <div key={item.href} className="relative" onMouseEnter={() => { cancelScheduledClose(); setOpenDropdown(item.label); }} onMouseLeave={scheduleClose}>
                <button onClick={() => setOpenDropdown(isOpen ? null : item.label)} aria-haspopup="true" aria-expanded={isOpen} className={`flex items-center gap-1 transition-colors font-medium text-sm ${isActive(item.href) ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                  {item.label}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {isOpen && hasGroups && (
                  <div className="absolute left-0 top-full mt-2 w-[680px] max-w-[calc(100vw-2rem)] max-h-[75vh] overflow-y-auto rounded-lg border-2 border-border bg-white shadow-xl p-5 z-50" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <Link href={item.href} onClick={() => setOpenDropdown(null)} className="block px-3 py-2 mb-3 text-sm font-semibold text-primary hover:bg-input rounded-lg transition-colors border-b border-border">View All {item.label} →</Link>
                    <div className="grid grid-cols-3 gap-6">{item.groups!.map((group) => <div key={group.label}><p className="flex items-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-muted mb-2 px-3">{group.region && <RegionFlag region={group.region} decorative />}{group.label}</p><ul className="space-y-0.5">{group.items.map((child) => <li key={child.href}><Link href={child.href} onClick={() => setOpenDropdown(null)} className="block px-3 py-1.5 rounded-lg text-sm text-foreground hover:bg-input hover:text-primary transition-colors">{child.label}</Link></li>)}</ul></div>)}</div>
                  </div>
                )}
                {isOpen && hasChildren && (
                  <div className="absolute left-0 top-full mt-2 w-64 max-h-[70vh] overflow-y-auto rounded-lg border-2 border-border bg-white shadow-xl py-2 z-50" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <Link href={item.href} onClick={() => setOpenDropdown(null)} className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-input transition-colors border-b border-border mb-1">View All {item.label}</Link>
                    {item.children!.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpenDropdown(null)} className="block px-4 py-2 text-sm text-foreground hover:bg-input hover:text-primary transition-colors">{child.label}</Link>)}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA and hamburger are grouped so justify-between keeps them together
            on the right. Ungrouped, the CTA was stranded mid-header at tablet
            widths where the nav is hidden. */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link href="/contact" className="hidden sm:inline-flex items-center justify-center whitespace-nowrap px-4 sm:px-5 xl:px-6 py-2.5 sm:py-3 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm xl:text-base">Get Started</Link>

          <button onClick={() => setMobileMenuOpen((prev) => !prev)} className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg hover:bg-input active:bg-input transition-colors shrink-0" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} /></svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          /* absolute (not fixed): the header has backdrop-filter, which
             makes it a containing block for fixed descendants — a fixed
             panel would size against the 80px header and collapse to
             zero height. top-full anchors it directly beneath the header
             and it follows the header while sticky. overscroll-contain
             stops scroll chaining to the page behind it. */
          className="lg:hidden absolute top-full inset-x-0 z-50 bg-white border-t border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {menuItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const hasGroups = !!item.groups?.length;
              const isDropdown = hasChildren || hasGroups;
              const isSectionOpen = openMobileSection === item.label;
              if (!isDropdown) return <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} className={`flex items-center px-4 min-h-[48px] rounded-lg font-medium transition-colors active:bg-input ${isActive(item.href) ? 'bg-input text-primary' : 'text-foreground hover:bg-input hover:text-primary'}`} onClick={closeMobileMenu}>{item.label}</Link>;
              return (
                <div key={item.href}>
                  <div className="flex items-center">
                    <Link href={item.href} onClick={closeMobileMenu} className={`flex-1 flex items-center px-4 min-h-[48px] rounded-lg font-medium transition-colors active:bg-input ${isActive(item.href) ? 'bg-input text-primary' : 'text-foreground hover:bg-input hover:text-primary'}`}>{item.label}</Link>
                    <button onClick={() => setOpenMobileSection(isSectionOpen ? null : item.label)} aria-expanded={isSectionOpen} aria-label={`${isSectionOpen ? 'Collapse' : 'Expand'} ${item.label} submenu`} className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center mr-1 rounded-lg hover:bg-input active:bg-input transition-colors"><svg className={`w-4 h-4 text-muted transition-transform duration-200 ${isSectionOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                  </div>
                  {isSectionOpen && hasGroups && (
                    <div className="pl-4 py-1 space-y-3 border-l-2 border-border ml-4 mb-1">
                      {item.groups!.map((group) => <div key={group.label}><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted mb-1 px-4">{group.region && <RegionFlag region={group.region} decorative />}{group.label}</p>{group.items.map((child) => <Link key={child.href} href={child.href} onClick={closeMobileMenu} className="flex items-center px-4 min-h-[44px] rounded-lg text-sm text-muted hover:bg-input hover:text-primary transition-colors active:bg-input">{child.label}</Link>)}</div>)}
                    </div>
                  )}
                  {isSectionOpen && hasChildren && <div className="pl-4 py-1 space-y-1 border-l-2 border-border ml-4 mb-1">{item.children!.map((child) => <Link key={child.href} href={child.href} onClick={closeMobileMenu} className="flex items-center px-4 min-h-[44px] rounded-lg text-sm text-muted hover:bg-input hover:text-primary transition-colors active:bg-input">{child.label}</Link>)}</div>}
                </div>
              );
            })}
            <Link href="/contact" onClick={closeMobileMenu} className="flex items-center justify-center min-h-[48px] mt-4 px-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors">Get Started</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
