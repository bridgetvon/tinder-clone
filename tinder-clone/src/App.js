import './App.css';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/Swipe/SwipeButtons';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TinderCards from './Components/TinderCards/TinderCards';
import Chat from './Components/Chat/Chat';
import Chats from './Components/Chats/Chats';
import ChatScreen from './Components/ChatScreen/ChatScreen';

function App() {
  return (
    <div className="App">

        <Router>
          <Header backButton="/" />
          <Routes>
            <Route path="/chat" element={<Chats />} />
            {/* <Route path="/chat/*" element={<Chats />} /> */}
            <Route path="/chatscreen" element={<ChatScreen />} />
            <Route path="/tinder" element={<TinderCards />} />
            <Route path="/" />
          </Routes>

          {/* Tinder Cards */}
          {/*  Buttons below tinder cards */}
          <TinderCards />
          <SwipeButtons />
          {/* Chat screen */}
          {/* Individual chat screen */}


        </Router>

    </div>
  );
}

export default App;
