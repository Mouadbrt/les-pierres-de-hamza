import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeStone } from '../i18n/contentTranslations'
import SmartImage from './SmartImage'

export default function StoneCard({ stone, index = 0 }) {
  const { language } = useLanguage()
  const item = localizeStone(stone, language)

  return (
    <motion.article layout initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="group">
      <Link to={`/produits/${stone.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone/20">
          <SmartImage src={stone.images[0]} alt={`${item.name} — natural stone`} loading="lazy" className="h-full w-full object-cover transition duration-[1100ms] ease-out group-hover:scale-[1.055]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition group-hover:opacity-80" />
          <span className="absolute left-4 top-4 border border-white/30 bg-black/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">{item.collection}</span>
        </div>
        <div className="flex items-start justify-between gap-5 border-b border-black/15 py-5">
          <div>
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-stone">{item.category}</p>
            <h3 className="font-display text-3xl leading-none sm:text-[2.15rem]">{item.name}</h3>
          </div>
          <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-black/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-ink group-hover:text-white"><FiArrowUpRight /></span>
        </div>
        <p className="max-w-lg pt-4 text-sm leading-6 text-black/60">{item.shortDescription}</p>
      </Link>
    </motion.article>
  )
}
