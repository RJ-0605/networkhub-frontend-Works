import React from 'react'
import './style.css'

const FooterGeneral = () => {
  return (
    <div className='footer'>

     <div className='footer-top'>
         <div><h2>Follow us</h2></div>
       <div className='social-links'>
       <i class="twitter icon"></i>
       <i class="facebook f icon"></i>
       <i class="linkedin icon"></i>
       <i class="instagram icon"></i>
       </div>
     </div>
   
    <div className='footer-center'>
     <div>
     <h2>Company</h2>
     <li><a>FAQs</a></li>
     <li><a>Contact Us</a></li>
     </div>
     </div>

     <div className='footer-bottom' >
      <p>&copy; 2021 All Rights Reserved</p>
     </div>
     
    </div>
  )
}
 
export default FooterGeneral