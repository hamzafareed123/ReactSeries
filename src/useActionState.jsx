import React, { useActionState } from 'react'

function UseActionState() {

    const handleSubmit= async(previousData,formData)=>{
        let name=formData.get('name');
        let pass = formData.get('password');

        await new Promise(res =>setTimeout(res,3000))

        console.log(name,pass)
    }

    const [data, action, pending] = useActionState(handleSubmit,undefined);

 
  return (
    <>
    <h1 className='ml-40 mt-10 text-3xl font-bold'>Use of UseActionState</h1>
    <form action={action}>
        <input type='text' placeholder='Enter your Name' name='name' className='border p-2 ml-5'/>
        <input type='password' placeholder='Enter your password'name='password' className='border p-2 ml-5'/> 
        <button className='p-2 m-4 border bg-blue-400 ' disabled={pending}>{pending ? 'Submitting' : 'submit' }</button>

        <br></br>
    </form>
    </>
  )
}

export default UseActionState