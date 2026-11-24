import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = path.resolve('out');
const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://kollaikal-rupesh.github.io').replace(/\/$/, '');
async function walk(dir) { const entries=await readdir(dir,{withFileTypes:true}); return (await Promise.all(entries.map(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]))).flat(); }
const files=await walk(root), htmlFiles=files.filter(f=>f.endsWith('.html'));
const errors=[]; const seenTitles=new Set(); let links=0;
for (const file of htmlFiles) {
 const html=await readFile(file,'utf8'); const relative=path.relative(root,file);
 if (!relative.startsWith('404') && !relative.startsWith('_not-found')) {
  assert.match(html, /<h1[\s>]/, `${relative} missing h1`);
  const title=html.match(/<title>(.*?)<\/title>/s)?.[1];
  assert(title, `${relative} missing title`); assert(!seenTitles.has(title),`Duplicate title: ${title}`); seenTitles.add(title);
  assert.match(html, /name="description" content="[^"]+"/);
  const route='/' + relative.replace(/index\.html$/, '');
  assert(html.includes(`rel="canonical" href="${origin}${base}${route}"`), `${relative} incorrect canonical`);
 }
 for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(match[1]);
 for (const match of html.matchAll(/<(a|link|script|img)\b[^>]*?\b(href|src)="([^"]+)"/g)) {
  let href=match[3].replaceAll('&amp;','&');
  if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
  links++;
  const [pathname, fragment] = href.split('#');
  if (!pathname) { if(fragment && !html.includes(`id="${fragment}"`)) errors.push(`${relative}: missing #${fragment}`); continue; }
  if (!pathname.startsWith('/')) continue;
  if(base && pathname!==base && !pathname.startsWith(base+'/')) { errors.push(`${relative}: path misses base: ${href}`); continue; }
  const clean=decodeURIComponent(pathname.split('?')[0].slice(base.length));
  let target=path.join(root,clean); if(!path.extname(target)) target=path.join(target,'index.html');
  try { await access(target); if(fragment && match[1]==='a') { const dest=await readFile(target,'utf8'); if(!dest.includes(`id="${fragment}"`)) errors.push(`${relative}: missing destination ${href}`); } } catch { errors.push(`${relative}: broken ${href}`); }
 }
 assert(!html.includes('href="/cv/kollaikal-rupesh-cv.pdf"') || files.some(f=>f.endsWith('/cv/kollaikal-rupesh-cv.pdf')), 'CV links exposed without PDF');
}
const sitemap=await readFile(path.join(root,'sitemap.xml'),'utf8');
assert(sitemap.includes(`${origin}${base}/research/turn-1-mini/`));
assert((await readFile(path.join(root,'robots.txt'),'utf8')).includes(`${origin}${base}/sitemap.xml`));
await access(path.join(root,'images/social.png')); await access(path.join(root,'.nojekyll'));
assert.equal(errors.length,0, errors.join('\n'));
console.log(`Passed: ${htmlFiles.length} HTML pages, ${links} internal links/assets, unique titles, canonicals, JSON-LD, sitemap, robots, and CV gating.`);
