import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const HamburgerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  pointer-events: auto;
  cursor: pointer;
  z-index: 30;

  & > div {
    width: 24px;
    height: 2px;
    background: #1565C0;
    margin-bottom: 6px;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  z-index: 35;
  padding: 2rem;
  pointer-events: auto;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${({ isOpen }) => (isOpen ? 'blur(10px)' : 'none')};
  background-color: ${({ isOpen }) => (isOpen ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
  z-index: 20;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

  a {
    color: blue;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #002060;
    }
  }
`;

export default function HamburgerMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <HamburgerContainer onClick={toggleSidebar}>
        <div />
        <div />
        <div />
      </HamburgerContainer>
      
      {/* Overlay that blurs the background */}
      <Overlay isOpen={isSidebarOpen} onClick={closeSidebar} />

      <Sidebar isOpen={isSidebarOpen}>
        <CloseButton onClick={toggleSidebar}>
          <AiOutlineClose />
        </CloseButton>
        <NavLinks>
          <a href="#home" onClick={toggleSidebar}>Home</a>
          <a href="#about" onClick={toggleSidebar}>About</a>
          <a href="#projects" onClick={toggleSidebar}>Projects</a>
          <a href="#contact" onClick={toggleSidebar}>Contact</a>
        </NavLinks>
      </Sidebar>
    </>
  );
}
