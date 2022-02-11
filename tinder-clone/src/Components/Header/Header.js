import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {IconButton} from '@mui/material';
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import  ArrowBackIosIcon  from '@mui/icons-material/ArrowBackIos';

function Header ({backButton}) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate('../', {replace: true })}>
          <ArrowBackIosIcon fontSize='large' className='header-icon' />
        </IconButton>
      ) : (
        <IconButton>
        <PersonIcon className='header-icon' fontSize='large'/>
        </IconButton>
      )}
       <Link to="/">
                {/* <img className="header-logo" src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg" alt="tinder logo" /> */}
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ChatBubbleOutlineIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header