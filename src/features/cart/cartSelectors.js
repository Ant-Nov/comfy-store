import { createSelector } from '@reduxjs/toolkit';

const selectCartItems = (state) => state.cart.cartItems;
const selectShipping = (state) => state.cart.shipping;

export const selectCartTotals = createSelector(
  [selectCartItems, selectShipping],
  (cartItems, shipping) => {
    const cartTotal = cartItems.reduce(
      (acc, item) => acc + item.amount * item.price,
      0
    );

    const numItemsInCart = cartItems.reduce(
      (acc, item) => acc + item.amount,
      0
    );

    const tax = cartTotal * 0.1;

    return {
      numItemsInCart,
      cartTotal,
      tax,
      orderTotal: cartTotal + tax + shipping,
    };
  }
);
