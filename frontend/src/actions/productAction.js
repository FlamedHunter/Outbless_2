import axios from 'axios';

import {
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProduct = (keyword="", currentPage = 1, price = [0, 2500], category) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        if(category) {
            // link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
        }

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        });
    }
}

export const getAdminProduct = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_PRODUCTS_REQUEST });
  
      const { data } = await axios.get("/api/v1/admin/products");
  
      dispatch({
        type: ADMIN_PRODUCTS_SUCCESS,
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const createProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type:  NEW_PRODUCT_REQUEST});

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        

        const { data } = await axios.post(`/api/v1/admin/product/new`, productData, config);

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        });
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type:  PRODUCT_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
}


// Clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
}
    