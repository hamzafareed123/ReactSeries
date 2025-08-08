import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function UserList() {

    const [data, setData] = useState([]);
    const navigate= useNavigate();

    const getUserData=()=>{
       fetch('http://localhost:3000/users')
        .then((res)=>res.json())
        .then((data)=>{
          
            setData(data);
        })
    } 

    useEffect (()=>{
       getUserData();
    },[])

    
    
    const deleteUser= async(id)=>{
      let url ='http://localhost:3000/users';
      let response = await fetch(url+'/'+id,{
        method:'delete',
      })
      getUserData()  
    
    }

    const editUser =(id)=>{
      navigate(`/editUser/${id}`);

    }

  return (
    <div className="p-5">
        <h1 className='font-bold text-center mt-5 mb-5 text-2xl'>List of All Users</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Delete Data</th>
             <th className="border px-4 py-2">Edit Data</th>
              
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
               <td onClick={()=>deleteUser(user.id)
               } className="border px-4 py-2"><button className='p-3 rounded hover:text-white  hover:bg-black'>Delete</button></td>
               <td onClick={()=>editUser(user.id)
               } className="border px-4 py-2"><button className='p-3 rounded hover:text-white  hover:bg-black'>Edit</button></td>
               
               
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default UserList