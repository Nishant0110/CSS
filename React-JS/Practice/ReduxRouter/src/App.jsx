import React from 'react'
import AllProduct from './assets/Comps/AllProduct'
import Navbar from './assets/Comps/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pro1 from './assets/Comps/Pro1'
import Pro2 from './assets/Comps/Pro2'
import PageNotFound from './assets/Comps/PageNotFound'
import { Ac, Mobile, Tv } from './assets/Comps/Products'
import Pro1Items from './assets/Comps/Pro1Items'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<AllProduct />} />
        <Route path='AllProduct' element={<AllProduct />} />
        <Route path='AllProduct/:id' element={<Pro1Items />} />
        <Route path='Pro1' element={<Pro1 />}>
          <Route index element={<Mobile />} />
          <Route path='mobile' element={<Mobile />} />
          <Route path='ac' element={<Ac />} />
          <Route path='tv' element={<Tv />} />
        </Route>
        <Route path='Pro2' element={<Pro2 />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
