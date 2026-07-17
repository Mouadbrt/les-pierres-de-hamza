import { useLanguage } from '../i18n/LanguageContext'

const languages = ['fr', 'en', 'ar']

export default function LanguageSwitcher({ light = false, onChange }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]" aria-label="Language selector">
      {languages.map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setLanguage(code)
              onChange?.()
            }}
            className={`transition ${language === code ? (light ? 'text-white' : 'text-ink') : light ? 'text-white/40 hover:text-white/75' : 'text-black/35 hover:text-black/70'}`}
            aria-pressed={language === code}
          >
            {code.toUpperCase()}
          </button>
          {index < languages.length - 1 && <span className={light ? 'text-white/25' : 'text-black/20'}>/</span>}
        </span>
      ))}
    </div>
  )
}
