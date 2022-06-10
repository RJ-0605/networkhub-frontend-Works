import React from 'react'
import './style.css'
import SignUpPageWrapper from "../../components/SignUpPageWrapper";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";


const SignUpStage3 = () => {
  return (
    <>
        <SignUpPageWrapper>
            <div className='card'>
       <div className='sign-up-card-content'>
       <div className='bar-3'>
        <span></span>
        </div>

        <p className='progress-step'>Step 3/5</p> 

         <div className='reqiurements'>
         <p>Social media links</p>
        </div>
   
        <div className='form-group'>
        <label>Linkedin URL</label>
         <input type="text" placeholder='' ></input>
      </div>
      
      <div className='form-group'>
        <label>Twitter URL</label>
         <input type="text" placeholder='' ></input>
      </div>

      <div className='form-group'>
        <label>Website URL</label>
         <input type="text" placeholder='' ></input>
      </div>

      <div className='form-group'>
        <label>Other</label>
         <input type="text" placeholder='' ></input>
      </div>
     
     <div className='sign-up-btns'>
         <Link
            to={{
                pathname: "/signupoptions/step2"
                }}
            style={{color: "white"}}
            >
            <button>Back</button>
         </Link>
        <Link
            to={{
                pathname: "/signupoptions/step4"
                }}
            style={{color: "white"}}
            >
            <button>Continue</button>
        </Link>
     </div>

       </div>
    </div>
        </SignUpPageWrapper>
    </>
        )
}

export default SignUpStage3