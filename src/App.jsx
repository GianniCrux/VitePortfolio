import { Suspense } from 'react'
import HomePage from './Home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import { Calendly } from './_components/calendly'
import HamburgerMenu from './components/hamburger-menu'


export default function App() {
  return (
    <>
      <HamburgerMenu/>
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
      <AboutMe />
      <Projects />
      <Calendly />
      <ContactMe />
    </>
  )
}