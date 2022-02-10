import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import TinderCard from "react-tinder-card";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
      <Router>
        <Routes>
          <Route path="/card" element={<TinderCards />} />
          {/* <Route>
            <TinderCard />

          </Route> */}
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="message" element={<Message />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
