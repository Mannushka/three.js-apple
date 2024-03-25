import {
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case REMOVE_ITEM: {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    case DECREASE_QUANTITY: {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          if (item.quantity === 1) {
            return item; // Prevent decrementing quantity below 1
          }

          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case INCREASE_QUANTITY: {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
