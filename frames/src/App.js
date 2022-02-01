import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Services from './pages/services';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TableSelect from '../src/pages/tableSelect';

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
