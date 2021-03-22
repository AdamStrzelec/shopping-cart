import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
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
`

export const GET_SINGLE_PRODUCT = gql`
    query getProduct($slug: String!){
        products(slug: $slug){
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
`