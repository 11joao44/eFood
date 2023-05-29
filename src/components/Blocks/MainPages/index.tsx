import { useEffect, useState } from 'react'
import ProductListPage from '../ProductListPages'
import { Items, Section } from './styles'

export type Product = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const MainPage = () => {
  const [product, setProduct] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes/1')
      .then((res) => res.json())
      .then((res) => setProduct(res))
  }, [])

  return (
    <main>
      <Section>
        <Items className="container">
          <ProductListPage restaurantes={product} />
          <ProductListPage restaurantes={product} />
          <ProductListPage restaurantes={product} />
        </Items>
      </Section>
    </main>
  )
}

export default MainPage
