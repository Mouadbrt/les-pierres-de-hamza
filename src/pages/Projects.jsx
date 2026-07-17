import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import PageMeta from '../components/PageMeta'
import ProjectCard from '../components/ProjectCard'
import { projectCategories, projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const [active, setActive] = useState('TOUS')
  const { t } = useLanguage()
  const filtered = active === 'TOUS' ? projects : projects.filter((project) => project.category === active || project.filters?.includes(active))

  return (
    <main className="min-h-screen bg-ivory pt-28 sm:pt-32 lg:pt-36">
      <PageMeta title={t('projects.metaTitle')} description={t('projects.metaDescription')} />
      <section className="px-4 pb-12 pt-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-8xl">
          <span className="eyebrow">{t('projects.label')}</span>
          <div className="mt-6 grid gap-7 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
            <h1 className="max-w-6xl font-display text-[clamp(4.3rem,8.4vw,9.5rem)] leading-[0.82] tracking-[-0.05em]">{t('projects.title')}</h1>
            <p className="max-w-xl text-sm leading-7 text-black/55 sm:text-base lg:justify-self-end">{t('projects.description')}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-8xl gap-2 overflow-x-auto py-4 scrollbar-none">
          {projectCategories.map((category) => (
            <button key={category} type="button" onClick={() => setActive(category)} className={`shrink-0 border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${active === category ? 'border-ink bg-ink text-white' : 'border-black/15 hover:border-black/50'}`}>
              {t(`categories.project.${category}`)}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div layout className="mx-auto grid max-w-8xl gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  )
}
