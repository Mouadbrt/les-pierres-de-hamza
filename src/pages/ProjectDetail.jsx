import { FiArrowLeft } from 'react-icons/fi'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import QuoteForm from '../components/QuoteForm'
import SmartImage from '../components/SmartImage'
import { getProjectBySlug } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeProject } from '../i18n/contentTranslations'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { t, language } = useLanguage()
  const baseProject = getProjectBySlug(slug)
  if (!baseProject) return <Navigate to="/404" replace />
  const project = localizeProject(baseProject, language)

  return (
    <main className="min-h-screen bg-ivory pt-28 sm:pt-32 lg:pt-36">
      <PageMeta
        title={`${project.title} — Les Pierres de Hamza`}
        description={project.shortDescription}
        image={project.image}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.shortDescription,
          image: project.image,
          about: project.material,
          locationCreated: project.origin,
          creator: { '@type': 'Organization', name: 'Les Pierres de Hamza' },
        }}
      />
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-8xl">
          <Link to="/projets" className="mb-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55 hover:text-black"><FiArrowLeft /> {t('projects.back')}</Link>
          <div className="aspect-[16/10] max-h-[78vh] overflow-hidden bg-stone/20"><SmartImage src={project.image} alt={`${project.title} — ${project.material}`} loading="eager" fetchPriority="high" className="h-full w-full object-cover" /></div>

          <div className="grid gap-10 border-b border-black/15 py-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-16 lg:py-16">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h1 className="mt-5 max-w-5xl font-display text-[clamp(4rem,7.5vw,8.2rem)] leading-[0.86] tracking-[-0.045em]">{project.title}</h1>
              <p className="mt-8 max-w-3xl text-sm leading-7 text-black/60 sm:text-base">{project.description}</p>
            </div>
            <dl className="divide-y divide-black/15 border-y border-black/15 lg:self-end">
              {[[t('projects.project'), project.title], [t('projects.material'), project.material], [t('projects.origin'), project.origin], [t('projects.usage'), project.usage]].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone">{label}</dt><dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-2">
            <div className="hidden border-y border-l border-black/15 bg-cream p-10 lg:flex lg:flex-col lg:justify-between">
              <span className="eyebrow">{t('projects.ideaLabel')}</span>
              <p className="max-w-lg font-display text-6xl leading-[0.92]">{t('projects.ideaText')}</p>
            </div>
            <QuoteForm subject={project.title} />
          </div>
        </div>
      </section>
    </main>
  )
}
