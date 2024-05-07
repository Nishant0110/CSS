import React from 'react'
import { useParams } from 'react-router-dom'

export default function Pro1Items() {
    const{id}=useParams()
  return (
    <div>
      <h1>Product1 Items{id}</h1>
    </div>
  )
}
