import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: '01',
    slug: 'kasa',
    title: 'KASA',
    categoryKey: 'frontend',
    translationKey: 'kasa',
    technologies: ['REACT', 'SCSS', 'VITE'],
    image: '/projects/kasa-home.png',
  },
  {
    id: '02',
    slug: 'mon-vieux-grimoire',
    title: 'MON VIEUX GRIMOIRE',
    categoryKey: 'backend',
    translationKey: 'grimoire',
    technologies: ['NODE.JS', 'EXPRESS', 'MONGODB'],
    image: '/projects/grimoire-home.png',
  },
  {
    id: '03',
    slug: 'sophie-bluel',
    title: 'SOPHIE BLUEL',
    categoryKey: 'javascript',
    translationKey: 'sophie',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    image: '/projects/sophie-home.png',
  },
  {
    id: '04',
    slug: 'nina-carducci',
    title: 'NINA CARDUCCI',
    categoryKey: 'optimization',
    translationKey: 'nina',
    technologies: ['SEO', 'PERFORMANCE', 'ACCESSIBILITY'],
    image: '/projects/nina-home.png',
  },
]

function Projects() {
  const { t } = useTranslation()

  return (
    <section className="projects" id="projects">
      <div className="projects__top">
        <span>02 / {t('projects.section')}</span>
        <span>2026 — 2026</span>
      </div>

      <div className="projects__heading">
        <h2>
          {t('projects.titleFirst')}
          <br />
          <span>{t('projects.titleSecond')}</span>
          <span className="projects__period">.</span>
        </h2>

        <p>{t('projects.introduction')}</p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <Link
              to={`/projects/${project.slug}`}
              className="project-card__link"
              aria-label={`${project.title} — ${t(`projects.categories.${project.categoryKey}`)}`}
            >
              <div className="project-card__image">
                <img
                  src={project.image}
                  alt={t('projects.imageAlt', {
                    title: project.title,
                  })}
                  loading="lazy"
                />

                <span className="project-card__number">
                  {project.id}
                </span>

                <div
                  className="project-card__arrow"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={26} />
                </div>
              </div>

              <div className="project-card__info">
                <div className="project-card__title">
                  <h3>{project.title}</h3>

                  <span>
                    {t(`projects.categories.${project.categoryKey}`)}
                  </span>
                </div>

                <p>
                  {t(`projects.items.${project.translationKey}`)}
                </p>

                <div className="project-card__technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>



      <a
        className="projects__secondary"
        href="https://existing-prog.github.io/projet2-lucasberdy-052026/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Voir le projet Booki"
      >
        <div className="projects__secondary-top">
          <span>{t('projects.booki.label')}</span>
          <ArrowUpRight size={22} />
        </div>

        <div className="projects__secondary-content">
          <div>
            <h3>BOOKI<span>.</span></h3>
            <p>{t('projects.booki.description')}</p>
          </div>

          <div className="projects__secondary-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>RESPONSIVE</span>
          </div>
        </div>
      </a>

      <div className="projects__footer">
        <span>{t('projects.footer')}</span>
      </div>
    </section>
  )
}


export default Projects
