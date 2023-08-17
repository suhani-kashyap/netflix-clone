import React, { useRef } from 'react';
import {auth} from '../../firebase';
import './SignInScreen.css';

function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
       e.preventDefault(); // to avoid refresh
       auth.createUserWithEmailAndPassword(
        emailRef.current.value, 
        passwordRef.current.value).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault(); // to avoid refresh

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value).then((authUser) => {
                console.log(authUser);
            }).catch((error) => {
                alert(error.message);
            });
    }

    return (
    <div className='signInScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type='email' placeholder='Email' />
            <input ref ={passwordRef} type='password' placeholder='Password'/>
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