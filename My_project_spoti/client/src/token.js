import React, {useEffect, useState} from 'react';

import { getTokenFromUrl } from './Login';


function Token() {
    const [access_token,set_access_token]=useState("");
    useEffect(()=>{
      const hash = getTokenFromUrl();
      window.location.hash="";
      const access_token=hash.access_token; 
  
  
      if(access_token){
        set_access_token(access_token)
      }
    },[])
    return (
      <div className="app">
        {
          {access_token }
     
          
        } 
      </div>
    );
  }
  export default Token;
  