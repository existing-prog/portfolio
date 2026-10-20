import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const menuButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const navigation = [
    { label: t('header.projects'), section: 'projects', number: '01' },
    { label: t('header.about'), section: 'about', number: '02' },
    { label: t('header.skills'), section: 'skills', number: '03' },
    { label: t('header.contact'), section: 'contact', number: '04' },
  ]

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const menu = mobileMenuRef.current
    const links = menu?.querySelectorAll('a')

    // Sélectionne le premier lien à l'ouverture
    links?.[0]?.focus()

    const handleTab = (event) => {
      if (event.key !== 'Tab') return

      const focusable = [
        menuButtonRef.current,
        ...menu.querySelectorAll('a'),
      ].filter(Boolean)

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleTab)

    return () => {
      document.removeEventListener('keydown', handleTab)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="header">
        <Link
          to="/"
          className="header__logo"
          onClick={closeMenu}
        >
          EXISTING<span>.</span>
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              to="/"
              state={{ scrollTo: item.section }}
              key={item.section}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header__right">
          <div className="header__languages" aria-label="Choix de langue">
            <button
              type="button"
              className={i18n.resolvedLanguage === 'fr' ? 'active' : ''}
              aria-pressed={i18n.resolvedLanguage === 'fr'}
              onClick={() => changeLanguage('fr')}
            >
              FR
            </button>

            <span aria-hidden="true">/</span>

            <button
              type="button"
              className={i18n.resolvedLanguage === 'en' ? 'active' : ''}
              aria-pressed={i18n.resolvedLanguage === 'en'}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>

          <a
            href="mailto:lucasberdy@gmail.com"
            className="header__contact"
          >
            {t('header.contactButton')}
            <ArrowUpRight size={14} />
          </a>

          <button
            ref={menuButtonRef}
            className={`header__menu-button ${menuOpen ? 'header__menu-button--open' : ''}`}
            type="button"
            aria-label={t(menuOpen ? 'header.closeMenu' : 'header.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span className="header__menu-icon" aria-hidden="true">
              <span className="header__menu-line header__menu-line--top" />
              <span className="header__menu-line header__menu-line--bottom" />
            </span>
          </button>
        </div>
      </header>

      <nav
        ref={mobileMenuRef}
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Navigation mobile"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-menu__top">
          <span>NAVIGATION / EXISTING.</span>
          <span>2026</span>
        </div>

        <div className="mobile-menu__links">
          {navigation.map((item) => (
            <Link
              to="/"
              state={{ scrollTo: item.section }}
              key={item.section}
              onClick={closeMenu}
            >
              <span className="mobile-menu__number">{item.number}</span>
              <span className="mobile-menu__label">{item.label}</span>
              <ArrowUpRight size={24} />
            </Link>
          ))}
        </div>

        <div className="mobile-menu__bottom">
          <span>FRANCE / WEB DEVELOPMENT</span>

          <a
            href="https://github.com/existing-prog"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header
