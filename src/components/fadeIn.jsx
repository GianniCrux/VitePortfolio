
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const FadeInContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #3333;
  animation: ${fade} 4s normal forwards ease-in-out;
`;

export default function FadeIn() {
  return <FadeInContainer />;
}