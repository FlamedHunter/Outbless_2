import React, {useEffect, useState } from 'react'
import './products.css'
import {useSelector, useDispatch} from 'react-redux'
import {useParams, useNavigate} from 'react-router-dom'
import { getProduct } from '../../actions/productAction'
import Loader from '../../layout/Loader/loader'
import BSCard  from '../bestselling/BSCard'
import Pagination from 'react-js-pagination'
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';

const Products = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const { products, loading, productsCount, resultPerPage } = useSelector(state => state.products);

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    }

    const keyword = useParams().keyword;

    useEffect(() => {
        dispatch(getProduct(keyword,currentPage));
    }, [dispatch, keyword,currentPage]);

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <div className="main-products-container">
                        {/* <div className="filterBox">
                        <Typography>Price</Typography>
                        <Slider 
                            value = {price}
                            onChange = {priceHandler}
                            valueLabelDisplay = "auto"
                            aria-labelledby = "range-slider"
                            min = {0}
                            max = {2500}
                        />
                        <Typography>Categories</Typography>
                        <ul className="categoryBox">
                            {categories.map((category) => (
                            <li
                                className="category-link"
                                key={category}
                                onClick={() => setCategory(category)}
                            >
                                {category}
                            </li>
                            ))}
                        </ul>
                        </div> */}
                        <h1>Products</h1>
                        <div className="products-container">
                            {products && products.map(product => (
                                <BSCard cardId={product._id} name={product.name} price={product.price} img={product.images[0].url}/>
                            ))}
                        </div>
                        <div className="paginationBox">
                        <Pagination
                            activePage = {currentPage} 
                            itemsCountPerPage = {resultPerPage}
                            totalItemsCount = {productsCount}
                            onChange = {setCurrentPageNo}
                            nextPageText = "Next"
                            prevPageText = "Prev"
                            firstPageText = "First"
                            lastPageText = "Last"
                            itemClass = "page-item"
                            linkClass = "page-link"
                            activeClass = "pageItemActive"
                            activeLinkClass = "pageLinkActive"
                        />
                    </div>
                    </div>
                    
                </>
                
            )}
        </>
    )
}

export default Products