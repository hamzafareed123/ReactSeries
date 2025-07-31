import React, { useState } from 'react'
import { Data } from './ContextData'
import College from './College'

function ContextProvider() {
    const [value, setValue] = useState('');
    
  return (

         <Data.Provider value={value}>
            <select  className='ml-5' onChange={(event=> setValue(event.target.value))}>
        <option value="">Select Subject</option>
            <option value="Science">Science</option>
            <option value="Physics">Physics</option>
            <option value="English">English</option>
            </select>
       <h1 className='ml3 bg-orange-300 text-3xl p-10 '>ContextData</h1>
       <College/>
     </Data.Provider>
  )
}

export default ContextProvider