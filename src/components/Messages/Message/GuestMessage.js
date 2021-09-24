import React from 'react';
import classnames from 'classnames';

import MessageAuthor from './MessageAuthor';
import './GuestMessage.scss';

const GuestMessage = ({ message, prevMessage }) => {
  const { type, content, imageURL, user } = message;

  if (type == 'image') {
    return <img src={imageURL} alt="image" className="guest-message__image" />;
  }

  const className = classnames({
    'guest-message': true,
    'guest-message--spaced': message.user.uid != prevMessage.user.uid,
  });

  return (
    <div className={className}>
      <img className="guest-message__user-photo" src={user.photoURL} />
      <div className="guest-message__content-container">
        <p className="guest-message__content">{content}</p>
        <MessageAuthor
          className="guest-message__user-name"
          message={message}
          prevMessage={prevMessage}
        />
      </div>
    </div>
  );
};

export default GuestMessage;
