import ProductList from '../Blocks/ProductList'
import { Items, Section } from './styles'

const Main = () => (
  <main>
    <Section>
      <Items className="container">
        <ProductList />
        <ProductList />
        <ProductList />
      </Items>
    </Section>
  </main>
)

export default Main
