import { Link } from 'react-router-dom'
import Tag from '../Tag'
import { Description, Capa, Store } from './styles'
import star from '../../../assets/images/star.svg'
import { useAPI } from '../../../hooks/useAPI'

type Props = {
  titulo: string
  tipo: string
  avaliacao: string
  id: number
  descricao: string
  capa: string
}

const Product = () => {
  const { data: restaurantes } = useAPI<Props[]>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )

  return (
    <>
      {restaurantes?.map((item) => (
        <Link to={`/${item.tipo}`} key={item.id}>
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
              <Link to={`/${item.tipo}`}>Saiba mais</Link>
            </Description>
          </Store>
        </Link>
      ))}
    </>
  )
}

export default Product
