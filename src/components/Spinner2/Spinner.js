import React from 'react';

import spinnerIcon from './spinner.svg';
import './Spinner.scss';

const Spinner = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="spinner spinner--on-content">
      <img src={spinnerIcon} className="spinner__circle" alt="loading..." />
    </div>
  );
};

export default Spinner;
