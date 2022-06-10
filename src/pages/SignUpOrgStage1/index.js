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


const SignUpOrgStage1 = () => {
  return (
      <>
          <SignUpPageWrapper >
                <div className='card'>
                <div className='sign-up-card-content'>
                <div className='bar'>
                 <span></span>
                 </div>
                 <p className='progress-step'>Step 1/5</p>
                <div className='form-group'>
                 <label>Username</label>
                  <input type="text" placeholder='' ></input>
               </div>

                <div className='form-group'>
                 <label>Country</label>
                 <input type="text" placeholder='' ></input>
               </div>

                <div className='form-group'>
                 <label>Select which applies</label>
                 <input type="text" placeholder='Individuals,Organisations or Community'></input>
               </div>

              <div className='sign-up-btns'>
                  <Link
                        to={{
                            pathname: "/signupoptions"
                            }}
                        style={{color: "white"}}
                    >
                    <button>Back</button>
                  </Link>
                  <Link
                        to={{
                            pathname: "/signupoptions/org/step2"
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

export default SignUpOrgStage1