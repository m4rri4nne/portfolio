import { createContext, useState, useEffect } from 'react'
import { translations } from './translations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import GothicDivider from './components/GothicDivider'
import Articles from './components/Articles'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const AppContext = createContext()

export default function App() {
  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('pt')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  const t = translations[lang]

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      <Nav />
      <Hero />
      <GothicDivider />
      <About />
      <GothicDivider />
      <Articles />
      <GothicDivider />
      <Projects />
      <GothicDivider />
      <Contact />
      <Footer />
    </AppContext.Provider>
  )
}
