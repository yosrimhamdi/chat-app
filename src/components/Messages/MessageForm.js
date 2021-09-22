import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import MessageInput from './MessageInput';

const MessageForm = ({ handleSubmit }) => {
  const onFormSubmit = ({ message }) => {
    console.log(message);
  };

  return (
    <Segment className="messages__form">
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Field name="message" component={MessageInput} />
        <Button.Group icon widths="2">
          <Button
            color="orange"
            content="Add Reply"
            labelPosition="left"
            icon="edit"
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
          />
        </Button.Group>
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: 'messageForm' })(MessageForm);
