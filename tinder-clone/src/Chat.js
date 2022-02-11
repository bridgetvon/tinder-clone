import React from 'react';
import { Avatar } from '@mui/material';
import './Chat.css';
import {Link } from 'react-router-dom';

function Chat({ name, message, profilePic, timestamp }) {
  return (
      //need to fix this to route to their name link to=`chat/chat/${name}`
      <Link to={`/chatscreen`}>
    <div className='chat'>
        <Avatar className='chat-img' alt={name} src={profilePic} />
        <div className='chat-details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chat-time'>{timestamp}</p>
    </div>
    </Link>
  );
}

export default Chat