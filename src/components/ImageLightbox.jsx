import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiMinus, FiPlus, FiRotateCcw, FiX } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'
import SmartImage from './SmartImage'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export default function ImageLightbox({ images, activeIndex, onClose, onIndexChange, alt }) {
  const [zoom, setZoom] = useState(1)
  const touchStart = useRef(null)
  const { t } = useLanguage()

  const prev = () => onIndexChange((activeIndex - 1 + images.length) % images.length)
  const next = () => onIndexChange((activeIndex + 1) % images.length)

  useEffect(() => { setZoom(1) }, [activeIndex])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
      if (event.key === '+' || event.key === '=') setZoom((z) => clamp(z + 0.25, 1, 3))
      if (event.key === '-') setZoom((z) => clamp(z - 0.25, 1, 3))
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  })

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[120] bg-black/95 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={`${t('gallery.gallery')} ${alt}`} onWheel={(event) => setZoom((z) => clamp(z + (event.deltaY < 0 ? 0.15 : -0.15), 1, 3))} onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null }} onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const end = event.changedTouches[0]?.clientX ?? touchStart.current
        const delta = end - touchStart.current
        if (Math.abs(delta) > 55) delta > 0 ? prev() : next()
        touchStart.current = null
      }}>
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 sm:p-6">
          <span className="text-xs uppercase tracking-[0.22em] text-white/60">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
          <button type="button" onClick={onClose} className="grid size-11 place-items-center rounded-full border border-white/25" aria-label={t('gallery.close')}><FiX size={20} /></button>
        </div>

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-3 py-20 sm:px-20">
          <motion.div animate={{ scale: zoom }} transition={{ type: 'spring', stiffness: 220, damping: 25 }} className="h-full w-full max-w-7xl">
            <SmartImage src={images[activeIndex]} alt={`${alt} — ${t('gallery.view')} ${activeIndex + 1}`} className="h-full w-full select-none object-contain" draggable="false" />
          </motion.div>
        </div>

        {images.length > 1 && <>
          <button type="button" onClick={prev} className="absolute left-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/30 sm:left-6" aria-label={t('gallery.previous')}><FiChevronLeft size={22} /></button>
          <button type="button" onClick={next} className="absolute right-3 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/30 sm:right-6" aria-label={t('gallery.next')}><FiChevronRight size={22} /></button>
        </>}

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black/40 p-1.5 backdrop-blur-md">
          <button type="button" onClick={() => setZoom((z) => clamp(z - 0.25, 1, 3))} className="grid size-10 place-items-center rounded-full hover:bg-white/10" aria-label={t('gallery.zoomOut')}><FiMinus /></button>
          <span className="min-w-14 text-center text-[10px] tracking-[0.16em] text-white/70">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((z) => clamp(z + 0.25, 1, 3))} className="grid size-10 place-items-center rounded-full hover:bg-white/10" aria-label={t('gallery.zoomIn')}><FiPlus /></button>
          <button type="button" onClick={() => setZoom(1)} className="grid size-10 place-items-center rounded-full hover:bg-white/10" aria-label={t('gallery.resetZoom')}><FiRotateCcw /></button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
