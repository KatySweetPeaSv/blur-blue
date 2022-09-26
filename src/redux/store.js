// Redux store for the application
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const storeFactory = () => {
  const middlewares = [thunk];
  const reduxStore = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return reduxStore;
};

// const reduxStore = createStore(reducer, composeWithDevTools())
// const store = createStore(reducer)

export default storeFactory;
