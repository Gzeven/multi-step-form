import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './BackGroundImage';

interface StepIndicatorsProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicatorContainer = styled.div`
  display: flex;
`

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative; 
  height: 10.75rem;
  z-index: -1;
  @media (min-width: 940px) {
  flex-direction: column;
  height: 568px;
  width: 274px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  padding-top: 2.5rem;
  z-index: 0;
  }
`;

const Indicator = styled.div<{ $isCurrent: boolean }>`
  z-index: 1;
  margin-top: 2rem;
  width: 2.0625rem;
  height: 2.0625rem;
  margin-right: 1rem;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.875rem;
  border: 1px solid ${props => props.$isCurrent ? 'var(--light-blue)' : 'var(--white)'};
  background-color: ${props => props.$isCurrent ? 'var(--light-blue)' : 'transparent'};
  color: ${props => props.$isCurrent ? 'var(--marine-blue)' : 'var(--white)'};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 940px) {
  margin-top: 0;
  margin-left: 2rem;
  }
`;

const StepTextContainer = styled.div`
display: none;
  @media (min-width: 940px) {
 display: flex;
 flex-direction: column;
 z-index: 1;
  }
`

const StepText = styled.span`
  font-size: 0.75rem;
  color: var(--pastel-blue);
`;

const StepDescription = styled.span`
  font-size: 0.875rem;
  color: var(--white);
  font-weight: 700;
  margin-top: 0.125rem;
`;

const StepIndicators: React.FC<StepIndicatorsProps> = ({ currentStep, totalSteps }) => {

  return (
    <IndicatorContainer>
    <BackgroundImage/>
    {[...Array(totalSteps)].map((_, index) => (
      <StepIndicatorContainer key={index + 1}>
        <Indicator $isCurrent={index + 1 === currentStep}>
          {index + 1}
        </Indicator>
          <StepTextContainer>
            <StepText>Step {index + 1}</StepText>
            <StepDescription>
              {index + 1 === 1 && "Your Info"}
              {index + 1 === 2 && "Select Plan"}
              {index + 1 === 3 && "Add-ons"}
              {index + 1 === 4 && "Summary"}
            </StepDescription>
          </StepTextContainer>
      
      </StepIndicatorContainer>
    ))}
  </IndicatorContainer>
  );
};

export default StepIndicators;




