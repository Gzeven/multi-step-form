import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  cursor: pointer;
  font-size: 0.875rem;
  @media (min-width: 768px) {
  font-size: 1rem;
  }
`;

const NextButton = styled(StyledButton)`
  background-color: var(--marine-blue);
  color: var(--white);
  transition: background-color 0.5s ease;
  width: 6.0625rem;
  height: 2.5rem;
  font-weight: 500;
  border-radius: 4px;
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background-color: hsl(213.1,72.5%,31.4%);
  }
  @media (min-width: 768px) {
    height: 3rem;
    width: 7.6875rem;
    /* margin-top: 4rem; */
   
  }
}

`;

const GoBackButton = styled(StyledButton)`
  color: var(--cool-gray);
  font-weight: 500;
  transition: color 0.5s ease;
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--marine-blue);
  }
}
`;

const ConfirmButton = styled(StyledButton)`
  background-color: var(--purplish-blue);
  color: var(--white);
  transition: background-color 0.5s ease;
  width: 6.0625rem;
  height: 2.5rem;
  font-weight: 500;
  border-radius: 4px;
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background-color: hsl(243,100%,77%);
  }
}
`;

const ChangeButton = styled(StyledButton)`
font-size: 0.875rem;
font-weight: 400;
color: var(--cool-gray);
 border-bottom: 1px solid var(--cool-gray);
 margin-right: auto;
`;


interface ButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
  disabled?: boolean;
  type: 'next' | 'goback' | 'confirm' | 'change' ;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, text }) => {
    // Render different styled buttons based on the type prop
    switch (type) {
      case 'next':
        return <NextButton onClick={onClick}>{text}</NextButton>;
      case 'goback':
        return <GoBackButton onClick={onClick}>{text}</GoBackButton>;
      case 'confirm':
        return <ConfirmButton onClick={onClick}>{text}</ConfirmButton>;
      case 'change':
        return <ChangeButton onClick={onClick}>{text}</ChangeButton>;
      default:
        return null;
    }
  };
  
  export default Button;