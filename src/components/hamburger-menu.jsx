import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import AnimatedHamburger from '../_components/animatedHamburger';

const NavbarContainer = styled.nav`
  background-color: #0e0e0eD9;
  padding: 0.75rem 4vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 568px) {
    display: flex;
    gap: 2rem;
  }

  a {
    color: #FFBF00;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #F1F1F1F1;
    }
  }
`;



const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $sidebarVisible }) => ($sidebarVisible ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 35;
  padding: 2rem;
  pointer-events: auto;

  @media (min-width: 568px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ $sidebarVisible }) => ($sidebarVisible ? 'blur(10px)' : 'none')};
  background-color: ${({ $sidebarVisible }) => ($sidebarVisible ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
  z-index: 20;
  pointer-events: ${({ $sidebarVisible }) => ($sidebarVisible ? 'auto' : 'none')};

  @media (min-width: 568px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #FFBF00;
`;

const SidebarLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  a {
    color: #FFBF00;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #F1F1F1F1;
    }
  }
`;

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <a href="#home" style={{ color: '#FFBF00', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Lora' }} onClick={closeSidebar} >Gianni.dev</a>
        <NavLinks className='font-lora'>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </NavLinks>
        {isMobile && (
          <AnimatedHamburger isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
      </NavbarContainer>

      {isMobile && (
        <>
          <Overlay $sidebarVisible={isSidebarOpen} onClick={closeSidebar} />

          <Sidebar $sidebarVisible={isSidebarOpen}>
            <CloseButton onClick={closeSidebar}>
              <AiOutlineClose />
            </CloseButton>
            <SidebarLinks>
              <a href="#about" onClick={closeSidebar}>About</a>
              <a href="#projects" onClick={closeSidebar}>Projects</a>
              <a href="#contact" onClick={closeSidebar}>Contact</a>
            </SidebarLinks>
          </Sidebar>
        </>
      )}
    </>
  );
}