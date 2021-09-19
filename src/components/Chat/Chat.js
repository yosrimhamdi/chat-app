import React from 'react';
import faker from 'faker';

import './Chat.scss';
import ChatHeader from '../ChatHeader/ChatHeader';
import ChatMessages from '../ChatMessages/ChatMessages';

function Chat() {
  const contactImage = faker.image.avatar();
  return (
    <div className="chat">
      <ChatHeader contactImage={contactImage} />
      <ChatMessages contactImage={contactImage} />
    </div>
  );
}

export default Chat;
