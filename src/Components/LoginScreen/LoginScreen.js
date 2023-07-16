import React, { useState } from 'react';
import './LoginScreen.css';
import SignInScreen from '../SignInScreen/SignInScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img className='loginScreen__logo' 
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="logo"
            />
            <button className='loginScreen__button'
            onClick={() => setSignIn(true)}>
                Sign In
            </button>

            <div className='loginScreen__gradient'></div>
        </div>

        <div className='loginScreen__body'>

            {signIn ? (<SignInScreen />) : (
                <>
                    <h1>Unlimites films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className='loginScreen__input'>
                        <form>
                            <input 
                            type='email' 
                            placeholder='Email Address'
                            />
                            <button className='loginScreen__getStarted'
                            onClick={() => setSignIn(true)}>
                                GET STARTED
                            </button>
                        </form>
                    </div>
                </>
            )}
            
        </div>
    </div>
    )
    }

export default LoginScreen