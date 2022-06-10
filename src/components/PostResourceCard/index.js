import React from 'react'
import './style.css'

const PostResourceCard = () => {
  return (
      <div className='post-resource-body'>
    <div className='post-resource-card'>
       <div className='post-res-card-content'>
       <div className='post-res-title'>
         <h4>Post a resource</h4>
       </div>
       
       <div className='wrapper' >
       <label>Photo/Video</label>  
     <form action="#">
      <input className='file-input' type="file" name="file" hidden/>
      <i class="image icon"></i>
      <p>Drop your image here<br/>or<br/>Browse</p>
     </form>
     </div>

     <div className='form-group'>
       <div> <label>Resource type</label></div>
        <select></select>
      </div>
     <div className='form-group'>
       <div> <label>Discipline</label></div>
        <select></select>
      </div>
     <div className='form-group'>
       <div> <label>Medium</label></div>
        <select></select>
      </div>

      <div className='form-group'>
       <div> <label>Date & Time </label></div>
        <input/>
      </div>
      <div className='form-group'>
       <div> <label>Description</label></div>
        <input/>
      </div>
      <div className='form-group'>
      <div>  <label>Link/Venue</label></div>
        <input/>
      </div>

       <div className='post-res-btn'>
         <button>Post a resource</button>
       </div>
      
       </div>
    </div>
    </div>
  )
}

export default PostResourceCard