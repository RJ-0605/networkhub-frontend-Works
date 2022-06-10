import React,{useEffect,useState} from 'react';
import './style.css';


const SignUpPageWrapper = ({children}) => {

  useEffect(()=>{


  }, [])

  return (
    <>
      <div className='signup-wrapper-body'>
          {children}
      </div>
    </>
  )
}

export default SignUpPageWrapper