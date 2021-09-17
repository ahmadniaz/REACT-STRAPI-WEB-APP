import React, { useReducer } from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer'
import axios from 'axios'

import {
    GET_PRODUCTS,
    FILTER_MIN_PRODUCTS,
    FILTER_MAX_PRODUCTS,
    FILTER_CATEGORY,
    SORT_PRODUCTS,
    PRODUCT_DETAILS,
    FILTER_CLICK,
    CHANGE_FILTER_STATE,
    CLEAR_FILTER,
    INCREMENT,
    DECREMENT,
    INPUT_CHANGE,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_LOADING
} from '../types';

const ProductState = (props) => {
    const initialState = {
        products: [],
        sort: 'Sort By',
        min: '',
        max: '',
        category: 'all',
        clicked: false,
        error: null,
        clickedProduct: '',
        loading: false,
        num: 1,
        cartItems: [],
        total: 0
    };
    const [state, dispatch] = useReducer(productReducer, initialState);

    const getProducts = () => {
        try {

            const res = axios.get(`http://localhost:1337/products`)

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        }
        catch {
            console.log('this is not workig')
        }
    }

    // SORTING PRODUCTS

    const sortProducts = text => {
        dispatch({
            type: SORT_PRODUCTS,
            payload: text
        })
    }

    //FILTER MinPrice PRODUCTS
    const handleMinChange = text => {
        dispatch({
            type: FILTER_MIN_PRODUCTS,
            payload: text
        })

    }

    //FILTER MaxPrice PRODUCTS
    const handleMaxChange = text => {
        dispatch({
            type: FILTER_MAX_PRODUCTS,
            payload: text
        })

    }

    // FILTER Products By category
    const handleCategory = text => {
        dispatch({
            type: FILTER_CATEGORY,
            payload: text
        })
    }

    // Getting  single product on click

    const handleProductClick = (product) => {
        dispatch({
            type: PRODUCT_DETAILS,
            payload: product
        })
    }


    //handling filter button 
    const handleFilterClick = () => {
        dispatch({
            type: FILTER_CLICK,
            payload: true
        })
    }

    //change filter click 

    const handleClickState = () => {
        dispatch({
            type: CHANGE_FILTER_STATE,
            payload: false
        })
    }
    //clearing the filter

    const clearFilter = () => {
        dispatch({
            type: CLEAR_FILTER
        })
    }

    //For increasing products
    const doIncrement = (num, clickedProduct) => {
        dispatch({
            type: INCREMENT,
            payload: {
                num: num + 1,
                clickedProduct
            }
        })
    }

    //For decreasing Products
    const doDecrement = (num, clickedProduct) => {
        if (num === 1) {
            alert('Minumum Limit Reached')
        }
        else {
            dispatch({
                type: DECREMENT,
                payload: {
                    num: num - 1,
                    clickedProduct
                }


            })
        }

    }

    //for loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    //for directly input the number of products
    const handleInputChange = (e) => {
        dispatch({
            type: INPUT_CHANGE,
            payload: e.target.value
        })
    }
    // Handling Add To Cart Button Click
    const handleAddToCart = async (id, num, total) => {
        try {
            setLoading()
            const res = await axios.get(`http://localhost:1337/products/${id}`)
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    product: res.data,
                    num,
                    total,
                }
            })
        }
        catch {
            console.log('this is not working')
        }
    }

    // For Removing Item from Cart

    const removeCartItem = (id, total) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                id,
                total
            }
        })
    }
    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                sort: state.sort,
                max: state.max,
                min: state.min,
                clicked: state.clicked,
                category: state.category,
                checked: state.checked,
                clickedProduct: state.clickedProduct,
                value: state.value,
                num: state.num,
                cartItems: state.cartItems,
                loading: state.loading,
                total: state.total,
                getProducts,
                sortProducts,
                setLoading,
                handleMinChange,
                handleMaxChange,
                handleCategory,
                handleProductClick,
                handleFilterClick,
                handleClickState,
                clearFilter,
                doIncrement,
                doDecrement,
                handleInputChange,
                handleAddToCart,
                removeCartItem


            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState;