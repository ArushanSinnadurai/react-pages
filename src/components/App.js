import Homepage from "./homepage/Homepage";
import Aboutme from "./aboutme/Aboutme";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutme />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
