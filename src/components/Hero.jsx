import { useTranslation } from 'react-i18next'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'


function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="home">
      <div className="hero__top">
        <span>PORTFOLIO / 2026</span>
        <span>{t('hero.location')}</span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__indicator"></span>
          {t('hero.role')}
        </p>

        <h1>
          {t('hero.titleFirst')}
          <br />
          <span>{t('hero.titleSecond')}</span>
          <span className="hero__period">.</span>
        </h1>

        <div className="hero__bottom">
          <p>
            {t('hero.description')}
          </p>

          <button
            type="button"
            className="hero__link"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            {t('hero.explore')}
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>

      <div className="hero__footer">
        <span>01 / INTRODUCTION</span>

        <span className="hero__scroll-indicator">
          {t('hero.scroll')}
          <ArrowDownRight size={18} />
        </span>
      </div>
    </section>
  )
}

export default Hero
