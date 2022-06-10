import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
    useRouteMatch
} from "react-router-dom";



const Navbar = () => {
  return (
    <div>
    <nav>
        <div className='logo'>
          <img src={logo}/>
            <p>iNetHub</p>
        </div>

        <div className='nav-center'>
            <li><a href="">Resources</a></li>
            <li><a href="">Discipline</a></li>
            <li><a href="">Medium</a></li>
            <li><a href="">FAQs</a></li>
            <li><a href="">Partner with us</a></li>
        </div>

        <div className='nav-right'>
            <li>
                <Link
                    to={{
                        pathname: "/login"
                        }}>
                    Log In
                </Link>
            </li>
            <li>
                <button>
                    <Link
                        to={{
                            pathname: "/signup"
                            }}
                        style={{color: "white"}}
                    >
                        Get Started
                    </Link>
                </button>
            </li>
        </div>
    </nav>
    </div>
  )
}

export default Navbar