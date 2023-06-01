import { TitleText } from '../../../../components/Typography'
import { CoffeeItem, CoffeeList, OurCoffeesContainer } from './styles'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from './CoffeeCard'

const OurCoffees = () => {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeItem key={coffee.id}>
            <CoffeeCard coffee={coffee} />
          </CoffeeItem>
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}

export default OurCoffees
