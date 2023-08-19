import { useContext, createContext, useState } from 'react';
import Data from '../data/data.json';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [searchCountry, setSearchCountry] = useState('');

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSearchCountry('');
    handleFilteredCountries(region, searchCountry);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchCountry(value);
    handleFilteredCountries(selectedRegion, value);
  };

  const handleFilteredCountries = (region, term) => {
    if (region === 'All') {
      setFilteredCountries(Data);
    } else {
      const filtered = Data.filter(
        (country) =>
          (region === '' || country.region === region) && country.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCountries(filtered);
    }
  };

  const searchedCountry = Data.find((country) => country.name.toLowerCase().includes(searchCountry.toLowerCase()));
  const displayCountries =
    searchedCountry === '' || (selectedRegion === '' && searchCountry === '') ? Data : filteredCountries;

  const searchResultMessage =
    searchCountry && displayCountries.length === 0 ? `No country found for "${searchCountry}"` : '';

  // Data.forEach((country) => {
  //   console.log(country.languages, country.name);
  // });

  return (
    <DataContext.Provider
      value={{
        displayCountries,
        selectedRegion,
        handleRegionChange,
        handleSearchChange,
        searchCountry,
        searchResultMessage,
      }}>
      {children}
    </DataContext.Provider>
  );
};
const useData = () => {
  return useContext(DataContext);
};

export default useData;
