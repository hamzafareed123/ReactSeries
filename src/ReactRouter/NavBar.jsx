import React from 'react'
import { Link, NavLink } from 'react-router'

function NavBar() {
  return (
    
    <div className='w-full bg-blue-500 text-white p-7'>
      <div className='flex gap-5 justify-end  pr-20 font-bold'>
    <NavLink to='/' className={({ isActive }) => isActive ? 'text-black font-bold' : ''}>Home </NavLink>
    <br />
    <NavLink to='/about' className={({isActive})=> isActive ? 'text-black fontbold': ''}>About</NavLink>
    <br/>
     <Link to='/login'>Login</Link>
     <br/>
     <Link to='/College'>College</Link>
      <br/>
     <Link to='/Users'>Users</Link>
    </div>
    </div>
  )
}

export default NavBar