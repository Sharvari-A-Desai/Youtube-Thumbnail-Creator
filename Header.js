import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

// import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import VideoCallIcon from '@mui/icons-material/VideoCall';

import "./Header.css";
//functional component//
function Header() {
  return (
    <div className="header">
      {/* Youtube logo */}
      <div className="header_leftSide">
      <MenuIcon />
      <img
      className="header__logo"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU" alt="" />
      </div>

      {/* Search Box */}
      <div className="header__search">
      <TextField
       className="header__input"
       placeholder="search"
       variant="outlined"/>
      <button  className="header__searchButton" variant="outlined">
      <SearchIcon />
      </button>
      
      </div>
      


      {/* Right Side Logos */}
      <div className="header__rightlogos"></div>
      <AppsIcon />
      <NotificationsIcon />
      <VideoCallIcon/>
    </div>
  )
}

export default Header;