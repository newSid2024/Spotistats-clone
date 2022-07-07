import { useState } from 'react';
import axios from 'axios';
let token=window.localStorage.getItem("token")

const Artists= () => {

  const[searchKey,setSearchKey]=useState("")
  const[artists,setArtists]=useState([])
  //
  
  const searchArtists=async(e) =>{
    e.preventDefault()
    const{data}=await axios.get("https://api.spotify.com/v1/search",{
     
      headers:{
        Authorization: ` Bearer ${token}`
      },
      params:{
        q: searchKey,
        type: 'artist'
      }

    })

    setArtists(data.artists.items)
    
}

    
const renderArtists = () => {
  return artists.map(artist => (
  <div key={artist.id}>
  <div> {<div><h3>Name : {artist.name}</h3></div>}</div>
   {artist.images.length ? <img width={"30%"} src={artist.images[0].url} alt=""/>:<div>No Image</div>}
   {<div><h4>Followers:{artist.followers.total}</h4></div>}
   <br></br>
   
  
    </div>
))

}
console.log(artists);

if (!artists) {

    return <div><h1>Loadding...     Try refreshing again </h1></div>;
    
  }

return (
  
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'left',
		height: '710vh',
		background:'#191414',
		color:'White'
	}}
	>
    
    
<div>	{<center>	<form onSubmit={searchArtists}>
  <br></br>
        <input type="text" onChange={e=>setSearchKey(e.target.value)}/>
        <button type={'submit'}>Search</button> 
        <br></br>
      </form>
      </center>
      }</div>
     
   <div>
   {<center><br></br><br></br>{renderArtists()}<br></br></center>}
   </div>
  
  </div>
  

);
};


export default Artists;
