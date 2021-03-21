import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 55px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #2980B9;
    padding: 0 30px;
    color: #E5E8E8;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
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

const Navbar = () => (
    <Wrapper>
        <StyledButton>
            <Link to={'/'}>
                <FontAwesomeIcon icon={faHome}  size={'2x'}/>
            </Link>
        </StyledButton>
        
        <StyledButton>
            <FontAwesomeIcon icon={faShoppingCart}  size={'2x'}/>
            <Counter>{0}</Counter>
        </StyledButton>
    </Wrapper>
)

export default Navbar;