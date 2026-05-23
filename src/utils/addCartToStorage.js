export const addCartToStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};
