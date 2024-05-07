import { applyMiddleware, createStore } from "redux";
import cartReducer from "./Dispatcher";
import logger from "redux-logger";

export default createStore(cartReducer,applyMiddleware(logger));