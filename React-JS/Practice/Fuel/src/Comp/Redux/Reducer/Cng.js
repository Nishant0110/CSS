import { Buy_cng, Refill_cng } from "../Action";
export default (state = { Cng: 3000 }, action) => {
    switch (action.type) {
        case Buy_cng:
            return { ...state, Cng: state.Cng - 10 }
        case Refill_cng:
            return { ...state, Cng: state.Cng + 1500 }

        default:
            return state
    }
}