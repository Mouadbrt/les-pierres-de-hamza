import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const heroVideo = '/images/videos/hero.mp4'
const heroPoster = '/images/videos/hero-poster.jpg'

export default function Hero() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 900], [0, 110])
  const imageScale = useTransform(scrollY, [0, 900], [1.04, 1.12])

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-white">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/74 via-charcoal/25 to-charcoal/55" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[94rem] flex-col justify-end px-4 pb-10 pt-32 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.7 }} className="mb-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/75 sm:text-xs">
          Les Pierres de Hamza
        </motion.span>

        <div className="grid items-end gap-8 lg:grid-cols-[1.45fr_.55fr] lg:gap-12">
          <div className="overflow-hidden">
            <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-6xl font-display text-[clamp(3.7rem,8.8vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.045em]">
              {t('hero.title')}
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7 }} className="max-w-md lg:justify-self-end">
            <p className="text-sm leading-7 text-white/75 sm:text-base">{t('hero.description')}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/produits" className="group inline-flex items-center justify-between gap-5 bg-ivory px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink">
                {t('hero.discover')} <FiArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/contact" className="group inline-flex items-center justify-between gap-5 border border-white/40 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-ink">
                {t('hero.quote')} <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.a href="#featured-projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-10 inline-flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60">
          <span className="grid size-9 place-items-center rounded-full border border-white/25"><FiArrowDown /></span>
          {t('hero.scroll')}
        </motion.a>
      </div>
    </section>
  )
}
