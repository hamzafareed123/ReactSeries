import React, { useRef } from 'react'

function UseRef() {

    const data= useRef(null);

    const handleFocous=()=>{
        data.current.style.color='red';
         data.current.style.border=2;
    }

    const hide=()=>{
        if(data.current.style.display != 'none'){
            data.current.style.display = 'none'
        }else{
            data.current.style.display = 'inline'
        }
    }


  return (
    <>
    <div className='ml-30 mt-10 text-2xl font-bold '>Use of useRef</div>
    <input type='text' placeholder='Enter Data' ref={data} className='border-1 mt-3 p-2 ml-30'/>
    <button className='ml-2 border ' onClick={handleFocous}>Focous</button>
    <button className='ml-2 border' onClick={hide}>Hide Input</button>
    </>
    
  );
}

export default UseRef;