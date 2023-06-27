import React from 'react'
import './bscard.css'
import { Link } from 'react-router-dom';

export default function BSCard(props) {
  return (
    <>
        <div className='bscardcontainer'>
            <Link to={`/product/${props.cardId}`} className='bscardimgbox'>
                <img className='bscardimg' src={props.img} alt="category-img" />
            </Link>
            <div className='bscardprice'>
                <h5>{props.name}</h5>
                <p>{props.price}</p>
            </div>
        </div>
    </>
  )
}
