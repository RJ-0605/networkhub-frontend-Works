import React from 'react';
import './style.css'
import LandingPageNavbar from '../../components/LandingPageNavbar';
import LongSearch from '../../components/LongSearch';
import FooterGeneral from '../../components/FooterGeneral';
import logo from '../../assets/images/logo.png'
import CarouselComponent from "../../components/CarouselComponent";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";


const LandingPage = () => {
  return (
    <>
      <LandingPageNavbar/>

      <div>
        <LongSearch/>
      </div>


       {/* big logo section area  */}
      <div className='logo-section'>
        <img src={logo}/>
      </div>
  
      <div className='connect'>
        <p>Connecting you to the resources necessary for your academic<br/> and professional journey or <br/>development</p>
      </div>

      <div className='videos'>

        <div className='card'>
        <i class="play icon"></i>
        </div>

        <div className='card'>
        <i class="play icon"></i>
        </div>

        <div className='card'>
        <i class="play icon"></i>
        </div>

      </div>
      <div className='what-is' >
        <h1>What is iNethub?</h1>
        <p>A global Interdisciplianry platform connecting you to the resources necessary for your<br/>academic or professional journey and development. </p>
      </div>

      <div className='who-needs'>
        <h1>Who needs iNethub?</h1>
        <p>An individual , or organization seeking and providing resources necessary for<br/>academic or professional journey and development. </p>
      </div>
        <CarouselComponent />
      <FooterGeneral/>

    </>
  )
}

export default LandingPage