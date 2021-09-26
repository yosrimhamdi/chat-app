import React from 'react';

import './SelfMessage.scss';

const SelfMessage = ({ message }) => {
  const { content } = message;

  return (
    <div className="self-message">
      <p className="self-message__content">{content}</p>
    </div>
  );
};

export default SelfMessage;
