import React from 'react';
import { Input } from 'semantic-ui-react';

function AddChannelModalInput({ input, ...rest }) {
  delete rest.meta;

  return <Input {...input} {...rest} />;
}

export default AddChannelModalInput;
