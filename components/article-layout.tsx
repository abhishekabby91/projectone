import Link from 'next/link';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import FAQSection from '@/components/faq-section';
import ReadingProgress from '@/components/reading-progress';
import Reveal from '@/components/reveal';
import ShareButtons from '@/components/share-buttons';
import { routeLastModified } from '@/lib/sitemap-dates';
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  baseUrl,
} from '@/lib/seo';
import { ReactNode, ReactElement, isValidElement } from 'react';

interface ArticleLayoutProps {
  title: string;
  category: string;
  description: string;
  publishedDate: string;
  updatedDate?: string;
  /**
   * Explicit Q&A for this article.
   *
   * 20 blog pages were building FAQPage schema from a local `faqs` array and
   * emitting it in their own <script> tag while never rendering the questions
   * anywhere a reader could see them. Google requires FAQPage content to be
   * visible on the page, so that markup was both a structured-data violation
   * and a waste of good copy on pages that were otherwise thin. Passing the
   * array here renders it AND emits the schema from one place.
   */
  faqs?: { question: string; answer: string }[];
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

type TocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

function formatPublishedDate(value: string, locale: string) {
  // Keep the machine-readable date (and Article schema) as YYYY-MM-DD, but
  // display the date in the audience's regional convention.
  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getText(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getText).join('');
  }

  if (isValidElement(node)) {
    const props = (node as ReactElement<{ children?: ReactNode }>).props;
    return getText(props.children);
  }

  return '';
}

/**
 * Derive FAQPage schema from the question-form headings the article already
 * shows the reader.
 *
 * 62 article pages carried 238 headings ending in "?" with an answer directly
 * underneath and no FAQPage markup on any of them -- the Q&A was already
 * written and published, just invisible to the answer engines. This emits it.
 *
 * **Every answer here is text the reader can see.** Google requires FAQPage
 * content to be visible on the page, and the stricter reason is that marked-up
 * text is what an AI assistant quotes back as Accounstone's own words. So the
 * answer is read straight out of the rendered siblings between one question
 * heading and the next, never summarised and never written fresh.
 *
 * Three guards keep it honest rather than greedy:
 *  - at least MIN_FAQS pairs, because one question is not an FAQ;
 *  - an answer must carry real prose (MIN_ANSWER chars), so a heading followed
 *    by a table or an image is skipped rather than marked up with a fragment;
 *  - the answer is cut at a sentence boundary, never mid-claim, because a
 *    truncated accounting statement can change its meaning.
 */
const MIN_FAQS = 2;
const MIN_ANSWER = 60;
const MAX_ANSWER = 700;

function flattenNodes(node: ReactNode, acc: ReactNode[] = []): ReactNode[] {
  if (Array.isArray(node)) {
    node.forEach((child) => flattenNodes(child, acc));
    return acc;
  }
  if (node === null || node === undefined || node === false) return acc;
  acc.push(node);
  return acc;
}

function trimToSentence(value: string) {
  if (value.length <= MAX_ANSWER) return value;
  const cut = value.slice(0, MAX_ANSWER);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('? '), cut.lastIndexOf('! '));
  return (stop > MIN_ANSWER ? cut.slice(0, stop + 1) : cut.trimEnd()).trim();
}

function extractFaqs(children: ReactNode): { question: string; answer: string }[] {
  const nodes = flattenNodes(children);
  const faqs: { question: string; answer: string }[] = [];

  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];
    if (!isValidElement(node)) continue;
    const tag = typeof node.type === 'string' ? node.type : '';
    if (tag !== 'h2' && tag !== 'h3') continue;

    const question = getText((node as ReactElement<{ children?: ReactNode }>).props.children).trim();
    if (!question.endsWith('?')) continue;

    // Prose only, until the next heading of any level.
    //
    // Tables and figures are deliberately skipped rather than flattened. A
    // <table> run through getText concatenates every cell with no separator --
    // the first version of this produced the answer "SectionTypical HOA
    // examplesAssetsBank accounts, receivables..." from a perfectly good table,
    // which is exactly the string an assistant would then quote back as
    // Accounstone's own words. A length check does not catch it, because a
    // table has plenty of characters. So only <p> and list items are read, and
    // list items are joined with a separator so they do not run together
    // either. A question whose answer is entirely a table is skipped: no
    // markup is better than unreadable markup.
    const parts: string[] = [];
    for (let j = i + 1; j < nodes.length; j += 1) {
      const sib = nodes[j];
      if (!isValidElement(sib)) continue;
      const sibTag = typeof sib.type === 'string' ? sib.type : '';
      if (/^h[1-6]$/.test(sibTag)) break;

      const sibProps = (sib as ReactElement<{ children?: ReactNode }>).props;

      if (sibTag === 'p') {
        const text = getText(sibProps.children).trim();
        if (text) parts.push(text);
        continue;
      }

      if (sibTag === 'ul' || sibTag === 'ol') {
        const items = flattenNodes(sibProps.children)
          .map((li) =>
            isValidElement(li)
              ? getText((li as ReactElement<{ children?: ReactNode }>).props.children).trim()
              : ''
          )
          .filter(Boolean);
        if (items.length) parts.push(`${items.join('; ')}.`);
      }
    }

    const answer = trimToSentence(parts.join(' ').replace(/\s+/g, ' ').trim());
    if (answer.length >= MIN_ANSWER) faqs.push({ question, answer });
  }

  return faqs.length >= MIN_FAQS ? faqs : [];
}

function addHeadingIds(
  nodes: ReactNode,
  toc: TocItem[],
  usedIds: Set<string>
): ReactNode {
  if (Array.isArray(nodes)) {
    return nodes.map((node) => addHeadingIds(node, toc, usedIds));
  }

  if (!isValidElement(nodes)) {
    return nodes;
  }

  const element = nodes as ReactElement<{
    children?: ReactNode;
    id?: string;
  }>;

  const tag = typeof element.type === 'string' ? element.type : '';

  if (tag === 'h2' || tag === 'h3') {
    const label = getText(element.props.children).trim();

    if (label) {
      const baseId =
        slugifyHeading(label) || `section-${toc.length + 1}`;

      let id = baseId;
      let suffix = 2;

      while (usedIds.has(id)) {
        id = `${baseId}-${suffix++}`;
      }

      usedIds.add(id);

      toc.push({
        id,
        label,
        level: tag === 'h2' ? 2 : 3,
      });

      return {
        ...element,
        props: {
          ...element.props,
          id,
        },
      };
    }
  }

  if (element.props?.children) {
    return {
      ...element,
      props: {
        ...element.props,
        children: addHeadingIds(
          element.props.children,
          toc,
          usedIds
        ),
      },
    };
  }

  return element;
}

type RelatedLink = { label: string; href: string };

function getRelatedLinks(slug: string): RelatedLink[] {
  const value = slug.toLowerCase();
  if (value.includes('hoa-')) return [
    { label: 'HOA accounting services', href: '/services/hoa-accounting' },
    { label: 'HOA accounting industry scope', href: '/industries/hoa-accounting' },
    { label: 'HOA bookkeeping services', href: '/services/hoa-bookkeeping' },
  ];
  if (value.includes('property-management') || value.includes('rent-roll')) return [
    { label: 'Property management accounting', href: '/industries/property-management' },
    { label: 'U.S. accounting services', href: '/services/accounting/united-states' },
    { label: 'U.S. bookkeeping services', href: '/services/bookkeeping/united-states' },
  ];
  if (value.includes('accounts-payable')) return [
    { label: 'U.S. accounts payable services', href: '/services/accounts-payable/united-states' },
    { label: 'Accounting services', href: '/services/accounting/united-states' },
  ];
  if (value.includes('accounts-receivable')) return [
    { label: 'U.S. accounts receivable services', href: '/services/accounts-receivable/united-states' },
    { label: 'Accounting services', href: '/services/accounting/united-states' },
  ];
  if (value.includes('payroll')) return [
    { label: 'U.S. payroll services', href: '/services/payroll/united-states' },
    { label: 'U.S. accounting services', href: '/services/accounting/united-states' },
  ];
  if (value.includes('tax-preparation') || value.includes('tax-outsourcing')) return [
    { label: 'U.S. tax preparation', href: '/services/tax-preparation/united-states' },
    { label: 'U.S. accounting services', href: '/services/accounting/united-states' },
  ];
  if (value.includes('audit-support')) return [
    { label: 'U.S. audit support', href: '/services/audit-support/united-states' },
    { label: 'U.S. accounting services', href: '/services/accounting/united-states' },
  ];
  if (value.includes('bookkeeping')) return [
    { label: 'U.S. bookkeeping services', href: '/services/bookkeeping/united-states' },
    { label: 'U.S. accounting services', href: '/services/accounting/united-states' },
  ];
  return [
    { label: 'U.S. accounting services', href: '/services/accounting/united-states' },
    { label: 'U.S. bookkeeping services', href: '/services/bookkeeping/united-states' },
  ];
}

export default function ArticleLayout({
  title,
  category,
  description,
  publishedDate,
  updatedDate,
  faqs,
  section,
  slug,
  inquiryTitle,
  inquiryLead,
  children,
}: ArticleLayoutProps) {
  const isBlog = section === 'blog';

  const hubHref = isBlog
    ? '/blog'
    : `/resources/${section}`;

  const path = `${hubHref}/${slug}`;
  const pathSegments = path.toLowerCase().split('/').filter(Boolean);
  const pathTokens = pathSegments.flatMap((segment) => segment.split('-'));
  const isUnitedKingdomPath = pathSegments.some((segment) => segment.includes('united-kingdom'));
  const dateLocale = isUnitedKingdomPath || pathTokens.includes('uk')
    ? 'en-GB'
    : pathTokens.includes('australia')
      ? 'en-AU'
      : pathTokens.includes('india')
        ? 'en-IN'
        : 'en-US';
  // `dateModified` is a freshness signal that both Google and the AI answer
  // engines weight when choosing what to cite, and only two articles were
  // passing `updatedDate` explicitly. The fallback is the generated per-route
  // date from `lib/sitemap-dates.ts` -- the last commit that changed this
  // page's rendered body -- so it is a true date rather than a fabricated one.
  // It is deliberately NOT `new Date()`; see CLAUDE.md, "Sitemap lastmod is
  // generated, not written". A route with no generated entry gets no
  // dateModified at all rather than a guess.
  const generatedModified = routeLastModified[path] ?? routeLastModified[path.replace(/\/$/, '')];
  const effectiveUpdatedDate =
    updatedDate ?? (generatedModified && generatedModified >= publishedDate ? generatedModified : undefined);

  const displayPublishedDate = formatPublishedDate(publishedDate, dateLocale);
  const displayUpdatedDate = effectiveUpdatedDate
    ? formatPublishedDate(effectiveUpdatedDate, dateLocale)
    : undefined;
  const relatedLinks = getRelatedLinks(slug);

  const sectionLabel = {
    guides: 'Guides',
    insights: 'Insights',
    blog: 'Blog',
  }[section];

  const toc: TocItem[] = [];

  const articleContent = addHeadingIds(
    children,
    toc,
    new Set()
  );

  const articleSchema = generateArticleSchema({
    title,
    description,
    imageUrl: `${baseUrl}/og-image.jpg`,
    publishedDate,
    updatedDate: effectiveUpdatedDate,
    author: 'Accounstone',
    slug,
    basePath: `${hubHref}/`,
  });

  // Explicit FAQs win; the derived ones fill in for articles that never had a
  // `faqs` array. Both end up rendered, so the schema always mirrors visible
  // text. See extractFaqs for why the derived set is prose-only.
  const derivedFaqs = extractFaqs(children);
  const explicitFaqs = faqs ?? [];
  const seenQuestions = new Set(explicitFaqs.map((f) => f.question.trim().toLowerCase()));
  const schemaFaqs = [
    ...explicitFaqs,
    ...derivedFaqs.filter((f) => !seenQuestions.has(f.question.trim().toLowerCase())),
  ];
  const faqSchema = schemaFaqs.length ? generateFAQSchema(schemaFaqs) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    {
      name: 'Home',
      url: baseUrl,
    },

    // /blog sits at the root, so it has no Resources level above it.
    ...(isBlog
      ? []
      : [
          {
            name: 'Resources',
            url: `${baseUrl}/resources`,
          },
        ]),

    {
      name: sectionLabel,
      url: `${baseUrl}${hubHref}`,
    },

    {
      name: title,
      url: `${baseUrl}${path}`,
    },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      ) : null}

      <section className="w-full py-8 md:py-12 px-6 md:px-8 hero-gradient text-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-sm md:text-base font-semibold tracking-wide uppercase text-white/80">
            {category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-balance">
            {title}
          </h1>

          <p className="text-lg text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="w-full px-6 md:px-8 pt-6 bg-white"
      >
        <ol className="max-w-3xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted">
          <li>
            <Link
              href="/"
              className="inline-block py-1.5 hover:text-primary transition-colors"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          {!isBlog && (
            <>
              <li>
                <Link
                  href="/resources"
                  className="inline-block py-1.5 hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>

              <li aria-hidden="true">/</li>
            </>
          )}

          <li>
            <Link
              href={hubHref}
              className="inline-block py-1.5 hover:text-primary transition-colors"
            >
              {sectionLabel}
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li
            aria-current="page"
            className="text-primary font-medium line-clamp-1"
          >
            {title}
          </li>
        </ol>
      </nav>

      <article className="w-full py-7 md:py-10 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {toc.length > 1 && (
            <nav
              aria-label="Table of contents"
              className="mb-9 rounded-xl border border-border bg-input p-5 md:p-6"
            >
              <h2 className="text-base font-bold text-primary mb-3">
                On this page
              </h2>

              <ol className="space-y-2 text-sm">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className={
                      item.level === 3 ? 'pl-4' : ''
                    }
                  >
                    <a
                      href={`#${item.id}`}
                      // Link list, not an inline link in a sentence -- WCAG 2.5.8 exempts the
                      // latter and not this. See CLAUDE.md, "Tap targets: measure, do not eyeball".
                      className="inline-block py-1.5 text-muted hover:text-primary transition-colors leading-6"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-5 text-sm text-muted" aria-label="Article information">
            <span><strong className="text-primary">Published:</strong> <time dateTime={publishedDate}>{displayPublishedDate}</time></span>
            {effectiveUpdatedDate && effectiveUpdatedDate !== publishedDate ? (
              <>
                <span aria-hidden="true">•</span>
                <span><strong className="text-primary">Last updated:</strong> <time dateTime={effectiveUpdatedDate}>{displayUpdatedDate}</time></span>
              </>
            ) : null}
            <span aria-hidden="true">•</span>
            <span>By Accounstone</span>
            <span aria-hidden="true">•</span>
            <span>{category}</span>
          </div>

          <Reveal className="prose-content space-y-8">
            <>{articleContent}</>
          </Reveal>

          <ShareButtons
            url={`${baseUrl}${path}`}
            title={title}
          />

          <section
            aria-labelledby="related-accounting-scope"
            className="mt-10 rounded-xl border border-border bg-input p-5 md:p-6"
          >
            <h2 id="related-accounting-scope" className="text-lg font-bold text-primary mb-3">
              Related accounting scope
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/*
        Engagement-triggered prompt: fires only after both a dwell time and a
        scroll-depth threshold, so it can never appear on arrival from search.
        Below `lg` it is a slim bar that does not cover the article — see the
        note in the component about intrusive interstitials.
      */}

      {/* Reads against the <article> box rather than the document, so "full"
          means the article is finished rather than the footer is on screen. */}
      <ReadingProgress />

      {/* The bottom bar is mounted once from app/layout.tsx now, so every
          page has it rather than only these 19. Rendering it here too would
          put two on an article. */}

      {explicitFaqs.length ? (
        <FAQSection subtitle={`${category} questions`} items={explicitFaqs} columns={1} />
      ) : null}

      <InquirySection
        compact
        background="input"
        source={path}
        title={
          inquiryTitle ??
          'Put This to Work on Your Own Files'
        }
        lead={
          inquiryLead ??
          'Reading about the process is one thing; applying it to your own ledgers, deadlines and review points is another. The consultation and the call are free.'
        }
      />

      <CTABanner
        title="Ready to Simplify Your Accounting?"
        description="Let's talk about what your business actually needs."
        cta={{
          text: 'Schedule Consultation',
          href: '/contact',
        }}
        background="primary"
      />
    </main>
  );
}
