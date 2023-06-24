import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import lixeira from '../../../assets/images/lixeira.svg'
import Button from '../../Button'
import { close, remove } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPreco = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const openCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={openCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => {
            return (
              <S.Product key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                  <span>
                    <img
                      onClick={() => removeItem(item.id)}
                      src={lixeira}
                      alt="Lixeira"
                    />
                  </span>
                </div>
              </S.Product>
            )
          })}
        </ul>
        <S.Price>
          <p>Valor Total</p>
          <p>{formataPreco(getTotalPreco())}</p>
        </S.Price>
        <Button>Continuar com a compra</Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
