import React from 'react';
import "./SwipeButtons.css";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashIcon from "@mui/icons-material/FlashOn";
import {IconButton} from '@mui/material';


function SwipeButtons() {
  return (
    <div className='swipe-btns'>
        <IconButton className='replay-btn'>
        <ReplayIcon fontSize="large" />
        </IconButton>
        <IconButton className='close-btn'>
        <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className='star-btn'>
        <StarRateIcon fontSize="large" />
        </IconButton>
        <IconButton className='fav-btn'>
        <FavoriteIcon fontSize="large" />
        </IconButton>
        <IconButton className='flash-btn'>
        <FlashIcon fontSize="large" />
        </IconButton>
    </div>
  )
}

export default SwipeButtons