import { useEffect } from 'react'

const upsertMeta = (attribute, key, content) => {
  if (!content) return

  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute(attribute, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', content)
}

const absoluteUrl = (value) => {
  if (!value) return ''
  try {
    return new URL(value, window.location.origin).href
  } catch {
    return value
  }
}

export default function PageMeta({
  title,
  description,
  image = '/images/logo.png',
  type = 'website',
  noIndex = false,
  schema,
}) {
  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`
    const absoluteImage = absoluteUrl(image)
    const locale = document.documentElement.lang === 'ar' ? 'ar_MA' : 'fr_MA'

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', absoluteImage)
    upsertMeta('property', 'og:locale', locale)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', absoluteImage)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    let schemaScript = document.getElementById('page-structured-data')
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script')
        schemaScript.id = 'page-structured-data'
        schemaScript.type = 'application/ld+json'
        document.head.appendChild(schemaScript)
      }
      schemaScript.textContent = JSON.stringify(schema)
    } else {
      schemaScript?.remove()
    }
  }, [title, description, image, type, noIndex, schema])

  return null
}
