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
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.1em;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
  pointer-events: auto;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    padding-top: 10vw;
  }
`;

const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 60%;
  pointer-events: auto;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
`;

const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 90vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
  pointer-events: auto;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #404040;
    font-size: 1.8rem;
    transition: color 0.3s ease;
    pointer-events: auto;

    &:hover {
      color: #FFBF00;
    }
  }
`;

const Heading = styled.h1`
  font-size: min(8vw, 6em);
  line-height: 1.2;
  margin: 0;
  font-weight: 700;
  color: #FFBF00;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
      <p style={{ color: '#FFBF00' }}>Full Stack —</p>
        <Heading>
          Software <br /> Developer
          <br />
        </Heading>
      </TopLeft>
      <BottomLeft style={{ color: '#FFBF00' }}>
        Passionate about creating beautiful and functional web experiences
        <SocialIcons>
          <a href="https://github.com/GianniCrux" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/giovanni-di-stefano-0b00bb202/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </SocialIcons>
      </BottomLeft>
      <BottomRight style={{ color: '#FFBF00' }}>
        <BiLeftArrow />
      </BottomRight>
    </Container>
  );
}