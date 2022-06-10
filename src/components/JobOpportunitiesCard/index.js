import React from 'react'
import './style.css'
import compmany from '../../assets/images/company.png'

const JobOpportunitiesCard = () => {
  return (
    <div className='job-card-body'>
      <div className='job-card'>
       <div className='company-img'>
           <div className='company-img-card'>
           <img src={compmany}/>
           </div>
       </div>

       <div className='company-details'>
          <h3>Company name</h3>
          <p>Location</p>
          <p>Full-time</p>
       </div>
       <div className='apply-btn'>
        <button>Apply</button>
       </div>
      </div>
    </div>
  )
}

export default JobOpportunitiesCard