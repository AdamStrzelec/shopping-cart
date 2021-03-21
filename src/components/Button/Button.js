import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    background-color: ${props => props.isSecondary ? '#F1948A' : '#58D68D'};
    padding: 3px;
    border-radius: 5px;
    color: #F7F9F9;
`

const Button = ({ children, onClick, isSecondary }) => (
    <StyledButton onClick={onClick} isSecondary={isSecondary}>
        {children}
    </StyledButton>
)

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isSecondary: PropTypes.bool
}

export default Button;