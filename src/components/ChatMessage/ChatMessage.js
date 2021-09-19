import React from 'react';
import ReceivedMessage from '../ReceivedMessage/ReceivedMessage';
import UserMessage from '../UserMessage/UserMessage';

function ChatMessage({ message, received }) {
  if (received) {
    return <ReceivedMessage message={message} />;
  }

  return <UserMessage message={message} />;
}

export default ChatMessage;
