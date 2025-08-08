import { useState } from "react";
import "./App.css";
import MapFuncion from "./MapFuncion";
import UseEffect from "./useEffect";
import UseRef from "./useRef";
import UseForm from "./useForm";
import UseActionState from "./useActionState";
import ContextProvider from "./ContextAPI/ContextProvider";
import Routerr from "./ReactRouter/Routerr";
import API from "./API/API";
import UseReducer from "./useReducer";


function App() {
  const [name, setName] = useState("");

  return (
    <>
      
      {/* <MapFuncion />
      <UseEffect />
      <UseRef />
      <UseForm />
      <UseActionState />
      <ContextProvider /> 
      <Routerr/> */}
      
      {/* <API/> */}

      <UseReducer/>

    </>
  );
}

export default App;
