import React from 'react';
import { Input } from 'semantic-ui-react';

const FileInput = ({ input, meta }) => {
  const { error, submitFailed } = meta;

  if (error && submitFailed) {
    console.log(error);
  }

  return (
    <Input
      name="file"
      type="file"
      label="File type; jpg, png"
      accept="image/*"
      fluid
      onChange={input.onChange}
    />
  );
};

export default FileInput;
