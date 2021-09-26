import React from 'react';

import './Input.scss';
import Error from '../Error/Error';

const Inputs = ({ input, meta, label, ...rest }) => {
  const { error, visited, active } = meta;

  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input className="input__input" {...input} {...rest} />
      <Error condition={error && visited & !active} error={meta.error} />
    </div>
  );
};

export default Inputs;
