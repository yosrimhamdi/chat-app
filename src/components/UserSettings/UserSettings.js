import React from 'react';
import faker from 'faker';

import './UserSettings.scss';

function UserSettings() {
  return (
    <div className="user-settings">
      <div className="user-settings__user-image-chat-wrapper">
        <img
          className="user-settings__image"
          src={faker.image.avatar()}
          alt="user image"
        />
        <h1 className="user-settings__chat-text">Chats</h1>
      </div>
      <div className="user-settings__icons">
        <i className="fas fa-ellipsis-h"></i>
        <i className="fas fa-video"></i>
        <i className="fas fa-edit"></i>
      </div>
    </div>
  );
}

export default UserSettings;
