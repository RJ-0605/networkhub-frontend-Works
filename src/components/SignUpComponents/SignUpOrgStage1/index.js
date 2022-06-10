import React from 'react'
import './style.css'

const SignUpOrgStage1 = () => {
  return (
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
    <button>Back</button>
    <button>Continue</button>
  </div>

    </div>
 </div>
  )
}

export default SignUpOrgStage1