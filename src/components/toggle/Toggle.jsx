import React from 'react'
import './toggle.css'
import Moon from '../../img/Moon.png'
import Sun from '../../img/Sun.png'
export const Toggle = () => {
  return (
    <div className='t'>
        <img src={Moon} alt="" className='t-icon'/>
        <img src={Sun} alt="" className='t-icon'/>
        <div className='t-button'></div>
    </div> 
  )
}
