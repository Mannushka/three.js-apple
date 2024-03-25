import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  // const addToCart = (item) => {
  //   dispatch({ type: ADD_TO_CART, payload: item });
  // };
  const getCartItemQuantity = (id) => {
    const cartItem = state.cartItems.find((item) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  const addToCart = (item) => {
    const updatedItem = {
      ...item,
      quantity: 1, // Set initial quantity to 1
    };
    dispatch({ type: ADD_TO_CART, payload: updatedItem });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const decreaseQuantity = (id) => {
    dispatch({ type: DECREASE_QUANTITY, payload: id });
  };
  const increaseQuantity = (id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        getCartItemQuantity,
        addToCart,
        removeItem,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
