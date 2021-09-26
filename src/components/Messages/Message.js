import React from 'react';
import { connect } from 'react-redux';

import SelfMessage from './SelfMessage/SelfMessage';
import GuestMessage from './GuestMessage/GuestMessage';
import ImageMessage from './ImageMessage/ImageMessage';

const Message = ({ message, authUser, prevMessage }) => {
  const { user, type } = message;

  const isSelf = authUser.uid == user.uid;

  if (type == 'image') {
    return <ImageMessage src={message.imageURL} isSelf={isSelf} />;
  }

  if (isSelf) {
    return <SelfMessage message={message} />;
  }

  return <GuestMessage message={message} prevMessage={prevMessage} />;
};

const mapStateToProps = state => {
  return { authUser: state.auth.user };
};

export default connect(mapStateToProps)(Message);
