import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm/MessageForm';
import onChildAdded from '../../firebase/database/onChildAdded';
import removeListener from '../../firebase/database/removeListener';
import fetchMessages from '@actions/fetchMessages';
import Message from './Message';
import setMessagesDivHeight from '../../redux/actions/setMessagesContainerHeight';
import setMessagesPath from '../../redux/actions/setMessagesPath';
import useAutoBottomScroll from './useAutoBottomScroll';
import readData from '../../firebase/database/readData';
import fetchMessage from '../../redux/actions/fetchMessage';

const Messages = ({
  fetchMessage,
  setMessagesPath,
  selectedChannel,
  fetchMessages,
  messages,
  setMessagesDivHeight,
  containerHeight,
  messagesPath,
}) => {
  const { id, isPrivate } = selectedChannel;

  useEffect(() => {
    if (messagesPath) {
      onChildAdded(messagesPath, fetchMessage);

      return () => removeListener(messagesPath);
    }
  }, [onChildAdded, messagesPath]);

  useEffect(() => {
    if (messagesPath) {
      readData(messagesPath, fetchMessages);
    }
  }, [messagesPath]);

  useEffect(() => {
    if (id) {
      let path = 'messages/public/' + id + '/';

      if (isPrivate) {
        path = 'messages/private/' + id + '/';
      }

      setMessagesPath(path);
    }
  }, [selectedChannel]);

  const messagesRef = useAutoBottomScroll(
    containerHeight,
    setMessagesDivHeight,
  );

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
      <div className="messages__messages-container" ref={messagesRef}>
        <div className="messages__messages-wrapper">{renderedMessages}</div>
      </div>
      <MessageForm />
    </div>
  );
};

const mapStateToProps = ({ channels, messages, loading }) => {
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
    selectedChannel: channels.selectedChannel,
    messages: filteredMessages,
    messagesPath: path,
    containerHeight: containerHeight,
  };
};

export default connect(mapStateToProps, {
  fetchMessages,
  setMessagesDivHeight,
  setMessagesPath,
  fetchMessage,
})(Messages);
