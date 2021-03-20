import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    overflow: hidden;

`
const StyledButton = styled.button`
    background-color: #F1948A;
    padding: 3px;
    border-radius: 5px;
    color: #F7F9F9;
`

const ProductItem = ({ name, image, price, slug, categories}) => (
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
        <div>
            <p>{price} zł</p>
            <StyledButton className="sm:mr-3 mt-3 mb-4 sm:mb-0">Dodaj do koszyka</StyledButton> 
        </div>
       
    </Wrapper>
)

ProductItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    slug: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string
    }))
}

export default ProductItem;