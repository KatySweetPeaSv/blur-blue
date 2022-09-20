// Here we will create the actions that will be used to update the state
// This is where we describe the redux logic

export const INSERT_FIGURE = "INSERT_FIGURE";
export const DELETE_FIGURE = "DELETE_FIGURE";

export const insertToCart = (figure) => {
  return {
    type: INSERT_FIGURE,
    payload: figure,
  };
};

export const deleteFromCart = (figure) => {
  return {
    type: DELETE_FIGURE,
    payload: figure,
  };
};
