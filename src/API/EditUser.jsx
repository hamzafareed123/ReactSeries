import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import UserList from './userList';

function EditUser() {
    const {id} = useParams();

    const navigate= useNavigate();

    const [userid,setUserId]= useState('')
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
   
    useEffect(()=>{
        edit()
    },[])
    
    const edit=async()=>{
        let response = await fetch(`http://localhost:3000/users/${id}`)
        let data = await response.json()
         setUserId(data.id)
         setName(data.name);
         setEmail(data.email); 
    }

    const update = async()=>{
        let response = await fetch(`http://localhost:3000/users/${id}`,{
            method:'Put',
             headers: {
               'Content-Type': 'application/json',
                      },
            body:JSON.stringify({id,name,email})
        })
      response= await response.json();
      navigate('/userList')
    }
  return (
    <div className=''>
        <h1 className='font-bold text-center mt-10'>Enter User Data</h1>
        <div className='flex gap-3 justify-center mt-10'>
        <input value={userid} onChange={(e)=> setUserId(e.target.value)} type='number' placeholder='Enter id of User' className='border border-black p-2 rounded'/>
         <input value={name} onChange={(e)=> setName(e.target.value)} type='text' placeholder='Enter Name of User'  className='border border-black p-2 rounded'/>
          <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Enter email of User'  className='border border-black p-2 rounded'/>
          <button onClick={update} className='border-2 border-black rounded-2xl p-3 text-black hover:bg-black hover:text-white'>Save Data</button>
          </div>
    </div>
  )
}

export default EditUser