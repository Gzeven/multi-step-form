import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ButtonContainer from './ButtonContainer';


const StepOneContainer = styled.div`
  margin-top: -4.5625rem;
  /* min-height: 100vh; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1; */
  /* margin: 0 auto; */
  /* gap: 1.5rem; */
  /* z-index:2; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    margin-top: 0;
  min-height: 100%;
  flex: 1;
  padding: 2.5rem 6.25rem 1rem 5.25rem;
    /* margin: auto; */
    /* max-height: 600px; */
  }
`;

const FormContainer = styled.div`
  background-color: var(--white);
  margin: 0 1rem;
  padding: 2rem 1.5rem;
  border-radius: 0.625rem;
  /* margin-bottom: 1.5rem; */
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
  @media (min-width: 768px) {
    margin: 0;
    padding: 0;  
    box-shadow: none;
  }
`;

const Form = styled.form`
  display: flex; 
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.375rem;
  @media (min-width: 768px) {
  gap: 1.5rem;
  margin-top: 2.5rem;
  }
`;

const Label = styled.label`
  font-size: 0.75rem;
  color: var(--marine-blue);
  display: block;
  @media (min-width: 768px) {
  font-size: 0.875rem;
    
  }
`;

const InputContainer = styled.div`
  position: relative;
`

const Input = styled.input<{ $isError: boolean }>`
  border: 1px solid ${(props) => (props.$isError ? 'var(--strawberry-red)' : 'var(--light-gray)')};
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  color: var(--marine-blue);
  width: 100%;
  margin-top: 0.1875rem;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    border-color: var(--marine-blue); 
  }
  @media (min-width: 768px) {
    font-size: 16px;
  margin-top: 0.5rem;
    
  }
`;

const ErrorText = styled.span`
position: absolute;
right: 0;
top: -10px;
color: var(--strawberry-red);
font-weight: 700;
font-size: 0.6rem;
@media (min-width: 768px) {
    font-size: 0.875rem;
    top: -14px;
    
  }
`;

interface Step1Props {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    phone: string;
  }>>;
  onNext: () => void;
}

const StepOne: React.FC<Step1Props> = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNextStep = () => {
    const newErrors = {} as { [key: string]: string };

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'This field is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onNext();
    }
  };

  return (
    <StepOneContainer>
      <FormContainer>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <Form>
          <div>
            <Label htmlFor="name">Name</Label>
            <InputContainer>
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              $isError={!!errors.name}
            />
            </InputContainer>
           
      
          </div>
          <div >
            <Label htmlFor="email">Email Address</Label>
            <InputContainer>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              $isError={!!errors.email}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </InputContainer>
         
          </div>
          <div >
            <Label htmlFor="phone">Phone Number</Label>
            <InputContainer>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +1 234 567 890"
              $isError={!!errors.phone} 
            />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </InputContainer>
            
          </div>
        </Form>
      </FormContainer>
      <ButtonContainer $align="right">
            <Button type="next" text="Next Step" onClick={handleNextStep}   />
          </ButtonContainer>
    </StepOneContainer>
  );
};

export default StepOne;
