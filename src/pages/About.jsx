import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import PageMeta from '../components/PageMeta'
import SmartImage from '../components/SmartImage'
import { useLanguage } from '../i18n/LanguageContext'

const images = [
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=84',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=84',
]

export default function About() {
  const { t } = useLanguage()
  const pillars = t('about.pillars')
  const values = t('about.values')

  return (
    <main className="min-h-screen bg-ivory pt-28 sm:pt-32 lg:pt-36">
      <PageMeta title={t('about.metaTitle')} description={t('about.metaDescription')} />

      <section className="px-4 pb-16 pt-10 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <div className="mx-auto max-w-8xl">
          <span className="eyebrow">{t('about.label')}</span>
          <h1 className="mt-6 max-w-7xl font-display text-[clamp(4.4rem,9vw,10rem)] leading-[0.82] tracking-[-0.05em]">{t('about.title')}</h1>

          <div className="mt-14 grid gap-10 border-t border-black/15 pt-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:pt-14">
            <h2 className="font-display text-4xl leading-none sm:text-5xl">{t('about.welcome')}</h2>
            <div className="max-w-3xl space-y-5 text-sm leading-7 text-black/60 sm:text-base">
              {t('about.paragraphs').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="font-semibold text-black">{t('about.slogan')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28 lg:py-36">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          {pillars.map((pillar, index) => (
            <motion.article key={`${pillar.number}-${pillar.title}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }} className="grid gap-8 border-t border-white/15 py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-16">
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden bg-white/5"><SmartImage src={images[index]} alt={`${pillar.title} — ${t('about.imageAltSuffix')}`} loading="lazy" className="h-full w-full object-cover transition duration-1000 hover:scale-105" /></div>
              </div>
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-display text-5xl text-white/30">{pillar.number}</span>
                <h2 className="mt-4 font-display text-[clamp(3.4rem,6vw,6.7rem)] leading-[0.9] tracking-[-0.04em]">{pillar.title}</h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">{pillar.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-8xl">
          <span className="eyebrow">{t('about.valuesLabel')}</span>
          <h2 className="mt-6 max-w-5xl font-display text-[clamp(4rem,7vw,7.7rem)] leading-[0.86] tracking-[-0.04em]">{t('about.valuesTitle')}</h2>
          <div className="mt-14 grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <div key={value} className="border-b border-black/15 p-5 sm:border-r lg:border-b-0 lg:p-7 last:border-r-0">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone">0{index + 1}</span>
                <h3 className="mt-12 font-display text-3xl leading-none">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
