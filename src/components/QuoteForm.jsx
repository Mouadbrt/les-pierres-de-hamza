import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { buildWhatsAppUrl } from '../data/businessInfo'
import { useLanguage } from '../i18n/LanguageContext'

export default function QuoteForm({ subject, compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const { t } = useLanguage()

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('quoteForm.nameRequired')
    if (!form.phone.trim()) next.phone = t('quoteForm.phoneRequired')
    if (form.phone.trim() && !/^[+\d\s().-]{7,}$/.test(form.phone.trim())) next.phone = t('quoteForm.invalidPhone')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = (event) => {
    event.preventDefault()
    if (!validate()) return
    const message = `${t('quoteForm.whatsappIntro')} ${subject}.\n\n${t('quoteForm.nameLabel')} : ${form.name}\n${t('quoteForm.phoneLabel')} : ${form.phone}\n${t('quoteForm.subjectLabel')} : ${subject}\n${t('quoteForm.messageLabel')} : ${form.message || t('quoteForm.notSpecified')}`
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const field = 'w-full border-b border-black/20 bg-transparent px-0 py-4 text-base outline-none transition placeholder:text-black/35 focus:border-black'

  return (
    <form onSubmit={submit} className={compact ? '' : 'border border-black/15 p-5 sm:p-8 lg:p-10'} noValidate>
      <div className="mb-8">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-stone">{t('quoteForm.noCommitment')}</p>
        <h2 className="font-display text-4xl leading-none sm:text-5xl">{t('quoteForm.title')}</h2>
      </div>

      <div className="space-y-1">
        <div>
          <label htmlFor={`name-${subject}`} className="sr-only">{t('quoteForm.fullName')}</label>
          <input id={`name-${subject}`} className={field} placeholder={`${t('quoteForm.fullName')} *`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={Boolean(errors.name)} />
          {errors.name && <p className="mt-2 text-xs text-red-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`phone-${subject}`} className="sr-only">{t('quoteForm.phone')}</label>
          <input id={`phone-${subject}`} type="tel" className={field} placeholder={`${t('quoteForm.phone')} *`} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} aria-invalid={Boolean(errors.phone)} />
          {errors.phone && <p className="mt-2 text-xs text-red-700">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor={`message-${subject}`} className="sr-only">{t('quoteForm.message')}</label>
          <textarea id={`message-${subject}`} rows="4" className={`${field} resize-none`} placeholder={t('quoteForm.message')} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
      </div>

      <button type="submit" className="group mt-8 flex w-full items-center justify-between bg-ink px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-charcoal">
        {t('quoteForm.send')} <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </form>
  )
}
