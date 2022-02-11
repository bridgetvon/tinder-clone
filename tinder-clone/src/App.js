import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TinderCards from './TinderCards';
import Chat from './Chat';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

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
