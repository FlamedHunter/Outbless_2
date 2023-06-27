import React from 'react'
import './cartitem.css'
import {useDispatch} from 'react-redux'
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export default function Cartitem(props) {
    const dispatch = useDispatch()
    const alert = useAlert()

    const increaseQuantity = () => {
        const newQty = props.qty + 1;
        dispatch(addItemsToCart(props.prod_id, newQty))
    }
    const decreaseQuantity = () => {
        const newQty = props.qty - 1;
        if(newQty === 0) return;
        dispatch(addItemsToCart(props.prod_id, newQty))
    }

    const deleteCartItems = () => {
        dispatch(removeItemsFromCart(props.prod_id))
        alert.success('Item removed from cart')
    }

    return (
    <div className='cartitemcontainer'>
        <div className='cartitemcontaineritemslarge'>
            <Link to={`/product/${props.prod_id}`} className='cartitemproduct'>
                <div className='cartitemproductpicbox'>
                    <img src={props.img} className='cartitemproductimg' alt="TempelateX" />
                </div>
                <span> {props.product} </span>
            </Link>
            <p onClick={deleteCartItems}>remove</p>
        </div>

        <div className='cartitemcontaineritemsnortmal'>
            Rs. {props.unitprice}
        </div>

        <div className='cartitemcontaineritemsnortmal'>
            <div className='cartitemqtybox'>
                <button onClick={decreaseQuantity}> - </button>
                <input type="number" value={props.qty} readOnly/>
                <button onClick={increaseQuantity}> + </button>
            </div>
        </div>

        <div className='cartitemcontaineritemsnortmal'>
            Rs. {props.totalprice}
        </div>

        
    </div>
  )
}
