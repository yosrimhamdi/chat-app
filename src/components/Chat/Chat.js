import React from 'react';
import faker from 'faker';

import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatMessages from './ChatMessages/ChatMessages';
import contactImageContext from './contactImageContext';
import AddMessageInput from './AddMessageInput/AddMessageInput';

function Chat() {
  return (
    <div className="chat">
      <contactImageContext.Provider value={faker.image.avatar()}>
        <ChatHeader />
        <ChatMessages />
      </contactImageContext.Provider>
      <AddMessageInput />
    </div>
  );
}

export default Chat;
