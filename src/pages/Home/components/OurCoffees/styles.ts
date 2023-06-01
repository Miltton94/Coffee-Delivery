import styled from 'styled-components'

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
  justify-content: space-between;
  align-items: center;
`

export const CoffeeItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
// grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
