import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerContainer = styled.div`
  width: 30px;
  height: 25px;
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Line = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: #FFBF00;
  transition: all 0.3s ease-in-out;
  position: absolute;

  &:nth-child(1) {
    top: ${({ $isOpen }) => ($isOpen ? '50%' : '0')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'none')};
  }

  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  &:nth-child(3) {
    bottom: ${({ $isOpen }) => ($isOpen ? '50%' : '0')};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'none')};
  }
`;

const AnimatedHamburger = ({ isOpen, toggleSidebar }) => {
  return (
    <HamburgerContainer onClick={toggleSidebar}>
      <Line $isOpen={isOpen} />
      <Line $isOpen={isOpen} />
      <Line $isOpen={isOpen} />
    </HamburgerContainer>
  );
};

AnimatedHamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default AnimatedHamburger;