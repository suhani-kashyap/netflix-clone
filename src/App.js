import React from 'react';
import './App.css';
import HomeScreen from './Components/Homescreen/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/profile" element=""/>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
