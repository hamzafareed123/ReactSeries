import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function AddUser() {

    const [id,setId]= useState('')
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')

    const navigate = useNavigate();

    const createUser = async ()=>{
        const url='http://localhost:3000/users'

        const response = await fetch(url,{
            method:'Post',
             headers: {
                   'Content-Type': 'application/json'
                      },
            body:JSON.stringify({id,name,email})
        })
        navigate('/userList')
    }

    



  return (
    <div className=''>
        <h1 className='font-bold text-center mt-10'>Enter Data For New User</h1>
        <div className='flex gap-3 justify-center mt-10'>
        <input onChange={(event)=> setId(event.target.value)} type='number' placeholder='Enter id of User' className='border border-black p-2 rounded'/>
         <input onChange={(event)=> setName(event.target.value)} type='text' placeholder='Enter Name of User'  className='border border-black p-2 rounded'/>
          <input onChange={(event)=> setEmail(event.target.value)} type='email' placeholder='Enter email of User'  className='border border-black p-2 rounded'/>
          <button onClick={createUser} className='border-2 border-black rounded-2xl p-3 text-black hover:bg-black hover:text-white'>Add User</button>
          </div>
    </div>
  )
}

export default AddUser