import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { addItem, removeItem, clearCart, editItem } from './cartSlice';
import { addCartToStorage } from '../../utils';
import { toast } from 'react-toastify';

export const cartListenerMiddleware = createListenerMiddleware();

cartListenerMiddleware.startListening({
  matcher: isAnyOf(addItem, removeItem, clearCart, editItem),
  effect: (_, api) => {
    const cartState = api.getState().cart;

    addCartToStorage(cartState);
  },
});

cartListenerMiddleware.startListening({
  actionCreator: addItem,
  effect: () => {
    toast.success('Item has been added to a cart');
  },
});

cartListenerMiddleware.startListening({
  actionCreator: removeItem,
  effect: () => {
    toast.success('Item has been removed form cart');
  },
});
