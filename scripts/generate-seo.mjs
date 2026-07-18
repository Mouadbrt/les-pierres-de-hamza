import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { stones } from '../src/data/stones.js'
import { projects } from '../src/data/projects.js'

const rawUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL

const normalizeSiteUrl = (value) => {
  if (!value) return null
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
  return withProtocol.replace(/\/$/, '')
}

const siteUrl = normalizeSiteUrl(rawUrl)
const distDir = resolve('dist')
await mkdir(distDir, { recursive: true })

if (!siteUrl) {
  console.warn('[SEO] SITE_URL absent: sitemap.xml non généré. Définissez SITE_URL sur votre hébergement.')
  process.exit(0)
}

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/produits', priority: '0.9', changefreq: 'weekly' },
  { path: '/projets', priority: '0.8', changefreq: 'monthly' },
  { path: '/a-propos', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  ...stones.map(({ slug }) => ({ path: `/produits/${slug}`, priority: '0.8', changefreq: 'monthly' })),
  ...projects.map(({ slug }) => ({ path: `/projets/${slug}`, priority: '0.7', changefreq: 'monthly' })),
]

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map(
    ({ path, priority, changefreq }) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`,
  )
  .join('\n')}\n</urlset>\n`

const robots = `User-agent: *\nAllow: /\nDisallow: /404\n\nSitemap: ${siteUrl}/sitemap.xml\n`

await Promise.all([
  writeFile(resolve(distDir, 'sitemap.xml'), sitemap, 'utf8'),
  writeFile(resolve(distDir, 'robots.txt'), robots, 'utf8'),
])

console.log(`[SEO] sitemap.xml généré avec ${routes.length} URLs pour ${siteUrl}`)
