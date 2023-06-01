import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.colors['brand-purple-light']};
`
