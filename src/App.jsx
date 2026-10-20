
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToSection from './components/ScrollToSection'

import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

import './App.scss'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'fr'
  }, [i18n.resolvedLanguage])

  return (
    <div className="app">
      <ScrollToSection />
      
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
