import React from 'react';

import './UserMessage.scss';

const UserMessage = ({ message }) => {
  const { content } = message;

  return (
    <div className="user-message">
      <p className="user-message__content">{content}</p>
    </div>
  );
};

export default UserMessage;
