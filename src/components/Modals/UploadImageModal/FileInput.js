import React from 'react';

import './FileInput.scss';
import Error from '../Error/Error';

const FileInput = ({ input, meta }) => {
  return (
    <div className="file-input">
      <input
        className="file-input__input"
        name="file"
        type="file"
        accept="image/*"
        onChange={input.onChange}
      />
      <Error condition={meta.error} error={meta.error} />
    </div>
  );
};

export default FileInput;
