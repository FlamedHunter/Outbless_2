import React, { useEffect, useState } from 'react'
import './productspecpg.css'
import {useDispatch, useSelector} from 'react-redux' 
import { getProductDetails } from '../../actions/productAction'
import {useParams} from 'react-router-dom';
import { useAlert } from "react-alert";
import Loader from '../../layout/Loader/loader';
import { addItemsToCart} from '../../actions/cartAction';

const Productspecpg = () => {
    const { id } = useParams();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { product, loading } = useSelector(state => state.productDetails);

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        const qty = quantity + 1;
        setQuantity(qty);
      }
  
    const decreaseQuantity = () => {
        if(quantity <= 1) return;
        const qty = quantity - 1;
        setQuantity(qty);
    }

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item added to cart");
    }

    useEffect(() => {  
        dispatch(getProductDetails(id));
    }, [dispatch, id]);

    return (
    <>
        {loading ? <Loader /> : (
            <>
                <div className='productspecificcontainer'>
                    <div className='productspecificimgbox'>
                        <img className='prductspecificimg' src="https://cdn.shopify.com/s/files/1/0573/7850/4819/products/Screenshot2023-01-31at11.38.51PM.png?v=1675188885&width=823" alt="Here is the tempelate" />
                    </div>
        
        
                    <div className='productspecificdiscrp'>
                        <span className='productspecificdiscrpspan1'>Outbless</span>
        
                        <h1 className='productspecificdiscrph1'>{product.name}</h1>
        
                        <div className='productspecificprice'>
                            <div className='productspecificoldprice'>
                                <h5>Rs. {product.price + 500}.00</h5>
                            </div>
                            <h5>Rs. {product.price}.00</h5>
                            <div className='saleshow'> Sale </div>
                        </div>
        
                        <div className='productspecificquantitybox'>
                            <h3>Quantity</h3>
                            <div className='productspecificbuttonscontainer'>
                                <div className='productspecificquantitychange'>
                                    <button onClick={decreaseQuantity}>-</button>
                                    <input readOnly type="number" value={quantity}/>
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
        
                                <div className='productspecificcartbutton'>
                                    <button onClick={addToCartHandler}>Add to Cart</button>
                                </div>
                            </div>
        
                        </div>
        
                        <p>Description</p>
                        <p>{product.description}</p>
                        
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default Productspecpg