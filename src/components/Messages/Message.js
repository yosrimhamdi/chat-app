import React from 'react';
import { connect } from 'react-redux';

import './Message.scss';

const Message = ({ message, authUser }) => {
  const { content, user } = message;

  if (authUser.uid === user.uid) {
    return (
      <div className="message message--left">
        <p className="message__content message__content--blue">{content}</p>
      </div>
    );
  }
  return (
    <div className="message">
      <img className="message__user-photo" src={user.photoURL} />
      <div className="message__content-container">
        <p className="message__content">{content}</p>
        <p className="message__user-name">{user.displayName}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { authUser: state.auth.user };
};

export default connect(mapStateToProps)(Message);
