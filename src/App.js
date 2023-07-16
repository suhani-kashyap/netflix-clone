import React from 'react';
import './App.css';
import HomeScreen from './Components/Homescreen/HomeScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const user = {name: 'suhani'};

  return (
    <div className="app">
      <Router>
        {!user ? <LoginScreen /> :
          <Routes>
            <Route path="/profile" element=""/>
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        }
        </Router>
    </div>
  );
}

export default App;
