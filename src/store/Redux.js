import { applyMiddleware, combineReducers, createStore } from "redux";
import MainPageReduser from "./MainPageReduser";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  mainPage: MainPageReduser,
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
