import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const DEVICES = [
  ['iPhone SE',          320, 568, 2],
  ['iPhone SE 2/3',      375, 667, 2],
  ['iPhone 14/15',       390, 844, 3],
  ['iPhone 15 Pro Max',  430, 932, 3],
  ['Android small',      360, 800, 3],
  ['Android Pixel',      412, 915, 2.6],
  ['iPad mini',          768, 1024, 2],
  ['iPad Air',           820, 1180, 2],
  ['iPad Pro 12.9',     1024, 1366, 2],
  ['Laptop',            1280, 800, 1],
  ['Desktop',           1440, 900, 1],
];
const PAGES = [
  '/',
  '/industries/hoa-accounting',
  '/industries/property-management',
  '/blog/hoa-reserve-accounting',
  '/services/bookkeeping/united-states',
  '/contact',
];

const browser = await chromium.launch();

{
  const p = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
  await p.goto('http://localhost:3100/', { waitUntil: 'networkidle' });
  const bg = await p.evaluate(() => getComputedStyle(document.body).backgroundColor);
  if (bg !== 'rgb(250, 248, 243)') {
    console.log('ABORT: stylesheet not applied, body bg =', bg);
    process.exit(2);
  }
  console.log('stylesheet OK\n');
}

let fails = 0;
for (const [name, w, h, dpr] of DEVICES) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: h },
    deviceScaleFactor: dpr,
    isMobile: w < 900,
    hasTouch: w < 900,
  });
  let overflow = 0, small = 0, worst = '';
  for (const path of PAGES) {
    const page = await ctx.newPage();
    await page.goto('http://localhost:3100' + path, { waitUntil: 'networkidle' });
    const o = await page.evaluate(() =>
      document.documentElement.scrollWidth > window.innerWidth + 1
        ? document.documentElement.scrollWidth + '>' + window.innerWidth
        : null);
    if (o) { overflow++; worst = path + ' ' + o; }
    const s = await page.evaluate(() => {
      let n = 0;
      for (const el of document.querySelectorAll('main a, main button')) {
        if (el.closest('[aria-hidden="true"]')) continue;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue;
        const pt = (el.parentElement?.textContent || '').trim().length;
        const ot = (el.textContent || '').trim().length;
        if (pt > ot * 1.6) continue;
        if (r.height < 24) n++;
      }
      return n;
    });
    small += s;
    await page.close();
  }
  const bad = overflow || small;
  if (bad) fails++;
  console.log(`${bad ? 'FAIL' : 'ok  '}  ${name.padEnd(17)} ${String(w).padStart(4)}x${h} @${dpr}x   overflow:${overflow}  sub24px:${small}${worst ? '  ' + worst : ''}`);
  await ctx.close();
}

await browser.close();
console.log(fails ? `\n${fails} device profiles with issues` : '\nno horizontal overflow and no sub-24px tap target on any device profile');
