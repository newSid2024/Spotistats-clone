import React from 'react'
import './Login.css'

const AUTH_URL ="http://localhost:3001/login"

function Login() {
  return (
    <div className='login'>
       
        <img src='https://play-lh.googleusercontent.com/OO06tTnQyEckM3dUDbHqmWXpI-7IbYlodDxVR7L4buzOX6KQvAeTJEV_Q45cznM63mJ-'/>
        
        <h1>Welcome to Spotistats</h1>
        <h2>Spotistats is a tool designed to analyse and backup your music on Spotify!( will edit it more )</h2>
        <a href={AUTH_URL}>LOGIN WITH SPOTIFY</a>
       
    </div>
  
  )
}

export default Login

export const getTokenFromUrl=()=>{
  return window.location.hash
               .substring(1)
               .split("&")
               .reduce((initial,item)=>{
                var parts = item.split("=");
                initial[parts[0]]=decodeURIComponent(parts[1]);
                return initial;
                
               },{})
               
}


