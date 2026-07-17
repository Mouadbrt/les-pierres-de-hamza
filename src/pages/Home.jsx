import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import PageMeta from '../components/PageMeta'
import ProjectCard from '../components/ProjectCard'
import SmartImage from '../components/SmartImage'
import StoneCard from '../components/StoneCard'
import { projects } from '../data/projects'
import { stones } from '../data/stones'
import { useLanguage } from '../i18n/LanguageContext'

const aboutImage = 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=84'

function Stat({ value, label, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.08, duration: 0.6 }} className="border-t border-black/15 py-6 lg:py-8">
      <div className="font-display text-[clamp(3.5rem,6vw,7rem)] leading-none tracking-[-0.04em]">{value}</div>
      <p className="mt-3 max-w-xs text-sm leading-6 text-black/55">{label}</p>
    </motion.div>
  )
}

export default function Home() {
  const { t } = useLanguage()
  const featured = projects.slice(0, 4)
  const stats = t('home.stats')
  const paragraphs = t('home.storyParagraphs')

  return (
    <>
      <PageMeta title="Les Pierres de Hamza — Pierre naturelle de Taza au Maroc" description={t('products.metaDescription')} />
      <Hero />
      <Marquee />

      <section id="featured-projects" className="bg-ivory px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
            <div>
              <span className="eyebrow">{t('home.featuredLabel')}</span>
              <h2 className="mt-6 max-w-4xl font-display text-[clamp(3.6rem,7vw,7.4rem)] leading-[0.9] tracking-[-0.04em]">{t('home.featuredTitle')}</h2>
            </div>
            <Link to="/projets" className="hidden items-center gap-3 border-b border-black/25 pb-1 text-xs uppercase tracking-[0.16em] sm:inline-flex">{t('home.allProjects')} <FiArrowUpRight /></Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-7"><ProjectCard project={featured[0]} featured /></div>
            <div className="lg:col-span-5 lg:pt-24"><ProjectCard project={featured[1]} featured /></div>
            <div className="lg:col-span-5 lg:pt-10"><ProjectCard project={featured[2]} featured /></div>
            <div className="lg:col-span-7"><ProjectCard project={featured[3]} featured /></div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
            <span className="eyebrow text-white/55">{t('home.storyLabel')}</span>
            <h2 className="mt-6 font-display text-[clamp(3.8rem,7.2vw,7.5rem)] leading-[0.88] tracking-[-0.045em]">{t('home.storyTitle')}</h2>
            <div className="mt-10 max-w-2xl space-y-5 text-sm leading-7 text-white/65 sm:text-base">
              <h3 className="font-display text-3xl text-white sm:text-4xl">{t('home.welcome')}</h3>
              {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <p className="font-semibold text-white">{t('home.slogan')}</p>
            </div>
            <Link to="/a-propos" className="mt-9 inline-flex items-center gap-3 border-b border-white/30 pb-1 text-xs uppercase tracking-[0.18em]">{t('home.discoverStory')} <FiArrowUpRight /></Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8 }} className="lg:pt-24">
            <div className="aspect-[4/5] overflow-hidden bg-white/5"><SmartImage src={aboutImage} alt={t('home.aboutImageAlt')} loading="lazy" className="h-full w-full object-cover" /></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-8xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <span className="eyebrow">{t('home.statsLabel')}</span>
            <h2 className="font-display text-[clamp(3.4rem,6vw,6.6rem)] leading-[0.9] tracking-[-0.04em]">{t('home.statsTitle')}</h2>
          </div>
          <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => <Stat key={`${stat.value}-${index}`} value={stat.value} label={stat.label} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-8xl">
          <div className="mb-12 grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div><span className="eyebrow">{t('home.collectionLabel')}</span></div>
            <div>
              <h2 className="font-display text-[clamp(3.5rem,6.7vw,7.1rem)] leading-[0.9] tracking-[-0.04em]">{t('home.collectionTitle')}</h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">{t('home.collectionText')}</p>
            </div>
          </div>

          <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {stones.map((stone, index) => <StoneCard key={stone.slug} stone={stone} index={index} />)}
          </div>

          <div className="mt-14 text-center">
            <Link to="/produits" className="inline-flex items-center gap-3 border-b border-black/30 pb-1 text-xs uppercase tracking-[0.18em]">{t('home.allCollection')} <FiArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="bg-ivory px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div><span className="eyebrow">{t('home.expertiseLabel')}</span></div>
            <div>
              <h2 className="font-display text-[clamp(3.5rem,6.7vw,7rem)] leading-[0.9] tracking-[-0.04em]">{t('home.expertiseTitle')}</h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base">{t('home.expertiseText')}</p>
            </div>
          </div>
          <FAQ />
        </div>
      </section>

      <CTASection />
    </>
  )
}
