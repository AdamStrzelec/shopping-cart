import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getProductsInCartFromMemory as getProductsInCartFromMemoryAction } from '../../actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { getProductsInCartTotalPrice } from '../../utils/getProductsInCartTotalPrice';
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem';

const Wrapper = styled.div`
    width: 300px;
    height: 100vh;
    background-color: #ABB2B9;
    position: fixed;
    top: 0;
    right: 0;
    transform: ${props => props.isCartOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
`
const ShoppingCartButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    position: fixed;
    top: 10px;
    right: 30px;
    color: #E5E8E8;
`
const Counter = styled.span`
    padding: 10px;
    margin: 0;
    position: absolute;
    right: -10px;
    bottom: 0;
    background-color: #EC7063;
    padding: 3px;
    border-radius: 10px;
    font-size: 10px;
    font-weight: bold;
`

const ShoppingCartContainer = ({ getProductsInCartFromMemory, productsInCart }) => {
    const [isCartOpen, setCartOpen] = useState(false);

    useEffect(()=>{
        getProductsInCartFromMemory();
    }, [])

    return(
        <>
            <ShoppingCartButton onClick={()=>setCartOpen(true)}>
                <FontAwesomeIcon icon={faShoppingCart}  size={'2x'}/>
                <Counter>{productsInCart.length}</Counter>
            </ShoppingCartButton>
            <Wrapper isCartOpen={isCartOpen}>
                <button className="ml-3 mt-2" onClick={()=>setCartOpen(false)}>
                    <FontAwesomeIcon icon={faWindowClose} size={'2x'} />
                </button>
                <h1 className="text-2xl text-center font-bold mt">
                    Koszyk
                </h1>
                <div className="w-11/12 bg-gray-200 ml-auto mr-auto mt-8 pt-2 rounded-sm h-3/5 overflow-y-auto">
                    {productsInCart.length>0 ?                    
                    productsInCart.map(product => 
                        <ShoppingCartItem 
                            key={product.slug}
                            slug={product.slug}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                        />    
                    ) :
                    <p className="text-center">Koszyk jest pusty</p>}
                </div>

                <p className="text-center mt-5">
                    Łączna kwota: <span className="font-bold">{getProductsInCartTotalPrice(productsInCart)} zł</span>
                </p>
            </Wrapper>
        </>

    )

}

const mapStateToProps = ({productsInCart}) => ({
    productsInCart
})

const mapDispatchToProps = (dispatch) => ({
    getProductsInCartFromMemory: () => dispatch(getProductsInCartFromMemoryAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);