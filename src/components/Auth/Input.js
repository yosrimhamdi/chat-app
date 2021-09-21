import React from 'react';
import { Form } from 'semantic-ui-react';

function Input({ input, meta, ...rest }) {
  const { error, touched, active } = meta;
  let err;

  if (error && touched && !active) {
    err = {
      content: error,
      pointing: 'below',
    };
  }

  return (
    <Form.Input fluid iconPosition="left" error={err} {...input} {...rest} />
  );
}

export default Input;
