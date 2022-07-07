
import React,{ useState,useEffect} from 'react';
import axios from 'axios';
let token=window.localStorage.getItem("token")
axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] =`Bearer ${token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

const getTopTracks =()=> axios.get(`/me/tracks`);
  

const Tracks = () => {
	const [topTracks, setTopTracks] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			const userTopTracks = await getTopTracks();
			setTopTracks(userTopTracks.data.items);
		
		  };
fetchData();

}, []);

const rendertracks = () => {
	return topTracks.map((Track,i) => (
	<div key={i} >
		
		<div> <center>{i+1  +`:`+Track.track.name}</center></div>
		{`Popularity :`+Track.track.popularity}
	 <br></br>
	
	 {Track.track.album.images.length? <img width={"20%"} src={Track.track.album.images[0].url} alt=""/>:<div>No Image</div>}
	
	  </div>
  ))
  
  }
	  
console.log(topTracks);

if (!topTracks) {
	return <div><h1>Loadding...     Try refreshing again </h1></div>;
  }

return (
	<div
	style={{
		
		justifyContent: 'Right',
		alignItems: 'left',
		height: '800vh',
		background:'#191414',
		color:'White'
	}}
	>
		<center><h2>Showing the recent Top 20 results of your tracks so far !</h2></center>
	<br></br>
		{<center>{rendertracks()}<br></br></center>}

	</div>
);
};

export default Tracks;
