import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'
import Student from './Student'
import Department from './Department'

function College () {
  return (
    <>
    <div className='text-center text-2xl font-bold mt-3'>College Details </div>

    <div className='w-full bg-green-500 text-white p-7 mt-7'>
      <div className='flex gap-5 justify-center  pr-20 font-bold'>


     <Link to='student'>Students</Link>
    <Link to='department'>Departments</Link>
    <Link to='subject'>Subject</Link>
    
    </div>
    </div>
    <Outlet/>
    </>
  )
}

export default College 