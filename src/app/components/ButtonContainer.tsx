import React from 'react';
import styled, {css} from 'styled-components';

interface ButtonContainerProps {
  $align?: 'left' | 'right'; 
  children?: React.ReactNode;
}

const Container = styled.div<ButtonContainerProps>`
position: relative; 
  background-color: var(--white);
  display: flex;
  padding: 1rem;
  justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'space-between')};
  ${props =>
    props.$align &&
    css`
      align-items: center; 
    `}
    @media (min-width: 58.75rem) {
    padding: 0; 
  }
`;

const ButtonContainer: React.FC<ButtonContainerProps> = ({ $align = 'left', children }) => {
  return <Container $align={$align}>{children}</Container>;
};

export default ButtonContainer;