import React, { useEffect } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';
import onCollectionChange from '../../firebase/database/onCollectionChange';
import removeListener from '../../firebase/database/removeListener';
import fetchMessages from '@actions/fetchMessages';
import Message from './Message';

const Messages = ({ selectedChannelId, fetchMessages, messages }) => {
  useEffect(() => {
    if (selectedChannelId) {
      onCollectionChange('messages/' + selectedChannelId + '/', fetchMessages);
    }

    return () => removeListener('messages/' + selectedChannelId + '/');
  }, [selectedChannelId]);

  const renderedMessages = messages.map(message => (
    <Message key={message.id} message={message} />
  ));

  return (
    <div className="messages">
      <MessagesHeader />
      <Segment className="messages__messages-container">
        <Comment.Group>{renderedMessages}</Comment.Group>
      </Segment>
      <MessageForm />
    </div>
  );
};

const mapStateToProps = ({ channels, messages }) => {
  return {
    selectedChannelId: channels.selectedChannel.id,
    messages,
  };
};

export default connect(mapStateToProps, { fetchMessages })(Messages);
