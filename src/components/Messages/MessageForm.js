import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import validate from './validate';

const MessageForm = ({ handleSubmit, user, selectedChannelId }) => {
  const onFormSubmit = ({ message }) => {
    console.log(message);
    console.log(user);
    console.log(selectedChannelId);
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

const mapStateToProps = ({ auth, channels }) => {
  const { selectedChannel } = channels;

  return {
    user: auth.user,
    selectedChannelId: selectedChannel ? selectedChannel.id : null,
  };
};

const WrappedForm = reduxForm({ form: 'messageForm', validate })(MessageForm);

export default connect(mapStateToProps)(WrappedForm);
