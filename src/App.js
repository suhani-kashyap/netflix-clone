import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/Homescreen/HomeScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  // auth.onAuthStateChanged is a listener and listens for any state changes in the state of auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        // logged in
        
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? <LoginScreen /> :
          <Routes>
            <Route path="/profile" element={<ProfileScreen />}/>
            <Route path="/" element={<HomeScreen/>} />
          </Routes>
        }
        </Router>
    </div>
  );
}

export default App;
