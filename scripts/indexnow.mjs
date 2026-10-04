/** Submit production sitemap URLs to IndexNow. */
const key = process.env.INDEXNOW_KEY;
if (!key) { console.error('INDEXNOW_KEY is not set.'); process.exit(1); }
const sitemapUrl = 'https://www.accounstone.com/sitemap.xml';
const response = await fetch(sitemapUrl);
if (!response.ok) throw new Error(`Could not fetch production sitemap: HTTP ${response.status}`);
const xml = await response.text();
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].trim());
if (!urls.length) throw new Error('Production sitemap contains no URLs.');
const result = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'www.accounstone.com', key, keyLocation: `https://www.accounstone.com/${key}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow response: HTTP ${result.status}`);
console.log(await result.text());
if (!result.ok) process.exit(1);