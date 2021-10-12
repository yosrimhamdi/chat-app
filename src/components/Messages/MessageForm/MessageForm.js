import React, { useState, useEffect, useRef } from 'react';
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
  const inputRef = useRef();

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

  const colonToUnicode = message => {
    return message.replace(/:[A-Za-z0-9_+-]+:/g, x => {
      x = x.replace(/:/g, '');
      let emoji = emojiIndex.emojis[x];
      if (typeof emoji !== 'undefined') {
        let unicode = emoji.native;
        if (typeof unicode !== 'undefined') {
          return unicode;
        }
      }
      x = ':' + x + ':';
      return x;
    });
  };

  const onEmojiSelect = emoji => {
    setMessage(colonToUnicode(`${message} ${emoji.colons}`));
    inputRef.current.focus();
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
            onSelect={onEmojiSelect}
            title="Pick your emoji"
            emoji="point_up"
          />
        )}
        <Input
          fluid
          placeholder="Aa"
          style={{ marginBottom: '0.7em' }}
          ref={inputRef}
          label={
            <Button
              icon={isEmojiPickerVisible ? 'close' : 'add'}
              onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}
              type="button"
              style={{ width: 40 }}
            />
          }
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
