import React from 'react'
import './style.css'

const SignUpStage4 = () => {
  return (
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
       <button>Back</button>
       <button>Continue</button>
     </div>

       </div>
    </div>
  )
}

export default SignUpStage4