
import React,{ useState,useEffect} from 'react';
import axios from 'axios';
let token=window.localStorage.getItem("token")
axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

const getPlaylists =()=> axios.get(`/me/playlists`);
  

const Playlist = () => {
	const [playlists, setPlaylists] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			const userPlaylists= await getPlaylists();
			setPlaylists(userPlaylists.data);
		
		  };
fetchData();

}, []);

const renderPlaylist = () => {
	return playlists.items.map((playlist,i) => (
	<div key={i} >
		
		<div> <center>{i+1  +`:`+playlist.name}</center></div>
		
	 <br></br>
	
	 {playlist.images.length ? <img width={"20%"} src={playlist.images[0].url} alt=""/>:<div>No Image</div>}
	
	  </div>
  ))
  
  }
	  
console.log(playlists);
if (!playlists) {
	return <div><h1>Loadding...     Try refreshing again </h1></div>;
  }

return (
	<div
	style={{
	
		justifyContent: 'Right',
		alignItems: 'left',
		height: '250vh',
		background:'#191414',
		color:'White'
	}}
	>

<center><h2>Behold !  I am Showing My Playlist !</h2></center>
	<br></br>
	{<center>{renderPlaylist()}<br></br></center>}
</div>

);
};

export default Playlist;
