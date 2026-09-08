import { useEffect } from 'react'

type DocumentMetadata = {
  title: string
  description: string
  canonical: string
}

const metaSelectors = [
  ['meta[name="description"]', 'description'],
  ['meta[property="og:title"]', 'title'],
  ['meta[property="og:description"]', 'description'],
  ['meta[property="og:url"]', 'canonical'],
  ['meta[name="twitter:title"]', 'title'],
  ['meta[name="twitter:description"]', 'description'],
] as const

export function useDocumentMetadata(metadata: DocumentMetadata) {
  useEffect(() => {
    const previousTitle = document.title
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousCanonical = canonical?.href
    const previousMeta = metaSelectors.map(([selector]) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      return { element, content: element?.content }
    })

    document.title = metadata.title
    if (canonical) canonical.href = metadata.canonical
    metaSelectors.forEach(([selector, key]) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      if (element) element.content = metadata[key]
    })

    return () => {
      document.title = previousTitle
      if (canonical && previousCanonical) canonical.href = previousCanonical
      previousMeta.forEach(({ element, content }) => {
        if (element && content !== undefined) element.content = content
      })
    }
  }, [metadata])
}
