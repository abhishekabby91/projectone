import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Lightbulb, ClipboardList } from 'lucide-react';
import Reveal from '@/components/reveal';
import CountUp from '@/components/count-up';
import SectionHeading from '@/components/section-heading';
import ResourceCard from '@/components/resource-card';
import CTABanner from '@/components/cta-banner';
import InquirySection from '@/components/inquiry-section';
import { generateMetadata as genMeta, generateBreadcrumbSchema, baseUrl } from '@/lib/seo';
import { guides, insights, articles, topicIndex, topicDestination } from '@/lib/resources';

const PATH = '/resources';

export const metadata: Metadata = genMeta({
  title: 'Accounting Guides, Insights & Case Studies',
  description:
    'Practical accounting, bookkeeping, tax preparation and workflow guides for CPA firms, accounting teams and growing businesses.',
  path: PATH,
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: baseUrl },
  { name: 'Resources', url: `${baseUrl}${PATH}` },
]);

const featured = guides.find((g) => g.featured);
const latest = guides.filter((g) => g.isNew && !g.featured).slice(0, 4);

const sections = [
  {
    title: 'Guides',
    href: '/resources/guides',
    icon: BookOpen,
    count: guides.length,
    noun: 'guides',
    description: 'Longer reads on the decisions that actually come up — engagement models, costs, month-end close, and choosing a partner.',
  },
  {
    title: 'Insights',
    href: '/resources/insights',
    icon: Lightbulb,
    count: insights.length,
    noun: 'explainers',
    description: 'Short explainers on a single accounting or tax topic, for when you need the answer rather than the background.',
  },
  {
    title: 'Case Studies',
    href: '/resources/case-studies',
    icon: ClipboardList,
    count: 3,
    noun: 'scenarios',
    description: 'Illustrative workflow and capacity situations, written as scenarios rather than presented as named client work.',
  },
];

const topics = topicIndex();

export default function ResourcesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero. The soft radial is painted with an aria-hidden span rather than a
          background image so it costs nothing and cannot overflow the section. */}
      <section className="relative w-full overflow-hidden bg-white px-6 md:px-8 py-12 md:py-16">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-full max-w-[36rem] -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl">
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="Resources"
            title="Useful Answers to Practical Accounting Questions"
            lead="Guides and explainers for people responsible for keeping the books current, getting work ready for review, and keeping accounting workflows moving. Start with the question you are trying to solve."
          />
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              {sections.map((s) => (
                <li key={s.title} className="flex items-baseline gap-1.5">
                  <CountUp value={s.count} className="font-serif text-2xl font-bold text-primary" />
                  <span className="text-muted">{s.noun}</span>
                </li>
              ))}
              <li className="flex items-baseline gap-1.5">
                <CountUp value={articles.length} className="font-serif text-2xl font-bold text-primary" />
                <span className="text-muted">
                  <Link href="/blog" className="inline-block py-1 underline underline-offset-4 hover:text-primary transition-colors">
                    blog articles
                  </Link>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Featured guide */}
      {featured && (
        <section className="w-full bg-input px-6 md:px-8 py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Start here" title="The One to Read First" />
            <div className="mt-6" />
            <Reveal>
              <ResourceCard item={featured} featured />
            </Reveal>
          </div>
        </section>
      )}

      {/* Sections */}
      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Where to look" title="Three Kinds of Reading" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <Reveal key={section.href} delay={Math.min(i * 0.08, 0.24)}>
                  <Link
                    href={section.href}
                    className="group flex h-full flex-col rounded-xl border border-border bg-input p-6 sm:p-7 transition-all duration-200 hover:border-primary/50 hover:bg-white hover:shadow-[0_2px_16px_-4px_rgba(30,58,95,0.18)]"
                  >
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary">
                      {section.title}
                      <span className="ml-2 align-middle text-sm font-sans font-semibold text-muted tabular-nums">
                        {section.count}
                      </span>
                    </h3>
                    <p className="mt-2 flex-1 text-sm sm:text-base leading-relaxed text-muted">{section.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Browse {section.title.toLowerCase()}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest guides */}
      {latest.length > 0 && (
        <section className="w-full bg-input px-6 md:px-8 py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <SectionHeading eyebrow="Recently added" title="Latest Guides" />
            <div className="mt-8 space-y-4">
              {latest.map((item, i) => (
                <Reveal key={item.href} delay={Math.min(i * 0.06, 0.24)}>
                  <ResourceCard item={item} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <div className="mt-7 text-center">
                <Link
                  href="/resources/guides"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border bg-white px-5 py-3 font-semibold text-primary transition-colors hover:border-primary/50"
                >
                  All {guides.length} guides
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Topics */}
      <section className="w-full bg-white px-6 md:px-8 py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="By topic"
            title="What These Resources Cover"
            lead="The number shows how many pieces touch each topic. Each one links through to the service page that work sits behind."
          />
          <Reveal delay={0.08}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {topics.map(({ topic, count }) => {
                const href = topicDestination[topic];
                const inner = (
                  <>
                    {topic}
                    <span className="ml-1.5 text-muted tabular-nums">{count}</span>
                  </>
                );
                return (
                  <li key={topic}>
                    {href ? (
                      <Link
                        href={href}
                        className="inline-flex min-h-[40px] items-center rounded-full border border-border bg-input px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary/50 hover:bg-white"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <span className="inline-flex min-h-[40px] items-center rounded-full border border-border bg-input px-4 py-2 text-sm font-semibold text-primary">
                        {inner}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <InquirySection
        compact
        source="/resources"
        title="Cannot Find the Answer Here?"
        lead="Describe the situation you are working through and we will answer it directly, or point you at the piece that covers it."
      />

      <CTABanner
        title="Cannot Find What You Are Looking For?"
        description="Tell us the situation you are working through and we will point you at the most relevant reading — or answer it directly."
        cta={{ text: 'Ask a Question', href: '/contact' }}
        background="primary"
      />
    </main>
  );
}
