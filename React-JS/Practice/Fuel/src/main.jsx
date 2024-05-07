import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Comp/App/App'
import Store from './Comp/Redux/Store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <React.StrictMode >
      <App />
    </React.StrictMode>
  </Provider>
)
