import React from 'react';
import ReceivedMessage from '../ReceivedMessage/ReceivedMessage';
import UserMessage from '../UserMessage/UserMessage';

function ChatMessage({ message, contactImage, received }) {
  if (received) {
    return <ReceivedMessage message={message} contactImage={contactImage} />;
  }

  return <UserMessage message={message} />;
}

export default ChatMessage;
