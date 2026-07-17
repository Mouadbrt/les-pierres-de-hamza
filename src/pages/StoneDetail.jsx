import { FiArrowLeft } from 'react-icons/fi'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProductGallery from '../components/ProductGallery'
import QuoteForm from '../components/QuoteForm'
import { getStoneBySlug } from '../data/stones'
import { useLanguage } from '../i18n/LanguageContext'
import { localizeStone } from '../i18n/contentTranslations'

export default function StoneDetail() {
  const { slug } = useParams()
  const { t, language } = useLanguage()
  const baseStone = getStoneBySlug(slug)
  if (!baseStone) return <Navigate to="/404" replace />
  const stone = localizeStone(baseStone, language)

  return (
    <main className="min-h-screen bg-ivory pt-28 sm:pt-32 lg:pt-36">
      <PageMeta title={`${stone.name} — Les Pierres de Hamza`} description={stone.shortDescription} />
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-8xl">
          <Link to="/produits" className="mb-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/55 hover:text-black"><FiArrowLeft /> {t('products.back')}</Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-16">
            <ProductGallery images={stone.images} alt={stone.name} />
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">{stone.category}</p>
              <h1 className="mt-5 font-display text-[clamp(4.3rem,7.8vw,8.5rem)] leading-[0.84] tracking-[-0.05em]">{stone.name}</h1>
              <div className="mt-8 space-y-5 text-sm leading-7 text-black/60 sm:text-base">
                {stone.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <p className="font-semibold text-black">{stone.tagline}</p>
              </div>

              <div className="mt-9 border-y border-black/15 py-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone">{t('products.applications')}</p>
                <div className="flex flex-wrap gap-2">
                  {stone.applications.map((app) => <span key={app} className="border border-black/15 px-3 py-2 text-[10px] uppercase tracking-[0.16em]">{app}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-2">
            <div className="hidden border-y border-l border-black/15 bg-cream p-10 lg:flex lg:flex-col lg:justify-between">
              <span className="eyebrow">{t('products.materialLabel')}</span>
              <p className="max-w-lg font-display text-6xl leading-[0.92]">{t('products.materialText')}</p>
            </div>
            <QuoteForm subject={stone.name} />
          </div>
        </div>
      </section>
    </main>
  )
}
