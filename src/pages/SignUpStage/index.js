import React from 'react';
import './style.css';
import SignUpPageWrapper from "../../components/SignUpPageWrapper";
// import SignUpStageComp from "../../components/SignUpStage";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";



const SignUpStage = () => {
  return (
      <>

          <SignUpPageWrapper>
              <>
                <div className='sign-up-stage-card'>
                 <div className='sign-up-stage-card-content'>

                 <Link
                        to={{
                            pathname: "/signupoptions/step1"
                            }}
                        style={{color: "white"}}
                    >
                        <div className='users-card'>
                            <div className='users-card-content'>
                             <p>Student/Professional</p>
                             <div><i class="user icon" style={{color: "midnightblue"}}></i></div>
                             <div className='seek-res'><p>Do you seek resources?</p></div>
                           </div>
                        </div>
                 </Link>

                 <Link
                    to={{
                        pathname: "/signupoptions/org/step1"
                        }}
                    style={{color: "white"}}
                    >
                        <div className='users-card'>
                            <div className='users-card-content'>
                             <p>Individual/<br/>Organisation/<br/>Community</p>
                             <div><i class="group icon" style={{color: "midnightblue"}}></i></div>
                             <div className='seek-res'><p>Do you provide resources?</p></div>
                           </div>
                        </div>
                 </Link>

                  </div>
                </div>
              </>
           </SignUpPageWrapper>
        {/*hey stage*/}
      </>
  )
}

export default SignUpStage