import React, { useReducer } from 'react'

const user={
    name:'',
    age:'',
    password:'',
    email:'',
}

function UseReducer() {
    const reducer =(data, action)=>{
        return {...data,[action.type]:action.val}
    }
    const [state,dispatch] = useReducer(reducer,user);
  return (
    <div className='m-8 text-center'>
        <input type='text' placeholder='enter name ' className='border-2' onChange={(event)=>dispatch({val:event.target.value,type:'name'})} />
        <br/>
        <br/>
        <input type='number' placeholder='enter age' className='border-2'onChange={(event)=>dispatch({val:event.target.value,type:'age'})}/>
        <br/>
        <br/>
        <input type='text' placeholder='enter passwrod' className='border-2'onChange={(event)=>dispatch({val:event.target.value,type:'password'})}/>
        <br/>
        <br/>
        <input type='email' placeholder='enter email' className='border-2'onChange={(event)=>dispatch({val:event.target.value,type:'email'})}/>


        <h1>Name : {state.name}</h1>
        
        <h1>Age : {state.age}</h1>
        
        <h1>Password : {state.password}</h1>
        
        <h1>email : {state.email}</h1>
        
    </div>
  )
}

export default UseReducer