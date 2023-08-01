import {createSlice,PayloadAction} from '@reduxjs/toolkit'

import imageMonitor from '@/assets/images/Monitor.png'
import imageCadeira from '@/assets/images/Cadeira.png'
import imageTeclado from '@/assets/images/teclado.png'
import imageHeadset from '@/assets/images/headset.png'

const productsData = [
  {
    id: 1,
    image: imageMonitor,
    name: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD',
    price: 8599.90,
    quantity: 1,
  },
  {
    id: 2,
    image: imageCadeira,
    name: 'Cadeira Gamer  RGB - Preta com Iluminação (Led)',
    price: 959.90,
    quantity: 1,
  },
  {
    id: 3,
    image: imageTeclado,
    name: 'Teclado Gamer Mecânico Low Profile RGB AW510K 580',
    price: 259.90,
    quantity: 1,
  },
  {
    id: 4,
    image: imageHeadset,
    name: 'Headset Gamer RGB Preto',
    price: 99.90,
    quantity: 1,
  }
]


const initialState = {
  value: {
    open: true,
    products: [...productsData],
  }
}



const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    toggleMenu: (state) => {
      state.value.open = !state.value.open
    }, 

    increment: (state,action:PayloadAction<number>) => {
      const product = state.value.products.find(product => product.id === action.payload);
      if (product?.quantity && product.quantity < 99) {
        product.quantity += 1
      }      
    },
    decrement: (state,action:PayloadAction<number>) => {
      const product = state.value.products.find(product => product.id === action.payload);
      if (product?.quantity && (product.quantity - 1) >= 1) {
        product.quantity -= 1
      } 
    }
  }
})

export const {
  decrement,
  increment,
  toggleMenu
} = cartSlice.actions
export const cartReducer = cartSlice.reducer;