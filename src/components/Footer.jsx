import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="footer">
      <div className="footer__main">
        <Link 
        to="/" 
        className="footer__logo"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        >
          EXISTING<span>.</span>
        </Link>

        <button
          type="button"
          className="footer__back"
          onClick={scrollToTop}
        >
          {t('footer.backToTop')}
          <ArrowUp size={17} />
        </button>
      </div>

      <div className="footer__bottom">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.builtWith')}</span>
        <span>{t('footer.location')}</span>
      </div>
    </footer>
  )
}

export default Footer
