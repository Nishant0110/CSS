import React from 'react'
import { Get_Action_petrol, Get_Action_diesel, Get_Action_cng } from '../Redux/Action'
import { useDispatch } from 'react-redux'
export default function ManagerActions() {
    const usedispatch = useDispatch()
    return (
        <div>
            <h1>Manager Actions page</h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={() => { usedispatch(Get_Action_petrol) }} className="btn btn-primary">Refill Petrol</button>
                <button type="button" onClick={() => { usedispatch(Get_Action_diesel) }} className="btn btn-primary">Refill Disel</button>
                <button type="button" onClick={() => { usedispatch(Get_Action_cng) }} className="btn btn-primary">Refill CNG</button>
            </div>
        </div>
    )
}
