import { Suspense} from 'react'
import HomePage from './Home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import Navigation from './components/hamburger-menu'


export default function App() {

  return (
    <>
      <Navigation />
        <Suspense fallback={null}>
          <HomePage />
        </Suspense>
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}