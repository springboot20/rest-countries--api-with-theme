import React from 'react';
import CountryCard from '../component/country-card/CountryCard';
import Navbar from '../component/navigation/Navbar';
import useData from '../context/DataContext';
import LinkButton from '../component/icon/LinkButton';
import Icon from '../component/icon/Icon';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Country = () => {
  const { displayCountries } = useData();
  return (
    <>
      <Navbar />
      <section className='relative top-[8rem] h-[calc(100%-8rem)] px-11'>
        <div className='max-w-[120rem] mx-auto'>
          <LinkButton
            className='back-btn flex items-center outline-none rounded-md max-w-fit px-8 py-3 gap-3 dark:bg-very-dark-blue-DMB dark:shadow-gray-900 my-16'
            to='/'
            name={'Back'}
            icon={<Icon iconType={faArrowLeft} className='h-6 text-dark-blue-dark-LMT dark:text-white' />}
          />
          <div className='grid grid-cols-1 lg:grid-cols-4 mt-20 gap-16 items-center'>
            <CountryCard countries={displayCountries} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
