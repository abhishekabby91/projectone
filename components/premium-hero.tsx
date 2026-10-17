'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import RegionFlag from '@/components/region-flag';
import { regions } from '@/lib/data';

interface PremiumHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: { text: string; href: string; variant?: 'primary' | 'secondary' };
  ctaSecondary?: { text: string; href: string };
  // An absolute href is treated as external: it opens in a new tab so the
  // reader keeps their place on the page they were reading. Booking happens on
  // cal.com, which is a third party.
  background?: 'primary-gradient' | 'accent-gradient' | 'default';
  image?: ReactNode;
  children?: ReactNode;
  /** Region slug. Adds a flag chip and, on large screens, that region's compliance anchors. */
  region?: string;
}

export default function PremiumHero({
  title,
  subtitle,
  description,
  cta,
  ctaSecondary,
  background = 'primary-gradient',
  image,
  children,
  region,
}: PremiumHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const onDark = background !== 'default';

  const bgClass = {
    'primary-gradient': 'hero-gradient text-white',
    'accent-gradient': 'accent-gradient text-white',
    default: 'bg-background',
  }[background];

  const regionData = region ? regions.find((r) => r.slug === region) : undefined;
  const anchors = regionData?.heroAnchors;
  // The anchor panel takes the right column, so it and an image cannot both run.
  const showPanel = !image && !!anchors?.length;

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className={`relative w-full overflow-hidden py-10 md:py-12 lg:py-24 px-6 md:px-8 ${bgClass}`}>
      {/* Layered ground. All decorative, all inside overflow-hidden so none of
          it can widen the page. The ruled lines are a ledger reference - the
          subject's own material rather than a generic mesh. */}
      {onDark && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.9) 0px, rgba(255,255,255,0.9) 1px, transparent 1px, transparent 34px)',
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-secondary/20 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-accent via-secondary to-transparent"
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 ${image || showPanel ? 'lg:grid-cols-[1.15fr_1fr]' : ''} gap-10 lg:gap-16 items-center`}>
          <div className="space-y-6 md:space-y-7">
            {(regionData || subtitle) && (
              <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3">
                {regionData && (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${
                      onDark ? 'border-white/25 bg-white/10 text-white' : 'border-border bg-input text-primary'
                    }`}
                  >
                    <RegionFlag region={regionData.slug} decorative />
                    {regionData.name}
                  </span>
                )}
                {subtitle && (
                  <span className="flex items-center gap-2.5">
                    <span aria-hidden="true" className={`h-px w-6 ${onDark ? 'bg-secondary' : 'bg-secondary'}`} />
                    <span className={`text-xs sm:text-sm font-bold uppercase tracking-[0.14em] ${onDark ? 'text-white/75' : 'text-accent'}`}>
                      {subtitle}
                    </span>
                  </span>
                )}
              </motion.div>
            )}

            <motion.h1
              {...fadeUp(0.08)}
              className={`font-serif text-[1.75rem] leading-[1.15] sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-balance ${
                background === 'default' ? 'text-primary' : ''
              }`}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                {...fadeUp(0.16)}
                className={`text-base sm:text-lg md:text-xl leading-relaxed text-balance max-w-2xl ${
                  background === 'default' ? 'text-muted' : 'text-white/85'
                }`}
              >
                {description}
              </motion.p>
            )}

            {(cta || ctaSecondary) && (
              <motion.div {...fadeUp(0.24)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                {cta && (
                  <Link
                    href={cta.href}
                    className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
                      cta.variant === 'secondary'
                        ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        : 'bg-white hover:bg-gray-100 text-primary shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {cta.text}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    {...(/^https?:\/\//.test(ctaSecondary.href)
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
                      background === 'default'
                        ? 'border-2 border-primary text-primary hover:bg-primary/5'
                        : 'border-2 border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    {ctaSecondary.text}
                  </Link>
                )}
              </motion.div>
            )}

            {children}
          </div>

          {image && <div className="hidden lg:flex items-center justify-center">{image}</div>}

          {/* What this region's work actually answers to. Factual anchors from
              lib/data.ts, not decoration - they tell a visitor within a second
              that this page is about their jurisdiction. */}
          {showPanel && (
            <motion.aside
              {...fadeUp(0.3)}
              className="hidden lg:block rounded-2xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-[2px]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                What the work answers to
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {anchors!.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90"
                  >
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/15 pt-4 text-sm leading-relaxed text-white/70">
                We prepare the work. Review, approval and every submission stay with you.
              </p>
            </motion.aside>
          )}
        </div>
      </div>
    </section>
  );
}
