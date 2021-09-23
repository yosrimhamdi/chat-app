import React from 'react';
import { Input } from 'semantic-ui-react';

function Inputs({ input, ...rest }) {
  delete rest.meta;

  return <Input {...input} {...rest} />;
}

export default Inputs;
