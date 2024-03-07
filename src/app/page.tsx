"use client";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Summary from './components/Summary';
import Confirmation from './components/Confirmation';
import StepIndicators from './components/StepIndicators';
import plans from './../data/plans'; 
import options from './../data/options'; 

const MainContainer = styled.main`
@media (min-width: 940px) {
  background-color: white;
  padding: 1rem;
  border-radius: 15px;
  max-width: 940px;
  display: flex;
  align-items: stretch;
  margin: 105px auto ;
}
`

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isYearly, setIsYearly] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    onlineServices: false,
    largerStorage: false,
    customizableProfile: false,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

const calculateTotalPrice = () => {
  let total = 0;
  if (selectedPlan && selectedPlan in plans) {
    total += isYearly ? plans[selectedPlan].yearly : plans[selectedPlan].monthly;
  }
  Object.entries(selectedOptions).forEach(([option, isSelected]) => {
    if (isSelected && option in options) {
      total += isYearly ? options[option].yearly : options[option].monthly;
    }
  });

  setTotalPrice(total);
};

  useEffect(() => {
    calculateTotalPrice(); 
  }, [selectedPlan, isYearly, selectedOptions]);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChangePlan = () => {
    setStep(2); 
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
  };


  return (
    <MainContainer>
      <StepIndicators currentStep={step} totalSteps={4} />
       {!isConfirmed && (
      <>
        {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          onNext={handleNextStep} 
          onPrev={handlePrevStep}
          setIsYearly={setIsYearly}
          isYearly={isYearly}
          planPrices={plans} 
        />
      )}
      {step === 3 && (
        <StepThree
          isYearly={isYearly} 
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions} 
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          optionPrices={options}
        />
      )}
      {step === 4 && (
        <Summary
          selectedPlan={selectedPlan}
          isYearly={isYearly}
          selectedOptions={selectedOptions}
          totalPrice={totalPrice}
          onPrev={handlePrevStep}
          onNext={handleConfirm}
          optionPrices={options}
          planPrices={plans}
          onChangePlan={handleChangePlan}
      
        />
      )}
      </>
    )}
      
       {isConfirmed && <Confirmation/> }
  
    </MainContainer>
  );
}