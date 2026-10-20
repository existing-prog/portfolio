import { Code2, Database, Wrench, Gauge } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const skillCategories = [
  {
    id: '01',
    translationKey: 'frontend',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'JAVASCRIPT',
      'REACT',
      'SCSS',
      'REACT ROUTER',
    ],
  },
  {
    id: '02',
    translationKey: 'backend',
    icon: Database,
    skills: [
      'NODE.JS',
      'EXPRESS',
      'MONGODB',
      'REST API',
      'JWT',
    ],
  },
  {
    id: '03',
    translationKey: 'tools',
    icon: Wrench,
    skills: [
      'GIT',
      'GITHUB',
      'VS CODE',
      'VITE',
    ],
  },
  {
    id: '04',
    translationKey: 'optimization',
    icon: Gauge,
    skills: [
      'seo',
      'accessibility',
      'performance',
      'lighthouse',
    ],
  }
]

function Skills() {
  const { t } = useTranslation()

  return (
    <section className="skills" id="skills">
      <div className="skills__top">
        <span>04 / {t('skills.section')}</span>
        <span>{t('skills.sectionSubtitle')}</span>
      </div>

      <div className="skills__heading">
        <h2>
          {t('skills.titleFirst')}
          <br />
          <span>{t('skills.titleSecond')}</span>
          <span className="skills__period">.</span>
        </h2>

        <p>{t('skills.introduction')}</p>
      </div>

      <div className="skills__grid">
        {skillCategories.map((category) => {
          const Icon = category.icon

          return (
            <article className="skill-card" key={category.id}>
              <div className="skill-card__top">
                <span>{category.id} / 04</span>
                <Icon size={28} strokeWidth={1.5} />
              </div>

              <div className="skill-card__heading">
                <h3>
                  {t(`skills.categories.${category.translationKey}.title`)}
                </h3>

                <p>
                  {t(`skills.categories.${category.translationKey}.description`)}
                </p>
              </div>

              <div className="skill-card__list">
                {category.skills.map((skill, index) => (
                  <div className="skill-card__item" key={skill}>
                    <span className="skill-card__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="skill-card__name">
                      {category.translationKey === 'optimization'
                        ? t(`skills.optimizationSkills.${skill}`)
                        : skill}
                    </span>
                  </div>
                ))}
              </div>

              <div className="skill-card__footer">
                <span>EXISTING. / STACK</span>
                <span>2026</span>
              </div>
            </article>
          )
        })}
      </div>

      <div className="skills__footer">
        <span>{t('skills.footer')}</span>
      </div>
    </section>
  )
}

export default Skills
