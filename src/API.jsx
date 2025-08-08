import React, { useEffect, useState } from 'react'

function API() {
    const [data, setData] = useState([]);

    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            setData(data);
        })
    },[])
  return (
    <div>
        {
            data.map((user)=>(
                <div key={user.id} className='p-5'>
                <h2>Name: {user.name}</h2>
                <h2>UserName: {user.username}</h2>
                <h2>Email: {user.email}</h2>
                </div>
            ))
                
        }
    </div>
  )
}

export default API