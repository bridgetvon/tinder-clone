import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chats from '../Components/Chats/Chats';
import ChatScreen from '../Components/ChatScreen/ChatScreen';
import TinderCards from '../Components/TinderCards/TinderCards';
import Header from '../Components/Header/Header';
import SwipeButtons from '../Components/Swipe/SwipeButtons';

function Home() {
  return (
    <div>
        <Header />
        <main>
        <Routes>
            <Route path="/chat" element={<Chats />} />
            {/* <Route path="/chat/*" element={<Chats />} /> */}
            <Route path="/chatscreen" element={<ChatScreen />} />
            <Route path="/" element={<TinderCards />} />
          </Routes>  
        </main>
        <SwipeButtons /> 
    </div>
  )
}

export default Home