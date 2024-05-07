import React from 'react'
import Cart from './assets/Redux/Cart'
import { Provider } from 'react-redux'
import store from '../src/assets/Redux/State'

export default function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  )
}
