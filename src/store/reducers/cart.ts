import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../types'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O prato já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id != action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
