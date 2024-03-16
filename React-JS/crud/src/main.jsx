import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Fetch from './Components/Fetch'
import Try from './Components/Try'
import Task from '../Task'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Fetch/> */}
    {/* <Try /> */}
    <Task />
  </React.StrictMode>
)
