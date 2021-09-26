import React from 'react';

import './Error.scss';

const Error = ({ meta }) => {
  const { error, visited, active } = meta;

  if (error && visited & !active) {
    return <div className="error">{error}</div>;
  }

  return null;
};

export default Error;
