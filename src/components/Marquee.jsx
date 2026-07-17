import { useLanguage } from '../i18n/LanguageContext'

export default function Marquee({ dark = true }) {
  const { t } = useLanguage()
  const text = t('marquee')

  return (
    <div className={`marquee-shell overflow-hidden border-y ${dark ? 'border-white/15 bg-ink text-white' : 'border-black/15 bg-cream text-ink'}`}>
      <div className="marquee-track flex w-max py-4 sm:py-5">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="shrink-0 px-4 text-xs font-semibold uppercase tracking-[0.28em] sm:text-sm">{text}&nbsp;</span>
        ))}
      </div>
    </div>
  )
}
