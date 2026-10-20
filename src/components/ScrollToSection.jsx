import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToSection() {
  const { pathname, state } = useLocation()

  useEffect(() => {
    const section = state?.scrollTo

    if (!section) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth',
      })
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, state])

  return null
}

export default ScrollToSection
