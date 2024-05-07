import { createStore, combineReducers } from "redux";
import Petrol from "./Reducer/Petrol";
import Diesel from "./Reducer/Diesel";
import Cng from "./Reducer/Cng";
export default createStore(
    combineReducers({
        Petrol: Petrol,
        Diesel: Diesel,
        Cng: Cng
    })
)