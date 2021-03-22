import { saveProductInMemory } from '../utils/saveProductInMemory';
import { removeProductCartFromMemory } from '../utils/removeProductCartFromMemory';
import { 
    GET_PRODUCTS_FROM_MEMORY,
    ADD_TO_CART,
    REMOVE_FROM_CART } from '../actionTypes/actionTypes';

export const getProductsInCartFromMemory = () => {
    let products = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    return {
        type: GET_PRODUCTS_FROM_MEMORY,
        payload: {
            products: products
        }
    }
}

export const addProductToCart = (product) => {
    saveProductInMemory(product);
    let products = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    return {
        type: ADD_TO_CART,
        payload: {
            products: products
        }
    }
}

export const removeProductFromCart = (slug) => {
    removeProductCartFromMemory(slug);
    let products = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    return {
        type: REMOVE_FROM_CART,
        payload: {
            products: products
        }
    }
}