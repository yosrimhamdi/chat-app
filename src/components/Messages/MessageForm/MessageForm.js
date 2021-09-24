import React, { useState } from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import validate from './validate';
import createMessage from '../../../firebase/database/createTextMessage';
import clearForm from '@actions/clearForm';
import setLoading from '../../../redux/actions/setLoading';
import { SENDING_MESSAGE } from '@types';
import UploadImageModal from '../../Modals/UploadImageModal/UploadImageModal';
import ProgressBar from '../../ProgressBar/ProgressBar';

const MessageForm = ({
  handleSubmit,
  user,
  selectedChannelId,
  clearForm,
  setLoading,
  isSendingMessage,
  isUploading,
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
            loading={isSendingMessage}
          />
          <Button
            color="teal"
            content="Upload Media"
            labelPosition="right"
            icon="cloud upload"
            type="button"
            loading={isUploading}
            disabled={isUploading}
            onClick={() => setIsModalOpen(true)}
          />
        </Button.Group>
        <UploadImageModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </Form>
      <ProgressBar />
    </Segment>
  );
};

const mapStateToProps = ({ auth, channels, loading }) => {
  return {
    user: auth.user,
    selectedChannelId: channels.selectedChannel.id,
    isSendingMessage: loading.isSendingMessage,
    isUploading: loading.isUploading,
  };
};

const WrappedForm = reduxForm({ form: 'messageForm', validate })(MessageForm);

export default connect(mapStateToProps, { clearForm, setLoading })(WrappedForm);
