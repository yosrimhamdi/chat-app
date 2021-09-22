import React from 'react';
import { Segment, Comment } from 'semantic-ui-react';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

const Messages = () => {
  return (
    <div className="messages">
      <MessagesHeader />

      <Segment className="messages__messages-container">
        <Comment.Group></Comment.Group>
      </Segment>

      <MessageForm />
    </div>
  );
};

export default Messages;
