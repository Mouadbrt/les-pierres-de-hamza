import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { useLanguage } from '../i18n/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <main className="flex min-h-screen items-center bg-ink px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <PageMeta title={t('notFound.metaTitle')} description={t('notFound.metaDescription')} noIndex />
      <div className="mx-auto w-full max-w-8xl">
        <span className="eyebrow text-white/45">{t('notFound.label')}</span>
        <h1 className="mt-5 font-display text-[clamp(6rem,18vw,18rem)] leading-[0.72] tracking-[-0.07em]">404</h1>
        <div className="mt-8 grid gap-8 border-t border-white/15 pt-8 lg:grid-cols-2 lg:items-end">
          <h2 className="font-display text-5xl leading-none sm:text-7xl">{t('notFound.title')}</h2>
          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-white/55">{t('notFound.description')}</p>
            <Link to="/" className="mt-6 inline-flex items-center gap-3 border-b border-white/30 pb-1 text-xs uppercase tracking-[0.18em]"><FiArrowLeft /> {t('notFound.back')}</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
