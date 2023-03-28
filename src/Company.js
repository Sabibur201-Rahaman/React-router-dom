import React from 'react'
import { useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Company() {
    const params=useParams()
    console.log(params)
  return (
    <div>
      <h2>{params.name}</h2>
     
      <Outlet/>
    </div>
  )
}

export default Company
