import { action_add_to_cart, action_reset_to_cart } from "./Action";

export default function cartReducer(state = { cart: 0 }, action) {
    switch (action.type) {
        case action_add_to_cart:
            return { ...state, cart: state.cart + 1 }
            break;
        case action_reset_to_cart:
            return { ...state, cart: 0 }
            break;
        default:
            return state
    }
} 