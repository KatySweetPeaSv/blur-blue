// Redux store for the application
import { defaultState } from "./reducer";
import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const state = defaultState;

function saveToLocalStorage(state) {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem("statePersist", localStorageState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const localStorageState = localStorage.getItem("statePersist");
    if (localStorageState === undefined) return undefined;
    return JSON.parse(localStorageState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const storeFactory = () => {
  const middlewares = [thunk];
  const reduxStore = createStore(
    reducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  reduxStore.subscribe(() => saveToLocalStorage(reduxStore.getState()));
  return reduxStore;
};

const midi = storeFactory();

export default storeFactory;
