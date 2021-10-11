import React from 'react';

import './Typing.scss';

const Typing = () => {
  return (
    <div className="typing">
      <img
        className="typing__user"
        src="https://firebasestorage.googleapis.com/v0/b/chat-app-41bde.appspot.com/o/photos%2Fusers%2FykYiEEsK0AdLprbLfhIcDUrIMIh1%2Fdefault.svg?alt=media&token=2b3b0980-8aa4-48c5-9f4b-ceb708f84743"
      />
      <div className="typing__dots-container">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div>
    </div>
  );
};

export default Typing;
