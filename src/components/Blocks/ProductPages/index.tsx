import { Link } from 'react-router-dom'
import close from '../../../assets/images/close.svg'
import * as S from './styles'
import { useState } from 'react'

type Props = {
  image: string
  nome: string
  description: string
  descriptionModal: string
  porcao: string
}

const ProductPages = ({
  nome,
  image,
  description,
  descriptionModal,
  porcao
}: Props) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <S.Card>
        <img src={image} alt={nome} onClick={() => setModalOpen(true)} />
        <S.Description>
          <h3>{nome}</h3>
          <p>{description}</p>
          <Link to={'/Restaurant'}>Adicionar ao carrinho</Link>
        </S.Description>
      </S.Card>

      <S.Modal className={modalOpen ? 'visivel' : ''}>
        <S.ModalContent>
          <S.Close
            src={close}
            alt="Fechar"
            onClick={() => setModalOpen(false)}
          />
          <S.ModalImage src={image} alt={nome} />
          <S.DescriptionModal>
            <h3>{nome}</h3>
            <p>{descriptionModal}</p>
            <p>{porcao}</p>
            <Link to={'/Restaurant'}>Adicionar ao carrinho - R$ 60,90</Link>
          </S.DescriptionModal>
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default ProductPages
