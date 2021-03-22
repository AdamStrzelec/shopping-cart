import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
    align-items: center;
`
const StyledButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
`

const Navbar = () => {
    return(
        <Wrapper>
            <StyledButton>
                <Link to={'/'}>
                    <FontAwesomeIcon icon={faHome}  size={'2x'}/>
                </Link>
            </StyledButton>
        </Wrapper>
    )
}

export default Navbar;