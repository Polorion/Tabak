import { applyMiddleware, combineReducers, createStore } from "redux";
import MainPageReduser from "./MainPageReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import BasketReduser from "./BasketReduser";
import HeaderReduser from "./HeaderReduser";

const rootReducer = combineReducers({
  mainPage: MainPageReduser,
  basket: BasketReduser,
  header: HeaderReduser,
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
