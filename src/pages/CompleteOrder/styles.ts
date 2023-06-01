import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
