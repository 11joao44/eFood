import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Description, Capa, Store } from './styles'
import star from '../../../assets/images/star.svg'
import { useAPI } from '../../../hooks/useAPI'
import Product from '../Product'

type Props = {
  titulo: string
  tipo: string
  avaliacao: string
  id: number
  descricao: string
  capa: string
}

const Restaurant = () => {
  const { data: restaurantes } = useAPI<Props[]>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      {restaurantes.map((item) => (
        <Link to={`/restaurantes/${item.id}`} key={item.id}>
          <Store>
            <Capa src={item.capa} alt={item.titulo} />
            <Tag>{item.tipo}</Tag>
            <Description>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
              <span>
                {item.avaliacao}
                <img src={star} alt="Avaliação do prato" />
              </span>
              <Link to={`/restaurantes/${item.id}`}>Saiba mais</Link>
            </Description>
          </Store>
        </Link>
      ))}
      <Product />
    </>
  )
}

export default Restaurant
