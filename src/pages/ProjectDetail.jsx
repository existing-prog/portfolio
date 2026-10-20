import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react'

import { projectsData } from '../data/projects'
import { useEffect } from 'react'

function ProjectDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()

  const project = projectsData[slug]
  useEffect(() => {
    if (!project) {
      document.title = '404 — Project Not Found | EXISTING.'

      return
    }

    const title = `${project.title} | Lucas Berdy — EXISTING.`

    const description =  {
      'kasa': 'Découvrez KASA, une application web de location immobilière développée avec React, SCSS et Vite. Explorez les fonctionnalités de recherche, de filtrage et de navigation pour trouver votre logement idéal.',
      'sophie-bluel': 'Découvrez le portfolio de Sophie Bluel, une photographe talentueuse. Explorez ses réalisations, filtrez par catégorie et découvrez son univers artistique à travers ses photographies captivantes.',
      'mon-vieux-grimoire': 'Découvrez Mon Vieux Grimoire, une application web de gestion de bibliothèque développée avec Node.js, Express et MongoDB. Explorez les fonctionnalités de recherche, d\'ajout et de consultation des livres pour gérer votre collection.',
      'nina-carducci': 'Découvrez le site web de Nina Carducci, une photographe passionnée. Explorez sa galerie de photos, découvrez son style unique et plongez dans l\'univers visuel captivant qu\'elle crée à travers son objectif.'
    }

    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute('content', description[slug] || 'Découvrez le projet ${project.title} développé par Lucas Berdy.')
    }
  }, [project, slug])

  if (!project) {
    return (
      <section className="project-detail">
        <h1>404 — PROJECT NOT FOUND</h1>
        <Link to="/">BACK TO HOME</Link>
      </section>
    )
  }

  const translationKey =
    slug === 'mon-vieux-grimoire' ? 'grimoire' :
      slug === 'sophie-bluel' ? 'sophie' :
        slug === 'nina-carducci' ? 'nina' :
          'kasa'

  const nextProject = projectsData[project.next]

  return (
    <section className="project-detail">
      <div className="project-detail__top">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="project-detail__back"
        >
          <ArrowLeft size={18} />
          {t('projectDetail.back')}
        </Link>

        <span>PROJECT / {project.id}</span>
      </div>

      <div className="project-detail__hero">
        <div className="project-detail__hero-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h1>
          {project.title}
          <span>.</span>
        </h1>

        <p>
          {t(`projectDetail.descriptions.${translationKey}.intro`)}
        </p>
      </div>

      <div className="project-detail__image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-detail__overview">
        <div className="project-detail__overview-label">
          <span>01 / {t('projectDetail.overview')}</span>
        </div>

        <div className="project-detail__overview-content">
          <h2>{t('projectDetail.about')}</h2>

          <p>
            {t(`projectDetail.descriptions.${translationKey}.about`)}
          </p>
        </div>
      </div>

      <div className="project-detail__information">
        <div>
          <span>{t('projectDetail.category')}</span>
          <strong>{project.category}</strong>
        </div>

        <div>
          <span>{t('projectDetail.year')}</span>
          <strong>{project.year}</strong>
        </div>

        <div>
          <span>{t('projectDetail.technologies')}</span>

          <div className="project-detail__tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {slug === 'kasa' && project.screenshots && (
        <div className="project-detail__gallery">
          <div className="project-detail__gallery-heading">
            <span>02 / {t('projectDetail.gallery.section')}</span>
            <h2>{t('projectDetail.gallery.title')}</h2>
          </div>

          <div className="project-detail__gallery-main">
            <img
              src={project.screenshots.housing}
              alt={t('projectDetail.gallery.housing')}
              loading="lazy"
            />

            <div className="project-detail__gallery-caption">
              <span>01 / {t('projectDetail.gallery.housing')}</span>
              <p>{t('projectDetail.gallery.housingDescription')}</p>
            </div>
          </div>

          <div className="project-detail__gallery-grid">
            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.home}
                alt={t('projectDetail.gallery.home')}
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>02 / {t('projectDetail.gallery.home')}</span>
                <p>{t('projectDetail.gallery.homeDescription')}</p>
              </div>
            </div>

            <div className="project-detail__gallery-item project-detail__gallery-item--mobile">
              <div className="project-detail__phone">
                <div className="project-detail__phone-screen">
                  <img
                    src={project.screenshots.mobile}
                    alt={t('projectDetail.gallery.mobile')}
                    loading="lazy"
                  />
                </div>
              </div>


              <div className="project-detail__gallery-caption">
                <span>03 / {t('projectDetail.gallery.mobile')}</span>
                <p>{t('projectDetail.gallery.mobileDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === 'sophie-bluel' && project.screenshots && (
        <div className="project-detail__gallery">
          <div className="project-detail__gallery-heading">
            <span>02 / {t('projectDetail.gallery.section')}</span>
            <h2>{t('projectDetail.gallery.title')}</h2>
          </div>

          <div className="project-detail__gallery-main">
            <img
              src={project.screenshots.home}
              alt="Page d'accueil du portfolio Sophie Bluel"
              loading="lazy"
            />

            <div className="project-detail__gallery-caption">
              <span>{t('projectDetail.sophieGallery.home')}</span>
              <p>{t('projectDetail.sophieGallery.homeDescription')}</p>
            </div>
          </div>

          <div className="project-detail__gallery-grid project-detail__gallery-grid--sophie">
            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.filters}
                alt="Filtrage des réalisations par catégorie"
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>{t('projectDetail.sophieGallery.filters')}</span>
                <p>{t('projectDetail.sophieGallery.filtersDescription')}</p>
              </div>
            </div>

            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.admin}
                alt="Modale d'ajout de photo de Sophie Bluel"
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>{t('projectDetail.sophieGallery.admin')}</span>
                <p>{t('projectDetail.sophieGallery.adminDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {slug === 'mon-vieux-grimoire' && project.screenshots && (
        <div className="project-detail__gallery">
          <div className="project-detail__gallery-heading">
            <span>02 / {t('projectDetail.gallery.section')}</span>
            <h2>{t('projectDetail.gallery.title')}</h2>
          </div>

          <div className="project-detail__gallery-main">
            <img
              src={project.screenshots.home}
              alt="Bibliothèque Mon Vieux Grimoire"
              loading="lazy"
            />

            <div className="project-detail__gallery-caption">
              <span>{t('projectDetail.grimoireGallery.home')}</span>
              <p>{t('projectDetail.grimoireGallery.homeDescription')}</p>
            </div>
          </div>

          <div className="project-detail__gallery-grid project-detail__gallery-grid--grimoire">
            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.detail}
                alt="Fiche détaillée du livre Dune"
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>{t('projectDetail.grimoireGallery.detail')}</span>
                <p>{t('projectDetail.grimoireGallery.detailDescription')}</p>
              </div>
            </div>

            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.add}
                alt="Formulaire d'ajout d'un livre"
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>{t('projectDetail.grimoireGallery.add')}</span>
                <p>{t('projectDetail.grimoireGallery.addDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {slug === 'nina-carducci' && project.screenshots && (
        <div className="project-detail__gallery">
          <div className="project-detail__gallery-heading">
            <span>02 / {t('projectDetail.gallery.section')}</span>
            <h2>{t('projectDetail.gallery.title')}</h2>
          </div>

          <div className="project-detail__gallery-main">
            <img
              src={project.screenshots.home}
              alt="Page d'accueil du site Nina Carducci"
              loading="lazy"
            />

            <div className="project-detail__gallery-caption">
              <span>{t('projectDetail.ninaGallery.home')}</span>
              <p>{t('projectDetail.ninaGallery.homeDescription')}</p>
            </div>
          </div>

          <div className="project-detail__gallery-grid project-detail__gallery-grid--nina">
            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.gallery}
                alt="Galerie photographique Nina Carducci"
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>{t('projectDetail.ninaGallery.gallery')}</span>
                <p>{t('projectDetail.ninaGallery.galleryDescription')}</p>
              </div>
            </div>

            <div className="project-detail__gallery-item">
              <img
                src={project.screenshots.lighthouse}
                alt="Comparaison des scores Lighthouse avant et après optimisation"
                loading="lazy"
              />

              <div className="project-detail__gallery-caption">
                <span>{t('projectDetail.ninaGallery.lighthouse')}</span>
                <p>{t('projectDetail.ninaGallery.lighthouseDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="project-detail__details">
        <div className="project-detail__detail">
          <span>03 / {t('projectDetail.challenge')}</span>

          <p>
            {t(`projectDetail.descriptions.${translationKey}.challenge`)}
          </p>
        </div>

        <div className="project-detail__detail">
          <span>04 / {t('projectDetail.solution')}</span>

          <p>
            {t(`projectDetail.descriptions.${translationKey}.solution`)}
          </p>
        </div>
      </div>

      <div className="project-detail__actions">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('projectDetail.github')}
            <ArrowUpRight size={20} />
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('projectDetail.demo')}
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>

      <Link
        to={`/projects/${project.next}`}
        className="project-detail__next"
      >
        <div>
          <span>{t('projectDetail.next')}</span>
          <h2>{nextProject.title}</h2>
        </div>

        <ArrowRight size={42} />
      </Link>
    </section>
  )
}

export default ProjectDetail
