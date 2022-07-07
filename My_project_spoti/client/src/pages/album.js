
import React,{ useState,useEffect} from 'react';
import axios from 'axios';
let token=window.localStorage.getItem("token")

axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] =`Bearer ${token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

const getTopAlbums =()=> axios.get(`/browse/new-releases`);
  

const Album = () => {
	const [topAlbum, setTopAlbums] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			const userTopAlbums = await getTopAlbums();
			setTopAlbums(userTopAlbums.data.albums.items);
		
		  };
fetchData();

}, []);


const renderRecentAlbums = () => {
	return topAlbum.map((Album,i) => (
	<div key={i} >
		
		<div> <center>{i+1  +`:`+Album.name}</center></div>
	
	 <br></br>
	
	 {Album.images.length? <img width={"20%"} src={Album.images[0].url} alt=""/>:<div>No Image</div>}
	
	  </div>
  ))
  
  }
	  
console.log(topAlbum);

if (!topAlbum) {
	return <div><h1>Loadding...     Try refreshing again </h1></div>;
  }

return (
	<div
	style={{
		
		justifyContent: 'Right',
		alignItems: 'left',
		height: '830vh',
		background:'#191414',
		color:'White'
	}}
	>
		<center><h2>Showing 20 recent Album releases accross the world  !</h2></center>
	<br></br>
	{<center>{renderRecentAlbums()}<br></br></center>}


	

	</div>
);
};

export default Album;
