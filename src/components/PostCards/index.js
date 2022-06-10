import React from 'react'
import './style.css'
import post from '../../assets/images/post.webp';


const PostCards = () => {
  return (
      <div>

    <div className='post-title'><h1>My Sessions</h1></div>

    <div className='post-resource-area'>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
        </div>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
        </div>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
        </div>

    </div>

    <div className='post-title'><h1>Your booked sessions</h1></div>

    
    <div className='post-resource-area'>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
         <div className='booked-btn'>
            <button>booked</button>
        </div>
        </div>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
         <div className='booked-btn'>
            <button>booked</button>
        </div>
        </div>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
        
        <div className='booked-btn'>
            <button>booked</button>
        </div>
         
        </div>

    </div>


    <div className='post-title'><h1>Upcoming sessions</h1></div>
    <div className='post-resource-area'>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
         <div className='booked-btn'>
            <button>book</button>
        </div>
        </div>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
         <div className='booked-btn'>
            <button>book</button>
        </div>
        </div>

        <div className='post-card'>
         <img src={post}/>
         <div className='img-text'>
          <h5>Fri, june 12 5:00pm WAT</h5>
          <p>Theater and Cultural Festival</p>
         </div>
        
        <div className='booked-btn'>
            <button>book</button>
        </div>
         
        </div>

    </div>
    









    </div>
  )
}

export default PostCards