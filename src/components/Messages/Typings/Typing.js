import React from 'react';

import './Typing.scss';

const Typing = ({ typing }) => {
  return (
    <div className="typing">
      <img className="typing__user" src={typing.photoURL} />
      <div className="typing__dots-container">
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
        <div className="typing__dot"></div>
      </div>
    </div>
  );
};

export default Typing;
