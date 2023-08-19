import React from 'react';
import SearchInput from '../inputs/SearchInput';
import DropdownInput from '../inputs/DropdownInput';
import Icon from '../icon/Icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchNavigation = () => {
  return (
    <div className='fixed top-[7rem] md:h-[6rem] z-20 left-0 right-0 w-full dark:bg-dark-blue-dark-DME shadow-dark-blue-dark-DME'>
      <div className='search-bar max-w-[117rem] h-full w-full md:items-center px-8 py-8 flex flex-col gap-7 items-start lg:mx-auto md:flex-row md:justify-between xl:px-0'>
        <div className='search-group'>
          <Icon iconType={faSearch} className='search-icon' />
          <SearchInput className='search-input' />
        </div>
        <div className='search-group'>
          <DropdownInput />
        </div>
      </div>
    </div>
  );
};

export default SearchNavigation;
