import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import lixeira from '../../../assets/images/lixeira.svg'
import Button from '../../Button'
import { close } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(close())
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={openCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => {
            return (
              <S.Product key={item.id}>
                <img src={item.capa} alt="Foto da Pizza" />
                <div>
                  <h3>{item.titulo}</h3>
                  <p>R$ 60,90</p>
                  <span>
                    <img src={lixeira} alt="Lixeira" />
                  </span>
                </div>
              </S.Product>
            )
          })}
        </ul>
        <S.Price>
          <p>Valor Total</p>
          <p>R$ 182,70</p>
        </S.Price>
        <Button>Continuar com a compra</Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
