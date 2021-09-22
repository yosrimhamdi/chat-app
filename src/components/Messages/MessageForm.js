import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import validate from './validate';
import createMessage from '../../firebase/database/createMessage';
import clearForm from '@actions/clearForm';

const MessageForm = ({ handleSubmit, user, selectedChannelId, clearForm }) => {
  const onFormSubmit = ({ message }) => {
    createMessage(message, selectedChannelId, user);
    clearForm('messageForm');
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

export default connect(mapStateToProps, { clearForm })(WrappedForm);
