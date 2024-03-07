import React, {useState} from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import arcadeImage from '../assets/images/icon-arcade.svg';
import advancedImage from '../assets/images/icon-advanced.svg';
import proImage from '../assets/images/icon-pro.svg';
import ToggleButton from './ToggleButton';
import { Container } from './SharedStyles'; 


const StepTwoContainer = styled(Container)`
`;

const SelectPlanContainer = styled.div`
background-color: var(--white);
margin: 0 1rem;
padding: 2rem 1.5rem;
border-radius: 0.625rem;
box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
@media (min-width: 940px) {
box-shadow: none;
margin: 0;
padding:0;
  }
`;

const SelectPlanText = styled.div`
  margin-bottom: 1.375rem;
  @media (min-width: 940px) {
margin-bottom: 0;
  }
`

const PlansContainer = styled.div`
  @media (min-width: 940px) {
display: flex;
gap: 1.125rem;
margin-top: 2.5rem;
  }
`

const PlanButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 0.875rem;
  width: 100%;
  padding: 1rem;
    border: 1px solid var(--light-gray);
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    transition: all 0.5s ease;
    @media(hover: hover) and (pointer: fine) {
      &:hover {
      border: 1px solid var(--purplish-blue);
    }
}

    &.selected {
      background: var(--alabaster);
      border: 1px solid var(--purplish-blue);;
    }
    h3 {
    font-weight: 500;
    font-size: 1rem;
    color: var(--marine-blue);
  }
  img {
    margin-bottom: auto;
  }

  @media (min-width: 940px) {
   flex-direction: column;
   align-items: flex-start;
   gap: 2.4375rem;
   flex: 1;
   margin-top: 0;
  }
`;


const PlanDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const PlanDetailsPrice = styled.p`
  color: var(--cool-gray);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

const PlanDetailsFreeMonth = styled.p`
  font-size: 0.75rem;
  color: var(--marine-blue);
  margin: 0;
`

const ErrorMessage = styled.p`
font-size: 0.875rem;
position: absolute;
right: 8rem;
color: var(--strawberry-red);
@media (min-width: 940px) {
  font-size: 1rem;
  right: 7rem;
  }
`

interface Step2Props {
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
  onPrev: () => void;
  planPrices: { [key: string]: { monthly: number; yearly: number } };
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
  isYearly: boolean;
}

const StepTwo: React.FC<Step2Props> = ({ selectedPlan, setSelectedPlan, onNext, onPrev, setIsYearly, isYearly, planPrices }) => {
  
  const handleToggleBilling = () => {
    setIsYearly((prevIsYearly) => !prevIsYearly);
  };

  const plans = [
    { name: 'Arcade', price: isYearly ? planPrices['Arcade'].yearly : planPrices['Arcade'].monthly, imageSrc: arcadeImage },
    { name: 'Advanced', price: isYearly ? planPrices['Advanced'].yearly : planPrices['Advanced'].monthly, imageSrc: advancedImage },
    { name: 'Pro', price: isYearly ? planPrices['Pro'].yearly : planPrices['Pro'].monthly, imageSrc: proImage },
  ];

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleNextButtonClick = () => {
    if (!selectedPlan) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      onNext();
    }
  };

  return (
    <StepTwoContainer>
     <SelectPlanContainer>
      <SelectPlanText>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      </SelectPlanText>
   
      <PlansContainer>
        {plans.map((plan) => (
          <PlanButton
            key={plan.name}
            onClick={() => setSelectedPlan(plan.name)}
            className={selectedPlan === plan.name ? 'selected' : ''}
          >
            <Image
              src={plan.imageSrc}
              alt={plan.name}
            />
            <PlanDetails>
              <h3>{plan.name}</h3>
              <PlanDetailsPrice>{isYearly ? `$${plan.price}/yr` : `$${plan.price}/mo`}</PlanDetailsPrice>
              {isYearly && <PlanDetailsFreeMonth>2 months free</PlanDetailsFreeMonth>}
            </PlanDetails>
          </PlanButton>
        ))}

      </PlansContainer>
   
        <ToggleButton checked={isYearly} onChange={handleToggleBilling} />
     
      </SelectPlanContainer>
      <ButtonContainer>
        <Button type="goback" onClick={onPrev} text="Go Back" className="go-back-button" />
        <Button
  type="next"
  onClick={handleNextButtonClick}
  text="Next Step"
  disabled={!selectedPlan}
/>
{showErrorMessage && <ErrorMessage>Please select a plan</ErrorMessage>}
      </ButtonContainer>
    </StepTwoContainer>
  );
};

export default StepTwo;