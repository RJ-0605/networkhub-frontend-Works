import React from 'react'
import './style.css'
import people from '../../assets/images/people.jpg'


const SearchResultsPeople = () => {
  return (
      <>
    <div className='people-results-body'>
        <div className='results-body-card'>
        <div className='people-results-img'>
           <div className='people-results-img-card'>
           <img src={people}/>
           </div>
       </div>

       <div className='people-results-details'>
            <h2>Mary Jane</h2>
            <p>Journalist at BBC</p>
            <p>Abuja,Nigeria</p>
       </div>


        </div>

    </div>
    </>
  )
}

export default SearchResultsPeople