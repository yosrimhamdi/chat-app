import React from 'react';
import { connect } from 'react-redux';

import UserMessage from './UserMessage';
import GuestMessage from './GuestMessage';

const Message = ({ message, authUser, prevMessage }) => {
  const { user } = message;

  if (authUser.uid === user.uid) {
    return <UserMessage message={message} />;
  }
  return <GuestMessage message={message} prevMessage={prevMessage} />;
};

const mapStateToProps = (state) => {
  return { authUser: state.auth.user };
};

export default connect(mapStateToProps)(Message);
