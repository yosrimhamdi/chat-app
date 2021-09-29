import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm/MessageForm';
import onCollectionChange from '../../firebase/database/onCollectionChange';
import removeCollectionListener from '../../firebase/database/removeCollectionListener';
import fetchMessages from '@actions/fetchMessages';
import Message from './Message';
import setMessagesDivHeight from '../../redux/actions/setMessagesContainerHeight';
import setMessagesPath from '../../redux/actions/setMessagesPath';
import useAutoBottomScroll from './useAutoBottomScroll';

const Messages = ({
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
    const handleCollectionChange = snapshot => {
      const messages = Object.values(snapshot.val() || []);

      fetchMessages(messages);
    };

    if (messagesPath) {
      onCollectionChange(messagesPath, handleCollectionChange);

      return () => removeCollectionListener(messagesPath);
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
})(Messages);
