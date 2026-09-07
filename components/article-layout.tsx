import Link from 'next/link';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import ScrollInquiryPrompt from '@/components/scroll-inquiry-prompt';
import Reveal from '@/components/reveal';
import ShareButtons from '@/components/share-buttons';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';
import { ReactNode } from 'react';

interface ArticleLayoutProps {
  title: string;
  category: string;
  description: string;
  publishedDate: string;
  /**
   * Which hub the article belongs to. `blog` exists because the six posts under
   * /blog were previously forced through the /resources/{section}/ shape by
   * passing `slug="../../../blog/x"`, which put a literal `../../../` traversal
   * path into the BreadcrumbList and Article schema and made the trail read
   * "Home > Resources > Guides" on a /blog/ URL.
   */
  section: 'guides' | 'insights' | 'blog';
  slug: string;
  /**
   * The ask at the foot of the article. Every article passes its own, because
   * the same paragraph on twenty pages both reads as boilerplate and pushes
   * these pages together on a near-duplicate measure - the problem CLAUDE.md
   * records from the first time this band was rolled out site-wide.
   */
  inquiryTitle?: string;
  inquiryLead?: string;
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  category,
  description,
  publishedDate,
  section,
  slug,
  inquiryTitle,
  inquiryLead,
  children,
}: ArticleLayoutProps) {
  const isBlog = section === 'blog';
  const hubHref = isBlog ? '/blog' : `/resources/${section}`;
  const path = `${hubHref}/${slug}`;
  const sectionLabel = { guides: 'Guides', insights: 'Insights', blog: 'Blog' }[section];

  const articleSchema = generateArticleSchema({
    title,
    description,
    imageUrl: `${baseUrl}/og-image.png`,
    publishedDate,
    author: 'Accounstone',
    slug,
    basePath: `${hubHref}/`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    // /blog sits at the root, so it has no Resources level above it.
    ...(isBlog ? [] : [{ name: 'Resources', url: `${baseUrl}/resources` }]),
    { name: sectionLabel, url: `${baseUrl}${hubHref}` },
    { name: title, url: `${baseUrl}${path}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-8 md:py-12 px-6 md:px-8 hero-gradient text-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/80">
            {category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-balance">{title}</h1>
          <p className="text-lg text-white/90 leading-relaxed">{description}</p>
        </div>
      </section>

      <nav aria-label="Breadcrumb" className="w-full px-6 md:px-8 pt-6 bg-white">
        <ol className="max-w-3xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li><Link href="/" className="inline-block py-1.5 hover:text-primary transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          {!isBlog && (
            <>
              <li><Link href="/resources" className="inline-block py-1.5 hover:text-primary transition-colors">Resources</Link></li>
              <li aria-hidden="true">/</li>
            </>
          )}
          <li><Link href={hubHref} className="inline-block py-1.5 hover:text-primary transition-colors">{sectionLabel}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-primary font-medium line-clamp-1">{title}</li>
        </ol>
      </nav>

      <article className="w-full py-7 md:py-10 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <Reveal className="prose-content space-y-8">
            <>{children}</>
          </Reveal>
          <ShareButtons url={`${baseUrl}${path}`} title={title} />
        </div>
      </article>

      {/*
        Engagement-triggered prompt: fires only after both a dwell time and a
        scroll-depth threshold, so it can never appear on arrival from search.
        Below `lg` it is a slim bar that does not cover the article — see the
        note in the component about intrusive interstitials.
      */}
      <ScrollInquiryPrompt title={inquiryTitle} lead={inquiryLead} source={path} />

      <InquirySection
        compact
        background="input"
        source={path}
        title={inquiryTitle ?? 'Put This to Work on Your Own Files'}
        lead={
          inquiryLead ??
          'Reading about the process is one thing; applying it to your own ledgers, deadlines and review points is another. The consultation and the call are free.'
        }
      />

      <CTABanner
        title="Ready to Simplify Your Accounting?"
        description="Let's talk about what your business actually needs."
        cta={{ text: 'Schedule Consultation', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
