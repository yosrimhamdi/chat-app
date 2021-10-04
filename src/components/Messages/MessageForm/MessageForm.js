import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import validate from './validate';
import createTextMessage from '../../../firebase/database/message/createImageMessage';
import clearForm from '@actions/clearForm';
import setLoading from '../../../redux/actions/setLoading';
import { SENDING_MESSAGE } from '@types';
import UploadImageModal from '../../Modals/UploadImageModal/UploadImageModal';
import ProgressBar from '../../ProgressBar/ProgressBar';
import useModal from '../../Modals/useModal';
import ModalContext from '../../Modals/ModalContext';

const MessageForm = ({
  handleSubmit,
  clearForm,
  setLoading,
  isSendingMessage,
  isUploading,
  channelId,
  path,
}) => {
  const [isModalOpen, openModal, closeModal] = useModal();

  const onFormSubmit = async ({ message }) => {
    setLoading(SENDING_MESSAGE, true);

    clearForm('messageForm');

    await createTextMessage(message, path, channelId);

    setLoading(SENDING_MESSAGE, false);
  };

  return (
    <Segment className="messages__form">
      <Form onSubmit={handleSubmit(onFormSubmit)} autoComplete="off">
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
            disabled={isUploading}
            onClick={openModal}
          />
        </Button.Group>
        <ModalContext.Provider value={{ isModalOpen, closeModal }}>
          <UploadImageModal />
        </ModalContext.Provider>
      </Form>
      <ProgressBar />
    </Segment>
  );
};

const mapStateToProps = ({ loading, channels, messages }) => {
  return {
    isSendingMessage: loading.isSendingMessage,
    isUploading: loading.isUploading,
    channelId: channels.selectedChannel.id,
    path: messages.path,
  };
};

const WrappedForm = reduxForm({ form: 'messageForm', validate })(MessageForm);

export default connect(mapStateToProps, { clearForm, setLoading })(WrappedForm);
