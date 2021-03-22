import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { removeProductFromCart as removeProductFromCartAction } from '../../../actions/actions';

const ShoppingCartItem = ({ slug, name, image, price, removeProductFromCart }) => (
        <div className="w-11/12 rounded-md overflow-hidden bg-gray-300 mb-1 ml-auto mr-auto flex items-center space-x-3">
            <div className="w-16">
                <img src={image} alt='shopping cart item image' className="w-full"/>
            </div>
            <div className="ml-2 w-6/12">
                <p className="text-xs font-bold">{name}</p>
                <p className="text-xs">{price}</p>
            </div>
            <button className="text-red-500" onClick={()=>removeProductFromCart(slug)}>
                <FontAwesomeIcon icon={faTimes} size="2x"/>
            </button>
        </div>
    )

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart: (slug) => dispatch(removeProductFromCartAction(slug))
})

export default connect(null, mapDispatchToProps)(ShoppingCartItem);