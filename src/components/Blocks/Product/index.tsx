import { Link } from 'react-router-dom'

import Tag from '../Tag'

import { Description, Card } from './styles'
import star from '../../../assets/images/star.svg'

type Props = {
  image: string
  nome: string
  description: string
  tag: string
}

const Product = ({ nome, image, description, tag }: Props) => (
  <Card>
    <Tag>{tag}</Tag>
    <img src={image} alt={nome} />
    <Description>
      <h3>{nome}</h3>
      <p>{description}</p>
      <span>
        4.9
        <img src={star} alt="Avaliação do prato" />
      </span>
      <Link to={'/Restaurant'}>Saiba mais</Link>
    </Description>
  </Card>
)

export default Product
