import { useState } from 'react'
import './App.css'
import MapFuncion from './MapFuncion'
import UseEffect from './useEffect'
import UseRef from './useRef'
import UseForm from './useForm'

function App() {

const [name,setName] =useState('');
  return (
    <>
    
    <MapFuncion/>
    <UseEffect/>
    <UseRef/>
    <UseForm/>
    </>
      
  )
}

export default App
