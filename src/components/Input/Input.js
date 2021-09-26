import React from 'react';

import './Input.scss';
import Error from './Error/Error';

const Inputs = ({ input, meta, label, ...rest }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" {...input} {...rest} />
      <Error meta={meta} />
    </div>
  );
};

export default Inputs;
