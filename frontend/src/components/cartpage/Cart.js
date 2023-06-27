import React from 'react'
import './cart.css'
import Cartitem from './Cartitem'
import {useSelector, useDispatch} from 'react-redux'

export default function Cart() {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state => state.cart)

    return (
    <div className='cart'>
        <div className='cartmaincontainer'>
            <div className='cartcontainer'>
                <div className='cartcontaineritemslarge'>
                    Product
                </div>

                <div className='cartcontaineritemsnortmal'>
                    Unit Price
                </div>

                <div className='cartcontaineritemsnortmal'>
                    QTY
                </div>

                <div className='cartcontaineritemsnortmal'>
                    Price
                </div>
            </div>
            {cartItems.length === 0 ? (
                <div className='cartempty'>
                </div>
                ) : (
                cartItems.map((item) => (
                    <Cartitem
                    key = {item.product}
                    prod_id = {item.product}
                    product = {item.name}
                    img = {item.image}
                    totalprice = {item.price * item.quantity}
                    unitprice = {item.price}
                    qty = {item.quantity}
                    />
                )))}
        </div>

        <div className='carttotal'>
            <div className='carttotalempty'>
                empty box
            </div>

            <div className='carttotalpricebox'>
                <div>
                    <ul>
                        <li>
                            <span>Subtotal</span>
                            <span>{`Rs ${cartItems.reduce(
                                (acc, item) => acc + item.quantity * item.price, 0
                            )}`}</span>
                        </li>
                        <li>
                            <span>Coupon</span>
                            <span>Not applied</span>
                        </li>
                    </ul>

                    <div className='cartitemstotalprice'>
                        <span>Total</span>
                        <span>{`Rs ${cartItems.reduce(
                                (acc, item) => acc + item.quantity * item.price, 0
                            )}`}</span>
                    </div>

                    <button>
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
