import React, { useContext } from 'react';
import ProductItem from './ProductItem/ProductItem';
import { useQuery, gql } from '@apollo/client';
import { SearchContext } from '../../views/Home';

const ProductsContainer = () => {
    const { loading, error, data } = useQuery(gql`
    query getProducts{
        products{
        id,
        name,
        slug,
        image,
        price,
        categories{
            name
        }
        }
    }
    `);
    const { searchValue } = useContext(SearchContext);

    return(
        <>
            {loading ? 
            <p className="text-center">Pobieranie danych...</p>
            :
            data.products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())).map(product => 
                <ProductItem 
                    key={product.slug}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    slug={product.slug}
                    categories={product.categories}
                />
            )
            }
        </>
    )
}

export default ProductsContainer;