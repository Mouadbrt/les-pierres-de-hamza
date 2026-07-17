import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getByPath, translations } from './translations'

const supportedLanguages = ['fr', 'en', 'ar']
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('lph-language')
    return supportedLanguages.includes(saved) ? saved : 'fr'
  })

  const setLanguage = (nextLanguage) => {
    if (supportedLanguages.includes(nextLanguage)) setLanguageState(nextLanguage)
  }

  useEffect(() => {
    localStorage.setItem('lph-language', language)
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const value = useMemo(() => {
    const t = (path) => getByPath(translations[language], path) ?? getByPath(translations.fr, path) ?? path
    return { language, setLanguage, t, isRTL: language === 'ar' }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
