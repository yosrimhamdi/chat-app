import React, { useState, useEffect } from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import createTextMessage from '../../firebase/database/message/createTextMessage';
import setLoading from '../../redux/actions/setLoading';
import { SENDING_MESSAGE } from '@types';
import UploadImageModal from '../Modals/UploadImageModal';
import ProgressBar from '../ProgressBar/ProgressBar';
import useModal from '../Modals/Modal/useModal';
import setIsTyping from '../../firebase/database/typing/setIsTyping';
import setIsNotTyping from '../../firebase/database/typing/setIsNotTyping';

const MessageForm = ({
  setLoading,
  isSendingMessage,
  isUploading,
  channelId,
  path,
}) => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!message) {
      setIsNotTyping(channelId);
    }
  }, [message]);

  const onFormSubmit = async () => {
    if (message) {
      setIsNotTyping(channelId);
      setLoading(SENDING_MESSAGE, true);
      setMessage('');
      await createTextMessage(message, path, channelId);
      setLoading(SENDING_MESSAGE, false);
    }
  };

  return (
    <Segment className="messages__form">
      <Form onSubmit={onFormSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Aa"
          style={{ marginBottom: '1em' }}
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={() => setIsTyping(channelId)}
        />
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
            loading={isUploading}
            onClick={openModal}
          />
        </Button.Group>
        <UploadImageModal isModalOpen={isModalOpen} closeModal={closeModal} />
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

export default connect(mapStateToProps, { setLoading })(MessageForm);
