import React, {useEffect} from 'react'
import './bestselling.css'
import BSCard  from './BSCard'
import { getProduct } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../layout/Loader/loader';
import { Link } from 'react-router-dom';

export default function BestSelling() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    return (
    <>
        {loading ? <Loader /> : (
            <>
                <div className='bscontainer'>
                    <div className='bstextcontainer'>
                        <h2>Best selling Cards</h2>
                        <p>Get posters for all the festivals in a budget that is lesser than your mobile bill</p>
                    </div>
                    <div className='bscontainercard'>
                        <ul>
                            {products && products.slice(0,4).map((product) => (
                                <li key={product._id}>
                                    <BSCard cardId={product._id} name={product.name} price={product.price} img={product.images[0].url}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to={`/products`} className="cta">
                        <span>See All</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
            </>
        )}
    </>
  )
}
