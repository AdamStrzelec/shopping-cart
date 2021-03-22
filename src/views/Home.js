import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    return(
        <>
            <SearchBar setSearchValue={setSearchValue}/>
            <ProductsContainer searchValue={searchValue}/>
        </>
    )
}

export default Home;