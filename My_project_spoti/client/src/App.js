import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';

import Home from "./home";




function App() {
  const [token,setToken]=useState("");
  useEffect(()=>{
    const hash=window.location.hash
    let token=window.localStorage.getItem("token")
    if(!token&&hash){
      token=hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1]
      window.location.hash=""
      window.localStorage.setItem("token",token)  

    }
    setToken(token)
  },[])
  
  return (
    <div className="app">
        
        
         {token?
         <Home/>:<Login/>}
         </div>
  );
}
export default App;
