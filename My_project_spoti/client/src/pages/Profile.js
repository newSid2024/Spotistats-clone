import React from 'react';
import { useState,useEffect} from 'react';
import axios from 'axios';


let token=window.localStorage.getItem("token")

axios.defaults.baseURL = 'https://api.spotify.com/v1';
axios.defaults.headers['Authorization'] = `Bearer ${token}`;
axios.defaults.headers['Content-Type'] = 'application/json';

const getCurrentUserProfile = () => axios.get('/me');
const getCurrentUserPlaylists = (limit = 20) => {
	return axios.get(`/me/playlists?limit=${limit}`)
  };

const Profile = () => {

	const [profile, setProfile] = useState(null);
	const [playlists, setPlaylists] = useState(null);
	const [token,setToken]=useState("");
  
	useEffect(() => {
	 
  
	  const fetchData = async () => {
		
		  const userProfile = await getCurrentUserProfile();
		  setProfile(userProfile.data);
		  const userPlaylists = await getCurrentUserPlaylists();
          setPlaylists(userPlaylists.data);
		
	  };
  
	fetchData();

	}, []);
	console.log(profile);

	if (!profile) {
		return <div><h1>Loadding...     Try refreshing again </h1></div>;
		 }
	
const logout=()=>{
	setToken("")
	window.localStorage.removeItem("token")
	window.location.reload(false);
	}
	
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'left',
		height: '100vh',
		background:'#191414',
		color:'White'
	}}> 
	

		<center><h1>User Name:  {profile.display_name} </h1>
		<br></br>

                <h2>{profile.followers.total} Followers</h2>
				<br></br>
				<h2>{playlists && (
            <span>{playlists.total} Playlist{playlists.total !== 1 ? 's' : ''}</span> )}</h2>
			<br></br>
	
                {profile.images.length && profile.images[0].url && (
                  <img src={profile.images[0].url} alt="Avatar"/>
                )}
				{<div>
					{ <button  onClick={logout}>Logout</button>}</div>	}	
				</center>
		
		
	
		
	    
	 </div>
	
);
};

export default Profile;
