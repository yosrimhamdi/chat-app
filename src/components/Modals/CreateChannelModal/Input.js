import React from 'react';

import Error from './Error/Error';

const Inputs = ({ input, meta, ...rest }) => {
  return (
    <div>
      <input {...input} {...rest} />
      <Error meta={meta} />
    </div>
  );
};

export default Inputs;
