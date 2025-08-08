import React from 'react'
import { Routes ,Route, Link} from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import PageNotFound from './PageNotFound'
import Subject from './Subject'
import College from './College'
import Department from './Department'
import Student from './Student'
import Users from './Users'
import UserDetails from './UserDetails'
import EditUser from '../API/editUser'

function Routerr() {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/College' element={<College/>}>
     
                <Route path='student' element={<Student/>} />
                <Route path='department' element={<Department/>} />
                <Route path='subject' element={<Subject/>} />
        
        </Route>
        <Route path='/Users' element={<Users/>}/>
        <Route path='/Users/:id' element={<UserDetails/>}/>
      
         <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default Routerr