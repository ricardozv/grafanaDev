import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TableSelect from '../../src/pages/tableSelect';
// import Home from './pages';
// import About from './pages';
// import Services from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' component={ About } />
        <Route path='/services' component={< Services />} />
        <Route path='/table' component={< TableSelect />} />
      </Routes>
    </Router>
  );
}

export default App;
