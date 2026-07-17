import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-cream px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-8xl">
        <span className="eyebrow">{t('cta.label')}</span>
        <div className="mt-7 grid gap-9 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <h2 className="max-w-5xl font-display text-[clamp(3.8rem,8.3vw,8.5rem)] leading-[0.86] tracking-[-0.04em]">{t('cta.title')}</h2>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-black/60">{t('cta.text')}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="group inline-flex items-center justify-between gap-5 bg-ink px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">{t('cta.quote')} <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
              <Link to="/projets" className="group inline-flex items-center justify-between gap-5 border border-black/25 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink">{t('cta.projects')} <FiArrowUpRight /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
