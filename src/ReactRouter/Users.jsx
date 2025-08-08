import React from 'react'
import { Link } from 'react-router';

function Users() {

    const userDetails=[
        {
            id:1,
            name:'hamza'    
        },

         {
            id:2,
            name:'sam'
        },

         {
            id:3,
            name:'karan'
        },

         {
            id:4,
            name:'raj'
        },
    ]
  return (
    <div className='m-5 '>
        <h1 className='text-2xl'>Users List page</h1>

    {
        userDetails.map((user)=>(
           <Link to={'/Users/'+user.id} key={user.id}><h3 className='text-blue-500'>{user.name}</h3></Link> 
        ))
    }
    </div>
  );
}

export default Users