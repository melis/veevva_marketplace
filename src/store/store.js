import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import category from "./catalogReduser";
import bestSellers from "./bestSellers.Reduser";
import sellers from "./sellersReduser";
import newProducts from "./newProductsReduser";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  combineReducers({ category, bestSellers, sellers, newProducts }),
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
