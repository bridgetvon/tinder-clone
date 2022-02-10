import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {IconButton} from '@mui/material';
import "./Header.css";

function Header () {
  return (
    <div className="header">
        <IconButton>
        <PersonIcon className='header-icon' fontSize='large'/>
        </IconButton>
        <VolunteerActivismIcon fontSize='large'/>
        <IconButton>
        <ChatBubbleOutlineIcon className='header-icon'fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header