import Restaurant from '../Blocks/RestaurantList'
import { Items, Section } from './styles'

const Main = () => (
  <main>
    <Section>
      <Items className="container">
        <Restaurant />
      </Items>
    </Section>
  </main>
)

export default Main
