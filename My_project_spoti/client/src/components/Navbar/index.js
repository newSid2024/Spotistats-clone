import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/user_saved_shows' activeStyle>
            <h3>User-Saved-shows</h3>
          </NavLink>
          <NavLink to='/episodes' activeStyle>
            <h3>Episodes</h3>
          </NavLink>
          <NavLink to='/playlists' activeStyle>
            <h3>PlayLists</h3>
          </NavLink>
          <NavLink to='/album' activeStyle>
            <h3>Albums</h3>
          </NavLink>
          <NavLink to='/artist' activeStyle>
            <h3>Artists</h3>
          </NavLink>
          <NavLink to='/track' activeStyle>
           <h3>Tracks</h3> 
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'><h2>Profile</h2></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;