import { Buy_diesel, Refill_diesel } from "../Action";

export default (state = { Diesel: 2000 }, action) => {
    switch (action.type) {
        case Buy_diesel:
            return { ...state, Diesel: state.Diesel - 5 }
        case Refill_diesel:
            return { ...state, Diesel: state.Diesel + 2000 }

        default:
            return state;
    }
}