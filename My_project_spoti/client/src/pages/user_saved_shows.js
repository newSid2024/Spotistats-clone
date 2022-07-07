
import React,{ useState,useEffect} from 'react';
import axios from 'axios';
let token=window.localStorage.getItem("token")
axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] =`Bearer ${token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

const getSavedShows =()=> axios.get(`/me/shows`);
  

const User_saved_shows = () => {
	const [savedShows, setSavedShows] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			const userSavedShows = await getSavedShows();
			setSavedShows(userSavedShows.data.items);
		
		  };
fetchData();

}, []);

const renderShows = () => {
	return savedShows.map((Shows,i) => (
	<div key={i} >
		
		<div> <center>{i+1  +`:`+Shows.show.name}</center></div>
		{`Total no of Episodes :`+Shows.show.total_episodes}
	 <br></br>
	 <br></br>
	<br></br>
	 {Shows.show.images.length? <img width={"20%"} src={Shows.show.images[0].url} alt=""/>:<div>No Image</div>}
	 <br></br>
	 <br></br>
	<br></br>
	  </div>
  ))
  
  }
	  
console.log(savedShows);

if (!savedShows) {
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
		<center><h1>Showing the recent Shows Saved By you !</h1></center>
	<br></br>
	<br></br>
	
		{<center>{renderShows()}<br></br></center>}

	</div>
);
};

export default User_saved_shows;
