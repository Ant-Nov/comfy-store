import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify';

const initialState = {
  cartItems: [],
  shipping: 500,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: state => {
      console.log('clearCart');

      return initialState;
    },
    addItem: (state, { payload }) => {
        const existingItem = state.cartItems.find(item => item.cartID === payload.cartID);

        if (!existingItem) {
          state.cartItems.push(payload);
        } else {
          existingItem.amount = existingItem.amount + payload.amount;
        }
    },
    removeItem: (state, { payload: cartID }) => {
      state.cartItems = state.cartItems.filter(item => item.cartID !== cartID);
    },
    editItem: (state, { payload: { cartID, amount } }) => {
      state.cartItems = state.cartItems.map(item => item.cartID === cartID
        ? {...item, amount}
        : item
      );
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;