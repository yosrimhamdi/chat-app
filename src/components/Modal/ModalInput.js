import React from 'react';
import { Input } from 'semantic-ui-react';

function ModalInput({ input, ...rest }) {
  delete rest.meta;

  return <Input {...input} {...rest} />;
}

export default ModalInput;
