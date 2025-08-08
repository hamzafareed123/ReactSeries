import React from 'react'

import UserList from './userList'
import { NavLink, Route, Routes } from 'react-router-dom'
import AddUser from './addUser'
import EditUser from './editUser'

function API() {
  return (
 
    <div>
        <h1 className='text-center text-3xl font-bold m-5'>Users Details</h1>
        <div className='font-bold m-5 flex gap-3 justify-center text-blue-500'>
        <NavLink to='/userList' className='border-2 border-black rounded-2xl p-3 text-black hover:bg-black hover:text-white' >User List</NavLink>
        <NavLink to='/addUser' className='border-2 border-black rounded-2xl p-3 text-black hover:bg-black hover:text-white'>Add New User</NavLink>
        </div>

         <Routes>
          <Route path='/userList' element={<UserList/>}/>
          <Route path='/addUser' element={<AddUser/>}/>
            <Route path='/editUser/:id' element={<EditUser/>}/>
        </Routes>
        </div>
    
    
  )
}

export default API