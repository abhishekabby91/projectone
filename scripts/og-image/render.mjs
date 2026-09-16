/**
 * Renders the link-preview card to public/og-image.jpg and public/og-image.png.
 *
 *   node scripts/og-image/render.mjs
 *
 * Both files are written on purpose. The .jpg is what the metadata points at —
 * ~48KB against ~342KB for the same card as PNG, and at quality 88 the logo
 * edges show no visible ringing. The .png is overwritten rather than deleted
 * because social platforms and anyone holding the old URL would otherwise keep
 * being served the previous card, which advertised a service the company does
 * not offer.
 *
 * Chromium is pre-installed in this environment; resolve Playwright from the
 * global install rather than adding a project devDependency.
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto('file://' + path.join(here, 'card.html'), { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.screenshot({ path: path.join(root, 'public/og-image.jpg'), type: 'jpeg', quality: 88 });
await page.screenshot({ path: path.join(root, 'public/og-image.png') });
await browser.close();
console.log('wrote public/og-image.jpg and public/og-image.png (1200x630)');
