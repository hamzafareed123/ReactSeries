import { useState } from 'react'
import './App.css'
import MapFuncion from './MapFuncion'
import UseEffect from './useEffect'
import UseRef from './useRef'
import UseForm from './useForm'
import UseActionState from './useActionState'
import ContextProvider from './ContextAPI/ContextProvider'




function App() {

const [name,setName] =useState('');

  return (
    <>-
    
    <MapFuncion/>
    <UseEffect/>
    <UseRef/>
    <UseForm/>
    <UseActionState/>
    <ContextProvider/>
    </>
      
  )
}

export default App
