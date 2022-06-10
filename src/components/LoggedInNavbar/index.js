import React from 'react';
import './style.css'
import logo from '../../assets/images/logo.png';

const LoggedInNavbar = () => {
  return (
    <div>
    <nav>
    <div className='logo'>
      <img src={logo}/>
        <p>iNetHub</p>
    </div>

   

    <div className='logged-nav-right'>
        <li><i class="bell outline icon"></i></li>
        <li><i class="bars icon"></i></li>
    </div>
    </nav>

    </div>
  )
}

export default LoggedInNavbar