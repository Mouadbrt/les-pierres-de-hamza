import { useState } from 'react'
import { FiMaximize2 } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import ImageLightbox from './ImageLightbox'
import SmartImage from './SmartImage'

export default function ProductGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <div>
      <button type="button" onClick={() => setLightboxOpen(true)} className="group relative block aspect-[5/4] w-full overflow-hidden bg-stone/20 text-start" aria-label={`${t('gallery.open')} ${alt}`}>
        <SmartImage src={images[activeIndex]} alt={`${alt} — ${t('gallery.mainImage')}`} loading="eager" fetchPriority="high" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
        <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-ivory text-ink shadow-lg transition group-hover:scale-105"><FiMaximize2 /></span>
      </button>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button key={`${image}-${index}`} type="button" onClick={() => setActiveIndex(index)} className={`aspect-[4/3] overflow-hidden border ${activeIndex === index ? 'border-ink' : 'border-transparent opacity-70 hover:opacity-100'}`} aria-label={`${t('gallery.showImage')} ${index + 1}`}>
            <SmartImage src={image} alt={`${alt} — ${t('gallery.thumbnail')} ${index + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      {lightboxOpen && <ImageLightbox images={images} activeIndex={activeIndex} onClose={() => setLightboxOpen(false)} onIndexChange={setActiveIndex} alt={alt} />}
    </div>
  )
}
