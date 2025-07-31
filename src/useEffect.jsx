import React, { useEffect, useState } from 'react';

function UseEffect() {

    const [users, setUser] = useState([]);

    useEffect (()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>{
            setUser(data)
            console.log(data)
        })
        .catch(err => {
            console.log('error is: ' ,err)
        })
    },[])

    return(
        <>
        <div className='ml-40 mt-10 text-3xl font-bold'>Fetching Data with useEffect</div>
        {
            users.map(user =>{
                return(
                <>
                <table className=' mt-5 ml-40 '>
                    <tbody>
                        <tr className='border'>
                        <td className='border'>{user.id}</td>
                        <td className='border'>{user.name}</td>
                        <td className='border'>{user.email}</td>
                        <td className='border'>{user.adress}</td>
                        
                        </tr>
                    </tbody>
                </table>
           
                </>
                )
            })
        }
        </>
    )
   
  
}

export default UseEffect;
