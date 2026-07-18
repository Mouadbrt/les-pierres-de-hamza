import { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useLanguage()
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  const links = [
    [t('nav.home'), '/'],
    [t('nav.projects'), '/projets'],
    [t('nav.products'), '/produits'],
    [t('nav.about'), '/a-propos'],
    [t('nav.contact'), '/contact'],
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${transparent ? 'border-transparent bg-transparent text-white' : 'border-black/10 bg-ivory/95 text-ink backdrop-blur-xl'}`}>
        <div className="mx-auto flex h-[74px] max-w-[94rem] items-center justify-between px-4 sm:px-6 lg:h-[86px] lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 max-w-[12rem] text-[11px] font-bold uppercase leading-tight tracking-[0.24em] sm:max-w-none sm:text-xs"
            aria-label="Les Pierres de Hamza"
          >
            <img
              src="/images/logo-160.webp"
              alt="Les Pierres de Hamza"
              width="160"
              height="160"
              decoding="async"
              fetchPriority="high"
              className={`h-12 w-auto max-w-[215px] object-contain transition duration-500 sm:h-14 sm:max-w-[255px] lg:h-16`}
            />
            <span className="whitespace-nowrap">Les Pierres de Hamza</span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex" aria-label={t('nav.mainNavigation')}>
            {links.map(([label, to]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `nav-link text-[11px] font-semibold uppercase tracking-[0.18em] ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <LanguageSwitcher light={transparent} />
            <Link to="/contact" className={`border px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${transparent ? 'border-white/60 hover:bg-white hover:text-ink' : 'border-ink bg-ink text-white hover:bg-transparent hover:text-ink'}`}>
              {t('nav.quote')}
            </Link>
          </div>

          <button type="button" onClick={() => setMenuOpen(true)} className="grid size-11 place-items-center xl:hidden" aria-label={t('nav.openMenu')}>
            <FiMenu size={23} />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
