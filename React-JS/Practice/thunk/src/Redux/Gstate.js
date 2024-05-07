import { createStore } from "redux";
import { type } from "@testing-library/user-event/dist/type";
import AddToCart from "../AddToCart";

const ActionAddToCart = () => {
    return {
        type: "AddToCart"
    }
}
const reducer = (state = { cart: 0 }, action) => {

    switch (action.type) {
        case "AddToCart":
            return { ...state, cart: state.cart + 1 }
            break;

        default:
            return state;
    }
}
const state = createStore(reducer);
export { state, reducer, ActionAddToCart }