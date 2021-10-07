import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QTY,
  DECREMENT_THE_PRODUCT,
  REMOVE_ALL,
} from './cartConstant';

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  const cartItem = {
    ...product,
    quantity,
  };
  dispatch({ type: ADD_TO_CART, payload: cartItem });
  // localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
};
export const changeQty = (productId, qty) => async (dispatch, getState) => {
  // const qty = parseInt(Qty);
  console.log(qty);
  dispatch({ type: CHANGE_QTY, payload: { productId, qty } });
  // localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  console.log(productId);
  dispatch({ type: REMOVE_FROM_CART, payload: productId });
  // localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem));
};
