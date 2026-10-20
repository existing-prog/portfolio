
export const projectsData = {
  kasa: {
    id: '01',
    title: 'KASA',
    category: 'FRONT-END DEVELOPMENT',
    year: '2026',
    technologies: ['REACT', 'SCSS', 'VITE', 'REACT ROUTER'],
    image: '/projects/kasa-home.png',
    github: "https://github.com/existing-prog/projet-5",
    demo: "https://existing-prog.github.io/projet-5/",
    next: 'mon-vieux-grimoire',


    screenshots: {
      home: '/projects/kasa-home.png',
      housing: '/projects/kasa-housing.png',
      mobile: '/projects/kasa-mobile.png',
    },
  },

  'mon-vieux-grimoire': {
    id: '02',
    title: 'MON VIEUX GRIMOIRE',
    category: 'BACK-END DEVELOPMENT',
    year: '2026',
    technologies: ['NODE.JS', 'EXPRESS', 'MONGODB', 'REST API'],
    image: '/projects/grimoire-home.png',
    github: "https://github.com/existing-prog/Projet-6",
    demo: null,
    next: 'sophie-bluel',

    screenshots: {
      home: '/projects/grimoire-home.png',
      detail: '/projects/grimoire-detail.png',
      add: '/projects/grimoire-add.png',
    },
  },

  'sophie-bluel': {
    id: '03',
    title: 'SOPHIE BLUEL',
    category: 'JAVASCRIPT DEVELOPMENT',
    year: '2026',
    technologies: ['JAVASCRIPT', 'HTML', 'CSS'],
    image: '/projects/sophie-home.png',
    github: "https://github.com/existing-prog/projet-3",
    demo: null,
    next: 'nina-carducci',

    screenshots: {
      home: '/projects/sophie-home.png',
      filters: '/projects/sophie-filters.png',
      admin: '/projects/sophie-admin.png',
    },
  },

  'nina-carducci': {
    id: '04',
    title: 'NINA CARDUCCI',
    category: 'WEB OPTIMIZATION',
    year: '2026',
    technologies: ['SEO', 'PERFORMANCE', 'ACCESSIBILITY'],
    image: '/projects/nina-home.png',
    github: "https://github.com/existing-prog/projet-4",
    demo: "https://existing-prog.github.io/projet-4/",
    next: 'kasa',

    screenshots: {
      home: '/projects/nina-home.png',
      gallery: '/projects/nina-gallery.png',
      lighthouse: '/projects/nina-lighthouse.png',
    },
  },
}
