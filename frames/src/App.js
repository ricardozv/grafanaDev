import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' component={ About } />
        <Route path='/services' component={< Services />} />
      </Routes>
    </Router>
  );
}

export default App;
