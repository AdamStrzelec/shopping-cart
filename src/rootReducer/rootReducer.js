import { 
    GET_PRODUCTS_FROM_MEMORY,
    ADD_TO_CART,
    REMOVE_FROM_CART } from '../actionTypes/actionTypes';

const initialState = {
    productsInCart: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS_FROM_MEMORY:
            return {...state, productsInCart: action.payload.products}
        case ADD_TO_CART:
            return {...state, productsInCart: action.payload.products}
        case REMOVE_FROM_CART:
            return {...state, productsInCart: action.payload.products}
        default:
            return state;
    }
}

export default rootReducer;