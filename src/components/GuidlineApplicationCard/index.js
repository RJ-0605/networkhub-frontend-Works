import React from 'react'
import './style.css'
import compmany from '../../assets/images/company.png'


const GuidlineApplicationCard = () => {
  return (
    <>
    <div className='guide-app-body'>
      <div className='guide-job-card'>
       <div className='guide-job-company-img'>
           <div className='guide-job-company-img-card'>
           <img src={compmany}/>
           </div>
       </div>

       <div className='guide-job-company-details'>
          <p>view guideline for application and <br/>other resources</p>
          <p>Deadline : 7th May 2023</p>
       </div>
      </div>
    </div>
    </>
  )
}

export default GuidlineApplicationCard