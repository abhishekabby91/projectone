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
    'OAI-AdsBot',
    'GPTBot',
    'Google-Extended',
    'PerplexityBot',
    'ClaudeBot',
    'anthropic-ai',
    'Applebot-Extended',
    'Bytespider',
    'CCBot',
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
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
