import React, { Suspense } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
const Admin_Action = React.lazy(() => import('./Admin_Action'))
const Admin_Data = React.lazy(() => import('./Admin_Data'))

export default function Admin() {
  return (
    <div>
      <p>This is admin panel</p>
      <nav>
        <ul>
          <li>
            <Link to="adminaction">Admin_Action</Link>
          </li>
          <li>
            <Link to="admindata">Admin_Data</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<h1>Loding admin section</h1>}>
        <Routes>
          <Route path='adminaction' element={<Admin_Action />} />
          <Route path='admindata' element={<Admin_Data />} />
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  )
}
