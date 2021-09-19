import React from 'react';
import faker from 'faker';

import './Chat.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatMessages from '../ChatMessages/ChatMessages';
import contactImageContext from './contactImageContext';

function Chat() {
  return (
    <contactImageContext.Provider value={faker.image.avatar()}>
      <div className="chat">
        <ChatHeader />
        <ChatMessages />
      </div>
    </contactImageContext.Provider>
  );
}

export default Chat;
