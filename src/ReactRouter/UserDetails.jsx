import React from 'react'
import { useParams } from 'react-router'


function UserDetails() {
    const paramsData =useParams();
    
  return (
    <div className='m-10'>
        <h1 className='text-3xl'>User Details</h1>
    <h2>User id: {paramsData.id}</h2>
    </div>
  )
}

export default UserDetails