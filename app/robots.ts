import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';

const protectedPaths = ['/admin', '/private', '/internal', '/api'];

/**
 * Accounstone is intentionally open to search and AI discovery.
 *
 * The named AI groups repeat the protected paths because a specific
 * user-agent group does not inherit the rules from the wildcard group.
 * Keeping the restrictions explicit prevents AI crawlers from reaching
 * internal/API routes while leaving public pages and Next.js assets crawlable.
 */
export default function robots(): MetadataRoute.Robots {
  const openAiAndSearchBots = [
    'OAI-SearchBot',
    'OAI-AdsBot',
    'GPTBot',
    'ChatGPT-User',
    'Google-Extended',
    'PerplexityBot',
    'ClaudeBot',
    'anthropic-ai',
    'Applebot-Extended',
    'Bytespider',
    'CCBot',
    'Meta-ExternalAgent',
    'Amazonbot',
    'cohere-ai',
    'YouBot',
    'DuckAssistBot',
  ];


  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: protectedPaths,
      },
      ...openAiAndSearchBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: protectedPaths,
      })),
      // The two major search crawlers, named explicitly (2026-10-20).
      //
      // Both already matched the `*` group above, so this changes nothing a
      // crawler is permitted to do — it is housekeeping, not a fix. It exists
      // because every other crawler this site cares about has its own group,
      // and Bing was the conspicuous omission while Bing Webmaster Tools was
      // reporting URLs as "Blocked". Being named removes robots.txt from the
      // list of things anyone has to rule out. Note that a named group does
      // NOT inherit the wildcard's rules, which is why the protected paths are
      // repeated here as they are everywhere else in this file.
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: protectedPaths,
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: protectedPaths,
      },
      {
        userAgent: 'msnbot',
        allow: '/',
        disallow: protectedPaths,
      },
      // Keep the major SEO crawlers available so backlink and technical
      // monitoring tools can audit the public site. This does not improve
      // Google rankings directly; it keeps third-party diagnostics current.
      {
        userAgent: 'AhrefsBot',
        allow: '/',
        disallow: protectedPaths,
      },
      {
        userAgent: 'SemrushBot',
        allow: '/',
        disallow: protectedPaths,
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    // Keep the sitemap discoverable to all crawlers. `host` is intentionally
    // omitted because it is not part of the standard robots.txt directives.
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
