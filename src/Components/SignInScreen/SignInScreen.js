import React from 'react';
import './SignInScreen.css';

function SignInScreen() {

    const register = (e) => {
       e.preventDefault(); // to avoid refresh
    };

    const signIn = (e) => {
        e.preventDefault(); // to avoid refresh
    }

    return (
    <div className='signInScreen'>
        <form>
            <h1>Sign In</h1>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password'/>
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='signInScreen__grey'>
                    New to Netflix?
                </span>
                <span className='signUpScreen__link' onClick={register}>
                    Sign Up now.
                </span>
            </h4>
        </form>
    </div>
    )
    }

export default SignInScreen