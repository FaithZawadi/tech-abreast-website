#!/usr/bin/env node
// Find, preview and install high-quality stock photos from Pexels (free for
// commercial use, no attribution required — credits are still recorded).
//
//   1. Get a free API key: https://www.pexels.com/api/
//   2. Search:   PEXELS_API_KEY=xxxx node scripts/stock-photos.mjs search
//                (or: ... search hero banking   — only some slots)
//   3. Preview:  open stock-candidates/index.html and note the numbers you like
//   4. Install:  node scripts/stock-photos.mjs pick hero 3 banking 5 ...
//
// Needs Node 18+ and no packages. Candidates go to ./stock-candidates (git-ignored).

import fs from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const OUT = path.join(ROOT, 'stock-candidates')
const PER_QUERY = 4 // 4 photos × 4–5 search terms ≈ 16–20 options per slot

// Each slot: where the photo goes on the site, the shape it needs, and search terms.
// Search terms deliberately feature Black African professionals and settings.
const SLOTS = {
  hero: {
    file: 'public/images/hero.jpg', orientation: 'landscape', width: 2400,
    label: 'Home hero & page banners (landscape)',
    queries: ['black african software engineers office', 'african it professionals working computers', 'black data center technician server room', 'black business team technology meeting', 'african network engineer'],
  },
  team: {
    file: 'public/images/team.jpg', orientation: 'portrait', width: 1600,
    label: 'About / “Who we are” (portrait)',
    queries: ['black african business team office', 'black professionals meeting laptop', 'african consultants collaboration office', 'black colleagues smiling office'],
  },
  'public-sector': {
    file: 'public/images/industries/public-sector.jpg', orientation: 'square', width: 1200,
    label: 'Public Sector & NGOs',
    queries: ['african government officials meeting', 'black african conference delegates', 'african civil servants office computer', 'black leaders boardroom meeting africa'],
  },
  banking: {
    file: 'public/images/industries/banking.jpg', orientation: 'square', width: 1200,
    label: 'Banking & Finance',
    queries: ['black african banker laptop', 'black finance professional office screens', 'african woman mobile money phone', 'black businessman financial charts'],
  },
  healthcare: {
    file: 'public/images/industries/healthcare.jpg', orientation: 'square', width: 1200,
    label: 'Healthcare',
    queries: ['black african doctor tablet', 'african nurse hospital computer', 'black doctor digital health technology', 'african healthcare worker laptop'],
  },
  education: {
    file: 'public/images/industries/education.jpg', orientation: 'square', width: 1200,
    label: 'Education',
    queries: ['black african university students laptop', 'african students computer lab', 'black student studying laptop', 'african teacher classroom technology'],
  },
  travel: {
    file: 'public/images/industries/travel.jpg', orientation: 'square', width: 1200,
    label: 'Travel & Hospitality',
    queries: ['black hotel receptionist africa', 'african airport traveller black woman', 'black hospitality staff hotel lobby', 'african tourism guide tablet'],
  },
  retail: {
    file: 'public/images/industries/retail.jpg', orientation: 'square', width: 1200,
    label: 'Retail & Manufacturing',
    queries: ['black african shop cashier', 'african supermarket checkout black woman', 'black small business owner shop africa', 'african market vendor mobile payment'],
  },
  engineering: {
    file: 'public/images/industries/engineering.jpg', orientation: 'square', width: 1200,
    label: 'Engineering',
    queries: ['black african engineer factory tablet', 'black engineer industrial plant', 'african technician control room', 'black female engineer hard hat'],
  },
  construction: {
    file: 'public/images/industries/construction.jpg', orientation: 'square', width: 1200,
    label: 'Construction',
    queries: ['black african construction engineers site', 'black construction worker hard hat tablet', 'african architect construction site plans', 'black engineers building site africa'],
  },
}

// Pexels occasionally returns 5xx or 429 errors; retry a few times with a short backoff.
async function fetchWithRetry(url, opts = {}, tries = 4) {
  let res
  for (let i = 0; i < tries; i++) {
    res = await fetch(url, opts)
    if (res.ok || (res.status < 500 && res.status !== 429)) return res
    await new Promise((r) => setTimeout(r, 1000 * 2 ** i))
  }
  return res
}

async function search(slotNames) {
  const key = process.env.PEXELS_API_KEY
  if (!key) {
    console.error('Set PEXELS_API_KEY first (free key: https://www.pexels.com/api/)')
    process.exit(1)
  }
  await fs.mkdir(OUT, { recursive: true })
  const manifestPath = path.join(OUT, 'manifest.json')
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8').catch(() => '{}'))

  for (const name of slotNames) {
    const slot = SLOTS[name]
    if (!slot) { console.warn(`Unknown slot "${name}" — skipping`); continue }
    const dir = path.join(OUT, name)
    await fs.rm(dir, { recursive: true, force: true })
    await fs.mkdir(dir, { recursive: true })
    const seen = new Set()
    const items = []
    for (const q of slot.queries) {
      const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=${slot.orientation}&size=large&per_page=${PER_QUERY}`
      const res = await fetchWithRetry(url, { headers: { Authorization: key } })
      if (!res.ok) { console.warn(`  search failed for "${q}": ${res.status}`); continue }
      const { photos = [] } = await res.json()
      for (const p of photos) {
        if (seen.has(p.id)) continue
        seen.add(p.id)
        const n = items.length + 1
        const img = await fetchWithRetry(`${p.src.original}?auto=compress&cs=tinysrgb&w=${slot.width}`)
        if (!img.ok) continue
        await fs.writeFile(path.join(dir, `${n}.jpg`), Buffer.from(await img.arrayBuffer()))
        items.push({ n, id: p.id, alt: p.alt, photographer: p.photographer, photographerUrl: p.photographer_url, pexelsUrl: p.url, query: q })
      }
    }
    manifest[name] = items
    console.log(`${name.padEnd(14)} ${items.length} candidates`)
  }
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2))
  await writeGallery(manifest)
  console.log(`\nPreview: open ${path.relative(process.cwd(), path.join(OUT, 'index.html'))}`)
  console.log('Then install your picks, e.g.:  node scripts/stock-photos.mjs pick hero 3 banking 5')
}

async function writeGallery(manifest) {
  const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
  const sections = Object.entries(manifest).map(([name, items]) => `
    <section><h2>${esc(SLOTS[name]?.label || name)} <code>${esc(name)}</code></h2><div class="grid ${SLOTS[name]?.orientation}">
    ${items.map((it) => `<figure><img src="${name}/${it.n}.jpg" loading="lazy" alt="${esc(it.alt)}"><figcaption><b>#${it.n}</b> ${esc(it.alt || '')}<br><small>${esc(it.photographer)} · <a href="${esc(it.pexelsUrl)}" target="_blank">Pexels</a></small><br><code>pick ${esc(name)} ${it.n}</code></figcaption></figure>`).join('')}
    </div></section>`).join('')
  const html = `<!doctype html><meta charset="utf-8"><title>Stock photo candidates</title>
  <style>body{font:14px system-ui;margin:24px;background:#16150f;color:#eee}h2{margin:40px 0 12px}code{background:#333;padding:2px 6px;border-radius:4px;color:#f59e2b}
  .grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(260px,1fr))}.grid.landscape{grid-template-columns:repeat(auto-fill,minmax(380px,1fr))}
  figure{margin:0;background:#222;border-radius:10px;overflow:hidden}img{width:100%;display:block;aspect-ratio:auto}figcaption{padding:10px;line-height:1.5}a{color:#b7c43a}</style>
  <h1>Technology Abreast — stock photo candidates</h1><p>Note the numbers you like, then run <code>node scripts/stock-photos.mjs pick &lt;slot&gt; &lt;number&gt; …</code></p>${sections}`
  await fs.writeFile(path.join(OUT, 'index.html'), html)
}

async function pick(args) {
  if (args.length === 0 || args.length % 2) {
    console.error('Usage: node scripts/stock-photos.mjs pick <slot> <number> [<slot> <number> …]')
    process.exit(1)
  }
  const manifest = JSON.parse(await fs.readFile(path.join(OUT, 'manifest.json'), 'utf8'))
  const creditsPath = path.join(ROOT, 'public/images/credits.json')
  const credits = JSON.parse(await fs.readFile(creditsPath, 'utf8').catch(() => '{}'))
  for (let i = 0; i < args.length; i += 2) {
    const [name, n] = [args[i], Number(args[i + 1])]
    const slot = SLOTS[name]
    const item = manifest[name]?.find((it) => it.n === n)
    if (!slot || !item) { console.error(`No candidate #${n} for "${name}"`); continue }
    await fs.copyFile(path.join(OUT, name, `${n}.jpg`), path.join(ROOT, slot.file))
    credits[slot.file] = { source: 'Pexels', photographer: item.photographer, photographerUrl: item.photographerUrl, url: item.pexelsUrl, alt: item.alt }
    console.log(`✓ ${slot.file}  ←  #${n} by ${item.photographer}`)
  }
  await fs.writeFile(creditsPath, JSON.stringify(credits, null, 2) + '\n')
  console.log('\nCredits saved to public/images/credits.json. Preview with `npm run dev`, then commit and deploy.')
}

const [cmd, ...rest] = process.argv.slice(2)
if (cmd === 'search') await search(rest.length ? rest : Object.keys(SLOTS))
else if (cmd === 'pick') await pick(rest)
else {
  console.log('Usage:\n  PEXELS_API_KEY=xxxx node scripts/stock-photos.mjs search [slot …]\n  node scripts/stock-photos.mjs pick <slot> <number> [<slot> <number> …]\n\nSlots: ' + Object.keys(SLOTS).join(', '))
}
