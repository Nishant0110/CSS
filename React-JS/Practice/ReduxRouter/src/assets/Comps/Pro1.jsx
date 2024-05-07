import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Pro1() {
  return (
    <div>
      <p> Electronics Product 1 page</p>
     <NavLink to='mobile'>Mobile</NavLink>
     <NavLink to='ac'>Ac</NavLink>
     <NavLink to='tv'>Tv</NavLink>
      <br /> 
      <Outlet/>
    </div>
  )
}
