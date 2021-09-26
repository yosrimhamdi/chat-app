import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import validate from './validate';
import createTextMessage from '../../../firebase/database/createTextMessage';
import clearForm from '@actions/clearForm';
import setLoading from '../../../redux/actions/setLoading';
import { SENDING_MESSAGE } from '@types';
import UploadImageModal from '../../Modals/UploadImageModal/UploadImageModal';
import ProgressBar from '../../ProgressBar/ProgressBar';
import useModal from '../../Modals/useModal';
import ModalContext from '../../Modals/ModalContext';

const MessageForm = ({
  handleSubmit,
  selectedChannelId,
  clearForm,
  setLoading,
  isSendingMessage,
  isUploading,
}) => {
  const [isModalOpen, openModal, closeModal] = useModal();

  const onFormSubmit = async ({ message }) => {
    setLoading(SENDING_MESSAGE, true);

    clearForm('messageForm');

    await createTextMessage(message, selectedChannelId);

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

const mapStateToProps = ({ channels, loading }) => {
  return {
    selectedChannelId: channels.selectedChannel.id,
    isSendingMessage: loading.isSendingMessage,
    isUploading: loading.isUploading,
  };
};

const WrappedForm = reduxForm({ form: 'messageForm', validate })(MessageForm);

export default connect(mapStateToProps, { clearForm, setLoading })(WrappedForm);
