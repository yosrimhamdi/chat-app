import React from 'react';

import './ReceivedMessage.scss';

function ReceivedMessage({ contactImage, message }) {
  return (
    <div className="received-message">
      <img
        src={contactImage}
        alt="contact image"
        className="received-message__contact-photo"
      />
      <p className="received-message__message">{message}</p>
    </div>
  );
}

export default ReceivedMessage;
