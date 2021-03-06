import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import { isProductInCart } from '../../../utils/isProductInCart';
import { addProductToCart as addProductToCartAction,
        removeProductFromCart as removeProductFromCartAction  } from '../../../actions/actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    overflow: hidden;
`

const ProductItem = ({ name, image, price, slug, categories, addProductToCart, removeProductFromCart, productsInCart }) => {

    const handleShoppingCart = (slug) => {
        if(isProductInCart(slug, productsInCart)){
            removeProductFromCart(slug);
        }else{
            addProductToCart({
                name,
                image,
                price,
                slug,
                categories
            })
        }  
    }

    return(
        <Wrapper className="sm:flex justify-between text-center items-center sm:ml-10 sm:mr-10 mb-6 rounded-md bg-gray-200">
        <img className=" w-8/12 ml-auto mr-auto sm:m-0 sm:w-auto sm:h-36" src={image} alt='product-image' />
        <div>
            <Link to={`/product/${slug}`} className="font-bold pl-3 pr-3 text-blue-400 text-lg">{name}</Link>
            <p className="font-bold text-sm sm:mt-3">Kategorie:</p>
            <div className="flex space-x-4 justify-center">
                {categories.map(category => 
                    <p key={category.name} className="text-center">{category.name} </p>    
                )}
            </div>
        </div>
        <div className="mb-5 sm:mb-0 mt-5 sm:mt-0 sm:pr-5">
            <p>{price} zł</p>
            <Button isSecondary={isProductInCart(slug, productsInCart)} onClick={()=>handleShoppingCart(slug)}>
                {isProductInCart(slug, productsInCart) ? 'Usuń z koszyka' : 'Dodaj do koszyka'}
            </Button>
        </div>    
    </Wrapper>
    )
}

ProductItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    slug: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    }))
}

const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => dispatch(addProductToCartAction(product)),
    removeProductFromCart: (slug) => dispatch(removeProductFromCartAction(slug))
})

export default connect(null, mapDispatchToProps)(ProductItem);