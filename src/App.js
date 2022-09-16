import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';

import './App.css';


function App() {
  return <Router>
    <nav>
    <Link to="/" className="link">First Page</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/home" className='link'>Home</Link>
      
    </nav>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
         
    </Routes>
  </Router>  
}

export default App;