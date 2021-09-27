import React from 'react';

const MessageAuthor = ({ className, message, prevMessage = { user: {} } }) => {
  const { uid, displayName } = message.user;

  if (uid == prevMessage.user.uid) {
    return null;
  }

  const firstName = displayName.split(' ')[0];

  return <p className={className}>{firstName}</p>;
};

export default MessageAuthor;
