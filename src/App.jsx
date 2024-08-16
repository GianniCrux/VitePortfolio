import { Suspense } from 'react'
import HomePage from './Home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
      <AboutMe />
      <Projects />
    </>
  )
}