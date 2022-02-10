import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/card" element={<TinderCards />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          {/* <Route path="message" element={<Message />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
