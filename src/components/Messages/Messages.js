import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm/MessageForm';
import onCollectionChange from '../../firebase/database/onCollectionChange';
import removeListener from '../../firebase/database/removeListener';
import fetchMessages from '@actions/fetchMessages';
import Message from './Message';
import setMessagesDivHeight from '../../redux/actions/setMessagesContainerHeight';

const Messages = ({
  selectedChannelId,
  fetchMessages,
  messages,
  setMessagesDivHeight,
  containerHeight,
}) => {
  const messagesRef = useRef();

  useEffect(() => {
    const handleCollectionChange = snapshot => {
      const messages = Object.values(snapshot.val() || []);

      fetchMessages(messages);
    };

    if (selectedChannelId) {
      onCollectionChange(
        'messages/' + selectedChannelId + '/',
        handleCollectionChange,
      );
    }

    return () => removeListener('messages/' + selectedChannelId + '/');
  }, [selectedChannelId]);

  useEffect(() => {
    messagesRef.current.style.height = `${containerHeight}px`;

    if (containerHeight == 'auto') {
      setMessagesDivHeight(messagesRef.current.offsetHeight);
    }
  }, [containerHeight]);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  });

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
  const { searchTerm, containerHeight, all } = messages;

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
    selectedChannelId: channels.selectedChannel.id,
    messages: filteredMessages,
    containerHeight: containerHeight,
  };
};

export default connect(mapStateToProps, {
  fetchMessages,
  setMessagesDivHeight,
})(Messages);
