import React, { useState } from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import validate from './validate';
import createMessage from '../../firebase/database/createMessage';
import clearForm from '@actions/clearForm';
import setLoading from '../../redux/actions/setLoading';
import { SENDING_MESSAGE } from '@types';
import UploadFileModal from './UploadFileModal';

const MessageForm = ({
  handleSubmit,
  user,
  selectedChannelId,
  clearForm,
  setLoading,
  isSendingMessage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = async ({ message }) => {
    setLoading(SENDING_MESSAGE, true);

    clearForm('messageForm');

    await createMessage(message, selectedChannelId, user);

    setLoading(SENDING_MESSAGE, false);
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
            disabled={isSendingMessage}
            className={isSendingMessage ? 'loading' : ''}
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
            type="button"
            onClick={() => setIsModalOpen(true)}
          />
        </Button.Group>
        <UploadFileModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </Form>
    </Segment>
  );
};

const mapStateToProps = ({ auth, channels, loading }) => {
  return {
    user: auth.user,
    selectedChannelId: channels.selectedChannel.id,
    isSendingMessage: loading.isSendingMessage,
  };
};

const WrappedForm = reduxForm({ form: 'messageForm', validate })(MessageForm);

export default connect(mapStateToProps, { clearForm, setLoading })(WrappedForm);
