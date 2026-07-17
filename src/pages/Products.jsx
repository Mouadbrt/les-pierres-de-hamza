import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import StoneCard from '../components/StoneCard'
import { stoneCategories, stones } from '../data/stones'
import { useLanguage } from '../i18n/LanguageContext'

export default function Products() {
  const [active, setActive] = useState('TOUS')
  const { t } = useLanguage()
  const filtered = active === 'TOUS' ? stones : stones.filter((stone) => stone.category.toUpperCase() === active)

  return (
    <main className="min-h-screen bg-ivory pt-28 sm:pt-32 lg:pt-36">
      <PageMeta title={t('products.metaTitle')} description={t('products.metaDescription')} />
      <section className="px-4 pb-12 pt-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-8xl">
          <span className="eyebrow">{t('products.label')}</span>
          <div className="mt-6 grid gap-7 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <h1 className="font-display text-[clamp(4.5rem,9.2vw,10.5rem)] leading-[0.82] tracking-[-0.05em]">{t('products.title')}</h1>
            <p className="max-w-xl text-sm leading-7 text-black/55 sm:text-base lg:justify-self-end">{t('products.description')}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-8xl gap-2 overflow-x-auto py-4 scrollbar-none">
          {stoneCategories.map((category) => (
            <button key={category} type="button" onClick={() => setActive(category)} className={`shrink-0 border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${active === category ? 'border-ink bg-ink text-white' : 'border-black/15 hover:border-black/50'}`}>
              {t(`categories.stone.${category}`)}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div layout className="mx-auto grid max-w-8xl gap-x-6 gap-y-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((stone, index) => <StoneCard key={stone.slug} stone={stone} index={index} />)}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  )
}
