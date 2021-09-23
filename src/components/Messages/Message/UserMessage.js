import React from 'react';

import './UserMessage.scss';

const UserMessage = ({ message }) => {
  const { type, content, imageURL } = message;

  if (type == 'image') {
    return <img src={imageURL} alt="image" className="user-message__image" />;
  }

  return (
    <div className="user-message">
      <p className="user-message__content">{content}</p>
    </div>
  );
};

export default UserMessage;
