import { insertToCart, deleteFromCart } from "./actions";

export const defaultState = {
  data: {},
  loading: false,
  error: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case insertToCart:
      const incomingFigure = action.payload;
      const incomingId = incomingFigure.id;
      const existingFigure = state.cart.find((figure) => {
        if (incomingFigure === figure.id) {
          return true;
        }
        return false;
      });
      if (existingFigure) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, incomingFigure],
        };
      }

    case deleteFromCart:
      const getFigure = action.payload;
      return {
        ...state,
        cart: [...state.cart.filter((figure) => getFigure !== getFigure.id)],
      };
    default:
      return state;
  }
};

export default reducer;
