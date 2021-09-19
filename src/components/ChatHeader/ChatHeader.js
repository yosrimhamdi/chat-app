import React from 'react';
import faker from 'faker';

import './ChatHeader.scss';

function ChatHeader({ contactImage }) {
  return (
    <div className="chat-header">
      <div className="chat-header__contact-info">
        <img
          src={contactImage}
          alt="contact image"
          className="chat-header__contact-photo"
        />
        <div>
          <h3 className="contact__name">{faker.name.findName()}</h3>
          <p className="contact__last-message">Active 23 m ago</p>
        </div>
      </div>
      <div className="chat-header__icons">
        <i className="fas fa-phone-alt"></i>
        <i className="fas fa-video"></i>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    </div>
  );
}

export default ChatHeader;
