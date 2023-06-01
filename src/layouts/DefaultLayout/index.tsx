import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}

export default DefaultLayout
