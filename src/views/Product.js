import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const Product = ({ match }) => {

    useEffect(()=>{
        
    })
    const { loading, error, data } = useQuery(gql`
        query getProduct{
                products(slug: "${match.params.slug}"){
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
                    <p>Cena: <span className="font-bold">{data.products[0].price} zł</span></p>
                    <button>Dodaj do koszyka</button>
                </div>
            </div>
            }
        </>
    )
}

export default withRouter(Product);