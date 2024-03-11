import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  text: string;
  priceMonthly: number; 
  priceYearly: number;
  isYearly: boolean;

}

const CheckboxContainer = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => (props.checked ? 'var(--alabaster)' : 'var(--white)')}; 
  border: ${(props) => (props.checked ? '1px solid var(--purplish-blue)' : '1px solid var(--light-gray)')};
  height: 3.875rem;
  border-radius: 0.5rem;
 
  &:hover {
    border-color: var(--purplish-blue); 
  }
  @media (min-width: 940px) {
    padding: 2.5rem 1.5rem;
  }
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxCheckmark = styled.div<{ checked: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  border: ${(props) => (props.checked ? '2px solid var(--purplish-blue)' : '2px solid var(--light-gray)')}; 
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  background-color: ${(props) => (props.checked ? 'var(--purplish-blue)' : 'transparent')};
  @media(hover: hover) and (pointer: fine) {
    &:hover {
      border: 1px solid var(--purplish-blue);
    }
  }

  @media (min-width: 940px) {
    margin-right: 1.5rem;
  }
`;

const CheckboxTextContainer = styled.div`
    display: flex;
    flex-direction: column;  

`

const CheckboxLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--marine-blue);
  display: block;
  @media (min-width: 940px) {
    font-size: 1rem
  }
`;

const AdditionalText = styled.span`
  font-size: 0.75rem;
  color: var(--cool-gray);
  margin-top: 0.4375rem;
  @media (min-width: 940px) {
    font-size: 0.9375rem
  }
`;

const PriceContainer = styled.span`
  font-size: 0.75rem;
  color: var(--purplish-blue);
  margin-top: 0.25rem;
  margin-left: auto;
  @media (min-width: 940px) {
    font-size: 0.9375rem
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, label, text, isYearly, priceMonthly, priceYearly }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onChange(); // Toggle checkbox
    }
  };

  const isChecked = checked || false;
  
  return (
    <CheckboxContainer htmlFor={id} tabIndex={0} onKeyDown={handleKeyPress} checked={checked}>
      <CheckboxInput id={id} type="checkbox" checked={isChecked} onChange={onChange} tabIndex={0} />
      <CheckboxCheckmark checked={checked}>
        {checked && (
          <svg
            className={`checkbox ${checked ? 'checkbox--active' : ''}`}
            aria-hidden="true"
            viewBox="0 0 12 9"
            height="9"
            fill="none"
          >
            <path
              d="M1 4L4.43298 7.43298L10.866 1"
              strokeWidth="2"
              stroke={checked ? 'var(--white)' : 'none'}
            />
          </svg>
        )}
      </CheckboxCheckmark>
      <CheckboxTextContainer>
        <CheckboxLabel>{label}</CheckboxLabel>
        <AdditionalText>{text}</AdditionalText>
      </CheckboxTextContainer>
      <PriceContainer>{isYearly ? `+$${priceYearly}/yr` : `+$${priceMonthly}/mo`}</PriceContainer>
    </CheckboxContainer>
  );
};

export default Checkbox;

