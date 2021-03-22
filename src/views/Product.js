import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_PRODUCT } from '../graphql/query';
import Button from '../components/Button/Button';
import { isProductInCart } from '../utils/isProductInCart';
import { 
    addProductToCart as addProductToCartAction,
    removeProductFromCart as removeProductFromCartAction } from '../actions/actions';

const Product = ({ match, addProductToCart, removeProductFromCart, productsInCart }) => {

    const { loading, error, data } = useQuery(GET_SINGLE_PRODUCT, {variables: { slug: match.params.slug } });     

    const handleShoppingCart = (product) => {
        if(isProductInCart(product.slug, productsInCart)){
            removeProductFromCart(product.slug);
        }else{
            addProductToCart(product)
        }  
    }

    return(
        <>
            {(loading || error) ? 
                <p className="text-center">Pobieranie danych...</p>
            :
            <div className="sm:flex w-10/12 sm:w-11/12 ml-auto mr-auto">
                <div className="w-full sm:w-6/12">
                    <img src={data.products[0].image} alt={'product image'} className="w-full"/>
                </div>
                <div className="sm:pl-10 text-center sm:text-left">
                    <h1 className="text-xl font-bold text-blue-700 mt-5 mb-10">{data.products[0].name}</h1>
                    <p className="font-bold text-gray-600">Kategorie:</p>
                    <div className="flex space-x-3 mb-10 justify-center sm:justify-start">
                        {data.products[0].categories.map(category => 
                            <p key={category.name}>{category.name}</p>    
                        )}
                    </div>
                    <p className="mb-5">Cena: <span className="font-bold">{data.products[0].price} zł</span></p>
                    <Button isSecondary={isProductInCart(data.products[0].slug, productsInCart)} onClick={()=>handleShoppingCart(data.products[0])}>
                        {isProductInCart(data.products[0].slug, productsInCart) ? 'Usuń z koszyka' : 'Dodaj do koszyka'}
                    </Button>
                </div>
            </div>
            }
        </>
    )
}

const mapStateToProps = ({ productsInCart }) => ({
    productsInCart
})
const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => dispatch(addProductToCartAction(product)),
    removeProductFromCart: (slug) => dispatch(removeProductFromCartAction(slug))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Product));