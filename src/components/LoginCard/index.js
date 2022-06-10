import React from 'react'
import './style.css'

const LoginCard = () => {
  return (
    <div className='card'>
     <div className='card-content'>
      <p>Log In</p>
      <div className='form-group'>
        <label>Email address</label>
         <input type="email" placeholder='enter your email address' ></input>
      </div>

      <div className='form-group'>
        <label>Password</label>
         <input type="password" ></input>
      </div>
      <div className='checkbox-section'>
     <div className='input-check'><input type="checkbox"/><span>Remember me</span></div> 
       <div className='forgot-password' ><a>Forgot Password</a></div>
      </div>
      <button className='log-in-btn' >Login</button>
     <div className='or-section' > <p><span>OR</span></p></div>
     <button className='log-with-social' >Login with Google</button>
     <button className='log-with-social' >Login with Linkedin</button>
     <div className='dont-have-account' >
        <p>Dont have an account?</p>
        <a>Create an account</a>
     </div>
     </div>
    </div>
  )
}

export default LoginCard