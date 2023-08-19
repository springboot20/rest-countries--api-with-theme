import React from 'react';
import useData from '../../context/DataContext';

const DropdownInput = () => {
  const { selectedRegion, handleRegionChange } = useData();

  const regions = [
    { name: 'All', code: 'AL' },
    { name: 'Africa', code: 'AF' },
    { name: 'Americas', code: 'AM' },
    { name: 'Antarctic Ocean', code: 'AN' },
    { name: 'Asia', code: 'AS' },
    { name: 'Europe', code: 'EU' },
    { name: 'Oceania', code: 'OC' },
    { name: 'Polar', code: 'PO' },
  ];

  return (
    <select value={selectedRegion} onChange={handleRegionChange} placeholder='Filter by Region'>
      {regions
        .map((region) => (
          <option key={region.name} value={region.name}>
            {region.name}
          </option>
        ))
        .sort((a, b) => a - b)}
    </select>
  );
};

export default DropdownInput;
