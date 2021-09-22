import React, { useEffect } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import './Messages.scss';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';
import onCollectionChange from '../../firebase/database/onCollectionChange';
import { FETCH_COMMENTS } from '../../redux/actions/types';

const Messages = ({ onCollectionChange, selectedChannelId }) => {
  useEffect(() => {
    if (selectedChannelId) {
      onCollectionChange('messages/' + selectedChannelId + '/', FETCH_COMMENTS);
    }
  }, [selectedChannelId]);

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

const mapStateToProps = ({ channels }) => {
  const { selectedChannel } = channels;

  return {
    selectedChannelId: selectedChannel ? selectedChannel.id : null,
  };
};

export default connect(mapStateToProps, { onCollectionChange })(Messages);
