import { FooterContainer } from './styles'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <p>© {year} Coffee. All rights reserved.</p>
    </FooterContainer>
  )
}

export default Footer
