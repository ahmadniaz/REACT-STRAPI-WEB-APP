import {
    PRODUCTS_ERROR,
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


const productReducer = (state, action) => {
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FILTER_MIN_PRODUCTS:
            return {
                ...state,
                min: action.payload


            };
        case FILTER_MAX_PRODUCTS:
            return {
                ...state,
                max: action.payload

            }
        case FILTER_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        case SORT_PRODUCTS:
            return {
                ...state,
                sort: action.payload
            }
        case PRODUCT_DETAILS:
            return {
                ...state,
                clickedProduct: action.payload
            }
        case FILTER_CLICK:
            return {
                ...state,
                clicked: action.payload
            }
        case CHANGE_FILTER_STATE:
            return {
                ...state,
                clicked: action.payload
            }

        case CLEAR_FILTER:
            return {
                ...state,
                min: '',
                max: '',
                category: 'all',
            }

        case INCREMENT:

            console.log(state.total + action.payload.clickedProduct.price, 'total')
            return {
                ...state,
                num: action.payload.num,
                total: state.total + action.payload.clickedProduct.price

            }

        case DECREMENT:
            console.log(action.payload.clickedProduct, 'decrement')
            console.log(state.total - action.payload.clickedProduct.price, 'total')
            return {
                ...state,
                num: action.payload.num,
                total: state.total - action.payload.clickedProduct.price
            }
        case INPUT_CHANGE:
            return {
                ...state,
                num: action.payload.num,

            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case ADD_TO_CART:
            let newItem = action.payload
            let productExist = state.cartItems.find(item => action.payload.product.id === item.product.id)
            if (productExist) {
                newItem.num += 1;
                return {
                    ...state,
                    num: newItem.num,
                    total: state.total + (productExist.product.price * productExist.num)
                }
            }
            else {

                state.cartItems.push({
                    num: action.payload.num,
                    product: action.payload.product
                })
                let newTotal = state.total + (action.payload.product.price * action.payload.num)

                return {
                    ...state,
                    cartItems: state.cartItems,
                    loading: false,
                    total: newTotal,
                    num: 1

                }
            }


        case REMOVE_FROM_CART:
            let newProd = state.products.find(x => x.product.product.id === action.payload.id);
            console.log(newProd, 'new prod')
            return {
                ...state,
                cartItems: state.cartItems.filter(product => product.product.id !== action.payload.product.id),
                total: state.total - (action.payload.product.price * action.payload.num)
            }

        default:
            return state;
    };
}

export default productReducer;