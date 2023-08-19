import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ iconType, ...rest }) => {
  return <FontAwesomeIcon icon={iconType} {...rest} />;
};

export default Icon;
