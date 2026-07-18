import { useEffect, useState } from 'react'
import fallbackImage from '../assets/images/stones/stone-placeholder.svg'

export default function SmartImage({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  onError,
  ...props
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackImage)

  useEffect(() => {
    setCurrentSrc(src || fallbackImage)
  }, [src])

  const handleError = (event) => {
    if (currentSrc !== fallbackImage) setCurrentSrc(fallbackImage)
    onError?.(event)
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={handleError}
      {...props}
    />
  )
}
