import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductsContainer from '../components/ProductsContainer/ProductsContainer';

export const SearchContext = React.createContext({
    searchValue: '',
    setSearchBarValue: ()=>{},
})

const Home = () => {
    const [searchValue, setSearchValue] = useState('');

    const setSearchBarValue = (searchValue) => {
        setSearchValue(searchValue);
    }

    return(
        <SearchContext.Provider value={{
            searchValue,
            setSearchBarValue
        }}>
            <SearchBar />
            <ProductsContainer />
        </SearchContext.Provider>
    )
}

export default Home;