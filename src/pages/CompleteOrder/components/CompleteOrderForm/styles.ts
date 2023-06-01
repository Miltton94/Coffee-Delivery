import styled from 'styled-components'
import { SectionBaseStyle } from '../../styles'

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 40rem;
  width: 100%;
`

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  /* @media (max-width: 652px) {
    grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  } */

  @media (max-width: 705px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    row-gap: 1rem;

    .cep {
      grid-column: initial;
      max-width: initial;
    }

    .street {
      grid-column: initial;
    }

    .number {
      grid-column: initial;
      max-width: 5rem;
    }

    .complement {
      grid-column: initial;
    }

    .city {
      grid-column: initial;
    }

    .uf {
      grid-column: initial;
      max-width: 3.75rem;
    }
  }
`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors['base-error']};
  }

  @media (max-width: 705px) {
    > p {
      grid-column: initial;
    }
  }
`
