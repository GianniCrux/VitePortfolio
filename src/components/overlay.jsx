import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLeftArrow } from 'react-icons/bi';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 20;
  font-family: 'Lora', serif;
  letter-spacing: 0.05em;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  pointer-events: auto;
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
  pointer-events: auto;
  font-family: 'Playfair Display', serif;
`;

const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  pointer-events: auto;
`;

const Hamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  pointer-events: auto;
  cursor: pointer;

  & > div {
    width: 24px;
    height: 2px;
    background: #252525;
    margin-bottom: 6px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #252525;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    pointer-events: auto;

    &:hover {
      color: #0070f3;
    }
  }
`;

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1 style={{ fontSize: 'min(14vw, 12em)', lineHeight: '0.85em', margin: '0', fontWeight: '400', color: 'blue' }}>
          Giovanni
          <br />
          Di Stefano
        </h1>
        <p style={{ color: 'blue' }}>Web Developer & Designer —</p>
      </TopLeft>
      <BottomLeft style={{ color: 'blue' }}>
        Passionate about creating beautiful and functional web experiences
        <SocialIcons>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </BottomLeft>
      <BottomRight style={{ color: 'blue' }}>
    <BiLeftArrow />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container>
  );
}