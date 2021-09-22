import React from 'react';
import { connect } from 'react-redux';

import './Message.scss';
import MessageAuthor from './MessageAuthor';

const Message = ({ message, authUser, prevMessage }) => {
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
        <MessageAuthor message={message} prevMessage={prevMessage} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { authUser: state.auth.user };
};

export default connect(mapStateToProps)(Message);
