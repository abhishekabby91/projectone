import Image from 'next/image';
import Link from 'next/link';

interface HeroBannerProps {
  image: string;
  alt: string;
  /** The page's h1. Rendered visually hidden — the visible headline is the h2. */
  pageHeading: string;
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
}

/**
 * The homepage hero: one photograph, the page h1 (visually hidden) and a
 * visible serif headline over it.
 *
 * It replaced a three-slide carousel on 2026-10-17 at the owner's request.
 * The reason the scrim can be this strong is particular to the photograph
 * that was kept: its left half is empty desk surface and every subject —
 * calculator, charts, pens — sits in the right third. So darkening the left
 * costs nothing of the picture, which is exactly what could not be true
 * across three different crops. `CLAUDE.md` recorded the three-slide version
 * as having no single fixed colour that holds a reliable contrast ratio;
 * with one image there is one crop to tune against, and the measured ratios
 * are in `SEO-CHANGELOG.md`.
 *
 * Server component by construction — no state, no motion — so the largest
 * element above the fold carries no JavaScript.
 */
export default function HeroBanner({
  image,
  alt,
  pageHeading,
  title,
  subtitle,
  cta,
  ctaSecondary,
}: HeroBannerProps) {
  return (
    // The height is a FLOOR, not a fixed value, and the copy sits in normal
    // flow rather than `absolute inset-0`. With the buttons added, a fixed
    // `h-72` clipped them at 320 and 390px -- `next/image` with `fill` is
    // absolutely positioned and contributes no height, so the text column is
    // what the box has to size to.
    <div className="relative flex w-full min-h-72 items-center overflow-hidden bg-background md:min-h-[420px]">
      <h1 className="sr-only">{pageHeading}</h1>

      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="object-cover w-full h-full"
        sizes="100vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70 xl:via-primary/80 xl:to-primary/25"
        aria-hidden="true"
      />

      <div className="relative w-full px-6 py-10 md:px-12 md:py-12">
        <div className="max-w-2xl space-y-4 text-white pl-5 md:pl-7 margin-rule">
          {subtitle && (
            <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/90">
              {subtitle}
            </p>
          )}
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance">
            {title}
          </h2>

          {(cta || ctaSecondary) && (
            <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:gap-4">
              {cta && (
                <Link
                  href={cta.href}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl sm:w-auto sm:px-8 sm:py-4 sm:text-base"
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
                  className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
