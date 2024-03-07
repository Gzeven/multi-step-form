import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Checkbox from './CheckBox';
import ButtonContainer from './ButtonContainer';
import { Container } from './SharedStyles'; 

const StepThreeContainer = styled(Container)`
`;

const SelectOptionsContainer = styled.div`
background-color: var(--white);
margin: 0 1rem;
padding: 2rem 1.5rem;
border-radius: 0.625rem;
margin-bottom: 8.8125rem;
box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
@media (min-width: 940px) {
  box-shadow: none;
margin: 0;
padding:0;
  }
`
const OptionsContainer = styled.div`
  margin-top: 1rem;
  @media (min-width: 940px) {
margin-top: 2.5rem;

  }
`

interface Step3Props {
  isYearly: boolean;
  selectedOptions: {
    onlineServices: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  };
  setSelectedOptions: React.Dispatch<React.SetStateAction<{
    onlineServices: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
  }>>;
  optionPrices: { [key: string]: { text: string; monthly: number; yearly: number } };
  onNext: () => void;
  onPrev: () => void;
}

const StepThree: React.FC<Step3Props> = ({ isYearly, selectedOptions, setSelectedOptions, onNext, onPrev, optionPrices }) => {
  const handleOptionChange = (option: keyof typeof selectedOptions) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [option]: !prevSelectedOptions[option],
    }));
  };

  return (
    <StepThreeContainer>
      <SelectOptionsContainer>
        <h2 >Pick add-ons</h2>
        <p >Add-ons help enhance your gaming experience.</p>
        <OptionsContainer>
        {Object.entries(optionPrices).map(([option, price]) => (
          <Checkbox
            key={option}
            id={option}
        
            checked={selectedOptions[option as keyof typeof selectedOptions]}
            onChange={() => handleOptionChange(option as keyof typeof selectedOptions)}
            label={option}
            text={price.text}
            priceMonthly={price.monthly}
            priceYearly={price.yearly}
            isYearly={isYearly}
          />
        ))}
        </OptionsContainer>
      </SelectOptionsContainer>
      
      <ButtonContainer>
        <Button type="goback" onClick={onPrev} text="Go Back" className="go-back-button" />
        <Button type="next" onClick={onNext} text="Next Step" />
      </ButtonContainer>
    </StepThreeContainer>
  );
};

export default StepThree;