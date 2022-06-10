import React from 'react'
import './style.css'

const PartnerCard = () => {
  return (
    <div className='partner-card-body'>
     <div className='partner-card'>
    
        <div className='partner-title'>
           <h2>Partner with us</h2>
        </div>
      
       <div className='form-group'>
          <label>Full name/Company name</label>
          <input/>
       </div>
       <div className='form-group'>
          <label>Email address</label>
          <input type='email'/>
       </div>
       <div className='form-group'>
          <label>Phone number (optional)</label>
          <input/>
       </div>
       <div className='form-group'>
          <label>How can we help you?</label>
          <input/>
       </div>

       <div className='partner-btn'>
        <button>submit</button>
       </div>

     </div>
    </div>
  )
}

export default PartnerCard