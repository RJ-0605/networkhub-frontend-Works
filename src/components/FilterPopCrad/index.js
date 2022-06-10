import React from 'react'
import './style.css'

const FilterPopCrad = () => {
  return (
    <div className='pop-card-body'>
        <div className='pop-card'>
          <div className='pop-card-content'>
         <div className='pop-card-title'>
          <h3>Filters</h3>
          <i class="close icon"></i>
         </div>

         <div className='form-group'>
         <label>Resource type</label>
         <select></select>
         </div>

         <div className='form-group'>
         <label>Discipline</label>
         <select></select>
         </div>

         <div className='form-group'>
         <label>Medium</label>
         <select></select>
         </div>

         <div className='pop-btn'>
             <button>Show results</button>
         </div>

        </div>
        </div>

    </div>
  )
}

export default FilterPopCrad