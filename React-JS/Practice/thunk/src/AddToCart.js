import React from 'react'
import { useDispatch } from 'react-redux'
import { ActionAddToCart } from './Redux/Gstate';

export default function AddToCart() {
    const dispatcher = useDispatch();

    const funAddToCart = () => {
        dispatcher(ActionAddToCart);
    }
    return (
        <div>
            <button onClick={funAddToCart}>Add</button>
        </div>
    )
}
