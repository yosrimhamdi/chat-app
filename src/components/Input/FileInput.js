import React from 'react';

import './Input.scss';
import Error from './Error/Error';

const FileInput = ({ input, meta, label }) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        className="input__input"
        name="file"
        type="file"
        accept="image/*"
        onChange={input.onChange}
      />
      <Error meta={meta} />
    </div>
  );
};

export default FileInput;
