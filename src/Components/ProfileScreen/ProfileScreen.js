import React from 'react';
import Nav from '../Nav/Nav';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice';
import {getAuth, signOut} from "firebase/auth";
import PlansScreen from '../PlansScreen/PlansScreen';

function ProfileScreen() {

    const user = useSelector(selectUser);
    const auth = getAuth();
  return (
    <div className='profileScreen'>

        {/* Netflix and Profile Logo */}
        <Nav />

        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>

            <div className='profileScreen__info'>
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt = "avatar"
                />

                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <PlansScreen />
                        <button className='profileScreen__signOut' onClick={() => signOut(auth).then(() => {
                            console.log("signed out")
                        }).catch((error) => {
                            console.log("error caught")
                        })}> Sign Out</button>
                        
                    </div>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default ProfileScreen;