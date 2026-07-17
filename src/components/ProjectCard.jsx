import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeProject } from '../i18n/contentTranslations'
import SmartImage from './SmartImage'

export default function ProjectCard({ project, featured = false, index = 0 }) {
  const { language } = useLanguage()
  const item = localizeProject(project, language)

  return (
    <motion.article layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ delay: Math.min(index * 0.06, 0.24), duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="group">
      <Link to={`/projets/${project.slug}`} className="block">
        <div className={`relative overflow-hidden bg-stone/20 ${featured ? 'aspect-[16/12] lg:aspect-[16/11]' : 'aspect-[4/5]'}`}>
          <SmartImage src={project.image} alt={`${item.title} — ${item.material}`} loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.06]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80 transition group-hover:opacity-95" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-5 text-white sm:p-7">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                <span>{project.number}</span><span className="h-px w-9 bg-white/35" /><span>{item.category}</span>
              </div>
              <h3 className={`font-display leading-[0.96] ${featured ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'}`}>{item.title}</h3>
              {featured && <p className="mt-4 max-w-xl text-sm leading-6 text-white/70">{item.shortDescription}</p>}
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-ink"><FiArrowUpRight /></span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
