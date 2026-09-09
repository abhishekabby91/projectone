'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import SocialIcon from '@/components/social-icon';

// The number lives here and nowhere else on the site (2026-09-09, owner's
// instruction: the icon may call, but the digits are never displayed).
//
// It is deliberately NOT back on `companyInfo` in `lib/data.ts`. That object is
// imported all over the site, so a value on it invites the next person to render
// it; keeping the one call affordance self-contained in this one client
// component means there is exactly one place to look and one place to remove.
//
// Only the E.164 form exists — there is no `phoneDisplay` to print by accident.
// Note it still appears in the rendered `href`, so this hides it from readers,
// not from scrapers. If the number must be unscrapeable, this link has to go and
// the icon should open the inquiry dialog instead.
const CALL_HREF = 'tel:+919990597192';

const socials = [
  { href: 'https://www.linkedin.com/company/accounstone/', label: 'LinkedIn' },
  { href: 'https://www.facebook.com/profile.php?id=61591501869187', label: 'Facebook' },
  { href: 'https://www.instagram.com/accounstone?igsh=cTVpcXp0bG9sbnZy', label: 'Instagram' },
  { href: 'https://www.youtube.com/@accounstone', label: 'YouTube' },
];

export default function HeaderBar() {
  return (
    <div className="w-full bg-primary-dark text-white/80 text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-1 flex items-center justify-between gap-3">

        {/* Left — contact icons only (tappable, screen-reader labelled) */}
        <div className="flex items-center gap-1">
          <a
            href="mailto:partner@accounstone.com"
            aria-label="Email Accounstone at partner@accounstone.com"
            title="partner@accounstone.com"
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Mail size={15} aria-hidden="true" />
          </a>
          <a
            href={CALL_HREF}
            aria-label="Call Accounstone"
            title="Call Accounstone"
            className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <Phone size={15} aria-hidden="true" />
          </a>
        </div>

        {/* Right — social icons + Get Started */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-0.5">
            {socials.map(({ href, label }) => (
              <SocialIcon
                key={label}
                href={href}
                label={label}
                size={14}
                variant="header"
              />
            ))}
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/20" aria-hidden="true" />
          <Link
            href="/contact"
            className="hidden sm:inline-flex whitespace-nowrap px-3 md:px-4 py-1.5 rounded-full bg-accent text-white font-semibold text-xs hover:bg-accent-light transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
