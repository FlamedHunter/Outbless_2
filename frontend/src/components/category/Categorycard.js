import React from 'react'
import './categorycard.css'

export default function Categorycard(props) {
  return (
    <>
        <a className='categorycardcontainer'>
            <a href='/' className='categorycard'>
                <img  className = "categorycardimg" src={props.img} alt="Category 1"/>
            </a>

            <div className='categorydiscription'>
                <h3>{props.category}</h3>
            </div>
        </a>
    </>
  )
}
