import { Suspense, useEffect, useState } from 'react'
import HomePage from './Home'
import AboutMe from './components/aboutMe'
import Projects from './components/projects'
import ContactMe from './components/contact-me'
import { Calendly } from './_components/calendly'
import Navigation from './components/hamburger-menu'


export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 568);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <Navigation />
        <Suspense fallback={null}>
          <HomePage />
        </Suspense>
      <AboutMe />
      <Projects />
      {!isMobile && (
      <Calendly />
      )}
      <ContactMe />
    </>
  );
}