import React from 'react';
import { Form } from 'semantic-ui-react';

function Input({ input, ...others }) {
  delete others.meta;

  return (
    <Form.Input
      fluid
      iconPosition="left"
      placeholder="Email Address"
      {...input}
      {...others}
    />
  );
}

export default Input;
