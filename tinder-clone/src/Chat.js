import React from 'react';
import { Avatar } from '@mui/material';
import './Chat.css';

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className='chat'>
        <Avatar className='chat-img' alt={name} src={profilePic} />
        <div className='chat-details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chat-time'>{timestamp}</p>
    </div>
  );
}

export default Chat