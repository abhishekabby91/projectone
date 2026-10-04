# Accounstone IndexNow Integration

## Purpose

This repository has an IndexNow notification system for the production Accounstone website.

The goal is to notify Bing/IndexNow when website content changes, without replacing or modifying the existing sitemap implementation.

## Production flow

1. Website changes are pushed to the `main` branch.
2. `.github/workflows/indexnow.yml` is triggered when relevant website paths change:
   - `app/**`
   - `components/**`
   - `lib/**`
   - `public/**`
   - `next.config.mjs`
3. The workflow waits 90 seconds for the Vercel production deployment.
4. It fetches the production sitemap:
   `https://www.accounstone.com/sitemap.xml`
5. It extracts the URLs from the production sitemap.
6. It submits those URLs to the IndexNow endpoint:
   `https://api.indexnow.org/indexnow`
7. The IndexNow key is verified through the root key file:
   `https://www.accounstone.com/<INDEXNOW_KEY>.txt`
8. Bing decides whether and when to crawl/index the submitted URLs. A successful IndexNow response is not a guarantee of search indexing.

## Files added for this integration

- Root IndexNow verification key file: `<INDEXNOW_KEY>.txt`
- `scripts/indexnow.mjs` — standalone sitemap-to-IndexNow submission script.
- `.github/workflows/indexnow.yml` — automated production sitemap submission.
- This documentation file — implementation notes for future developers/AI agents.

## Important: do not replace the sitemap

The existing sitemap implementation is intentionally separate:

- `app/sitemap.ts`
- `app/robots.ts`

Do not replace, remove, or redesign those files merely to support IndexNow.

The IndexNow workflow consumes the production sitemap; it does not generate or own the sitemap.

## Important implementation details

- The IndexNow key is public by design because the key verification file must be publicly reachable.
- The workflow submits URLs from the production sitemap rather than attempting to construct a separate URL list.
- The workflow is limited to 10,000 URLs per IndexNow request, matching the intended batch limit.
- The workflow uses the production hostname `www.accounstone.com`.
- The workflow currently waits 90 seconds before reading the production sitemap so that Vercel has time to deploy the pushed changes.

## Current verification status

The GitHub Actions history should be checked before assuming an IndexNow submission succeeded.

A successful run of the separate `Accounstone SEO Agent` workflow is NOT evidence that `.github/workflows/indexnow.yml` successfully submitted URLs.

When troubleshooting, verify these independently:

1. The commit was pushed to `main`.
2. The changed path matches the `paths` filters in `indexnow.yml`.
3. Vercel production deployment completed.
4. `https://www.accounstone.com/sitemap.xml` returns valid XML containing `<loc>` URLs.
5. The IndexNow key file is publicly reachable at the expected root URL.
6. The IndexNow workflow actually ran.
7. The workflow log contains an HTTP success response from `https://api.indexnow.org/indexnow`.
8. Only after the above should IndexNow notification be considered verified.

## Troubleshooting

### Workflow did not run

Check whether the push changed one of the configured paths. Changes only to documentation, workflow files, or unrelated files will not trigger the current path-filtered workflow.

### Sitemap has no URLs

Check the production deployment and `app/sitemap.ts`. Do not hard-code a replacement sitemap into the IndexNow workflow.

### IndexNow request fails

Check:

- production sitemap availability;
- XML parsing;
- key file availability;
- correct production hostname;
- IndexNow API response/status;
- GitHub Actions network/request logs.

### Bing does not show pages as indexed

IndexNow is a notification mechanism, not an indexing guarantee. Check Bing Webmaster Tools separately for crawl/indexing status and URL-level issues.

## Guidance for future AI agents/developers

Before modifying this integration:

- Inspect this file and `.github/workflows/indexnow.yml` first.
- Preserve the existing `app/sitemap.ts` and `app/robots.ts` unless there is a separate, explicit sitemap/robots task.
- Verify the live production chain before making assumptions.
- Do not claim that Bing indexed a URL merely because the IndexNow API accepted a submission.
- If an issue is reported, inspect the relevant GitHub Actions run and its logs before changing the implementation.
