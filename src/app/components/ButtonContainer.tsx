import React from 'react';
import styled, {css} from 'styled-components';

// Define the props interface
interface ButtonContainerProps {
  $align?: 'left' | 'right'; // Align can be left or right
  children?: React.ReactNode;
}

// Styled component for the container
const Container = styled.div<ButtonContainerProps>`
  background-color: var(--white);
  /* height: 72px; */
  display: flex;
  padding: 1rem;
  /* margin-top: 1.5rem; */
  justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'space-between')};
  /* padding: 0 1rem; */
  ${props =>
    props.$align &&
    css`
      align-items: center; 
    `}
    @media (min-width: 768px) {
    padding: 0;
    /* margin-top: 4rem; */
   
  }

`;


const ButtonContainer: React.FC<ButtonContainerProps> = ({ $align = 'left', children }) => {
  return <Container $align={$align}>{children}</Container>;
};

export default ButtonContainer;