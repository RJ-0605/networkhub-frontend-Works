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

const SignUpStage5 = () => {
  return (
      <>
          <SignUpPageWrapper>
            <div className='card'>
    <div className='sign-up-card-content'>
    <div className='bar-5'>
     <span></span>
     </div>

     <p className='progress-step'>Step 5/5</p> 

      <div className='reqiurements'>
      <p>About</p>
     </div>

  <div className='wrapper-5'>
  <form action="#">
   <input className='' type="text" placeholder='Describe what you or your community do'/>
   
   
  </form>
  </div>

  <div className='sign-up-btns'>
      <Link
            to={{
                pathname: "/signupoptions/org/step4"
                }}
            style={{color: "white"}}
            >
        <button>Back</button>
      </Link>
      <Link
            to={{
                pathname: ""
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

export default SignUpStage5