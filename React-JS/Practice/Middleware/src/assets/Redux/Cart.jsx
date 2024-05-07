import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {get_action_add_to_cart} from '../Redux/Action'

export default function Cart() {
    const cartedvalue = useSelector(state => state.cart);
    const usedispatcher = useDispatch()


    return (
        <>
            <div>
                <p>Cart:{cartedvalue}</p>
                <button onClick={() => { usedispatcher(get_action_add_to_cart) }}>Click</button>
            </div>
            </>
    )
}
