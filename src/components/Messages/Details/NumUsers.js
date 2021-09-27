import React from 'react';
import { connect } from 'react-redux';

const NumUsers = ({ messages, selectedChannel }) => {
  if (selectedChannel.isPrivate) {
    return null;
  }

  const usersIds = messages.reduce((acc, message) => {
    if (!acc.includes(message.user.uid)) {
      acc.push(message.user.uid);
    }

    return acc;
  }, []);

  if (usersIds.length > 1 || !usersIds.length) {
    return <div>{usersIds.length} Users</div>;
  }

  return <div>{usersIds.length} User</div>;
};

const mapStateToProps = state => ({
  messages: state.messages.all,
  selectedChannel: state.channels.selectedChannel,
});

export default connect(mapStateToProps)(NumUsers);
