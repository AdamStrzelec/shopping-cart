import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { removeProductFromCart as removeProductFromCartAction } from '../../../actions/actions';
import { Link } from 'react-router-dom';

const ShoppingCartItem = ({ slug, name, image, price, removeProductFromCart }) => (
    
        <div className="w-11/12 rounded-md overflow-hidden bg-gray-300 mb-1 ml-auto mr-auto flex items-center justify-between">
            <Link to={`/product/${slug}`} className="flex items-center">
                <div className="w-16">
                    <img src={image} alt='shopping_cart_item_image' className="w-full"/>
                </div>
                <div className="ml-2">
                    <p className="text-xs font-bold">{name}</p>
                    <p className="text-xs">{price}</p>
                </div>
            </Link>
            <button className="text-red-500 mr-2" onClick={()=>removeProductFromCart(slug)}>
                <FontAwesomeIcon icon={faTimes} size="2x"/>
            </button>
        </div>
    
)

ShoppingCartItem.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    removeProductFromCart: PropTypes.func
}

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart: (slug) => dispatch(removeProductFromCartAction(slug))
})

export default connect(null, mapDispatchToProps)(ShoppingCartItem);