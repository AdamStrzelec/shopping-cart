import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    background-color: #E5E8E8;
    padding: 3px 5px;
    border-radius: 4px;
`

const SearchBar = ({ setSearchValue }) => {

    return(
        <div className="sm:ml-10 sm:mr-10 ml-0 mr-0 mb-10">
            <StyledInput type="text" placeholder="Znajdź produkt" onChange={e => setSearchValue(e.target.value)}/>
        </div>
    )
}

SearchBar.propTypes = {
    setSearchValue: PropTypes.func
}

export default SearchBar;