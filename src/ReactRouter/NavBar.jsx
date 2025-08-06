import React from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    
    <div className='w-full bg-blue-500 text-white p-7'>
      <div className='flex gap-5 justify-end  pr-20 font-bold'>
    <Link to='/'>Home</Link>
    <br />
    <Link to='/about'>About</Link>
    <br/>
     <Link to='/login'>Login</Link>
     <br/>
     <Link to='/College'>College</Link>
    </div>
    </div>
  )
}

export default NavBar