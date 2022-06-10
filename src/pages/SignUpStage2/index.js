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

const SignUpStage2 = () => {
  return (
      <>
        <SignUpPageWrapper>
            <div className='card'>
               <div className='sign-up-card-content'>
               <div className='bar-2'>
                <span></span>
                </div>

                <p className='progress-step'>Step 2/5</p>

                 <div className='reqiurements'>
                 <p>Interest/Specialty</p>
                </div>

                <div className='form-group'>
                <label>Resources</label>
                <select>
                <option value="">select</option>
                <option value="dog"></option>
                <option value="cat"></option>
                <option value="hamster"></option>
                <option value="parrot"></option>
                <option value="spider"></option>
                <option value="goldfish"></option>
                </select>
              </div>

               <div className='form-group'>
                <label>Discipline</label>
                <select>
                <option value="">select</option>
                <option value="dog"></option>
                <option value="cat"></option>
                <option value="hamster"></option>
                <option value="parrot"></option>
                <option value="spider"></option>
                <option value="goldfish"></option>
                </select>
              </div>

               <div className='form-group'>
                <label>Medium</label>
                <select>
                <option value="">select</option>
                <option value="dog"></option>
                <option value="cat"></option>
                <option value="hamster"></option>
                <option value="parrot"></option>
                <option value="spider"></option>
                <option value="goldfish"></option>
                </select>
              </div>

             <div className='sign-up-btns'>
                 <Link
                        to={{
                            pathname: "/signupoptions/step1"
                            }}
                        style={{color: "white"}}
                    >
                    <button>Back</button>
                 </Link>
                 <Link
                        to={{
                            pathname: "/signupoptions/step3"
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

export default SignUpStage2