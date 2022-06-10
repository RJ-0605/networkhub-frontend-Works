import React from 'react'
import './style.css'

const SignUpStage3 = () => {
  return (
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
       <button>Back</button>
       <button>Continue</button>
     </div>

       </div>
    </div>
  )
}

export default SignUpStage3