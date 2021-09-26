import React from 'react';

const FileInput = ({ input }) => {
  return (
    <input name="file" type="file" accept="image/*" onChange={input.onChange} />
  );
};

export default FileInput;
