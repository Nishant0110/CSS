import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import R_Router from './Comps/Navbar/R_Routes'
import Navbar from './Comps/Navbar/Navbar'

export default function App() {
  return (
    <Router>
      <Navbar/>
      <R_Router/>
    </Router>
  )
}
