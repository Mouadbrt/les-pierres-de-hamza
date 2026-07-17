import { useEffect } from 'react'

export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = title
    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.content = description
  }, [title, description])

  return null
}
