import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -4.5625rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 58.75rem) {
    margin-top: 0;
    min-height: 100%;
    flex: 1;
    padding: 2.5rem 4.75rem 1rem 5.75rem;
  }
`;