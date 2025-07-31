import React, { useContext } from 'react'
import { Data } from './ContextData'

function Subject() {
    const subject = useContext(Data);
  return (
   <>
    <h1 className='ml3 bg-yellow-500 text-3xl px-35 py-10'>Subject Component
        <p>Subject : {subject}</p>
    </h1>
    
   </>
  )
}

export default Subject