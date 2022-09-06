import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Menu from './Menu';
import './App.css';


function App() {
  return <Router>
    <nav>
      <Link to="/about" className='link'>About</Link>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/menu" className='link'>Menu</Link>
    </nav>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />   
    </Routes>
  </Router>  
}

export default App;