import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppUrl } from '../data/businessInfo'
import { useLanguage } from '../i18n/LanguageContext'

export default function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a href={buildWhatsAppUrl(t('whatsapp.defaultMessage'))} target="_blank" rel="noreferrer" className="fixed bottom-4 right-4 z-40 grid size-14 place-items-center rounded-full bg-ink text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105 sm:bottom-6 sm:right-6" aria-label={t('whatsapp.aria')}>
      <FaWhatsapp size={24} />
    </a>
  )
}
