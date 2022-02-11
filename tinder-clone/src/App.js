import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <main>
      <Router>
      <Home />
      </Router>
      </main>
    </div>
  );
}

export default App;
