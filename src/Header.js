import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationIcon from '@mui/icons-material/Notifications'

function Header () {
  return (
    <div className='header'>

      <div className="header__left">
        <img src="https://img.icons8.com/color/50/000000/linkedin.png" alt="logo linkedin" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" name="" id="" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Message" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" title="Me" />
      </div>
    </div>
  )
}

export default Header