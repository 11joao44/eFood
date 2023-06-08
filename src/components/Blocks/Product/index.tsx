import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../../services/api'

const Product = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      {restaurant.map((item) => (
        <>
          <img src={item.cardapio.foto} alt={item.cardapio.nome} />
          <h2>{item.cardapio.nome}</h2>
        </>
      ))}
    </>
  )
}

export default Product
