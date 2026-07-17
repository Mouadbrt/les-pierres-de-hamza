import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useLanguage } from '../i18n/LanguageContext'

export default function FAQ() {
  const [openItems, setOpenItems] = useState([0])
  const { t } = useLanguage()
  const faqs = t('faq.items')

  const toggle = (index) => {
    setOpenItems((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
  }

  return (
    <div className="divide-y divide-black/15 border-y border-black/15">
      {faqs.map((item, index) => {
        const open = openItems.includes(index)
        const panelId = `faq-panel-${index}`
        return (
          <div key={`${item.q}-${index}`}>
            <button type="button" onClick={() => toggle(index)} className="grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-3 py-6 text-start sm:grid-cols-[5rem_1fr_auto] sm:py-8" aria-expanded={open} aria-controls={panelId}>
              <span className="font-display text-3xl text-black/35 sm:text-4xl">{String(index + 1).padStart(2, '0')}</span>
              <span className="pe-2 font-display text-2xl leading-tight sm:text-3xl lg:text-4xl">{item.q}</span>
              <span className="grid size-10 place-items-center rounded-full border border-black/20">{open ? <FiMinus /> : <FiPlus />}</span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div id={panelId} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                  <p className="max-w-3xl pb-7 ps-[3.5rem] text-sm leading-7 text-black/60 sm:pb-9 sm:ps-[5rem] sm:text-base">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
