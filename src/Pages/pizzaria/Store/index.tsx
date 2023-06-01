import { useAPI } from '../../../hooks/useAPI'

import star from '../../../assets/images/star.svg'
import close from '../../../assets/images/close.svg'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
  descricao: string
  cardapio: Cardapio[]
}

const Store = () => {
  const { data: Restaurante } = useAPI<Props[]>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )

  const restauranteId1 = Restaurante?.find((rest) => rest.id === 5)
  const closeModal = () => {
    setModalOpen(false)
  }
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const [modalName, setModalName] = useState('')
  const [modalDesc, setModalDesc] = useState('')
  const [modalPreco, setModalPreco] = useState(0)
  const [modalPorcao, setModalPocao] = useState('')

  const formatPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescription = (description: string) => {
    if (description.length > 277) {
      return description.slice(0, 274) + '...'
    }
    return description
  }

  return (
    <>
      <S.RestauranteStyle>
        <img src={restauranteId1?.capa} alt="Foto de Restaurante" />
        <div className="container">
          <div>
            <h2>{restauranteId1?.titulo}</h2>
            <div>
              <h3>{restauranteId1?.tipo}</h3>
              <span>
                {restauranteId1?.avaliacao}
                <img src={star} alt="Estrela" />
              </span>
            </div>
          </div>
          <S.Descricao>{restauranteId1?.descricao}</S.Descricao>
        </div>
      </S.RestauranteStyle>

      <S.CardapioStyle className="container">
        {restauranteId1?.cardapio.map((item) => (
          <>
            <S.PratoStyle
              key={item.id}
              onClick={() => {
                setModalOpen(true)
                setModalImage(item.foto)
                setModalName(item.nome)
                setModalDesc(item.descricao)
                setModalPreco(item.preco)
                setModalPocao(item.porcao)
              }}
            >
              <S.ImageStyle src={item.foto} alt="Foto do Prato" />
              <h3>{item.nome}</h3>
              <p>{getDescription(item.descricao)}</p>
              <button>Adicionar ao carrinho</button>
            </S.PratoStyle>

            <S.Modal className={modalOpen ? 'visivel' : ''}>
              <div className="overlay" onClick={() => closeModal()}></div>
              <S.ModalContent>
                <S.Close
                  src={close}
                  alt="Fechar"
                  onClick={() => closeModal()}
                />
                <S.ModalImage src={modalImage} alt={item.nome} />
                <S.ModalSobre>
                  <h3>{modalName}</h3>
                  <S.ModalDescription>
                    <p>{modalDesc}</p>
                    <p>Serve: de {modalPorcao}</p>
                  </S.ModalDescription>
                  <Link to={'/'}>
                    Adicionar ao carrinho - {formatPreco(modalPreco)}
                  </Link>
                </S.ModalSobre>
              </S.ModalContent>
            </S.Modal>
          </>
        ))}
      </S.CardapioStyle>

      <S.CardapioStyle className="container">
        {restauranteId1?.cardapio.map((item) => (
          <>
            <S.PratoStyle
              key={item.id}
              onClick={() => {
                setModalOpen(true)
                setModalImage(item.foto)
                setModalName(item.nome)
                setModalDesc(item.descricao)
                setModalPreco(item.preco)
                setModalPocao(item.porcao)
              }}
            >
              <S.ImageStyle src={item.foto} alt="Foto do Prato" />
              <h3>{item.nome}</h3>
              <p>{getDescription(item.descricao)}</p>
              <button>Adicionar ao carrinho</button>
            </S.PratoStyle>
          </>
        ))}
      </S.CardapioStyle>
    </>
  )
}

export default Store
