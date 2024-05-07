import React from 'react'
import Cart from './Cart'
import { Provider } from 'react-redux';
import { state } from './Redux/Gstate';
import AddToCart from './AddToCart';

export default function App() {
  return (
    <Provider store={state}>
      <Cart/>
      <AddToCart/>
    </Provider>
  )
}
