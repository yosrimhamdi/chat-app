import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm/MessageForm';
import onChildAdded from '../../firebase/database/listeners/onChildAdded';
import removeListener from '../../firebase/database/listeners/removeListener';
import fetchMessages from '@actions/fetchMessages';
import Message from './Message';
import setMessagesDivHeight from '../../redux/actions/setMessagesContainerHeight';
import useAutoBottomScroll from './useAutoBottomScroll';
import readData from '../../firebase/database/readData';
import fetchMessage from '../../redux/actions/fetchMessage';
import setMessagesPath from '@actions/setMessagesPath';
import setUploadPath from '@actions/setUploadPath';
import useSetPaths from './useSetPaths';
import onTyping from '../../firebase/database/listeners/onTyping';
import setTyping from '@actions/setTyping';
import removeTyping from '@actions/removeTyping';
import Typings from './Typings/Typings';

const Messages = ({
  fetchMessage,
  fetchMessages,
  messages,
  setMessagesDivHeight,
  containerHeight,
  path,
  selectedChannel,
  setMessagesPath,
  setUploadPath,
  setTyping,
  removeTyping,
}) => {
  const { id, isPrivate } = selectedChannel;

  const ref = useRef();

  useSetPaths(isPrivate, setMessagesPath, setUploadPath);
  useAutoBottomScroll(ref, containerHeight, setMessagesDivHeight);

  useEffect(() => {
    if (id) {
      onChildAdded(path + id, fetchMessage);

      return () => removeListener(path + id, 'child_added');
    }
  });

  useEffect(() => {
    if (id) {
      onTyping(id, setTyping, removeTyping);

      return () => {
        removeListener(`typing/${id}/`, 'child_added');
        removeListener(`typing/${id}/`, 'child_removed');
      };
    }
  });

  useEffect(() => {
    if (id) {
      readData(path + id, fetchMessages);
    }
  }, [id, path]);

  const renderedMessages = [];

  for (let i = 0; i < messages.length; i++) {
    const message = messages[i];

    renderedMessages[i] = (
      <Message
        key={message.id}
        message={message}
        prevMessage={messages[i - 1] || { user: {} }}
      />
    );
  }

  return (
    <div className="messages">
      <MessagesHeader />
      <div className="messages__messages-container" ref={ref}>
        <div className="messages__messages-wrapper">{renderedMessages}</div>
        <Typings />
      </div>
      <MessageForm />
    </div>
  );
};

const mapStateToProps = ({ messages, loading, channels }) => {
  const { searchTerm, containerHeight, all, path } = messages;

  let filteredMessages = all;

  if (!loading.isSearching && searchTerm) {
    filteredMessages = all.filter(({ content, user }) => {
      return (
        (content && content.includes(searchTerm)) ||
        user.displayName.includes(searchTerm)
      );
    });
  }

  return {
    messages: filteredMessages,
    containerHeight: containerHeight,
    path,
    selectedChannel: channels.selectedChannel,
  };
};

export default connect(mapStateToProps, {
  fetchMessages,
  setMessagesDivHeight,
  fetchMessage,
  setMessagesPath,
  setUploadPath,
  setTyping,
  removeTyping,
})(Messages);
