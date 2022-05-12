import Navbar from './navbar/Navbar';
import Homepage from './homepage/Homepage'
import Aboutme from './aboutme/Aboutme'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Homepage">
          <Routes>
            <Route exact path="/react-pages" element={<Homepage/>}/>
            <Route exact path="/react-pages/about" element={<Aboutme/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
