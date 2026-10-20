import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  return (
    <section className="contact" id="contact">
      <div className="contact__top">
        <span>05 / {t('contact.section')}</span>
        <span>{t('contact.sectionSubtitle')}</span>
      </div>

      <div className="contact__content">
        <div className="contact__availability">
          <span className="contact__dot"></span>
          {t('contact.availability')}
        </div>

        <h2>
          {t('contact.titleFirst')}
          <br />
          <span>{t('contact.titleSecond')}</span>
          <br />
          {t('contact.titleThird')}{' '}
          <span className="contact__accent">
            {t('contact.titleAccent')}
          </span>
        </h2>

        <div className="contact__bottom">
          <p>{t('contact.description')}</p>

          <a
            className="contact__button"
            href="mailto:lucasberdy@gmail.com"
          >
            {t('contact.button')}
            <ArrowUpRight size={25} />
          </a>
        </div>
      </div>

      <div className="contact__links">
        <a href="mailto:lucasberdy@gmail.com">
          <Mail size={18} />
          {t('contact.email')}
          <ArrowUpRight size={16} />
        </a>

        <a
          href="https://github.com/existing-prog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={18} />
          {t('contact.github')}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  )
}

export default Contact
