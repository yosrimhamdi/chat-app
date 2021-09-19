import React from 'react';

import './AddMessageInput.scss';

function ChatInput() {
  return (
    <div className="add-message-input">
      <input
        type="text"
        className="add-message-input__input"
        placeholder="Aa"
      />
    </div>
  );
}

export default ChatInput;
