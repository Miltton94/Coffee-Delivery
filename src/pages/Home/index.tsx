import OurCoffees from './components/OurCoffees'
import Intro from './components/intro'
import { HomeContainer } from './styles'

const HomePage = () => {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}

export default HomePage
