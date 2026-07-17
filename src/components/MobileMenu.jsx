import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function MobileMenu({ open, onClose }) {
  const { t } = useLanguage()
  const links = [
    [t('nav.home'), '/'],
    [t('nav.projects'), '/projets'],
    [t('nav.products'), '/produits'],
    [t('nav.about'), '/a-propos'],
    [t('nav.contact'), '/contact'],
  ]

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed inset-0 z-[90] flex min-h-dvh flex-col bg-ink px-5 pb-7 pt-5 text-ivory xl:hidden"
          initial={{ opacity: 0, y: '-4%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-4%' }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <span className="max-w-[13rem] text-sm font-semibold uppercase tracking-[0.22em]">Les Pierres de Hamza</span>
            <button type="button" onClick={onClose} className="grid size-11 place-items-center rounded-full border border-white/20" aria-label={t('nav.closeMenu')}>
              <FiX size={22} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 py-8">
            {links.map(([label, to], index) => (
              <motion.div key={to} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.07 * index + 0.08 }}>
                <NavLink to={to} onClick={onClose} className={({ isActive }) => `group flex items-center justify-between border-b border-white/10 py-4 font-display text-[clamp(2.5rem,13vw,4.6rem)] leading-none ${isActive ? 'text-cream' : 'text-ivory'}`}>
                  {label}
                  <FiArrowUpRight className="size-6 opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <div className="space-y-5 border-t border-white/15 pt-5">
            <LanguageSwitcher light onChange={onClose} />
            <NavLink to="/contact" onClick={onClose} className="flex items-center justify-between bg-ivory px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ink">
              {t('nav.quote')} <FiArrowUpRight />
            </NavLink>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
