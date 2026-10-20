
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

import {useEffect} from 'react'


function Home() {
  useEffect(() => {
    document.title = 'Lucas Berdy | Développeur Web Front-End — EXISTING.'

    const metaDescription = document.querySelector('meta[name="description"]')

    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Découvrez le portfolio de Lucas Berdy, développeur web spécialisé en React, Javascript et création de sites responsive.'
      )
    }
  }, [])

  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default Home
