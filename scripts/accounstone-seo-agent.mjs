#!/usr/bin/env node
/**
 * Accounstone SEO Growth Agent
 *
 * Deterministic first-pass orchestrator for technical SEO, human-content
 * quality, CTR opportunities, internal linking and release QA.
 * It intentionally never rewrites or deploys production content by itself.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, "app");
const OUT = path.join(ROOT, "seo-agent", "reports");
const GENERIC = [
  "in today's fast-paced world",
  "seamless solutions",
  "unlock growth",
  "game-changer",
  "comprehensive suite",
  "cutting-edge",
  "robust solutions",
  "leverage our",
  "one-stop solution",
  "tailored solutions",
];
const RISKY = ["guaranteed savings", "guaranteed results", "#1", "best accounting company", "risk-free"];

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory() && !["node_modules", ".next"].includes(entry.name)) return walk(p);
    if (entry.isFile() && /\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) return [p];
    return [];
  });
}
function rel(p) { return path.relative(ROOT, p).replaceAll(path.sep, "/"); }
function strip(code) { return code.replace(/\/\/.*$/gm, "").replace(/\/\*[\s\S]*?\*\//g, ""); }
// Strips HTML/JSX tags to get plain text for word-count/phrase checks. Deliberately
// excludes "{" from the tag body: a self-closing component call that spans many lines
// with only JS-expression props (e.g. <ServicePageTemplate overview="..." benefits={[...]} />)
// has no literal ">" until its closing "/>", so a naive [^>]+ match swallows the entire
// call — including every prop string — as a single "tag" and erases all real content.
// Previously undercounted app/services/accounting/page.tsx at 46 words instead of ~490.
function text(code) { return code.replace(/<[a-zA-Z][^>{]*>/g, " ").replace(/[{}`$]/g, " ").replace(/\s+/g, " ").trim(); }
function firstMatch(code, re) { const m = code.match(re); return m?.[1]?.trim() ?? ""; }
function scorePage(item) {
  let score = 100;
  if (!item.title) score -= 20;
  if (!item.description) score -= 15;
  if (!item.h1) score -= 15;
  if (item.h1Count !== 1) score -= 10;
  if (item.wordCount < 350) score -= 10;
  if (!item.canonical) score -= 10;
  if (item.generic.length) score -= Math.min(10, item.generic.length * 2);
  if (item.risky.length) score -= 10;
  if (item.internalLinks < 2) score -= 5;
  if (!item.cta) score -= 5;
  return Math.max(0, score);
}

// Only score real content routes. robots.ts, sitemap.ts, not-found.tsx,
// error boundaries and image generators are not pages and will always look
// like they are "missing metadata and an H1".
const files = walk(APP).filter(f => /\/(page|layout)\.(tsx|jsx|mdx)$/.test(f.replaceAll(path.sep, "/")));
const pages = [];
const titles = new Map();
for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const code = strip(raw);
  const body = text(raw);
  const title = firstMatch(raw, /title\s*:\s*["'`]([^"'`]+)["'`]/);
  const description = firstMatch(raw, /description\s*:\s*["'`]([^"'`]+)["'`]/);
  const h1s = [...raw.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => text(m[1]));
  // Most pages render their H1 from a shared layout component rather than a
  // literal <h1> tag. Without this, every templated page is falsely flagged
  // as "missing H1". These components each render exactly one <h1>.
  const H1_COMPONENTS = /<(PremiumHero|ArticleLayout|ServicePageTemplate|IndustryPageTemplate|HeroBanner|Hero)\b/;
  const h1FromComponent = h1s.length === 0 && H1_COMPONENTS.test(raw);
  if (h1FromComponent) {
    const t = firstMatch(raw, /title\s*=\s*["'`]([^"'`]+)["'`]/) || firstMatch(raw, /title\s*:\s*["'`]([^"'`]+)["'`]/);
    h1s.push(t || "(rendered by layout component)");
  }
  const canonical = /canonical\s*[:=]/i.test(code) || /alternates\s*:/i.test(code);
  // Counts both JSX attribute links (href="/...") and object-literal links
  // (href: '/...', used by relatedLinks/relatedServices arrays passed into
  // IndustryPageTemplate/ServicePageTemplate). Still undercounts pages whose
  // related-content links are declared as bare slugs (e.g. { slug: 'bookkeeping' })
  // resolved to a URL only inside the template component, which this scanner
  // does not walk — treat LOW internal-linking findings on templated pages
  // with skepticism rather than as confirmed gaps.
  const internalLinks = (raw.match(/href\s*[:=]\s*["'`]\/(?!\/)/g) || []).length;
  const cta = /(contact|schedule|book|request|talk|discuss|get started|learn more)/i.test(body);
  const generic = GENERIC.filter(p => body.toLowerCase().includes(p));
  const risky = RISKY.filter(p => body.toLowerCase().includes(p.toLowerCase()));
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const item = { file: rel(file), title, description, h1: h1s[0] || "", h1Count: h1s.length, canonical, internalLinks, cta, wordCount, generic, risky };
  item.score = scorePage(item);
  pages.push(item);
  if (title) titles.set(title, [...(titles.get(title) || []), item.file]);
}

// A route may legitimately split concerns: metadata in layout.tsx (required
// when page.tsx is a client component) and the H1 in page.tsx. Scored
// separately, each looks broken. Merge the layout's title/description into
// its sibling page, then drop the layout from the report.
const byDir = new Map();
for (const p of pages) byDir.set(p.file, p);
const merged = [];
for (const p of pages) {
  const isLayout = /\/layout\.tsx$/.test(p.file);
  if (isLayout) continue;
  const layoutFile = p.file.replace(/\/page\.tsx$/, "/layout.tsx");
  const layout = byDir.get(layoutFile);
  if (layout) {
    p.title = p.title || layout.title;
    p.description = p.description || layout.description;
    p.canonical = p.canonical || layout.canonical;
    p.score = scorePage(p);
  }
  merged.push(p);
}
pages.length = 0;
pages.push(...merged);

const duplicateTitles = [...titles.entries()].filter(([, files]) => files.length > 1);
const priorities = [];
for (const p of pages) {
  if (!p.title || !p.description || !p.h1) priorities.push({ priority: "HIGH", type: "metadata", file: p.file, action: "Add missing title, meta description or H1." });
  if (p.h1Count > 1) priorities.push({ priority: "MEDIUM", type: "heading", file: p.file, action: `Reduce ${p.h1Count} H1 elements to one clear page topic.` });
  if (p.wordCount < 350) priorities.push({ priority: "MEDIUM", type: "content-depth", file: p.file, action: "Review whether the page answers its search intent sufficiently; add useful workflow detail rather than filler." });
  if (p.generic.length) priorities.push({ priority: "MEDIUM", type: "humanization", file: p.file, action: `Replace generic AI/corporate phrases: ${p.generic.join(", ")}.` });
  if (p.risky.length) priorities.push({ priority: "HIGH", type: "trust", file: p.file, action: `Review unsupported/risky claims: ${p.risky.join(", ")}.` });
  if (p.internalLinks < 2) priorities.push({ priority: "LOW", type: "internal-linking", file: p.file, action: "Add contextual links to closely related Accounstone pages where useful." });
}
for (const [title, filesForTitle] of duplicateTitles) priorities.push({ priority: "MEDIUM", type: "duplicate-title", file: filesForTitle.join(", "), action: `Differentiate duplicate title: ${title}` });

const date = new Date().toISOString().slice(0, 10);
const report = `# Accounstone SEO Agent Report — ${date}\n\n## Summary\n\n- Files/pages scanned: **${pages.length}**\n- High-priority findings: **${priorities.filter(x => x.priority === "HIGH").length}**\n- Medium-priority findings: **${priorities.filter(x => x.priority === "MEDIUM").length}**\n- Low-priority findings: **${priorities.filter(x => x.priority === "LOW").length}**\n- Duplicate title groups: **${duplicateTitles.length}**\n\n## Page quality scores\n\n| File | Score | Words | H1s | Internal links | Generic phrases | Risky claims |\n|---|---:|---:|---:|---:|---:|---:|\n${pages.sort((a,b) => a.score-b.score).map(p => `| ${p.file} | ${p.score}/100 | ${p.wordCount} | ${p.h1Count} | ${p.internalLinks} | ${p.generic.length} | ${p.risky.length} |`).join("\n")}\n\n## Priority queue\n\n${priorities.length ? priorities.map((x, i) => `${i + 1}. **${x.priority} — ${x.type}** — ${x.file}\n   - ${x.action}`).join("\n") : "No automated findings. Continue with GSC/SERP review and human editorial review."}\n\n## Human-content rules\n\n- Lead with the visitor's problem, not Accounstone's sales pitch.\n- Explain real accounting workflows, handoffs, review points and deliverables.\n- Prefer specific examples over adjectives.\n- Do not invent clients, credentials, statistics, locations or outcomes.\n- Avoid keyword stuffing and near-duplicate market pages.\n\n## CTR queue\n\nThis repository scan cannot access private Google Search Console data. When GSC data is available, prioritize pages with **high impressions + low CTR** and **positions 4–15**, then test clearer, more intent-matched titles and descriptions. Do not claim a CTR increase until measured.\n\n## Next actions\n\n1. Review HIGH findings first.\n2. Use GSC query/page data to select CTR experiments.\n3. Humanize only pages where the rewrite adds useful information.\n4. Validate internal links and structured data.\n5. Run \`npm run seo:agent\` again after changes.\n`;

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, `${date}.md`), report);
fs.writeFileSync(path.join(OUT, "latest.md"), report);
console.log(report);
console.log(`\nWrote ${path.join("seo-agent/reports", `${date}.md`)}`);
