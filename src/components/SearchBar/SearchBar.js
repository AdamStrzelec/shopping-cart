import React, { useContext } from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../views/Home';

const StyledInput = styled.input`
    width: 100%;
    background-color: #E5E8E8;
    padding: 3px 5px;
    border-radius: 4px;
`

const SearchBar = () => {

    const { setSearchBarValue } = useContext(SearchContext);

    const handleChange = (value) => {
        setSearchBarValue(value)
    }
    return(
        <div className="sm:ml-10 sm:mr-10 ml-0 mr-0 mb-10">
            <StyledInput type="text" placeholder="Znajdź produkt" onChange={e => handleChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar;