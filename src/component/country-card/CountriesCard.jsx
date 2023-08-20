import React from 'react';
import PropType from 'prop-types';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import flag from "./flag.svg"

function formatCountryPopulation(population) {
  return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CountriesCard = ({ data }) => {
  return (
    <motion.div
      layout
      className='card flex flex-col flex-shrink-0 flex-grow-0 basis-[300px] max-w-full rounded-xl bg-white dark:bg-dark-blue-dark-DME overflow-hidden hover:scale-105 transition-all'>
      <div className='relative'>
        <img src={data.flag} alt='' className='object-cover no-repeat w-full h-[16rem]' />
      </div>
      <div className='p-8'>
        <NavLink to={`/${data.name}`} className='card-title dark:text-white text-2xl font-semibold hover:underline'>
          {data.name}
        </NavLink>
        <p className='card-population font-semibold dark:text-white'>
          Population:{' '}
          <span className='text-dark-blue-dark-LMT dark:text-white font-normal'>
            {formatCountryPopulation(data.population)}
          </span>
        </p>
        <p className='font-semibold dark:text-white'>
          Region: <span className='font-normal dark:to-dark-gray-LMT'>{data.region}</span>
        </p>
        <p className='font-semibold dark:text-white'>
          Capital: <span className='font-normal dark:to-dark-gray-LMT'>{data.capital}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default CountriesCard;

CountriesCard.prototype = {
  data: PropType.object,
};
