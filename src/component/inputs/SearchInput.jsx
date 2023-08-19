import React from 'react';
import useData from '../../context/DataContext';

const SearchInput = (props) => {
  const { handleSearchChange, searchCountry } = useData();

  return (
    <input
      type='text'
      placeholder='Search for a country'
      {...props}
      value={searchCountry}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
