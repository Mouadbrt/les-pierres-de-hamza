import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import PageMeta from '../components/PageMeta'
import { buildWhatsAppUrl, businessInfo } from '../data/businessInfo'
import { stones } from '../data/stones'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeStone } from '../i18n/contentTranslations'

export default function Contact() {
  const { t, language } = useLanguage()
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: '', stone: '', city: '', message: '' })
  const [errors, setErrors] = useState({})
  const projectOptions = t('contact.projectOptions')
  const localizedStones = stones.map((stone) => localizeStone(stone, language))
  const display = (value) => value || t('contact.unavailable')

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('contact.errors.name')
    if (!form.phone.trim()) next.phone = t('contact.errors.phone')
    else if (!/^[+\d\s().-]{7,}$/.test(form.phone.trim())) next.phone = t('contact.errors.invalidPhone')
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = t('contact.errors.invalidEmail')
    if (!form.project) next.project = t('contact.errors.project')
    if (!form.stone) next.stone = t('contact.errors.stone')
    if (!form.city.trim()) next.city = t('contact.errors.city')
    if (!form.message.trim()) next.message = t('contact.errors.message')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = (event) => {
    event.preventDefault()
    if (!validate()) return
    const message = `${t('contact.whatsappMessage')}\n\n${t('contact.fullName')} : ${form.name}\n${t('contact.phone')} : ${form.phone}\n${t('contact.email')} : ${form.email || t('contact.notSpecified')}\n${t('contact.projectType')} : ${form.project}\n${t('contact.stoneType')} : ${form.stone}\n${t('contact.city')} : ${form.city}\n${t('contact.message')} : ${form.message}`
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  const field = 'w-full border-b border-black/20 bg-transparent px-0 py-4 text-sm outline-none transition placeholder:text-black/35 focus:border-black'

  return (
    <main className="min-h-screen bg-ivory pt-28 sm:pt-32 lg:pt-36">
      <PageMeta title={t('contact.metaTitle')} description={t('contact.metaDescription')} />
      <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-8xl overflow-hidden border border-black/15 lg:grid-cols-[.92fr_1.08fr]">
          <div className="bg-ink p-6 text-white sm:p-10 lg:p-14">
            <span className="eyebrow text-white/50">{t('contact.label')}</span>
            <h1 className="mt-6 font-display text-[clamp(4rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.045em]">{t('contact.title')}</h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">{t('contact.description')}</p>

            <dl className="mt-14 divide-y divide-white/15 border-y border-white/15 text-sm">
              {[[t('contact.email'), display(businessInfo.email)], [t('contact.phone'), display(businessInfo.phone)], [t('contact.whatsapp'), display(businessInfo.whatsapp)], [t('contact.address'), display(businessInfo.address)], [t('contact.hours'), t('contact.byAppointment')]].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[7rem_1fr] gap-4 py-4"><dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">{label}</dt><dd className="text-white/75">{value}</dd></div>
              ))}
            </dl>
          </div>

          <div className="p-6 sm:p-10 lg:p-14">
            <span className="eyebrow">{t('contact.customLabel')}</span>
            <h2 className="mt-5 font-display text-5xl leading-none sm:text-6xl">{t('contact.quoteTitle')}</h2>
            <form onSubmit={submit} className="mt-9" noValidate>
              <div className="grid gap-x-6 md:grid-cols-2">
                <div><input className={field} placeholder={`${t('contact.fullName')} *`} value={form.name} onChange={(e) => update('name', e.target.value)} aria-label={t('contact.fullName')} />{errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}</div>
                <div><input type="tel" className={field} placeholder={`${t('contact.phone')} *`} value={form.phone} onChange={(e) => update('phone', e.target.value)} aria-label={t('contact.phone')} />{errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}</div>
                <div><input type="email" className={field} placeholder={t('contact.email')} value={form.email} onChange={(e) => update('email', e.target.value)} aria-label={t('contact.email')} />{errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}</div>
                <div><input className={field} placeholder={`${t('contact.city')} *`} value={form.city} onChange={(e) => update('city', e.target.value)} aria-label={t('contact.city')} />{errors.city && <p className="mt-1 text-xs text-red-700">{errors.city}</p>}</div>
                <div>
                  <label className="sr-only" htmlFor="project-type">{t('contact.projectType')}</label>
                  <select id="project-type" className={field} value={form.project} onChange={(e) => update('project', e.target.value)}>
                    <option value="">{t('contact.projectType')} *</option>
                    {projectOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                  {errors.project && <p className="mt-1 text-xs text-red-700">{errors.project}</p>}
                </div>
                <div>
                  <label className="sr-only" htmlFor="stone-type">{t('contact.stoneType')}</label>
                  <select id="stone-type" className={field} value={form.stone} onChange={(e) => update('stone', e.target.value)}>
                    <option value="">{t('contact.stoneType')} *</option>
                    {localizedStones.map((stone) => <option key={stone.slug} value={stone.name}>{stone.name}</option>)}
                    <option value={t('contact.other')}>{t('contact.other')}</option>
                  </select>
                  {errors.stone && <p className="mt-1 text-xs text-red-700">{errors.stone}</p>}
                </div>
              </div>
              <div>
                <textarea rows="5" className={`${field} mt-2 resize-none`} placeholder={`${t('contact.message')} *`} value={form.message} onChange={(e) => update('message', e.target.value)} aria-label={t('contact.message')} />
                {errors.message && <p className="mt-1 text-xs text-red-700">{errors.message}</p>}
              </div>
              <button type="submit" className="group mt-8 flex w-full items-center justify-between bg-ink px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                {t('contact.send')} <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
