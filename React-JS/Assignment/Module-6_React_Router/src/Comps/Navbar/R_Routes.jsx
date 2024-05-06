import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Admin = React.lazy(() => import('../Admin/Admin'))
const User = React.lazy(() => import('../User/User'))

export default function R_Router() {

  return (
    <div>
      <Suspense fallback={<div>Loading.......</div>}>
        <Routes>
          <Route path='/admin/*' element={<Admin />} />
          <Route path='/user/*' element={<User />} />
        </Routes>
      </Suspense>
    </div>
  )
}
