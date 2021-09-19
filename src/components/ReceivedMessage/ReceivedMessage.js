import React, { useContext } from 'react';

import './ReceivedMessage.scss';
import contactImageContext from '../Chat/contactImageContext';

function ReceivedMessage({ message }) {
  const contactImage = useContext(contactImageContext);

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
