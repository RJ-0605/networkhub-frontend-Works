import React,{useEffect,useState} from 'react';
import './style.css';
import LoginCard from '../../components/LoginCard';
import SignUpCard from '../../components/SignUpCard';
// import SignUpStage from '../../components/SignUpStage';
import SignUpPageWrapper from "../../components/SignUpPageWrapper";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";

const SignUpPage = () => {



  useEffect(()=>{


  }, [])

  return (
    <>
       <SignUpPageWrapper>
           <div className='card'>
             <div className='card-content'>
              <p>Sign Up</p>
              <div className='form-group'>
                <label>Full name</label>
                 <input type="text" placeholder='first name and surname' ></input>
              </div>

              <div className='form-group'>
                <label>Email address</label>
                 <input type="email" placeholder='enter your email address' ></input>
              </div>

              <div className='form-group'>
                <label>Create password</label>
                 <input type="password" ></input>
              </div>
              <Link
                        to={{
                            pathname: "/signupoptions"
                            }}
                        style={{color: "white"}}
                    >
                          <button className='log-in-btn' >

                                  Create my account

                          </button>
              </Link>
             <div className='or-section' > <p><span>OR</span></p></div>
             <button className='log-with-social' >Login with Google</button>
             <button className='log-with-social' >Login with Linkedin</button>
             <div className='terms-section'>
                <p>By continuing you agree to the Terms of use. Privacy Policy and Community Standards of iNethub </p>
             </div>
             <div className='dont-have-account' >
                <p>Already have an account?</p>
                <a>Log In</a>
             </div>
             </div>
            </div>
       </SignUpPageWrapper>

    </>
  )
}

export default SignUpPage