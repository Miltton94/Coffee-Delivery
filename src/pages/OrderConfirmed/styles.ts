import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 4rem 0;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 600px;
    > section {
      flex-direction: column;
      gap: 2.5rem;
    }
  }

  @media (max-width: 550px) {
    > section {
      > img {
        width: 320px;
        height: 191px;
      }
    }
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors['base-background']};
  max-width: 32rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
