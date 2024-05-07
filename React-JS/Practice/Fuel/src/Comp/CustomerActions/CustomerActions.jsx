import React from 'react';
import { Get_action_petrol, Get_action_diesel, Get_action_cng } from '../Redux/Action';
import { useDispatch } from 'react-redux';

export default function CustomerActions() {
    const usedispatch = useDispatch();
    return (
        <div>
            <h1>Customers Action Page</h1>

            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={() => { usedispatch(Get_action_petrol) }} className="btn btn-primary">Buy Petrol</button>
                <button type="button" onClick={() => { usedispatch(Get_action_diesel) }} className="btn btn-primary">Buy Disel</button>
                <button type="button" onClick={() => { usedispatch(Get_action_cng) }} className="btn btn-primary">Buy CNG</button>
            </div>
        </div>
    )
}
