import React from 'react'
import './style.css'

const SignUpStage2 = () => {
  return (
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
       <button>Back</button>
       <button>Continue</button>
     </div>

       </div>
    </div>
  )
}

export default SignUpStage2