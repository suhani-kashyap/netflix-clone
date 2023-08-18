import React, { useState, useEffect } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {

  const [show, handleShow] = useState(false);

  // To be able to navigate to profile page by clicking on avatar
  const history = useNavigate();

  const transitionNavBar = () => {
    if(window.scrollY > 250){
        handleShow(true);
    } else{
        handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => window.removeEventListener("scroll", transitionNavBar);
  },[]);

  return (
    <div className={`nav ${ show && 'nav__black'}`}>
        <div className='nav__contents'>

            {/* Netflix Logo */}
            <img className='nav__logo'
                // To be able to navigate to the Homepage when the Netflix logo is clicked
                onClick = {() => history("/")}
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt="logo" 
            />

            {/* This is the avatar. We are using useNavigate to be able to get to the */}
            {/* profile page by clicking on it. */}
            <img className='nav__avatar'
                onClick={() => history("/profile")} 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar"
            />
        </div>
        
    </div>
  )
}

export default Nav