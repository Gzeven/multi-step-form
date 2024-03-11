import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'
import ThankYouImage from '../../../public/static/images/icon-thank-you.svg';
import { Container } from './SharedStyles'; 

const ConfirmationContainer = styled(Container)`
   img {
     width: 3.5rem;
   }
   @media (min-width: 940px) {
    width: 5rem;
    display: flex;
    justify-content: center;
  }

`;

// const ConfirmationContainer = styled.div`


//   gap: 1.5rem;
  
//   img {
//     width: 56px;
//   }
//   @media (min-width: 768px) {
//     margin-top: 0;
//   min-height: 100%;
//   flex: 1;
//   padding: 2.5rem 6.25rem 1rem 5.25rem;
//   display: flex;
//   justify-content: center;
//   img {
//     width: 80px;
//   }
//   }
// `

const ConfirmationTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--white);
  padding: 4.9375rem 1.5rem;
margin: 0 1rem;
border-radius: 0.625rem;
box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.0951141);
@media (min-width: 940px) {
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