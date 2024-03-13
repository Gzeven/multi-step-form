import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import ButtonContainer from './ButtonContainer';
import { Container } from './SharedStyles'; 

const SummaryContainer = styled(Container)`
`;

const OverviewContainer = styled.div`
  background-color: var(--white);
  margin: 0 1rem;
  padding: 2rem 1.5rem;
  border-radius: 0.625rem;
  margin-bottom: 7.5rem;
  @media (min-width: 940px) {
  box-shadow: none;
  margin: 0;
  padding:0;
  }
`

const AllPricesContainer = styled.div`
  background-color: var(--alabaster);
  padding: 1rem;
  margin-top: 1.375rem;
  border-radius: 0.5rem;
  @media (min-width: 940px) {
margin-top: 2.5rem;
padding: 1rem 1.5rem;
  }
`

const ChosenPlanContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const ChosenPlanTextAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`

const ChosenPlanText = styled.h3`
color: var(--marine-blue);
font-size: 0.875rem;
font-weight: 500;
@media (min-width: 940px) {
font-size: 1rem;
  }
`

const ChosenPlanPrice = styled.span`
color: var(--marine-blue);
font-size: 0.875rem;
font-weight: 700;
@media (min-width: 940px) {
font-size: 1rem;
  }
`

const AllOptionsContainer = styled.div`
display: flex;
padding-top: 0.75rem;
justify-content: space-between;
@media (min-width: 940px) {
padding-top: 1rem;
  }
`

const Divider = styled.div`
border-top: 1px solid rgba(150, 153, 170, .2);
margin-top: 0.75rem;
@media (min-width: 940px) {
margin-top: 1.5rem;
  }
`

const OptionsText = styled.span`
color: var(--cool-gray);
font-size: 0.875rem;

`

const OptionsPrices= styled.span`
color: var(--marine-blue);
font-size: 0.875rem;

`

const TotalPriceContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-inline: 1rem;
margin-top: 1.5rem;
@media (min-width: 940px) {
padding-inline: 1.5rem;
  }
  
  
`
const TotalPriceText = styled.p`
  font-size: 0.875rem;
  color: var(--cool-gray);
`
const TotalPrice = styled.p`
  font-size: 1rem;
  color: var(--purplish-blue);
  @media (min-width: 940px) {
font-size: 1.25rem;
  }
`

interface SummaryProps {
  selectedPlan: string;
  isYearly: boolean;
  selectedOptions: {
    [key: string]: boolean;
  };
  optionPrices: { [key: string]: { monthly: number; yearly: number } };
  totalPrice: number;
  planPrices: { [key: string]: { monthly: number; yearly: number } };
  onNext: () => void;
  onPrev: () => void;
  onChangePlan: () => void; 
  
}

const Summary: React.FC<SummaryProps> = ({ selectedPlan, isYearly, selectedOptions, optionPrices, totalPrice, onPrev, onNext, planPrices, onChangePlan }) => {
  const formatPrice = (price: number) => {
    return isYearly ? `$${price}/yr` : `$${price}/mo`;
  };

  const filteredOptions = Object.entries(selectedOptions)
    .filter(([option, isSelected]) => isSelected)
    .map(([option, isSelected]) => option);

  return (
    <SummaryContainer>
      <OverviewContainer>
      <h2 >Finishing up</h2>
      <p >Double-check everything looks OK before confirming.</p>
      <AllPricesContainer>
      <ChosenPlanContainer >
        <ChosenPlanTextAndButton>
         <ChosenPlanText>{selectedPlan} ({isYearly ? 'Yearly' : 'Monthly'}) {' '}</ChosenPlanText> 
        
        <Button type="change" onClick={onChangePlan} text="Change" />
        </ChosenPlanTextAndButton>
        <ChosenPlanPrice>
        {formatPrice(planPrices[selectedPlan][isYearly ? 'yearly' : 'monthly'])}
        </ChosenPlanPrice>
      </ChosenPlanContainer>

  {filteredOptions.length > 0 && <Divider/>}
   {filteredOptions.map((option) => (
    <AllOptionsContainer key={option}>
    <OptionsText>
      {option} 
      </OptionsText>
    <OptionsPrices>
    +{formatPrice(optionPrices[option][isYearly ? 'yearly' : 'monthly'])}
    </OptionsPrices>
    
    
    </AllOptionsContainer>
  ))}   
      </AllPricesContainer>
      <TotalPriceContainer >
        <TotalPriceText>Total {isYearly ? '(per year)' : '(per month)'} </TotalPriceText>
        <TotalPrice>+${totalPrice}{isYearly ? '/yr' : '/mo'}</TotalPrice>
      </TotalPriceContainer>  
      </OverviewContainer>
      <ButtonContainer>
      <Button type="goback" onClick={onPrev} text="Go Back" className="go-back-button" />
      <Button type="confirm" onClick={onNext} text="Confirm"  />
      </ButtonContainer>
    </SummaryContainer>
  );
};

export default Summary;

