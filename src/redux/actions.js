// Here we will create the actions that will be used to update the state
// This is where we describe the redux logic

export const insertToCart = (figure) => {
  return {
    type: "INSERT_FIGURE",
    payload: figure,
  };
};

export const deleteFromCart = (figureId) => {
  return {
    type: "DELETE_FIGURE",
    payload: figureId,
  };
};
