import React from 'react'
import Navbar from './components/Navbar';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Album from './pages/album';
import User_saved_shows from './pages/user_saved_shows';
import Playlists from './pages/playlists';
import Artists from './pages/Artists';
import Episodes from './pages/episodes';
import Tracks from './pages/tracks';
import Profile from './pages/Profile';
function Home
() {
  return ( 
   
    <Router>
    <Navbar/>
    <Switch>
    
      <Route path='/' exact component={Profile} />
      <Route path='/user_saved_shows' component={User_saved_shows} />
      <Route path='/playlists' component={Playlists} />
      <Route path='/artist' component={Artists} />
      <Route path='/episodes' component={Episodes} />
      <Route path='/track' component={Tracks} />
      <Route path='/album'component={Album} />
    </Switch>
  </Router> )
}

export default Home;
