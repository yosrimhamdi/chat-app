import React from 'react';

import './UserMessage.scss';

function UserMessage({ message }) {
  return <div className="user-message">{message}</div>;
}

export default UserMessage;
