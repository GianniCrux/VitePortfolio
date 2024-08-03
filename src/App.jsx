import { Suspense } from 'react'
import HomePage from './Home'
import AboutMe from './components/aboutMe'

export default function App() {
  return (
    <>
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>
      <AboutMe />
    </>
  )
}