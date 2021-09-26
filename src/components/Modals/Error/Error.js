import React from 'react';

import './Error.scss';

const Error = ({ condition, error }) => {
  if (condition) {
    return <div className="error">{error}</div>;
  }

  return null;
};

export default Error;
