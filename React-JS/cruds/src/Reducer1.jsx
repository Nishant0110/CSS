import { useReducer } from "react"
import React from "react"

useReducer
export default function Reducer1() {
    let initvalue = {
        petrol: 10,
        diesel: 500
    }
    function Reducer(state, action) {
        switch (action.type) {
            case "petrol":
                return ({ ...state, petrol: state.petrol - 5 })
                break;
            case "diesel":
                return ({
                    ...state, diesel: state.diesel - 3
                })
                break;
            case "truck_diesel":
                return ({ ...state, diesel: state.diesel - 10 })
            case "bike_petrol":
                return ({ ...state, petrol: state.petrol - 2 })

        }
    }
    const [state, dispatch] = useReducer(Reducer, initvalue)
    return (
        <>
            <p>Petrol:{state.petrol}</p>
            <button onClick={() => { dispatch({ type: "petrol" }) }}>Car Petrol-5</button>
            <p>Diesel:{state.diesel}</p>
            <button onClick={() => { dispatch({ type: "diesel" }) }}>Car Diesel-3</button>
            <button onClick={() => { dispatch({ type: "truck_diesel" }) }}>truck Diesel-10</button>
            <button onClick={() => { dispatch({ type: "bike_petrol" }) }}>Bike Petrol-2</button>
        </>
    )
}