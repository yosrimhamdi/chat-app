import React, { useState, useEffect } from 'react';
import { Input, Segment, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Picker, emojiIndex } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import './MessageForm.scss';
import createTextMessage from '../../../firebase/database/message/createTextMessage';
import setLoading from '../../../redux/actions/setLoading';
import { SENDING_MESSAGE } from '@types';
import UploadImageModal from '../../Modals/UploadImageModal';
import ProgressBar from '../../ProgressBar/ProgressBar';
import useModal from '../../Modals/Modal/useModal';
import setIsTyping from '../../../firebase/database/typing/setIsTyping';
import setIsNotTyping from '../../../firebase/database/typing/setIsNotTyping';

const MessageForm = ({
  setLoading,
  isSendingMessage,
  isUploading,
  channelId,
  path,
}) => {
  const [isModalOpen, openModal, closeModal] = useModal();
  const [message, setMessage] = useState('');
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

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

  const onAddEmojiGButtonClick = () => {
    setIsEmojiPickerVisible(!isEmojiPickerVisible);
  };

  return (
    <Segment>
      <Form className="message-form" onSubmit={onFormSubmit} autoComplete="off">
        {isEmojiPickerVisible && (
          <Picker
            set="apple"
            style={{
              position: 'absolute',
              top: '0',
              transform: 'translateY(-100%)',
            }}
            title="Pick your emoji"
            emoji="point_up"
          />
        )}
        <Input
          fluid
          placeholder="Aa"
          style={{ marginBottom: '0.7em' }}
          label={<Button icon={'add'} onClick={onAddEmojiGButtonClick} />}
          labelPosition="left"
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
