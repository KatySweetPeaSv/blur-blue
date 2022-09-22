import { INSERT_FIGURE, DELETE_FIGURE } from "./actions";

const defaultState = {
  cart: [],
  figure: {},
  loading: false,
  error: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INSERT_FIGURE":
      const incomingFigure = action.payload;
      const incomingFigureId = incomingFigure.id;
      const existingFigure = state.cart.find((figure) => {
        if (incomingFigureId === figure.id) {
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

    case "DELETE_FIGURE":
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
