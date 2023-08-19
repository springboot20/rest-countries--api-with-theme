import React from 'react';
import Button from '../icon/Button';
import Icon from '../icon/Icon';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };
  return (
    <div className='z-40 fixed bottom-7 left-2/4 rounded-lg bg-white shadow-md dark:bg-dark-blue-dark-DME mx-auto -translate-x-2/4'>
      <div className='flex items-center lg:px-4 py-2 rounded-md gap-[0.15rem] lg:gap-4'>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          className={'flex items-center gap-5 border-r-[1px] border-gray-900/75 p-2 cursor-pointer'}>
          <Icon iconType={faArrowLeft} className={'h-6 text-dark-blue-dark-LMT hidden md:block dark:text-white'} />
          <span className='text-md md:text-xl font-semibold block dark:text-white'>Previous</span>
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`p-[0.30rem] sm:p-[0.55rem] lg:p-3 h-full block font-semibold text-lg cursor-pointer rounded-md transition-all ${
              currentPage === index + 1 ? 'text-blue-700 bg-gray-300' : 'text-gray-500 dark:text-white'
            }`}>
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          className={'flex items-center gap-3 border-l-[1px] border-gray-900/75 p-2 cursor-pointer'}>
          <span className='text-md md:text-xl font-semibold block dark:text-white'>Next</span>
          <Icon iconType={faArrowRight} className={'h-6 text-dark-blue-dark-LMT dark:text-white hidden md:block'} />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;

Pagination.prototype = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
};
  // const displayCountries = searchedCountry
  //   ? [searchedCountry]
  //   : selectedRegion === '' && searchCountry === ''
  //   ? Data
  //   : filteredCountries;