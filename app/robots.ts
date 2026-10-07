import { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/seo';

const protectedPaths = ['/admin', '/private', '/internal', '/api', '/_next/'];

/**
 * Accounstone is intentionally open to search and AI discovery.
 *
 * The named AI groups repeat the protected paths because a specific
 * user-agent group does not inherit the rules from the wildcard group.
 * Keeping the restrictions explicit prevents AI crawlers from reaching
 * internal/API routes while leaving public content crawlable.
 */
export default function robots(): MetadataRoute.Robots {
  const openAiAndSearchBots = [
    'OAI-SearchBot',
    'GPTBot',
    'Google-Extended',
    'PerplexityBot',
    'ClaudeBot',
    'anthropic-ai',
    'Applebot-Extended',
    'Bytespider',
    'CCBot',
  ];

  const protectedRules = protectedPaths.map((path) => ({ disallow: path }));

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
      // Known SEO crawlers are not needed for site discovery and are
      // intentionally blocked to reduce unnecessary automated traffic.
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
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
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
