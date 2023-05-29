import { Product } from '../MainPages'
import ProductPages from '../ProductPages'

type Props = {
  restaurantes: Product[]
}

const ProductListPage = ({ restaurantes }: Props) => (
  <>
    <div>
      {restaurantes.map((restaurante) => (
        <ProductPages
          key={restaurante.cardapio.id}
          nome={restaurante.cardapio.nome}
          image={restaurante.cardapio.foto}
          description={restaurante.cardapio.descricao}
          descriptionModal={restaurante.cardapio.descricao}
          porcao={restaurante.cardapio.nome}
        />
      ))}
    </div>
  </>
)

export default ProductListPage
