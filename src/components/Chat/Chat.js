import React from 'react';

import './Chat.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatMessages from '../ChatMessages/ChatMessages';

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMessages />
    </div>
  );
}

export default Chat;
