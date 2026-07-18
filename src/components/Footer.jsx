import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { businessInfo } from '../data/businessInfo'
import { useLanguage } from '../i18n/LanguageContext'
import Marquee from './Marquee'

export default function Footer() {
  const { t } = useLanguage()
  const display = (value) => value || t('footer.unavailable')

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/hamza_pierres?igsh=MWY5Z2ZtengzOGZxZA==',
      icon: FiInstagram,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/1DDzoU6fzq/',
      icon: FiFacebook,
    },
  ]

  return (
    <footer className="bg-ink text-white">
      <Marquee dark />

      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_.8fr_1fr] lg:gap-16">
          <div>
            <p className="max-w-xl font-display text-4xl leading-[1.03] sm:text-5xl">
              {t('footer.slogan')}
            </p>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55">
              {t('footer.description')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-7">
            <div>
              <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                {t('footer.company')}
              </h3>

              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link className="transition-colors hover:text-white" to="/a-propos">
                    {t('footer.about')}
                  </Link>
                </li>

                <li>
                  <Link className="transition-colors hover:text-white" to="/projets">
                    {t('footer.projects')}
                  </Link>
                </li>

                <li>
                  <Link className="transition-colors hover:text-white" to="/produits">
                    {t('footer.products')}
                  </Link>
                </li>

                <li>
                  <Link className="transition-colors hover:text-white" to="/contact">
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
              {t('footer.contact')}
            </h3>

            <dl className="space-y-5 text-sm">
              <div>
                <dt className="mb-1 text-white/35">{t('footer.email')}</dt>
                <dd className="text-white/75">
                  {display(businessInfo.email)}
                </dd>
              </div>

              <div>
                <dt className="mb-1 text-white/35">{t('footer.phone')}</dt>
                <dd className="text-white/75">
                  {display(businessInfo.phone)}
                </dd>
              </div>

              <div>
                <dt className="mb-1 text-white/35">{t('footer.address')}</dt>
                <dd className="text-white/75">
                  {display(businessInfo.address)}
                </dd>
              </div>
            </dl>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-white/30 pb-1 text-xs uppercase tracking-[0.16em] transition-colors hover:border-white hover:text-white"
            >
              {t('footer.startProject')}
              <FiArrowUpRight />
            </Link>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg text-white/70 transition duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white hover:text-ink"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Les Pierres de Hamza. {t('footer.rights')}</p>
          <p>{t('footer.origin')}</p>
        </div>
      </div>
    </footer>
  )
}