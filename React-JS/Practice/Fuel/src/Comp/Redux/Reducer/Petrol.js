import { Buy_petrol, Refill_petrol } from "../Action";

export default (state = { Petrol: 1000 }, action) => {
    switch (action.type) {
        case Buy_petrol:
            return { ...state, Petrol: state.Petrol - 10 }
        case Refill_petrol:
            return { ...state, Petrol: state.Petrol + 1000 }

        default:
            return state;
    }
}