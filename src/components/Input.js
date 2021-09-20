import React from 'react';
import { Form } from 'semantic-ui-react';

function Input({ input, meta, ...others }) {
  const { error, submitFailed, active } = meta;

  if (error && submitFailed && !active) {
    return (
      <Form.Input
        fluid
        iconPosition="left"
        placeholder="Email Address"
        {...input}
        {...others}
        error={{
          content: error,
          pointing: 'below',
        }}
      />
    );
  }

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
