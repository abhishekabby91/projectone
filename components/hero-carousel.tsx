'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
}

interface HeroCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  pageHeading: string;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
  pageHeading,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(next, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [next, autoPlayInterval, isPaused, shouldReduceMotion]);

  const handlePrev = () => prev();
  const handleNext = () => next();
  const handleDot = (index: number) => goTo(index);

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full h-72 md:h-[420px] overflow-hidden bg-background"
      role="region"
      aria-roledescription="carousel"
      aria-label={pageHeading}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <h1 className="sr-only">{pageHeading}</h1>

      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={isActive}
                  className="object-cover w-full h-full"
                  sizes="100vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />

              <div className="absolute inset-0 flex items-center px-6 md:px-12">
                <div className="max-w-2xl space-y-4 text-white pl-5 md:pl-7 margin-rule">
                  {slide.subtitle && (
                    <motion.p
                      key={`subtitle-${slide.id}-${isActive}`}
                      initial={isActive && !shouldReduceMotion ? { opacity: 0, y: 12 } : false}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/80"
                    >
                      {slide.subtitle}
                    </motion.p>
                  )}
                  <motion.h2
                    key={`title-${slide.id}-${isActive}`}
                    initial={isActive && !shouldReduceMotion ? { opacity: 0, y: 16 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="font-serif text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-balance"
                  >
                    {slide.title}
                  </motion.h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/*
        Ledger-line progress track — replaces plain dots. Each slide
        gets a thin ruled segment that fills left-to-right over the
        autoplay duration, echoing the "ledger-rule" hairline signature
        already used for dividers elsewhere on the site (see
        .ledger-rule in globals.css) instead of a generic dot indicator.
      */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 w-full max-w-xs px-6">
        <div
          className="self-end text-white/70 text-xs font-semibold tabular-nums tracking-wider"
          aria-hidden="true"
        >
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <div className="flex gap-2 w-full">
        {slides.map((_, index) => (
          // The visible indicator is a 3px bar, which is far too small to tap
          // accurately on a phone. The button itself is padded out to ~27px
          // (above the 24px WCAG 2.5.8 minimum) and the padding is cancelled
          // with a negative margin, so the hit area grows without moving the
          // bar or changing the layout. The bar is a child span so the
          // absolutely-positioned progress fills still measure against it.
          <button
            key={index}
            onClick={() => handleDot(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
            className="flex-1 py-3 -my-3"
          >
            <span className="relative block h-[3px] w-full bg-white/25 rounded-full overflow-hidden">
              {index === current && (
                <span
                  key={current}
                  className="absolute inset-y-0 left-0 bg-white rounded-full animate-ledger-fill"
                  style={{
                    animationDuration: `${autoPlayInterval}ms`,
                    animationPlayState: isPaused || shouldReduceMotion ? 'paused' : 'running',
                  }}
                />
              )}
              {index < current && <span className="absolute inset-0 bg-white/70" />}
            </span>
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}
