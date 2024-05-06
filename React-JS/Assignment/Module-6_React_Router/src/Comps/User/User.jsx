import React, { Suspense } from 'react'
import { Link, Route, Routes, Outlet } from 'react-router-dom'
const User_Action = React.lazy(() => import('./User_Action'))
const User_Data = React.lazy(() => import('./User_Data'))

export default function User() {
  return (
    <div>
      <p>This is user panel</p>
      <nav>
        <ul>
          <li>
            <Link to="useraction">user action</Link>
          </li>
          <li>
            <Link to="userdata">user data</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h1>Loding admin section</h1>}>
        <Routes>
          <Route path='useraction' element={<User_Action />} />
          <Route path='userdata' element={<User_Data />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  )
}
