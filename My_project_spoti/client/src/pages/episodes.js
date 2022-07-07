
import React,{ useState,useEffect} from 'react';
import axios from 'axios';
let token=window.localStorage.getItem("token")
axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

const getEpisodes =()=> axios.get(`/me/episodes`);
  

const Episodes = () => {
	const [episodes, setEpisodes] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			const userEpisodes= await getEpisodes();
			setEpisodes(userEpisodes.data);
		
		  };
fetchData();

}, []);

const renderEpisodes = () => {
	return episodes.items.map((Episodes,i) => (
	<div key={i} >
		
		<div> <center>{i+1  +`:`+Episodes.episode.name}</center></div>
		
	 <br></br>
	
	 {Episodes.episode.images.length ? <img width={"20%"} src={Episodes.episode.images[0].url} alt=""/>:<div>No Image</div>}<br></br><br></br>
	
	  </div>
  ))
  
  }
	  
console.log(episodes);
if (!episodes) {
	return <div><h1>Loadding...     Try refreshing again </h1></div>;
  }

return (
	<div
	style={{
	
		justifyContent: 'Right',
		alignItems: 'left',
		height: '450vh',
		background:'#191414',
		color:'White'
	}}
	>

<center><h2>Showing My Episodes !</h2></center>
	<br></br>
	{<center>{renderEpisodes()}<br></br></center>}
</div>

);
};

export default Episodes;
