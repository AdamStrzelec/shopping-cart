import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from '../../graphql/query';
import { filterProductsByName } from '../../utils/filterProductsByName';
import { connect } from 'react-redux';

const ProductsContainer = ({ searchValue, productsInCart }) => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

    return(
        <>
            {loading || error ? 
            <p className="text-center">Pobieranie danych...</p>
            :
            filterProductsByName(data.products, searchValue).map(product => 
                <ProductItem 
                    key={product.slug}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    slug={product.slug}
                    categories={product.categories}
                    productsInCart={productsInCart}
                />
            )
            }
        </>
    )
}

ProductsContainer.propTypes = {
    searchValue: PropTypes.string,
}

const mapStateToProps = ({ productsInCart }) => ({
    productsInCart
})

export default connect(mapStateToProps)(ProductsContainer);