import { useState } from 'react'
import fallbackImage from '../assets/images/stones/stone-placeholder.svg'

export default function SmartImage({ src, alt, className = '', ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackImage)

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => setCurrentSrc(fallbackImage)}
      {...props}
    />
  )
}
