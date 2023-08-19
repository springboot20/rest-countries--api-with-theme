import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ icon, name, ...rest }) => {
  return (
    <Link {...rest}>
      {icon}
      <span className='dark:text-white text-dark-blue-dark-LMT block text-xl font-semibold'>{name}</span>
    </Link>
  );
};

export default LinkButton;
