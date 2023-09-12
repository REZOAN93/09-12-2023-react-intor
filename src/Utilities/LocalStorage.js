const getStoredCart = () => {
  const storedCardString = localStorage.getItem("cart");
  if (storedCardString) {
    return JSON.parse(storedCardString);
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const removedFromLocalStorage = (id) => {
  const cart = getStoredCart();
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLocalStorage(remaining);
};

const addToLocalStorage = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  //   save to local storage
  saveCartToLocalStorage(cart);
};

export { addToLocalStorage, getStoredCart, removedFromLocalStorage };
