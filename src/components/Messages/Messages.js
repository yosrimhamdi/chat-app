import React from 'react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm/MessageForm';
import Message from './Message';
import setMessagesDivHeight from '../../redux/actions/setMessagesContainerHeight';
import setMessagesPath from '../../redux/actions/setMessagesPath';
import useAutoBottomScroll from './useAutoBottomScroll';

const Messages = ({ messages, setMessagesDivHeight, containerHeight }) => {
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

const mapStateToProps = ({ messages, loading }) => {
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
    messages: filteredMessages,
    containerHeight: containerHeight,
  };
};

export default connect(mapStateToProps, {
  setMessagesDivHeight,
  setMessagesPath,
})(Messages);
