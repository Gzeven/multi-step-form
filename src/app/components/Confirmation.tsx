import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import ThankYouImage from '../assets/images/icon-thank-you.svg';

const ConfirmationContainer = styled.div`
 margin-top: -4.5625rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  
  img {
    width: 56px;
  }
  @media (min-width: 768px) {
    margin-top: 0;
  min-height: 100%;
  flex: 1;
  padding: 2.5rem 6.25rem 1rem 5.25rem;
  display: flex;
  justify-content: center;
  img {
    width: 80px;
  }
    /* margin: auto; */
    /* max-height: 600px; */
  }
`

const ConfirmationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--white);
  padding: 4.9375rem 1.5rem;
margin: 0 1rem;
border-radius: 0.625rem;
/* margin-bottom: 8.8125rem; */
box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
@media (min-width: 768px) {
    margin: 0;
    padding: 0;  
    box-shadow: none;
  }


`

const TextContainer = styled.div`
    margin-top: 1.5rem;
`

const Confirmation  = () => {
    return (
        <ConfirmationContainer >
            <ConfirmationTextContainer>
        <Image
              src={ThankYouImage}
              alt="Thank You"  
            />
       
        <TextContainer>
        <h2 >Thank you!</h2>
        <p >
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email at support@loremgaming.com.
        </p>
        </TextContainer>
        </ConfirmationTextContainer>
      </ConfirmationContainer>
      );
}


export default Confirmation;