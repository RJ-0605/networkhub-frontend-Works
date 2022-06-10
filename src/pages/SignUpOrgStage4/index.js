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


const SignUpOrgStage4 = () => {
  return (
     <>
         <SignUpPageWrapper>
            <div className='card'>
       <div className='sign-up-card-content'>
       <div className='bar-4'>
        <span></span>
        </div>

        <p className='progress-step'>Step 4/5</p> 

         <div className='reqiurements'>
         <p>Upload display picture</p>
        </div>

     <div className='wrapper' >
     <form action="#">
      <input className='file-input' type="file" name="file" hidden/>
      <i class="image icon"></i>
      <p>Drop your image here<br/>or<br/>Browse</p>
     </form>
     </div>

     <div className='sign-up-btns'>
         <Link
            to={{
                pathname: "/signupoptions/org/step3"
                }}
            style={{color: "white"}}
            >
            <button>Back</button>
         </Link>
        <Link
            to={{
                pathname: "/signupoptions/org/step5"
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

export default SignUpOrgStage4