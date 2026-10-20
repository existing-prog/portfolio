import { ArrowUpRight, MapPin, Code2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()

  return (
    <section className="about" id="about">
      <div className="about__top">
        <span>03 / {t('about.section')}</span>
        <span>{t('about.sectionSubtitle')}</span>
      </div>

      <div className="about__heading">
        <h2>
          {t('about.titleFirst')}
          <br />
          <span>{t('about.titleSecond')}</span>
          <span className="about__period">.</span>
        </h2>
      </div>

      <div className="about__layout">
        <div className="about__identity">
          <div className="about__identity-top">
            <span>{t('about.identity')}</span>
            <Code2 size={22} />
          </div>

          <div className="about__monogram" aria-hidden="true">
            LB<span>.</span>
          </div>

          <div className="about__identity-bottom">
            <div>
              <span>{t('about.nameLabel')}</span>
              <strong>LUCAS BERDY</strong>
            </div>

            <div>
              <span>{t('about.roleLabel')}</span>
              <strong>{t('about.role')}</strong>
            </div>

            <div>
              <span>{t('about.locationLabel')}</span>
              <strong>
                <MapPin size={13} />
                {t('about.location')}
              </strong>
            </div>
          </div>

          <span className="about__identity-code">
            EXISTING. / PORTFOLIO 2026
          </span>
        </div>

        <div className="about__content">
          <p className="about__label">
            <span className="about__dot"></span>
            {t('about.label')}
          </p>

          <h3>
            {t('about.headlineFirst')}
            <br />
            {t('about.headlineSecond')}{' '}
            <span>{t('about.headlineAccent')}</span>
          </h3>

          <p className="about__description">
            {t('about.descriptionFirst')}
          </p>

          <p className="about__description">
            {t('about.descriptionSecond')}
          </p>

          <div className="about__details">
            <div>
              <span>{t('about.focusLabel')}</span>
              <strong>{t('about.focus')}</strong>
            </div>

            <div>
              <span>{t('about.currentlyLabel')}</span>
              <strong>{t('about.currently')}</strong>
            </div>
          </div>

          <a href="#contact" className="about__link" onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', behavior: 'smooth' });
          }}>
            {t('about.connect')}
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>

      <div className="about__footer">
        <span>{t('about.footer')}</span>
      </div>
    </section>
  )
}

export default About
