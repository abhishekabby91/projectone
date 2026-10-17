import Image from 'next/image';

interface HeroBannerProps {
  image: string;
  alt: string;
  /** The page's h1. Rendered visually hidden — the visible headline is the h2. */
  pageHeading: string;
  title: string;
  subtitle?: string;
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
}: HeroBannerProps) {
  return (
    <div className="relative w-full h-72 md:h-[420px] overflow-hidden bg-background">
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

      <div className="absolute inset-0 flex items-center px-6 md:px-12">
        <div className="max-w-2xl space-y-4 text-white pl-5 md:pl-7 margin-rule">
          {subtitle && (
            <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/90">
              {subtitle}
            </p>
          )}
          <h2 className="font-serif text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
