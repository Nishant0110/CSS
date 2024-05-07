import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function AllProduct() {
  const [params, setParams] = useSearchParams();
  return (
    <div>
      <p>Showing All Product</p> 
      {params.get("sorting") && <h1>sorted by by {params.get("sorting")}</h1>}
      {params.get("rating") && <h1>sorted by by {params.get("rating")}</h1>}
    </div>
  )
}
