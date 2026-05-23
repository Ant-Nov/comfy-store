import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import { cartListenerMiddleware } from './features/cart/cartListeners';
import userReducer from './features/user/userSlice';
import { THEME_STORAGE_KEY } from './components/Swap';

const loadFromLocalStorage = (name) => {
  try {
    const serialized = localStorage.getItem(name);

    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const getStorageTheme = () => {
  const initTheme = loadFromLocalStorage(THEME_STORAGE_KEY);

  if (initTheme) {
    document.documentElement.setAttribute('data-theme', initTheme);

    return initTheme;
  }
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
  preloadedState: {
    cart: loadFromLocalStorage('cart'),
    user: {
      theme: getStorageTheme(),
      user: loadFromLocalStorage('user'),
    },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      cartListenerMiddleware.middleware,
    ),
});